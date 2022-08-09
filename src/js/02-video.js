import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setCurrentTime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

player.on('timeupdate', throttle(setCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
