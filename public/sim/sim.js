const path = require("path");
const fs = require("fs");
const axios = require("axios");

exports.name = "/sim"; 
exports.index = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "data/sim.json");
    const data = JSON.parse(fs.readFileSync(filePath));
    const query = req.query.ask.toLowerCase();
    const lang = req.query.lang;

    if (!lang) {
      return res.json({ error: "Please provide a language code (e.g., /sim?ask=hello&lang=en)" });
    }

    if (data.hasOwnProperty(query)) {
      const randomIndex = Math.floor(Math.random() * data[query].length);
      const responseData = data[query][randomIndex];

      const response = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(responseData)}`);
      const translatedResponse = response.data[0][0][0];

      return res.json({ respond: translatedResponse });
    }

    return res.json({ respond: "I don't understand what you're saying, please teach me." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ respond: "Internal Server Error" });
  }
};