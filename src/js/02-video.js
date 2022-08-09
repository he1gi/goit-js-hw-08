import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setCurrentTime = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', setCurrentTime);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
