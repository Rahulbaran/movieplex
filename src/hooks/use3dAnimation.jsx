export default function use3dAnimation() {
  const animateCard = e => {
    const { clientWidth: cardWidth, clientHeight: cardHeight } = e.target;
    const { screenX: pointerX, screenY: pointerY } = e;

    const xRotation = 25 * Math.sin((pointerX - cardWidth / 1.5) / cardWidth);
    const yRotation = 25 * Math.sin((pointerY - cardHeight / 1.5) / cardHeight);
    e.target.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };

  const removeAnimation = e =>
    (e.target.style.transform = "rotateX(0) rotateY(0)");

  return { animateCard, removeAnimation };
}
