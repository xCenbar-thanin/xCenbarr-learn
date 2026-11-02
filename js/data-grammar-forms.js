/* =========================================================
   Grammar sentence forms: (+) affirmative · (−) negative · (?) question
   Format: "## <lesson title>" then 3 lines "<sign> <structure> | <example> | <Khmer>"
   [ … ] in the example = highlighted grammar
   ========================================================= */
window.XC = window.XC || {};
XC.grammarFormsRaw = String.raw`
## Verb to be: am / is / are
+ S + am / is / are | She [is] a teacher. | នាងជាគ្រូបង្រៀន។
- S + am / is / are + not | She [isn't] a teacher. | នាងមិនមែនជាគ្រូបង្រៀនទេ។
? Am / Is / Are + S…? | [Is] she a teacher? | តើនាងជាគ្រូបង្រៀនទេ?
## Present Simple
+ S + V1 / V1-s | He [plays] football. | គាត់លេងបាល់ទាត់។
- S + don't / doesn't + V1 | He [doesn't play] football. | គាត់មិនលេងបាល់ទាត់ទេ។
? Do / Does + S + V1? | [Does] he [play] football? | តើគាត់លេងបាល់ទាត់ទេ?
## Past Simple
+ S + V2 | They [visited] Kampot. | ពួកគេបានទៅលេងកំពត។
- S + didn't + V1 | They [didn't visit] Kampot. | ពួកគេមិនបានទៅលេងកំពតទេ។
? Did + S + V1? | [Did] they [visit] Kampot? | តើពួកគេបានទៅលេងកំពតទេ?
## a / an
+ S + V + a / an + noun | It is [an] apple. | វាជាផ្លែប៉ោមមួយ។
- S + isn't + a / an + noun | It [isn't an] apple. | វាមិនមែនជាផ្លែប៉ោមទេ។
? Is it + a / an + noun? | Is it [an] apple? | តើវាជាផ្លែប៉ោមទេ?
## There is / There are
+ There is / There are + noun | [There are] two banks here. | នៅទីនេះមានធនាគារពីរ។
- There isn't / There aren't + any… | [There aren't] any banks here. | នៅទីនេះគ្មានធនាគារទេ។
? Is there / Are there + any…? | [Are there] any banks here? | តើនៅទីនេះមានធនាគារទេ?
## Possessive adjectives: my, your, his, her…
+ This is + my / his… + noun | This is [his] bike. | នេះជាកង់របស់គាត់។
- This isn't + my / his… + noun | This [isn't his] bike. | នេះមិនមែនជាកង់របស់គាត់ទេ។
? Is this + my / his… + noun? | Is this [his] bike? | តើនេះជាកង់របស់គាត់ទេ?
## can / can't
+ S + can + V1 | She [can swim]. | នាងហែលទឹកបាន។
- S + can't + V1 | She [can't swim]. | នាងហែលទឹកមិនបានទេ។
? Can + S + V1? | [Can] she [swim]? | តើនាងហែលទឹកបានទេ?
## Prepositions of place: in, on, under, next to
+ S + is / are + in / on / under… | The keys are [on] the table. | កូនសោនៅលើតុ។
- S + isn't / aren't + in / on… | The keys [aren't on] the table. | កូនសោមិននៅលើតុទេ។
? Is / Are + S + in / on…? | Are the keys [on] the table? | តើកូនសោនៅលើតុទេ?
## Plural nouns
+ S + have / are + plural noun | I have two [brothers]. | ខ្ញុំមានបងប្អូនប្រុសពីរនាក់។
- S + don't have any + plural noun | I [don't have any] [brothers]. | ខ្ញុំគ្មានបងប្អូនប្រុសទេ។
? Do you have any + plural noun? | Do you have any [brothers]? | តើអ្នកមានបងប្អូនប្រុសទេ?
## Object pronouns: me, him, her…
+ S + V + object pronoun | She knows [him]. | នាងស្គាល់គាត់។
- S + don't / doesn't + V1 + object | She [doesn't know] [him]. | នាងមិនស្គាល់គាត់ទេ។
? Do / Does + S + V1 + object? | Does she know [him]? | តើនាងស្គាល់គាត់ទេ?
## Imperatives (ប្រយោគបញ្ជា)
+ V1 + … | [Close] the door. | បិទទ្វារ។
- Don't + V1 + … | [Don't close] the door. | កុំបិទទ្វារ។
? Can you / Could you + V1…? | [Could you close] the door? | តើអ្នកអាចបិទទ្វារបានទេ?
## Wh- questions: what, where, when, who, why, how
+ S + V… (ចម្លើយ) | She lives [in Kep]. | នាងរស់នៅកែប។
- S + doesn't + V1 + … | She [doesn't live] in Phnom Penh. | នាងមិនរស់នៅភ្នំពេញទេ។
? Wh- + do / does + S + V1? | [Where does] she live? | តើនាងរស់នៅឯណា?
## this / that / these / those
+ This / These + is / are… | [These] are my shoes. | ទាំងនេះជាស្បែកជើងរបស់ខ្ញុំ។
- This / These + isn't / aren't… | [These aren't] my shoes. | ទាំងនេះមិនមែនជាស្បែកជើងរបស់ខ្ញុំទេ។
? Is this / Are these…? | [Are these] your shoes? | តើទាំងនេះជាស្បែកជើងរបស់អ្នកទេ?
## do / does: questions and negatives
+ S + V1 / V1-s | She [works] on Sunday. | នាងធ្វើការនៅថ្ងៃអាទិត្យ។
- S + don't / doesn't + V1 | She [doesn't work] on Sunday. | នាងមិនធ្វើការនៅថ្ងៃអាទិត្យទេ។
? Do / Does + S + V1? | [Does] she [work] on Sunday? | តើនាងធ្វើការនៅថ្ងៃអាទិត្យទេ?
## Prepositions of time: in, on, at
+ S + V + at / on / in + time | The class starts [at] 7. | ថ្នាក់ចាប់ផ្ដើមម៉ោង ៧។
- S + doesn't + V1 + at / on / in… | The class [doesn't start] [at] 7. | ថ្នាក់មិនចាប់ផ្ដើមម៉ោង ៧ ទេ។
? What time / When + does + S + V1? | [What time does] the class start? | តើថ្នាក់ចាប់ផ្ដើមម៉ោងប៉ុន្មាន?
## like / love / hate + V-ing
+ S + like(s) + V-ing | He [likes cooking]. | គាត់ចូលចិត្តធ្វើម្ហូប។
- S + don't / doesn't like + V-ing | He [doesn't like cooking]. | គាត់មិនចូលចិត្តធ្វើម្ហូបទេ។
? Do / Does + S + like + V-ing? | [Does] he [like cooking]? | តើគាត់ចូលចិត្តធ្វើម្ហូបទេ?
## have / has (មាន)
+ S + have / has + noun | She [has] a laptop. | នាងមានកុំព្យូទ័រយួរដៃ។
- S + don't / doesn't have + noun | She [doesn't have] a laptop. | នាងមិនមានកុំព្យូទ័រយួរដៃទេ។
? Do / Does + S + have…? | [Does] she [have] a laptop? | តើនាងមានកុំព្យូទ័រយួរដៃទេ?
## Subject pronouns: I, you, he, she, it…
+ Subject pronoun + V… | [They] are happy. | ពួកគេសប្បាយចិត្ត។
- Subject pronoun + be + not… | [They aren't] happy. | ពួកគេមិនសប្បាយចិត្តទេ។
? Be + subject pronoun…? | [Are they] happy? | តើពួកគេសប្បាយចិត្តទេ?
## Adjectives before nouns
+ S + is + a + adj + noun | It is a [cheap] phone. | វាជាទូរស័ព្ទថោក។
- S + isn't + a + adj + noun | It [isn't] a [cheap] phone. | វាមិនមែនជាទូរស័ព្ទថោកទេ។
? Is + S + a + adj + noun? | Is it a [cheap] phone? | តើវាជាទូរស័ព្ទថោកទេ?
## Yes/No questions with be
+ S + am / is / are… | You [are] ready. | អ្នករួចរាល់ហើយ។
- S + am not / isn't / aren't… | You [aren't] ready. | អ្នកមិនទាន់រួចរាល់ទេ។
? Am / Is / Are + S…? | [Are you] ready? | តើអ្នករួចរាល់ហើយឬនៅ?
## would like (ចង់បាន · គួរសម)
+ S + would like + noun / to V1 | I['d like] some tea. | ខ្ញុំចង់បានតែបន្តិច។
- S + wouldn't like + to V1 / don't want… | I [wouldn't like to] live there. | ខ្ញុំមិនចង់រស់នៅទីនោះទេ។
? Would + S + like…? | [Would you like] some tea? | តើអ្នកចង់ពិសាតែទេ?
## Present Simple spelling: -s / -es / -ies
+ He / She / It + V-s / es / ies | She [studies] French. | នាងរៀនភាសាបារាំង។
- He / She / It + doesn't + V1 (គ្មាន s) | She [doesn't study] French. | នាងមិនរៀនភាសាបារាំងទេ។
? Does + he / she / it + V1? | [Does] she [study] French? | តើនាងរៀនភាសាបារាំងទេ?
## Present Continuous
+ S + am / is / are + V-ing | They [are watching] TV. | ពួកគេកំពុងមើលទូរទស្សន៍។
- S + am not / isn't / aren't + V-ing | They [aren't watching] TV. | ពួកគេមិនកំពុងមើលទូរទស្សន៍ទេ។
? Am / Is / Are + S + V-ing? | [Are] they [watching] TV? | តើពួកគេកំពុងមើលទូរទស្សន៍ទេ?
## Comparatives
+ S + be + adj-er / more adj + than | This bag is [cheaper than] that one. | កាបូបនេះថោកជាងកាបូបនោះ។
- S + be + not + as + adj + as | This bag [isn't as cheap as] that one. | កាបូបនេះមិនថោកដូចកាបូបនោះទេ។
? Be + S + adj-er + than…? | Is this bag [cheaper than] that one? | តើកាបូបនេះថោកជាងកាបូបនោះទេ?
## Past Continuous
+ S + was / were + V-ing | She [was sleeping] at 10. | នាងកំពុងគេងនៅម៉ោង ១០។
- S + wasn't / weren't + V-ing | She [wasn't sleeping] at 10. | នាងមិនកំពុងគេងនៅម៉ោង ១០ ទេ។
? Was / Were + S + V-ing? | [Was] she [sleeping] at 10? | តើនាងកំពុងគេងនៅម៉ោង ១០ ទេ?
## be going to (អនាគត)
+ S + am / is / are + going to + V1 | We [are going to travel]. | យើងនឹងធ្វើដំណើរ។
- S + am not / isn't / aren't + going to + V1 | We [aren't going to travel]. | យើងនឹងមិនធ្វើដំណើរទេ។
? Am / Is / Are + S + going to + V1? | [Are] we [going to travel]? | តើយើងនឹងធ្វើដំណើរទេ?
## Superlatives
+ S + be + the + adj-est / most adj | He is [the tallest] in class. | គាត់ខ្ពស់ជាងគេក្នុងថ្នាក់។
- S + be + not + the + adj-est | He [isn't the tallest] in class. | គាត់មិនមែនខ្ពស់ជាងគេក្នុងថ្នាក់ទេ។
? Who is + the + adj-est…? | [Who is the tallest] in class? | តើនរណាខ្ពស់ជាងគេក្នុងថ្នាក់?
## some / any · much / many
+ S + have + some + noun | I have [some] money. | ខ្ញុំមានលុយខ្លះ។
- S + don't have + any / much + noun | I [don't have much] money. | ខ្ញុំមិនមានលុយច្រើនទេ។
? Do you have any…? / How much / many…? | [How much] money do you have? | តើអ្នកមានលុយប៉ុន្មាន?
## Adverbs of frequency
+ S + always / usually / often + V | He [often] walks to school. | គាត់ច្រើនដើរទៅសាលា។
- S + don't / doesn't + usually / often + V1 · S + never + V | He [doesn't often walk] to school. | គាត់មិនសូវដើរទៅសាលាទេ។
? How often + do / does + S + V1? · Do you ever…? | [How often does] he walk to school? | តើគាត់ដើរទៅសាលាញឹកញាប់ប៉ុណ្ណា?
## should / must
+ S + should / must + V1 | You [should rest]. | អ្នកគួរសម្រាក។
- S + shouldn't / mustn't + V1 | You [shouldn't work] so late. | អ្នកមិនគួរធ្វើការដល់យប់ពេកទេ។
? Should + S + V1? | [Should] I [call] a doctor? | តើខ្ញុំគួរហៅគ្រូពេទ្យទេ?
## Past Simple: questions and negatives (did)
+ S + V2 | He [bought] a new bike. | គាត់បានទិញកង់ថ្មីមួយ។
- S + didn't + V1 | He [didn't buy] a new bike. | គាត់មិនបានទិញកង់ថ្មីទេ។
? Did + S + V1? · Wh- + did + S + V1? | [What did] he [buy]? | តើគាត់បានទិញអ្វី?
## Possessive 's
+ This is + name's + noun | This is [Lina's] phone. | នេះជាទូរស័ព្ទរបស់លីណា។
- This isn't + name's + noun | This [isn't] [Lina's] phone. | នេះមិនមែនជាទូរស័ព្ទរបស់លីណាទេ។
? Whose + noun + is this? | [Whose] phone is this? | តើទូរស័ព្ទនេះជារបស់នរណា?
## Adverbs of manner (quickly, well…)
+ S + V + adverb | She drives [carefully]. | នាងបើកបរដោយប្រុងប្រយ័ត្ន។
- S + don't / doesn't + V1 + adverb | She [doesn't drive] [carefully]. | នាងមិនបើកបរដោយប្រុងប្រយ័ត្នទេ។
? How + do / does + S + V1? | [How does] she drive? | តើនាងបើកបរយ៉ាងដូចម្ដេច?
## too / enough
+ S + be + too + adj / adj + enough | He is [old enough] to vote. | គាត់គ្រប់អាយុបោះឆ្នោតហើយ។
- S + be + not + adj + enough | He [isn't old enough] to vote. | គាត់មិនទាន់គ្រប់អាយុបោះឆ្នោតទេ។
? Be + S + adj + enough…? | Is he [old enough] to vote? | តើគាត់គ្រប់អាយុបោះឆ្នោតហើយឬនៅ?
## a few / a little / a lot of
+ S + have + a few / a little / a lot of | We have [a lot of] time. | យើងមានពេលច្រើន។
- S + don't have + much / many + noun | We [don't have much] time. | យើងមិនមានពេលច្រើនទេ។
? Do you have + much / many…? | Do you have [much] time? | តើអ្នកមានពេលច្រើនទេ?
## have to / don't have to
+ S + have to / has to + V1 | She [has to wear] a uniform. | នាងត្រូវពាក់ឯកសណ្ឋាន។
- S + don't / doesn't have to + V1 | She [doesn't have to wear] a uniform. | នាងមិនចាំបាច់ពាក់ឯកសណ្ឋានទេ។
? Do / Does + S + have to + V1? | [Does] she [have to wear] a uniform? | តើនាងត្រូវពាក់ឯកសណ្ឋានទេ?
## Conjunctions: and, but, or, because, so
+ Clause + because / so + clause | I'm happy [because] I passed. | ខ្ញុំសប្បាយចិត្តព្រោះខ្ញុំប្រឡងជាប់។
- Clause (negative) + because / but… | I [didn't go] out [because] it was raining. | ខ្ញុំមិនបានចេញទៅក្រៅទេ ព្រោះមេឃភ្លៀង។
? Why…? – Because… · …or…? | [Why] are you happy? – [Because] I passed. | ហេតុអ្វីអ្នកសប្បាយចិត្ត? – ព្រោះខ្ញុំប្រឡងជាប់។
## Possessive pronouns: mine, yours, his…
+ S + be + mine / yours… | The blue bag is [mine]. | កាបូបពណ៌ខៀវជារបស់ខ្ញុំ។
- S + be + not + mine / yours… | The blue bag [isn't mine]. | កាបូបពណ៌ខៀវមិនមែនជារបស់ខ្ញុំទេ។
? Be + S + yours / his…? · Whose…? | Is the blue bag [yours]? | តើកាបូបពណ៌ខៀវជារបស់អ្នកទេ?
## Prepositions of movement: into, across, through…
+ S + V2 + into / across… | We walked [across] the bridge. | យើងបានដើរឆ្លងស្ពាន។
- S + didn't + V1 + into / across… | We [didn't walk] [across] the bridge. | យើងមិនបានដើរឆ្លងស្ពានទេ។
? Did + S + V1 + into / across…? | Did you walk [across] the bridge? | តើអ្នកបានដើរឆ្លងស្ពានទេ?
## Present Continuous for future plans
+ S + am / is / are + V-ing + future time | I['m leaving] tomorrow. | ខ្ញុំនឹងចាកចេញនៅថ្ងៃស្អែក។
- S + am not / isn't / aren't + V-ing… | I['m not leaving] tomorrow. | ខ្ញុំមិនចាកចេញនៅថ្ងៃស្អែកទេ។
? When + am / is / are + S + V-ing? | [When are] you [leaving]? | តើអ្នកនឹងចាកចេញនៅពេលណា?
## will vs be going to
+ S + will + V1 · S + be going to + V1 | I['ll help] you. / I['m going to buy] a car. | ខ្ញុំនឹងជួយអ្នក។ / ខ្ញុំគ្រោងនឹងទិញឡាន។
- S + won't + V1 · S + isn't going to + V1 | I [won't tell] anyone. / I['m not going to buy] a car. | ខ្ញុំនឹងមិនប្រាប់នរណាទេ។ / ខ្ញុំមិនគ្រោងទិញឡានទេ។
? Will + S + V1? · Be + S + going to + V1? | [Will] you [help] me? / [Are] you [going to buy] a car? | តើអ្នកនឹងជួយខ្ញុំទេ? / តើអ្នកគ្រោងនឹងទិញឡានទេ?
## Reflexive pronouns: myself, yourself…
+ S + V + reflexive pronoun | He hurt [himself]. | គាត់បានធ្វើឲ្យខ្លួនឯងរបួស។
- S + didn't + V1 + reflexive | He [didn't hurt] [himself]. | គាត់មិនបានធ្វើឲ្យខ្លួនឯងរបួសទេ។
? Did + S + V1 + reflexive? | Did he hurt [himself]? | តើគាត់បានធ្វើឲ្យខ្លួនឯងរបួសទេ?
## Polite requests: Can / Could / Would you…?
+ S + can / could + V1 (ការឆ្លើយព្រម) | Sure, I [can help] you. | ពិតណាស់ ខ្ញុំអាចជួយអ្នកបាន។
- Sorry, S + can't + V1 | Sorry, I [can't help] you now. | សុំទោស ខ្ញុំមិនអាចជួយអ្នកឥឡូវនេះបានទេ។
? Can / Could / Would + you + V1? | [Could you help] me? | តើអ្នកអាចជួយខ្ញុំបានទេ?
## Negative questions: Don't you…? Isn't it…?
+ S + V (វិជ្ជមាន) | You [like] durian. | អ្នកចូលចិត្តធុរេន។
- S + don't + V1 (អវិជ្ជមាន) | You [don't like] durian. | អ្នកមិនចូលចិត្តធុរេនទេ។
? Don't / Isn't / Didn't + S…? (សំណួរអវិជ្ជមាន) | [Don't you] like durian? | អ្នកមិនចូលចិត្តធុរេនទេឬ?
## Present Perfect
+ S + have / has + V3 | She [has finished] her work. | នាងបានធ្វើការងាររួចហើយ។
- S + haven't / hasn't + V3 | She [hasn't finished] her work yet. | នាងមិនទាន់ធ្វើការងាររួចនៅឡើយទេ។
? Have / Has + S + V3? | [Has] she [finished] her work? | តើនាងធ្វើការងាររួចហើយឬនៅ?
## First Conditional
+ If + S + V1, S + will + V1 | [If it rains], we [will stay] home. | ប្រសិនបើភ្លៀង យើងនឹងនៅផ្ទះ។
- If + S + don't + V1, S + won't + V1 | [If you don't hurry], you [won't catch] the bus. | ប្រសិនបើអ្នកមិនប្រញាប់ អ្នកនឹងមិនទាន់ឡានក្រុងទេ។
? What will + S + V1 + if…? | [What will] you [do] [if it rains]? | តើអ្នកនឹងធ្វើអ្វី ប្រសិនបើភ្លៀង?
## used to
+ S + used to + V1 | He [used to smoke]. | គាត់ធ្លាប់ជក់បារី។
- S + didn't use to + V1 | He [didn't use to smoke]. | គាត់មិនធ្លាប់ជក់បារីទេ។
? Did + S + use to + V1? | [Did] he [use to smoke]? | តើគាត់ធ្លាប់ជក់បារីទេ?
## will (ការទស្សន៍ទាយ សន្យា ការសម្រេចភ្លាមៗ)
+ S + will + V1 | It [will be] sunny tomorrow. | ថ្ងៃស្អែកនឹងមានថ្ងៃក្ដៅ។
- S + won't + V1 | It [won't be] sunny tomorrow. | ថ្ងៃស្អែកនឹងមិនមានថ្ងៃទេ។
? Will + S + V1? | [Will] it [be] sunny tomorrow? | តើថ្ងៃស្អែកនឹងមានថ្ងៃទេ?
## may / might / could (ប្រហែល)
+ S + may / might + V1 | She [might come] later. | នាងប្រហែលជាមកពេលក្រោយ។
- S + may not / might not + V1 | She [might not come] later. | នាងប្រហែលជាមិនមកពេលក្រោយទេ។
? Do you think + S + will…? · Might + S + V1? | [Do you think] she [will come]? | តើអ្នកគិតថានាងនឹងមកទេ?
## Gerund (V-ing) vs Infinitive (to + V)
+ S + enjoy + V-ing · S + want + to V1 | I [enjoy swimming]. / I [want to swim]. | ខ្ញុំចូលចិត្តហែលទឹក។ / ខ្ញុំចង់ហែលទឹក។
- S + don't + enjoy + V-ing / want + to V1 | I [don't enjoy swimming]. / I [don't want to swim]. | ខ្ញុំមិនចូលចិត្តហែលទឹកទេ។ / ខ្ញុំមិនចង់ហែលទឹកទេ។
? Do + S + enjoy + V-ing / want + to V1? | [Do] you [enjoy swimming]? / [Do] you [want to swim]? | តើអ្នកចូលចិត្តហែលទឹកទេ? / តើអ្នកចង់ហែលទឹកទេ?
## Zero Conditional
+ If + S + V1, S + V1 | [If you mix] red and blue, you [get] purple. | បើលាយក្រហមនិងខៀវ អ្នកបានពណ៌ស្វាយ។
- If + S + don't + V1, S + don't + V1 | [If plants don't get] water, they [die]. | បើរុក្ខជាតិមិនបានទឹក វានឹងងាប់។
? What happens if + S + V1? | [What happens if] you [mix] red and blue? | តើមានអ្វីកើតឡើង ប្រសិនបើលាយក្រហមនិងខៀវ?
## Present Perfect vs Past Simple
+ S + have + V3 (ពេលមិនច្បាស់) · S + V2 + ពេលច្បាស់ | I [have been] to Japan. I [went] [in 2023]. | ខ្ញុំធ្លាប់ទៅជប៉ុន។ ខ្ញុំបានទៅនៅឆ្នាំ ២០២៣។
- S + haven't + V3 · S + didn't + V1 | I [haven't been] to Japan. I [didn't go] last year. | ខ្ញុំមិនធ្លាប់ទៅជប៉ុនទេ។ ខ្ញុំមិនបានទៅកាលពីឆ្នាំមុនទេ។
? Have you ever + V3? → When did you + V1? | [Have] you ever [been] to Japan? [When did] you [go]? | តើអ្នកធ្លាប់ទៅជប៉ុនទេ? តើអ្នកបានទៅពេលណា?
## Past Perfect
+ S + had + V3 | The film [had started] when we arrived. | ខ្សែភាពយន្តបានចាប់ផ្ដើមហើយ ពេលយើងមកដល់។
- S + hadn't + V3 | The film [hadn't started] when we arrived. | ខ្សែភាពយន្តមិនទាន់ចាប់ផ្ដើមទេ ពេលយើងមកដល់។
? Had + S + V3? | [Had] the film [started] when you arrived? | តើខ្សែភាពយន្តបានចាប់ផ្ដើមហើយឬនៅ ពេលអ្នកមកដល់?
## Question tags
+ ប្រយោគវិជ្ជមាន + tag អវិជ្ជមាន | She is a nurse, [isn't she]? | នាងជាគិលានុបដ្ឋាយិកា មែនទេ?
- ប្រយោគអវិជ្ជមាន + tag វិជ្ជមាន | She isn't a nurse, [is she]? | នាងមិនមែនជាគិលានុបដ្ឋាយិកាទេ មែនទេ?
? ប្រយោគ + auxiliary + pronoun? | You've met him, [haven't you]? | អ្នកធ្លាប់ជួបគាត់ហើយ មែនទេ?
## so / such
+ S + be + so + adj / such + a + adj + noun | It was [so hot]. / It was [such a hot] day. | ក្ដៅខ្លាំងណាស់។ / វាជាថ្ងៃដ៏ក្ដៅមួយ។
- S + be + not + so + adj… | It [wasn't so hot] yesterday. | ម្សិលមិញមិនក្ដៅខ្លាំងប៉ុណ្ណឹងទេ។
? Why is + S + so + adj? | [Why is] it [so hot] today? | ហេតុអ្វីថ្ងៃនេះក្ដៅខ្លាំងម្ល៉េះ?
## for / since / ago
+ S + have + V3 + for / since… | I have lived here [for five years]. | ខ្ញុំរស់នៅទីនេះអស់រយៈពេលប្រាំឆ្នាំហើយ។
- S + haven't + V3 + for / since… | I [haven't seen] him [since 2020]. | ខ្ញុំមិនបានជួបគាត់តាំងពីឆ្នាំ ២០២០ មកទេ។
? How long + have + S + V3? · When did… ago? | [How long have] you [lived] here? | តើអ្នករស់នៅទីនេះបានប៉ុន្មានឆ្នាំហើយ?
## Indirect questions
+ I know + wh- + S + V | I know [where she lives]. | ខ្ញុំដឹងថានាងរស់នៅឯណា។
- I don't know + wh- / if + S + V | I [don't know] [if she is coming]. | ខ្ញុំមិនដឹងថានាងមកឬអត់ទេ។
? Do you know / Can you tell me + wh- + S + V? | [Do you know] [where she lives]? | តើអ្នកដឹងថានាងរស់នៅឯណាទេ?
## both / either / neither
+ Both A and B + V (ពហុ) | [Both] Dara [and] Lina like tea. | ទាំងដារ៉ា និងលីណាចូលចិត្តតែ។
- Neither A nor B + V · S + don't + V + either | [Neither] Dara [nor] Lina likes tea. | ទាំងដារ៉ា និងលីណាមិនចូលចិត្តតែទេ។
? Do both / either of + noun + V1? | Does [either] of them like tea? | តើមាននរណាម្នាក់ក្នុងចំណោមពួកគេចូលចិត្តតែទេ?
## -ed / -ing adjectives (bored / boring)
+ S + be + -ed (អារម្មណ៍) / -ing (លក្ខណៈ) | I'm [interested]. The book is [interesting]. | ខ្ញុំចាប់អារម្មណ៍។ សៀវភៅនេះគួរឲ្យចាប់អារម្មណ៍។
- S + be + not + -ed / -ing | I'm [not interested]. The book [isn't interesting]. | ខ្ញុំមិនចាប់អារម្មណ៍ទេ។ សៀវភៅនេះមិនគួរឲ្យចាប់អារម្មណ៍ទេ។
? Be + S + -ed / -ing? | Are you [bored]? Is the class [boring]? | តើអ្នកធុញទេ? តើថ្នាក់គួរឲ្យធុញទេ?
## So do I / Neither do I
+ ប្រយោគវិជ្ជមាន → So + aux + S | I like tea. – [So do I]. | ខ្ញុំចូលចិត្តតែ។ – ខ្ញុំក៏ចូលចិត្តដែរ។
- ប្រយោគអវិជ្ជមាន → Neither + aux + S | I don't like tea. – [Neither do I]. | ខ្ញុំមិនចូលចិត្តតែទេ។ – ខ្ញុំក៏មិនចូលចិត្តដែរ។
? Do you? / Don't you? (ឆ្លើយបង្ហាញភាពភ្ញាក់ផ្អើល) | I like tea. – [Do you]? I don't. | ខ្ញុំចូលចិត្តតែ។ – មែនឬ? ខ្ញុំមិនចូលចិត្តទេ។
## when / while (Past Simple + Past Continuous)
+ S + was + V-ing + when + S + V2 | I [was eating] [when] he [called]. | ខ្ញុំកំពុងញ៉ាំ ពេលគាត់ទូរស័ព្ទមក។
- S + wasn't + V-ing + when + S + V2 | I [wasn't sleeping] [when] he [called]. | ខ្ញុំមិនកំពុងគេងទេ ពេលគាត់ទូរស័ព្ទមក។
? What were + S + doing + when + S + V2? | [What were] you [doing] [when] he [called]? | តើអ្នកកំពុងធ្វើអ្វី ពេលគាត់ទូរស័ព្ទមក?
## Verb + preposition (depend on, listen to…)
+ S + V + preposition + object | She [listens to] the radio. | នាងស្ដាប់វិទ្យុ។
- S + don't / doesn't + V1 + preposition… | She [doesn't listen to] the radio. | នាងមិនស្ដាប់វិទ្យុទេ។
? What / Who + do / does + S + V1 + preposition? | [What] does she [listen to]? | តើនាងស្ដាប់អ្វី?
## Adjective + preposition (good at, afraid of…)
+ S + be + adj + preposition… | He is [good at] drawing. | គាត់ពូកែគូររូប។
- S + be + not + adj + preposition… | He [isn't good at] drawing. | គាត់មិនពូកែគូររូបទេ។
? What + be + S + adj + preposition? | [What are] you [good at]? | តើអ្នកពូកែខាងអ្វី?
## Phrasal verbs: separable & inseparable
+ S + V + it + particle / V + particle + noun | I [turned it off]. | ខ្ញុំបានបិទវា។
- S + didn't + V1 + it + particle | I [didn't turn it off]. | ខ្ញុំមិនបានបិទវាទេ។
? Did + S + V1 + it + particle? | [Did] you [turn it off]? | តើអ្នកបានបិទវាហើយឬនៅ?
## Answering negative questions (Yes / No)
+ ការពិតវិជ្ជមាន → Yes, S + aux | Didn't you eat? – [Yes, I did]. (បានញ៉ាំ) | អ្នកមិនបានញ៉ាំទេឬ? – ទេ ខ្ញុំបានញ៉ាំហើយ។
- ការពិតអវិជ្ជមាន → No, S + aux + not | Didn't you eat? – [No, I didn't]. (មិនបានញ៉ាំ) | អ្នកមិនបានញ៉ាំទេឬ? – បាទ ខ្ញុំមិនបានញ៉ាំទេ។
? Aux + n't + S + V1? | [Didn't you] eat? | អ្នកមិនបានញ៉ាំទេឬ?
## Passive Voice
+ S + am / is / are / was + V3 | The room [is cleaned] every day. | បន្ទប់ត្រូវបានសម្អាតរៀងរាល់ថ្ងៃ។
- S + isn't / wasn't + V3 | The room [isn't cleaned] every day. | បន្ទប់មិនត្រូវបានសម្អាតរៀងរាល់ថ្ងៃទេ។
? Is / Was + S + V3? | [Is] the room [cleaned] every day? | តើបន្ទប់ត្រូវបានសម្អាតរៀងរាល់ថ្ងៃទេ?
## Second Conditional
+ If + S + V2, S + would + V1 | [If I had] time, I [would help] you. | ប្រសិនបើខ្ញុំមានពេល ខ្ញុំនឹងជួយអ្នក។
- If + S + didn't + V1, S + wouldn't + V1 | [If I didn't have] a job, I [wouldn't have] money. | ប្រសិនបើខ្ញុំគ្មានការងារ ខ្ញុំនឹងគ្មានលុយទេ។
? What would + S + V1 + if + S + V2? | [What would] you [do] [if you were] rich? | តើអ្នកនឹងធ្វើអ្វី ប្រសិនបើអ្នកជាអ្នកមាន?
## Reported Speech
+ S + said (that) + S + V (ថយ tense) | She said she [was] tired. | នាងបាននិយាយថានាងហត់។
- S + said (that) + S + wasn't / didn't… | She said she [wasn't] tired. | នាងបាននិយាយថានាងមិនហត់ទេ។
? S + asked + if / wh- + S + V | She asked [if I was] tired. | នាងបានសួរថាតើខ្ញុំហត់ទេ។
## Present Perfect Continuous
+ S + have / has + been + V-ing | I [have been waiting] for an hour. | ខ្ញុំបានរង់ចាំអស់មួយម៉ោងហើយ។
- S + haven't / hasn't + been + V-ing | I [haven't been waiting] long. | ខ្ញុំមិនបានរង់ចាំយូរទេ។
? How long + have / has + S + been + V-ing? | [How long have] you [been waiting]? | តើអ្នកបានរង់ចាំយូរប៉ុណ្ណាហើយ?
## Modals of deduction (must / can't / might have)
+ S + must + be / must have + V3 (ប្រាកដ) | He [must be] at work. | គាត់ប្រាកដជានៅកន្លែងធ្វើការ។
- S + can't + be / can't have + V3 (មិនអាចទេ) | He [can't be] at work. It's Sunday. | គាត់មិនអាចនៅកន្លែងធ្វើការទេ។ ថ្ងៃនេះថ្ងៃអាទិត្យ។
? Where could + S + be? · Could + S + have + V3? | [Where could] he [be]? | តើគាត់អាចនៅឯណា?
## wish / If only
+ S + wish + S + V2 (ឥឡូវ) / had + V3 (អតីតកាល) | I [wish I had] a car. | ខ្ញុំប្រាថ្នាថាខ្ញុំមានឡាន។
- S + wish + S + didn't / hadn't + V | I [wish I hadn't said] that. | ខ្ញុំប្រាថ្នាថាខ្ញុំមិនបាននិយាយបែបនោះ។
? Do you ever wish + S + V2? | [Do you] ever [wish you were] taller? | តើអ្នកធ្លាប់ប្រាថ្នាថាខ្ពស់ជាងនេះទេ?
## Causative: have / get something done
+ S + have / get + object + V3 | I [had my phone repaired]. | ខ្ញុំបានឲ្យគេជួសជុលទូរស័ព្ទរបស់ខ្ញុំ។
- S + didn't have + object + V3 | I [didn't have my phone repaired]. | ខ្ញុំមិនបានឲ្យគេជួសជុលទូរស័ព្ទទេ។
? Where + did + S + have + object + V3? | [Where did] you [have your phone repaired]? | តើអ្នកបានឲ្យគេជួសជុលទូរស័ព្ទនៅឯណា?
## Future Continuous
+ S + will be + V-ing | At 8, I [will be studying]. | នៅម៉ោង ៨ ខ្ញុំនឹងកំពុងរៀន។
- S + won't be + V-ing | At 8, I [won't be studying]. | នៅម៉ោង ៨ ខ្ញុំនឹងមិនកំពុងរៀនទេ។
? Will + S + be + V-ing? | [Will] you [be studying] at 8? | តើនៅម៉ោង ៨ អ្នកនឹងកំពុងរៀនទេ?
## Future Perfect
+ S + will have + V3 | By June, I [will have finished]. | ត្រឹមខែមិថុនា ខ្ញុំនឹងបានបញ្ចប់រួចហើយ។
- S + won't have + V3 | By June, I [won't have finished]. | ត្រឹមខែមិថុនា ខ្ញុំនឹងមិនទាន់បញ្ចប់ទេ។
? Will + S + have + V3? | [Will] you [have finished] by June? | តើត្រឹមខែមិថុនា អ្នកនឹងបានបញ្ចប់ទេ?
## Contrast: although / despite / however
+ Although + clause, + clause | [Although] it was late, she kept working. | ទោះបីយប់ជ្រៅក៏ដោយ នាងនៅតែបន្តធ្វើការ។
- Despite + noun / V-ing, + negative clause | [Despite] studying, he [didn't pass]. | ទោះបីបានរៀនក៏ដោយ គាត់មិនបានប្រឡងជាប់ទេ។
? Why did + S + V1, although…? | [Why did] she keep working [although] it was late? | ហេតុអ្វីនាងនៅតែធ្វើការ ទោះបីយប់ជ្រៅក៏ដោយ?
## make / let / allow
+ S + make / let + object + V1 | My boss [lets me leave] early. | ចៅហ្វាយខ្ញុំអនុញ្ញាតឲ្យខ្ញុំចេញមុន។
- S + don't / doesn't + let + object + V1 | My boss [doesn't let me leave] early. | ចៅហ្វាយខ្ញុំមិនអនុញ្ញាតឲ្យខ្ញុំចេញមុនទេ។
? Do / Does + S + let + object + V1? | [Does] your boss [let you leave] early? | តើចៅហ្វាយរបស់អ្នកអនុញ្ញាតឲ្យអ្នកចេញមុនទេ?
## Reported questions
+ S + asked + wh- + S + V | He asked [where I worked]. | គាត់បានសួរថាខ្ញុំធ្វើការនៅឯណា។
- S + didn't ask + wh- / if… | He [didn't ask] [where I worked]. | គាត់មិនបានសួរថាខ្ញុំធ្វើការនៅឯណាទេ។
? What did + S + ask (you)? | [What did] he [ask] you? | តើគាត់បានសួរអ្នកអំពីអ្វី?
## Passive with modals
+ S + modal + be + V3 | The work [must be done] today. | ការងារត្រូវតែធ្វើថ្ងៃនេះ។
- S + modal + not + be + V3 | The work [mustn't be done] today. / [needn't be done] | ការងារមិនត្រូវធ្វើថ្ងៃនេះទេ។ / មិនចាំបាច់ធ្វើថ្ងៃនេះទេ។
? Modal + S + be + V3? | [Can] the work [be done] today? | តើការងារអាចធ្វើរួចថ្ងៃនេះបានទេ?
## Articles: a / an / the / no article
+ S + V + a / the + noun | I saw [a] film. [The] film was good. | ខ្ញុំបានមើលខ្សែភាពយន្តមួយ។ ខ្សែភាពយន្តនោះល្អ។
- S + didn't + V1 + the / a + noun | I [didn't see] [the] film. | ខ្ញុំមិនបានមើលខ្សែភាពយន្តនោះទេ។
? Did + S + V1 + the / a + noun? | Did you see [the] film? | តើអ្នកបានមើលខ្សែភាពយន្តនោះទេ?
## be used to / get used to
+ S + be used to + V-ing / noun | I'm [used to living] alone. | ខ្ញុំទម្លាប់រស់នៅម្នាក់ឯងហើយ។
- S + be + not + used to + V-ing | I'm [not used to living] alone. | ខ្ញុំមិនទាន់ទម្លាប់រស់នៅម្នាក់ឯងទេ។
? Be + S + used to + V-ing? | [Are] you [used to living] alone? | តើអ្នកទម្លាប់រស់នៅម្នាក់ឯងហើយឬនៅ?
## Reporting verbs: advise, suggest, deny…
+ S + advised + object + to V1 | She [advised me to rest]. | នាងបានណែនាំឲ្យខ្ញុំសម្រាក។
- S + advised + object + not to V1 | She [advised me not to go]. | នាងបានណែនាំខ្ញុំកុំឲ្យទៅ។
? What did + S + advise / suggest? | [What did] she [suggest]? | តើនាងបានស្នើអ្វី?
## The more…, the more… (double comparatives)
+ The + comparative…, the + comparative… | [The more] you read, [the more] you learn. | អ្នកកាន់តែអានច្រើន អ្នកកាន់តែរៀនបានច្រើន។
- The + less…, the + less… / the + fewer… | [The less] you sleep, [the less] you focus. | អ្នកកាន់តែគេងតិច អ្នកកាន់តែផ្ដោតអារម្មណ៍មិនបាន។
? Is it true that the + comparative…? | Is it true that [the more] you pay, [the better] it is? | តើពិតទេថា កាន់តែបង់ថ្លៃ កាន់តែល្អ?
## be about to / be due to / be on the point of
+ S + be + about to / due to + V1 | The bus [is about to leave]. | ឡានក្រុងជិតចេញហើយ។
- S + be + not + about to / due to + V1 | The bus [isn't due to leave] until 9. | ឡានក្រុងមិនគ្រោងចេញរហូតដល់ម៉ោង ៩ ទេ។
? When + be + S + due to + V1? | [When is] the bus [due to leave]? | តើឡានក្រុងគ្រោងចេញនៅពេលណា?
## Past Perfect Continuous
+ S + had been + V-ing | She [had been studying] all day. | នាងបានរៀនពេញមួយថ្ងៃ។
- S + hadn't been + V-ing | She [hadn't been studying] long. | នាងមិនបានរៀនយូរទេ។
? How long + had + S + been + V-ing? | [How long had] she [been studying]? | តើនាងបានរៀនយូរប៉ុណ្ណាហើយ (មុនពេលនោះ)?
## each / every / all / none
+ Every / Each + noun + V-s · All + nouns + V | [Every] student [has] a book. | សិស្សគ្រប់រូបមានសៀវភៅ។
- None of + nouns + V · Not every… | [None of] the students [has] a book. | គ្មានសិស្សណាម្នាក់មានសៀវភៅទេ។
? Does every / each + noun + V1? · Do all…? | [Does every] student [have] a book? | តើសិស្សគ្រប់រូបមានសៀវភៅទេ?
## Third Conditional
+ If + S + had + V3, S + would have + V3 | [If I had known], I [would have come]. | ប្រសិនបើខ្ញុំបានដឹង ខ្ញុំនឹងបានមក។
- If + S + hadn't + V3, S + wouldn't have + V3 | [If it hadn't rained], we [wouldn't have stayed] home. | ប្រសិនបើមិនភ្លៀង យើងនឹងមិននៅផ្ទះទេ។
? What would + S + have + V3 + if…? | [What would] you [have done] [if you had lost]? | តើអ្នកនឹងបានធ្វើអ្វី ប្រសិនបើអ្នកចាញ់?
## Relative Clauses
+ noun + who / which / that + V | The man [who helped me] is a doctor. | បុរសដែលបានជួយខ្ញុំជាវេជ្ជបណ្ឌិត។
- noun + who / which + didn't / isn't… | The man [who didn't help] me left early. | បុរសដែលមិនបានជួយខ្ញុំបានចាកចេញមុន។
? Is that the + noun + who / which…? | Is that the man [who helped you]? | តើនោះជាបុរសដែលបានជួយអ្នកទេ?
## Mixed Conditionals
+ If + had + V3, S + would + V1 (now) | [If I had studied] IT, I [would be] a programmer now. | ប្រសិនបើខ្ញុំបានរៀន IT ឥឡូវខ្ញុំនឹងជាអ្នកសរសេរកម្មវិធី។
- If + hadn't + V3, S + wouldn't + V1 (now) | [If I hadn't met] her, I [wouldn't be] so happy now. | ប្រសិនបើខ្ញុំមិនបានជួបនាង ឥឡូវខ្ញុំនឹងមិនសប្បាយចិត្តដល់ម្ល៉េះទេ។
? Where would + S + be now + if + had + V3? | [Where would] you [be] now [if you hadn't moved] here? | តើឥឡូវអ្នកនឹងនៅឯណា ប្រសិនបើអ្នកមិនបានរើមកទីនេះ?
## Participle clauses
+ V-ing / Having + V3…, S + V | [Having finished] the test, she left. | ក្រោយពីប្រឡងរួច នាងបានចាកចេញ។
- Not + V-ing / Not having + V3…, S + V | [Not having finished] the test, she stayed. | ដោយមិនទាន់ប្រឡងរួច នាងបាននៅបន្ត។
? What did + S + do + after + V-ing? | [What did] she [do] [after finishing] the test? | តើនាងបានធ្វើអ្វីក្រោយពីប្រឡងរួច?
## Cleft sentences: It is… that / What… is
+ It was + X + that / who… | [It was Dara who] called. | គឺដារ៉ាទេដែលបានទូរស័ព្ទមក។
- It wasn't + X + that / who… | [It wasn't Dara who] called. | មិនមែនដារ៉ាទេដែលបានទូរស័ព្ទមក។
? Was it + X + who / that…? · Who was it that…? | [Was it Dara who] called? | តើគឺដារ៉ាទេដែលបានទូរស័ព្ទមក?
## Future in the past: was going to / would
+ S + was going to + V1 | I [was going to call] you. | ខ្ញុំគ្រោងនឹងទូរស័ព្ទទៅអ្នក។
- S + wasn't going to + V1 | I [wasn't going to tell] anyone. | ខ្ញុំមិនបានគ្រោងនឹងប្រាប់នរណាទេ។
? Were + S + going to + V1? | [Were] you [going to call] me? | តើអ្នកគ្រោងនឹងទូរស័ព្ទមកខ្ញុំទេ?
## Impersonal passive: It is said that…
+ It is said / believed + that… · S + is said + to V1 | [It is said that] he is a genius. | គេនិយាយថាគាត់ជាមនុស្សពូកែអស្ចារ្យ។
- It is not believed + that… · S + is not thought + to V1 | He [is not thought to be] guilty. | គេមិនគិតថាគាត់មានទោសទេ។
? Is it true that…? · Is + S + said + to V1? | [Is] he [said to be] a genius? | តើគេនិយាយថាគាត់ពូកែអស្ចារ្យមែនទេ?
## would rather / had better
+ S + would rather / had better + V1 | You['d better leave] now. | អ្នកគួរតែចាកចេញឥឡូវនេះ។
- S + would rather not / had better not + V1 | You['d better not be] late. | អ្នកមិនគួរមកយឺតទេ។
? Would + S + rather + V1 + or + V1? | [Would] you [rather stay] or [go]? | តើអ្នកចង់នៅ ឬចង់ទៅ?
## unless / provided that / as long as
+ S + will + V1 + as long as / provided + S + V1 | I'll come [as long as] you drive. | ខ្ញុំនឹងមក ឲ្យតែអ្នកជាអ្នកបើកបរ។
- S + won't + V1 + unless + S + V1 | I [won't come] [unless] you drive. | ខ្ញុំនឹងមិនមកទេ លុះត្រាតែអ្នកជាអ្នកបើកបរ។
? Will + S + V1 + if / as long as…? | [Will] you [come] [as long as] I drive? | តើអ្នកនឹងមកទេ បើខ្ញុំជាអ្នកបើកបរ?
## Emphatic do / does / did
+ S + do / does / did + V1 (សង្កត់ន័យ) | I [did lock] the door! | ខ្ញុំពិតជាបានចាក់សោទ្វារហើយ!
- S + did not + V1 (សង្កត់ not) | I did [NOT] lock the door. | ខ្ញុំពិតជាមិនបានចាក់សោទ្វារទេ។
? Did + S + really + V1? | [Did] you [really lock] the door? | តើអ្នកពិតជាបានចាក់សោទ្វារមែនទេ?
## whatever / whoever / wherever / however
+ Whatever / Wherever + S + V, S + V | [Wherever] you go, I'll follow. | ទោះអ្នកទៅណាក៏ដោយ ខ្ញុំនឹងទៅតាម។
- Whatever + S + V, + negative clause | [Whatever] happens, [don't panic]. | ទោះមានរឿងអ្វីកើតឡើងក៏ដោយ កុំភ័យស្លន់ស្លោ។
? Wh-ever…? (ភ្ញាក់ផ្អើល = Wh- on earth) | [Whatever] did you [do] to your hair? | តើអ្នកបានធ្វើអ្វីទៅលើសក់របស់អ្នក?
## Passive gerunds & infinitives
+ S + V + being + V3 / to be + V3 | She hopes [to be invited]. | នាងសង្ឃឹមថានឹងត្រូវបានអញ្ជើញ។
- S + V + not being + V3 / not to be + V3 | She hates [not being invited]. | នាងស្អប់ការមិនត្រូវបានគេអញ្ជើញ។
? Do / Does + S + V1 + being / to be + V3? | [Do] you [mind being asked] questions? | តើអ្នកខ្វល់ទេពេលត្រូវគេសួរសំណួរ?
## be bound to / be likely to / be sure to
+ S + be + bound / likely + to V1 | He [is likely to win]. | គាត់ទំនងជាឈ្នះ។
- S + be + unlikely to / not likely to + V1 | He [is unlikely to win]. | គាត់មិនសូវទំនងជាឈ្នះទេ។
? Be + S + likely + to V1? | [Is] he [likely to win]? | តើគាត់ទំនងជាឈ្នះទេ?
## Discourse markers: furthermore, nevertheless…
+ Sentence. Furthermore / Moreover, + sentence. | It's cheap. [Furthermore], it's fast. | វាថោក។ លើសពីនេះ វាលឿន។
- Sentence. Nevertheless, + sentence (ផ្ទុយ). | It's not cheap. [Nevertheless], it's worth it. | វាមិនថោកទេ។ ទោះជាយ៉ាងណា វាសមនឹងតម្លៃ។
? Sentence; therefore…? / What is the result? | It's expensive; [therefore], will people buy it? | វាថ្លៃ ដូច្នេះតើមនុស្សនឹងទិញវាទេ?
## Hedging: It seems / tend to / appear to
+ S + seem / tend / appear + to V1 | She [seems to be] happy. | នាងហាក់ដូចជាសប្បាយចិត្ត។
- S + don't / doesn't + seem + to V1 · S + seem + not to V1 | She [doesn't seem to be] happy. | នាងហាក់ដូចជាមិនសប្បាយចិត្តទេ។
? Do / Does + S + seem + to V1? | [Does] she [seem to be] happy? | តើនាងហាក់ដូចជាសប្បាយចិត្តទេ?
## Purpose: so that / in order to / so as to
+ S + V + in order to / so as to + V1 | I left early [in order to catch] the train. | ខ្ញុំចេញមុនដើម្បីឲ្យទាន់រថភ្លើង។
- S + V + so as not to / in order not to + V1 | I left early [so as not to miss] the train. | ខ្ញុំចេញមុនដើម្បីកុំឲ្យខករថភ្លើង។
? Why did + S + V1? – (In order) to… | [Why did] you [leave] early? – [To catch] the train. | ហេតុអ្វីអ្នកចេញមុន? – ដើម្បីឲ្យទាន់រថភ្លើង។
## Inversion for Emphasis
+ (ធម្មតា) S + have never + V3 | I [have never seen] such a view. | ខ្ញុំមិនដែលឃើញទេសភាពបែបនេះទេ។
- Never / Seldom / Rarely + aux + S + V3 | [Never have I seen] such a view. | មិនដែលសោះ ដែលខ្ញុំបានឃើញទេសភាពបែបនេះ។
? Have you ever + V3…? | [Have] you ever [seen] such a view? | តើអ្នកធ្លាប់ឃើញទេសភាពបែបនេះទេ?
## The Subjunctive
+ suggest / insist + that + S + V1 (គ្មាន s) | I suggest that he [study] more. | ខ្ញុំស្នើឲ្យគាត់រៀនបន្ថែម។
- suggest + that + S + not + V1 | I suggest that he [not go] alone. | ខ្ញុំស្នើឲ្យគាត់កុំទៅម្នាក់ឯង។
? Do you suggest that + S + V1? | [Do you suggest that] he [study] more? | តើអ្នកស្នើឲ្យគាត់រៀនបន្ថែមទេ?
## Conditionals without if (Should / Were / Had)
+ Should / Were / Had + S…, S + V | [Had I known], I would have come. | ប្រសិនបើខ្ញុំបានដឹង ខ្ញុំនឹងបានមក។
- Had + S + not + V3 / Were + S + not…, S + V | [Had I not known], I wouldn't have come. | ប្រសិនបើខ្ញុំមិនបានដឹងទេ ខ្ញុំនឹងមិនបានមកទេ។
? (សំណួរធម្មតា) Would + S + have + V3 + if…? | [Would] you [have come] [if you had known]? | តើអ្នកនឹងបានមកទេ ប្រសិនបើអ្នកបានដឹង?
## Past modals: should have / needn't have / could have
+ S + should have / could have + V3 | You [should have called] me. | អ្នកគួរតែបានទូរស័ព្ទមកខ្ញុំ។
- S + shouldn't have / needn't have + V3 | You [shouldn't have called] so late. | អ្នកមិនគួរទូរស័ព្ទមកយឺតដល់ម្ល៉េះទេ។
? Should + S + have + V3? | [Should] I [have called] you? | តើខ្ញុំគួរតែបានទូរស័ព្ទមកអ្នកទេ?
## Fronting for emphasis
+ Object / Adjective + S + V | [This book] I really love. | សៀវភៅនេះ ខ្ញុំពិតជាស្រឡាញ់ណាស់។
- Object + S + aux + not + V | [That film] I [don't] want to see again. | ខ្សែភាពយន្តនោះ ខ្ញុំមិនចង់មើលម្ដងទៀតទេ។
? (សំណួរធម្មតា) Do you love this book? | [Do] you really [love] this book? | តើអ្នកពិតជាស្រឡាញ់សៀវភៅនេះមែនទេ?
## Nominalisation (formal style)
+ The + noun + of… + V | [The development] of the city was rapid. | ការអភិវឌ្ឍទីក្រុងមានល្បឿនលឿន។
- The + lack / absence / failure + of… | [The lack] of water [caused] problems. | ការខ្វះទឹកបានបង្កបញ្ហា។
? What caused the + noun + of…? | [What caused] [the increase] in prices? | តើអ្វីបានបង្កឲ្យមានការកើនឡើងនៃតម្លៃ?
## Ellipsis & substitution (so, not, do, one)
+ I think / hope + so | Will she come? – I [think so]. | តើនាងនឹងមកទេ? – ខ្ញុំគិតថាមក។
- I hope / I'm afraid + not · I don't think so | Will it rain? – I [hope not]. | តើមេឃនឹងភ្លៀងទេ? – ខ្ញុំសង្ឃឹមថាមិនភ្លៀងទេ។
? Do you think so? · Which one? | I like the red [one]. – [Which one]? | ខ្ញុំចូលចិត្តមួយពណ៌ក្រហម។ – មួយណា?
## It's (high) time + Past Simple
+ It's time + S + V2 | [It's time we went] home. | ដល់ពេលយើងត្រូវទៅផ្ទះហើយ។
- It's time + S + stopped / didn't… | [It's time you stopped] complaining. | ដល់ពេលអ្នកគួរឈប់ត្អូញត្អែរហើយ។
? Isn't it time + S + V2? | [Isn't it time we went] home? | តើមិនទាន់ដល់ពេលយើងទៅផ្ទះទេឬ?
## Inversion with Only / Little / Not until
+ (ធម្មតា) S + only + V + when… | I [only understood] when she explained. | ខ្ញុំយល់តែពេលនាងពន្យល់ប៉ុណ្ណោះ។
- Little / Not until… + aux + S + V1 | [Not until] she explained [did I understand]. | លុះតែនាងពន្យល់ ទើបខ្ញុំយល់។
? When did + S + V1? | [When did] you [understand]? | តើអ្នកយល់នៅពេលណា?
## as if / as though (unreal)
+ S + V + as if + S + V2 / were | He acts [as if he were] the boss. | គាត់ធ្វើដូចជាគាត់ជាចៅហ្វាយ។
- S + V + as if + S + didn't / hadn't… | He acts [as if he didn't care]. | គាត់ធ្វើដូចជាគាត់មិនខ្វល់។
? Why does + S + V1 + as if…? | [Why does] he act [as if he were] the boss? | ហេតុអ្វីគាត់ធ្វើដូចជាគាត់ជាចៅហ្វាយ?
## will / would for habits & typical behaviour
+ S + will / would + V1 (ទម្លាប់) | He [will sit] there for hours. | គាត់តែងអង្គុយនៅទីនោះរាប់ម៉ោង។
- S + won't / wouldn't + V1 (មិនព្រម) | The door [won't open]. | ទ្វារមិនព្រមបើក។
? Will + S + always + V1? (រំខាន) | [Will] he [always be] late? | តើគាត់ចេះតែមកយឺតជានិច្ចឬ?
## Pseudo-cleft: All… / The thing… / The reason why…
+ All / The thing + S + V + is… | [All I need is] rest. | អ្វីដែលខ្ញុំត្រូវការគឺការសម្រាក។
- The thing + S + don't + V1 + is… | [The thing I don't understand is] why he left. | រឿងដែលខ្ញុំមិនយល់គឺហេតុអ្វីគាត់ចាកចេញ។
? What is the reason why…? | [What is the reason why] he left? | តើមូលហេតុអ្វីដែលគាត់ចាកចេញ?
## Formal relatives: in which / whereby / whose
+ noun + preposition + which / whom… | This is the room [in which] we study. | នេះជាបន្ទប់ដែលយើងរៀន។
- noun + preposition + which + S + don't… | This is the room [in which] we [don't] eat. | នេះជាបន្ទប់ដែលយើងមិនញ៉ាំអាហារ។
? Preposition + which / whom + aux + S + V1? | [In which] room [do] you study? | តើអ្នករៀននៅក្នុងបន្ទប់មួយណា?
## Fixed subjunctive expressions
+ Come what may / If need be… + clause | [Come what may], I'll keep going. | ទោះមានរឿងអ្វីកើតឡើងក៏ដោយ ខ្ញុំនឹងបន្តទៅមុខ។
- Be that as it may, + negative clause | [Be that as it may], we [can't] change it. | ទោះជាយ៉ាងនោះក៏ដោយ យើងមិនអាចផ្លាស់ប្ដូរវាបានទេ។
? Will you…, come what may? | Will you stay with me, [come what may]? | តើអ្នកនឹងនៅជាមួយខ្ញុំទេ ទោះមានរឿងអ្វីកើតឡើងក៏ដោយ?
`;
XC.grammarForms = {};
XC.grammarFormsRaw.trim().split(/^## /m).filter(Boolean).forEach(b => {
  const [title, ...rows] = b.trim().split("\n");
  XC.grammarForms[title.trim()] = rows.map(r => { const [st, ex, kh] = r.slice(2).split(" | "); return { sign: r[0], st, ex, kh }; });
});
