/* xCenbar Learning — website wireframes, website exercises, and image-based (A/B) design exercises */
window.XC = window.XC || {};
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const W = 480, X0 = 30, CW = 420;
  function pal(style, accent) {
    if (style === "hi") return { bg: "#ffffff", ink: "#1d2433", bar: "#d9dee8", soft: accent + "1f", img: accent + "33", line: accent + "66", acc: accent, accInk: "#fff", dark: "#1d2433" };
    return { bg: "#fafafa", ink: "#3a3a3a", bar: "#d0d0d0", soft: "#ededed", img: "#e2e2e2", line: "#9a9a9a", acc: "#6b6b6b", accInk: "#fff", dark: "#4a4a4a" };
  }
  const bar = (x, y, w, h, f) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${f}"/>`;
  const txt = (x, y, t, sz, f, wt = 700, a = "start") => `<text x="${x}" y="${y}" font-size="${sz}" fill="${f}" font-weight="${wt}" text-anchor="${a}" font-family="Inter,'Kantumruy Pro',system-ui,sans-serif">${esc(t)}</text>`;
  const img = (x, y, w, h, p, r = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${p.img}" stroke="${p.line}" stroke-width=".6"/><path d="M${x} ${y}L${x + w} ${y + h}M${x + w} ${y}L${x} ${y + h}" stroke="${p.line}" stroke-width=".5"/>`;
  const btn = (x, y, w, t, p, ghost, fill) => `<rect x="${x}" y="${y}" width="${w}" height="16" rx="8" fill="${ghost ? "none" : fill || p.acc}" stroke="${fill || p.acc}"/>` + txt(x + w / 2, y + 10.8, t, 6.5, ghost ? p.acc : p.accInk, 700, "middle");
  const lines = (x, y, w, n, p) => { let s = ""; for (let i = 0; i < n; i++) s += bar(x, y + i * 7, i === n - 1 ? w * .6 : w, 3.2, p.bar); return s; };
  const B = {
    nav: (y, b, p) => { const n = b.n || 5; let s = `<rect x="0" y="${y}" width="${W}" height="26" fill="${p.bg}"/><path d="M0 ${y + 26}H${W}" stroke="${p.bar}"/>` + `<rect x="${X0}" y="${y + 8}" width="10" height="10" rx="3" fill="${p.acc}"/>` + txt(X0 + 14, y + 16.5, b.logo || "Logo", 8, p.ink, 800); for (let i = 0; i < n; i++) s += txt(X0 + 120 + i * (b.tight ? 22 : 40), y + 16, b.items ? b.items[i] || "" : "", 6, i === (b.act ?? -1) ? p.acc : p.ink, 600) + (b.items ? "" : bar(X0 + 120 + i * (b.tight ? 22 : 40), y + 12, b.tight ? 16 : 26, 3.2, i === (b.act ?? -1) ? p.acc : p.bar)); if (b.cta !== false) s += btn(X0 + CW - 60, y + 5, 60, b.cta || "ចុះឈ្មោះ", p); return [s, 30]; },
    hero: (y, b, p) => { const h = b.h || 120; let s = `<rect x="0" y="${y}" width="${W}" height="${h}" fill="${b.dark ? p.dark : p.soft}"/>`; const ink = b.dark ? "#fff" : p.ink; s += txt(X0, y + 34, b.t || "", 15, ink, 800) + (b.t2 ? txt(X0, y + 52, b.t2, 15, ink, 800) : "") + lines(X0, y + (b.t2 ? 62 : 46), 170, 3, { bar: b.dark ? "#ffffff55" : p.bar }) + btn(X0, y + h - 34, 70, b.cta || "ចាប់ផ្ដើម", p) + (b.cta2 ? btn(X0 + 78, y + h - 34, 70, b.cta2, p, 1) : "") + (b.links ? b.links.map((l, i) => txt(X0 + 160 + i * 34, y + h - 23, l, 6, p.acc, 600)).join("") : "") + (b.img !== false ? img(X0 + 230, y + 14, 190, h - 28, p, 10) : ""); return [s, h + 10]; },
    heroc: (y, b, p) => { const h = b.h || 110; return [`<rect x="0" y="${y}" width="${W}" height="${h}" fill="${p.soft}"/>` + txt(W / 2, y + 36, b.t || "", 15, p.ink, 800, "middle") + bar(W / 2 - 100, y + 48, 200, 3.2, p.bar) + bar(W / 2 - 70, y + 55, 140, 3.2, p.bar) + btn(W / 2 - 40, y + h - 34, 80, b.cta || "ចាប់ផ្ដើម", p), h + 10]; },
    features: (y, b, p) => { const n = b.n || 3, w = (CW - (n - 1) * 14) / n; let s = (b.t ? txt(W / 2, y + 10, b.t, 10, p.ink, 800, "middle") : ""); const yy = y + (b.t ? 20 : 0); for (let i = 0; i < n; i++) { const x = X0 + i * (w + 14); s += `<circle cx="${x + 12}" cy="${yy + 12}" r="10" fill="${p.soft}" stroke="${p.line}" stroke-width=".6"/>` + bar(x, yy + 30, w * .55, 4, p.ink + "88") + lines(x, yy + 40, w - 10, 3, p); } return [s, (b.t ? 20 : 0) + 66]; },
    cards: (y, b, p) => { const c = b.cols || 4, r = b.rows || 1, g = 12, w = (CW - g * (c - 1)) / c, ih = b.ih || 56; let s = b.t ? txt(X0, y + 10, b.t, 10, p.ink, 800) : ""; const y0 = y + (b.t ? 18 : 0); for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) { const x = X0 + j * (w + g), yy = y0 + i * (ih + 34); s += img(x, yy, w, ih, p, 6) + bar(x, yy + ih + 6, w * .7, 3.6, p.ink + "88") + bar(x, yy + ih + 14, w * .4, 3.2, p.bar) + (b.price ? txt(x, yy + ih + 27, b.price, 7, p.acc, 800) : ""); } return [s, (b.t ? 18 : 0) + r * (ih + 34)]; },
    split: (y, b, p) => { const h = b.h || 90, L = !b.right; return [img(L ? X0 : X0 + 220, y, 200, h, p, 8) + txt(L ? X0 + 220 : X0, y + 22, b.t || "", 11, p.ink, 800) + lines(L ? X0 + 220 : X0, y + 32, 190, 4, p) + btn(L ? X0 + 220 : X0, y + h - 22, 70, b.cta || "ស្វែងយល់បន្ថែម", p, 1), h + 12]; },
    quote: (y, b, p) => [`<rect x="${X0}" y="${y}" width="${CW}" height="56" rx="10" fill="${p.soft}"/>` + txt(X0 + 16, y + 28, "“", 22, p.acc, 800) + lines(X0 + 36, y + 16, 300, 3, p) + `<circle cx="${X0 + CW - 30}" cy="${y + 28}" r="12" fill="${p.bar}"/>`, 64],
    cta: (y, b, p) => [`<rect x="${X0}" y="${y}" width="${CW}" height="50" rx="10" fill="${p.acc}"/>` + txt(X0 + 18, y + 22, b.t || "", 11, p.accInk, 800) + bar(X0 + 18, y + 30, 160, 3.2, p.accInk + "88") + `<rect x="${X0 + CW - 90}" y="${y + 17}" width="72" height="16" rx="8" fill="#fff"/>` + txt(X0 + CW - 54, y + 27.8, b.btn || "ទាក់ទង", 6.5, p.acc, 800, "middle"), 58],
    footer: (y, b, p) => { let s = `<rect x="0" y="${y}" width="${W}" height="56" fill="${p.dark}"/>`; for (let i = 0; i < 4; i++) s += bar(X0 + i * 100, y + 12, 40, 3.6, "#ffffffaa") + lines(X0 + i * 100, y + 22, 60, 3, { bar: "#ffffff44" }); return [s, 56]; },
    side: (y, b, p) => { const h = b.h || 230; let s = `<rect x="0" y="${y}" width="90" height="${h}" fill="${p.dark}"/>` + txt(14, y + 18, b.logo || "Admin", 8, "#fff", 800); for (let i = 0; i < 6; i++) s += `<rect x="8" y="${y + 30 + i * 20}" width="74" height="14" rx="4" fill="${i === 0 ? p.acc : "none"}"/>` + bar(16, y + 35 + i * 20, 40, 3.4, "#ffffffaa"); s += txt(104, y + 18, b.t || "Dashboard", 10, p.ink, 800); for (let i = 0; i < 4; i++) s += `<rect x="${104 + i * 92}" y="${y + 28}" width="84" height="40" rx="6" fill="${p.bg}" stroke="${p.bar}"/>` + txt(112 + i * 92, y + 50, ["$12.4k", "1,280", "64%", "312"][i], 10, p.ink, 800) + bar(112 + i * 92, y + 56, 40, 3, p.bar); s += `<rect x="104" y="${y + 76}" width="230" height="${h - 86}" rx="6" fill="${p.bg}" stroke="${p.bar}"/>`; const pts = [30, 50, 40, 70, 60, 85, 75, 100]; s += `<path d="${pts.map((v, i) => `${i ? "L" : "M"}${116 + i * 28} ${y + h - 20 - v}`).join("")}" fill="none" stroke="${p.acc}" stroke-width="2"/>`; s += `<rect x="342" y="${y + 76}" width="122" height="${h - 86}" rx="6" fill="${p.bg}" stroke="${p.bar}"/>`; for (let i = 0; i < 6; i++) s += `<circle cx="356" cy="${y + 94 + i * 20}" r="5" fill="${p.soft}"/>` + bar(366, y + 92 + i * 20, 60, 3.4, p.bar) + bar(436, y + 92 + i * 20, 20, 3.4, p.ink + "66"); return [s, h + 4]; },
    form: (y, b, p) => { let s = txt(X0 + 110, y + 12, b.t || "", 11, p.ink, 800); (b.items || ["", "", ""]).forEach((t, i) => { s += txt(X0 + 110, y + 28 + i * 28, t, 6, p.line, 600) + `<rect x="${X0 + 110}" y="${y + 31 + i * 28}" width="200" height="15" rx="5" fill="${p.bg}" stroke="${p.line}" stroke-width=".7"/>`; }); const yy = y + 31 + (b.items || [1, 1, 1]).length * 28; return [s + btn(X0 + 110, yy, 200, b.btn || "ផ្ញើ", p), yy - y + 24]; },
    pricing: (y, b, p) => { let s = txt(W / 2, y + 10, b.t || "", 10, p.ink, 800, "middle"); for (let i = 0; i < 3; i++) { const x = X0 + 30 + i * 125, hi = i === 1; s += `<rect x="${x}" y="${y + 20}" width="110" height="110" rx="10" fill="${hi ? p.soft : p.bg}" stroke="${hi ? p.acc : p.bar}" stroke-width="${hi ? 1.4 : .8}"/>` + bar(x + 12, y + 32, 40, 3.6, p.ink + "88") + txt(x + 12, y + 56, ["$0", "$9", "$29"][i], 15, p.ink, 800) + lines(x + 12, y + 66, 80, 4, p) + btn(x + 12, y + 104, 86, "ជ្រើស", p, !hi); } return [s, 136]; },
    crumbs: (y, b, p) => [txt(X0, y + 9, b.t || "ទំព័រដើម › ផលិតផល › អាវ", 6.5, p.line, 600), 14],
    filters: (y, b, p) => { let s = `<rect x="${X0}" y="${y}" width="96" height="${b.h || 160}" rx="6" fill="${p.bg}" stroke="${p.bar}"/>` + txt(X0 + 8, y + 14, "តម្រង", 7, p.ink, 800); for (let i = 0; i < 7; i++) s += `<rect x="${X0 + 8}" y="${y + 24 + i * 16}" width="7" height="7" rx="1.5" fill="${i % 3 === 0 ? p.acc : "none"}" stroke="${p.line}" stroke-width=".7"/>` + bar(X0 + 20, y + 26 + i * 16, 50, 3, p.bar); for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) { const x = X0 + 108 + c * 106, yy = y + r * 82; s += img(x, yy, 96, 54, p, 6) + bar(x, yy + 60, 60, 3.4, p.ink + "88") + txt(x, yy + 74, "$18", 7, p.acc, 800); } return [s, (b.h || 160) + 6]; },
    product: (y, b, p) => [img(X0, y, 200, 150, p, 8) + img(X0, y + 156, 46, 30, p, 4) + img(X0 + 51, y + 156, 46, 30, p, 4) + img(X0 + 102, y + 156, 46, 30, p, 4) + txt(X0 + 220, y + 18, b.t || "", 13, p.ink, 800) + txt(X0 + 220, y + 38, b.price || "$24.00", 12, p.acc, 800) + lines(X0 + 220, y + 50, 180, 4, p) + txt(X0 + 220, y + 92, "ទំហំ", 6.5, p.line, 600) + [0, 1, 2, 3].map(i => `<rect x="${X0 + 220 + i * 26}" y="${y + 97}" width="22" height="14" rx="4" fill="${i === 1 ? p.acc : p.bg}" stroke="${p.line}" stroke-width=".7"/>` + txt(X0 + 231 + i * 26, y + 106.5, ["S", "M", "L", "XL"][i], 6, i === 1 ? "#fff" : p.ink, 700, "middle")).join("") + btn(X0 + 220, y + 124, 120, "បន្ថែមទៅកន្ត្រក", p) + btn(X0 + 346, y + 124, 70, "♡ រក្សាទុក", p, 1), 194],
    article: (y, b, p) => [txt(X0 + 70, y + 14, b.t || "", 13, p.ink, 800) + bar(X0 + 70, y + 22, 90, 3.2, p.line) + img(X0 + 70, y + 32, 280, 90, p, 8) + lines(X0 + 70, y + 132, 280, 6, p) + lines(X0 + 70, y + 180, 280, 5, p), 222],
    table: (y, b, p) => { let s = `<rect x="${X0}" y="${y}" width="${CW}" height="${18 + (b.n || 5) * 16}" rx="6" fill="${p.bg}" stroke="${p.bar}"/><rect x="${X0}" y="${y}" width="${CW}" height="16" rx="6" fill="${p.soft}"/>`; for (let i = 0; i < (b.n || 5); i++) for (let j = 0; j < 4; j++) s += bar(X0 + 12 + j * 104, y + 24 + i * 16, j === 3 ? 30 : 60, 3.2, j === 3 ? p.acc : p.bar); return [s, 24 + (b.n || 5) * 16]; },
    clutter: (y, b, p) => { let s = `<rect x="0" y="${y}" width="${W}" height="120" fill="${p.soft}"/>`; const cols = ["#e2556e", "#1f6feb", "#18a957", "#f08a24", "#7c5cff"]; for (let i = 0; i < 9; i++) s += txt(X0 + (i % 3) * 140, y + 22 + Math.floor(i / 3) * 34, ["ថ្មី!", "បញ្ចុះ ៥០%", "ចុចទីនេះ", "ទាញយក", "ចូលរួម", "មើលបន្ថែម", "ទិញឥឡូវ", "ពិសេស!", "Free"][i], 12 - (i % 3) * 2, cols[i % 5], 800); for (let i = 0; i < 4; i++) s += btn(X0 + i * 100, y + 98, 90, ["ទិញ", "ចុះឈ្មោះ", "ទាញយក", "ទាក់ទង"][i], p, false, cols[i]); return [s, 128]; },
    spacer: (y, b) => ["", b.h || 10],
  };
  XC.uxWireWeb = function (scr, style = "lo", accent = "#1f6feb") {
    const p = pal(style, accent); let y = 16, body = "";
    (scr.b || []).forEach(b => { const [s, h] = B[b[0]](y, b[1] || {}, p); body += s; y += h + 4; });
    const H = Math.max(y + 4, 200);
    return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(scr.name)}"><rect width="${W}" height="${H}" rx="8" fill="${p.bg}" stroke="#bfc5d0"/><rect width="${W}" height="12" rx="6" fill="#e4e7ee"/><circle cx="10" cy="6" r="2.3" fill="#ff6159"/><circle cx="18" cy="6" r="2.3" fill="#ffbd2e"/><circle cx="26" cy="6" r="2.3" fill="#28c941"/><rect x="150" y="3" width="180" height="6" rx="3" fill="#fff"/>${body}</svg>`;
  };

  /* ---------- Website exercises ---------- */
  XC.uxWebExercises = [
    { t: "Landing page ហាងកាហ្វេ", lv: "Beginner", style: "lo", accent: "#a0522d", d: "ទំព័រតែមួយ (one-page) ដែលណែនាំហាងកាហ្វេមួយនៅភ្នំពេញ៖ ម៉ឺនុយពេញនិយម ទីតាំង និងប៊ូតុងកុម្ម៉ង់អនឡាញ។ គោលដៅ៖ ឲ្យភ្ញៀវចុច «កុម្ម៉ង់»។",
      screens: [{ name: "Desktop · ទំព័រដើម", b: [["nav", { logo: "Bong Kafe", items: ["ម៉ឺនុយ", "អំពីយើង", "ទីតាំង", "ទាក់ទង"], n: 4, cta: "កុម្ម៉ង់" }], ["hero", { t: "កាហ្វេខ្មែរ", t2: "ឆុងថ្មីរាល់ព្រឹក", cta: "កុម្ម៉ង់ឥឡូវ", cta2: "មើលម៉ឺនុយ" }], ["features", { t: "ហេតុអ្វីជ្រើសយើង", n: 3 }], ["cards", { t: "ពេញនិយម", cols: 4, price: "$2.50" }], ["quote"], ["cta", { t: "ទទួលបាន ១ កែវឥតគិតថ្លៃ", btn: "ចុះឈ្មោះ" }], ["footer"]] }],
      steps: ["សរសេរគោលដៅទំព័រមួយប្រយោគ និង CTA មួយ", "គូស wireframe desktop 1440 ជាមួយ grid 12 columns", "រៀបចំផ្នែក៖ Nav → Hero → ហេតុអ្វីជ្រើសយើង → ម៉ឺនុយពេញនិយម → មតិភ្ញៀវ → CTA → Footer", "ធ្វើកំណែទូរស័ព្ទ 390 (ម៉ឺនុយ ☰ និងកាតជាជួរតែមួយ)", "ពិនិត្យលំនាំស្កេន Z៖ ឡូហ្គោ → CTA → Hero → ប៊ូតុង"],
      check: ["CTA សំខាន់មើលឃើញក្នុងអេក្រង់ដំបូង (above the fold)", "Nav មិនលើស ៥–៧ ធាតុ", "មានកំណែទូរស័ព្ទ", "ចន្លោះផ្នែកស្មើគ្នា (48 ឬ 64)"] },
    { t: "វេបសាយសាលារៀន", lv: "Beginner", style: "lo", accent: "#1f6feb", d: "វេបសាយសម្រាប់សាលាមធ្យមសិក្សា ដែលឪពុកម្ដាយ និងសិស្សអាចរកព័ត៌មានការចុះឈ្មោះ កាលវិភាគ និងព័ត៌មានថ្មីៗបានលឿន។",
      screens: [{ name: "ទំព័រដើម", b: [["nav", { logo: "សាលា", items: ["អំពីសាលា", "កម្មវិធីសិក្សា", "ការចុះឈ្មោះ", "ព័ត៌មាន", "ទាក់ទង"], n: 5, act: 0, cta: "ចុះឈ្មោះ" }], ["heroc", { t: "រៀនដើម្បីអនាគត", cta: "ចុះឈ្មោះឆ្នាំ ២០២៧" }], ["features", { t: "តំណរហ័ស", n: 4 }], ["cards", { t: "ព័ត៌មានថ្មីៗ", cols: 3 }], ["footer"]] },
        { name: "ទំព័រការចុះឈ្មោះ", b: [["nav", { logo: "សាលា", items: ["អំពីសាលា", "កម្មវិធីសិក្សា", "ការចុះឈ្មោះ", "ព័ត៌មាន", "ទាក់ទង"], n: 5, act: 2, cta: false }], ["crumbs", { t: "ទំព័រដើម › ការចុះឈ្មោះ" }], ["form", { t: "ពាក្យស្នើសុំចូលរៀន", items: ["ឈ្មោះសិស្ស", "ថ្ងៃខែឆ្នាំកំណើត", "ថ្នាក់ដែលចង់ចូល", "លេខទូរស័ព្ទឪពុកម្ដាយ"], btn: "ដាក់ពាក្យ" }], ["footer"]] }],
      steps: ["ធ្វើ sitemap (មេរៀន IA)", "ធ្វើ card sorting ជាមួយមិត្ត ២ នាក់ ដើម្បីដាក់ឈ្មោះម៉ឺនុយ", "រចនាទំព័រដើម និងទំព័រចុះឈ្មោះ", "បន្ថែម breadcrumbs លើទំព័ររង", "ធ្វើ tree test៖ «រកតម្លៃសិក្សាថ្នាក់ទី១០»"],
      check: ["ម៉ឺនុយប្រើពាក្យដែលឪពុកម្ដាយយល់", "ធាតុម៉ឺនុយសកម្មបង្ហាញខុសពីធាតុដទៃ", "Form មាន label លើ field", "លេខទូរស័ព្ទ និងផែនទីនៅ footer"] },
    { t: "Portfolio អ្នករចនា", lv: "Intermediate", style: "hi", accent: "#7c5cff", d: "វេបសាយ portfolio ផ្ទាល់ខ្លួន ដើម្បីដាក់ពាក្យការងារ UX/UI៖ ការណែនាំខ្លួន គម្រោង ៣–៤ និងទំព័រ case study។",
      screens: [{ name: "ទំព័រដើម", b: [["nav", { logo: "Sophea", items: ["ការងារ", "អំពីខ្ញុំ", "CV"], n: 3, cta: "ទាក់ទង" }], ["hero", { t: "សួស្ដី ខ្ញុំជា", t2: "UX/UI Designer", cta: "មើលការងារ", img: true }], ["split", { t: "App ទិញសំបុត្រឡានក្រុង", cta: "អាន case study" }], ["split", { t: "វេបសាយសាលា", right: 1, cta: "អាន case study" }], ["cta", { t: "ចង់ធ្វើការជាមួយគ្នា?", btn: "ផ្ញើអ៊ីមែល" }]] },
        { name: "Case study", b: [["nav", { logo: "Sophea", items: ["ការងារ", "អំពីខ្ញុំ", "CV"], n: 3, act: 0, cta: "ទាក់ទង" }], ["article", { t: "App ទិញសំបុត្រឡានក្រុង" }], ["features", { t: "ដំណើរការ", n: 4 }], ["cards", { cols: 3 }]] }],
      steps: ["ជ្រើសគម្រោងល្អបំផុត ៣ ពីលំហាត់មុនៗ", "សរសេរ headline ខ្លួនឯងមួយប្រយោគ", "រចនាទំព័រដើម និងទំព័រ case study ១", "Case study៖ បញ្ហា → តួនាទីខ្ញុំ → ស្រាវជ្រាវ → ការរចនា → លទ្ធផល", "បោះពុម្ពលើ Framer, Webflow ឬ Behance"],
      check: ["អ្នកមើលដឹងថាអ្នកជានរណាក្នុង ៥ វិនាទី", "គម្រោងនីមួយៗមានរូប cover ស្អាត", "Case study បង្ហាញដំណើរការ មិនមែនតែរូបចុងក្រោយ", "មាន email/LinkedIn ងាយរក"] },
    { t: "ហាងសម្លៀកបំពាក់អនឡាញ (E-commerce)", lv: "Intermediate", style: "hi", accent: "#e2556e", d: "វេបសាយលក់សម្លៀកបំពាក់ខ្មែរ៖ ទំព័របញ្ជីផលិតផលមានតម្រង ទំព័រលម្អិត និងការបន្ថែមទៅកន្ត្រក។",
      screens: [{ name: "បញ្ជីផលិតផល", b: [["nav", { logo: "Krama", items: ["ស្រី", "ប្រុស", "កុមារ", "ថ្មី", "បញ្ចុះតម្លៃ"], n: 5, act: 0, cta: "🛒 2" }], ["crumbs", { t: "ទំព័រដើម › ស្រី › អាវ" }], ["filters", { h: 160 }], ["footer"]] },
        { name: "ទំព័រផលិតផល", b: [["nav", { logo: "Krama", items: ["ស្រី", "ប្រុស", "កុមារ", "ថ្មី", "បញ្ចុះតម្លៃ"], n: 5, act: 0, cta: "🛒 2" }], ["crumbs", { t: "ទំព័រដើម › ស្រី › អាវ › អាវសូត្រ" }], ["product", { t: "អាវសូត្រខ្មែរ", price: "$24.00" }], ["cards", { t: "អ្នកក៏អាចចូលចិត្ត", cols: 4, price: "$18" }]] }],
      steps: ["សិក្សាហាងអនឡាញ ៣ ហើយកត់លំនាំទូទៅ", "រចនាទំព័របញ្ជីផលិតផលជាមួយតម្រង (ទំហំ តម្លៃ ពណ៌)", "រចនាទំព័រលម្អិត៖ រូបច្រើន តម្លៃ ទំហំ ប៊ូតុងបន្ថែម", "បង្ហាញស្ថានភាព «អស់ពីស្តុក» និងទំហំដែលមិនមាន", "ធ្វើកំណែទូរស័ព្ទ៖ តម្រងក្លាយជា bottom sheet"],
      check: ["តម្លៃ និងប៊ូតុងបន្ថែមមើលឃើញភ្លាម", "ទំហំដែលបានជ្រើស បង្ហាញច្បាស់", "កន្ត្រកបង្ហាញចំនួនទំនិញ", "រូបផលិតផលមានសមាមាត្រស្មើគ្នា"] },
    { t: "Dashboard គ្រប់គ្រងហាង", lv: "Advanced", style: "hi", accent: "#0fa3a3", d: "Dashboard សម្រាប់ម្ចាស់ហាងមើលការលក់ ការកុម្ម៉ង់ និងស្តុក។ ផ្ដោតលើការបង្ហាញទិន្នន័យឲ្យងាយយល់ក្នុងមួយភ្លែត។",
      screens: [{ name: "Dashboard", b: [["side", { logo: "Shop Admin", t: "សង្ខេបថ្ងៃនេះ", h: 230 }]] },
        { name: "ការកុម្ម៉ង់", b: [["nav", { logo: "Shop Admin", items: ["Dashboard", "ការកុម្ម៉ង់", "ផលិតផល", "អតិថិជន"], n: 4, act: 1, cta: "+ ថ្មី" }], ["crumbs", { t: "ការកុម្ម៉ង់ › ទាំងអស់ (៣១២)" }], ["table", { n: 8 }]] }],
      steps: ["សួរម្ចាស់ហាង (ឬស្រមៃ Persona) ថាលេខណាសំខាន់បំផុតរាល់ព្រឹក", "ដាក់ KPI ៤ នៅខាងលើ ក្រាហ្វនៅកណ្ដាល បញ្ជីនៅខាងស្ដាំ", "រចនាតារាងការកុម្ម៉ង់ជាមួយ status badge (ថ្មី កំពុងដឹក បានដល់ បោះបង់)", "បន្ថែមតម្រង និងការស្វែងរកលើតារាង", "ពិនិត្យពណ៌ក្រាហ្វសម្រាប់អ្នកមើលពណ៌មិនច្បាស់"],
      check: ["លេខសំខាន់អានបានក្នុង ៥ វិនាទី", "Status មានពាក្យ + ពណ៌", "តារាងតម្រឹមលេខនៅខាងស្ដាំ", "Sidebar បង្ហាញទំព័រសកម្ម"] },
    { t: "វេបសាយព័ត៌មាន / Blog", lv: "Advanced", style: "lo", accent: "#1d2433", d: "វេបសាយព័ត៌មានដែលផ្ដោតលើការអានអត្ថបទវែងជាភាសាខ្មែរ៖ typography ល្អ ប្រវែងបន្ទាត់សមរម្យ និងអត្ថបទពាក់ព័ន្ធ។",
      screens: [{ name: "ទំព័រដើម", b: [["nav", { logo: "ព័ត៌មាន", items: ["ជាតិ", "អន្តរជាតិ", "សេដ្ឋកិច្ច", "កីឡា", "បច្ចេកវិទ្យា"], n: 5, cta: "ស្វែងរក" }], ["split", { t: "ព័ត៌មានសំខាន់ថ្ងៃនេះ", h: 110, cta: "អានបន្ត" }], ["cards", { cols: 3, rows: 2 }]] },
        { name: "អត្ថបទ", b: [["nav", { logo: "ព័ត៌មាន", items: ["ជាតិ", "អន្តរជាតិ", "សេដ្ឋកិច្ច", "កីឡា", "បច្ចេកវិទ្យា"], n: 5, act: 4, cta: "ស្វែងរក" }], ["article", { t: "ចំណងជើងអត្ថបទ" }], ["cards", { t: "អត្ថបទពាក់ព័ន្ធ", cols: 3 }]] }],
      steps: ["កំណត់ text styles សម្រាប់អត្ថបទខ្មែរ (Body 18, line height 1.8)", "កំណត់ទទឹងអត្ថបទអតិបរមា ~680px", "រចនាទំព័រដើម៖ ព័ត៌មានធំ + grid", "រចនាទំព័រអត្ថបទ៖ ចំណងជើង អ្នកនិពន្ធ កាលបរិច្ឆេទ រូប ខ្លឹមសារ ចែករំលែក", "សាកអានលើទូរស័ព្ទ"],
      check: ["អក្សរខ្មែរមិនជាន់គ្នា", "បន្ទាត់មិនវែងពេក", "ចំណងជើង និងរូបមានឋានានុក្រមច្បាស់", "មានអត្ថបទពាក់ព័ន្ធនៅខាងក្រោម"] },
  ];

  /* ---------- Image exercises: which design is better? ---------- */
  const m = (b, tab) => ({ name: "", b: [["status"], ...b], tab });
  XC.uxImageQuiz = [
    { q: "អេក្រង់ណាមានឋានានុក្រមប៊ូតុងល្អជាង?", topic: "Visual hierarchy", kind: "m",
      A: m([["header", { t: "កន្ត្រក", l: "<" }], ["list", { n: 2, step: 1 }], ["price", { t: "$10.50" }], ["button", { t: "បង់ប្រាក់" }], ["button", { t: "បន្តទិញ" }], ["button", { t: "បោះបង់" }]]),
      B: m([["header", { t: "កន្ត្រក", l: "<" }], ["list", { n: 2, step: 1 }], ["price", { t: "$10.50" }], ["button", { t: "បង់ប្រាក់" }], ["button", { t: "បន្តទិញ", ghost: 1 }], ["link", { t: "បោះបង់" }]]),
      ans: "B", why: "B មានប៊ូតុង Primary តែមួយ (បង់ប្រាក់) ហើយ Secondary ជាគែម និង Tertiary ជាអក្សរ។ A មានប៊ូតុងពណ៌ពេញ ៣ ប្រកួតគ្នា ដែលធ្វើឲ្យអ្នកប្រើស្ទាក់ស្ទើរ។" },
    { q: "Form ណាងាយបំពេញជាង?", topic: "Forms", kind: "m",
      A: m([["header", { t: "ចុះឈ្មោះ", l: "<" }], ["input", { items: ["ឈ្មោះពេញ", "លេខទូរស័ព្ទ", "ពាក្យសម្ងាត់"] }], ["button", { t: "ចុះឈ្មោះ" }]]),
      B: m([["header", { t: "ចុះឈ្មោះ", l: "<" }], ["ph", { items: ["ឈ្មោះពេញ", "លេខទូរស័ព្ទ", "ពាក្យសម្ងាត់"] }], ["button", { t: "ចុះឈ្មោះ" }]]),
      ans: "A", why: "A មាន label នៅលើ field ដែលនៅតែមើលឃើញពេលវាយ។ B ប្រើតែ placeholder ពណ៌ស្រាល ដែលបាត់ពេលចាប់ផ្ដើមវាយ ហើយ contrast ខ្សោយ។" },
    { q: "ប៊ូតុងណាអានបានច្បាស់ជាង?", topic: "Color contrast", kind: "m",
      A: m([["spacer", { h: 60 }], ["success", { t: "ការកុម្ម៉ង់រួចរាល់" }], ["button", { t: "តាមដានការដឹក", fill: "#f6c9d1", ink: "#ffffff" }]]),
      B: m([["spacer", { h: 60 }], ["success", { t: "ការកុម្ម៉ង់រួចរាល់" }], ["button", { t: "តាមដានការដឹក", fill: "#c2334d", ink: "#ffffff" }]]),
      ans: "B", why: "B ប្រើអក្សរសលើផ្ទៃក្រហមងងឹត មាន contrast ខ្ពស់ (លើស 4.5:1)។ A អក្សរសលើផ្ទៃផ្កាឈូកស្រាល contrast ទាបខ្លាំង ពិបាកអាន ជាពិសេសក្រោមពន្លឺថ្ងៃ។" },
    { q: "Tab bar ណាងាយយល់ជាងសម្រាប់អ្នកប្រើថ្មី?", topic: "Icons & labels", kind: "m",
      A: m([["hello", { t: "សួស្ដី!" }], ["hero", { h: 90 }], ["grid", { cols: 2, rows: 1 }]], [5, 0, 1]),
      B: m([["hello", { t: "សួស្ដី!" }], ["hero", { h: 90 }], ["grid", { cols: 2, rows: 1 }]], [5, 0]),
      ans: "B", why: "B មាន label ក្រោម icon នីមួយៗ។ A មានតែ icon ដែលអ្នកប្រើត្រូវទាយ។ Icon ដែលមិនសូវស្គាល់ ត្រូវមានពាក្យភ្ជាប់ជានិច្ច។" },
    { q: "សារកំហុសណាល្អជាង?", topic: "Error messages", kind: "m",
      A: m([["spacer", { h: 90 }], ["title", { t: "Error 502", c: 1, sz: 16 }], ["note", { t: "Bad Gateway", c: 1 }]]),
      B: m([["spacer", { h: 60 }], ["empty", { t: "មិនអាចភ្ជាប់អ៊ីនធឺណិតបាន" }], ["note", { t: "សូមពិនិត្យ Wi-Fi ឬ 4G របស់អ្នក", c: 1 }], ["button", { t: "សាកម្ដងទៀត" }]]),
      ans: "B", why: "B ប្រើភាសាសាមញ្ញ ប្រាប់មូលហេតុ និងផ្ដល់វិធីដោះស្រាយ (ប៊ូតុងសាកម្ដងទៀត)។ A ប្រើលេខកូដបច្ចេកទេសដែលអ្នកប្រើមិនយល់ ហើយគ្មានផ្លូវចេញ — ល្មើស Nielsen ទី ៩។" },
    { q: "Field ណាបង្ហាញកំហុសបានល្អជាង?", topic: "Validation", kind: "m",
      A: m([["header", { t: "ផ្ទេរប្រាក់", l: "<" }], ["err", { l: "លេខទូរស័ព្ទ", t: "លេខទូរស័ព្ទត្រូវមាន ៩–១០ ខ្ទង់" }], ["button", { t: "បន្ត" }]]),
      B: m([["header", { t: "ផ្ទេរប្រាក់", l: "<" }], ["input", { items: ["លេខទូរស័ព្ទ"] }], ["note", { t: "មិនត្រឹមត្រូវ", color: "#d93a3a" }], ["button", { t: "បន្ត" }]]),
      ans: "A", why: "A ដាក់គែមក្រហមលើ field ដែលខុស មាន icon ⚠ និងប្រាប់វិធីកែ។ B គ្រាន់តែនិយាយថា «មិនត្រឹមត្រូវ» ដោយមិនប្រាប់ពីអ្វីដែលខុស ឬវិធីកែ។" },
    { q: "អេក្រង់បញ្ជាក់ការផ្ទេរណាការពារកំហុសបានល្អជាង?", topic: "Error prevention", kind: "m",
      A: m([["header", { t: "បញ្ជាក់", l: "<" }], ["avatar", { t: "SOK SOKHA" }], ["menu", { items: ["គណនី៖ 000 123 456", "ចំនួន៖ $50.00"] }], ["button", { t: "បញ្ជាក់ និងផ្ទេរ" }]]),
      B: m([["header", { t: "បញ្ជាក់", l: "<" }], ["spacer", { h: 40 }], ["title", { t: "$50.00", c: 1, sz: 20 }], ["button", { t: "ផ្ទេរ" }]]),
      ans: "A", why: "A បង្ហាញឈ្មោះ និងលេខគណនីអ្នកទទួលមុនផ្ទេរ ដូច្នេះអ្នកប្រើអាចរកឃើញកំហុសទាន់ពេល។ B បង្ហាញតែចំនួនទឹកប្រាក់ — ប្រសិនបើវាយលេខគណនីខុស លុយនឹងទៅមនុស្សខុស។" },
    { q: "កន្ត្រកទទេណាជួយអ្នកប្រើបន្តបានល្អជាង?", topic: "Empty states", kind: "m",
      A: { name: "", blank: "គ្មានទិន្នន័យ", b: [] },
      B: m([["spacer", { h: 70 }], ["empty", { t: "កន្ត្រកនៅទទេ" }], ["button", { t: "ទៅកាន់ម៉ឺនុយ" }]], [5, 3]),
      ans: "B", why: "B ប្រាប់ស្ថានភាពជាភាសាមិត្តភាព មាន illustration និងប៊ូតុងដែលនាំអ្នកប្រើទៅជំហានបន្ទាប់។ A ទុកអ្នកប្រើនៅអេក្រង់ទទេ គ្មាន navigation គ្មានផ្លូវទៅមុខ។" },
    { q: "ប៊ូតុង «បង់ប្រាក់» នៅទីតាំងណាងាយចុចជាងដោយដៃម្ខាង?", topic: "Thumb zone", kind: "m",
      A: m([["header", { t: "កន្ត្រក", l: "<" }], ["button", { t: "បង់", w: 40, h: 16, right: 1, sz: 7 }], ["list", { n: 3, step: 1 }], ["price", { t: "$10.50" }]]),
      B: m([["header", { t: "កន្ត្រក", l: "<" }], ["list", { n: 3, step: 1 }], ["price", { t: "$10.50" }], ["spacer", { h: 70 }], ["button", { t: "បង់ប្រាក់ $10.50", h: 34 }]]),
      ans: "B", why: "B ដាក់ប៊ូតុងធំ ទទឹងពេញ នៅខាងក្រោមក្នុងតំបន់មេដៃ ហើយខ្ពស់គ្រប់គ្រាន់ (≥ 48)។ A ប៊ូតុងតូច នៅជ្រុងខាងលើស្ដាំ ពិបាកឈានដល់ដោយមេដៃ ហើយ touch target តូចពេក។" },
    { q: "Hero ណារបស់វេបសាយ ធ្វើឲ្យភ្ញៀវដឹងថាត្រូវធ្វើអ្វីបន្ទាប់?", topic: "Landing page", kind: "w",
      A: { name: "", b: [["nav", { logo: "Bong Kafe", n: 4, cta: "កុម្ម៉ង់" }], ["hero", { t: "កាហ្វេខ្មែរ", t2: "ឆុងថ្មីរាល់ព្រឹក", cta: "កុម្ម៉ង់ឥឡូវ", cta2: "មើលម៉ឺនុយ" }]] },
      B: { name: "", b: [["nav", { logo: "Bong Kafe", n: 12, tight: 1, cta: "កុម្ម៉ង់" }], ["clutter"]] },
      ans: "A", why: "A មានចំណងជើងច្បាស់ រូបភាព ប៊ូតុង Primary មួយ និង Secondary មួយ។ B មានពាក្យ និងប៊ូតុងពណ៌ខុសៗគ្នាច្រើនពេក ហើយ nav មាន ១២ ធាតុ — គ្មានអ្វីលេចធ្លោ ដូច្នេះភ្ញៀវមិនដឹងត្រូវចុចអ្វី។" },
    { q: "វេបសាយណាប្រាប់អ្នកប្រើថា «ខ្ញុំនៅឯណា» ច្បាស់ជាង?", topic: "Navigation", kind: "w",
      A: { name: "", b: [["nav", { logo: "Krama", items: ["ស្រី", "ប្រុស", "កុមារ", "ថ្មី"], n: 4, act: 0, cta: "🛒 2" }], ["crumbs", { t: "ទំព័រដើម › ស្រី › អាវ" }], ["filters", { h: 120 }]] },
      B: { name: "", b: [["nav", { logo: "Krama", items: ["ស្រី", "ប្រុស", "កុមារ", "ថ្មី"], n: 4, cta: "🛒 2" }], ["filters", { h: 120 }]] },
      ans: "A", why: "A បន្លិចធាតុម៉ឺនុយសកម្ម «ស្រី» និងមាន breadcrumbs «ទំព័រដើម › ស្រី › អាវ»។ B គ្មានសញ្ញាណាមួយបង្ហាញទីតាំងបច្ចុប្បន្នទេ។" },
    { q: "ទំព័រណាងាយបង់ប្រាក់ដោយទំនុកចិត្តជាង?", topic: "Visibility of status", kind: "m",
      A: m([["header", { t: "បង់ប្រាក់ ៣/៣", l: "<" }], ["progress", { v: 1 }], ["menu", { items: ["ឡាន 07:30 · កៅអី B3", "ភ្នំពេញ → សៀមរាប"] }], ["options", { n: 2, sel: 0 }], ["price", { t: "$12.00" }], ["button", { t: "បង់ $12.00" }]]),
      B: m([["header", { t: "បង់ប្រាក់", l: "<" }], ["options", { n: 2, sel: 0 }], ["spacer", { h: 50 }], ["button", { t: "បន្ត" }]]),
      ans: "A", why: "A បង្ហាញជំហាន (៣/៣) ព័ត៌មានសំបុត្រ តម្លៃសរុប និងពាក្យប៊ូតុងដែលប្រាប់ចំនួនទឹកប្រាក់។ B មិនបង្ហាញតម្លៃ មិនប្រាប់ថាជំហានចុងក្រោយ ហើយ «បន្ត» មិនច្បាស់ថានឹងកាត់លុយឬអត់។" },
  ];
})();
