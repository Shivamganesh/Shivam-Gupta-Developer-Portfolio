export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed." });
  }

  const { resumeText } = req.body;

  const prompt = `
You are a strict JSON-only AI Resume Reviewer.

Given the resume below, respond ONLY with a valid JSON object like this:
{
  "Resume Score": 75,
  "Matched Keywords": ["React.js", "Node.js", "MongoDB"],
  "Suggestions for improvement": ["Add more backend projects", "Include measurable achievements"]
}

Do NOT include explanations, introductions, or extra text. Only output a JSON object.

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

    const aiResponse = data.choices?.[0]?.message?.content?.trim();

    console.log("🔍 Raw AI Response:", aiResponse); // for debugging

    // Try parsing the JSON safely
    let parsed;
    try {
      parsed = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error("❌ Failed to parse AI JSON:", parseError);
      return res
        .status(500)
        .json({ error: "AI response was not valid JSON", raw: aiResponse });
    }

    // Success
    res.status(200).json({ result: parsed });
  } catch (error) {
    console.error("🔥 AI Resume Analyzer Server Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
