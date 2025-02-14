const { Hercai } = require("hercai");

const herc = new Hercai();

exports.name = '/hercai';
exports.index = async (req, res) => {
  const ask = req.query.ask.toLowerCase();

  if (!ask) {
    return res.status(400).json({ error: "/hercai?ask=your ask" });
  }

  try {
    const response = await herc.question({ model: "v1", content: ask });
    return res.json({ answer: response.reply });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};