const tweetModal = document.getElementById('tweet-modal');
const tweetModalExit = document.getElementById('tweet-modal-exit');
const tweetSidebarButton = document.getElementById('tweet-sidebar-button');
const tweetInput = document.getElementById('tweet-component').getElementsByTagName('textarea')[0];
const tweetInputFloated = tweetModal.getElementsByTagName('textarea')[0];

const exploreModal = document.getElementById('explore-modal');
const exploreButton = document.getElementById('explore');
const exploreModalExit = document.getElementById('explore-modal-exit');

const searchButton = document.getElementById('search-button');

tweetSidebarButton.addEventListener('click', () => {
  tweetModal.classList.remove('hidden');
});

tweetModalExit.addEventListener('click', () => {
  tweetModal.classList.add('hidden');
});

tweetInput.addEventListener('focus', () => {
  tweetInput.classList.add('border-b-2');
});

tweetInputFloated.addEventListener('focus', () => {
  tweetInputFloated.classList.add('border-b-2');
});

exploreButton.addEventListener('click', () => {
  if (window.innerWidth < 1024) {
    exploreModal.classList.remove('hidden');
  } else {
    searchButton.focus();
  }
});

exploreModalExit.addEventListener('click', () => {
  exploreModal.classList.add('hidden');
});