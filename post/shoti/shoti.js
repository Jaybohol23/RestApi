const axios = require("axios");


exports.name = "/shoti";
exports.index = async (req, res) => {
  try {
    const key = ["eugeneaguilar89", "eurixhiyoshi01", "omsimnida", "mamaw"];
    const { apikey } = req.body;

    if (!apikey || !key.includes(apikey)) {
      return res.status(400).send({
        error: "Invalid apikey. Contact: https://www.facebook.com/eurix.91 to get the apikey!!",
      });
    }

    const response = await axios.post(
      `https://shoti-srv1.onrender.com/api/v1/get`,
      { apikey: "$shoti-1hnmk903v8bod9kt9sg" }
    );
var username = response.data.data.user.username;
var nickname = response.data.data.user.nickname;
var title = response.data.data.title;
var url = response.data.data.url;
    res.json({url: url, username: username, nickname: nickname, title: title});
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  res.json({error: "error fetching shoti!!??"});
  }
};