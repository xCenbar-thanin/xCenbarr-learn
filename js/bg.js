/* xCenbar Learning — animated background: drifting aurora + star network that reacts to the mouse */
(function () {
  const c = document.getElementById("bg");
  if (!c) return;
  const ctx = c.getContext("2d");
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W, H, DPR, stars = [], t = 0;
  const mouse = { x: -9999, y: -9999 };
  const blobs = [
    { hue: "63,208,255",  r: .55, x: .15, y: .2,  sx: .00021, sy: .00017 },
    { hue: "76,240,184",  r: .45, x: .85, y: .25, sx: .00016, sy: .00023 },
    { hue: "255,181,71",  r: .35, x: .7,  y: .9,  sx: .00019, sy: .00013 },
    { hue: "60,90,255",   r: .6,  x: .3,  y: .85, sx: .00012, sy: .00018 }
  ];

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    c.width = W * DPR; c.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.round(Math.min(90, (W * H) / 16000));
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
      r: Math.random() * 1.6 + .4, tw: Math.random() * Math.PI * 2
    }));
  }

  function draw() {
    t += 16;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#060a14";
    ctx.fillRect(0, 0, W, H);

    // aurora blobs
    ctx.globalCompositeOperation = "lighter";
    const m = Math.max(W, H);
    for (const b of blobs) {
      const x = (b.x + Math.sin(t * b.sx) * .18) * W;
      const y = (b.y + Math.cos(t * b.sy) * .14) * H;
      const r = b.r * m;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${b.hue},.22)`);
      g.addColorStop(.5, `rgba(${b.hue},.07)`);
      g.addColorStop(1, `rgba(${b.hue},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    // faint grid
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = "rgba(150,185,255,.035)";
    ctx.lineWidth = 1;
    const gs = 64, off = (t * .01) % gs;
    ctx.beginPath();
    for (let x = -off; x < W; x += gs) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
    for (let y = -off; y < H; y += gs) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke();

    // star network
    for (const s of stars) {
      s.x += s.vx; s.y += s.vy;
      if (s.x < 0 || s.x > W) s.vx *= -1;
      if (s.y < 0 || s.y > H) s.vy *= -1;
      const dx = s.x - mouse.x, dy = s.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 14000) { s.x += dx * .02; s.y += dy * .02; }
    }
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const a = stars[i], b = stars[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(120,220,255,${(1 - d / 130) * .22})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const s of stars) {
      const a = .5 + Math.sin(t * .003 + s.tw) * .4;
      ctx.fillStyle = `rgba(220,240,255,${a})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  addEventListener("resize", resize);
  addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  resize(); draw();
})();
