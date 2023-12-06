import axios from 'axios';

function generatePost() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  axios
    .get('https://jsonplaceholder.typicode.com/posts', config)
    .then((res) => {
      const postNumber = Math.floor(Math.random() * 11);
      document.getElementById('post').innerHTML = res.data[postNumber].body;
    });
}

export default generatePost;
