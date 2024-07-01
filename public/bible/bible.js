const axios = require('axios');


exports.name = '/bible'; exports.index =  async (req, res) => {
  try {
    const response = await axios.get("https://labs.bible.org/api/?passage=random&type=json");
    const verseText = response.data[0].text;
    res.json({ eugene: verseText });
  } catch (error) {
    console.error("Error fetching verse:", error);
    res.status(500).json({ error: "Failed to fetch verse" });
  }
};