// api/resume-analyzer.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { resumeText } = req.body;

  const prompt = `
You are an AI resume reviewer.

Given the following resume text, return a JSON with:
1. "Resume Score" (0–100)
2. "Matched Keywords" (relevant to tech job search)
3. "Suggestions for improvement"

Resume:
${resumeText}
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const aiMessage = data.choices[0]?.message?.content;

    res.status(200).json({ result: aiMessage });
  } catch (err) {
    console.error("Resume AI error:", err);
    res.status(500).json({ error: "Error analyzing resume" });
  }
};
