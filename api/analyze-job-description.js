// api/job-analyzer.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { jobDescription, resumeText, skills, projects } = req.body;

  const prompt = `
You are a resume/job fit evaluator AI.
Compare the following job description to this candidate's resume, skills, and projects.

Return a JSON with:
1. Match Score (0–100)
2. Key matching skills
3. Missing but important skills
4. Suggestions for improvement

Job Description:
${jobDescription}

Candidate Resume Text:
${resumeText}

Candidate Skills:
${skills.join(", ")}

Candidate Projects:
${projects.join(", ")}
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
    console.error("AI job analyzer error:", err);
    res.status(500).json({ error: "Error generating analysis" });
  }
};
