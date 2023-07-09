window.addEventListener('keydown', playSound);
function playSound (e) {
	const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
	const key = document.querySelector(`.key[id="${e.keyCode}"]`)
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('play');
}
const keys = document.querySelectorAll('.key');
function removeTransition(e) {
if (e.propertyName !== 'transform') return;
this.classList.remove('play');
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));