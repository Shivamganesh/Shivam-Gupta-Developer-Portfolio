export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { resumeText } = req.body;

  const prompt = `
Analyze the resume text and return a JSON with:
1. "Resume Score"
2. "Matched Keywords"
3. "Suggestions for improvement"

Resume:
${resumeText}
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
    const aiResponse = data.choices?.[0]?.message?.content;

    // Try parsing the response
    let parsed;
    try {
      parsed = JSON.parse(aiResponse);
    } catch (err) {
      console.error("Invalid JSON from OpenAI:", aiResponse);
      return res.status(500).json({ error: "AI response was not valid JSON", raw: aiResponse });
    }

    res.status(200).json({ result: parsed });
  } catch (error) {
    console.error("AI Resume Analyzer Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
