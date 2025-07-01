export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { resumeText } = req.body;

  const prompt = `
You are a resume review assistant.
Analyze the following resume text and return JSON with:
1. Resume Score (0-100)
2. Matched Keywords
3. Suggestions for improvement

Resume Text:
${resumeText}
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.portfolioai1}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const json = await response.json();
    const result = json.choices?.[0]?.message?.content;

    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ error: "AI request failed" });
  }
}
