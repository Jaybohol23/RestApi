const axios = require('axios');

exports.name = "/downloader"; exports.index =  async function (req, res) {
  const link = req.query.url;
  if(!link) {
  res.json({error: "missing palameter url!!"})
return;
  }

  const options = {
    method: 'POST',
    url: 'https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ec4a07939fmsh4daed89d45e8bccp165f71jsn06c493b781a9',
      'X-RapidAPI-Host': 'social-download-all-in-one.p.rapidapi.com'
    },
    data: {
      url: link
    }
  };

  try {
    const response = await axios.request(options);
    const url = response.data.medias[0].url;
const username = response.data.author;
const title = response.data.title;
    res.json({url: url, username: username, title: title});
    console.log(response.data);
  } catch (error) {
    res.json({error: error});
    console.error(error);
  }
};