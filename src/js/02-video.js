import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const setCurrentTime = throttle(data => {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// }, 1000);

// player.on('timeupdate', data => {
//   setCurrentTime(data);
// });

// player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);

const actualTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(actualTime)
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
