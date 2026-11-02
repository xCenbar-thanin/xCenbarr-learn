/* xCenbar Learning — interactive UX/UI tools */
window.XC = window.XC || {};
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const hex2rgb = h => { h = h.replace("#", ""); if (h.length === 3) h = h.split("").map(c => c + c).join(""); const n = parseInt(h, 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; };
  const rgb2hex = (r, g, b) => "#" + [r, g, b].map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
  const lum = h => { const c = hex2rgb(h).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; };
  const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
  const okHex = v => /^#?[0-9a-f]{6}$/i.test(v.trim());
  const norm = v => (v.trim()[0] === "#" ? v.trim() : "#" + v.trim()).toLowerCase();
  function rgb2hsl(r, g, b) { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, s = 0; const l = (mx + mn) / 2; if (mx !== mn) { const d = mx - mn; s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h /= 6; } return [h * 360, s, l]; }
  function hsl2hex(h, s, l) { h /= 360; const f = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p; }; if (!s) return rgb2hex(l * 255, l * 255, l * 255); const q = l < .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q; return rgb2hex(f(p, q, h + 1 / 3) * 255, f(p, q, h) * 255, f(p, q, h - 1 / 3) * 255); }

  const TOOLS = [
    { id: "contrast", t: "Contrast checker", d: "ពិនិត្យថាអក្សរអានបានច្បាស់តាមស្តង់ដារ WCAG" },
    { id: "palette", t: "Palette 50–900", d: "បង្កើតកម្រិតពណ៌ពីពណ៌ម៉ាកមួយ" },
    { id: "type", t: "Type scale", d: "បង្កើតមាត្រដ្ឋានអក្សរ ខ្មែរ + អង់គ្លេស" },
    { id: "grid", t: "Spacing & Grid", d: "មើល layout grid និងប្រព័ន្ធ 8pt" },
    { id: "wire", t: "Wireframe builder", d: "សង់ wireframe ទូរស័ព្ទដោយចុចបន្ថែមប្លុក" },
  ];
  const S = { tool: "contrast", fg: "#ffffff", bg: "#e2556e", base: "#e2556e", ts: 16, tr: 1.25, lh: 1.7, vp: "mobile", wire: [["status"], ["hello", { t: "សួស្ដី!" }], ["search"], ["hero", { h: 90 }]], wstyle: "lo", tab: 1 };
  const BLOCKS = [["hello", "ចំណងជើងស្វាគមន៍", { t: "សួស្ដី!" }], ["header", "Header + ←", { t: "ចំណងជើង", l: "<" }], ["search", "ប្រអប់ស្វែងរក"], ["chips", "Chips", { n: 4 }], ["hero", "រូបធំ", { h: 90 }], ["banner", "Banner", { t: "ការផ្ដល់ជូន" }], ["grid", "Grid កាត ២×២", { cols: 2, rows: 2 }], ["grid", "Grid កាត ៣×១", { cols: 3, rows: 1 }], ["list", "បញ្ជី ៣", { n: 3 }], ["menu", "ម៉ឺនុយការកំណត់", { items: ["", "", ""] }], ["input", "Form ២ field", { items: ["ឈ្មោះ", "លេខទូរស័ព្ទ"] }], ["options", "ជម្រើស Radio", { n: 3, sel: 0 }], ["button", "ប៊ូតុង Primary", { t: "បន្ត" }], ["button", "ប៊ូតុង Secondary", { t: "បោះបង់", ghost: 1 }], ["price", "តម្លៃសរុប", { t: "$12.00" }], ["stats", "Stats ៣", { items: ["12", "5", "98%"] }], ["progress", "របារវឌ្ឍនភាព", { v: .6 }], ["empty", "Empty state", { t: "មិនទាន់មានទេ" }], ["qr", "QR code"], ["map", "ផែនទី", { h: 120 }], ["chat", "សារជជែក", { n: 4 }], ["spacer", "ចន្លោះ 16", { h: 16 }]];

  function contrast(el) {
    const r = ratio(S.fg, S.bg), b = (n) => r >= n ? '<b class="tl-ok">✓ ជាប់</b>' : '<b class="tl-no">✗ ធ្លាក់</b>';
    el.innerHTML = `<div class="tl-row"><label>ពណ៌អក្សរ<span><input type="color" id="tfg" value="${S.fg}"><input id="tfgh" value="${S.fg}" maxlength="7"></span></label>
      <button class="btn sm" id="tswap" title="ប្ដូរ">⇄</button>
      <label>ពណ៌ផ្ទៃ<span><input type="color" id="tbg" value="${S.bg}"><input id="tbgh" value="${S.bg}" maxlength="7"></span></label></div>
      <div class="tl-sample" style="color:${S.fg};background:${S.bg}"><div style="font-size:28px;font-weight:800">ចំណងជើង Heading</div><div style="font-size:16px;line-height:1.8">អក្សរធម្មតាសម្រាប់អានវែងៗ។ The quick brown fox jumps over the lazy dog.</div><span class="tl-btn" style="border-color:${S.fg}">ប៊ូតុង Button</span></div>
      <div class="tl-ratio"><div class="tl-big">${r.toFixed(2)}:1</div><div class="tl-grid4"><span>AA អក្សរធម្មតា (4.5)</span>${b(4.5)}<span>AA អក្សរធំ / UI (3.0)</span>${b(3)}<span>AAA អក្សរធម្មតា (7.0)</span>${b(7)}<span>AAA អក្សរធំ (4.5)</span>${b(4.5)}</div></div>
      <p class="note">${r < 3 ? "⚠ Contrast ទាបពេក — ពិបាកអានសម្រាប់មនុស្សភាគច្រើន ជាពិសេសក្រោមពន្លឺថ្ងៃ។" : r < 4.5 ? "ប្រើបានសម្រាប់អក្សរធំ (18pt+) ឬរូបតំណាង ប៉ុន្តែមិនគ្រប់គ្រាន់សម្រាប់អក្សរតូច។" : "ល្អ! អានបានច្បាស់សម្រាប់អក្សរធម្មតា។"} រូបមន្ត៖ (L1 + 0.05) / (L2 + 0.05) តាម WCAG 2។</p>`;
    const set = (k, v) => { if (okHex(v)) { S[k] = norm(v); contrast(el); } };
    el.querySelector("#tfg").oninput = e => set("fg", e.target.value); el.querySelector("#tbg").oninput = e => set("bg", e.target.value);
    el.querySelector("#tfgh").onchange = e => set("fg", e.target.value); el.querySelector("#tbgh").onchange = e => set("bg", e.target.value);
    el.querySelector("#tswap").onclick = () => { [S.fg, S.bg] = [S.bg, S.fg]; contrast(el); };
  }
  function palette(el) {
    const [h, s] = rgb2hsl(...hex2rgb(S.base)); const L = { 50: .97, 100: .93, 200: .86, 300: .76, 400: .64, 500: .52, 600: .44, 700: .36, 800: .27, 900: .18 };
    const sh = Object.entries(L).map(([k, l]) => [k, hsl2hex(h, Math.min(1, s * (l > .9 ? .9 : 1)), l)]);
    el.innerHTML = `<div class="tl-row"><label>ពណ៌ម៉ាក<span><input type="color" id="pbase" value="${S.base}"><input id="pbaseh" value="${S.base}" maxlength="7"></span></label></div>
      <div class="tl-pal">${sh.map(([k, c]) => { const w = ratio("#ffffff", c), bk = ratio("#111111", c), ink = w >= bk ? "#fff" : "#111"; return `<button class="tl-sw" data-c="${c}" style="background:${c};color:${ink}"><b>${k}</b><span>${c}</span><small>${Math.max(w, bk).toFixed(1)}:1 ${ink === "#fff" ? "ស" : "ខ្មៅ"}</small></button>`; }).join("")}</div>
      <p class="note">ចុចលើពណ៌ដើម្បីចម្លងលេខ HEX។ ប្រើ 50–100 សម្រាប់ផ្ទៃស្រាល, 500–600 សម្រាប់ប៊ូតុង, 700–900 សម្រាប់អក្សរ។ លេខ contrast បង្ហាញជាមួយអក្សរស ឬខ្មៅ (មួយណាល្អជាង)។</p><p class="note" id="pcopied"></p>`;
    const set = v => { if (okHex(v)) { S.base = norm(v); palette(el); } };
    el.querySelector("#pbase").oninput = e => set(e.target.value); el.querySelector("#pbaseh").onchange = e => set(e.target.value);
    el.querySelectorAll(".tl-sw").forEach(b => b.onclick = () => { try { navigator.clipboard.writeText(b.dataset.c); } catch (e) { } el.querySelector("#pcopied").textContent = "បានចម្លង " + b.dataset.c; });
  }
  function type(el) {
    const names = ["Caption", "Body", "H4", "H3", "H2", "H1", "Display"], sizes = names.map((_, i) => Math.round(S.ts * Math.pow(S.tr, i - 1)));
    el.innerHTML = `<div class="tl-row"><label>ទំហំ Body<span><input type="range" id="tts" min="12" max="22" value="${S.ts}"><b>${S.ts}px</b></span></label>
      <label>សមាមាត្រ<span><select id="ttr">${[[1.125, "1.125 Major Second"], [1.2, "1.2 Minor Third"], [1.25, "1.25 Major Third"], [1.333, "1.333 Perfect Fourth"], [1.5, "1.5 Perfect Fifth"]].map(([v, t]) => `<option value="${v}" ${v == S.tr ? "selected" : ""}>${t}</option>`).join("")}</select></span></label>
      <label>Line height<span><input type="range" id="tlh" min="1.1" max="2.2" step=".1" value="${S.lh}"><b>${S.lh}</b></span></label></div>
      <div class="tl-type">${names.map((n, i) => `<div><span class="tl-tag">${n} · ${sizes[i]}px</span><div style="font-size:${sizes[i]}px;line-height:${S.lh};font-weight:${i > 1 ? 800 : 400}">រៀនរចនា UX/UI · Learn design</div></div>`).reverse().join("")}</div>
      <p class="note">${S.lh < 1.5 ? "⚠ Line height ទាបពេកសម្រាប់អក្សរខ្មែរ — ជើង និងស្រៈអាចជាន់គ្នា។ សាក 1.6–1.9។" : "Line height នេះល្អសម្រាប់អក្សរខ្មែរ។"} ចម្លងតម្លៃទាំងនេះទៅ Text styles ក្នុង Figma។</p>`;
    el.querySelector("#tts").oninput = e => { S.ts = +e.target.value; type(el); };
    el.querySelector("#ttr").onchange = e => { S.tr = +e.target.value; type(el); };
    el.querySelector("#tlh").oninput = e => { S.lh = +(+e.target.value).toFixed(1); type(el); };
  }
  function grid(el) {
    const V = { mobile: { w: 390, c: 4, g: 16, m: 16 }, tablet: { w: 768, c: 8, g: 24, m: 32 }, desktop: { w: 1440, c: 12, g: 24, m: 80 } }, v = V[S.vp];
    const cw = (v.w - 2 * v.m - (v.c - 1) * v.g) / v.c, sc = Math.min(1, 640 / v.w);
    const cardCols = S.vp === "mobile" ? 4 : S.vp === "tablet" ? 4 : 3;
    el.innerHTML = `${["mobile", "tablet", "desktop"].map(k => `<button class="chip" data-vp="${k}" aria-pressed="${k === S.vp}">${{ mobile: "📱 ទូរស័ព្ទ", tablet: "📲 Tablet", desktop: "🖥 Desktop" }[k]}</button>`).join(" ")}
      <div class="tl-gridwrap"><div class="tl-gridbox" style="width:${v.w * sc}px;padding:0 ${v.m * sc}px;gap:${v.g * sc}px;grid-template-columns:repeat(${v.c},1fr)">${Array.from({ length: v.c }, () => "<i></i>").join("")}
        <div class="tl-cards" style="left:${v.m * sc}px;right:${v.m * sc}px;gap:${v.g * sc}px;grid-template-columns:repeat(${v.c},1fr)">${Array.from({ length: S.vp === "mobile" ? 2 : S.vp === "tablet" ? 4 : 8 }, () => `<b style="grid-column:span ${cardCols}"></b>`).join("")}</div></div></div>
      <div class="tl-grid4"><span>ទទឹង frame</span><b>${v.w}px</b><span>Columns</span><b>${v.c}</b><span>Gutter</span><b>${v.g}px</b><span>Margin</span><b>${v.m}px</b><span>ទទឹង column</span><b>${cw.toFixed(1)}px</b><span>កាតនីមួយៗលាត</span><b>${cardCols} columns</b></div>
      <h4 style="margin:14px 0 6px">មាត្រដ្ឋានចន្លោះ 8pt</h4><div class="tl-space">${[4, 8, 12, 16, 24, 32, 40, 48, 64].map(n => `<div><i style="width:${n}px;height:${n}px"></i><span>${n}</span></div>`).join("")}</div>
      <p class="note">ក្នុង Figma៖ ជ្រើស Frame → Layout grid → + → Columns ហើយដាក់តម្លៃខាងលើ។</p>`;
    el.querySelectorAll("[data-vp]").forEach(b => b.onclick = () => { S.vp = b.dataset.vp; grid(el); });
  }
  function wire(el) {
    el.innerHTML = `<div class="tl-wire"><div class="tl-wphone">${XC.uxWire({ name: "Wireframe", b: S.wire, tab: S.tab ? [5, 0] : null }, S.wstyle, "#e2556e")}</div>
      <div class="tl-wside"><div class="tl-row" style="margin:0"><button class="chip" data-ws="lo" aria-pressed="${S.wstyle === "lo"}">Wireframe</button><button class="chip" data-ws="hi" aria-pressed="${S.wstyle === "hi"}">Hi-fi</button><label style="flex-direction:row;align-items:center;gap:6px"><input type="checkbox" id="wtab" ${S.tab ? "checked" : ""}>Tab bar</label></div>
        <h4 style="margin:10px 0 6px">ចុចដើម្បីបន្ថែមប្លុក</h4><div class="tl-blocks">${BLOCKS.map((b, i) => `<button class="chip" data-wb="${i}">+ ${esc(b[1])}</button>`).join("")}</div>
        <h4 style="margin:12px 0 6px">ប្លុកក្នុងអេក្រង់ (${S.wire.length})</h4><ol class="tl-wlist">${S.wire.map((b, i) => { const n = (BLOCKS.find(x => x[0] === b[0] && JSON.stringify(x[2] || {}) === JSON.stringify(b[1] || {})) || [0, b[0]])[1]; return `<li><span>${esc(n)}</span>${i ? `<button data-wu="${i}" title="ឡើងលើ">↑</button>` : ""}<button data-wd="${i}" title="លុប">✕</button></li>`; }).join("")}</ol>
        <div class="toolbar"><button class="btn sm" id="wclear">សម្អាត</button><button class="btn sm primary" id="wsvg">⬇ ទាញយក SVG</button></div>
        <p class="note">គន្លឹះ៖ ប្លុកដែលលើសកម្ពស់អេក្រង់ នឹងមិនបង្ហាញទេ — ដូចអេក្រង់ទូរស័ព្ទពិត ដែលត្រូវកំណត់អាទិភាព!</p></div></div>`;
    el.querySelectorAll("[data-ws]").forEach(b => b.onclick = () => { S.wstyle = b.dataset.ws; wire(el); });
    el.querySelector("#wtab").onchange = e => { S.tab = e.target.checked ? 1 : 0; wire(el); };
    el.querySelectorAll("[data-wb]").forEach(b => b.onclick = () => { const B = BLOCKS[+b.dataset.wb]; S.wire.push(B[2] ? [B[0], { ...B[2] }] : [B[0]]); wire(el); });
    el.querySelectorAll("[data-wd]").forEach(b => b.onclick = () => { S.wire.splice(+b.dataset.wd, 1); wire(el); });
    el.querySelectorAll("[data-wu]").forEach(b => b.onclick = () => { const i = +b.dataset.wu; [S.wire[i - 1], S.wire[i]] = [S.wire[i], S.wire[i - 1]]; wire(el); });
    el.querySelector("#wclear").onclick = () => { S.wire = [["status"]]; wire(el); };
    el.querySelector("#wsvg").onclick = () => { const svg = el.querySelector(".tl-wphone svg").outerHTML.replace("<svg ", '<svg width="400" height="820" '); const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" })); a.download = "wireframe.svg"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };
  }
  const FN = { contrast, palette, type, grid, wire };
  XC.uxTools = function (host) {
    host.innerHTML = `<div class="fv-list tl-pick">${TOOLS.map(t => `<button class="glass ${t.id === S.tool ? "on" : ""}" data-tool="${t.id}"><b>${esc(t.t)}</b><span class="note">${esc(t.d)}</span></button>`).join("")}</div><article class="lesson glass"><h3>${esc(TOOLS.find(t => t.id === S.tool).t)}</h3><div id="tlbody"></div></article>`;
    host.querySelectorAll("[data-tool]").forEach(b => b.onclick = () => { S.tool = b.dataset.tool; XC.uxTools(host); });
    FN[S.tool](host.querySelector("#tlbody"));
  };
})();
