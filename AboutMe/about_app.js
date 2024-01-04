const fadingText = document.getElementById('fadingText');
const movingText = document.getElementById('scrollText');

const originalY = parseFloat(getComputedStyle(movingText).transform.split(',')[5]);
const threshold = originalY - 8.1;

window.addEventListener('wheel', (event) => {
  const delta = Math.sign(event.deltaY);
  let opacity = parseFloat(getComputedStyle(fadingText).opacity);

  const currentY = parseFloat(getComputedStyle(movingText).transform.split(',')[5]);
  const newY = currentY + delta * -55;  // value has to match the scroll speed of plane

  if (newY <= threshold) {  // uses a 'threshold' to stop text from scrolling below its origin
    movingText.style.transform = `translateY(${newY}px)`;
  }

  if (opacity > 0) {  // text can't reappear once it's been 'cleared'
  opacity -= delta * 0.1;
  opacity = Math.max(0, Math.min(1, opacity));
  fadingText.style.opacity = opacity;
  }
});