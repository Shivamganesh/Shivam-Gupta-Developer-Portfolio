// /api/resume-analyzer.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { resumeText } = req.body;

  const prompt = `
Only return a strict JSON like this (no explanation, no markdown):

{
  "Resume Score": number (0-100),
  "Matched Keywords": [string],
  "Suggestions for improvement": [string]
}

Resume:
${resumeText.slice(0, 3500)}
`;

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await openaiRes.json();
    const aiContent = data.choices?.[0]?.message?.content;

    let parsed;
    try {
      parsed = JSON.parse(aiContent);
    } catch (err) {
      console.error("Invalid JSON from OpenAI:", aiContent);
      return res.status(500).json({
        error: "AI response was not valid JSON",
        raw: aiContent,
      });
    }

    return res.status(200).json({ result: parsed });
  } catch (error) {
    console.error("Resume API Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
