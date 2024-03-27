const express = require('express');
const app = express();
const ejs = require('ejs');
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('homepage.html',{ root: __dirname });
});

app.get('/.well-known/assetlinks.json', (req, res) => {
  res.sendFile('.well-known/assetlinks.json',{ root: __dirname });
});

app.get('/reel', (req, res) => {
  const username = req.query.param1;
  const audio = req.query.param2;
  const videoUrl = req.query.param3;
  const title = req.query.param4;
  const postOn = req.query.param5;
  const likes = req.query.param6;
  const comments = req.query.param7;

  app.get('/username/audio/videoUrl/title/postOn/', (reqNested, resNested) => {
    resNested.render('distance', { un: username, aud: audio, vu: videoUrl, t: title, p:postOn, l:likes, c: comments});
  });
});

app.get('/video', (req, res) => {
  const videoId = req.query.position;
  const videoDetails = {
    id: videoId, 
    url: `https://mydiatance.in/video/${videoId}`
  };
  res.json(videoDetails);
});

app.get('/user', (req, res) => {
  const userId = req.query.Id;
  const userDetails = {
    id: userId, 
    url: `https://mydiatance.in/user/${userId}`
  };
  res.render('redirect', { videoDetails });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

