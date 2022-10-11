import confetti from "canvas-confetti"

const end = Date.now() + (4 * 1000);

const colors = ['#f20d36, #8f2496'];

export function runConfetti() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 75,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 75,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(runConfetti);
  }
};