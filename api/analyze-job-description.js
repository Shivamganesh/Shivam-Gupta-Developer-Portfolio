export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { jobDescription, resumeText, skills, projects } = req.body;

  const prompt = `
You are an AI job matching assistant.
Compare the job description to this candidate's resume, skills, and projects.
Return JSON with:
1. Match Score (0-100)
2. Missing but important skills
3. Suggestions for improvement

Job Description:
${jobDescription}

Candidate Resume:
${resumeText}

Skills:
${skills.join(", ")}

Projects:
${projects.join(", ")}
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
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

    const json = await response.json();
    const result = json.choices?.[0]?.message?.content;

    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ error: "AI request failed" });
  }
}
