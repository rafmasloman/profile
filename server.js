const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(
  '/css',
  express.static(path.join(__dirname, 'public/bootstrap-5.2.0-dist/css')),
);

app.use(
  '/js',
  express.static(path.join(__dirname, 'public/bootstrap-5.2.0-dist/js')),
);

const data = {
  profile: { firstName: 'Rafly', lastName: 'Masloman' },
  summary:
    'Computer Science Student in Hasanuddin University, Well-Versed in Software Development such as Front End, Back End, and Cloud Computing',
  medsos: {
    instagram: 'https://instagram.com/rafmasloman_',
    linkedlin: 'https://linkedin.com/in/rafly-ramdhani-putra-masloman/',
  },
  biodata: {
    email: 'raflymasloman20@gmail.com',
    age: 21,
    skills: ['Front End', 'Back End'],
    phone: '+6281342777362',
  },
  about: {
    title: 'Web & Cloud eunthusiast',
    desc: 'I have experience on development back end and cloud management using Google Cloud Platform and JavaScript, I design database and build RESTful APIs for product-based final project in Bangkit Academy. I love to learn, exploring, and improve my skills so it could be implemented in the next project',
  },
  image: {
    hero: {
      link: 'https://storage.googleapis.com/myporto_bucket/hero.png',
    },
    illustration: [
      {
        link: 'https://storage.googleapis.com/myporto_bucket/google.png',
        class: 'google-icon',
        alt: 'Google',
      },
      {
        link: 'https://storage.googleapis.com/myporto_bucket/chat.png',
        class: 'chat-icon',
        alt: 'Chat',
      },
      {
        link: 'https://storage.googleapis.com/myporto_bucket/ui.png',
        class: 'dribbble-icon',
        alt: 'UI',
      },
      {
        link: 'https://storage.googleapis.com/myporto_bucket/web.png',
        class: 'web-icon',
        alt: 'Web',
      },
    ],
    socialMedia: [
      {
        imgLink: 'https://storage.googleapis.com/myporto_bucket/instagram.svg',
        link: 'https://instagram.com/rafmasloman_',
        alt: 'Instagram',
      },
      {
        imgLink: 'https://storage.googleapis.com/myporto_bucket/linkedlin.svg',
        link: 'https://linkedin.com/in/rafly-ramdhani-putra-masloman/',
        alt: 'Linkedin',
      },
    ],
  },
};

app.get('/', (req, res) => {
  res.render('index', data);
});

app.listen(3000, () => {
  console.log('server running');
  console.log(__dirname);
});
