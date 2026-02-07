export function createPixelConfetti(e?: any, opts?: {count?: number, colors?: string[]}) {
  const count = opts?.count ?? 20;
  const colors = opts?.colors ?? ['#00ff9c', '#00eaff', '#00ff9c', '#00eaff'];

  const x = e && 'clientX' in e ? (e as MouseEvent).clientX : window.innerWidth / 2;
  const y = e && 'clientY' in e ? (e as MouseEvent).clientY : window.innerHeight / 2;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'pixel-confetti';
    el.style.left = `${x + (Math.random() - 0.5) * 80}px`;
    el.style.top = `${y + (Math.random() - 0.5) * 20}px`;
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.transform = `translate3d(0,0,0)`;
    document.body.appendChild(el);

    // random horizontal drift + rotation
    const dx = (Math.random() - 0.5) * 200;
    const duration = 700 + Math.random() * 400;

    el.animate([
      { transform: `translate(0px, 0px) rotate(0deg)`, opacity: 1 },
      { transform: `translate(${dx}px, 220px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration,
      easing: 'cubic-bezier(.2,.7,.2,1)'
    });

    setTimeout(() => {
      try { document.body.removeChild(el); } catch (e) { /* noop */ }
    }, duration + 50);
  }
}

export default createPixelConfetti;
