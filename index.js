const noBtn = document.querySelector('#noBtn');

const yesBtn = document.querySelector('#yesBtn');

function getRandomSize(min, max) {
  return Math.random() * (max - min) + min;
}
yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si, ya hay que noviar ;*')
});
noBtn.addEventListener('mouseover', function () {
  // Change position
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  noBtn.style.setProperty('top', randomY + '%');
  noBtn.style.setProperty('left', randomX + '%');
  noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);

  // Change size
  const newSize = getRandomSize(0.5, 1.5);
  noBtn.style.fontSize = newSize + 'em';

  // Grow yesBtn
  yesBtn.style.fontSize = '3em';
});

noBtn.addEventListener('mouseout', function () {
  // Reset size
  noBtn.style.fontSize = '1em';
 
});