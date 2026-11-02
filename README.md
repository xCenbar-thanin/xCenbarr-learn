# xCenbar Learning

វេបសាយរៀន **English, ភាសាចិន, Code/IT, UX/UI Design, Graphic Design និង Video Editing** ជាភាសាខ្មែរ។

## របៀបបើក
1. Extract (ពន្លា) file zip។
2. ចុចពីរដងលើ `index.html` ដើម្បីបើកក្នុង browser (Chrome, Edge, Safari)។
3. ត្រូវការអ៊ីនធឺណិតសម្រាប់ពុម្ពអក្សរ (Google Fonts)។ បើគ្មានអ៊ីនធឺណិត វេបសាយនៅតែដំណើរការ ប៉ុន្តែប្រើពុម្ពអក្សរលំនាំដើម។

## រចនាសម្ព័ន្ធ Folder
```
xcenbar-learning/
├── index.html            ទំព័រមេ (Login, Dashboard, មុខវិជ្ជាទាំងអស់)
├── assets/logo.svg       ឡូហ្គោ និង icon វេបសាយ
├── css/style.css         រចនាប័ទ្ម (ផ្ទៃខាងក្រោយ glass, ពណ៌, layout)
└── js/
    ├── bg.js             ផ្ទៃខាងក្រោយមានចលនា (aurora + ផ្កាយ)
    ├── app.js            Login, Dashboard, Logs, និងមុខងារទាំងអស់
    ├── data-english.js   Verb 1-2-3 (៧ កម្រិត), Grammar A1–C2, Reading, Conversation
    ├── data-grammar-forms.js  ទម្រង់ប្រយោគ (+) (−) (?) សម្រាប់មេរៀន grammar នីមួយៗ
    ├── data-chinese.js   ពាក្យ HSK 1–6, សន្ទនា, អំណាន, ឃ្លា
    ├── data-code.js      មេរៀន Python, C/C++, C#, PHP, SQL, Java/Kotlin, JavaScript, HTML/CSS + កិច្ចការផ្ទះ
    ├── data-design.js    មេរៀន UX/UI, គម្រោងរចនា, Figma, Graphic Design
    └── data-video.js     មេរៀន Video Editing, CapCut, គម្រោង, វចនានុក្រម
```

## របៀបបន្ថែមខ្លឹមសារ
**បន្ថែម Verb** — បើក `js/data-english.js` ហើយបន្ថែមមួយបន្ទាត់ក្នុងកម្រិតដែលចង់បាន៖
```
V1|V2|V3|អត្ថន័យខ្មែរ|Example sentence.|បកប្រែប្រយោគជាខ្មែរ
```
ឧទាហរណ៍៖ `explore|explored|explored|រុករក|We explored the jungle.|យើងបានរុករកព្រៃ។`

**បន្ថែមពាក្យចិន** — បើក `js/data-chinese.js`៖
```
汉字|pīnyīn|អត្ថន័យខ្មែរ|ឧទាហរណ៍ចិន|pinyin ឧទាហរណ៍|អត្ថន័យឧទាហរណ៍
```

**ដាក់វីដេអូមេរៀន** — ក្នុង `js/data-code.js` ឬ `js/data-design.js` ដាក់ link YouTube embed ក្នុង `video:""`៖
```
video:"https://www.youtube.com/embed/VIDEO_ID"
```

## ចំណាំសំខាន់
- **គណនី Login/Sign up** ត្រូវបានរក្សាទុកក្នុង browser របស់ឧបករណ៍នីមួយៗ (localStorage)។ ល្អសម្រាប់គម្រោងសិក្សា និងបង្ហាញ។ ដើម្បីឲ្យអ្នកប្រើច្រើននាក់ចូលពីឧបករណ៍ណាក៏បាន ត្រូវភ្ជាប់ backend ពិត ដូចជា Firebase Authentication ឬ Supabase។
- **សំឡេង AI** ប្រើ Speech Synthesis របស់ browser។ សំឡេងចិនដំណើរការលុះត្រាតែឧបករណ៍មានសំឡេងភាសាចិន។
- **ការបកប្រែចិន↔ខ្មែរ** ផ្អែកលើវចនានុក្រមនៅក្នុងវេបសាយ (មិនមែនម៉ាស៊ីនបកប្រែប្រយោគពេញលេញទេ)។
- ការបកប្រែខ្មែរសម្រាប់ពាក្យកម្រិតខ្ពស់ គួរពិនិត្យជាមួយគ្រូ ឬវចនានុក្រមម្ដងទៀត។

## ដាក់វេបសាយឲ្យមនុស្សគ្រប់គ្នាមើល (Free)
- **Netlify Drop**៖ ចូល app.netlify.com/drop ហើយអូស folder ចូល។
- **GitHub Pages**៖ upload folder ទៅ GitHub repository ហើយបើក Pages។

## Grammar៖ ការ highlight ពាក្យក្នុងប្រយោគ
ក្នុង `XC.grammar` ប្រយោគឧទាហរណ៍នីមួយៗអាចដាក់ `[...]` ជុំវិញពាក្យ grammar សំខាន់។ ពាក្យនោះនឹងបង្ហាញជាពណ៌ទឹកក្រូច ហើយសំឡេង AI នឹងអានដោយមិនអានសញ្ញា `[ ]`។
ឧ. `["If it rains, I [will stay] home.","ប្រសិនបើភ្លៀង ខ្ញុំនឹងនៅផ្ទះ។"]`

## Grammar៖ ទម្រង់ប្រយោគ (+) (−) (?)
ឯកសារ `js/data-grammar-forms.js` មានទម្រង់ ៣ សម្រាប់មេរៀននីមួយៗ។ ចំណងជើងត្រូវតែដូចគ្នាទៅនឹង `title` ក្នុង `XC.grammar`៖
```
## Present Simple
+ S + V1 / V1-s | He [plays] football. | គាត់លេងបាល់ទាត់។
- S + don't / doesn't + V1 | He [doesn't play] football. | គាត់មិនលេងបាល់ទាត់ទេ។
? Do / Does + S + V1? | [Does] he [play] football? | តើគាត់លេងបាល់ទាត់ទេ?
```

## Verb word forms (n · adj)
ឯកសារ `js/data-wordforms.js` បន្ថែមទម្រង់នាម និងគុណនាមនៃ verb នីមួយៗ ក្នុងតារាង Verb 1, 2, 3។ ទម្រង់៖ `decide|decision|ការសម្រេចចិត្ត|decisive|ម៉ឺងម៉ាត់` (ប្រើ `-` បើគ្មាន)។
