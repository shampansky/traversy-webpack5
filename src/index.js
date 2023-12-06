import generatePost from './generatePost.js';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const PostBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', generatePost);

generatePost();
