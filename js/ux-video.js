/* xCenbar Learning — animated Figma tutorial "videos" (in-page, Khmer captions) */
window.XC = window.XC || {};
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  /* Stage 960x540. Canvas area x 200..760, y 44..540. Coordinates below are stage coords. */
  const TOOLS = [["move", "▲", "Move (V)"], ["frame", "#", "Frame (F)"], ["rect", "▢", "Rectangle (R)"], ["ellipse", "◯", "Ellipse (O)"], ["text", "T", "Text (T)"], ["pen", "✒", "Pen (P)"], ["comment", "💬", "Comment (C)"]];
  const V = [];
  const F1 = { x: 370, y: 90, w: 220, h: 430 };
  V.push({ t: "ស្គាល់ផ្ទៃ Figma", lv: "Beginner", min: "២:០០", d: "ស្គាល់ផ្នែកទាំង ៤ របស់ Figma ហើយបង្កើត Frame ទូរស័ព្ទដំបូង។", steps: [
    { cap: "សូមស្វាគមន៍មកកាន់ Figma! ចូល figma.com ហើយចុះឈ្មោះដោយឥតគិតថ្លៃ។ បន្ទាប់មកចុច «New design file»។", ops: [{ cur: [480, 300] }, { hl: "none" }] },
    { cap: "ផ្នែកទី ១៖ របារឧបករណ៍ (Toolbar) នៅខាងលើ — Move, Frame, Rectangle, Text និង Pen។", ops: [{ hl: "toolbar" }, { cur: [330, 22] }] },
    { cap: "ផ្នែកទី ២៖ Layers នៅខាងឆ្វេង — បង្ហាញធាតុទាំងអស់ក្នុងឯកសារ ដូចបញ្ជីមាតិកា។", ops: [{ hl: "layers" }, { cur: [90, 200] }] },
    { cap: "ផ្នែកទី ៣៖ Canvas នៅកណ្ដាល — កន្លែងដែលអ្នករចនា។ ប្រើ Ctrl + scroll ដើម្បី zoom និង Space + អូស ដើម្បីរំកិល។", ops: [{ hl: "canvas" }, { cur: [480, 300] }, { key: "Ctrl + Scroll" }] },
    { cap: "ផ្នែកទី ៤៖ Design panel នៅខាងស្ដាំ — កែទំហំ ពណ៌ អក្សរ និង effects របស់ធាតុដែលបានជ្រើស។", ops: [{ hl: "props" }, { cur: [860, 200] }] },
    { cap: "ចុចឧបករណ៍ Frame ឬចុចគ្រាប់ចុច F លើក្ដារចុច។", ops: [{ hl: "none" }, { tool: "frame" }, { cur: [250, 22] }, { click: 1 }, { key: "F" }] },
    { cap: "នៅ Design panel ខាងស្ដាំ ជ្រើសទំហំស្រាប់ «Android Compact» ឬ «iPhone 16»។", ops: [{ hl: "props" }, { props: { "Phone": "Android Compact", "": "iPhone 16", " ": "Desktop", "  ": "Tablet" } }, { cur: [850, 92] }, { click: 1 }] },
    { cap: "Frame ថ្មីលេចឡើង ទំហំ 360 × 800។ វាជាអេក្រង់ទូរស័ព្ទមួយ។", ops: [{ add: { id: "f1", k: "frame", ...F1, label: "Home" } }, { layer: "# Home" }, { sel: "f1" }, { props: { W: "360", H: "800", Fill: "#FFFFFF" } }] },
    { cap: "ចុចពីរដងលើឈ្មោះ Frame ដើម្បីប្ដូរឈ្មោះ (ឧ. «Home»)។ ដាក់ឈ្មោះច្បាស់ជានិច្ច!", ops: [{ cur: [395, 82] }, { click: 1 }, { key: "Ctrl + R" }] },
    { cap: "Figma រក្សាទុកដោយស្វ័យប្រវត្តិលើ cloud។ អ្នកបានបង្កើត Frame ដំបូងរួចហើយ! 🎉", ops: [{ sel: null }, { cur: [600, 470] }] },
  ] });
  const fx = 370, fy = 90;
  V.push({ t: "គូស Wireframe ទំព័រដើម App កាហ្វេ", lv: "Beginner", min: "៣:០០", d: "ប្រើ Rectangle និង Text ដើម្បីគូស wireframe ពណ៌ប្រផេះ។", steps: [
    { cap: "ចាប់ផ្ដើមពី Frame «Home» ទំហំ 360 × 800។", ops: [{ add: { id: "f", k: "frame", x: fx, y: fy, w: 220, h: 430, label: "Home" } }, { layer: "# Home" }] },
    { cap: "ចុច T (Text) ហើយវាយចំណងជើង «សួស្ដី សុភា!» ទំហំ 24, Bold។", ops: [{ tool: "text" }, { key: "T" }, { cur: [fx + 18, fy + 30] }, { click: 1 }, { add: { id: "h", k: "text", x: fx + 14, y: fy + 22, w: 140, h: 22, t: "សួស្ដី សុភា!", sz: 15 } }, { layer: "T សួស្ដី សុភា!" }, { props: { Font: "Kantumruy Pro", Size: "24", Weight: "Bold" } }] },
    { cap: "ចុច R (Rectangle) ហើយអូសធ្វើប្រអប់ស្វែងរក។ ដាក់ Corner radius = 24 ពណ៌ #EEEEEE។", ops: [{ tool: "rect" }, { key: "R" }, { cur: [fx + 14, fy + 56] }, { add: { id: "s", k: "rect", x: fx + 14, y: fy + 56, w: 192, h: 26, r: 13, fill: "#eeeeee" } }, { cur: [fx + 206, fy + 82] }, { layer: "▢ Search" }, { props: { W: "328", H: "44", Radius: "24", Fill: "#EEEEEE" } }] },
    { cap: "គូសចតុកោណធំមួយទៀតសម្រាប់រូបភាពផ្ដល់ជូន (banner)។ ក្នុង wireframe ប្រើពណ៌ប្រផេះ និងសញ្ញា X ជំនួសរូបភាព។", ops: [{ cur: [fx + 14, fy + 92] }, { add: { id: "b", k: "img", x: fx + 14, y: fy + 92, w: 192, h: 90, r: 10 } }, { cur: [fx + 206, fy + 182] }, { layer: "▢ Banner" }, { props: { W: "328", H: "160", Radius: "16", Fill: "#E2E2E2" } }] },
    { cap: "គូសកាតផលិតផលមួយ៖ រូបភាព + ឈ្មោះ + តម្លៃ។", ops: [{ add: { id: "c1", k: "img", x: fx + 14, y: fy + 194, w: 90, h: 70, r: 8 } }, { add: { id: "c1t", k: "bar", x: fx + 14, y: fy + 270, w: 60, h: 6 } }, { add: { id: "c1p", k: "bar", x: fx + 14, y: fy + 282, w: 34, h: 6, fill: "#999" } }, { layer: "▢ Card" }] },
    { cap: "ជ្រើសកាតទាំងមូល ហើយចុច Ctrl + D ដើម្បីចម្លង (Duplicate)។ រំកិលវាទៅខាងស្ដាំ។", ops: [{ sel: "c1" }, { key: "Ctrl + D" }, { add: { id: "c2", k: "img", x: fx + 14, y: fy + 194, w: 90, h: 70, r: 8 } }, { set: { id: "c2", x: fx + 116 } }, { add: { id: "c2t", k: "bar", x: fx + 116, y: fy + 270, w: 60, h: 6 } }, { add: { id: "c2p", k: "bar", x: fx + 116, y: fy + 282, w: 34, h: 6, fill: "#999" } }, { cur: [fx + 160, fy + 230] }, { layer: "▢ Card 2" }] },
    { cap: "ចម្លងម្ដងទៀតសម្រាប់ជួរទីពីរ។ សូមរក្សាចន្លោះស្មើគ្នា ១៦px (គុណនឹង ៨)។", ops: [{ sel: null }, { add: { id: "c3", k: "img", x: fx + 14, y: fy + 300, w: 90, h: 70, r: 8 } }, { add: { id: "c4", k: "img", x: fx + 116, y: fy + 300, w: 90, h: 70, r: 8 } }, { layer: "▢ Card 3" }, { layer: "▢ Card 4" }, { gap: [fx + 104, fy + 230, 12, "16"] }] },
    { cap: "គូស Tab bar នៅខាងក្រោម៖ ចតុកោណពណ៌ស ខ្ពស់ 64 មានរូបតំណាង ៥។", ops: [{ gap: null }, { add: { id: "tb", k: "rect", x: fx, y: fy + 390, w: 220, h: 40, fill: "#ffffff", stroke: "#dddddd" } }, { add: { id: "i1", k: "dots", x: fx + 14, y: fy + 404, w: 192, h: 12 } }, { layer: "▢ Tab bar" }] },
    { cap: "ជ្រើស layer ទាំងអស់ដែលជាកាត ហើយចុច Ctrl + G ដើម្បីដាក់ជាក្រុម។ ប្ដូរឈ្មោះ layer ឲ្យមានអត្ថន័យ។", ops: [{ key: "Ctrl + G" }, { layers: ["# Home", "  T សួស្ដី សុភា!", "  ▢ Search", "  ▢ Banner", "  ◫ Products", "  ▢ Tab bar"] }] },
    { cap: "Wireframe ទំព័រដើមរួចរាល់! បន្ទាប់មក អ្នកអាចធ្វើលំហាត់ «App ហាងនំបុ័ង» ក្នុងផ្ទាំងលំហាត់។", ops: [{ sel: "f" }, { cur: [650, 470] }] },
  ] });
  const bx = 400, by = 260;
  V.push({ t: "Auto Layout៖ ធ្វើប៊ូតុងដែលរីកតាមអក្សរ", lv: "Intermediate", min: "២:៣០", d: "Auto Layout ធ្វើឲ្យធាតុរៀបចំខ្លួនឯង ដូច Flexbox ក្នុង CSS។", steps: [
    { cap: "បញ្ហា៖ ប៊ូតុងធម្មតា ពេលប្ដូរអក្សរឲ្យវែង អក្សរលើសចេញក្រៅ។ Auto Layout ដោះស្រាយបញ្ហានេះ។", ops: [{ add: { id: "bad", k: "rect", x: bx, y: by - 90, w: 110, h: 36, r: 18, fill: "#e2556e" } }, { add: { id: "badt", k: "text", x: bx + 14, y: by - 82, w: 200, h: 20, t: "បន្ថែមទៅកន្ត្រកឥឡូវនេះ", sz: 12, color: "#fff" } }] },
    { cap: "ចាប់ផ្ដើមថ្មី៖ ចុច T ហើយវាយ «កុម្ម៉ង់»។", ops: [{ add: { id: "t", k: "text", x: bx + 20, y: by + 6, w: 80, h: 20, t: "កុម្ម៉ង់", sz: 13 } }, { layer: "T កុម្ម៉ង់" }, { sel: "t" }] },
    { cap: "ជ្រើសអក្សរ ហើយចុច Shift + A។ Figma រុំអក្សរក្នុង Frame ដែលមាន Auto Layout។", ops: [{ key: "Shift + A" }, { add: { id: "btn", k: "rect", x: bx + 10, y: by, w: 80, h: 30, r: 0, fill: "#ffffff", stroke: "#3b82f6", behind: 1 } }, { layers: ["# Button  ⇄", "  T កុម្ម៉ង់"] }, { sel: "btn" }, { props: { "Auto layout": "→ Horizontal", Gap: "8", Padding: "10" } }] },
    { cap: "ដាក់ Padding៖ ឆ្វេង/ស្ដាំ 24 និង លើ/ក្រោម 12។ ប៊ូតុងធំឡើងស្មើៗគ្នា។", ops: [{ set: { id: "btn", x: bx - 4, y: by - 6, w: 108, h: 42 } }, { props: { "Auto layout": "→ Horizontal", "Padding H": "24", "Padding V": "12" } }] },
    { cap: "ដាក់ Fill ពណ៌ #E2556E, Corner radius 24 ហើយប្ដូរពណ៌អក្សរទៅស។", ops: [{ set: { id: "btn", fill: "#e2556e", r: 21, stroke: "none" } }, { set: { id: "t", color: "#ffffff" } }, { props: { Fill: "#E2556E", Radius: "24", Text: "#FFFFFF" } }] },
    { cap: "ឥឡូវប្ដូរអក្សរទៅ «បន្ថែមទៅកន្ត្រកឥឡូវនេះ» — ប៊ូតុងរីកតាមអក្សរដោយស្វ័យប្រវត្តិ! ✨", ops: [{ set: { id: "t", t: "បន្ថែមទៅកន្ត្រកឥឡូវនេះ" } }, { set: { id: "btn", w: 236 } }] },
    { cap: "បន្ថែម icon 🛒 ក្នុងប៊ូតុង។ Gap 8 រក្សាចន្លោះរវាង icon និងអក្សរជានិច្ច។", ops: [{ set: { id: "t", x: bx + 44 } }, { add: { id: "ic", k: "text", x: bx + 20, y: by + 6, w: 20, h: 20, t: "🛒", sz: 13 } }, { set: { id: "btn", w: 262 } }, { gap: [bx + 38, by + 4, 6, "8"] }, { layers: ["# Button  ⇄", "  ◯ icon", "  T បន្ថែមទៅកន្ត្រក…"] }] },
    { cap: "Resizing៖ ជ្រើស «Hug contents» ឲ្យប៊ូតុងតូចធំតាមខ្លឹមសារ ឬ «Fill container» ឲ្យពេញទទឹង។", ops: [{ gap: null }, { props: { Width: "Hug contents", Height: "Hug contents", "": "Fill container" } }] },
    { cap: "Auto Layout ប្រើបានគ្រប់កន្លែង៖ បញ្ជី កាត ម៉ឺនុយ។ វាជាជំនាញសំខាន់បំផុតមួយក្នុង Figma!", ops: [{ sel: null }, { set: { id: "bad", y: by + 80 } }, { set: { id: "badt", y: by + 88 } }] },
  ] });
  const cx = 300;
  V.push({ t: "Components និង Variants", lv: "Intermediate", min: "៣:០០", d: "ធ្វើម្ដង ប្រើបានគ្រប់កន្លែង — កែមេ នោះកូនទាំងអស់ប្ដូរតាម។", steps: [
    { cap: "យើងមានប៊ូតុងដែលធ្វើដោយ Auto Layout ពីវីដេអូមុន។", ops: [{ add: { id: "m", k: "rect", x: cx, y: 120, w: 130, h: 40, r: 20, fill: "#e2556e" } }, { add: { id: "mt", k: "text", x: cx + 30, y: 130, w: 100, h: 20, t: "កុម្ម៉ង់", sz: 13, color: "#fff" } }, { layer: "# Button" }, { sel: "m" }] },
    { cap: "ចុច Ctrl + Alt + K (Mac៖ ⌘ + ⌥ + K) ឬ «Create component»។ រូបតំណាងប្ដូរជាពណ៌ស្វាយ ❖។", ops: [{ key: "Ctrl + Alt + K" }, { layers: ["❖ Button"] }, { set: { id: "m", stroke: "#9747ff" } }, { badge: [cx, 102, "❖ Button"] }] },
    { cap: "Component មេ (Main component) គឺជាគំរូដើម។ ចុច Alt + អូស ដើម្បីចម្លងជា Instance។", ops: [{ key: "Alt + Drag" }, { cur: [cx + 60, 140] }, { add: { id: "i1", k: "rect", x: cx, y: 260, w: 130, h: 40, r: 20, fill: "#e2556e" } }, { add: { id: "i1t", k: "text", x: cx + 30, y: 270, w: 100, h: 20, t: "កុម្ម៉ង់", sz: 13, color: "#fff" } }, { cur: [cx + 60, 280] }, { layer: "◇ Button" }] },
    { cap: "ចម្លងបន្ថែមទៀត។ Instance មានរូបតំណាង ◇។", ops: [{ add: { id: "i2", k: "rect", x: cx + 170, y: 260, w: 130, h: 40, r: 20, fill: "#e2556e" } }, { add: { id: "i2t", k: "text", x: cx + 200, y: 270, w: 100, h: 20, t: "កុម្ម៉ង់", sz: 13, color: "#fff" } }, { add: { id: "i3", k: "rect", x: cx + 85, y: 340, w: 130, h: 40, r: 20, fill: "#e2556e" } }, { add: { id: "i3t", k: "text", x: cx + 115, y: 350, w: 100, h: 20, t: "កុម្ម៉ង់", sz: 13, color: "#fff" } }, { layer: "◇ Button" }, { layer: "◇ Button" }] },
    { cap: "មើលវេទមន្ត៖ ប្ដូរពណ៌នៅ Component មេទៅ #1F6FEB…", ops: [{ sel: "m" }, { cur: [cx + 60, 140] }, { props: { Fill: "#1F6FEB" } }, { set: { id: "m", fill: "#1f6feb" } }] },
    { cap: "…ហើយ Instance ទាំងអស់ប្ដូរតាមភ្លាម! នេះជាមូលហេតុដែល Design System ប្រើ Components។", ops: [{ set: { id: "i1", fill: "#1f6feb" } }, { set: { id: "i2", fill: "#1f6feb" } }, { set: { id: "i3", fill: "#1f6feb" } }] },
    { cap: "Instance អាចប្ដូរអក្សរដោយមិនប៉ះពាល់មេ (Override)៖ ឧ. «បង់ប្រាក់»។", ops: [{ sel: "i2" }, { set: { id: "i2t", t: "បង់ប្រាក់" } }] },
    { cap: "Variants៖ ជ្រើស Component មេ ហើយចុច «Add variant» ដើម្បីបង្កើតស្ថានភាព Default, Hover, Disabled។", ops: [{ sel: null }, { add: { id: "vbox", k: "rect", x: cx - 20, y: 100, w: 450, h: 76, r: 6, fill: "none", stroke: "#9747ff", dash: 1, behind: 1 } }, { set: { id: "m", x: cx - 4 } }, { set: { id: "mt", x: cx + 26 } }, { add: { id: "v2", k: "rect", x: cx + 140, y: 120, w: 130, h: 40, r: 20, fill: "#1858c4" } }, { add: { id: "v2t", k: "text", x: cx + 170, y: 130, w: 100, h: 20, t: "Hover", sz: 13, color: "#fff" } }, { add: { id: "v3", k: "rect", x: cx + 284, y: 120, w: 130, h: 40, r: 20, fill: "#c9cdd6" } }, { add: { id: "v3t", k: "text", x: cx + 310, y: 130, w: 100, h: 20, t: "Disabled", sz: 13, color: "#fff" } }, { props: { State: "Default / Hover / Disabled" } }] },
    { cap: "នៅលើ Instance អ្នកអាចប្ដូរ State ពី Design panel ខាងស្ដាំ។ Components + Variants = មូលដ្ឋាននៃ Design System។", ops: [{ sel: "i3" }, { set: { id: "i3", fill: "#c9cdd6" } }, { props: { State: "Disabled ▾" } }] },
  ] });
  const A = { x: 250, y: 100, w: 190, h: 380 }, Bf = { x: 530, y: 100, w: 190, h: 380 };
  V.push({ t: "Prototype៖ ភ្ជាប់អេក្រង់ឲ្យចុចបាន", lv: "Intermediate", min: "២:៣០", d: "បំប្លែងការរចនាទៅជាគំរូដែលអាចចុចសាកបាន ដើម្បីតេស្តជាមួយអ្នកប្រើ។", steps: [
    { cap: "យើងមាន ២ អេក្រង់៖ «Menu» និង «Detail»។", ops: [{ add: { id: "a", k: "frame", ...A, label: "Menu" } }, { add: { id: "b", k: "frame", ...Bf, label: "Detail" } }, { add: { id: "ac", k: "img", x: A.x + 14, y: A.y + 40, w: 76, h: 70, r: 8 } }, { add: { id: "ac2", k: "img", x: A.x + 100, y: A.y + 40, w: 76, h: 70, r: 8 } }, { add: { id: "bh", k: "img", x: Bf.x, y: Bf.y, w: 190, h: 150, r: 0 } }, { add: { id: "bb", k: "rect", x: Bf.x + 14, y: Bf.y + 320, w: 162, h: 34, r: 17, fill: "#e2556e" } }, { layers: ["# Menu", "# Detail"] }] },
    { cap: "នៅ Design panel ខាងស្ដាំ ចុចផ្ទាំង «Prototype»។", ops: [{ tab: "Prototype" }, { cur: [890, 58] }, { click: 1 }] },
    { cap: "ជ្រើសកាតម្ហូបដំបូងក្នុង Menu។ រង្វង់ ⊕ តូចមួយលេចឡើងនៅគែម។", ops: [{ sel: "ac" }, { cur: [A.x + 52, A.y + 75] }, { knob: [A.x + 90, A.y + 75] }] },
    { cap: "អូសរង្វង់នោះ (noodle) ទៅកាន់ Frame «Detail»។", ops: [{ cur: [A.x + 92, A.y + 75] }, { link: [A.x + 90, A.y + 75, Bf.x, Bf.y + 60] }, { cur: [Bf.x + 4, Bf.y + 60] }] },
    { cap: "កំណត់ Interaction៖ On tap → Navigate to «Detail» · Animation៖ Smart animate · 300ms។", ops: [{ knob: null }, { props: { Trigger: "On tap", Action: "Navigate to", Destination: "Detail", Animation: "Smart animate", Duration: "300ms" } }] },
    { cap: "ធ្វើដូចគ្នាសម្រាប់ប៊ូតុង ← ត្រឡប់ក្រោយ នៅ Detail៖ Action = «Back»។", ops: [{ add: { id: "back", k: "rect", x: Bf.x + 10, y: Bf.y + 12, w: 22, h: 22, r: 11, fill: "#ffffff" } }, { sel: "back" }, { link2: [Bf.x + 21, Bf.y + 12, A.x + 190, A.y + 30] }, { props: { Trigger: "On tap", Action: "Back", Animation: "Smart animate" } }] },
    { cap: "ចុចប៊ូតុង ▶ Present នៅជ្រុងខាងស្ដាំលើ ដើម្បីសាក prototype។", ops: [{ sel: null }, { cur: [935, 22] }, { click: 1 }, { play: 1 }] },
    { cap: "ចុចលើកាតម្ហូប → ផ្លាស់ទៅ Detail ជាមួយចលនារលូន។ ចែករំលែកតំណ prototype ទៅអ្នកប្រើដើម្បីតេស្ត។", ops: [{ demo: 1 }] },
    { cap: "គន្លឹះ៖ ដាក់ឈ្មោះ layer ដូចគ្នានៅ ២ អេក្រង់ ដើម្បីឲ្យ Smart animate ធ្វើចលនាបានល្អ។", ops: [{ play: 0 }, { demo: 0 }] },
  ] });
  const EN = [["Welcome to Figma! Go to figma dot com, sign up for free, then click New design file.", "Part one: the toolbar at the top, with Move, Frame, Rectangle, Text and Pen.", "Part two: the Layers panel on the left lists every element in your file.", "Part three: the canvas in the middle is where you design. Hold Control and scroll to zoom, and hold Space and drag to move around.", "Part four: the Design panel on the right edits size, color, text and effects of the selected element.", "Click the Frame tool, or press F on your keyboard.", "In the Design panel, choose a preset size, such as Android Compact or iPhone 16.", "A new frame appears, three hundred sixty by eight hundred. This is one phone screen.", "Double click the frame name to rename it, for example Home. Always use clear names!", "Figma saves automatically to the cloud. You have created your first frame!"], ["Start with a frame called Home, three sixty by eight hundred.", "Press T for the Text tool, and type the greeting. Size twenty four, bold.", "Press R for Rectangle and drag to make a search box. Set the corner radius to twenty four and a light gray fill.", "Draw a larger rectangle for the banner. In a wireframe, use gray with an X instead of a real image.", "Draw one product card: an image, a name and a price.", "Select the whole card and press Control D to duplicate it. Move the copy to the right.", "Duplicate again for the second row. Keep equal spacing of sixteen pixels, a multiple of eight.", "Draw the tab bar at the bottom: a white rectangle, sixty four high, with five icons.", "Select the card layers and press Control G to group them. Give every layer a meaningful name.", "The home screen wireframe is done! Next, try the bakery app exercise in the exercises tab."], ["The problem: with a normal button, longer text spills outside. Auto Layout fixes this.", "Start again. Press T and type the button label.", "Select the text and press Shift A. Figma wraps it in a frame with Auto Layout.", "Set the padding: twenty four left and right, twelve top and bottom. The button grows evenly.", "Set the fill color, a corner radius of twenty four, and change the text to white.", "Now type a longer label. The button grows with the text automatically!", "Add a cart icon inside the button. A gap of eight always keeps the space between icon and text.", "Resizing: choose Hug contents to fit the content, or Fill container to stretch to full width.", "Auto Layout works everywhere: lists, cards and menus. It is one of the most important skills in Figma!"], ["Here is the button we made with Auto Layout in the previous video.", "Press Control Alt K, or Command Option K on Mac, to create a component. The icon turns purple.", "This is the main component, the original. Hold Alt and drag to copy it as an instance.", "Make more copies. Instances have a diamond outline icon.", "Watch the magic: change the color of the main component to blue.", "And every instance updates instantly! That is why design systems use components.", "An instance can override its text without changing the main component, for example Pay.", "Variants: select the main component and click Add variant, to create Default, Hover and Disabled states.", "On any instance, switch the state from the Design panel. Components and variants are the foundation of a design system."], ["We have two screens: Menu and Detail.", "In the right panel, click the Prototype tab.", "Select the first food card on the Menu screen. A small plus circle appears on its edge.", "Drag that circle, called a noodle, to the Detail frame.", "Set the interaction: On tap, Navigate to Detail, with Smart animate, three hundred milliseconds.", "Do the same for the back button on Detail, with the action set to Back.", "Click the Present button at the top right to try the prototype.", "Tap the food card and it moves to Detail with a smooth animation. Share the prototype link with users to test it.", "Tip: give layers the same names on both screens, so Smart animate can animate them nicely."]];
  V.forEach((v, i) => v.steps.forEach((st, j) => { st.en = (EN[i] || [])[j] || ""; }));
  XC.uxVideos = V;

  /* ---------------- Player ---------------- */
  XC.uxPlayer = function (host, vid, opts = {}) {
    host.innerHTML = `<div class="fv">
      <div class="fv-wrap"><div class="fv-stage">
        <div class="fv-top">${TOOLS.map(t => `<span class="fv-tool" data-tool="${t[0]}" title="${t[2]}">${t[1]}</span>`).join("")}<span class="fv-file">xCenbar — ${esc(vid.t)}</span><span class="fv-share">Share</span><span class="fv-play">▶</span></div>
        <div class="fv-left"><div class="fv-ph">Layers</div><div class="fv-layers"></div></div>
        <div class="fv-canvas"></div>
        <div class="fv-right"><div class="fv-tabs"><span data-tab="Design" class="on">Design</span><span data-tab="Prototype">Prototype</span></div><div class="fv-props"></div></div>
        <div class="fv-hl"></div><svg class="fv-links" viewBox="0 0 960 540"></svg>
        <div class="fv-key"></div><div class="fv-cursor"><svg viewBox="0 0 20 24" width="20" height="24"><path d="M2 2l15 11l-7 1.5l4 7.5l-3 1.5l-4-7.5l-5 5z" fill="#111" stroke="#fff" stroke-width="1.4"/></svg><i></i></div>
        <div class="fv-demo"></div>
      </div></div>
      <div class="fv-cap"></div>
      <div class="fv-prog">${vid.steps.map((_, i) => `<span data-s="${i}"><i></i></span>`).join("")}</div>
      <div class="fv-ctrl"><button class="btn sm" data-a="prev">⏮</button><button class="btn sm primary" data-a="play">▶ ចាក់</button><button class="btn sm" data-a="next">⏭</button><button class="btn sm" data-a="speed">1×</button><button class="btn sm" data-a="voice">🔊</button><button class="btn sm" data-a="music">🎵 តន្ត្រី</button><span class="fv-count"></span></div><p class="note fv-voice-note"></p>
    </div>`;
    const $q = s => host.querySelector(s);
    const stage = $q(".fv-stage"), wrap = $q(".fv-wrap"), canvas = $q(".fv-canvas"), cur = $q(".fv-cursor"), links = $q(".fv-links");
    const fit = () => { const k = wrap.clientWidth / 960; stage.style.transform = `scale(${k})`; wrap.style.height = 540 * k + "px"; };
    fit(); const ro = new ResizeObserver(fit); ro.observe(wrap);
    let step = 0, playing = false, timer = null, speed = 1, els = {}, alive = true;
    const sel = { id: null };
    function reset() {
      canvas.innerHTML = ""; $q(".fv-layers").innerHTML = ""; $q(".fv-props").innerHTML = ""; links.innerHTML = ""; els = {}; sel.id = null;
      $q(".fv-demo").className = "fv-demo"; $q(".fv-demo").innerHTML = ""; $q(".fv-hl").style.display = "none"; $q(".fv-key").className = "fv-key";
      host.querySelectorAll(".fv-tool").forEach(t => t.classList.remove("on")); host.querySelectorAll(".fv-tabs span").forEach(t => t.classList.toggle("on", t.dataset.tab === "Design"));
      $q(".fv-play").classList.remove("on");
    }
    function style(el, o) {
      const s = el.style;
      if (o.x != null) s.left = o.x + "px"; if (o.y != null) s.top = o.y + "px"; if (o.w != null) s.width = o.w + "px"; if (o.h != null) s.height = o.h + "px";
      if (o.fill != null) s.background = o.fill; if (o.r != null) s.borderRadius = o.r + "px"; if (o.color) s.color = o.color;
      if (o.stroke) s.boxShadow = o.stroke === "none" ? "none" : `inset 0 0 0 ${o.dash ? 0 : 1.5}px ${o.stroke}`;
      if (o.dash) s.outline = `1.5px dashed ${o.stroke}`;
      if (o.sz) s.fontSize = o.sz + "px"; if (o.t != null && el.dataset.k === "text") el.textContent = o.t;
    }
    function selectBox() { host.querySelectorAll(".fv-el.sel").forEach(e => e.classList.remove("sel")); if (sel.id && els[sel.id]) els[sel.id].classList.add("sel"); }
    function apply(op, instant) {
      if (op.cur) { cur.style.transition = instant ? "none" : ""; cur.style.left = op.cur[0] + "px"; cur.style.top = op.cur[1] + "px"; }
      if (op.click && !instant) { cur.classList.remove("clk"); void cur.offsetWidth; cur.classList.add("clk"); }
      if (op.tool) host.querySelectorAll(".fv-tool").forEach(t => t.classList.toggle("on", t.dataset.tool === op.tool));
      if (op.key) { const k = $q(".fv-key"); k.textContent = "⌨ " + op.key; k.className = "fv-key " + (instant ? "" : "show"); }
      if (op.hl) { const h = $q(".fv-hl"), R = { toolbar: [0, 0, 960, 44], layers: [0, 44, 200, 496], canvas: [200, 44, 560, 496], props: [760, 44, 200, 496] }[op.hl]; if (!R) h.style.display = "none"; else { h.style.display = "block"; Object.assign(h.style, { left: R[0] + "px", top: R[1] + "px", width: R[2] + "px", height: R[3] + "px" }); } }
      if (op.add) {
        const o = op.add, el = document.createElement("div"); el.className = "fv-el fv-" + o.k; el.dataset.k = o.k;
        if (o.k === "frame") el.innerHTML = `<b>${esc(o.label || "Frame")}</b>`;
        if (o.k === "img") el.innerHTML = `<svg viewBox="0 0 10 10" preserveAspectRatio="none"><path d="M0 0L10 10M10 0L0 10" stroke="#aaa" stroke-width=".25" vector-effect="non-scaling-stroke"/></svg>`;
        if (o.k === "dots") el.innerHTML = "<i></i><i></i><i></i><i></i><i></i>";
        if (op.add.behind) canvas.prepend(el); else canvas.appendChild(el);
        els[o.id] = el;
        if (instant || o.k === "text" || o.k === "frame") style(el, o);
        else { style(el, { ...o, w: 0, h: 0 }); requestAnimationFrame(() => requestAnimationFrame(() => style(el, o))); }
      }
      if (op.set && els[op.set.id]) style(els[op.set.id], op.set);
      if ("sel" in op) { sel.id = op.sel; selectBox(); }
      if (op.layer) { const d = document.createElement("div"); d.textContent = op.layer; $q(".fv-layers").appendChild(d); }
      if (op.layers) $q(".fv-layers").innerHTML = op.layers.map(l => `<div>${esc(l)}</div>`).join("");
      if (op.props) $q(".fv-props").innerHTML = Object.entries(op.props).map(([k, v]) => `<div class="fv-prop${instant ? "" : " flash"}"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join("");
      if (op.tab) host.querySelectorAll(".fv-tabs span").forEach(t => t.classList.toggle("on", t.dataset.tab === op.tab));
      if ("gap" in op) { const g = $q(".fv-gap"); if (g) g.remove(); if (op.gap) { const d = document.createElement("div"); d.className = "fv-gap"; Object.assign(d.style, { left: op.gap[0] + "px", top: op.gap[1] + "px", width: op.gap[2] + "px" }); d.textContent = op.gap[3]; canvas.appendChild(d); } }
      if (op.badge) { const d = document.createElement("div"); d.className = "fv-badge"; d.style.left = op.badge[0] + "px"; d.style.top = op.badge[1] + "px"; d.textContent = op.badge[2]; canvas.appendChild(d); }
      if ("knob" in op) { const k = $q(".fv-knob"); if (k) k.remove(); if (op.knob) { const d = document.createElement("div"); d.className = "fv-knob"; d.style.left = op.knob[0] + "px"; d.style.top = op.knob[1] + "px"; canvas.appendChild(d); } }
      if (op.link || op.link2) { const [x1, y1, x2, y2] = op.link || op.link2; const mx = (x1 + x2) / 2; links.insertAdjacentHTML("beforeend", `<path d="M${x1} ${y1}C${mx} ${y1 - (op.link2 ? 60 : 0)} ${mx} ${y2} ${x2} ${y2}" fill="none" stroke="#0d99ff" stroke-width="2.5" ${instant ? "" : 'class="draw"'}/><circle cx="${x1}" cy="${y1}" r="4" fill="#0d99ff"/><path d="M${x2 - 8} ${y2 - 5}L${x2} ${y2}L${x2 - 8} ${y2 + 5}" fill="#0d99ff"/>`); }
      if ("play" in op) $q(".fv-play").classList.toggle("on", !!op.play);
      if ("demo" in op) { const d = $q(".fv-demo"); if (op.demo) { d.innerHTML = `<div class="fv-phone"><div class="fv-scr s1"><i></i><i></i><i></i><i></i></div><div class="fv-scr s2"><u></u><b></b></div><span class="fv-tap"></span></div>`; d.className = "fv-demo on"; } else { d.className = "fv-demo"; d.innerHTML = ""; } }
    }
    /* ---- sound: narration (speechSynthesis) + effects/music (WebAudio) ---- */
    const SS = window.speechSynthesis;
    let voices = [], ac = null, music = null, musicOn = true, speakDone = true, utter = null;
    const loadV = () => { voices = SS ? SS.getVoices() : []; };
    if (SS) { loadV(); SS.addEventListener && SS.addEventListener("voiceschanged", loadV); }
    const kmVoice = () => voices.find(v => /^km/i.test(v.lang)) || voices.find(v => /khmer/i.test(v.name));
    const enVoice = () => voices.find(v => /^en[-_](US|GB)/i.test(v.lang) && /natural|google|samantha|aria|jenny/i.test(v.name)) || voices.find(v => /^en/i.test(v.lang));
    let lang = XC.uxVoiceLang || "km";
    function langLabel() { return lang === "off" ? "🔇 គ្មានសំឡេង" : lang === "km" ? "🔊 ខ្មែរ" : "🔊 English"; }
    function audio() { if (!ac) { const C = window.AudioContext || window.webkitAudioContext; if (C) ac = new C(); } if (ac && ac.state === "suspended") ac.resume(); return ac; }
    function tone(f, d, type = "sine", vol = .08, when = 0, slide) { const c = audio(); if (!c) return; const t = c.currentTime + when, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + d); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + d); o.connect(g).connect(c.destination); o.start(t); o.stop(t + d + .02); }
    const sfx = { click: () => tone(1800, .05, "square", .03), key: () => { tone(900, .04, "square", .03); tone(700, .04, "square", .03, .07); }, pop: () => tone(520, .12, "sine", .06, 0, 880), link: () => tone(300, .35, "sine", .05, 0, 1200), done: () => [523, 659, 784].forEach((f, i) => tone(f, .25, "sine", .06, i * .1)) };
    function startMusic() { const c = audio(); if (!c || music || !musicOn) return; const g = c.createGain(); g.gain.value = .025; g.connect(c.destination); const notes = [261.6, 329.6, 392, 493.9, 440, 392, 329.6, 293.7]; let i = 0; const tick = () => { if (!music) return; const t = c.currentTime, o = c.createOscillator(), e = c.createGain(); o.type = "triangle"; o.frequency.value = notes[i++ % notes.length]; e.gain.setValueAtTime(0, t); e.gain.linearRampToValueAtTime(1, t + .08); e.gain.exponentialRampToValueAtTime(.001, t + 1.1); o.connect(e).connect(g); o.start(t); o.stop(t + 1.2); music.t = setTimeout(tick, 600); }; music = { g }; tick(); }
    function stopMusic() { if (music) { clearTimeout(music.t); music.g.disconnect(); music = null; } }
    function speak(i) {
      if (!SS) { speakDone = true; return; } SS.cancel(); speakDone = true;
      if (lang === "off") return;
      let v = lang === "km" ? kmVoice() : enVoice(), text = vid.steps[i].cap;
      if (lang === "km" && !v) { $q(".fv-voice-note").textContent = "ឧបករណ៍នេះមិនទាន់មានសំឡេងខ្មែរ — កំពុងប្រើ English។ (Microsoft Edge លើ Windows មានសំឡេងខ្មែរ «Piseth/Sreymom»; Android៖ ដំឡើង Khmer ក្នុង Google Text-to-speech)"; v = enVoice(); text = vid.steps[i].en || text; }
      else if (lang === "en") text = vid.steps[i].en || text;
      else $q(".fv-voice-note").textContent = "";
      utter = new SpeechSynthesisUtterance(text.replace(/[✨🎉🛒]/g, "")); if (v) { utter.voice = v; utter.lang = v.lang; } utter.rate = Math.min(1.6, .95 * speed);
      speakDone = false; utter.onend = utter.onerror = () => { speakDone = true; }; SS.speak(utter);
      setTimeout(() => { if (!SS.speaking && !SS.pending) speakDone = true; }, 1500);
    }
    function render(target, animate) {
      clearTimeout(timer); reset();
      for (let i = 0; i < target; i++) vid.steps[i].ops.forEach(op => apply(op, true));
      step = target;
      host.querySelectorAll(".fv-prog span").forEach((s, i) => { s.className = i < step ? "done" : i === step ? "cur" : ""; s.firstChild.style.animation = "none"; });
      $q(".fv-count").textContent = `ជំហាន ${step + 1}/${vid.steps.length}`;
      $q(".fv-cap").textContent = vid.steps[step].cap;
      const ops = vid.steps[step].ops; const gap = 750 / speed;
      if (!animate) { ops.forEach(op => apply(op, true)); return; }
      if (playing) speak(step);
      let k = 0; const run = () => { if (!alive) return; if (k < ops.length) { const op = ops[k++]; apply(op, false); if (playing) { if (op.click) sfx.click(); if (op.key) sfx.key(); if (op.add) sfx.pop(); if (op.link || op.link2) sfx.link(); } timer = setTimeout(run, gap); } else hold(); };
      run();
    }
    function hold() {
      const cap = vid.steps[step].cap, ms = Math.max(2600, cap.length * 55) / speed, t0 = Date.now();
      const bar = host.querySelectorAll(".fv-prog span")[step].firstChild; bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = `fvfill ${ms}ms linear forwards`;
      if (!playing) { bar.style.animationPlayState = "paused"; return; }
      const next = () => { if (!alive || !playing) return; if (step < vid.steps.length - 1) render(step + 1, true); else { playing = false; host.dataset.ended = 1; stopMusic(); sfx.done(); ctrl(); opts.onEnd && opts.onEnd(); } };
      const wait = () => { if (!alive || !playing) return; if (lang !== "off" && !speakDone && Date.now() - t0 < 30000) { timer = setTimeout(wait, 200); return; } timer = setTimeout(next, lang === "off" ? 0 : 500); };
      timer = setTimeout(wait, lang === "off" ? ms : Math.min(ms, 1200));
    }
    function ctrl() { $q('[data-a="play"]').textContent = playing ? "⏸ ផ្អាក" : "▶ ចាក់"; }
    function pause() { playing = false; clearTimeout(timer); SS && SS.cancel(); stopMusic(); ctrl(); }
    host.querySelector('[data-a="play"]').onclick = () => { if (playing) return pause(); playing = true; audio(); ctrl(); if (musicOn) startMusic(); const st0 = host.dataset.ended ? 0 : step; delete host.dataset.ended; render(st0, true); };
    host.querySelector('[data-a="next"]').onclick = () => { if (step < vid.steps.length - 1) render(step + 1, true); };
    host.querySelector('[data-a="prev"]').onclick = () => { render(Math.max(0, step - 1), true); };
    host.querySelector('[data-a="speed"]').onclick = e => { speed = speed === 1 ? 1.25 : speed === 1.25 ? .8 : 1; e.target.textContent = speed + "×"; };
    host.querySelector('[data-a="voice"]').onclick = e => { lang = lang === "km" ? "en" : lang === "en" ? "off" : "km"; XC.uxVoiceLang = lang; e.target.textContent = langLabel(); if (lang === "off") { SS && SS.cancel(); speakDone = true; $q(".fv-voice-note").textContent = ""; } };
    host.querySelector('[data-a="music"]').onclick = e => { musicOn = !musicOn; e.target.textContent = musicOn ? "🎵 តន្ត្រី" : "🎵 បិទ"; if (musicOn && playing) startMusic(); else stopMusic(); };
    host.querySelector('[data-a="voice"]').textContent = langLabel();
    host.querySelectorAll(".fv-prog span").forEach(s => s.onclick = () => render(+s.dataset.s, true));
    render(0, false);
    return { destroy() { alive = false; clearTimeout(timer); SS && SS.cancel(); stopMusic(); ro.disconnect(); } };
  };
})();
