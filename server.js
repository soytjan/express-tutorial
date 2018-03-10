const express = require('express');
const app = express();
const user = require('./data.json');

// middleware functions
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'))

// route handler functions
app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/json', (request, response) => {
  response.status(200).json(user)
})

app.get('/sunsets', (request, response) => {
  response.send('<img src="http://www.beach-backgrounds.com/wallpapers/thumbnails/the-fading-sunlight-on-the-sunset-wallpaper-1008x380-385.jpg" alt="sunsets" /><img src="https://static.pexels.com/photos/417142/pexels-photo-417142.jpeg" alt="sunset shit" />')
})

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});
