/* xCenbar Learning — app logic */
(function () {
"use strict";

/* ================= helpers ================= */
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const KD = "០១២៣៤៥៦៧៨៩", kh = n => String(n).replace(/\d/g, d => KD[d]);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (a, b) => b ? a / b : 0;
const mem = {};
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return k in mem ? mem[k] : d; } },
  set(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { delete mem[k]; try { localStorage.removeItem(k); } catch (e) {} }
};
function toast(msg) { const t = $("toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => t.hidden = true, 2300); }
function speak(text, lang = "en-US") {
  try {
    if (!window.speechSynthesis) return toast("ឧបករណ៍នេះមិនគាំទ្រសំឡេងទេ");
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = lang; u.rate = lang.startsWith("zh") ? .8 : .88;
    const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.replace("_", "-").startsWith(lang.slice(0, 2)));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {}
}
const sayBtn = (text, lang = "en-US", label = "ស្ដាប់") => `<button class="say" data-say="${esc(text)}" data-lang="${lang}" aria-label="${label}" title="${label}"><svg><use href="#spk"/></svg></button>`;
document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (b) { e.stopPropagation(); speak(b.dataset.say, b.dataset.lang || "en-US"); } });
async function copyText(t) { try { await navigator.clipboard.writeText(t); toast("បានចម្លង"); } catch (e) { toast("ចម្លងមិនបាន សូមជ្រើសអក្សរដោយដៃ"); } }
const chips = (items, cur, attr) => `<div class="tabs">${items.map(i => `<button class="chip ${i.done ? "done" : ""}" data-${attr}="${esc(i.id)}" aria-pressed="${String(i.id) === String(cur)}">${esc(i.label)}${i.n != null ? `<span class="n">${kh(i.n)}</span>` : ""}</button>`).join("")}</div>`;
const bind = (root, sel, fn) => root.querySelectorAll(sel).forEach(el => el.addEventListener("click", () => fn(el)));
const videoSlot = url => url
  ? `<div class="video"><iframe src="${esc(url)}" title="Lesson video" allowfullscreen></iframe></div>`
  : `<div class="video"><div><svg><use href="#play"/></svg><p>វីដេអូមេរៀននឹងដាក់នៅទីនេះ</p><p class="note">ដាក់ link YouTube ក្នុងឯកសារ data (មើល README)</p></div></div>`;

/* ================= generic quiz ================= */
function shuffleQ(q) { const idx = shuffle(q.opts.map((_, i) => i)); return { ...q, opts: idx.map(i => q.opts[i]), a: idx.indexOf(q.a) }; }
function fromTriple(t, prompt = "ជ្រើសរើសចម្លើយត្រឹមត្រូវ") { return shuffleQ({ prompt, big: t[0], bigStyle: "font-size:clamp(20px,4.4vw,28px);font-family:var(--f-body)", opts: t[1], a: t[2] }); }
function runQuiz(el, qs, { onDone } = {}) {
  let n = 0, score = 0, lock = false; const total = qs.length;
  function draw() {
    if (n >= total) {
      const r = score / total;
      el.innerHTML = `<div class="quiz glass done-box"><span class="eyebrow">លទ្ធផល</span><div class="big">${kh(score)}/${kh(total)}</div>
        <p>${r === 1 ? "អស្ចារ្យណាស់! ត្រូវទាំងអស់" : r >= .7 ? "ល្អណាស់! បន្តព្យាយាម" : "មិនអីទេ រៀនឡើងវិញ ហើយសាកម្ដងទៀត"}</p>
        <button class="btn primary" data-again>ធ្វើម្ដងទៀត</button></div>`;
      onDone && onDone(score, total);
      el.querySelector("[data-again]").onclick = () => { n = 0; score = 0; qs = qs.map(shuffleQ); draw(); };
      return;
    }
    const q = qs[n];
    el.innerHTML = `<div class="quiz glass">
      <div class="progress"><span style="width:${n / total * 100}%"></span></div>
      <div class="section-title"><span class="note">${esc(q.prompt)}</span><span class="count">${kh(n + 1)}/${kh(total)} · ពិន្ទុ ${kh(score)}</span></div>
      ${q.big ? `<div style="display:flex;gap:12px;align-items:center"><div class="big" style="${q.bigStyle || ""}">${esc(q.big)}</div>${q.say ? sayBtn(q.say, q.lang) : ""}</div>` : ""}
      <div class="grid">${q.opts.map((o, i) => `<button class="opt" data-i="${i}" style="${q.optStyle || ""}">${esc(o)}</button>`).join("")}</div>
      <div class="result" data-fb></div></div>`;
    el.querySelectorAll(".grid .opt").forEach(b => b.onclick = () => {
      if (lock) return; lock = true;
      const i = +b.dataset.i, ok = i === q.a, fb = el.querySelector("[data-fb]");
      el.querySelectorAll(".grid .opt")[q.a].classList.add("right");
      if (ok) { score++; fb.style.color = "var(--good)"; fb.textContent = "ត្រឹមត្រូវ! " + (q.after || ""); }
      else { b.classList.add("wrong"); fb.style.color = "var(--bad)"; fb.textContent = `ចម្លើយត្រូវគឺ «${q.opts[q.a]}» ` + (q.after || ""); }
      if (q.sayAfter) speak(q.sayAfter, q.lang);
      setTimeout(() => { n++; lock = false; draw(); }, ok ? 1100 : 2000);
    });
  }
  draw();
}

/* ================= Khmer clock ================= */
const DAYS = ["អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"];
const MONTHS = ["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"];
function pnhNow() {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Phnom_Penh", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", second: "2-digit", hour12: false, weekday: "short" }).formatToParts(new Date());
  const g = t => p.find(x => x.type === t).value;
  return { y: +g("year"), m: +g("month"), d: +g("day"), h: +g("hour") % 24, mi: g("minute"), s: g("second"), wd: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(g("weekday")) };
}
const period = h => h < 12 ? "ព្រឹក" : h < 17 ? "រសៀល" : h < 19 ? "ល្ងាច" : "យប់";
function tick() {
  const n = pnhNow(), h12 = ((n.h + 11) % 12) + 1;
  const time = `${kh(h12)}:${kh(n.mi)}:${kh(n.s)} ${period(n.h)}`;
  const date = `ថ្ងៃ${DAYS[n.wd]} ទី${kh(n.d)} ខែ${MONTHS[n.m - 1]} ឆ្នាំ${kh(n.y)}`;
  document.querySelectorAll('[data-clock="time"]').forEach(e => e.textContent = time);
  document.querySelectorAll('[data-clock="date"]').forEach(e => e.textContent = date);
}
tick(); setInterval(tick, 1000);

/* ================= accounts (stored on this device) ================= */
async function hash(s) {
  try { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("xcb:" + s)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join(""); }
  catch (e) { let h = 5381; for (const c of "xcb:" + s) h = ((h << 5) + h + c.charCodeAt(0)) | 0; return "f" + (h >>> 0).toString(16); }
}
let USER = null, DATA = null;
const dataKey = () => "xcb-data-" + USER.email;
function loadData() { DATA = Object.assign({ known: {}, zhKnown: {}, done: {}, hw: {}, best: {}, writing: {}, days: [], logs: [] }, store.get(dataKey(), {})); }
function saveData() { store.set(dataKey(), DATA); }
function log(text) {
  const n = pnhNow(); DATA.logs.unshift({ t: Date.now(), text }); DATA.logs = DATA.logs.slice(0, 60);
  const day = `${n.y}-${n.m}-${n.d}`; if (!DATA.days.includes(day)) DATA.days.push(day);
  saveData();
}
const setBest = (k, s) => { if (s > (DATA.best[k] || 0)) { DATA.best[k] = s; saveData(); return true; } return false; };
const markDone = (k, text) => { if (!DATA.done[k]) { DATA.done[k] = 1; if (text) log(text); else saveData(); } };

function showTab(which) {
  const login = which === "login";
  $("t-login").setAttribute("aria-selected", login); $("t-signup").setAttribute("aria-selected", !login);
  $("f-login").hidden = !login; $("f-signup").hidden = login;
}
$("t-login").onclick = () => showTab("login"); $("t-signup").onclick = () => showTab("signup");
document.querySelectorAll("[data-eye]").forEach(b => b.onclick = () => { const i = $(b.dataset.eye); const show = i.type === "password"; i.type = show ? "text" : "password"; b.textContent = show ? "លាក់" : "បង្ហាញ"; });
const validEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

$("f-signup").addEventListener("submit", async e => {
  e.preventDefault(); const err = $("su-err");
  const name = $("su-name").value.trim(), email = $("su-email").value.trim().toLowerCase(), p = $("su-pass").value, p2 = $("su-pass2").value;
  if (!name) return err.textContent = "សូមបញ្ចូលឈ្មោះរបស់អ្នក។";
  if (!validEmail(email)) return err.textContent = "អ៊ីមែលមិនត្រឹមត្រូវ។ ឧទាហរណ៍៖ dara@gmail.com";
  if (p.length < 6) return err.textContent = "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច ៦ តួ។";
  if (p !== p2) return err.textContent = "ពាក្យសម្ងាត់ទាំងពីរមិនដូចគ្នាទេ។";
  const users = store.get("xcb-users", {});
  if (users[email]) return err.textContent = "អ៊ីមែលនេះមានគណនីរួចហើយ។ សូមចូលគណនីវិញ។";
  users[email] = { name, hash: await hash(p), created: Date.now() }; store.set("xcb-users", users);
  err.textContent = ""; enter({ email, name }, "បានបង្កើតគណនី ហើយចូលរៀនលើកដំបូង");
});
$("f-login").addEventListener("submit", async e => {
  e.preventDefault(); const err = $("li-err");
  const email = $("li-email").value.trim().toLowerCase(), p = $("li-pass").value;
  const u = store.get("xcb-users", {})[email];
  if (!u) return err.textContent = "រកមិនឃើញគណនីនេះទេ។ សូមបង្កើតគណនីថ្មី។";
  if (u.hash !== await hash(p)) return err.textContent = "ពាក្យសម្ងាត់មិនត្រឹមត្រូវ។ សូមព្យាយាមម្ដងទៀត។";
  err.textContent = ""; enter({ email, name: u.name }, "បានចូលគណនី");
});
$("demo").onclick = () => enter({ email: "guest", name: "ភ្ញៀវ" }, "បានចូលជាភ្ញៀវ");
$("logout").onclick = () => { store.del("xcb-session"); USER = null; $("app").hidden = true; $("auth").hidden = false; $("f-login").reset(); scrollTo(0, 0); };

function enter(u, msg) {
  USER = u; store.set("xcb-session", u); loadData(); if (msg) log(msg);
  $("auth").hidden = true; $("app").hidden = false;
  $("avatar").textContent = [...u.name][0] || "?"; $("avatar").title = u.name;
  go("home");
}

/* ================= navigation ================= */
const VIEWS = { home: renderHome, english: renderEnglish, chinese: renderChinese, code: renderCode, uxui: renderUX, graphic: renderGD, video: renderVE };
function go(v) {
  Object.keys(VIEWS).forEach(x => $("v-" + x).hidden = x !== v);
  document.querySelectorAll("#subnav button").forEach(b => b.setAttribute("aria-current", b.dataset.v === v));
  VIEWS[v](); scrollTo({ top: 0 });
}
document.querySelectorAll("#subnav button").forEach(b => b.onclick = () => go(b.dataset.v));

/* ================= progress ================= */
const ALL_VERBS = Object.values(XC.verbs).flat();
const ALL_ZH = Object.values(XC.hsk).flat();
const doneCount = prefix => Object.keys(DATA.done).filter(k => k.startsWith(prefix)).length;
const hwList = t => t.id === "sql" ? XC.homeworkSQL : t.id === "html" ? XC.homeworkHTML : XC.homeworkGeneral;
function trackPct(t) { return Math.round(pct(doneCount(`code:${t.id}:`), t.lessons.length) * 60 + pct(Object.keys(DATA.hw).filter(k => k.startsWith(t.id + ":")).length, hwList(t).length) * 40); }
function progress() {
  const en = Math.round(pct(Object.keys(DATA.known).length, ALL_VERBS.length) * 40 + pct(doneCount("en:g:"), XC.grammar.length) * 40 + pct(doneCount("en:r:"), XC.reading.length) * 20);
  const zh = Math.round(pct(Object.keys(DATA.zhKnown).length, ALL_ZH.length) * 70 + (DATA.done["zh:read"] ? 15 : 0) + Math.min(15, (DATA.best.zh || 0) * 1.5));
  const code = Math.round(XC.codeTracks.reduce((s, t) => s + trackPct(t), 0) / XC.codeTracks.length);
  const ux = Math.round(pct(doneCount("ux:"), XC.uxLessons.length) * 70 + pct(doneCount("uxp:"), XC.uxProjects.length) * 20 + ((DATA.best.ux || 0) >= 7 ? 10 : 0));
  const gd = Math.round(pct(doneCount("gd:"), XC.gdLessons.length) * 85 + ((DATA.best.gd || 0) >= 5 ? 15 : 0));
  const video = Math.round(pct(doneCount("ve:"), XC.veLessons.length) * 70 + pct(doneCount("vep:"), XC.veProjects.length) * 20 + ((DATA.best.ve || 0) >= 6 ? 10 : 0));
  return { english: en, chinese: zh, code, uxui: ux, graphic: gd, video };
}

/* ================= HOME ================= */
const SUBJECTS = [
  { v: "english", ic: "En", name: "English", desc: "Verb 1-2-3 (៦ កម្រិត), Grammar A1–C2, Reading & Writing, Conversation" },
  { v: "chinese", ic: "中", name: "ភាសាចិន", desc: "HSK 1–6, Pinyin, បកប្រែចិន↔ខ្មែរ, សន្ទនា, អំណាន, តេស្ត" },
  { v: "code", ic: "</>", name: "Code / IT", desc: "Python, C/C++, C#, PHP, SQL, Java/Kotlin, JavaScript, HTML/CSS" },
  { v: "uxui", ic: "UX", name: "UX/UI Design", desc: "ពីកម្រិតដំបូងដល់ Hero · គម្រោងរចនា App និង Website · Figma" },
  { v: "graphic", ic: "Gd", name: "Graphic Design", desc: "ពណ៌ ពុម្ពអក្សរ Layout ឡូហ្គោ Social Media" },
  { v: "video", ic: "Ve", name: "Video Editing", desc: "CapCut, DaVinci Resolve · កាត់ សំឡេង អក្សរ ពណ៌ Export · Freelance" }];
function renderHome() {
  const n = pnhNow(), greet = n.h < 12 ? "អរុណសួស្ដី" : n.h < 17 ? "ទិវាសួស្ដី" : "សាយណ្ហសួស្ដី", P = progress();
  const lessons = doneCount("en:g:") + doneCount("code:") + doneCount("ux:") + doneCount("gd:") + doneCount("ve:");
  $("v-home").innerHTML = `
    <div class="welcome"><span class="eyebrow">Dashboard</span><h1>${greet}, ${esc(USER.name)}</h1>
      <p style="color:var(--muted)">ជ្រើសរើសមុខវិជ្ជា ហើយបន្តការរៀនពីកន្លែងដែលអ្នកឈប់។</p></div>
    <div class="stats">
      <div class="stat glass"><b>${kh(Object.keys(DATA.known).length)}</b><span>Verb ដែលស្គាល់ (ក្នុង ${kh(ALL_VERBS.length)})</span></div>
      <div class="stat glass"><b>${kh(Object.keys(DATA.zhKnown).length)}</b><span>ពាក្យចិនដែលស្គាល់</span></div>
      <div class="stat glass"><b>${kh(lessons)}</b><span>មេរៀនដែលបានបញ្ចប់</span></div>
      <div class="stat glass"><b>${kh(DATA.days.length)}</b><span>ថ្ងៃដែលបានរៀន</span></div>
    </div>
    <div class="section-title"><h2>មុខវិជ្ជា</h2></div>
    <div class="subjects">${SUBJECTS.map(s => `<button class="subj glass" data-go="${s.v}">
      <div class="ic">${esc(s.ic)}</div><h3>${s.name}</h3><p>${s.desc}</p>
      <div class="bar"><span style="width:${P[s.v]}%"></span></div><span class="pct">វឌ្ឍនភាព ${kh(P[s.v])}%</span></button>`).join("")}</div>
    <div class="section-title"><h2>កំណត់ត្រាសកម្មភាព</h2><button class="btn ghost sm" id="clearlog">លុបកំណត់ត្រា</button></div>
    <div class="logs glass">${DATA.logs.length ? DATA.logs.slice(0, 15).map(l => {
      const t = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Phnom_Penh", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(l.t));
      return `<div class="log"><span class="dot"></span><div>${esc(l.text)}</div><time>${kh(t)}</time></div>`; }).join("")
      : `<div class="empty">មិនទាន់មានសកម្មភាពទេ។ ចាប់ផ្ដើមរៀនមេរៀនដំបូងរបស់អ្នក!</div>`}</div>`;
  bind($("v-home"), "[data-go]", b => go(b.dataset.go));
  $("clearlog").onclick = () => { DATA.logs = []; saveData(); renderHome(); toast("បានលុបកំណត់ត្រា"); };
}

/* ================= ENGLISH ================= */
const EN = { tab: "verbs", vLevel: 1, vPage: 0, vQuery: "", gLevel: "A1", gIdx: null, rLevel: "A1", rIdx: null, hideKh: false, cIdx: 0, qLevel: 1, qMode: "v123" };
const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];
function renderEnglish() {
  const el = $("v-english");
  el.innerHTML = `<div class="section-title"><div><span class="eyebrow">English · A1–C2</span><h2>រៀនភាសាអង់គ្លេស</h2></div></div>
    ${chips([{ id: "verbs", label: "Verb 1, 2, 3" }, { id: "grammar", label: "Grammar" }, { id: "reading", label: "Reading & Writing" }, { id: "books", label: "📚 សៀវភៅ Reading & Grammar" }, { id: "conv", label: "Conversation" }, { id: "quiz", label: "តេស្ត Verb" }], EN.tab, "t")}
    <div id="en-body" class="view"></div>`;
  bind(el, "[data-t]", b => { EN.tab = b.dataset.t; renderEnglish(); });
  ({ verbs: enVerbs, grammar: enGrammar, reading: enReading, books: enBooks, conv: enConv, quiz: enQuiz })[EN.tab]($("en-body"));
}
/* word-form cell (n · adj) for the verb table */
function wfCell(v1) {
  const f = XC.wordForms && XC.wordForms[v1];
  if (!f || (!f.n && !f.adj)) return `<span class="wf-none">—</span>`;
  const row = (pos, w, k) => w ? `<div class="wf-row"><span class="pos pos-${pos}">${pos}</span><span><b>${esc(w)}</b><i>${esc(k)}</i></span></div>` : "";
  return row("n", f.n, f.nkh) + row("adj", f.adj, f.adjkh);
}
function enVerbs(body) {
  const PER = 25, q = EN.vQuery.toLowerCase().trim();
  const L = XC.verbLevels[EN.vLevel - 1];
  const list = q ? ALL_VERBS.filter(v => { const f = (XC.wordForms || {})[v.v1] || {}; return [v.v1, v.v2, v.v3, v.kh, f.n || "", f.adj || ""].some(s => s.toLowerCase().includes(q)); }) : XC.verbs[EN.vLevel];
  const pages = Math.max(1, Math.ceil(list.length / PER)); EN.vPage = Math.min(EN.vPage, pages - 1);
  const slice = list.slice(EN.vPage * PER, EN.vPage * PER + PER);
  body.innerHTML = `
    ${chips(XC.verbLevels.map(l => ({ id: l.id, label: `${l.name} · ${l.cefr}`, n: XC.verbs[l.id].length })), q ? "" : EN.vLevel, "l")}
    <div class="toolbar">
      <input type="search" id="vq" placeholder="ស្វែងរក verb ឬពាក្យខ្មែរ ក្នុងគ្រប់កម្រិត…" value="${esc(EN.vQuery)}">
      <span class="legend">${q ? `លទ្ធផល ${kh(list.length)} ពាក្យ` : `${L.name}${L.id < 7 ? ` (ពាក្យទី ${L.range})` : ""} · ${L.use} · មាន ${kh(list.length)} ពាក្យ`} · <span style="color:var(--mango);font-weight:600">ពណ៌ទឹកក្រូច</span> = irregular</span>
    </div>
    <div class="tablewrap glass"><table>
      <thead><tr><th></th><th>V1 (Base)</th><th>V2 (Past)</th><th>V3 (Past Participle)</th><th class="wf-h"><span class="pos pos-n">n</span> · <span class="pos pos-adj">adj</span></th><th>អត្ថន័យ · ឧទាហរណ៍</th><th></th></tr></thead>
      <tbody>${slice.map(v => `<tr>
        <td>${sayBtn(`${v.v1}, ${v.v2.replace(" / ", " or ")}, ${v.v3.replace(" / ", " or ")}. ${v.ex}`)}</td>
        <td class="v">${esc(v.v1)}</td><td class="v ${v.irr ? "irr" : ""}">${esc(v.v2)}</td><td class="v ${v.irr ? "irr" : ""}">${esc(v.v3)}</td>
        <td class="wf">${wfCell(v.v1)}</td>
        <td><div style="font-weight:600">${esc(v.kh)}</div><div class="ex">${esc(v.ex)}</div>${v.exkh ? `<div class="ex" style="color:var(--mint)">${esc(v.exkh)}</div>` : ""}</td>
        <td><button class="known ${DATA.known[v.v1] ? "on" : ""}" data-k="${esc(v.v1)}">${DATA.known[v.v1] ? "✓ ស្គាល់" : "ស្គាល់?"}</button></td></tr>`).join("")
      || `<tr><td colspan="7" class="empty">រកមិនឃើញពាក្យ «${esc(EN.vQuery)}» ទេ។</td></tr>`}</tbody></table></div>
    <div class="pager"><button class="btn sm" id="vprev" ${EN.vPage === 0 ? "disabled" : ""}>← មុន</button><span class="count">ទំព័រ ${kh(EN.vPage + 1)} / ${kh(pages)}</span><button class="btn sm" id="vnext" ${EN.vPage >= pages - 1 ? "disabled" : ""}>បន្ទាប់ →</button></div>`;
  bind(body, "[data-l]", b => { EN.vLevel = +b.dataset.l; EN.vPage = 0; EN.vQuery = ""; enVerbs(body); });
  const vq = $("vq"); vq.oninput = () => { EN.vQuery = vq.value; EN.vPage = 0; enVerbs(body); const n = $("vq"); n.focus(); n.setSelectionRange(n.value.length, n.value.length); };
  $("vprev").onclick = () => { EN.vPage--; enVerbs(body); }; $("vnext").onclick = () => { EN.vPage++; enVerbs(body); };
  bind(body, "[data-k]", b => {
    const k = b.dataset.k;
    if (DATA.known[k]) { delete DATA.known[k]; saveData(); } else { DATA.known[k] = 1; log(`ស្គាល់ verb «${k}»`); }
    b.classList.toggle("on", !!DATA.known[k]); b.textContent = DATA.known[k] ? "✓ ស្គាល់" : "ស្គាល់?";
  });
}
const plainEx = t => t.replace(/\[Ø\]\s*/g, "").replace(/[\[\]]/g, "");
const markEx = t => esc(t).replace(/\[([^\]]+)\]/g, '<mark class="gm">$1</mark>');
const FORM_META = { "+": { sym: "+", kh: "វិជ្ជមាន", cls: "f-pos" }, "-": { sym: "−", kh: "អវិជ្ជមាន", cls: "f-neg" }, "?": { sym: "?", kh: "សំណួរ", cls: "f-q" } };
/* Sentence-transform exercise built from XC.grammarForms: change (+) to (−)/(?) and identify the form */
const FORM_NAMES = { "+": "(+) វិជ្ជមាន", "-": "(−) អវិជ្ជមាន", "?": "(?) សំណួរ" };
function formQuiz(g) {
  const big = "font-size:clamp(18px,4vw,24px);font-family:var(--f-body)";
  const own = XC.grammarForms[g.title] || [];
  const others = shuffle(XC.grammar.filter(x => x.lv === g.lv && x.title !== g.title && XC.grammarForms[x.title]).map(x => XC.grammarForms[x.title])).slice(0, 3);
  const qs = [];
  [own, ...others].forEach((F, k) => {
    const ex = F.map(f => plainEx(f.ex)), pos = ex[0];
    const uniq = new Set(ex).size === 3;
    if (uniq) {
      qs.push(shuffleQ({ prompt: "ប្ដូរទៅជាទម្រង់ (−) អវិជ្ជមាន", big: pos, bigStyle: big, opts: ex, a: 1 }));
      qs.push(shuffleQ({ prompt: "ប្ដូរទៅជាទម្រង់ (?) សំណួរ", big: pos, bigStyle: big, opts: ex, a: 2 }));
    }
    const j = k === 0 ? 1 : Math.floor(Math.random() * 3);
    qs.push(shuffleQ({ prompt: "ប្រយោគនេះជាទម្រង់អ្វី?", big: ex[j], bigStyle: big, opts: ["+", "-", "?"].map(x => FORM_NAMES[x]), a: j }));
  });
  return qs.slice(0, 10);
}
function enGrammar(body) {
  const items = XC.grammar.map((g, i) => ({ ...g, i })).filter(g => g.lv === EN.gLevel);
  if (EN.gIdx == null || XC.grammar[EN.gIdx].lv !== EN.gLevel) EN.gIdx = items[0].i;
  const g = XC.grammar[EN.gIdx];
  body.innerHTML = `
    ${chips(CEFR.map(l => ({ id: l, label: l, done: XC.grammar.filter((x, i) => x.lv === l && DATA.done["en:g:" + i]).length === XC.grammar.filter(x => x.lv === l).length })), EN.gLevel, "g")}
    ${chips(items.map(x => ({ id: x.i, label: x.title, done: DATA.done["en:g:" + x.i] })), EN.gIdx, "gi")}
    <article class="lesson glass">
      <span class="eyebrow">Grammar · ${g.lv}</span><h3>${esc(g.title)}</h3>
      <p>${esc(g.kh)}</p><div class="rule">${esc(g.rule)}</div>
      ${XC.grammarForms && XC.grammarForms[g.title] ? `<div class="forms"><div class="forms-h">ទម្រង់ប្រយោគ · Sentence forms</div>${XC.grammarForms[g.title].map(f => { const m = FORM_META[f.sign]; return `<div class="form-row ${m.cls}"><div class="form-tag"><b>${m.sym}</b><span>${m.kh}</span></div><div class="form-body"><code>${esc(f.st)}</code><div class="form-ex">${sayBtn(plainEx(f.ex))}<span>${markEx(f.ex)}<i>${esc(f.kh)}</i></span></div></div></div>`; }).join("")}</div>` : ""}
      <p class="note gm-legend"><mark class="gm">ពាក្យពណ៌</mark> = ចំណុច grammar សំខាន់ក្នុងប្រយោគ</p>
      <ul class="exlist">${g.ex.map(e => `<li>${sayBtn(plainEx(e[0]))}<span>${markEx(e[0])}<i>${esc(e[1])}</i></span></li>`).join("")}</ul>
      <div class="toolbar"><button class="btn primary" id="gstart">ចាប់ផ្ដើមលំហាត់ (${kh(g.q.length)} សំណួរ)</button>
        <button class="btn" id="gtest">តេស្តកម្រិត ${g.lv}</button>
        ${XC.grammarForms && XC.grammarForms[g.title] ? `<button class="btn" id="gform">ប្ដូរប្រយោគ (+ → − → ?)</button>` : ""}
        <span class="note">ពិន្ទុខ្ពស់បំផុតតេស្ត ${g.lv}៖ ${kh(DATA.best["en:test:" + g.lv] || 0)}</span></div>
    </article>
    <div id="gquiz"></div>
    <article class="lesson glass"><span class="eyebrow">Homework · ${g.lv}</span><p>${esc(XC.homework[g.lv])}</p>
      <textarea id="ghw" rows="5"></textarea>
      <div class="toolbar"><button class="btn" id="ghwsave">រក្សាទុកកិច្ចការផ្ទះ</button><span class="note" id="ghwc"></span></div></article>`;
  bind(body, "[data-g]", b => { EN.gLevel = b.dataset.g; EN.gIdx = null; enGrammar(body); });
  bind(body, "[data-gi]", b => { EN.gIdx = +b.dataset.gi; enGrammar(body); });
  $("gstart").onclick = () => { runQuiz($("gquiz"), g.q.map(t => fromTriple(t)), { onDone: (s, t) => { if (s >= t - 1) markDone("en:g:" + EN.gIdx, `បញ្ចប់ Grammar ${g.lv} «${g.title}» (${s}/${t})`); else log(`លំហាត់ Grammar «${g.title}» ${s}/${t}`); } }); $("gquiz").scrollIntoView({ behavior: "smooth", block: "center" }); };
  if ($("gform")) $("gform").onclick = () => { runQuiz($("gquiz"), formQuiz(g), { onDone: (sc, t) => { setBest("en:form:" + g.lv, sc); log(`លំហាត់ប្ដូរប្រយោគ «${g.title}» ${sc}/${t}`); } }); $("gquiz").scrollIntoView({ behavior: "smooth", block: "center" }); };
  $("gtest").onclick = () => { const all = shuffle(XC.grammar.filter(x => x.lv === g.lv).flatMap(x => x.q)).slice(0, 10); runQuiz($("gquiz"), all.map(t => fromTriple(t)), { onDone: (s, t) => { setBest("en:test:" + g.lv, s); log(`តេស្ត Grammar ${g.lv}៖ ${s}/${t}`); } }); $("gquiz").scrollIntoView({ behavior: "smooth", block: "center" }); };
  const hw = $("ghw"), wc = () => $("ghwc").textContent = `${kh((hw.value.match(/[A-Za-z']+/g) || []).length)} ពាក្យ`;
  hw.value = DATA.writing["hw:" + g.lv] || ""; wc(); hw.oninput = wc;
  $("ghwsave").onclick = () => { DATA.writing["hw:" + g.lv] = hw.value; log(`រក្សាទុកកិច្ចការផ្ទះ Grammar ${g.lv}`); toast("បានរក្សាទុក"); };
}
function enReading(body) {
  const items = XC.reading.map((r, i) => ({ ...r, i })).filter(r => r.lv === EN.rLevel);
  if (EN.rIdx == null || XC.reading[EN.rIdx].lv !== EN.rLevel) EN.rIdx = items[0].i;
  const ri = EN.rIdx, s = XC.reading[ri], wkey = "read:" + (ri < 6 ? s.lv : ri);
  body.innerHTML = `
    ${chips(CEFR.map(l => { const all = XC.reading.map((r, i) => ({ r, i })).filter(x => x.r.lv === l); return { id: l, label: l, n: all.length, done: all.every(x => DATA.done["en:r:" + x.i]) }; }), EN.rLevel, "r")}
    ${chips(items.map(x => ({ id: x.i, label: x.title, done: DATA.done["en:r:" + x.i] })), EN.rIdx, "ri")}
    <article class="lesson glass">
      <div class="section-title"><div><span class="eyebrow">Reading · ${s.lv} · ${kh(s.lines.reduce((n, l) => n + (plainEx(l[0]).match(/[A-Za-z']+/g) || []).length, 0))} ពាក្យ</span><h3>${esc(s.title)}</h3>${s.focus ? `<div class="focus-tag">Grammar៖ ${esc(s.focus)}</div>` : ""}</div>
        <div class="toolbar"><button class="btn sm" data-say="${esc(s.lines.map(l => plainEx(l[0])).join(" "))}">▶ ស្ដាប់រឿងទាំងមូល</button><button class="btn sm" id="tkh">${EN.hideKh ? "បង្ហាញ" : "លាក់"}ភាសាខ្មែរ</button></div></div>
      <p class="note gm-legend"><mark class="gm">ពាក្យពណ៌</mark> = grammar ក្នុងរឿង · ចុចលើប្រយោគដើម្បីស្ដាប់</p>
      <div class="story ${EN.hideKh ? "hide-kh" : ""}">${s.lines.map(l => `<p data-say="${esc(plainEx(l[0]))}"><span class="en">${markEx(l[0])}</span><span class="khl">${esc(l[1])}</span></p>`).join("")}</div>
      <h3 style="font-size:17px">Question and Answer</h3>
      <div class="view" style="gap:14px">${s.q.map((q, i) => `<div class="qitem" data-qi="${i}"><span>${kh(i + 1)}. ${esc(q[0])}</span><div class="opts">${q[1].map((o, j) => `<button class="opt" data-o="${j}">${esc(o)}</button>`).join("")}</div></div>`).join("")}</div>
      <h3 style="font-size:17px">Writing</h3><p class="note">${esc(s.write)}</p>
      <textarea id="wr" rows="5"></textarea>
      <div class="toolbar"><button class="btn primary" id="wsave">រក្សាទុកការសរសេរ</button><span class="note" id="wcount"></span></div>
    </article>`;
  bind(body, "[data-r]", b => { EN.rLevel = b.dataset.r; EN.rIdx = null; enReading(body); });
  bind(body, "[data-ri]", b => { EN.rIdx = +b.dataset.ri; enReading(body); });
  $("tkh").onclick = () => { EN.hideKh = !EN.hideKh; enReading(body); };
  const answered = {};
  body.querySelectorAll(".qitem").forEach(qi => qi.querySelectorAll(".opt").forEach(o => o.onclick = () => {
    const i = +qi.dataset.qi, ans = s.q[i][2], btns = qi.querySelectorAll(".opt");
    btns.forEach(x => x.classList.remove("right", "wrong"));
    btns[ans].classList.add("right"); if (+o.dataset.o !== ans) o.classList.add("wrong");
    if (!(i in answered)) answered[i] = +o.dataset.o === ans;
    if (Object.keys(answered).length === s.q.length) { const sc = Object.values(answered).filter(Boolean).length; markDone("en:r:" + ri, `អាន «${s.title}» (${s.lv}) ឆ្លើយត្រូវ ${sc}/${s.q.length}`); }
  }));
  const wr = $("wr"), wc = () => $("wcount").textContent = `${kh((wr.value.match(/[A-Za-z']+/g) || []).length)} ពាក្យ`;
  wr.value = DATA.writing[wkey] || ""; wc(); wr.oninput = wc;
  $("wsave").onclick = () => { DATA.writing[wkey] = wr.value; log(`សរសេរលំហាត់ Writing ${s.lv}`); toast("បានរក្សាទុក"); };
}
function dialogHTML(c, zh) {
  return `<div class="dialog">${c.lines.map(l => `<div class="line ${l[0] === 1 ? "b" : ""}">${sayBtn(zh ? l[1] : plainEx(l[1]), zh ? "zh-CN" : "en-US")}<div class="bubble"><div class="who">${esc(c.who[l[0]])}</div>
    ${zh ? `<div class="zh">${esc(l[1])}</div><div class="py">${esc(l[2])}</div><div class="khl">${esc(l[3])}</div>` : `<div class="en">${markEx(l[1])}</div><div class="khl">${esc(l[2])}</div>`}</div></div>`).join("")}</div>`;
}
function enConv(body) {
  const all = XC.conversations.map((c, i) => ({ ...c, i }));
  if (!EN.cLevel) EN.cLevel = "A1";
  const items = all.filter(c => c.lv === EN.cLevel);
  const lvChips = chips(CEFR.map(l => { const xs = all.filter(c => c.lv === l); return { id: l, label: l, n: xs.length, done: xs.length && xs.every(x => DATA.done["en:c:" + x.i]) }; }), EN.cLevel, "cl");
  if (!items.length) { body.innerHTML = `${lvChips}<article class="lesson glass"><p class="note">កំពុងរៀបចំការសន្ទនាកម្រិត ${EN.cLevel}…</p></article>`; bind(body, "[data-cl]", b => { EN.cLevel = b.dataset.cl; EN.cIdx = null; enConv(body); }); return; }
  if (!items.some(c => c.i === EN.cIdx)) EN.cIdx = items[0].i;
  const c = XC.conversations[EN.cIdx], marked = c.lines.some(l => /\[/.test(l[1]));
  body.innerHTML = `${lvChips}
    ${chips(items.map(x => ({ id: x.i, label: x.title, done: DATA.done["en:c:" + x.i] })), EN.cIdx, "c")}
    <article class="lesson glass">
      <div class="section-title"><div><span class="eyebrow">Conversation · ${c.lv} · ${kh(c.lines.length)} ឃ្លា</span><h3>${esc(c.title)} · ${esc(c.kh)}</h3>${c.focus ? `<div class="focus-tag">Grammar៖ ${esc(c.focus)}</div>` : ""}</div>
        <div class="toolbar"><button class="btn sm mango" id="playall">▶ ស្ដាប់ទាំងអស់</button><button class="btn sm" id="ckh">${EN.hideKh ? "បង្ហាញ" : "លាក់"}ភាសាខ្មែរ</button><button class="btn sm" id="cdone">${DATA.done["en:c:" + c.i] ? "✓ បានហាត់រួច" : "សម្គាល់ថាបានហាត់"}</button></div></div>
      ${marked ? `<p class="note gm-legend"><mark class="gm">ពាក្យពណ៌</mark> = grammar ក្នុងការសន្ទនា</p>` : ""}
      <div class="${EN.hideKh ? "hide-kh" : ""}">${dialogHTML(c)}</div>
      <p class="note">គន្លឹះ៖ ស្ដាប់ម្ដងមួយឃ្លា រួចនិយាយតាម។ បន្ទាប់មកលាក់ភាសាខ្មែរ ហើយសាកដើរតួ ${esc(c.who[0])} ឬ ${esc(c.who[1])} ជាមួយមិត្តភក្តិ។</p>
    </article>`;
  bind(body, "[data-cl]", b => { EN.cLevel = b.dataset.cl; EN.cIdx = null; enConv(body); });
  bind(body, "[data-c]", b => { EN.cIdx = +b.dataset.c; enConv(body); });
  $("ckh").onclick = () => { EN.hideKh = !EN.hideKh; enConv(body); };
  $("cdone").onclick = () => { markDone("en:c:" + c.i, `ហាត់សន្ទនា «${c.title}» (${c.lv})`); enConv(body); };
  $("playall").onclick = () => { speak(c.lines.map(l => plainEx(l[1])).join(" ... ")); log(`ស្ដាប់សន្ទនា «${c.title}»`); };
}
function verbQuizItems(pool, n = 10) {
  return shuffle(pool).slice(0, n).map((v, i) => {
    const type = ["v2", "v3", "kh"][i % 3];
    const others = shuffle((pool.length >= 8 ? pool : ALL_VERBS).filter(x => x[type] !== v[type])).slice(0, 3);
    const opts = shuffle([v, ...others]);
    return { prompt: { v2: "តើ V2 (Past) របស់ verb នេះគឺអ្វី?", v3: "តើ V3 (Past Participle) របស់ verb នេះគឺអ្វី?", kh: "ពាក្យនេះមានន័យថាអ្វី?" }[type],
      big: v.v1, say: v.v1, opts: opts.map(o => o[type]), a: opts.indexOf(v), optStyle: type === "kh" ? "" : "font-family:var(--f-brand);font-weight:700",
      after: `${v.v1} → ${v.v2} → ${v.v3} (${v.kh})`, sayAfter: `${v.v1}, ${v.v2}, ${v.v3}` };
  });
}
function wfQuizItems(lv, n = 10) {
  const WF = XC.wordForms || {};
  const pool = XC.verbs[lv].filter(v => WF[v.v1] && (WF[v.v1].n || WF[v.v1].adj)).map(v => ({ v, f: WF[v.v1] }));
  const first = w => w.split(" / ")[0];
  const items = [];
  shuffle(pool).forEach(({ v, f }) => {
    if (items.length >= n) return;
    const types = [];
    if (f.n) types.push("n", "n2v", "nkh");
    if (f.adj) types.push("adj", "adjkh");
    const type = types[Math.floor(Math.random() * types.length)];
    const field = { n: "n", n2v: "v1", nkh: "nkh", adj: "adj", adjkh: "adjkh" }[type];
    const keyOf = x => field === "v1" ? x.v.v1 : x.f[field];
    const others = shuffle(pool.filter(x => x !== null && keyOf(x) && keyOf(x) !== keyOf({ v, f }) && (field !== "v1" || x.f.n))).slice(0, 3);
    if (others.length < 3) return;
    const opts = shuffle([{ v, f }, ...others]);
    const brand = "font-family:var(--f-brand);font-weight:700";
    const q = {
      n: { prompt: "តើទម្រង់ n (នាម) របស់ verb នេះគឺអ្វី?", big: v.v1, opts: opts.map(o => o.f.n), style: brand },
      n2v: { prompt: "នាមនេះមកពី verb មួយណា?", big: first(f.n), opts: opts.map(o => o.v.v1), style: brand },
      nkh: { prompt: "នាម (n) នេះមានន័យថាអ្វី?", big: first(f.n), opts: opts.map(o => o.f.nkh), style: "" },
      adj: { prompt: "តើទម្រង់ adj (គុណនាម) របស់ verb នេះគឺអ្វី?", big: v.v1, opts: opts.map(o => o.f.adj), style: brand },
      adjkh: { prompt: "គុណនាម (adj) នេះមានន័យថាអ្វី?", big: first(f.adj), opts: opts.map(o => o.f.adjkh), style: "" },
    }[type];
    items.push({ prompt: q.prompt, big: q.big, say: q.big, opts: q.opts, a: opts.indexOf(opts.find(o => o.v === v)), optStyle: q.style,
      after: `v. ${v.v1} (${v.kh})${f.n ? ` → n. ${f.n} (${f.nkh})` : ""}${f.adj ? ` → adj. ${f.adj} (${f.adjkh})` : ""}`,
      sayAfter: [v.v1, f.n, f.adj].filter(Boolean).join(", ") });
  });
  return items;
}
/* ---------- Books: Reading Book + Verb lesson (from learner's documents) ---------- */
function bookHilite(body, words) {
  let h = esc(body);
  const ws = words.map(w => w[0]).filter(Boolean).sort((a, b) => b.length - a.length);
  ws.forEach((w, i) => {
    const tok = t => { t = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); if (/re$/i.test(t)) return t.replace(/re$/i, "(?:re|er)"); if (/man$/i.test(t)) return t.replace(/man$/i, "m[ae]n"); return t.replace(/(ed|es|e|y|s)$/i, "") + "[a-z'-]*"; };
    const re = new RegExp(`\\b(${w.split(/\s+/).map(tok).join("\\s+")})\\b(?![^<]*>)`, "i");
    h = h.replace(re, m => `<mark class="bw" tabindex="0" data-w="${i}">${m}</mark>`);
  });
  return h.replace(/data-w="(\d+)"/g, (m, i) => { const w = words.find(x => x[0] === ws[+i]); return `data-kh="${esc(w ? w[1] : "")}"`; });
}
function enBooks(body) {
  if (!EN.bk) EN.bk = "read";
  const top = chips([{ id: "read", label: "📖 Reading Book (A2–C2)" }, { id: "verb", label: "✏️ មេរៀន Verb (Grammar)" }], EN.bk, "bk");
  if (EN.bk === "verb") return enBookVerb(body, top);
  const B = XC.bookReading;
  if (!EN.bs) EN.bs = "A";
  const parts = B.secs.map(([k, n]) => ({ id: k, label: `${k}. ${n}`, n: B.texts.filter(t => t.sec === k).length, done: B.texts.filter(t => t.sec === k).every(t => DATA.done["bk:t" + t.n]) }))
    .concat([{ id: "P", label: "E–L. Paragraph Bank", n: B.paras.length }, { id: "W", label: "✍️ ប្រធានបទសរសេរ", n: B.prompts.length }]);
  const head = `${top}<p class="note">${esc(B.title)} · អត្ថបទ ${kh(B.texts.length)} + Paragraph ${kh(B.paras.length)}</p>${chips(parts, EN.bs, "bs")}`;
  const bindTop = () => { bind(body, "[data-bk]", b => { EN.bk = b.dataset.bk; enBooks(body); }); bind(body, "[data-bs]", b => { EN.bs = b.dataset.bs; EN.bi = null; enBooks(body); }); };
  if (EN.bs === "W") {
    body.innerHTML = `${head}<article class="lesson glass"><h3>ប្រធានបទសរសេរ (Writing Prompts)</h3><p class="note">សរសេរ ៨០–១៥០ ពាក្យ។ អត្ថបទរក្សាទុកក្នុងឧបករណ៍នេះ។</p>
      ${B.prompts.map((p, i) => `<div class="bk-q"><b>${i + 1}. ${esc(p[0])}</b> <span class="pill">${p[1]}</span><textarea data-wp="${i}" rows="4" placeholder="Write here…">${esc(DATA.writing["bk:w" + i] || "")}</textarea><span class="note" data-wc="${i}"></span></div>`).join("")}
      <button class="btn primary" id="bkwsave">រក្សាទុក</button></article>`;
    bindTop();
    const wc = t => { const n = (t.value.match(/[A-Za-z']+/g) || []).length; body.querySelector(`[data-wc="${t.dataset.wp}"]`).textContent = `${n} ពាក្យ`; };
    body.querySelectorAll("[data-wp]").forEach(t => { wc(t); t.oninput = () => wc(t); });
    $("bkwsave").onclick = () => { body.querySelectorAll("[data-wp]").forEach(t => DATA.writing["bk:w" + t.dataset.wp] = t.value); saveData(); log("សរសេរ Writing prompts (Reading Book)"); toast("បានរក្សាទុក"); };
    return;
  }
  const isP = EN.bs === "P";
  const list = isP ? B.paras.map(p => ({ ...p, key: "bk:p" + p.id, label: `${p.id}. ${p.t}` })) : B.texts.filter(t => t.sec === EN.bs).map(t => ({ ...t, key: "bk:t" + t.n, label: `${t.n}. ${t.t}` }));
  if (!list.some(x => x.key === EN.bi)) EN.bi = list[0].key;
  const T = list.find(x => x.key === EN.bi), idx = list.indexOf(T);
  const grpChips = isP ? `<div class="bk-grp">${[...new Set(B.paras.map(p => p.grp))].map(g => `<span class="note">${esc(g)}</span>`).join(" · ")}</div>` : "";
  body.innerHTML = `${head}${grpChips}${chips(list.map(x => ({ id: x.key, label: `${x.label} · ${x.lv}`, done: DATA.done[x.key] })), EN.bi, "bi")}
    <article class="lesson glass bk-art"><div class="uxx-head"><div><span class="pill">${T.lv}${isP ? " · " + esc(T.grp) : ""}</span><h3 style="margin-top:8px">${isP ? T.id : "Text " + T.n}: ${esc(T.t)}</h3></div>
      <div class="toolbar" style="margin:0"><button class="btn sm primary" data-say="${esc(T.body)}">▶ ស្ដាប់អត្ថបទ</button><button class="btn sm" id="bkslow">🐢 ស្ដាប់យឺត</button><button class="btn sm" id="bkstop">■</button></div></div>
      <details class="bk-how"><summary>វិធីអាន ៥ ជំហាន (១៥–២០ នាទី)</summary><ol>${B.howto.map(x => `<li>${esc(x)}</li>`).join("")}</ol></details>
      <div class="bk-body">${bookHilite(T.body, T.words)}</div>
      <p class="note">ចុចលើពាក្យដែលបានគូស ដើម្បីមើលន័យខ្មែរ · ${kh((T.body.match(/[A-Za-z']+/g) || []).length)} ពាក្យ</p>
      <h4 style="margin:4px 0">Words</h4><div class="bk-words">${T.words.map(w => `<div>${sayBtn(w[0])}<b>${esc(w[0])}</b><span>${esc(w[1])}</span></div>`).join("")}</div>
      ${T.q ? `<h4 style="margin:8px 0 0">Questions</h4>${T.q.map((q, i) => `<div class="bk-q"><b>${i + 1}. ${esc(q)}</b><textarea rows="2" data-qa="${i}" placeholder="សរសេរចម្លើយរបស់អ្នក…">${esc(DATA.writing[T.key + ":q" + i] || "")}</textarea><button class="btn sm" data-show="${i}">✅ មើលចម្លើយ</button><div class="rule bk-ans" id="bka${i}" hidden>${esc(T.a[i] || "")}</div></div>`).join("")}` : ""}
      <h4 style="margin:8px 0 0">Retell — និយាយ/សរសេរឡើងវិញ ៣–៥ ប្រយោគ</h4><textarea id="bkretell" rows="4" placeholder="In this text, …">${esc(DATA.writing[T.key + ":r"] || "")}</textarea>
      <div class="toolbar"><button class="btn ${DATA.done[T.key] ? "" : "primary"}" id="bkdone">${DATA.done[T.key] ? "✓ បានអានរួច" : "ខ្ញុំបានអាន និងឆ្លើយរួច"}</button>
        <button class="btn sm" id="bkprev" ${idx ? "" : "disabled"}>← មុន</button><button class="btn sm" id="bknext" ${idx < list.length - 1 ? "" : "disabled"}>បន្ទាប់ →</button></div></article>`;
  bindTop();
  bind(body, "[data-bi]", b => { EN.bi = b.dataset.bi; enBooks(body); });
  body.querySelectorAll(".bk-body mark.bw").forEach(m => { const show = () => { body.querySelectorAll(".bk-body mark.on").forEach(x => x !== m && x.classList.remove("on")); m.classList.toggle("on"); }; m.onclick = show; m.onkeydown = e => { if (e.key === "Enter") show(); }; });
  bind(body, "[data-show]", b => { const a = $("bka" + b.dataset.show); a.hidden = !a.hidden; });
  $("bkslow").onclick = () => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(T.body); u.lang = "en-US"; u.rate = .65; const v = speechSynthesis.getVoices().find(v => /^en/.test(v.lang)); if (v) u.voice = v; speechSynthesis.speak(u); } catch (e) { } };
  $("bkstop").onclick = () => { try { speechSynthesis.cancel(); } catch (e) { } };
  const saveW = () => { body.querySelectorAll("[data-qa]").forEach(t => DATA.writing[T.key + ":q" + t.dataset.qa] = t.value); DATA.writing[T.key + ":r"] = $("bkretell").value; };
  $("bkdone").onclick = () => { saveW(); markDone(T.key, `អាន «${T.t}» (${T.lv}) — Reading Book`); enBooks(body); };
  $("bkprev").onclick = () => { saveW(); saveData(); EN.bi = list[idx - 1].key; enBooks(body); };
  $("bknext").onclick = () => { saveW(); saveData(); EN.bi = list[idx + 1].key; enBooks(body); };
}
function enBookVerb(body, top) {
  const V = XC.bookVerb;
  const blk = b => b[0] === "p" ? `<p>${esc(b[1])}</p>` : b[0] === "h" ? `<h5 class="bv-h">${esc(b[1])}</h5>` : b[0] === "tip" ? `<div class="ux-tip">💡 ${esc(b[1])}</div>`
    : b[0] === "ex" ? `<div class="bv-ex">${sayBtn(plainEx(b[1].replace(/^(Transitive|Intransitive): /, "")))}<span>${markEx(b[1])}</span>${b[2] ? `<small>${esc(b[2])}</small>` : ""}</div>`
    : b[0] === "list" ? `<div><b>${esc(b[1])}</b><ul>${b[2].map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`
    : b[0] === "table" ? `<div class="bv-tw"><table class="bv-t ${b[3] || ""}"><thead><tr>${b[1].map(x => `<th>${esc(x)}</th>`).join("")}${b[3] === "irr" ? "<th></th>" : ""}</tr></thead><tbody>${b[2].map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join("")}${b[3] === "irr" ? `<td>${sayBtn(r.slice(0, 3).join(", "))}</td>` : ""}</tr>`).join("")}</tbody></table></div>` : "";
  const sec = EN.bvs ?? 0, S = V.sec;
  const nav = chips(S.map((x, i) => ({ id: i, label: x.h, done: DATA.done["bv:" + i] })).concat([{ id: "ex", label: "៧. លំហាត់ និងចម្លើយ", done: DATA.done["bv:ex"] }, { id: "plan", label: "📅 ផែនការ ៧ ថ្ងៃ" }]), sec, "bvs");
  let main;
  if (sec === "plan") main = `<article class="lesson glass"><h3>${esc(V.title)}</h3><p style="line-height:1.9">${esc(V.intro)}</p><h4>ជំហានរៀន (៧ ថ្ងៃ)</h4><ol>${V.plan.map(x => `<li>${esc(x)}</li>`).join("")}</ol><h4>ប្រើជាមួយអ្វីខ្លះ?</h4><ul>${V.tools.map(x => `<li>${esc(x)}</li>`).join("")}</ul></article>`;
  else if (sec === "ex") main = `<article class="lesson glass"><h3>៧. លំហាត់ និងចម្លើយ</h3><p class="note">ធ្វើលំហាត់ដោយមិនមើលចម្លើយ រួចចុច «ពិនិត្យ»។</p>
    <h4>លំហាត់ ក៖ ជ្រើសរើស Verb ត្រឹមត្រូវ</h4>${V.exA.map((e, i) => { let k = 0; return `<div class="bv-row" data-ea="${i}">${i + 1}. ${esc(e[0]).replace(/___/g, () => `<input class="bv-in" data-k="${k++}" autocomplete="off" spellcheck="false">`)} <span class="bv-res"></span></div>`; }).join("")}
    <h4>លំហាត់ ខ៖ កែកំហុស</h4>${V.exB.map((e, i) => `<div class="bv-row" data-eb="${i}"><div>${i + 1}. <s class="bv-wrong">${esc(e[0])}</s></div><input class="bv-in wide" autocomplete="off" spellcheck="false" placeholder="សរសេរឃ្លាត្រឹមត្រូវ…"> <span class="bv-res"></span></div>`).join("")}
    <h4>លំហាត់ គ៖ សរសេរឃ្លាខ្លួនឯង</h4><p>${esc(V.exC.q)}</p><textarea id="bvc" rows="5" placeholder="Present Simple: …&#10;Past Simple: …&#10;Present Perfect: …&#10;Future: …">${esc(DATA.writing["bv:c"] || "")}</textarea>
    <details class="bk-how"><summary>ឧទាហរណ៍ចម្លើយ</summary><p>${esc(V.exC.a)}</p></details>
    <div class="toolbar"><button class="btn primary" id="bvcheck">ពិនិត្យចម្លើយ</button><button class="btn sm" id="bvshow">មើលចម្លើយទាំងអស់</button><span class="note" id="bvscore"></span></div></article>`;
  else { const x = S[sec]; main = `<article class="lesson glass bv"><h3>${esc(x.h)}</h3>${x.b.map(blk).join("")}<div class="toolbar"><button class="btn ${DATA.done["bv:" + sec] ? "" : "primary"}" id="bvdone">${DATA.done["bv:" + sec] ? "✓ បានរៀនរួច" : "ខ្ញុំបានរៀនផ្នែកនេះ"}</button><button class="btn sm" id="bvnext">បន្ទាប់ →</button></div></article>`; }
  body.innerHTML = `${top}<p class="note">${esc(V.title)} — ពីឯកសាររបស់អ្នក · ពាក្យដែលគូសពណ៌ = Verb</p>${nav}${main}`;
  bind(body, "[data-bk]", b => { EN.bk = b.dataset.bk; enBooks(body); });
  bind(body, "[data-bvs]", b => { const v = b.dataset.bvs; EN.bvs = /^\d+$/.test(v) ? +v : v; enBooks(body); });
  if (typeof sec === "number") {
    $("bvdone").onclick = () => { markDone("bv:" + sec, `រៀន «${S[sec].h}» — មេរៀន Verb`); enBooks(body); };
    $("bvnext").onclick = () => { EN.bvs = sec < S.length - 1 ? sec + 1 : "ex"; enBooks(body); window.scrollTo({ top: 0, behavior: "smooth" }); };
  }
  if (sec === "ex") {
    const n = s => s.toLowerCase().replace(/’/g, "'").replace(/\s+/g, " ").replace(/[.!?]+$/, "").trim();
    const mark = (row, ok, ans) => { row.querySelector(".bv-res").innerHTML = ok ? '<b class="tl-ok">✓</b>' : `<b class="tl-no">✗</b> <span class="note">${esc(ans)}</span>`; };
    const check = show => {
      let sc = 0, tot = 0;
      body.querySelectorAll("[data-ea]").forEach(row => { const e = V.exA[+row.dataset.ea], ins = [...row.querySelectorAll("input")]; tot++; let ok;
        if (ins.length > 1) ok = ins.every((inp, k) => n(inp.value) === e[1][k]); else ok = e[1].some(a => n(ins[0].value) === a);
        if (show && !ok) ins.forEach((inp, k) => inp.value = ins.length > 1 ? e[1][k] : e[1][0]);
        if (ok) sc++; mark(row, ok || show, ins.length > 1 ? e[1].join(" … ") : e[1][0]); });
      body.querySelectorAll("[data-eb]").forEach(row => { const e = V.exB[+row.dataset.eb], inp = row.querySelector("input"); tot++; const ok = n(inp.value) === n(e[1]); if (show && !ok) inp.value = e[1]; if (ok) sc++; mark(row, ok || show, e[1]); });
      DATA.writing["bv:c"] = $("bvc").value; saveData();
      $("bvscore").textContent = show ? "" : `ពិន្ទុ៖ ${kh(sc)}/${kh(tot)}`;
      if (!show && sc === tot) markDone("bv:ex", "លំហាត់មេរៀន Verb ត្រូវទាំងអស់");
    };
    $("bvcheck").onclick = () => check(false); $("bvshow").onclick = () => check(true);
  }
}

function enQuiz(body) {
  const wf = EN.qMode === "wf";
  if (wf && EN.qLevel > 6) EN.qLevel = 1;
  const key = (wf ? "en:wf:" : "en:verb:") + EN.qLevel;
  body.innerHTML = `${chips([{ id: "v123", label: "V1 · V2 · V3 · អត្ថន័យ" }, { id: "wf", label: "Word Forms (v → n · adj)" }], EN.qMode, "qm")}
    ${chips(XC.verbLevels.filter(l => !wf || l.id <= 6).map(l => ({ id: l.id, label: `${l.name} · ${l.cefr}` })), EN.qLevel, "ql")}
    <p class="note">${wf ? "សួរពីនាម (n) និងគុណនាម (adj) របស់ verb · " : ""}ពិន្ទុខ្ពស់បំផុត៖ ${kh(DATA.best[key] || 0)}/${kh(10)}</p><div id="vq-box"></div>`;
  bind(body, "[data-qm]", b => { EN.qMode = b.dataset.qm; enQuiz(body); });
  bind(body, "[data-ql]", b => { EN.qLevel = +b.dataset.ql; enQuiz(body); });
  const items = wf ? wfQuizItems(EN.qLevel) : verbQuizItems(XC.verbs[EN.qLevel]);
  runQuiz($("vq-box"), items, { onDone: (sc, t) => { const nb = setBest(key, sc); log(`តេស្ត ${wf ? "Word Forms" : "Verb"} កម្រិត ${EN.qLevel}៖ ${sc}/${t}${nb ? " (ពិន្ទុខ្ពស់ថ្មី)" : ""}`); } });
}

/* ================= CHINESE ================= */
const ZH = { tab: "words", lv: 1, tlv: 1, showPy: true, showKh: true };
function renderChinese() {
  const el = $("v-chinese");
  el.innerHTML = `<div class="section-title"><div><span class="eyebrow">中文 · HSK 1–6</span><h2>រៀនភាសាចិន</h2></div></div>
    ${chips([{ id: "words", label: "ពាក្យ HSK" }, { id: "tr", label: "បកប្រែ ចិន ↔ ខ្មែរ" }, { id: "conv", label: "សន្ទនា" }, { id: "read", label: "អំណាន" }, { id: "test", label: "តេស្ត HSK" }], ZH.tab, "t")}
    <div id="zh-body" class="view"></div>`;
  bind(el, "[data-t]", b => { ZH.tab = b.dataset.t; renderChinese(); });
  ({ words: zhWords, tr: zhTranslate, conv: zhConv, read: zhRead, test: zhTest })[ZH.tab]($("zh-body"));
}
function zhWords(body) {
  const list = XC.hsk[ZH.lv];
  body.innerHTML = `${chips([1, 2, 3, 4, 5, 6].map(l => ({ id: l, label: "HSK " + l, n: XC.hsk[l].length })), ZH.lv, "h")}
    <p class="note">ចុចប៊ូតុងសំឡេង ដើម្បីស្ដាប់ការបញ្ចេញសំឡេងភាសាចិនកុកងឺ (ប្រសិនបើឧបករណ៍របស់អ្នកមានសំឡេងចិន)។</p>
    <div class="cards">${list.map(w => `<div class="zcard glass">
      <div class="row"><span class="hz">${esc(w.zh)}</span>${sayBtn(w.zh, "zh-CN")}</div>
      <span class="py">${esc(w.py)}</span><span class="kh">${esc(w.kh)}</span>
      <div class="ex"><div class="exzh">${esc(w.ex)}</div><div>${esc(w.expy)}</div><div>${esc(w.exkh)}</div></div>
      <button class="known ${DATA.zhKnown[w.zh] ? "on" : ""}" data-z="${esc(w.zh)}" style="align-self:flex-start">${DATA.zhKnown[w.zh] ? "✓ ស្គាល់" : "ស្គាល់?"}</button></div>`).join("")}</div>`;
  bind(body, "[data-h]", b => { ZH.lv = +b.dataset.h; zhWords(body); });
  bind(body, "[data-z]", b => { const k = b.dataset.z; if (DATA.zhKnown[k]) { delete DATA.zhKnown[k]; saveData(); } else { DATA.zhKnown[k] = 1; log(`ស្គាល់ពាក្យចិន «${k}»`); } b.classList.toggle("on", !!DATA.zhKnown[k]); b.textContent = DATA.zhKnown[k] ? "✓ ស្គាល់" : "ស្គាល់?"; });
}
const stripTone = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const ZH_DICT = (() => { const m = new Map(); ALL_ZH.forEach(w => m.set(w.zh, { zh: w.zh, py: w.py, kh: w.kh })); XC.zhPhrases.forEach(p => m.set(p[0], { zh: p[0], py: p[1], kh: p[2] })); return m; })();
function zhTranslate(body) {
  body.innerHTML = `<article class="lesson glass">
      <span class="eyebrow">វចនានុក្រមបកប្រែ</span><h3>បកប្រែ ចិន ↔ ខ្មែរ</h3>
      <p class="note">វាយអក្សរចិន (ឧ. 我喜欢喝茶) ដើម្បីបំបែកជាពាក្យ និងមើលអត្ថន័យ ឬវាយពាក្យខ្មែរ / pinyin (ឧ. អរគុណ, xie xie) ដើម្បីរកពាក្យចិន។</p>
      <textarea id="trin" rows="3" placeholder="我喜欢喝茶 · អរគុណ · ni hao"></textarea>
      <div class="toolbar"><button class="btn primary" id="trgo">បកប្រែ</button><span class="note">ផ្អែកលើវចនានុក្រម ${kh(ZH_DICT.size)} ពាក្យ និងឃ្លា នៅក្នុងវេបសាយ</span></div>
      <div class="tr-out" id="trout"></div></article>
    <article class="lesson glass"><span class="eyebrow">Phrasebook</span><h3>ឃ្លាប្រើញឹកញាប់</h3>
      <div class="tr-out">${XC.zhPhrases.map(p => `<div class="tr-seg">${sayBtn(p[0], "zh-CN")}<span class="hz">${esc(p[0])}</span><span><span class="py">${esc(p[1])}</span><br>${esc(p[2])}</span></div>`).join("")}</div></article>`;
  const go = () => {
    const s = $("trin").value.trim(), out = $("trout"); if (!s) { out.innerHTML = ""; return; }
    let res = [];
    if (/[一-鿿]/.test(s)) {
      for (let i = 0; i < s.length;) {
        let hit = null;
        for (let L = Math.min(6, s.length - i); L > 0; L--) { const w = s.substr(i, L); if (ZH_DICT.has(w)) { hit = ZH_DICT.get(w); break; } }
        if (hit) { res.push(hit); i += hit.zh.length; }
        else { const ch = s[i]; if (/[一-鿿]/.test(ch)) res.push({ zh: ch, py: "", kh: "(មិនទាន់មានក្នុងវចនានុក្រម)" }); i++; }
      }
    } else {
      const q = stripTone(s).replace(/\s+/g, "");
      res = [...ZH_DICT.values()].filter(w => w.kh.includes(s) || (q.length > 1 && stripTone(w.py).replace(/[\s-]+/g, "").includes(q))).slice(0, 20);
    }
    out.innerHTML = res.length ? res.map(w => `<div class="tr-seg">${sayBtn(w.zh, "zh-CN")}<span class="hz">${esc(w.zh)}</span><span><span class="py">${esc(w.py)}</span><br>${esc(w.kh)}</span></div>`).join("")
      : `<div class="empty">រកមិនឃើញទេ។ សាកពាក្យផ្សេង ឬពាក្យខ្លីជាងនេះ។</div>`;
    if (res.length) log(`បកប្រែ «${s.slice(0, 20)}»`);
  };
  $("trgo").onclick = go;
  $("trin").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); go(); } });
}
let zhCIdx = 0;
function zhConv(body) {
  const c = XC.zhConversations[zhCIdx];
  body.innerHTML = `${chips(XC.zhConversations.map((x, i) => ({ id: i, label: `${x.title} · ${x.kh}` })), zhCIdx, "c")}
    <article class="lesson glass"><div class="section-title"><div><span class="eyebrow">对话 · ${c.lv}</span><h3>${esc(c.title)} · ${esc(c.kh)}</h3></div>
      <button class="btn sm mango" id="zplay">▶ ស្ដាប់ទាំងអស់</button></div>${dialogHTML(c, true)}</article>`;
  bind(body, "[data-c]", b => { zhCIdx = +b.dataset.c; zhConv(body); });
  $("zplay").onclick = () => { speak(c.lines.map(l => l[1]).join("，"), "zh-CN"); log(`ស្ដាប់សន្ទនាចិន «${c.kh}»`); };
}
function zhRead(body) {
  const s = XC.zhReading;
  body.innerHTML = `<article class="lesson glass">
    <div class="section-title"><div><span class="eyebrow">阅读 · ${s.lv}</span><h3>${esc(s.title)} · ${esc(s.kh)}</h3></div>
      <div class="toolbar"><button class="btn sm" data-say="${esc(s.lines.map(l => l[0]).join(""))}" data-lang="zh-CN">▶ ស្ដាប់</button>
      <button class="btn sm" id="tpy">${ZH.showPy ? "លាក់" : "បង្ហាញ"} Pinyin</button><button class="btn sm" id="tzk">${ZH.showKh ? "លាក់" : "បង្ហាញ"}ខ្មែរ</button></div></div>
    <div class="story">${s.lines.map(l => `<p><span class="en" style="font-family:var(--f-zh);font-size:22px">${esc(l[0])}</span>${ZH.showPy ? `<span class="khl" style="color:var(--cyan)">${esc(l[1])}</span>` : ""}${ZH.showKh ? `<span class="khl">${esc(l[2])}</span>` : ""}</p>`).join("")}</div>
    <h3 style="font-size:17px">សំណួរ</h3>
    <div class="view" style="gap:14px">${s.q.map((q, i) => `<div class="qitem" data-qi="${i}"><span>${kh(i + 1)}. ${esc(q[0])}</span><div class="opts">${q[1].map((o, j) => `<button class="opt" data-o="${j}">${esc(o)}</button>`).join("")}</div></div>`).join("")}</div></article>`;
  $("tpy").onclick = () => { ZH.showPy = !ZH.showPy; zhRead(body); }; $("tzk").onclick = () => { ZH.showKh = !ZH.showKh; zhRead(body); };
  const answered = {};
  body.querySelectorAll(".qitem").forEach(qi => qi.querySelectorAll(".opt").forEach(o => o.onclick = () => {
    const i = +qi.dataset.qi, ans = s.q[i][2], btns = qi.querySelectorAll(".opt");
    btns.forEach(x => x.classList.remove("right", "wrong")); btns[ans].classList.add("right"); if (+o.dataset.o !== ans) o.classList.add("wrong");
    answered[i] = 1; if (Object.keys(answered).length === s.q.length) markDone("zh:read", `អានរឿងចិន «${s.title}»`);
  }));
}
function zhTest(body) {
  body.innerHTML = `${chips([1, 2, 3, 4, 5, 6].map(l => ({ id: l, label: "HSK " + l })), ZH.tlv, "tl")}
    <p class="note">ពិន្ទុខ្ពស់បំផុត HSK ${kh(ZH.tlv)}៖ ${kh(DATA.best["zh:" + ZH.tlv] || 0)}</p><div id="zq"></div>`;
  bind(body, "[data-tl]", b => { ZH.tlv = +b.dataset.tl; zhTest(body); });
  const pool = XC.hsk[ZH.tlv], wide = pool.length >= 8 ? pool : ALL_ZH;
  const items = shuffle(pool).slice(0, 10).map((w, i) => {
    const others = shuffle(wide.filter(x => x.zh !== w.zh && x.kh !== w.kh)).slice(0, 3), opts = shuffle([w, ...others]);
    return i % 2 === 0
      ? { prompt: "ពាក្យនេះមានន័យថាអ្វី?", big: w.zh, bigStyle: "font-family:var(--f-zh)", say: w.zh, lang: "zh-CN", opts: opts.map(o => o.kh), a: opts.indexOf(w), after: `${w.zh} (${w.py}) = ${w.kh}` }
      : { prompt: "តើភាសាចិនសរសេរយ៉ាងដូចម្ដេច?", big: w.kh, bigStyle: "font-family:var(--f-body)", opts: opts.map(o => `${o.zh}  ${o.py}`), optStyle: "font-family:var(--f-zh)", a: opts.indexOf(w), after: `${w.zh} (${w.py})`, sayAfter: w.zh, lang: "zh-CN" };
  });
  runQuiz($("zq"), items, { onDone: (s, t) => { setBest("zh:" + ZH.tlv, s); DATA.best.zh = Math.max(DATA.best.zh || 0, s); saveData(); log(`តេស្ត HSK ${ZH.tlv}៖ ${s}/${t}`); } });
}

/* ================= CODE / IT ================= */
const CD = { track: "python", tab: "lessons", li: 0 };
function renderCode() {
  const el = $("v-code"), t = XC.codeTracks.find(x => x.id === CD.track);
  el.innerHTML = `<div class="section-title"><div><span class="eyebrow">Code / IT · ០–១០០%</span><h2>រៀនសរសេរកូដ</h2></div></div>
    <div class="code-grid">${XC.codeTracks.map(x => { const p = trackPct(x); return `<button class="track glass" data-tr="${x.id}" aria-pressed="${x.id === CD.track}"><b>${esc(x.name)}</b><span class="note">${esc(x.desc)}</span><div class="bar"><span style="width:${p}%"></span></div><span class="pct">${kh(p)}%</span></button>`; }).join("")}</div>
    ${chips([{ id: "lessons", label: `មេរៀន (${t.lessons.length})` }, { id: "hw", label: `កិច្ចការផ្ទះ (${hwList(t).length})` }, { id: "test", label: "តេស្ត" }], CD.tab, "t")}
    <div id="code-body" class="view"></div>`;
  bind(el, "[data-tr]", b => { CD.track = b.dataset.tr; CD.li = 0; renderCode(); });
  bind(el, "[data-t]", b => { CD.tab = b.dataset.t; renderCode(); });
  ({ lessons: codeLesson, hw: codeHW, test: codeTest })[CD.tab]($("code-body"), t);
}
function runJS(code) {
  const out = [], fmt = v => typeof v === "string" ? v : (() => { try { return JSON.stringify(v); } catch (e) { return String(v); } })();
  const con = { log: (...a) => out.push(a.map(fmt).join(" ")), error: (...a) => out.push("Error: " + a.map(fmt).join(" ")), warn: (...a) => out.push(a.map(fmt).join(" ")) };
  try { new Function("console", code)(con); } catch (e) { out.push("❌ " + e.name + ": " + e.message); }
  return out.join("\n") || "(គ្មានលទ្ធផល)";
}
function codeLesson(body, t) {
  const L = t.lessons[CD.li], key = `code:${t.id}:${CD.li}`;
  body.innerHTML = `${chips(t.lessons.map((x, i) => ({ id: i, label: `${i + 1}. ${x.t}`, done: DATA.done[`code:${t.id}:${i}`] })), CD.li, "li")}
    <article class="lesson glass">
      <span class="eyebrow">${esc(t.name)} · មេរៀនទី ${kh(CD.li + 1)}</span><h3>${esc(L.t)}</h3>
      <div class="split">${videoSlot(L.video)}<div class="view" style="gap:10px"><p>${esc(L.kh)}</p>
        <p class="note">${t.run ? "កែកូដខាងក្រោម ហើយចុច «ដំណើរការ» ដើម្បីមើលលទ្ធផលភ្លាមៗ។" : "អានកូដ ហើយទាយលទ្ធផល មុននឹងចុច «បង្ហាញលទ្ធផល»។ ដើម្បីដំណើរការពិត ប្រើកម្មវិធីដូចជា VS Code ឬវេបសាយ online compiler។"}</p></div></div>
      <textarea class="editor" id="ed" spellcheck="false" aria-label="កូដ">${esc(L.code)}</textarea>
      <div class="toolbar"><button class="btn primary" id="run">${t.run ? "▶ ដំណើរការ" : "បង្ហាញលទ្ធផល"}</button><button class="btn" id="reset">ស្ដារកូដដើម</button><button class="btn" id="copy">ចម្លងកូដ</button></div>
      ${t.run === "html" ? `<iframe class="preview" id="pv" title="Preview" sandbox="allow-scripts"></iframe>` : `<div class="output" id="out"><span class="lbl">លទ្ធផល (Output)</span><span id="outtxt">…</span></div>`}
      <div class="qitem" style="margin-top:8px"><b>សំណួររំលឹក៖ ${esc(L.q[0])}</b><div class="opts">${L.q[1].map((o, j) => `<button class="opt" data-o="${j}">${esc(o)}</button>`).join("")}</div><span class="result" id="cqr"></span></div>
      <div class="toolbar" style="justify-content:space-between"><button class="btn sm" id="cprev" ${CD.li === 0 ? "disabled" : ""}>← មេរៀនមុន</button><span class="note">${DATA.done[key] ? "✓ បានបញ្ចប់មេរៀននេះ" : "ឆ្លើយសំណួររំលឹកឲ្យត្រូវ ដើម្បីបញ្ចប់មេរៀន"}</span><button class="btn sm" id="cnext" ${CD.li >= t.lessons.length - 1 ? "disabled" : ""}>មេរៀនបន្ទាប់ →</button></div>
    </article>`;
  bind(body, "[data-li]", b => { CD.li = +b.dataset.li; codeLesson(body, t); });
  const ed = $("ed");
  ed.addEventListener("keydown", e => { if (e.key === "Tab" && !e.shiftKey) { e.preventDefault(); const s = ed.selectionStart; ed.setRangeText("    ", s, ed.selectionEnd, "end"); } });
  $("run").onclick = () => {
    if (t.run === "js") $("outtxt").textContent = runJS(ed.value);
    else if (t.run === "html") $("pv").srcdoc = `<meta charset="utf-8"><style>body{font-family:'Kantumruy Pro',system-ui,sans-serif;padding:12px;color:#111}</style>` + ed.value;
    else $("outtxt").textContent = ed.value.trim() === L.code.trim() ? L.out : L.out + "\n\n(នេះជាលទ្ធផលនៃកូដដើម។ ពេលអ្នកកែកូដ សូមដំណើរការក្នុង compiler ពិត)";
  };
  $("reset").onclick = () => { ed.value = L.code; };
  $("copy").onclick = () => copyText(ed.value);
  if (t.run === "html") $("run").click();
  body.querySelectorAll(".qitem .opt").forEach(o => o.onclick = () => {
    const ok = +o.dataset.o === L.q[2], r = $("cqr");
    body.querySelectorAll(".qitem .opt").forEach(x => x.classList.remove("right", "wrong"));
    o.classList.add(ok ? "right" : "wrong");
    r.style.color = ok ? "var(--good)" : "var(--bad)"; r.textContent = ok ? "ត្រឹមត្រូវ! មេរៀននេះបានបញ្ចប់។" : "មិនទាន់ត្រូវទេ សាកម្ដងទៀត។";
    if (ok) markDone(key, `បញ្ចប់មេរៀន ${t.name}៖ ${L.t}`);
  });
  $("cprev").onclick = () => { CD.li--; codeLesson(body, t); }; $("cnext").onclick = () => { CD.li++; codeLesson(body, t); };
}
function codeHW(body, t) {
  const list = hwList(t), done = list.filter((_, i) => DATA.hw[`${t.id}:${i}`]).length;
  body.innerHTML = `<div class="section-title"><div><span class="eyebrow">Homework · ${esc(t.name)}</span><h3 style="font-size:20px">កិច្ចការផ្ទះ ${kh(list.length)} លំហាត់</h3></div><span class="count">បានធ្វើ ${kh(done)}/${kh(list.length)}</span></div>
    <p class="note">សរសេរកូដដោយខ្លួនឯងក្នុង ${esc(t.name)} ហើយធីកនៅពេលធ្វើរួច។ លំហាត់រៀបពីងាយទៅពិបាក។</p>
    <div class="hw glass">${list.map((h, i) => `<label><input type="checkbox" id="hw-${t.id}-${i}" data-h="${i}" ${DATA.hw[`${t.id}:${i}`] ? "checked" : ""}><span class="num">${kh(i + 1)}.</span><span>${esc(h)}</span></label>`).join("")}</div>`;
  body.querySelectorAll("[data-h]").forEach(c => c.onchange = () => {
    const k = `${t.id}:${c.dataset.h}`;
    if (c.checked) { DATA.hw[k] = 1; log(`ធ្វើកិច្ចការផ្ទះ ${t.name} លេខ ${+c.dataset.h + 1}`); } else { delete DATA.hw[k]; saveData(); }
    body.querySelector(".count").textContent = `បានធ្វើ ${kh(list.filter((_, i) => DATA.hw[`${t.id}:${i}`]).length)}/${kh(list.length)}`;
  });
}
function codeTest(body, t) {
  body.innerHTML = `<p class="note">តេស្ត ${esc(t.name)} · ពិន្ទុខ្ពស់បំផុត៖ ${kh(DATA.best["code:" + t.id] || 0)}/${kh(t.lessons.length)}</p><div id="ctq"></div>`;
  runQuiz($("ctq"), t.lessons.map(l => fromTriple(l.q, l.t)), { onDone: (s, n) => { setBest("code:" + t.id, s); log(`តេស្ត ${t.name}៖ ${s}/${n}`); } });
}

/* ================= UX/UI ================= */
const UX = { tab: "lessons", li: 0 };
function renderUX() {
  const el = $("v-uxui");
  if (UX.player && UX.tab !== "videos") { UX.player.destroy(); UX.player = null; }
  el.innerHTML = `<div class="section-title"><div><span class="eyebrow">UX/UI Design · Beginner → Hero</span><h2>រៀន UX/UI Design</h2></div></div>
    ${chips([{ id: "lessons", label: "មេរៀន" }, { id: "projects", label: "លំហាត់រចនា App" }, { id: "videos", label: "▶ វីដេអូបង្រៀន Figma" }, { id: "tools", label: "🛠 ឧបករណ៍" }, { id: "quiz", label: "តេស្ត" }], UX.tab, "t")}
    <div id="ux-body" class="view"></div>`;
  bind(el, "[data-t]", b => { UX.tab = b.dataset.t; renderUX(); });
  const body = $("ux-body");
  if (UX.tab === "lessons") {
    const LVS = ["Beginner", "Intermediate", "Advanced", "Hero"];
    const all = XC.uxLessons.map((x, i) => ({ ...x, i }));
    if (!UX.lv) UX.lv = all[UX.li] ? all[UX.li].lv : "Beginner";
    const inLv = all.filter(x => x.lv === UX.lv);
    const lvChips = chips(LVS.map(l => { const xs = all.filter(x => x.lv === l); return { id: l, label: l, n: xs.length, done: xs.length && xs.every(x => DATA.done["ux:" + x.i]) }; }), UX.lv, "ul");
    if (!inLv.length) { body.innerHTML = `${lvChips}<article class="lesson glass"><p class="note">កំពុងរៀបចំមេរៀនកម្រិត ${UX.lv}…</p></article>`; bind(body, "[data-ul]", b => { UX.lv = b.dataset.ul; renderUX(); }); return; }
    if (!inLv.some(x => x.i === UX.li)) UX.li = inLv[0].i;
    const L = XC.uxLessons[UX.li];
    const blk = b => b[0] === "li" ? `<li>${esc(b[1])}</li>` : b[0] === "tip" ? `<div class="ux-tip">💡 ${esc(b[1])}</div>` : b[0] === "term" ? (() => { const k = b[1].indexOf(":"); return `<div class="ux-term"><b>${esc(b[1].slice(0, k))}</b><span>${esc(b[1].slice(k + 1).trim())}</span></div>`; })() : `<p>${esc(b[1])}</p>`;
    const secHTML = sc => { let h = "", ul = false; sc.b.forEach(b => { if (b[0] === "li" && !ul) { h += "<ul>"; ul = true; } if (b[0] !== "li" && ul) { h += "</ul>"; ul = false; } h += blk(b); }); if (ul) h += "</ul>"; return `<section class="ux-sec"><h4>${esc(sc.h)}</h4>${h}</section>`; };
    const pos = inLv.findIndex(x => x.i === UX.li);
    body.innerHTML = `${lvChips}${chips(inLv.map(x => ({ id: x.i, label: `${x.i + 1}. ${x.t}`, done: DATA.done["ux:" + x.i] })), UX.li, "li")}
      <article class="lesson glass ux-lesson"><div><span class="pill">${esc(L.lv)} · មេរៀនទី ${kh(UX.li + 1)}</span></div><h3>${esc(L.t)}</h3>${L.sub ? `<p class="ux-sub">${esc(L.sub)}</p>` : ""}
        ${L.intro ? `<p class="ux-intro">${esc(L.intro)}</p>` : ""}
        ${L.sec ? `<nav class="ux-toc">${L.sec.map((x, k) => `<a href="#uxs-${k}">${esc(x.h)}</a>`).join("")}</nav>${L.sec.map((x, k) => secHTML(x).replace("<section", `<section id="uxs-${k}"`)).join("")}` : `<ul>${L.pts.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`}
        <div class="rule" style="font-family:var(--f-body);font-weight:500">✍️ លំហាត់៖ ${esc(L.ex)}</div>
        ${L.q && L.q.length ? `<h4>តេស្តខ្លីសម្រាប់មេរៀននេះ</h4><div id="uxlq"></div>` : ""}
        <div class="toolbar"><button class="btn ${DATA.done["ux:" + UX.li] ? "" : "primary"}" id="uxdone">${DATA.done["ux:" + UX.li] ? "✓ បានបញ្ចប់" : "ខ្ញុំបានរៀន និងធ្វើលំហាត់រួច"}</button>
          <button class="btn sm" id="uxnext" ${UX.li >= XC.uxLessons.length - 1 ? "disabled" : ""}>មេរៀនបន្ទាប់ →</button></div></article>`;
    bind(body, "[data-ul]", b => { UX.lv = b.dataset.ul; renderUX(); });
    bind(body, "[data-li]", b => { UX.li = +b.dataset.li; renderUX(); });
    body.querySelectorAll(".ux-toc a").forEach(a => a.onclick = e => { e.preventDefault(); const t = document.querySelector(a.getAttribute("href")); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
    if (L.q && L.q.length) runQuiz($("uxlq"), L.q.map(t => fromTriple(t)), { onDone: (sc, n) => log(`តេស្តមេរៀន UX «${L.t}»៖ ${sc}/${n}`) });
    $("uxdone").onclick = () => { markDone("ux:" + UX.li, `បញ្ចប់មេរៀន UX/UI «${L.t}»`); renderUX(); };
    $("uxnext").onclick = () => { UX.li++; UX.lv = XC.uxLessons[UX.li].lv; renderUX(); window.scrollTo({ top: 0, behavior: "smooth" }); };
  } else if (UX.tab === "projects") {
    const kind = UX.pk || "app";
    const kindChips = chips([{ id: "app", label: "📱 App", n: XC.uxExercises.length }, { id: "web", label: "🖥 Website", n: XC.uxWebExercises.length }, { id: "img", label: "🖼 លំហាត់រូបភាព", n: XC.uxImageQuiz.length }], kind, "pk");
    if (kind === "img") {
      const Q = XC.uxImageQuiz, k = Math.min(UX.qi || 0, Q.length - 1), it = Q[k], pick = UX.qpick;
      const R = sc => it.kind === "w" ? XC.uxWireWeb(sc, "hi", "#a0522d") : XC.uxWire(sc, "hi", "#e2556e");
      const right = Q.filter((_, j) => DATA.done["uxi:" + j]).length;
      body.innerHTML = `${kindChips}<p class="note">មើលរូបអេក្រង់ទាំងពីរ ហើយជ្រើសមួយដែលរចនាបានល្អជាង។ ត្រូវហើយ៖ ${kh(right)}/${kh(Q.length)}</p>
        ${chips(Q.map((x, j) => ({ id: j, label: kh(j + 1), done: DATA.done["uxi:" + j] })), k, "qi")}
        <article class="lesson glass"><span class="pill">${esc(it.topic)} · សំណួរទី ${kh(k + 1)}/${kh(Q.length)}</span><h3>${esc(it.q)}</h3>
          <div class="uxi-ab ${it.kind === "w" ? "web" : ""}">${["A", "B"].map(L => `<button class="uxi-opt ${pick ? (L === it.ans ? "ok" : L === pick ? "bad" : "") : ""}" data-pick="${L}" ${pick ? "disabled" : ""}><span class="uxi-l">${L}</span>${R(it[L])}</button>`).join("")}</div>
          ${pick ? `<div class="rule" style="font-family:var(--f-body);font-weight:500;line-height:1.9">${pick === it.ans ? "✅ ត្រឹមត្រូវ!" : "❌ មិនទាន់ត្រូវ — ចម្លើយគឺ " + it.ans + "។"} ${esc(it.why)}</div>` : `<p class="note">ចុចលើរូប A ឬ B</p>`}
          <div class="toolbar">${pick ? `<button class="btn primary" id="uxinext">${k < Q.length - 1 ? "សំណួរបន្ទាប់ →" : "ចាប់ផ្ដើមម្ដងទៀត"}</button>` : ""}</div></article>`;
      bind(body, "[data-pk]", b => { UX.pk = b.dataset.pk; renderUX(); });
      bind(body, "[data-qi]", b => { UX.qi = +b.dataset.qi; UX.qpick = null; renderUX(); });
      bind(body, "[data-pick]", b => { UX.qpick = b.dataset.pick; if (UX.qpick === it.ans) markDone("uxi:" + k, `លំហាត់រូបភាព UX «${it.topic}» ត្រូវ`); renderUX(); });
      if (pick) $("uxinext").onclick = () => { UX.qi = k < Q.length - 1 ? k + 1 : 0; UX.qpick = null; renderUX(); };
      return;
    }
    const web = kind === "web", EX = web ? XC.uxWebExercises : XC.uxExercises, pre = web ? "uxw" : "uxp";
    const i = Math.min(web ? UX.wi || 0 : UX.pi || 0, EX.length - 1), E = EX[i];
    const st = UX.ps || E.style;
    const R = sc => web ? XC.uxWireWeb(sc, st, E.accent || "#1f6feb") : XC.uxWire(sc, st, E.accent || "#e2556e");
    body.innerHTML = `${kindChips}<p class="note">លំហាត់រចនាពិតៗ ពីងាយទៅពិបាក។ មើលគំរូ wireframe ធ្វើតាមជំហានក្នុង Figma ហើយធីកបញ្ជីពិនិត្យ។</p>
      ${chips(EX.map((x, k) => ({ id: k, label: `${k + 1}. ${x.t}`, done: DATA.done[pre + ":" + k] })), i, "pi")}
      <article class="lesson glass"><div class="uxx-head"><div><span class="pill">${esc(E.lv)} · ${web ? "Website" : "App"} · លំហាត់ទី ${kh(i + 1)}</span><h3 style="margin-top:8px">${esc(E.t)}</h3></div>
        <div class="uxx-style">${chips([{ id: "lo", label: "Wireframe" }, { id: "hi", label: "Hi-fi" }], st, "ps")}</div></div>
        <p style="margin:0;line-height:1.9">${esc(E.d)}</p>
        <h4 style="margin:0">គំរូអេក្រង់ (${kh(E.screens.length)}) — អូសទៅឆ្វេង/ស្ដាំ</h4>
        <div class="uxx-screens ${web ? "web" : ""}">${E.screens.map(sc => `<figure>${R(sc)}<figcaption>${esc(sc.name)}</figcaption></figure>`).join("")}</div>
        <div class="uxx-cols"><div><h4 style="margin:0 0 8px">ជំហានធ្វើ</h4><ol>${E.steps.map(x => `<li>${esc(x)}</li>`).join("")}</ol></div>
          <div class="uxx-check"><h4 style="margin:0 0 8px">បញ្ជីពិនិត្យ (Checklist)</h4>${E.check.map((x, k) => `<label><input type="checkbox" data-ck="${k}" ${DATA.done[`${pre}c:${i}:${k}`] ? "checked" : ""}>${esc(x)}</label>`).join("")}</div></div>
        <div class="toolbar"><button class="btn ${DATA.done[pre + ":" + i] ? "" : "primary"}" id="uxpdone">${DATA.done[pre + ":" + i] ? "✓ បានធ្វើរួច" : "ខ្ញុំបានធ្វើលំហាត់នេះរួច"}</button>
          <button class="btn sm" id="uxpnext" ${i >= EX.length - 1 ? "disabled" : ""}>លំហាត់បន្ទាប់ →</button></div></article>`;
    const setI = v => { if (web) UX.wi = v; else UX.pi = v; UX.ps = null; };
    bind(body, "[data-pk]", b => { UX.pk = b.dataset.pk; UX.ps = null; renderUX(); });
    bind(body, "[data-pi]", b => { setI(+b.dataset.pi); renderUX(); });
    bind(body, "[data-ps]", b => { UX.ps = b.dataset.ps; renderUX(); });
    body.querySelectorAll("[data-ck]").forEach(c => c.onchange = () => { const k = `${pre}c:${i}:${c.dataset.ck}`; if (c.checked) DATA.done[k] = Date.now(); else delete DATA.done[k]; saveData(); });
    $("uxpdone").onclick = () => { markDone(pre + ":" + i, `បញ្ចប់លំហាត់ UX/UI «${E.t}»`); renderUX(); };
    $("uxpnext").onclick = () => { setI(i + 1); renderUX(); };
  } else if (UX.tab === "videos") {
    const VS = XC.uxVideos, vi = UX.vi || 0, Vd = VS[vi];
    body.innerHTML = `<p class="note">វីដេអូចលនាបង្រៀនប្រើ Figma ម្ដងមួយជំហាន ជាមួយអក្សររត់ខ្មែរ។ ចុច ▶ ចាក់ ឬចុចរបារខាងក្រោមដើម្បីលោតទៅជំហាន។ បើក Figma ម្ខាង ហើយធ្វើតាម!</p>
      <div class="fv-list">${VS.map((v, k) => `<button class="glass ${k === vi ? "on" : ""}" data-vi="${k}"><span class="pill">${esc(v.lv)} · ${esc(v.min)}</span><b>${k + 1}. ${esc(v.t)}</b><span class="note">${esc(v.d)}</span>${DATA.done["uxv:" + k] ? '<span class="note" style="color:var(--mint)">✓ បានមើល</span>' : ""}</button>`).join("")}</div>
      <article class="lesson glass"><h3>${vi + 1}. ${esc(Vd.t)}</h3><div id="uxvp"></div></article>`;
    bind(body, "[data-vi]", b => { UX.vi = +b.dataset.vi; renderUX(); });
    if (UX.player) UX.player.destroy();
    UX.player = XC.uxPlayer($("uxvp"), Vd, { onEnd: () => { if (!DATA.done["uxv:" + vi]) { markDone("uxv:" + vi, `មើលវីដេអូ Figma «${Vd.t}»`); } } });
  } else if (UX.tab === "tools") {
    body.innerHTML = `<div id="uxtools"></div><article class="lesson glass"><span class="eyebrow">Figma ពីដំបូង</span><h3>រៀនប្រើ Figma ម្ដងមួយជំហាន</h3>
      <div class="steps">${XC.figmaSteps.map((s, i) => `<div class="glass"><span class="k">${String(i + 1).padStart(2, "0")}</span><b>${esc(s[0])}</b><p>${esc(s[1])}</p></div>`).join("")}</div>
      <p class="note">ឧបករណ៍ផ្សេងទៀតដែលគួរស្គាល់៖ FigJam ឬ Miro (brainstorm និង user flow), Maze (usability testing), Notion (កត់ត្រាការស្រាវជ្រាវ)។</p>
      <p><a href="https://www.figma.com" target="_blank" rel="noopener">បើក figma.com ↗</a></p></article>`;
    XC.uxTools($("uxtools"));
  } else {
    const QL = UX.ql || "ទាំងអស់", pool = XC.uxLessons.filter(l => QL === "ទាំងអស់" || l.lv === QL).flatMap(l => l.q || []).concat(QL === "ទាំងអស់" || QL === "Beginner" ? XC.uxQuiz : []);
    const pick = pool.map(q => [Math.random(), q]).sort((a, b) => a[0] - b[0]).slice(0, 10).map(x => x[1]);
    body.innerHTML = `${chips(["ទាំងអស់", "Beginner", "Intermediate", "Advanced", "Hero"].map(l => ({ id: l, label: l })), QL, "ql")}<p class="note">សំណួរ ១០ ចៃដន្យពីធនាគារ ${kh(pool.length)} សំណួរ។ ពិន្ទុខ្ពស់បំផុត៖ ${kh(DATA.best.ux || 0)}/១០</p><div id="uxq"></div><div class="toolbar"><button class="btn sm" id="uxqnew">⟲ សំណួរថ្មី</button></div>`;
    bind(body, "[data-ql]", b => { UX.ql = b.dataset.ql; renderUX(); });
    $("uxqnew").onclick = () => renderUX();
    runQuiz($("uxq"), pick.map(t => fromTriple(t)), { onDone: (s, n) => { setBest("ux", s); log(`តេស្ត UX/UI (${QL})៖ ${s}/${n}`); } });
  }
}

/* ================= GRAPHIC DESIGN ================= */
const GD = { tab: "lessons", li: 0, color: "#3fd0ff" };
function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, s = 0, l = (mx + mn) / 2;
  if (mx !== mn) { const d = mx - mn; s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn);
    h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; }
  return [h, s * 100, l * 100];
}
function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360; s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12, a = s * Math.min(l, 1 - l), f = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return "#" + [f(0), f(8), f(4)].map(x => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
}
function renderGD() {
  const el = $("v-graphic");
  el.innerHTML = `<div class="section-title"><div><span class="eyebrow">Graphic Design</span><h2>រៀន Graphic Design</h2></div></div>
    ${chips([{ id: "lessons", label: "មេរៀន" }, { id: "palette", label: "ឧបករណ៍បង្កើតពណ៌" }, { id: "quiz", label: "តេស្ត" }], GD.tab, "t")}
    <div id="gd-body" class="view"></div>`;
  bind(el, "[data-t]", b => { GD.tab = b.dataset.t; renderGD(); });
  const body = $("gd-body");
  if (GD.tab === "lessons") {
    const L = XC.gdLessons[GD.li];
    body.innerHTML = `${chips(XC.gdLessons.map((x, i) => ({ id: i, label: `${i + 1}. ${x.t}`, done: DATA.done["gd:" + i] })), GD.li, "li")}
      <article class="lesson glass"><span class="eyebrow">មេរៀនទី ${kh(GD.li + 1)}</span><h3>${esc(L.t)}</h3>
        <div class="split">${videoSlot(L.video)}<ul>${L.pts.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
        <div class="rule" style="font-family:var(--f-body);font-weight:500">លំហាត់៖ ${esc(L.ex)}</div>
        <div class="toolbar"><button class="btn ${DATA.done["gd:" + GD.li] ? "" : "primary"}" id="gddone">${DATA.done["gd:" + GD.li] ? "✓ បានបញ្ចប់" : "ខ្ញុំបានរៀន និងធ្វើលំហាត់រួច"}</button>
          <button class="btn sm" id="gdnext" ${GD.li >= XC.gdLessons.length - 1 ? "disabled" : ""}>មេរៀនបន្ទាប់ →</button></div></article>`;
    bind(body, "[data-li]", b => { GD.li = +b.dataset.li; renderGD(); });
    $("gddone").onclick = () => { markDone("gd:" + GD.li, `បញ្ចប់មេរៀន Graphic «${L.t}»`); renderGD(); };
    $("gdnext").onclick = () => { GD.li++; renderGD(); };
  } else if (GD.tab === "palette") {
    const draw = () => {
      const [h, s, l] = hexToHsl(GD.color);
      const sets = [["Complementary · ពណ៌ផ្ទុយ", [0, 180]], ["Analogous · ពណ៌ជិតគ្នា", [-30, 0, 30]], ["Triadic · ពណ៌បី", [0, 120, 240]], ["Split complementary", [0, 150, 210]]];
      const shades = [92, 78, 62, 48, 34, 20].map(x => hslToHex(h, s, x));
      $("pal").innerHTML = sets.map(([name, offs]) => `<div class="palette-row"><b>${name}</b><div class="swatches">${offs.map(o => { const hx = hslToHex(h + o, s, l); return `<button class="sw" data-hex="${hx}"><div style="background:${hx}"></div><span>${hx.toUpperCase()}</span></button>`; }).join("")}</div></div>`).join("")
        + `<div class="palette-row"><b>Shades · កម្រិតពន្លឺ</b><div class="swatches">${shades.map(hx => `<button class="sw" data-hex="${hx}"><div style="background:${hx}"></div><span>${hx.toUpperCase()}</span></button>`).join("")}</div></div>`;
      $("pal").querySelectorAll("[data-hex]").forEach(b => b.onclick = () => copyText(b.dataset.hex.toUpperCase()));
    };
    body.innerHTML = `<article class="lesson glass"><span class="eyebrow">Color tool</span><h3>បង្កើតពណ៌ស៊ីគ្នា</h3>
      <div class="toolbar"><input type="color" id="pc" value="${GD.color}" aria-label="ជ្រើសពណ៌"><span class="note">ជ្រើសពណ៌មូលដ្ឋាន។ ចុចលើពណ៌ណាមួយ ដើម្បីចម្លងលេខកូដ HEX។</span></div>
      <div class="view" id="pal" style="gap:18px"></div></article>`;
    $("pc").oninput = e => { GD.color = e.target.value; draw(); };
    draw();
  } else {
    body.innerHTML = `<p class="note">ពិន្ទុខ្ពស់បំផុត៖ ${kh(DATA.best.gd || 0)}/${kh(XC.gdQuiz.length)}</p><div id="gdq"></div>`;
    runQuiz($("gdq"), XC.gdQuiz.map(t => fromTriple(t)), { onDone: (s, n) => { setBest("gd", s); log(`តេស្ត Graphic Design៖ ${s}/${n}`); } });
  }
}

/* ================= VIDEO EDITING ================= */
const VE = { tab: "lessons", li: 0 };
function renderVE() {
  const el = $("v-video");
  el.innerHTML = `<div class="section-title"><div><span class="eyebrow">Video Editing · Beginner → Pro</span><h2>រៀនកាត់តវីដេអូ</h2></div></div>
    ${chips([{ id: "lessons", label: `មេរៀន (${XC.veLessons.length})` }, { id: "capcut", label: "CapCut ម្ដងមួយជំហាន" }, { id: "projects", label: "គម្រោង" }, { id: "terms", label: "វចនានុក្រម" }, { id: "quiz", label: "តេស្ត" }], VE.tab, "t")}
    <div id="ve-body" class="view"></div>`;
  bind(el, "[data-t]", b => { VE.tab = b.dataset.t; renderVE(); });
  const body = $("ve-body");
  if (VE.tab === "lessons") {
    const L = XC.veLessons[VE.li];
    body.innerHTML = `${chips(XC.veLessons.map((x, i) => ({ id: i, label: `${i + 1}. ${x.t}`, done: DATA.done["ve:" + i] })), VE.li, "li")}
      <article class="lesson glass"><span class="pill">${esc(L.lv)}</span><h3>${esc(L.t)}</h3>
        <div class="split">${videoSlot(L.video)}<ul>${L.pts.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
        <div class="rule" style="font-family:var(--f-body);font-weight:500">លំហាត់៖ ${esc(L.ex)}</div>
        <div class="toolbar"><button class="btn ${DATA.done["ve:" + VE.li] ? "" : "primary"}" id="vedone">${DATA.done["ve:" + VE.li] ? "✓ បានបញ្ចប់" : "ខ្ញុំបានរៀន និងធ្វើលំហាត់រួច"}</button>
          <button class="btn sm" id="venext" ${VE.li >= XC.veLessons.length - 1 ? "disabled" : ""}>មេរៀនបន្ទាប់ →</button></div></article>`;
    bind(body, "[data-li]", b => { VE.li = +b.dataset.li; renderVE(); });
    $("vedone").onclick = () => { markDone("ve:" + VE.li, `បញ្ចប់មេរៀន Video Editing «${L.t}»`); renderVE(); };
    $("venext").onclick = () => { VE.li++; renderVE(); };
  } else if (VE.tab === "capcut") {
    body.innerHTML = `<article class="lesson glass"><span class="eyebrow">CapCut ពីដំបូង</span><h3>ប្រើ CapCut ម្ដងមួយជំហាន</h3>
      <div class="steps">${XC.veCapcut.map((s, i) => `<div class="glass"><span class="k">${String(i + 1).padStart(2, "0")}</span><b>${esc(s[0])}</b><p>${esc(s[1])}</p></div>`).join("")}</div>
      <p><a href="https://www.capcut.com" target="_blank" rel="noopener">បើក capcut.com ↗</a> · <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noopener">DaVinci Resolve ↗</a></p></article>`;
  } else if (VE.tab === "projects") {
    body.innerHTML = `<p class="note">គម្រោងពិតៗ ពីងាយទៅពិបាក។ ធ្វើរួចហើយ ធីកដើម្បីរាប់វឌ្ឍនភាព។</p>
      <div class="steps">${XC.veProjects.map((p, i) => `<div class="glass" style="display:flex;flex-direction:column;gap:8px"><span class="pill">${esc(p.lv)}</span><b>${esc(p.t)}</b><p>${esc(p.d)}</p>
        <label style="flex-direction:row;align-items:center;gap:8px;color:var(--ink)"><input type="checkbox" id="vep-${i}" data-p="${i}" ${DATA.done["vep:" + i] ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--mint)">បានធ្វើរួច</label></div>`).join("")}</div>`;
    body.querySelectorAll("[data-p]").forEach(c => c.onchange = () => { const k = "vep:" + c.dataset.p; if (c.checked) markDone(k, `បញ្ចប់គម្រោងវីដេអូ «${XC.veProjects[c.dataset.p].t}»`); else { delete DATA.done[k]; saveData(); } });
  } else if (VE.tab === "terms") {
    body.innerHTML = `<div class="tablewrap glass"><table style="min-width:0"><thead><tr><th>ពាក្យ</th><th>អត្ថន័យ</th></tr></thead>
      <tbody>${XC.veTerms.map(t => `<tr><td class="v" style="white-space:normal">${esc(t[0])}</td><td>${esc(t[1])}</td></tr>`).join("")}</tbody></table></div>`;
  } else {
    body.innerHTML = `<p class="note">ពិន្ទុខ្ពស់បំផុត៖ ${kh(DATA.best.ve || 0)}/${kh(XC.veQuiz.length)}</p><div id="veq"></div>`;
    runQuiz($("veq"), XC.veQuiz.map(t => fromTriple(t)), { onDone: (s, n) => { setBest("ve", s); log(`តេស្ត Video Editing៖ ${s}/${n}`); } });
  }
}

/* ================= boot ================= */
const sess = store.get("xcb-session", null);
if (sess) enter(sess);
})();
