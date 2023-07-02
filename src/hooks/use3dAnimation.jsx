export default function use3dAnimation() {
  const animateCard = e => {
    const { clientWidth: cardWidth, clientHeight: cardHeight } = e.target;
    const { screenX: pointerX, screenY: pointerY } = e;

    const xRotation = 5 * ((pointerX - cardWidth / 2) / cardWidth);
    const yRotation = 30 * ((pointerY - cardHeight / 2) / cardHeight);
    e.target.style.transform = `rotateY(${yRotation}deg) rotateX(${xRotation}deg)`;
  };

  const removeAnimation = e =>
    (e.target.style.transform = "rotateX(0) rotateY(0)");

  return { animateCard, removeAnimation };
}
