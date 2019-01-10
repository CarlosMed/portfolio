const contentful = require('contentful');

export const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

export const randomColor = () => {
  fetch('http://www.colr.org/json/color/random')
    .then(res => res.json())
    .then(color => color.colors[0].hex)
    .catch(err => console.log(err));
};
