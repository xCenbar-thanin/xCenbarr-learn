/* xCenbar Learning — English data
   Verb format (one per line):  V1|V2|V3|Khmer meaning|Example sentence|Khmer translation of the example (optional)
   To add more verbs, just add new lines to the right level. */
window.XC = window.XC || {};

XC.verbLevels = [
  {id:1, name:"កម្រិត ១", range:"១–៥០០",      cefr:"A1–A2", use:"ជីវិតប្រចាំថ្ងៃ"},
  {id:2, name:"កម្រិត ២", range:"៥០១–១,០០០",  cefr:"A2–B1", use:"ការងារ និងសាលា"},
  {id:3, name:"កម្រិត ៣", range:"១,០០១–២,០០០",cefr:"B1–B2", use:"ព័ត៌មាន និងការសរសេរ"},
  {id:4, name:"កម្រិត ៤", range:"២,០០១–៣,០០០",cefr:"B2",    use:"IELTS / TOEFL"},
  {id:5, name:"កម្រិត ៥", range:"៣,០០១–៤,០០០",cefr:"C1",    use:"សាកលវិទ្យាល័យ"},
  {id:6, name:"កម្រិត ៦", range:"៤,០០១–៥,០០០",cefr:"C2",    use:"កម្រិតខ្ពស់បំផុត"},
  {id:7, name:"កម្រិត ៧ · Phrasal Verbs", range:"Phrasal",cefr:"A2–C1", use:"កិរិយាសព្ទឃ្លា (give up, look after…)"}
];

XC.verbsRaw = {
1:`be|was / were|been|ជា / នៅ|I am a student.|ខ្ញុំជាសិស្ស។
have|had|had|មាន|I have two brothers.|ខ្ញុំមានបងប្អូនប្រុសពីរនាក់។
do|did|done|ធ្វើ|I do my homework at night.|ខ្ញុំធ្វើកិច្ចការផ្ទះនៅពេលយប់។
say|said|said|និយាយ|She said hello to me.|នាងបាននិយាយសួស្ដីមកខ្ញុំ។
go|went|gone|ទៅ|We go to school by bike.|យើងជិះកង់ទៅសាលា។
get|got|got / gotten|ទទួលបាន|I got a letter today.|ថ្ងៃនេះខ្ញុំបានទទួលសំបុត្រមួយ។
make|made|made|ធ្វើ / បង្កើត|My mother made a cake.|ម្ដាយខ្ញុំបានធ្វើនំខេកមួយ។
know|knew|known|ដឹង / ស្គាល់|I know his name.|ខ្ញុំស្គាល់ឈ្មោះរបស់គាត់។
think|thought|thought|គិត|I think it will rain.|ខ្ញុំគិតថាមេឃនឹងភ្លៀង។
take|took|taken|យក|Take an umbrella with you.|យកឆ័ត្រទៅជាមួយផង។
see|saw|seen|ឃើញ|I saw a big dog.|ខ្ញុំបានឃើញឆ្កែធំមួយ។
come|came|come|មក|Come here, please.|សូមមកទីនេះ។
want|wanted|wanted|ចង់|I want some water.|ខ្ញុំចង់បានទឹកបន្តិច។
look|looked|looked|មើល|Look at the board.|មើលក្ដារខៀន។
use|used|used|ប្រើ|Can I use your phone?|តើខ្ញុំអាចប្រើទូរស័ព្ទរបស់អ្នកបានទេ?
find|found|found|រកឃើញ|I found my key.|ខ្ញុំបានរកឃើញសោរបស់ខ្ញុំ។
give|gave|given|ឲ្យ|Give me the book, please.|សូមឲ្យសៀវភៅមកខ្ញុំ។
tell|told|told|ប្រាប់|Tell me the truth.|ប្រាប់ការពិតមកខ្ញុំ។
work|worked|worked|ធ្វើការ|My father works in a bank.|ឪពុកខ្ញុំធ្វើការនៅធនាគារ។
call|called|called|ហៅ / ទូរស័ព្ទ|I will call you tonight.|ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកយប់នេះ។
try|tried|tried|ព្យាយាម|Try again.|ព្យាយាមម្ដងទៀត។
ask|asked|asked|សួរ|Can I ask a question?|តើខ្ញុំអាចសួរសំណួរមួយបានទេ?
need|needed|needed|ត្រូវការ|I need your help.|ខ្ញុំត្រូវការជំនួយពីអ្នក។
feel|felt|felt|មានអារម្មណ៍|I feel happy today.|ថ្ងៃនេះខ្ញុំមានអារម្មណ៍សប្បាយ។
become|became|become|ក្លាយជា|She became a doctor.|នាងបានក្លាយជាវេជ្ជបណ្ឌិត។
leave|left|left|ចាកចេញ|The bus leaves at seven.|ឡានក្រុងចេញដំណើរម៉ោងប្រាំពីរ។
put|put|put|ដាក់|Put your bag here.|ដាក់កាបូបរបស់អ្នកនៅទីនេះ។
mean|meant|meant|មានន័យថា|What does this word mean?|តើពាក្យនេះមានន័យថាអ្វី?
keep|kept|kept|រក្សាទុក|Keep the change.|ទុកលុយអាប់ចុះ។
let|let|let|អនុញ្ញាត / ឲ្យ|Let me help you.|ទុកឲ្យខ្ញុំជួយអ្នក។
begin|began|begun|ចាប់ផ្ដើម|The class begins at eight.|ថ្នាក់រៀនចាប់ផ្ដើមម៉ោងប្រាំបី។
seem|seemed|seemed|ហាក់ដូចជា|He seems tired.|គាត់មើលទៅហាក់ដូចជាហត់។
help|helped|helped|ជួយ|Can you help me?|តើអ្នកអាចជួយខ្ញុំបានទេ?
talk|talked|talked|និយាយគ្នា|We talked for an hour.|យើងបាននិយាយគ្នាអស់មួយម៉ោង។
turn|turned|turned|បត់ / បង្វិល|Turn right here.|បត់ស្ដាំនៅទីនេះ។
start|started|started|ចាប់ផ្ដើម|Let's start the lesson.|តោះចាប់ផ្ដើមមេរៀន។
show|showed|shown|បង្ហាញ|Show me your picture.|បង្ហាញរូបភាពរបស់អ្នកមកខ្ញុំមើល។
hear|heard|heard|ឮ|I heard a noise.|ខ្ញុំបានឮសំឡេងមួយ។
play|played|played|លេង|Children play football.|ក្មេងៗលេងបាល់ទាត់។
run|ran|run|រត់|He runs every morning.|គាត់រត់រៀងរាល់ព្រឹក។
move|moved|moved|ផ្លាស់ទី|We moved to a new house.|យើងបានផ្លាស់ទៅផ្ទះថ្មី។
like|liked|liked|ចូលចិត្ត|I like mango.|ខ្ញុំចូលចិត្តស្វាយ។
live|lived|lived|រស់នៅ|I live in Phnom Penh.|ខ្ញុំរស់នៅភ្នំពេញ។
believe|believed|believed|ជឿ|I believe you.|ខ្ញុំជឿអ្នក។
hold|held|held|កាន់|Hold my hand.|កាន់ដៃខ្ញុំ។
bring|brought|brought|យកមក|Bring your book tomorrow.|យកសៀវភៅរបស់អ្នកមកថ្ងៃស្អែក។
happen|happened|happened|កើតឡើង|What happened?|មានរឿងអ្វីកើតឡើង?
write|wrote|written|សរសេរ|Write your name here.|សរសេរឈ្មោះរបស់អ្នកនៅទីនេះ។
sit|sat|sat|អង្គុយ|Please sit down.|សូមអង្គុយចុះ។
stand|stood|stood|ឈរ|Stand up, please.|សូមក្រោកឈរ។
lose|lost|lost|បាត់ / ចាញ់|I lost my wallet.|ខ្ញុំបាត់កាបូបលុយ។
pay|paid|paid|បង់ប្រាក់|I paid ten dollars.|ខ្ញុំបានបង់ដប់ដុល្លារ។
meet|met|met|ជួប|Nice to meet you.|រីករាយដែលបានជួបអ្នក។
include|included|included|រួមបញ្ចូល|The price includes breakfast.|តម្លៃនេះរួមបញ្ចូលទាំងអាហារពេលព្រឹក។
continue|continued|continued|បន្ត|Please continue.|សូមបន្ត។
learn|learned|learned|រៀន|I learn English every day.|ខ្ញុំរៀនភាសាអង់គ្លេសរៀងរាល់ថ្ងៃ។
change|changed|changed|ផ្លាស់ប្ដូរ|I changed my clothes.|ខ្ញុំបានប្ដូរសម្លៀកបំពាក់។
lead|led|led|ដឹកនាំ|She leads the team.|នាងដឹកនាំក្រុម។
understand|understood|understood|យល់|Do you understand?|តើអ្នកយល់ទេ?
watch|watched|watched|មើល / ទស្សនា|We watched a movie.|យើងបានមើលភាពយន្ត។
follow|followed|followed|ធ្វើតាម / ដើរតាម|Follow me.|ដើរតាមខ្ញុំ។
stop|stopped|stopped|ឈប់|Stop the car.|ឈប់ឡាន។
create|created|created|បង្កើត|He created a website.|គាត់បានបង្កើតវេបសាយមួយ។
speak|spoke|spoken|និយាយ (ភាសា)|Do you speak English?|តើអ្នកនិយាយភាសាអង់គ្លេសបានទេ?
read|read|read|អាន|I read a book every week.|ខ្ញុំអានសៀវភៅមួយក្បាលរៀងរាល់សប្ដាហ៍។
spend|spent|spent|ចំណាយ|I spent all my money.|ខ្ញុំបានចាយលុយអស់។
grow|grew|grown|ដុះ / លូតលាស់|Rice grows in water.|ស្រូវដុះនៅក្នុងទឹក។
open|opened|opened|បើក|Open the door.|បើកទ្វារ។
walk|walked|walked|ដើរ|I walk to the market.|ខ្ញុំដើរទៅផ្សារ។
win|won|won|ឈ្នះ|Our team won.|ក្រុមរបស់យើងបានឈ្នះ។
offer|offered|offered|ផ្ដល់ជូន|He offered me tea.|គាត់បានជូនតែមកខ្ញុំ។
remember|remembered|remembered|ចងចាំ|I remember your face.|ខ្ញុំចាំមុខរបស់អ្នក។
love|loved|loved|ស្រឡាញ់|I love my family.|ខ្ញុំស្រឡាញ់គ្រួសាររបស់ខ្ញុំ។
consider|considered|considered|ពិចារណា|Please consider my idea.|សូមពិចារណាគំនិតរបស់ខ្ញុំ។
appear|appeared|appeared|លេចឡើង|A rainbow appeared.|ឥន្ទធនូមួយបានលេចឡើង។
buy|bought|bought|ទិញ|I bought a new phone.|ខ្ញុំបានទិញទូរស័ព្ទថ្មីមួយ។
wait|waited|waited|រង់ចាំ|Wait for me.|ចាំខ្ញុំផង។
serve|served|served|បម្រើ|They serve good food.|ពួកគេលក់ម្ហូបឆ្ងាញ់។
send|sent|sent|ផ្ញើ|Send me a message.|ផ្ញើសារមកខ្ញុំ។
expect|expected|expected|រំពឹង|I expect good news.|ខ្ញុំរំពឹងថានឹងបានដំណឹងល្អ។
build|built|built|សាងសង់|They built a school.|ពួកគេបានសាងសង់សាលារៀនមួយ។
stay|stayed|stayed|ស្នាក់នៅ|We stayed at a hotel.|យើងបានស្នាក់នៅសណ្ឋាគារ។
fall|fell|fallen|ធ្លាក់|Be careful, don't fall.|ប្រយ័ត្ន កុំដួល។
cut|cut|cut|កាត់|Cut the paper.|កាត់ក្រដាស។
reach|reached|reached|ទៅដល់|We reached the top.|យើងបានទៅដល់កំពូល។
eat|ate|eaten|ញ៉ាំ / ហូប|We eat rice every day.|យើងញ៉ាំបាយរៀងរាល់ថ្ងៃ។
drink|drank|drunk|ផឹក|Drink more water.|ផឹកទឹកឲ្យបានច្រើន។
sleep|slept|slept|គេង|I sleep at ten.|ខ្ញុំគេងម៉ោងដប់។
wake|woke|woken|ភ្ញាក់|I wake up at six.|ខ្ញុំភ្ញាក់ពីគេងម៉ោងប្រាំមួយ។
cook|cooked|cooked|ចម្អិន|She cooks fish soup.|នាងចម្អិនស៊ុបត្រី។
clean|cleaned|cleaned|សម្អាត|Clean your room.|សម្អាតបន្ទប់របស់អ្នក។
wash|washed|washed|លាង|Wash your hands.|លាងដៃរបស់អ្នក។
drive|drove|driven|បើកបរ|He drives a tuk-tuk.|គាត់បើកកង់បី (តុកតុក)។
ride|rode|ridden|ជិះ|I ride a motorbike.|ខ្ញុំជិះម៉ូតូ។
sing|sang|sung|ច្រៀង|She sings very well.|នាងច្រៀងពីរោះណាស់។
dance|danced|danced|រាំ|They danced at the wedding.|ពួកគេបានរាំនៅពិធីមង្គលការ។
swim|swam|swum|ហែលទឹក|I can swim.|ខ្ញុំចេះហែលទឹក។
fly|flew|flown|ហោះ|Birds fly in the sky.|សត្វស្លាបហោះនៅលើមេឃ។
sell|sold|sold|លក់|She sells vegetables.|នាងលក់បន្លែ។
teach|taught|taught|បង្រៀន|He teaches math.|គាត់បង្រៀនគណិតវិទ្យា។
study|studied|studied|សិក្សា|I study at night.|ខ្ញុំរៀននៅពេលយប់។
forget|forgot|forgotten|ភ្លេច|Don't forget your bag.|កុំភ្លេចកាបូបរបស់អ្នក។
choose|chose|chosen|ជ្រើសរើស|Choose one answer.|ជ្រើសរើសចម្លើយមួយ។
break|broke|broken|បំបែក / ធ្វើឲ្យខូច|I broke a glass.|ខ្ញុំបានបំបែកកែវមួយ។
catch|caught|caught|ចាប់|Catch the ball.|ចាប់បាល់។
draw|drew|drawn|គូរ|Draw a house.|គូរផ្ទះមួយ។
throw|threw|thrown|បោះ|Throw the ball to me.|បោះបាល់មកខ្ញុំ។
wear|wore|worn|ពាក់ / ស្លៀក|She wears a blue dress.|នាងស្លៀករ៉ូបពណ៌ខៀវ។
carry|carried|carried|យួរ / កាន់|Carry this box.|យួរប្រអប់នេះ។
close|closed|closed|បិទ|Close the window.|បិទបង្អួច។
finish|finished|finished|បញ្ចប់|I finished my work.|ខ្ញុំបានធ្វើការងាររួចហើយ។
visit|visited|visited|ទៅលេង|We visited Angkor Wat.|យើងបានទៅលេងអង្គរវត្ត។
travel|traveled|traveled|ធ្វើដំណើរ|I want to travel.|ខ្ញុំចង់ធ្វើដំណើរកម្សាន្ត។
answer|answered|answered|ឆ្លើយ|Answer the question.|ឆ្លើយសំណួរ។
listen|listened|listened|ស្ដាប់|Listen to the teacher.|ស្ដាប់គ្រូ។
smile|smiled|smiled|ញញឹម|She smiled at me.|នាងបានញញឹមដាក់ខ្ញុំ។
laugh|laughed|laughed|សើច|We laughed a lot.|យើងបានសើចយ៉ាងខ្លាំង។
cry|cried|cried|យំ|The baby is crying.|ទារកកំពុងយំ។
fight|fought|fought|វាយគ្នា / តស៊ូ|Don't fight.|កុំវាយគ្នា។
feed|fed|fed|ឲ្យចំណី|Feed the cat.|ឲ្យចំណីឆ្មា។
hide|hid|hidden|លាក់|Hide the gift.|លាក់កាដូ។
hit|hit|hit|វាយ / ប៉ះ|The ball hit the wall.|បាល់បានប៉ះជញ្ជាំង។
hurt|hurt|hurt|ឈឺ / ធ្វើឲ្យឈឺ|My leg hurts.|ជើងខ្ញុំឈឺ។
lend|lent|lent|ឲ្យខ្ចី|Can you lend me a pen?|តើអ្នកអាចឲ្យខ្ញុំខ្ចីប៊ិចមួយបានទេ?
borrow|borrowed|borrowed|ខ្ចី|May I borrow your book?|តើខ្ញុំអាចខ្ចីសៀវភៅរបស់អ្នកបានទេ?
shut|shut|shut|បិទ|Shut the door.|បិទទ្វារ។
steal|stole|stolen|លួច|Someone stole my bike.|មាននរណាម្នាក់បានលួចកង់ខ្ញុំ។
fix|fixed|fixed|ជួសជុល|He fixed my phone.|គាត់បានជួសជុលទូរស័ព្ទឲ្យខ្ញុំ។
save|saved|saved|សន្សំ / រក្សាទុក|Save your money.|សន្សំលុយរបស់អ្នក។
plan|planned|planned|គ្រោង|We planned a trip.|យើងបានគ្រោងដំណើរកម្សាន្តមួយ។
prepare|prepared|prepared|រៀបចំ|Prepare for the test.|ត្រៀមខ្លួនសម្រាប់ការប្រឡង។
practice|practiced|practiced|ហាត់|Practice every day.|ហាត់រៀងរាល់ថ្ងៃ។
agree|agreed|agreed|យល់ព្រម|I agree with you.|ខ្ញុំយល់ស្របជាមួយអ្នក។
arrive|arrived|arrived|មកដល់|The train arrived late.|រថភ្លើងបានមកដល់យឺត។
enjoy|enjoyed|enjoyed|រីករាយ|Enjoy your meal.|សូមពិសាឲ្យឆ្ងាញ់។
hope|hoped|hoped|សង្ឃឹម|I hope you are well.|ខ្ញុំសង្ឃឹមថាអ្នកសុខសប្បាយ។
miss|missed|missed|នឹក / ខកខាន|I miss my mother.|ខ្ញុំនឹកម្ដាយរបស់ខ្ញុំ។
worry|worried|worried|បារម្ភ|Don't worry.|កុំបារម្ភ។
dream|dreamed|dreamed|សុបិន|I dream of a big house.|ខ្ញុំសុបិនចង់មានផ្ទះធំមួយ។
rain|rained|rained|ភ្លៀង|It rained all day.|ភ្លៀងពេញមួយថ្ងៃ។
check|checked|checked|ពិនិត្យ|Check your answers.|ពិនិត្យចម្លើយរបស់អ្នក។
count|counted|counted|រាប់|Count to ten.|រាប់ដល់ដប់។
push|pushed|pushed|រុញ|Push the door.|រុញទ្វារ។
pull|pulled|pulled|ទាញ|Pull the rope.|ទាញខ្សែ។
shout|shouted|shouted|ស្រែក|Don't shout.|កុំស្រែក។
thank|thanked|thanked|អរគុណ|I thanked my teacher.|ខ្ញុំបានអរគុណគ្រូរបស់ខ្ញុំ។
invite|invited|invited|អញ្ជើញ|She invited me to her party.|នាងបានអញ្ជើញខ្ញុំទៅពិធីជប់លៀងរបស់នាង។
order|ordered|ordered|កុម្ម៉ង់|I ordered noodle soup.|ខ្ញុំបានកុម្ម៉ង់គុយទាវ។
repeat|repeated|repeated|និយាយម្ដងទៀត|Repeat after me.|និយាយតាមខ្ញុំ។
spell|spelled|spelled|ប្រកប|How do you spell your name?|តើអ្នកប្រកបឈ្មោះរបស់អ្នកយ៉ាងដូចម្ដេច?
type|typed|typed|វាយអក្សរ|Type your password.|វាយពាក្យសម្ងាត់របស់អ្នក។
add|added|added|បន្ថែម|Add some salt.|ដាក់អំបិលបន្តិច។
allow|allowed|allowed|អនុញ្ញាត|Phones are not allowed here.|មិនអនុញ្ញាតឲ្យប្រើទូរស័ព្ទនៅទីនេះទេ។
bake|baked|baked|ដុត (នំ)|She bakes bread.|នាងដុតនំប៉័ង។
bite|bit|bitten|ខាំ|The dog bit me.|ឆ្កែបានខាំខ្ញុំ។
blow|blew|blown|ផ្លុំ|Blow out the candles.|ផ្លុំទៀនឲ្យរលត់។
boil|boiled|boiled|ដាំឲ្យពុះ / ស្ងោរ|Boil the water first.|ដាំទឹកឲ្យពុះជាមុនសិន។
book|booked|booked|កក់|I booked a room.|ខ្ញុំបានកក់បន្ទប់មួយ។
brush|brushed|brushed|ដុស|Brush your teeth.|ដុសធ្មេញរបស់អ្នក។
burn|burned|burned|ឆេះ / ដុត|Don't burn the rice.|កុំឲ្យបាយឆេះ។
climb|climbed|climbed|ឡើង|We climbed the mountain.|យើងបានឡើងភ្នំ។
collect|collected|collected|ប្រមូល|He collects stamps.|គាត់ប្រមូលតែម។
copy|copied|copied|ចម្លង|Copy the words.|ចម្លងពាក្យទាំងនេះ។
cost|cost|cost|មានតម្លៃ|It costs two dollars.|វាតម្លៃពីរដុល្លារ។
cover|covered|covered|គ្រប|Cover the food.|គ្របម្ហូប។
cross|crossed|crossed|ឆ្លង|Cross the road carefully.|ឆ្លងផ្លូវដោយប្រុងប្រយ័ត្ន។
decide|decided|decided|សម្រេចចិត្ត|I decided to stay.|ខ្ញុំបានសម្រេចចិត្តនៅ។
deliver|delivered|delivered|ដឹកជញ្ជូន|They deliver food.|ពួកគេដឹកម្ហូបជូនដល់ផ្ទះ។
dig|dug|dug|ជីក|Dig a hole.|ជីករណ្ដៅមួយ។
drop|dropped|dropped|ទម្លាក់|I dropped my phone.|ខ្ញុំបានធ្វើទូរស័ព្ទធ្លាក់។
earn|earned|earned|រកបាន (ប្រាក់)|She earns good money.|នាងរកលុយបានច្រើន។
enter|entered|entered|ចូល|Enter the room.|ចូលបន្ទប់។
explain|explained|explained|ពន្យល់|Please explain again.|សូមពន្យល់ម្ដងទៀត។
fail|failed|failed|បរាជ័យ / ធ្លាក់|He failed the test.|គាត់បានធ្លាក់ការប្រឡង។
fill|filled|filled|បំពេញ|Fill the bottle.|ចាក់ទឹកឲ្យពេញដប។
fold|folded|folded|បត់|Fold your clothes.|បត់សម្លៀកបំពាក់របស់អ្នក។
forgive|forgave|forgiven|អភ័យទោស|Please forgive me.|សូមអភ័យទោសឲ្យខ្ញុំផង។
freeze|froze|frozen|កក|Water freezes at zero degrees.|ទឹកកកនៅសីតុណ្ហភាពសូន្យអង្សា។
greet|greeted|greeted|ស្វាគមន៍|She greeted the guests.|នាងបានស្វាគមន៍ភ្ញៀវ។
guess|guessed|guessed|ទាយ|Guess my age.|ទាយអាយុរបស់ខ្ញុំមើល។
hang|hung|hung|ព្យួរ|Hang your shirt here.|ព្យួរអាវរបស់អ្នកនៅទីនេះ។
hate|hated|hated|ស្អប់|I hate the rain.|ខ្ញុំស្អប់ភ្លៀង។
hurry|hurried|hurried|ប្រញាប់|Hurry up!|ប្រញាប់ឡើង!
improve|improved|improved|កែលម្អ|My English improved.|ភាសាអង់គ្លេសរបស់ខ្ញុំបានប្រសើរឡើង។
join|joined|joined|ចូលរួម|Join our club.|ចូលរួមក្លឹបរបស់យើង។
jump|jumped|jumped|លោត|The cat jumped.|ឆ្មាបានលោត។
kick|kicked|kicked|ទាត់|Kick the ball.|ទាត់បាល់។
knock|knocked|knocked|គោះ|Knock on the door.|គោះទ្វារ។
lay|laid|laid|ដាក់ / ពង|The hen laid an egg.|មាន់បានពងមួយ។
lie|lay|lain|ដេក|Lie down and rest.|ដេកចុះ ហើយសម្រាក។
lift|lifted|lifted|លើក|Lift the box.|លើកប្រអប់។
light|lit|lit|អុជ / បំភ្លឺ|Light the candle.|អុជទៀន។
lock|locked|locked|ចាក់សោ|Lock the door.|ចាក់សោទ្វារ។
mark|marked|marked|ដាក់ពិន្ទុ / សម្គាល់|The teacher marked our tests.|គ្រូបានដាក់ពិន្ទុលើវិញ្ញាសារបស់យើង។
marry|married|married|រៀបការ|They married last year.|ពួកគេបានរៀបការកាលពីឆ្នាំមុន។
mix|mixed|mixed|លាយ|Mix the flour and eggs.|លាយម្សៅជាមួយពង។
name|named|named|ដាក់ឈ្មោះ|They named the baby Dara.|ពួកគេបានដាក់ឈ្មោះទារកថា ដារ៉ា។
park|parked|parked|ចត|Park the car here.|ចតឡាននៅទីនេះ។
pass|passed|passed|ឆ្លងកាត់ / ប្រឡងជាប់|I passed the exam.|ខ្ញុំបានប្រឡងជាប់។
pick|picked|picked|រើស / បេះ|Pick a card.|រើសកាតមួយ។
plant|planted|planted|ដាំ|We planted a tree.|យើងបានដាំដើមឈើមួយ។
point|pointed|pointed|ចង្អុល|Don't point at people.|កុំចង្អុលមនុស្ស។
pour|poured|poured|ចាក់|Pour the tea.|ចាក់តែ។
pray|prayed|prayed|បន់ស្រន់|They pray at the pagoda.|ពួកគេបន់ស្រន់នៅវត្ត។
print|printed|printed|បោះពុម្ព|Print this page.|បោះពុម្ពទំព័រនេះ។
promise|promised|promised|សន្យា|I promise to come.|ខ្ញុំសន្យាថានឹងមក។
rest|rested|rested|សម្រាក|Rest for a while.|សម្រាកបន្តិចសិន។
return|returned|returned|ត្រឡប់ / ប្រគល់វិញ|Return the book on Monday.|សងសៀវភៅវិញនៅថ្ងៃច័ន្ទ។
ring|rang|rung|រោទ៍|The phone is ringing.|ទូរស័ព្ទកំពុងរោទ៍។
rise|rose|risen|ឡើង / រះ|The sun rises at six.|ព្រះអាទិត្យរះនៅម៉ោងប្រាំមួយ។
search|searched|searched|ស្វែងរក|Search on Google.|ស្វែងរកនៅលើ Google។
shake|shook|shaken|អង្រួន / ចាប់ដៃ|Shake hands.|ចាប់ដៃគ្នា។
share|shared|shared|ចែករំលែក|Share your food.|ចែករំលែកម្ហូបរបស់អ្នក។
shine|shone|shone|ភ្លឺ|The sun shines.|ព្រះអាទិត្យភ្លឺចែងចាំង។
shoot|shot|shot|បាញ់ / ថត|He shot a video.|គាត់បានថតវីដេអូមួយ។
shop|shopped|shopped|ដើរទិញឥវ៉ាន់|We shop on Sundays.|យើងទៅទិញឥវ៉ាន់នៅថ្ងៃអាទិត្យ។
sign|signed|signed|ចុះហត្ថលេខា|Sign here.|ចុះហត្ថលេខានៅទីនេះ។
sink|sank|sunk|លិច|The boat sank.|ទូកបានលិច។
smell|smelled|smelled|ធុំក្លិន|It smells good.|វាមានក្លិនឈ្ងុយ។
solve|solved|solved|ដោះស្រាយ|Solve the problem.|ដោះស្រាយបញ្ហា។
sound|sounded|sounded|ស្ដាប់ទៅ|That sounds good.|ស្ដាប់ទៅល្អណាស់។
spill|spilled|spilled|កំពប់|I spilled my coffee.|ខ្ញុំបានធ្វើកាហ្វេកំពប់។
stick|stuck|stuck|បិទ / ជាប់|Stick the paper here.|បិទក្រដាសនៅទីនេះ។
sting|stung|stung|ទិច|A bee stung me.|ឃ្មុំបានទិចខ្ញុំ។
sweep|swept|swept|បោស|Sweep the floor.|បោសឥដ្ឋ។
taste|tasted|tasted|ភ្លក់|Taste the soup.|ភ្លក់សម្ល។
tear|tore|torn|ហែក|Don't tear the paper.|កុំហែកក្រដាស។
touch|touched|touched|ប៉ះ|Don't touch it.|កុំប៉ះវា។
train|trained|trained|ហ្វឹកហាត់|He trains every day.|គាត់ហ្វឹកហាត់រៀងរាល់ថ្ងៃ។
trust|trusted|trusted|ទុកចិត្ត|I trust you.|ខ្ញុំទុកចិត្តអ្នក។
wave|waved|waved|គ្រវីដៃ|She waved goodbye.|នាងបានគ្រវីដៃលា។
weigh|weighed|weighed|ថ្លឹង|Weigh the rice.|ថ្លឹងអង្ករ។
whisper|whispered|whispered|ខ្សឹប|Don't whisper in class.|កុំខ្សឹបខ្សៀវក្នុងថ្នាក់។
wish|wished|wished|ប្រាថ្នា / ជូនពរ|I wish you luck.|ខ្ញុំសូមជូនពរឲ្យអ្នកមានសំណាង។
wonder|wondered|wondered|ឆ្ងល់|I wonder why.|ខ្ញុំឆ្ងល់ថាហេតុអ្វី។
wrap|wrapped|wrapped|រុំ|Wrap the gift.|រុំកាដូ។
bleed|bled|bled|ហូរឈាម|My finger is bleeding.|ម្រាមដៃខ្ញុំកំពុងហូរឈាម។
bend|bent|bent|ពត់ / ឱន|Bend your knees.|ពត់ជង្គង់របស់អ្នក។
bet|bet|bet|ភ្នាល់|I bet you can do it.|ខ្ញុំភ្នាល់ថាអ្នកអាចធ្វើបាន។
dive|dived|dived|មុជទឹក|He dived into the pool.|គាត់បានលោតមុជចូលអាងហែលទឹក។
fit|fit|fit|ត្រូវខ្នាត|These shoes fit me.|ស្បែកជើងនេះត្រូវនឹងជើងខ្ញុំ។
kneel|knelt|knelt|លុតជង្គង់|Kneel down.|លុតជង្គង់ចុះ។
quit|quit|quit|ឈប់ / បោះបង់|He quit his job.|គាត់បានឈប់ពីការងារ។
set|set|set|កំណត់ / ដាក់|Set the alarm.|កំណត់នាឡិការោទ៍។
slide|slid|slid|រអិល|Children slide down.|ក្មេងៗរអិលចុះ។
spin|spun|spun|វិល|The wheel spins.|កង់កំពុងវិល។
split|split|split|បំបែក / ចែក|Split the bill.|ចែកគ្នាបង់ថ្លៃ។
spread|spread|spread|លាប / រាលដាល|Spread butter on the bread.|លាបប៊ឺលើនំប៉័ង។
swing|swung|swung|យោល|Kids swing in the park.|ក្មេងៗលេងយោលនៅសួនច្បារ។
act|acted|acted|សម្ដែង / ធ្វើសកម្មភាព|She acts in a movie.|នាងសម្ដែងក្នុងភាពយន្ត។
admire|admired|admired|កោតសរសើរ|I admire my teacher.|ខ្ញុំកោតសរសើរគ្រូរបស់ខ្ញុំ។
admit|admitted|admitted|សារភាព / ទទួលស្គាល់|He admitted his mistake.|គាត់បានទទួលស្គាល់កំហុសរបស់គាត់។
annoy|annoyed|annoyed|រំខាន|The noise annoys me.|សំឡេងរំខាននោះធ្វើឲ្យខ្ញុំធុញ។
apologize|apologized|apologized|សុំទោស|I apologize for being late.|ខ្ញុំសុំទោសដែលមកយឺត។
appreciate|appreciated|appreciated|ដឹងគុណ / កោតសរសើរ|I appreciate your help.|ខ្ញុំដឹងគុណចំពោះជំនួយរបស់អ្នក។
attack|attacked|attacked|វាយប្រហារ|The dog attacked the cat.|ឆ្កែបានវាយប្រហារឆ្មា។
bathe|bathed|bathed|ងូតទឹក|I bathe every evening.|ខ្ញុំងូតទឹករៀងរាល់ល្ងាច។
beg|begged|begged|អង្វរ / សុំទាន|The child begged for candy.|ក្មេងបានអង្វរសុំស្ករគ្រាប់។
behave|behaved|behaved|ប្រព្រឹត្ត|Please behave well in class.|សូមប្រព្រឹត្តឲ្យបានល្អនៅក្នុងថ្នាក់។
belong|belonged|belonged|ជារបស់|This bag belongs to me.|កាបូបនេះជារបស់ខ្ញុំ។
blink|blinked|blinked|ព្រិចភ្នែក|Don't blink!|កុំព្រិចភ្នែក!
bounce|bounced|bounced|លោតឡើងវិញ|The ball bounced high.|បាល់បានលោតឡើងខ្ពស់។
breathe|breathed|breathed|ដកដង្ហើម|Breathe slowly.|ដកដង្ហើមយឺតៗ។
bury|buried|buried|កប់|The dog buried a bone.|ឆ្កែបានកប់ឆ្អឹងមួយ។
calculate|calculated|calculated|គណនា|Calculate the total.|គណនាចំនួនសរុប។
camp|camped|camped|បោះតង់|We camped near the river.|យើងបានបោះតង់នៅជិតទន្លេ។
care|cared|cared|យកចិត្តទុកដាក់|I care about you.|ខ្ញុំខ្វល់ពីអ្នក។
charge|charged|charged|សាកថ្ម / គិតថ្លៃ|Charge your phone.|សាកថ្មទូរស័ព្ទរបស់អ្នក។
chase|chased|chased|ដេញ|The cat chased the mouse.|ឆ្មាបានដេញកណ្ដុរ។
chat|chatted|chatted|ជជែកលេង|We chatted for hours.|យើងបានជជែកគ្នាច្រើនម៉ោង។
cheat|cheated|cheated|បន្លំ / លួចចម្លង|Don't cheat on the test.|កុំលួចចម្លងពេលប្រឡង។
cheer|cheered|cheered|ហ៊ោកញ្ជ្រៀវ|Fans cheered loudly.|អ្នកគាំទ្របានស្រែកហ៊ោយ៉ាងខ្លាំង។
chew|chewed|chewed|ទំពារ|Chew your food well.|ទំពារម្ហូបឲ្យបានល្អិត។
chop|chopped|chopped|ចិញ្ច្រាំ / កាប់|Chop the onions.|ចិញ្ច្រាំខ្ទឹមបារាំង។
clap|clapped|clapped|ទះដៃ|Everyone clapped.|គ្រប់គ្នាបានទះដៃ។
coach|coached|coached|បង្វឹក|He coaches the football team.|គាត់បង្វឹកក្រុមបាល់ទាត់។
comb|combed|combed|សិតសក់|Comb your hair.|សិតសក់របស់អ្នក។
compete|competed|competed|ប្រកួត|They compete in the games.|ពួកគេប្រកួតក្នុងការប្រកួតកីឡា។
confuse|confused|confused|ធ្វើឲ្យច្រឡំ|This question confuses me.|សំណួរនេះធ្វើឲ្យខ្ញុំច្រឡំ។
cough|coughed|coughed|ក្អក|He is coughing.|គាត់កំពុងក្អក។
crash|crashed|crashed|បុក / គាំង|My computer crashed.|កុំព្យូទ័ររបស់ខ្ញុំគាំង។
crawl|crawled|crawled|វារ|The baby can crawl.|ទារកចេះវារហើយ។
cure|cured|cured|ព្យាបាលឲ្យជា|The medicine cured me.|ថ្នាំបានព្យាបាលខ្ញុំឲ្យជា។
cycle|cycled|cycled|ជិះកង់|I cycle to work.|ខ្ញុំជិះកង់ទៅធ្វើការ។
dare|dared|dared|ហ៊ាន|I dare you to try.|ខ្ញុំហ៊ានឲ្យអ្នកសាកមើល។
delay|delayed|delayed|ពន្យារពេល|The flight was delayed.|ជើងហោះហើរត្រូវបានពន្យារពេល។
destroy|destroyed|destroyed|បំផ្លាញ|The fire destroyed the house.|ភ្លើងបានឆេះបំផ្លាញផ្ទះ។
dislike|disliked|disliked|មិនចូលចិត្ត|I dislike spicy food.|ខ្ញុំមិនចូលចិត្តម្ហូបហឹរទេ។
disappear|disappeared|disappeared|បាត់|The sun disappeared.|ព្រះអាទិត្យបានបាត់។
doubt|doubted|doubted|សង្ស័យ|I doubt it.|ខ្ញុំសង្ស័យរឿងនេះ។
drag|dragged|dragged|អូស|Drag the file here.|អូសឯកសារមកទីនេះ។
dry|dried|dried|សម្ងួត|Dry your hair.|សម្ងួតសក់របស់អ្នក។
dust|dusted|dusted|ជូតធូលី|Dust the table.|ជូតធូលីលើតុ។
educate|educated|educated|អប់រំ|Parents educate their children.|ឪពុកម្ដាយអប់រំកូនៗរបស់ពួកគេ។
end|ended|ended|បញ្ចប់|The movie ended at ten.|ភាពយន្តបានបញ្ចប់នៅម៉ោងដប់។
escape|escaped|escaped|រត់គេច|The bird escaped.|សត្វស្លាបបានរត់គេចខ្លួន។
excite|excited|excited|ធ្វើឲ្យរំភើប|The news excited us.|ដំណឹងនេះធ្វើឲ្យយើងរំភើប។
excuse|excused|excused|អត់ទោស|Excuse me, where is the bank?|សុំទោស តើធនាគារនៅឯណា?
exist|existed|existed|មានវត្តមាន|Dinosaurs no longer exist.|សត្វដាយណូស័រលែងមានទៀតហើយ។
fear|feared|feared|ខ្លាច|I fear the dark.|ខ្ញុំខ្លាចភាពងងឹត។
fetch|fetched|fetched|ទៅយក|Fetch some water.|ទៅដងទឹកបន្តិចមក។
film|filmed|filmed|ថតវីដេអូ|They filmed a music video.|ពួកគេបានថតវីដេអូចម្រៀងមួយ។
fire|fired|fired|បណ្ដេញចេញ / បាញ់|The boss fired him.|ថៅកែបានបណ្ដេញគាត់ចេញពីការងារ។
float|floated|floated|អណ្ដែត|Wood floats on water.|ឈើអណ្ដែតលើទឹក។
flow|flowed|flowed|ហូរ|The river flows south.|ទន្លេហូរទៅទិសខាងត្បូង។
fry|fried|fried|ចៀន|Fry the eggs.|ចៀនពង។
gather|gathered|gathered|ប្រមូលផ្ដុំ|We gathered at the pagoda.|យើងបានជួបជុំគ្នានៅវត្ត។
glow|glowed|glowed|ភ្លឺចែងចាំង|The lamp glows at night.|ចង្កៀងភ្លឺនៅពេលយប់។
grab|grabbed|grabbed|ចាប់យក|Grab your bag.|យកកាបូបរបស់អ្នក។
grill|grilled|grilled|អាំង|We grilled fish.|យើងបានអាំងត្រី។
guard|guarded|guarded|យាម|He guards the bank.|គាត់យាមធនាគារ។
guide|guided|guided|នាំផ្លូវ|She guided the tourists.|នាងបាននាំភ្ញៀវទេសចរដើរមើល។
hammer|hammered|hammered|វាយញញួរ|Hammer the nail.|វាយដែកគោល។
handle|handled|handled|ដោះស្រាយ / កាន់|Handle with care.|សូមកាន់ដោយប្រុងប្រយ័ត្ន។
harm|harmed|harmed|ធ្វើឲ្យប៉ះពាល់|Smoking harms your health.|ការជក់បារីធ្វើឲ្យប៉ះពាល់ដល់សុខភាព។
heat|heated|heated|កម្ដៅ|Heat the soup.|កម្ដៅសម្ល។
hug|hugged|hugged|ឱប|She hugged her mother.|នាងបានឱបម្ដាយរបស់នាង។
hunt|hunted|hunted|បរបាញ់|They hunt for food.|ពួកគេបរបាញ់ដើម្បីរកអាហារ។
ignore|ignored|ignored|មិនអើពើ|Don't ignore me.|កុំព្រងើយកន្តើយនឹងខ្ញុំ។
interrupt|interrupted|interrupted|កាត់សម្ដី / រំខាន|Don't interrupt me.|កុំកាត់សម្ដីខ្ញុំ។
iron|ironed|ironed|អ៊ុត|Iron your shirt.|អ៊ុតអាវរបស់អ្នក។
joke|joked|joked|និយាយលេង|He always jokes.|គាត់តែងតែនិយាយលេងសើច។
kiss|kissed|kissed|ថើប|She kissed the baby.|នាងបានថើបទារក។
land|landed|landed|ចុះចត|The plane landed.|យន្តហោះបានចុះចត។
last|lasted|lasted|មានរយៈពេល|The movie lasted two hours.|ភាពយន្តមានរយៈពេលពីរម៉ោង។
lick|licked|licked|លិទ្ធ|The cat licked its paw.|ឆ្មាបានលិទ្ធក្រញាំរបស់វា។
list|listed|listed|រាយបញ្ជី|List five fruits.|រាយឈ្មោះផ្លែឈើប្រាំមុខ។
load|loaded|loaded|ផ្ទុក|Load the truck.|ផ្ទុកឥវ៉ាន់ឡើងឡាន។
measure|measured|measured|វាស់|Measure the table.|វាស់តុ។
melt|melted|melted|រលាយ|The ice melted.|ទឹកកកបានរលាយ។
mend|mended|mended|ជួសជុល / ដេរ|Mend your shirt.|ដេរអាវរបស់អ្នក។
mind|minded|minded|ប្រកាន់ / ខ្វល់|Do you mind if I sit here?|តើអ្នកប្រកាន់ទេ បើខ្ញុំអង្គុយទីនេះ?
nod|nodded|nodded|ងក់ក្បាល|She nodded yes.|នាងបានងក់ក្បាលយល់ព្រម។
note|noted|noted|កត់ចំណាំ|Note the date.|កត់ចំណាំកាលបរិច្ឆេទ។
obey|obeyed|obeyed|ស្ដាប់បង្គាប់|Obey the rules.|គោរពតាមច្បាប់។
own|owned|owned|ជាម្ចាស់|He owns a shop.|គាត់ជាម្ចាស់ហាងមួយ។
pack|packed|packed|វេចខ្ចប់|Pack your bags.|វេចខ្ចប់ឥវ៉ាន់របស់អ្នក។
paint|painted|painted|គូរ / លាបថ្នាំ|She painted a picture.|នាងបានគូររូបមួយ។
peel|peeled|peeled|បកសំបក|Peel the mango.|បកសំបកស្វាយ។
perform|performed|performed|សម្ដែង|They performed an Apsara dance.|ពួកគេបានសម្ដែងរបាំអប្សរា។
phone|phoned|phoned|ទូរស័ព្ទ|Phone me later.|ទូរស័ព្ទមកខ្ញុំពេលក្រោយ។
place|placed|placed|ដាក់|Place the cup here.|ដាក់ពែងនៅទីនេះ។
please|pleased|pleased|ធ្វើឲ្យពេញចិត្ត|It's hard to please him.|ពិបាកធ្វើឲ្យគាត់ពេញចិត្តណាស់។
post|posted|posted|ប៉ុស្តិ៍ / ផ្ញើ|I posted a photo.|ខ្ញុំបានបង្ហោះរូបថតមួយ។
present|presented|presented|ធ្វើបទបង្ហាញ|She presented her project.|នាងបានធ្វើបទបង្ហាញគម្រោងរបស់នាង។
pretend|pretended|pretended|ធ្វើពុត|He pretended to sleep.|គាត់បានធ្វើពុតជាដេកលក់។
punish|punished|punished|ដាក់ទោស|Don't punish the dog.|កុំដាក់ទោសឆ្កែ។
race|raced|raced|ប្រណាំង|They raced to the door.|ពួកគេបានរត់ប្រណាំងគ្នាទៅទ្វារ។
raise|raised|raised|លើក / ចិញ្ចឹម|Raise your hand.|លើកដៃរបស់អ្នក។
realize|realized|realized|ដឹងខ្លួន / យល់ច្បាស់|I realized my mistake.|ខ្ញុំបានដឹងពីកំហុសរបស់ខ្ញុំ។
receive|received|received|ទទួល|I received your email.|ខ្ញុំបានទទួលអ៊ីមែលរបស់អ្នកហើយ។
record|recorded|recorded|ថតសំឡេង / កត់ត្រា|Record your voice.|ថតសំឡេងរបស់អ្នក។
remain|remained|remained|នៅដដែល / នៅសល់|Please remain seated.|សូមអង្គុយនៅកន្លែងដដែល។
remind|reminded|reminded|រំលឹក|Remind me tomorrow.|រំលឹកខ្ញុំនៅថ្ងៃស្អែក។
remove|removed|removed|ដកចេញ|Remove your shoes.|ដោះស្បែកជើងរបស់អ្នកចេញ។
repair|repaired|repaired|ជួសជុល|He repaired the bike.|គាត់បានជួសជុលកង់។
rescue|rescued|rescued|សង្គ្រោះ|They rescued the cat.|ពួកគេបានសង្គ្រោះឆ្មា។
retire|retired|retired|ចូលនិវត្តន៍|My grandfather retired.|ជីតាខ្ញុំបានចូលនិវត្តន៍។
rob|robbed|robbed|ប្លន់|They robbed a bank.|ពួកគេបានប្លន់ធនាគារ។
roll|rolled|rolled|រមៀល|The ball rolled away.|បាល់បានរមៀលទៅឆ្ងាយ។
rush|rushed|rushed|ប្រញាប់ប្រញាល់|Don't rush.|កុំប្រញាប់ប្រញាល់។
sail|sailed|sailed|បើកទូក|We sailed to the island.|យើងបានជិះទូកទៅកោះ។
scare|scared|scared|ធ្វើឲ្យភ័យ|You scared me!|អ្នកធ្វើឲ្យខ្ញុំភ័យ!
scream|screamed|screamed|ស្រែកខ្លាំង|She screamed loudly.|នាងបានស្រែកយ៉ាងខ្លាំង។
scratch|scratched|scratched|កោស|Don't scratch your skin.|កុំកោសស្បែករបស់អ្នក។
select|selected|selected|ជ្រើសរើស|Select a file.|ជ្រើសរើសឯកសារមួយ។
separate|separated|separated|បំបែក|Separate the eggs.|បំបែកពងចេញពីគ្នា។
shave|shaved|shaved|កោរ|He shaves every morning.|គាត់កោរពុកមាត់រៀងរាល់ព្រឹក។
shiver|shivered|shivered|ញ័រ (ព្រោះត្រជាក់)|I shivered in the cold.|ខ្ញុំញ័រដោយសារត្រជាក់។
sigh|sighed|sighed|ដកដង្ហើមធំ|She sighed.|នាងបានដកដង្ហើមធំ។
skip|skipped|skipped|រំលង|Don't skip breakfast.|កុំរំលងអាហារពេលព្រឹក។
slip|slipped|slipped|រអិល|I slipped on the floor.|ខ្ញុំបានរអិលលើឥដ្ឋ។
smoke|smoked|smoked|ជក់បារី|Don't smoke here.|កុំជក់បារីនៅទីនេះ។
sneeze|sneezed|sneezed|កណ្ដាស់|He sneezed twice.|គាត់បានកណ្ដាស់ពីរដង។
sort|sorted|sorted|តម្រៀប|Sort the books.|តម្រៀបសៀវភៅ។
spoil|spoiled|spoiled|ធ្វើឲ្យខូច|Don't spoil the movie.|កុំប្រាប់សាច់រឿងភាពយន្តមុន។
squeeze|squeezed|squeezed|ច្របាច់|Squeeze the lemon.|ច្របាច់ក្រូចឆ្មា។
stare|stared|stared|សម្លឹងមើល|Don't stare at people.|កុំសម្លឹងមើលមនុស្ស។
step|stepped|stepped|ជាន់|Step inside.|ចូលមកខាងក្នុង។
store|stored|stored|រក្សាទុក|Store the rice here.|ទុកអង្ករនៅទីនេះ។
stretch|stretched|stretched|លាតសន្ធឹង|Stretch your arms.|លាតដៃរបស់អ្នក។
suffer|suffered|suffered|រងទុក្ខ|He suffered a lot.|គាត់បានរងទុក្ខច្រើន។
suppose|supposed|supposed|គិតថា / សន្មត|I suppose you're right.|ខ្ញុំគិតថាអ្នកនិយាយត្រូវ។
surprise|surprised|surprised|ធ្វើឲ្យភ្ញាក់ផ្អើល|They surprised me.|ពួកគេបានធ្វើឲ្យខ្ញុំភ្ញាក់ផ្អើល។
switch|switched|switched|ប្ដូរ / បិទបើក|Switch off the light.|បិទភ្លើង។
tease|teased|teased|ចំអន់|Don't tease your sister.|កុំចំអកប្អូនស្រីរបស់អ្នក។
test|tested|tested|សាកល្បង|Test the new app.|សាកល្បង App ថ្មី។
tie|tied|tied|ចង|Tie your shoes.|ចងខ្សែស្បែកជើងរបស់អ្នក។
tour|toured|toured|ទស្សនាជុំវិញ|We toured the city.|យើងបានដើរទស្សនាជុំវិញទីក្រុង។
trade|traded|traded|ធ្វើពាណិជ្ជកម្ម / ប្ដូរ|They trade rice.|ពួកគេធ្វើជំនួញអង្ករ។
transfer|transferred|transferred|ផ្ទេរ|Transfer the money.|ផ្ទេរប្រាក់។
treat|treated|treated|ព្យាបាល / ប្រព្រឹត្ត|Treat others kindly.|ប្រព្រឹត្តចំពោះអ្នកដទៃដោយចិត្តល្អ។
trip|tripped|tripped|ជំពប់|I tripped on a stone.|ខ្ញុំបានជំពប់ថ្ម។
unlock|unlocked|unlocked|ដោះសោ|Unlock the door.|ដោះសោទ្វារ។
unpack|unpacked|unpacked|ដោះឥវ៉ាន់|Unpack your bag.|ដោះឥវ៉ាន់ចេញពីកាបូបរបស់អ្នក។
vote|voted|voted|បោះឆ្នោត|Adults can vote.|មនុស្សពេញវ័យអាចបោះឆ្នោតបាន។
wander|wandered|wandered|ដើរលេង|We wandered around the market.|យើងបានដើរលេងជុំវិញផ្សារ។
warm|warmed|warmed|កម្ដៅ|Warm the milk.|កម្ដៅទឹកដោះគោ។
warn|warned|warned|ព្រមាន|I warned you.|ខ្ញុំបានព្រមានអ្នករួចហើយ។
water|watered|watered|ស្រោចទឹក|Water the plants.|ស្រោចទឹកដើមឈើ។
whistle|whistled|whistled|ហួច|He whistled a song.|គាត់បានហួចបទចម្រៀងមួយ។
wipe|wiped|wiped|ជូត|Wipe the table.|ជូតតុ។
yawn|yawned|yawned|ស្ងាប|I'm yawning.|ខ្ញុំកំពុងស្ងាប។
arise|arose|arisen|កើតឡើង|Problems can arise anytime.|បញ្ហាអាចកើតឡើងគ្រប់ពេល។
awake|awoke|awoken|ភ្ញាក់|I awoke early.|ខ្ញុំបានភ្ញាក់ពីព្រលឹម។
bear|bore|born / borne|ទ្រាំ / កើត|I can't bear the noise.|ខ្ញុំមិនអាចទ្រាំនឹងសំឡេងរំខាននេះបានទេ។
beat|beat|beaten|វាយ / ឈ្នះ|We beat their team.|យើងបានយកឈ្នះក្រុមរបស់ពួកគេ។
breed|bred|bred|បង្កាត់ពូជ / ចិញ្ចឹម|They breed chickens.|ពួកគេចិញ្ចឹមមាន់។
broadcast|broadcast|broadcast|ផ្សាយ|TV broadcasts the news.|ទូរទស្សន៍ផ្សាយព័ត៌មាន។
burst|burst|burst|ផ្ទុះ|The balloon burst.|បាឡុងបានផ្ទុះ។
creep|crept|crept|លបដើរ|The cat crept slowly.|ឆ្មាបានលបដើរយឺតៗ។
deal|dealt|dealt|ដោះស្រាយ|I'll deal with it.|ខ្ញុំនឹងដោះស្រាយរឿងនេះ។
flee|fled|fled|រត់គេចខ្លួន|They fled the fire.|ពួកគេបានរត់គេចពីភ្លើង។
forbid|forbade|forbidden|ហាមឃាត់|Smoking is forbidden.|ហាមជក់បារី។
grind|ground|ground|កិន|Grind the coffee.|កិនកាហ្វេ។
lean|leaned|leaned|ផ្អៀង / ផ្អែក|Lean on the wall.|ផ្អែកនឹងជញ្ជាំង។
leap|leapt|leapt|លោតរំលង|The frog leapt.|កង្កែបបានលោត។
mistake|mistook|mistaken|ច្រឡំ|I mistook him for his brother.|ខ្ញុំច្រឡំគាត់ជាបងប្រុសរបស់គាត់។
misunderstand|misunderstood|misunderstood|យល់ខុស|You misunderstood me.|អ្នកយល់ខុសពីខ្ញុំហើយ។
oversleep|overslept|overslept|គេងហួសម៉ោង|I overslept today.|ថ្ងៃនេះខ្ញុំគេងហួសម៉ោង។
prove|proved|proven|បង្ហាញភស្តុតាង|Prove it.|បង្ហាញភស្តុតាងមក។
seek|sought|sought|ស្វែងរក|They seek help.|ពួកគេស្វែងរកជំនួយ។
sew|sewed|sewn|ដេរ|She sews clothes.|នាងដេរសម្លៀកបំពាក់។
shrink|shrank|shrunk|រួញ|My shirt shrank.|អាវរបស់ខ្ញុំរួញ។
speed|sped|sped|បើកលឿន|The car sped away.|ឡានបានបើកលឿនចេញទៅ។
spit|spat|spat|ស្ដោះ|Don't spit on the street.|កុំស្ដោះទឹកមាត់លើផ្លូវ។
strike|struck|struck|វាយ / បាញ់ (ផ្លេកបន្ទោរ)|Lightning struck the tree.|រន្ទះបានបាញ់ដើមឈើ។
swear|swore|sworn|ស្បថ / ជេរ|Don't swear.|កុំជេរប្រមាថ។
upset|upset|upset|ធ្វើឲ្យខកចិត្ត|The news upset her.|ដំណឹងនេះធ្វើឲ្យនាងខកចិត្ត។
weep|wept|wept|យំ|She wept quietly.|នាងបានយំស្ងាត់ៗ។
wind|wound|wound|រមួល / មួល|Wind the clock.|មួលនាឡិកា។
attach|attached|attached|ភ្ជាប់|Attach the file.|ភ្ជាប់ឯកសារ។
board|boarded|boarded|ឡើង (យន្តហោះ / ឡាន)|We boarded the plane.|យើងបានឡើងយន្តហោះ។
click|clicked|clicked|ចុច|Click the button.|ចុចប៊ូតុង។
code|coded|coded|សរសេរកូដ|She codes every day.|នាងសរសេរកូដរៀងរាល់ថ្ងៃ។
delete|deleted|deleted|លុប|Delete the photo.|លុបរូបថត។
edit|edited|edited|កែសម្រួល|Edit your video.|កែសម្រួលវីដេអូរបស់អ្នក។
email|emailed|emailed|ផ្ញើអ៊ីមែល|Email me the file.|ផ្ញើឯកសារមកខ្ញុំតាមអ៊ីមែល។
install|installed|installed|ដំឡើង|Install the app.|ដំឡើង App។
scroll|scrolled|scrolled|រំកិល|Scroll down.|រំកិលចុះក្រោម។
text|texted|texted|ផ្ញើសារ|Text me later.|ផ្ញើសារមកខ្ញុំពេលក្រោយ។
update|updated|updated|ធ្វើបច្ចុប្បន្នភាព|Update your phone.|ធ្វើបច្ចុប្បន្នភាពទូរស័ព្ទរបស់អ្នក។
blame|blamed|blamed|បន្ទោស|Don't blame me.|កុំបន្ទោសខ្ញុំ។
bow|bowed|bowed|ឱនគោរព|We bow to the monks.|យើងឱនគោរពព្រះសង្ឃ។
calm|calmed|calmed|ធ្វើឲ្យស្ងប់|Calm down.|ស្ងប់ចិត្តសិន។
cancel|canceled|canceled|លុបចោល|The class was canceled.|ថ្នាក់រៀនត្រូវបានលុបចោល។
crack|cracked|cracked|ប្រេះ|The glass cracked.|កែវបានប្រេះ។
deserve|deserved|deserved|សមនឹងទទួល|You deserve a rest.|អ្នកសមនឹងទទួលបានការសម្រាក។
disagree|disagreed|disagreed|មិនយល់ស្រប|I disagree with you.|ខ្ញុំមិនយល់ស្របជាមួយអ្នកទេ។
disturb|disturbed|disturbed|រំខាន|Do not disturb.|សូមកុំរំខាន។
drown|drowned|drowned|លង់ទឹក|Be careful not to drown.|ប្រយ័ត្នលង់ទឹក។
employ|employed|employed|ជួលធ្វើការ|The factory employs 500 people.|រោងចក្រនេះជួលកម្មករ ៥០០ នាក់។
empty|emptied|emptied|ធ្វើឲ្យទទេ|Empty the bin.|ចាក់សំរាមចោល។
examine|examined|examined|ពិនិត្យ|The doctor examined me.|វេជ្ជបណ្ឌិតបានពិនិត្យខ្ញុំ។
explore|explored|explored|រុករក|We explored the jungle.|យើងបានរុករកព្រៃ។
face|faced|faced|ប្រឈមមុខ|Face your fears.|ប្រឈមមុខនឹងការភ័យខ្លាចរបស់អ្នក។
fasten|fastened|fastened|ចង / ពាក់ (ខ្សែក្រវាត់)|Fasten your seat belt.|ពាក់ខ្សែក្រវាត់សុវត្ថិភាព។
form|formed|formed|បង្កើត|Form a group of four.|បង្កើតក្រុមមួយមានបួននាក់។
frighten|frightened|frightened|ធ្វើឲ្យខ្លាច|The thunder frightened the baby.|ផ្គររន្ទះធ្វើឲ្យទារកភ័យខ្លាច។
gain|gained|gained|ទទួលបាន / ឡើង|I gained two kilos.|ខ្ញុំឡើងទម្ងន់ពីរគីឡូ។
hand|handed|handed|ហុចឲ្យ|Hand me the pen.|ហុចប៊ិចមកខ្ញុំ។
heal|healed|healed|ជាសះស្បើយ|The wound healed.|របួសបានជាសះស្បើយ។
host|hosted|hosted|ធ្វើម្ចាស់ផ្ទះ|We hosted a party.|យើងបានរៀបចំពិធីជប់លៀងមួយ។
intend|intended|intended|មានបំណង|I intend to study abroad.|ខ្ញុំមានបំណងទៅរៀននៅបរទេស។
invent|invented|invented|ច្នៃប្រឌិត|Who invented the phone?|តើនរណាជាអ្នកបង្កើតទូរស័ព្ទ?
match|matched|matched|ផ្គូផ្គង|Match the words.|ផ្គូផ្គងពាក្យ។
memorize|memorized|memorized|ទន្ទេញ|Memorize these words.|ទន្ទេញពាក្យទាំងនេះ។
observe|observed|observed|សង្កេត|Observe the birds.|សង្កេតមើលសត្វស្លាប។
owe|owed|owed|ជំពាក់|I owe you five dollars.|ខ្ញុំជំពាក់អ្នកប្រាំដុល្លារ។
pause|paused|paused|ផ្អាក|Pause the video.|ផ្អាកវីដេអូ។
pronounce|pronounced|pronounced|បញ្ចេញសំឡេង|How do you pronounce it?|តើអ្នកបញ្ចេញសំឡេងពាក្យនេះយ៉ាងម៉េច?
quarrel|quarreled|quarreled|ឈ្លោះប្រកែក|They quarreled again.|ពួកគេបានឈ្លោះគ្នាម្ដងទៀត។
recycle|recycled|recycled|កែច្នៃឡើងវិញ|Recycle plastic bottles.|កែច្នៃដបប្លាស្ទិកឡើងវិញ។
register|registered|registered|ចុះឈ្មោះ|Register for the class.|ចុះឈ្មោះចូលរៀនថ្នាក់។
regret|regretted|regretted|សោកស្ដាយ|I regret nothing.|ខ្ញុំមិនសោកស្ដាយអ្វីទាំងអស់។
rely|relied|relied|ពឹងផ្អែក|You can rely on me.|អ្នកអាចពឹងលើខ្ញុំបាន។
reserve|reserved|reserved|កក់ទុក|Reserve a table.|កក់តុមួយ។
rinse|rinsed|rinsed|លាងជម្រះ|Rinse the rice.|លាងអង្ករ។
scan|scanned|scanned|ស្កេន|Scan the QR code.|ស្កេន QR code។
score|scored|scored|រកបានពិន្ទុ / ស៊ុតបញ្ចូល|He scored a goal.|គាត់បានស៊ុតបញ្ចូលទីមួយគ្រាប់។
sip|sipped|sipped|ក្រេប|She sipped her coffee.|នាងបានក្រេបកាហ្វេ។
snore|snored|snored|ស្រមុក|My father snores.|ឪពុកខ្ញុំស្រមុក។
stir|stirred|stirred|កូរ|Stir the soup.|កូរសម្ល។
swallow|swallowed|swallowed|លេប|Swallow the pill.|លេបថ្នាំគ្រាប់។
tap|tapped|tapped|ប៉ះស្រាលៗ|Tap the screen.|ប៉ះអេក្រង់។
tidy|tidied|tidied|រៀបចំឲ្យស្អាត|Tidy your room.|រៀបចំបន្ទប់របស់អ្នកឲ្យស្អាត។
volunteer|volunteered|volunteered|ស្ម័គ្រចិត្ត|I volunteer at the hospital.|ខ្ញុំធ្វើការស្ម័គ្រចិត្តនៅមន្ទីរពេទ្យ។
welcome|welcomed|welcomed|ស្វាគមន៍|We welcome new students.|យើងស្វាគមន៍សិស្សថ្មី។
zoom|zoomed|zoomed|ពង្រីក (រូប)|Zoom in on the map.|ពង្រីកផែនទី។
die|died|died|ស្លាប់|The old tree died.|ដើមឈើចាស់បានងាប់។
kill|killed|killed|សម្លាប់|Mosquitoes can kill people.|មូសអាចសម្លាប់មនុស្សបាន។
snow|snowed|snowed|ធ្លាក់ព្រិល|It snows in Japan in winter.|នៅប្រទេសជប៉ុនមានធ្លាក់ព្រិលក្នុងរដូវរងា។
color|colored|colored|លាបពណ៌|Color the picture.|លាបពណ៌រូបភាព។
tip|tipped|tipped|ឲ្យទឹកតែ|We tipped the waiter.|យើងបានឲ្យទឹកតែដល់អ្នករត់តុ។
fish|fished|fished|ស្ទូចត្រី|We fished in the lake.|យើងបានស្ទូចត្រីនៅបឹង។
ski|skied|skied|ជិះស្គីលើព្រិល|They ski in winter.|ពួកគេជិះស្គីក្នុងរដូវរងា។
wink|winked|winked|មិចភ្នែក|He winked at me.|គាត់បានមិចភ្នែកដាក់ខ្ញុំ។
faint|fainted|fainted|សន្លប់|She fainted in the heat.|នាងបានសន្លប់ដោយសារកម្ដៅ។
ache|ached|ached|ឈឺចាប់|My back aches.|ខ្ញុំឈឺខ្នង។
itch|itched|itched|រមាស់|My arm itches.|ដៃខ្ញុំរមាស់។
vomit|vomited|vomited|ក្អួត|He vomited after the boat trip.|គាត់បានក្អួតក្រោយពេលជិះទូក។
groan|groaned|groaned|ថ្ងូរ|He groaned in pain.|គាត់បានថ្ងូរដោយការឈឺចាប់។
bloom|bloomed|bloomed|រីក (ផ្កា)|Lotus flowers bloom in the rainy season.|ផ្កាឈូករីកនៅរដូវវស្សា។`,
2:`accept|accepted|accepted|ទទួលយក|She accepted the job.|នាងបានទទួលយកការងារនោះ។
achieve|achieved|achieved|សម្រេចបាន|He achieved his goal.|គាត់បានសម្រេចគោលដៅរបស់គាត់។
advise|advised|advised|ផ្ដល់ដំបូន្មាន|The doctor advised rest.|វេជ្ជបណ្ឌិតបានណែនាំឲ្យសម្រាក។
afford|afforded|afforded|មានលទ្ធភាព (ទិញ)|I can't afford a car.|ខ្ញុំមិនមានលទ្ធភាពទិញឡានទេ។
apply|applied|applied|ដាក់ពាក្យ|I applied for a job.|ខ្ញុំបានដាក់ពាក្យសុំការងារ។
argue|argued|argued|ឈ្លោះ / ជជែកតវ៉ា|They argued about money.|ពួកគេបានឈ្លោះគ្នារឿងលុយ។
arrange|arranged|arranged|រៀបចំ|She arranged the meeting.|នាងបានរៀបចំការប្រជុំ។
attend|attended|attended|ចូលរួម|I attended the class.|ខ្ញុំបានចូលរៀនថ្នាក់នោះ។
avoid|avoided|avoided|ជៀសវាង|Avoid too much sugar.|ជៀសវាងការញ៉ាំស្ករច្រើនពេក។
celebrate|celebrated|celebrated|អបអរ|We celebrated Khmer New Year.|យើងបានអបអរពិធីបុណ្យចូលឆ្នាំខ្មែរ។
compare|compared|compared|ប្រៀបធៀប|Compare the two prices.|ប្រៀបធៀបតម្លៃទាំងពីរ។
complain|complained|complained|ត្អូញត្អែរ|He complained about the food.|គាត់បានត្អូញត្អែរអំពីម្ហូប។
complete|completed|completed|បញ្ចប់|Complete the form.|បំពេញទម្រង់បែបបទ។
connect|connected|connected|ភ្ជាប់|Connect to the Wi-Fi.|ភ្ជាប់ទៅ Wi-Fi។
contact|contacted|contacted|ទាក់ទង|Contact me by email.|ទាក់ទងខ្ញុំតាមអ៊ីមែល។
contain|contained|contained|មានផ្ទុក|This box contains books.|ប្រអប់នេះមានផ្ទុកសៀវភៅ។
correct|corrected|corrected|កែ|The teacher corrected my essay.|គ្រូបានកែតែងសេចក្ដីរបស់ខ្ញុំ។
describe|described|described|ពិពណ៌នា|Describe your house.|ពិពណ៌នាអំពីផ្ទះរបស់អ្នក។
design|designed|designed|រចនា|She designed a logo.|នាងបានរចនាឡូហ្គោមួយ។
develop|developed|developed|អភិវឌ្ឍ|They developed an app.|ពួកគេបានអភិវឌ្ឍ App មួយ។
discover|discovered|discovered|រកឃើញ|He discovered a cave.|គាត់បានរកឃើញរូងភ្នំមួយ។
discuss|discussed|discussed|ពិភាក្សា|Let's discuss the plan.|តោះពិភាក្សាអំពីផែនការ។
divide|divided|divided|ចែក|Divide the cake into four.|ចែកនំខេកជាបួនចំណែក។
download|downloaded|downloaded|ទាញយក|Download the file.|ទាញយកឯកសារ។
encourage|encouraged|encouraged|លើកទឹកចិត្ត|My parents encourage me.|ឪពុកម្ដាយលើកទឹកចិត្តខ្ញុំ។
exchange|exchanged|exchanged|ប្ដូរ|Exchange dollars for riel.|ប្ដូរដុល្លារជាប្រាក់រៀល។
exercise|exercised|exercised|ហាត់ប្រាណ|I exercise every morning.|ខ្ញុំហាត់ប្រាណរៀងរាល់ព្រឹក។
hire|hired|hired|ជួល (បុគ្គលិក)|They hired a new teacher.|ពួកគេបានជួលគ្រូថ្មីម្នាក់។
imagine|imagined|imagined|ស្រមៃ|Imagine a better world.|ស្រមៃមើលពិភពលោកដែលល្អជាងនេះ។
inform|informed|informed|ជូនដំណឹង|Please inform the manager.|សូមជូនដំណឹងទៅអ្នកគ្រប់គ្រង។
introduce|introduced|introduced|ណែនាំ|Let me introduce myself.|ខ្ញុំសូមណែនាំខ្លួន។
manage|managed|managed|គ្រប់គ្រង|She manages a shop.|នាងគ្រប់គ្រងហាងមួយ។
mention|mentioned|mentioned|លើកឡើង|He mentioned your name.|គាត់បានលើកឡើងពីឈ្មោះរបស់អ្នក។
notice|noticed|noticed|កត់សម្គាល់|I noticed a mistake.|ខ្ញុំបានកត់សម្គាល់ឃើញកំហុសមួយ។
organize|organized|organized|រៀបចំ|We organized a party.|យើងបានរៀបចំពិធីជប់លៀងមួយ។
permit|permitted|permitted|អនុញ្ញាត|Smoking is not permitted.|មិនអនុញ្ញាតឲ្យជក់បារីទេ។
prefer|preferred|preferred|ចូលចិត្តជាង|I prefer tea to coffee.|ខ្ញុំចូលចិត្តតែជាងកាហ្វេ។
prevent|prevented|prevented|ការពារ / បង្ការ|Washing hands prevents illness.|ការលាងដៃជួយការពារជំងឺ។
produce|produced|produced|ផលិត|Cambodia produces rice.|កម្ពុជាផលិតអង្ករ។
protect|protected|protected|ការពារ|Protect the forest.|ការពារព្រៃឈើ។
provide|provided|provided|ផ្ដល់|The school provides books.|សាលាផ្ដល់សៀវភៅ។
recommend|recommended|recommended|ណែនាំ|I recommend this book.|ខ្ញុំណែនាំសៀវភៅនេះ។
reduce|reduced|reduced|កាត់បន្ថយ|Reduce plastic use.|កាត់បន្ថយការប្រើប្លាស្ទិក។
refuse|refused|refused|បដិសេធ|He refused to help.|គាត់បានបដិសេធមិនជួយ។
relax|relaxed|relaxed|សម្រាកលំហែ|Relax at the beach.|សម្រាកលំហែនៅមាត់សមុទ្រ។
rent|rented|rented|ជួល|We rented a house.|យើងបានជួលផ្ទះមួយ។
replace|replaced|replaced|ជំនួស|Replace the battery.|ប្ដូរថ្មថ្មី។
reply|replied|replied|ឆ្លើយតប|Reply to my email.|ឆ្លើយតបអ៊ីមែលរបស់ខ្ញុំ។
report|reported|reported|រាយការណ៍|Report the problem.|រាយការណ៍អំពីបញ្ហា។
require|required|required|តម្រូវ|The job requires English.|ការងារនេះតម្រូវឲ្យចេះភាសាអង់គ្លេស។
respect|respected|respected|គោរព|Respect your elders.|គោរពមនុស្សចាស់។
review|reviewed|reviewed|ពិនិត្យឡើងវិញ|Review your notes.|ពិនិត្យកំណត់ត្រារបស់អ្នកឡើងវិញ។
suggest|suggested|suggested|ស្នើ / ណែនាំ|I suggest we leave early.|ខ្ញុំស្នើថាយើងគួរចេញឲ្យបានឆាប់។
support|supported|supported|គាំទ្រ|My family supports me.|គ្រួសាររបស់ខ្ញុំគាំទ្រខ្ញុំ។
translate|translated|translated|បកប្រែ|Translate this sentence.|បកប្រែប្រយោគនេះ។
upload|uploaded|uploaded|បង្ហោះ|Upload your photo.|បង្ហោះរូបថតរបស់អ្នក។
waste|wasted|wasted|ខ្ជះខ្ជាយ|Don't waste water.|កុំខ្ជះខ្ជាយទឹក។
forecast|forecast|forecast|ព្យាករ|They forecast rain tomorrow.|ពួកគេព្យាករថាថ្ងៃស្អែកនឹងភ្លៀង។
overcome|overcame|overcome|យកឈ្នះ|She overcame her fear.|នាងបានយកឈ្នះការភ័យខ្លាចរបស់នាង។
withdraw|withdrew|withdrawn|ដក (ប្រាក់)|I withdrew money from the ATM.|ខ្ញុំបានដកលុយពី ATM។
adapt|adapted|adapted|សម្របខ្លួន|You must adapt to the new school.|អ្នកត្រូវសម្របខ្លួនទៅនឹងសាលាថ្មី។
adjust|adjusted|adjusted|កែតម្រូវ|Adjust the volume.|កែតម្រូវកម្រិតសំឡេង។
affect|affected|affected|ប៉ះពាល់|The rain affected the harvest.|ភ្លៀងបានប៉ះពាល់ដល់ការប្រមូលផល។
aim|aimed|aimed|មានគោលដៅ|We aim to finish by Friday.|យើងមានគោលដៅបញ្ចប់នៅថ្ងៃសុក្រ។
appoint|appointed|appointed|តែងតាំង|He was appointed manager.|គាត់ត្រូវបានតែងតាំងជាអ្នកគ្រប់គ្រង។
approach|approached|approached|ចូលទៅជិត|A man approached me.|បុរសម្នាក់បានដើរចូលមកជិតខ្ញុំ។
assist|assisted|assisted|ជួយ|Can I assist you?|តើខ្ញុំអាចជួយអ្នកបានទេ?
attempt|attempted|attempted|ប៉ុនប៉ង|She attempted the exam twice.|នាងបានប៉ុនប៉ងប្រឡងពីរដង។
bargain|bargained|bargained|តថ្លៃ|We bargained at the market.|យើងបានតថ្លៃនៅផ្សារ។
benefit|benefited|benefited|ទទួលផលប្រយោជន៍|Everyone benefits from education.|មនុស្សគ្រប់គ្នាទទួលបានផលប្រយោជន៍ពីការអប់រំ។
challenge|challenged|challenged|ប្រកួតប្រជែង / ជំទាស់|He challenged me to a game.|គាត់បានប្រកួតប្រជែងជាមួយខ្ញុំលេងហ្គេម។
combine|combined|combined|ផ្សំ|Combine the two colors.|ផ្សំពណ៌ទាំងពីរ។
comment|commented|commented|បញ្ចេញមតិ|She commented on my post.|នាងបានបញ្ចេញមតិលើការបង្ហោះរបស់ខ្ញុំ។
commit|committed|committed|ប្ដេជ្ញា / ប្រព្រឹត្ត|He committed to the project.|គាត់បានប្ដេជ្ញាចិត្តចំពោះគម្រោង។
communicate|communicated|communicated|ទំនាក់ទំនង|We communicate by email.|យើងទំនាក់ទំនងគ្នាតាមអ៊ីមែល។
concentrate|concentrated|concentrated|ផ្ដោតអារម្មណ៍|I can't concentrate.|ខ្ញុំមិនអាចផ្ដោតអារម្មណ៍បានទេ។
consult|consulted|consulted|ពិគ្រោះ|Consult your doctor.|ពិគ្រោះជាមួយវេជ្ជបណ្ឌិតរបស់អ្នក។
control|controlled|controlled|គ្រប់គ្រង|Control your anger.|គ្រប់គ្រងកំហឹងរបស់អ្នក។
convert|converted|converted|បម្លែង|Convert dollars to riel.|បម្លែងដុល្លារជាប្រាក់រៀល។
cooperate|cooperated|cooperated|សហការ|We cooperate with other schools.|យើងសហការជាមួយសាលាផ្សេងទៀត។
criticize|criticized|criticized|រិះគន់|Don't criticize others.|កុំរិះគន់អ្នកដទៃ។
decorate|decorated|decorated|តុបតែង|We decorated the house.|យើងបានតុបតែងផ្ទះ។
define|defined|defined|កំណត់ន័យ|Define this word.|កំណត់ន័យនៃពាក្យនេះ។
demonstrate|demonstrated|demonstrated|បង្ហាញ|The teacher demonstrated the experiment.|គ្រូបានបង្ហាញការពិសោធន៍។
depart|departed|departed|ចេញដំណើរ|The bus departs at 8.|ឡានក្រុងចេញដំណើរម៉ោង ៨។
deposit|deposited|deposited|ដាក់ប្រាក់|I deposited money in the bank.|ខ្ញុំបានដាក់លុយក្នុងធនាគារ។
direct|directed|directed|ដឹកនាំ / ណែនាំផ្លូវ|She directed a film.|នាងបានដឹកនាំភាពយន្តមួយ។
disappoint|disappointed|disappointed|ធ្វើឲ្យខកចិត្ត|Don't disappoint your parents.|កុំធ្វើឲ្យឪពុកម្ដាយខកចិត្ត។
display|displayed|displayed|បង្ហាញ / តាំងបង្ហាញ|The shop displays new phones.|ហាងតាំងបង្ហាញទូរស័ព្ទថ្មីៗ។
elect|elected|elected|ជ្រើសតាំង|They elected a new leader.|ពួកគេបានជ្រើសតាំងអ្នកដឹកនាំថ្មី។
enable|enabled|enabled|ធ្វើឲ្យអាច|The app enables you to learn fast.|App នេះជួយឲ្យអ្នករៀនបានលឿន។
enroll|enrolled|enrolled|ចុះឈ្មោះចូលរៀន|I enrolled in an English course.|ខ្ញុំបានចុះឈ្មោះរៀនវគ្គភាសាអង់គ្លេស។
ensure|ensured|ensured|ធានា|Ensure the door is locked.|ត្រូវប្រាកដថាទ្វារត្រូវបានចាក់សោ។
entertain|entertained|entertained|កម្សាន្ត|The clown entertained the kids.|តួកំប្លែងបានកម្សាន្តក្មេងៗ។
equip|equipped|equipped|បំពាក់|The lab is equipped with computers.|បន្ទប់ពិសោធន៍ត្រូវបានបំពាក់ដោយកុំព្យូទ័រ។
experience|experienced|experienced|ជួបប្រទះ|We experienced heavy rain.|យើងបានជួបប្រទះភ្លៀងខ្លាំង។
experiment|experimented|experimented|ពិសោធ|They experimented with colors.|ពួកគេបានពិសោធជាមួយពណ៌។
express|expressed|expressed|បញ្ចេញ|Express your feelings.|បញ្ចេញអារម្មណ៍របស់អ្នក។
extend|extended|extended|ពន្យារ / ពង្រីក|I extended my visa.|ខ្ញុំបានពន្យារទិដ្ឋាការរបស់ខ្ញុំ។
focus|focused|focused|ផ្ដោត|Focus on your goals.|ផ្ដោតលើគោលដៅរបស់អ្នក។
force|forced|forced|បង្ខំ|Nobody forced me.|គ្មាននរណាបង្ខំខ្ញុំទេ។
generate|generated|generated|បង្កើត|Solar panels generate electricity.|បន្ទះសូឡាផលិតអគ្គិសនី។
graduate|graduated|graduated|បញ្ចប់ការសិក្សា|She graduated last year.|នាងបានបញ្ចប់ការសិក្សាកាលពីឆ្នាំមុន។
harvest|harvested|harvested|ច្រូតកាត់|Farmers harvest rice in December.|កសិករច្រូតស្រូវនៅខែធ្នូ។
highlight|highlighted|highlighted|គូសបញ្ជាក់|Highlight the key words.|គូសបញ្ជាក់ពាក្យគន្លឹះ។
illustrate|illustrated|illustrated|គូររូបប្រកប / បង្ហាញ|He illustrated the book.|គាត់បានគូររូបប្រកបសៀវភៅ។
import|imported|imported|នាំចូល|Cambodia imports cars.|កម្ពុជានាំចូលរថយន្ត។
export|exported|exported|នាំចេញ|Cambodia exports rice.|កម្ពុជានាំចេញអង្ករ។
impress|impressed|impressed|ធ្វើឲ្យចាប់អារម្មណ៍|Her speech impressed everyone.|សុន្ទរកថារបស់នាងធ្វើឲ្យគ្រប់គ្នាចាប់អារម្មណ៍។
inspire|inspired|inspired|បំផុសគំនិត|My teacher inspires me.|គ្រូរបស់ខ្ញុំបំផុសគំនិតខ្ញុំ។
insist|insisted|insisted|ទទូច|He insisted on paying.|គាត់បានទទូចថាគាត់ជាអ្នកបង់ប្រាក់។
interview|interviewed|interviewed|សម្ភាសន៍|They interviewed five people.|ពួកគេបានសម្ភាសន៍មនុស្សប្រាំនាក់។
invest|invested|invested|វិនិយោគ|He invested in a small business.|គាត់បានវិនិយោគលើអាជីវកម្មតូចមួយ។
judge|judged|judged|វិនិច្ឆ័យ|Don't judge people.|កុំវិនិច្ឆ័យមនុស្ស។
launch|launched|launched|ដាក់ឲ្យដំណើរការ|They launched a new app.|ពួកគេបានដាក់ឲ្យដំណើរការ App ថ្មីមួយ។
limit|limited|limited|ដាក់កម្រិត|Limit your screen time.|កំណត់ពេលមើលអេក្រង់របស់អ្នក។
locate|located|located|ស្ថិតនៅ / រកទីតាំង|The hotel is located near the river.|សណ្ឋាគារស្ថិតនៅជិតមាត់ទន្លេ។
lower|lowered|lowered|បន្ថយ|Lower your voice.|បន្ថយសំឡេងរបស់អ្នក។
motivate|motivated|motivated|ជំរុញទឹកចិត្ត|Music motivates me.|តន្ត្រីជំរុញទឹកចិត្តខ្ញុំ។
operate|operated|operated|ដំណើរការ / វះកាត់|The doctor operated on him.|វេជ្ជបណ្ឌិតបានវះកាត់គាត់។
persuade|persuaded|persuaded|បញ្ចុះបញ្ចូល|She persuaded me to join.|នាងបានបញ្ចុះបញ្ចូលខ្ញុំឲ្យចូលរួម។
preserve|preserved|preserved|ថែរក្សា|Preserve our culture.|ថែរក្សាវប្បធម៌របស់យើង។
process|processed|processed|កែច្នៃ / ដំណើរការ|The factory processes fish.|រោងចក្រកែច្នៃត្រី។
promote|promoted|promoted|ផ្សព្វផ្សាយ / ដំឡើងតំណែង|She was promoted to manager.|នាងត្រូវបានដំឡើងតំណែងជាអ្នកគ្រប់គ្រង។
propose|proposed|proposed|ស្នើ|He proposed a new plan.|គាត់បានស្នើផែនការថ្មីមួយ។
purchase|purchased|purchased|ទិញ|You can purchase tickets online.|អ្នកអាចទិញសំបុត្រតាមអនឡាញ។
qualify|qualified|qualified|មានលក្ខណៈសម្បត្តិគ្រប់|She qualified for the final.|នាងមានសិទ្ធិចូលវគ្គផ្ដាច់ព្រ័ត្រ។
rank|ranked|ranked|ចាត់ថ្នាក់|Our school ranked first.|សាលារបស់យើងជាប់ចំណាត់ថ្នាក់លេខមួយ។
react|reacted|reacted|មានប្រតិកម្ម|How did he react?|តើគាត់មានប្រតិកម្មយ៉ាងដូចម្ដេច?
refer|referred|referred|សំដៅ / បញ្ជូន|The doctor referred me to a specialist.|វេជ្ជបណ្ឌិតបានបញ្ជូនខ្ញុំទៅគ្រូពេទ្យឯកទេស។
relate|related|related|ទាក់ទង|This story relates to my life.|រឿងនេះទាក់ទងនឹងជីវិតរបស់ខ្ញុំ។
request|requested|requested|ស្នើសុំ|I requested a refund.|ខ្ញុំបានស្នើសុំប្រាក់វិញ។
research|researched|researched|ស្រាវជ្រាវ|She researched the topic.|នាងបានស្រាវជ្រាវប្រធានបទនោះ។
resign|resigned|resigned|លាលែង|He resigned from his job.|គាត់បានលាលែងពីការងារ។
resolve|resolved|resolved|ដោះស្រាយ|We resolved the problem.|យើងបានដោះស្រាយបញ្ហា។
respond|responded|responded|ឆ្លើយតប|Please respond quickly.|សូមឆ្លើយតបឲ្យបានឆាប់។
restore|restored|restored|ស្ដារឡើងវិញ|They restored the old temple.|ពួកគេបានជួសជុលប្រាសាទចាស់ឡើងវិញ។
reveal|revealed|revealed|បង្ហាញ (អាថ៌កំបាំង)|She revealed the secret.|នាងបានបង្ហាញអាថ៌កំបាំង។
reward|rewarded|rewarded|ផ្ដល់រង្វាន់|They rewarded the best student.|ពួកគេបានផ្ដល់រង្វាន់ដល់សិស្សពូកែបំផុត។
schedule|scheduled|scheduled|កំណត់ពេល|The meeting is scheduled for Monday.|ការប្រជុំត្រូវបានកំណត់នៅថ្ងៃច័ន្ទ។
specialize|specialized|specialized|មានជំនាញឯកទេស|She specializes in IT.|នាងមានជំនាញឯកទេសផ្នែក IT។
state|stated|stated|ថ្លែង|He stated his opinion.|គាត់បានថ្លែងមតិរបស់គាត់។
submit|submitted|submitted|ដាក់ស្នើ / ប្រគល់|Submit your homework.|ប្រគល់កិច្ចការផ្ទះរបស់អ្នក។
succeed|succeeded|succeeded|ទទួលបានជោគជ័យ|If you work hard, you will succeed.|បើអ្នកខិតខំធ្វើការ អ្នកនឹងទទួលបានជោគជ័យ។
summarize|summarized|summarized|សង្ខេប|Summarize the story.|សង្ខេបរឿង។
supply|supplied|supplied|ផ្គត់ផ្គង់|They supply water to the village.|ពួកគេផ្គត់ផ្គង់ទឹកដល់ភូមិ។
surround|surrounded|surrounded|ព័ទ្ធជុំវិញ|Trees surround the house.|ដើមឈើព័ទ្ធជុំវិញផ្ទះ។
tend|tended|tended|មានទំនោរ|I tend to sleep late.|ខ្ញុំច្រើនតែគេងយឺត។
transform|transformed|transformed|ផ្លាស់ប្ដូរទាំងស្រុង|Technology transformed our lives.|បច្ចេកវិទ្យាបានផ្លាស់ប្ដូរជីវិតរបស់យើង។
transport|transported|transported|ដឹកជញ្ជូន|Trucks transport goods.|ឡានដឹកទំនិញដឹកជញ្ជូនទំនិញ។
unite|united|united|រួបរួម|Sport unites people.|កីឡាធ្វើឲ្យមនុស្សរួបរួមគ្នា។
value|valued|valued|ឲ្យតម្លៃ|I value your friendship.|ខ្ញុំឲ្យតម្លៃលើមិត្តភាពរបស់អ្នក។
vary|varied|varied|ខុសៗគ្នា|Prices vary by season.|តម្លៃប្រែប្រួលទៅតាមរដូវ។
witness|witnessed|witnessed|ឃើញផ្ទាល់ / ធ្វើជាសាក្សី|She witnessed the accident.|នាងបានឃើញគ្រោះថ្នាក់ផ្ទាល់ភ្នែក។
bother|bothered|bothered|រំខាន|Sorry to bother you.|សុំទោសដែលរំខានអ្នក។
browse|browsed|browsed|រកមើល|I browsed the website.|ខ្ញុំបានរកមើលវេបសាយ។
clarify|clarified|clarified|បំភ្លឺ|Can you clarify that?|តើអ្នកអាចបំភ្លឺរឿងនោះបានទេ?
compose|composed|composed|តែង (បទ / អត្ថបទ)|He composed a song.|គាត់បានតែងបទចម្រៀងមួយ។
conduct|conducted|conducted|ធ្វើ / ដឹកនាំ|They conducted a survey.|ពួកគេបានធ្វើការស្ទង់មតិ។
cope|coped|coped|ទប់ទល់|How do you cope with stress?|តើអ្នកទប់ទល់នឹងភាពតានតឹងដោយរបៀបណា?
dedicate|dedicated|dedicated|ឧទ្ទិស|She dedicated her life to teaching.|នាងបានឧទ្ទិសជីវិតរបស់នាងដើម្បីការបង្រៀន។
detect|detected|detected|រកឃើញ|The test detected the virus.|ការធ្វើតេស្តបានរកឃើញមេរោគ។
distribute|distributed|distributed|ចែកចាយ|They distributed food to the poor.|ពួកគេបានចែកចាយម្ហូបដល់អ្នកក្រីក្រ។
donate|donated|donated|បរិច្ចាគ|I donated blood.|ខ្ញុំបានបរិច្ចាគឈាម។
hesitate|hesitated|hesitated|ស្ទាក់ស្ទើរ|Don't hesitate to ask.|កុំស្ទាក់ស្ទើរក្នុងការសួរ។
inherit|inherited|inherited|ទទួលមរតក|He inherited the house.|គាត់បានទទួលមរតកផ្ទះ។
inspect|inspected|inspected|ត្រួតពិនិត្យ|They inspected the building.|ពួកគេបានត្រួតពិនិត្យអគារ។
interpret|interpreted|interpreted|បកស្រាយ / បកប្រែផ្ទាល់មាត់|She interpreted for the guests.|នាងបានបកប្រែផ្ទាល់មាត់ឲ្យភ្ញៀវ។
occupy|occupied|occupied|កាន់កាប់|This seat is occupied.|កៅអីនេះមានគេអង្គុយហើយ។
postpone|postponed|postponed|ពន្យារពេល|The match was postponed.|ការប្រកួតត្រូវបានពន្យារពេល។
prohibit|prohibited|prohibited|ហាមឃាត់|Smoking is prohibited.|ហាមឃាត់ការជក់បារី។
pursue|pursued|pursued|តាមរក / បន្ត|She pursued her dream.|នាងបានដេញតាមក្ដីស្រមៃរបស់នាង។
recruit|recruited|recruited|ជ្រើសរើសបុគ្គលិក|The company recruits graduates.|ក្រុមហ៊ុនជ្រើសរើសនិស្សិតដែលទើបបញ្ចប់ការសិក្សា។
rehearse|rehearsed|rehearsed|ហាត់សម|We rehearsed the play.|យើងបានហាត់សមល្ខោន។
arrest|arrested|arrested|ចាប់ខ្លួន|The police arrested the thief.|ប៉ូលិសបានចាប់ខ្លួនចោរ។
guarantee|guaranteed|guaranteed|ធានា|We guarantee quality.|យើងធានាគុណភាព។
quote|quoted|quoted|ដកស្រង់|She quoted a famous writer.|នាងបានដកស្រង់សម្ដីអ្នកនិពន្ធល្បីម្នាក់។
rate|rated|rated|វាយតម្លៃ (ផ្កាយ)|Please rate our app.|សូមវាយតម្លៃ App របស់យើង។
release|released|released|ចេញផ្សាយ / ដោះលែង|They released a new song.|ពួកគេបានចេញផ្សាយបទចម្រៀងថ្មីមួយ។
remark|remarked|remarked|កត់សម្គាល់ / និយាយ|He remarked that it was late.|គាត់បាននិយាយថាវាយឺតហើយ។
retain|retained|retained|រក្សាទុក|Retain your receipt.|រក្សាទុកវិក្កយបត្ររបស់អ្នក។
satisfy|satisfied|satisfied|ធ្វើឲ្យពេញចិត្ត|The food satisfied everyone.|ម្ហូបធ្វើឲ្យគ្រប់គ្នាពេញចិត្ត។
signal|signaled|signaled|ផ្ដល់សញ្ញា|The driver signaled left.|អ្នកបើកបរបានបើកភ្លើងសញ្ញាបត់ឆ្វេង។
sponsor|sponsored|sponsored|ឧបត្ថម្ភ|The bank sponsored the event.|ធនាគារបានឧបត្ថម្ភព្រឹត្តិការណ៍នេះ។
stress|stressed|stressed|សង្កត់ធ្ងន់ / តានតឹង|He stressed the importance of sleep.|គាត់បានសង្កត់ធ្ងន់លើសារៈសំខាន់នៃការគេង។
tolerate|tolerated|tolerated|អត់ធ្មត់ / ទ្រាំ|I can't tolerate noise.|ខ្ញុំមិនអាចទ្រាំនឹងសំឡេងរំខានបានទេ។
abuse|abused|abused|រំលោភបំពាន|Never abuse animals.|កុំធ្វើបាបសត្វ។
accompany|accompanied|accompanied|អមដំណើរ|I accompanied my mother to the hospital.|ខ្ញុំបានជូនម្ដាយទៅមន្ទីរពេទ្យ។
accuse|accused|accused|ចោទប្រកាន់|They accused him of lying.|ពួកគេបានចោទគាត់ថាកុហក។
acquire|acquired|acquired|ទទួលបាន|She acquired new skills.|នាងបានទទួលជំនាញថ្មីៗ។
address|addressed|addressed|និយាយទៅកាន់ / ដោះស្រាយ|The minister addressed the students.|រដ្ឋមន្ត្រីបានថ្លែងទៅកាន់សិស្ស។
advertise|advertised|advertised|ផ្សាយពាណិជ្ជកម្ម|They advertise on Facebook.|ពួកគេផ្សាយពាណិជ្ជកម្មនៅលើ Facebook។
alter|altered|altered|កែប្រែ|We altered our plans.|យើងបានកែប្រែផែនការរបស់យើង។
amaze|amazed|amazed|ធ្វើឲ្យភ្ញាក់ផ្អើល|The show amazed us.|ការសម្ដែងធ្វើឲ្យយើងភ្ញាក់ផ្អើល។
amuse|amused|amused|ធ្វើឲ្យសើច|The story amused the kids.|រឿងនោះធ្វើឲ្យក្មេងៗសើច។
appeal|appealed|appealed|អំពាវនាវ / ទាក់ទាញ|The idea appeals to me.|គំនិតនេះទាក់ទាញចិត្តខ្ញុំ។
applaud|applauded|applauded|ទះដៃអបអរ|The audience applauded.|ទស្សនិកជនបានទះដៃអបអរ។
assemble|assembled|assembled|ដំឡើង / ប្រមូលផ្ដុំ|Assemble the table.|ដំឡើងតុ។
assign|assigned|assigned|ចាត់តាំង / ដាក់ឲ្យ|The teacher assigned homework.|គ្រូបានដាក់កិច្ចការផ្ទះ។
associate|associated|associated|ភ្ជាប់ទំនាក់ទំនង|I associate this song with summer.|ខ្ញុំភ្ជាប់បទចម្រៀងនេះជាមួយរដូវក្ដៅ។
assure|assured|assured|ធានា|I assure you it's safe.|ខ្ញុំធានាថាវាមានសុវត្ថិភាព។
await|awaited|awaited|រង់ចាំ|We await your reply.|យើងរង់ចាំការឆ្លើយតបពីអ្នក។
award|awarded|awarded|ផ្ដល់រង្វាន់|She was awarded a prize.|នាងត្រូវបានផ្ដល់រង្វាន់មួយ។
balance|balanced|balanced|ធ្វើឲ្យមានតុល្យភាព|Balance work and life.|ធ្វើឲ្យមានតុល្យភាពរវាងការងារ និងជីវិត។
ban|banned|banned|ហាមឃាត់|Plastic bags are banned.|ថង់ប្លាស្ទិកត្រូវបានហាមឃាត់។
block|blocked|blocked|រាំងស្ទះ / បិទ|A tree blocked the road.|ដើមឈើមួយបានរាំងផ្លូវ។
boost|boosted|boosted|ជំរុញ / បង្កើន|Exercise boosts energy.|ការហាត់ប្រាណបង្កើនថាមពល។
brake|braked|braked|ជាន់ហ្វ្រាំង|He braked suddenly.|គាត់បានជាន់ហ្វ្រាំងភ្លាមៗ។
broaden|broadened|broadened|ពង្រីក|Travel broadens the mind.|ការធ្វើដំណើរពង្រីកចំណេះដឹង។
budget|budgeted|budgeted|ធ្វើថវិកា|Budget your money.|ធ្វើថវិកាសម្រាប់លុយរបស់អ្នក។
bully|bullied|bullied|សម្លុត / ធ្វើបាប|Never bully others.|កុំសម្លុតអ្នកដទៃ។
bump|bumped|bumped|ប៉ះ / បុក|I bumped into a friend.|ខ្ញុំបានជួបមិត្តភក្តិម្នាក់ដោយចៃដន្យ។
capture|captured|captured|ចាប់ / ថត|The photo captures the moment.|រូបថតនេះចាប់យកពេលវេលាដ៏ល្អ។
carve|carved|carved|ឆ្លាក់|They carved the stone.|ពួកគេបានឆ្លាក់ថ្ម។
cause|caused|caused|បង្ក|Smoking causes disease.|ការជក់បារីបង្កឲ្យមានជំងឺ។
cherish|cherished|cherished|ថ្នាក់ថ្នម|I cherish our memories.|ខ្ញុំថ្នាក់ថ្នមអនុស្សាវរីយ៍របស់យើង។
circle|circled|circled|គូសរង្វង់|Circle the correct answer.|គូសរង្វង់ចម្លើយត្រឹមត្រូវ។
classify|classified|classified|ចាត់ថ្នាក់|Classify the animals.|ចាត់ថ្នាក់សត្វ។
clear|cleared|cleared|សម្អាត / ធ្វើឲ្យទំនេរ|Clear the table.|រៀបចំតុឲ្យទំនេរ។
collapse|collapsed|collapsed|ដួលរលំ|The old bridge collapsed.|ស្ពានចាស់បានបាក់រលំ។
command|commanded|commanded|បញ្ជា|The officer commanded the soldiers.|មន្ត្រីបានបញ្ជាទាហាន។
commute|commuted|commuted|ធ្វើដំណើរទៅធ្វើការ|I commute by bus.|ខ្ញុំជិះឡានក្រុងទៅធ្វើការ។
compliment|complimented|complimented|សរសើរ|She complimented my dress.|នាងបានសរសើររ៉ូបរបស់ខ្ញុំ។
concern|concerned|concerned|ពាក់ព័ន្ធ / ធ្វើឲ្យបារម្ភ|The news concerns me.|ដំណឹងនេះធ្វើឲ្យខ្ញុំបារម្ភ។
confess|confessed|confessed|សារភាព|He confessed the truth.|គាត់បានសារភាពការពិត។
congratulate|congratulated|congratulated|អបអរសាទរ|We congratulated the winners.|យើងបានអបអរសាទរអ្នកឈ្នះ។
conserve|conserved|conserved|សន្សំ / អភិរក្ស|Conserve energy.|សន្សំថាមពល។
consist|consisted|consisted|ផ្សំឡើងពី|The team consists of ten people.|ក្រុមនេះមានសមាជិកដប់នាក់។
construct|constructed|constructed|សាងសង់|They constructed a bridge.|ពួកគេបានសាងសង់ស្ពានមួយ។
consume|consumed|consumed|ប្រើប្រាស់ / បរិភោគ|Cars consume fuel.|ឡានប្រើប្រាស់ប្រេងឥន្ធនៈ។
crush|crushed|crushed|កិន / ច្របាច់ឲ្យខ្ទេច|Crush the garlic.|បុកខ្ទឹមស។
cultivate|cultivated|cultivated|ដាំដុះ|Farmers cultivate rice.|កសិករដាំស្រូវ។
customize|customized|customized|កែតាមតម្រូវការ|Customize your profile.|កែប្រែប្រវត្តិរូបរបស់អ្នកតាមចិត្ត។
declare|declared|declared|ប្រកាស|They declared independence.|ពួកគេបានប្រកាសឯករាជ្យ។
decline|declined|declined|បដិសេធ / ថយចុះ|She declined the offer.|នាងបានបដិសេធការផ្ដល់ជូននោះ។
decrease|decreased|decreased|ថយចុះ|Prices decreased.|តម្លៃបានថយចុះ។
defeat|defeated|defeated|ផ្ដួល / ឈ្នះ|We defeated them 3–0.|យើងបានយកឈ្នះពួកគេ ៣–០។
defend|defended|defended|ការពារ|Defend your goal.|ការពារទីរបស់អ្នក។
desire|desired|desired|ប្រាថ្នា|They desire peace.|ពួកគេប្រាថ្នាសន្តិភាព។
devote|devoted|devoted|លះបង់ពេល|She devotes time to her family.|នាងចំណាយពេលវេលាសម្រាប់គ្រួសារ។
diagnose|diagnosed|diagnosed|ធ្វើរោគវិនិច្ឆ័យ|The doctor diagnosed the flu.|វេជ្ជបណ្ឌិតបានធ្វើរោគវិនិច្ឆ័យថាជាជំងឺផ្ដាសាយ។
dial|dialed|dialed|ចុចលេខទូរស័ព្ទ|Dial 119 for an ambulance.|ចុចលេខ ១១៩ ដើម្បីហៅឡានពេទ្យ។
digest|digested|digested|រំលាយ (អាហារ)|It takes time to digest food.|ការរំលាយអាហារត្រូវការពេលវេលា។
discount|discounted|discounted|បញ្ចុះតម្លៃ|They discounted all shoes.|ពួកគេបានបញ្ចុះតម្លៃស្បែកជើងទាំងអស់។
dismiss|dismissed|dismissed|បណ្ដេញ / មិនអើពើ|The teacher dismissed the class.|គ្រូបានឲ្យសិស្សចេញពីថ្នាក់។
dissolve|dissolved|dissolved|រលាយ|Sugar dissolves in water.|ស្កររលាយក្នុងទឹក។
distinguish|distinguished|distinguished|បែងចែក|Can you distinguish the twins?|តើអ្នកអាចបែងចែកកូនភ្លោះទាំងពីរបានទេ?
distract|distracted|distracted|រំខានការផ្ដោតអារម្មណ៍|Phones distract students.|ទូរស័ព្ទរំខានការផ្ដោតអារម្មណ៍របស់សិស្ស។
double|doubled|doubled|កើនទ្វេដង|Prices doubled.|តម្លៃបានកើនទ្វេដង។
drain|drained|drained|បង្ហូរ|Drain the water.|បង្ហូរទឹកចេញ។
dress|dressed|dressed|ស្លៀកពាក់|Get dressed quickly.|ស្លៀកពាក់ឲ្យលឿន។
drip|dripped|dripped|ស្រក់|Water is dripping.|ទឹកកំពុងស្រក់។
eliminate|eliminated|eliminated|លុបបំបាត់|Eliminate the errors.|លុបកំហុសចេញ។
embarrass|embarrassed|embarrassed|ធ្វើឲ្យខ្មាស|Don't embarrass me.|កុំធ្វើឲ្យខ្ញុំខ្មាសគេ។
embrace|embraced|embraced|ឱប / ទទួលយក|We embrace new ideas.|យើងទទួលយកគំនិតថ្មីៗ។
enlarge|enlarged|enlarged|ពង្រីក|Enlarge the photo.|ពង្រីករូបថត។
envy|envied|envied|ច្រណែន|I envy your talent.|ខ្ញុំច្រណែនទេពកោសល្យរបស់អ្នក។
erase|erased|erased|លុប|Erase the board.|លុបក្ដារខៀន។
evolve|evolved|evolved|វិវត្ត|Languages evolve over time.|ភាសាវិវត្តទៅតាមពេលវេលា។
exaggerate|exaggerated|exaggerated|និយាយបំផ្លើស|Don't exaggerate.|កុំនិយាយបំផ្លើស។
exclude|excluded|excluded|មិនរាប់បញ្ចូល|The price excludes tax.|តម្លៃនេះមិនរួមបញ្ចូលពន្ធទេ។
exhibit|exhibited|exhibited|តាំងពិព័រណ៍|The museum exhibits old statues.|សារមន្ទីរតាំងបង្ហាញរូបចម្លាក់បុរាណ។
fade|faded|faded|ស្រអាប់ / រសាត់|The color faded.|ពណ៌បានស្រអាប់។
feature|featured|featured|មានបង្ហាញ|The film features local actors.|ភាពយន្តនេះមានតួសម្ដែងក្នុងស្រុក។
filter|filtered|filtered|ច្រោះ|Filter the water.|ច្រោះទឹក។
flash|flashed|flashed|បញ្ចេញពន្លឺភ្លែត|The light flashed.|ភ្លើងបានភ្លឺភ្លែត។
flood|flooded|flooded|ជន់លិច|The river flooded the village.|ទន្លេបានជន់លិចភូមិ។
forward|forwarded|forwarded|បញ្ជូនបន្ត|Forward me the email.|បញ្ជូនអ៊ីមែលបន្តមកខ្ញុំ។
frown|frowned|frowned|ចងចិញ្ចើម|She frowned at me.|នាងបានចងចិញ្ចើមដាក់ខ្ញុំ។
fulfill|fulfilled|fulfilled|សម្រេច / បំពេញ|He fulfilled his dream.|គាត់បានសម្រេចក្ដីស្រមៃរបស់គាត់។
gamble|gambled|gambled|លេងល្បែង|Never gamble your money.|កុំយកលុយទៅលេងល្បែង។
glance|glanced|glanced|ក្រឡេកមើល|She glanced at her watch.|នាងបានក្រឡេកមើលនាឡិការបស់នាង។
govern|governed|governed|គ្រប់គ្រង (ប្រទេស)|Who governs the city?|តើនរណាគ្រប់គ្រងទីក្រុងនេះ?
grade|graded|graded|ដាក់ពិន្ទុ|The teacher graded our tests.|គ្រូបានដាក់ពិន្ទុលើការប្រឡងរបស់យើង។
grant|granted|granted|ផ្ដល់ (អាហារូបករណ៍)|They granted her a scholarship.|ពួកគេបានផ្ដល់អាហារូបករណ៍ដល់នាង។
hack|hacked|hacked|លួចចូលប្រព័ន្ធ|Someone hacked my account.|មាននរណាម្នាក់បានលួចចូលគណនីខ្ញុំ។
head|headed|headed|ធ្វើដំណើរទៅ / ដឹកនាំ|We headed home.|យើងបានធ្វើដំណើរត្រឡប់ទៅផ្ទះ។
hum|hummed|hummed|ច្រៀងខ្សឹបៗ|She hummed a song.|នាងបានច្រៀងខ្សឹបៗមួយបទ។
imitate|imitated|imitated|ធ្វើត្រាប់តាម|Children imitate their parents.|កុមារធ្វើត្រាប់តាមឪពុកម្ដាយ។
injure|injured|injured|ធ្វើឲ្យរបួស|He injured his leg.|គាត់បានរបួសជើង។
insert|inserted|inserted|បញ្ចូល|Insert your card.|បញ្ចូលកាតរបស់អ្នក។
insult|insulted|insulted|ប្រមាថ|Don't insult people.|កុំប្រមាថមនុស្ស។
insure|insured|insured|ធានារ៉ាប់រង|Insure your car.|ទិញធានារ៉ាប់រងឡានរបស់អ្នក។
issue|issued|issued|ចេញ (លិខិត)|The office issued my passport.|ការិយាល័យបានចេញលិខិតឆ្លងដែនឲ្យខ្ញុំ។
jog|jogged|jogged|រត់ហាត់ប្រាណ|I jog every morning.|ខ្ញុំរត់ហាត់ប្រាណរៀងរាល់ព្រឹក។
knit|knitted|knitted|ចាក់ (អំបោះ)|Grandma knits sweaters.|យាយចាក់អាវរងា។
label|labeled|labeled|បិទស្លាក|Label the boxes.|បិទស្លាកលើប្រអប់។
lack|lacked|lacked|ខ្វះ|He lacks experience.|គាត់ខ្វះបទពិសោធន៍។
link|linked|linked|ភ្ជាប់|Link your bank account.|ភ្ជាប់គណនីធនាគាររបស់អ្នក។
loosen|loosened|loosened|បន្ធូរ|Loosen your belt.|បន្ធូរខ្សែក្រវាត់របស់អ្នក។
mail|mailed|mailed|ផ្ញើតាមប្រៃសណីយ៍|I mailed the letter.|ខ្ញុំបានផ្ញើសំបុត្រតាមប្រៃសណីយ៍។
manufacture|manufactured|manufactured|ផលិត|They manufacture clothes.|ពួកគេផលិតសម្លៀកបំពាក់។
master|mastered|mastered|ចេះស្ទាត់|She mastered English.|នាងចេះភាសាអង់គ្លេសស្ទាត់ជំនាញ។
meditate|meditated|meditated|ធ្វើសមាធិ|Monks meditate every morning.|ព្រះសង្ឃធ្វើសមាធិរៀងរាល់ព្រឹក។
merge|merged|merged|បញ្ចូលគ្នា|The two companies merged.|ក្រុមហ៊ុនទាំងពីរបានរួមបញ្ចូលគ្នា។
migrate|migrated|migrated|ធ្វើចំណាកស្រុក|Birds migrate in winter.|សត្វស្លាបធ្វើចំណាកស្រុកក្នុងរដូវរងា។
minimize|minimized|minimized|កាត់បន្ថយ / បង្រួម|Minimize the window.|បង្រួមផ្ទាំងបង្អួច។
modify|modified|modified|កែសម្រួល|Modify the design.|កែសម្រួលការរចនា។
monitor|monitored|monitored|តាមដាន|Doctors monitor the patient.|វេជ្ជបណ្ឌិតតាមដានអ្នកជំងឺ។
multiply|multiplied|multiplied|គុណ|Multiply 3 by 4.|គុណ ៣ នឹង ៤។
notify|notified|notified|ជូនដំណឹង|Notify me by email.|ជូនដំណឹងមកខ្ញុំតាមអ៊ីមែល។
object|objected|objected|ជំទាស់|Nobody objected.|គ្មាននរណាម្នាក់ជំទាស់ទេ។
offend|offended|offended|ធ្វើឲ្យអន់ចិត្ត|I didn't mean to offend you.|ខ្ញុំមិនមានបំណងធ្វើឲ្យអ្នកអន់ចិត្តទេ។
oppose|opposed|opposed|ប្រឆាំង|Many people oppose the plan.|មនុស្សជាច្រើនប្រឆាំងនឹងផែនការនេះ។
overtake|overtook|overtaken|វ៉ាជែង|Don't overtake on a bend.|កុំវ៉ាជែងនៅផ្លូវកោង។
plug|plugged|plugged|ដោត|Plug in the charger.|ដោតឆ្នាំងសាក។
polish|polished|polished|ដុសខាត់|Polish your shoes.|ដុសខាត់ស្បែកជើងរបស់អ្នក។
pollute|polluted|polluted|បំពុល|Factories pollute the river.|រោងចក្របំពុលទន្លេ។
possess|possessed|possessed|មាន / កាន់កាប់|He possesses great skill.|គាត់មានជំនាញខ្ពស់។
praise|praised|praised|សរសើរ|The teacher praised her.|គ្រូបានសរសើរនាង។
prescribe|prescribed|prescribed|ចេញវេជ្ជបញ្ជា|The doctor prescribed medicine.|វេជ្ជបណ្ឌិតបានចេញវេជ្ជបញ្ជាឲ្យថ្នាំ។
press|pressed|pressed|ចុច / សង្កត់|Press the button.|ចុចប៊ូតុង។
program|programmed|programmed|សរសេរកម្មវិធី|She programmed a robot.|នាងបានសរសេរកម្មវិធីឲ្យរ៉ូបូតមួយ។
progress|progressed|progressed|រីកចម្រើន|His English progressed quickly.|ភាសាអង់គ្លេសរបស់គាត់រីកចម្រើនយ៉ាងលឿន។
protest|protested|protested|តវ៉ា|Workers protested.|កម្មករបានធ្វើបាតុកម្មតវ៉ា។
pump|pumped|pumped|បូម|Pump up the tire.|បូមខ្យល់កង់។
punch|punched|punched|ដាល់|He punched the bag.|គាត់បានដាល់បាវ។
question|questioned|questioned|សួរចម្លើយ / សង្ស័យ|Police questioned him.|ប៉ូលិសបានសួរចម្លើយគាត់។
queue|queued|queued|តម្រង់ជួរ|We queued for tickets.|យើងបានតម្រង់ជួរទិញសំបុត្រ។
recall|recalled|recalled|នឹកឃើញ|I can't recall his name.|ខ្ញុំនឹកមិនឃើញឈ្មោះគាត់ទេ។
recharge|recharged|recharged|សាកថ្មឡើងវិញ|Recharge your battery.|សាកថ្មរបស់អ្នកឡើងវិញ។
refresh|refreshed|refreshed|ធ្វើឲ្យស្រស់ / ផ្ទុកឡើងវិញ|Refresh the page.|ផ្ទុកទំព័រឡើងវិញ។
refund|refunded|refunded|សងប្រាក់វិញ|They refunded my money.|ពួកគេបានសងលុយខ្ញុំវិញ។
relieve|relieved|relieved|បន្ធូរ|This medicine relieves pain.|ថ្នាំនេះបន្ធូរការឈឺចាប់។
renew|renewed|renewed|បន្តសុពលភាព|Renew your passport.|បន្តសុពលភាពលិខិតឆ្លងដែនរបស់អ្នក។
repay|repaid|repaid|សងវិញ|I will repay you.|ខ្ញុំនឹងសងអ្នកវិញ។
resemble|resembled|resembled|ស្រដៀង|She resembles her mother.|នាងមានមុខស្រដៀងម្ដាយរបស់នាង។
resist|resisted|resisted|ទប់ទល់|I can't resist chocolate.|ខ្ញុំមិនអាចទប់ចិត្តនឹងសូកូឡាបានទេ។
restrict|restricted|restricted|ដាក់កម្រិត|Access is restricted.|ការចូលត្រូវបានដាក់កម្រិត។
revise|revised|revised|រំលឹកមេរៀន / កែប្រែ|Revise for the exam.|រំលឹកមេរៀនសម្រាប់ការប្រឡង។
roast|roasted|roasted|អាំង / លីង|Roast the chicken.|អាំងសាច់មាន់។
rotate|rotated|rotated|បង្វិល|The earth rotates.|ផែនដីបង្វិលជុំវិញខ្លួនឯង។
ruin|ruined|ruined|បំផ្លាញ|The rain ruined our picnic.|ភ្លៀងបានធ្វើឲ្យការដើរលេងរបស់យើងខូច។
sacrifice|sacrificed|sacrificed|លះបង់|Parents sacrifice a lot.|ឪពុកម្ដាយលះបង់ច្រើនណាស់។
scold|scolded|scolded|ស្ដីបន្ទោស|Mom scolded me.|ម្ដាយបានស្ដីបន្ទោសខ្ញុំ។
seal|sealed|sealed|បិទជិត|Seal the envelope.|បិទស្រោមសំបុត្រឲ្យជិត។
shape|shaped|shaped|បង្កើតរាង|Shape the dough into balls.|បង្កើតម្សៅឲ្យជារាងមូល។
shock|shocked|shocked|ធ្វើឲ្យតក់ស្លុត|The news shocked us.|ដំណឹងនេះធ្វើឲ្យយើងតក់ស្លុត។
shrug|shrugged|shrugged|ញាក់ស្មា|He shrugged.|គាត់បានញាក់ស្មា។
simplify|simplified|simplified|សម្រួលឲ្យងាយ|Simplify the sentence.|សម្រួលប្រយោគឲ្យងាយ។
sketch|sketched|sketched|គូរព្រាង|She sketched a house.|នាងបានគូរព្រាងផ្ទះមួយ។
slice|sliced|sliced|ហាន់ជាចំណិត|Slice the bread.|ហាន់នំប៉័ងជាចំណិត។
soak|soaked|soaked|ត្រាំ|Soak the rice overnight.|ត្រាំអង្ករមួយយប់។
stack|stacked|stacked|ដាក់ត្រួតគ្នា|Stack the chairs.|ដាក់កៅអីត្រួតគ្នា។
starve|starved|starved|អត់ឃ្លាន|Many animals starve in winter.|សត្វជាច្រើនអត់ឃ្លានក្នុងរដូវរងា។
strengthen|strengthened|strengthened|ពង្រឹង|Exercise strengthens muscles.|ការហាត់ប្រាណពង្រឹងសាច់ដុំ។
subscribe|subscribed|subscribed|ជាវ / Subscribe|Subscribe to our channel.|សូម Subscribe ឆានែលរបស់យើង។
subtract|subtracted|subtracted|ដក (គណិត)|Subtract 5 from 10.|ដក ៥ ពី ១០។
supervise|supervised|supervised|មើលការខុសត្រូវ|She supervises ten workers.|នាងមើលការខុសត្រូវលើកម្មករដប់នាក់។
surf|surfed|surfed|ជិះរលក / មើលអ៊ីនធឺណិត|I surf the internet at night.|ខ្ញុំមើលអ៊ីនធឺណិតនៅពេលយប់។
suspect|suspected|suspected|សង្ស័យ|Police suspect him.|ប៉ូលិសសង្ស័យគាត់។
swap|swapped|swapped|ប្ដូរគ្នា|Let's swap seats.|តោះប្ដូរកៅអីគ្នា។
tick|ticked|ticked|គូសធីក|Tick the correct box.|គូសធីកប្រអប់ដែលត្រឹមត្រូវ។
tighten|tightened|tightened|រឹតបន្តឹង|Tighten the screw.|រឹតខ្ចៅឲ្យតឹង។
toss|tossed|tossed|បោះ (កាក់)|Toss a coin.|បោះកាក់។
track|tracked|tracked|តាមដាន|Track your order online.|តាមដានការកុម្ម៉ង់របស់អ្នកតាមអនឡាញ។
twist|twisted|twisted|រមួល|I twisted my ankle.|ខ្ញុំបានរមួលកជើង។
underline|underlined|underlined|គូសបន្ទាត់ពីក្រោម|Underline the verbs.|គូសបន្ទាត់ពីក្រោម verb។
undo|undid|undone|ធ្វើវិញ (Undo)|Undo the last change.|ត្រឡប់ការផ្លាស់ប្ដូរចុងក្រោយវិញ។
unplug|unplugged|unplugged|ដកដោតចេញ|Unplug the TV.|ដកខ្សែទូរទស្សន៍ចេញ។
urge|urged|urged|ជំរុញ / អំពាវនាវ|Doctors urge people to exercise.|វេជ្ជបណ្ឌិតជំរុញឲ្យមនុស្សហាត់ប្រាណ។
vanish|vanished|vanished|បាត់ស្រមោល|The magician vanished.|អ្នកលេងប៉ាហីបានបាត់ស្រមោល។
view|viewed|viewed|មើល / ទស្សនា|Millions viewed the video.|មនុស្សរាប់លាននាក់បានមើលវីដេអូនេះ។
weaken|weakened|weakened|ធ្វើឲ្យខ្សោយ|Illness weakened him.|ជំងឺបានធ្វើឲ្យគាត់ខ្សោយ។
widen|widened|widened|ពង្រីក (ផ្លូវ)|They widened the road.|ពួកគេបានពង្រីកផ្លូវ។
dine|dined|dined|ពិសាអាហារ|We dined at a nice restaurant.|យើងបានពិសាអាហារនៅភោជនីយដ្ឋានល្អមួយ។
babysit|babysat|babysat|មើលក្មេង|I babysit my cousin.|ខ្ញុំមើលប្អូនជីដូនមួយរបស់ខ្ញុំ។
bless|blessed|blessed|ប្រទានពរ|The monks blessed the new house.|ព្រះសង្ឃបានប្រទានពរដល់ផ្ទះថ្មី។
chant|chanted|chanted|សូត្រ|Monks chant in the morning.|ព្រះសង្ឃសូត្រមន្តនៅពេលព្រឹក។
paste|pasted|pasted|បិទភ្ជាប់ (Paste)|Copy and paste the text.|ចម្លង ហើយបិទភ្ជាប់អត្ថបទ។
reboot|rebooted|rebooted|បើកឡើងវិញ (Restart)|Reboot your computer.|បើកកុំព្យូទ័ររបស់អ្នកឡើងវិញ។
tag|tagged|tagged|ដាក់ tag|Tag your friends in the photo.|ដាក់ tag មិត្តភក្តិរបស់អ្នកក្នុងរូបថត។
upgrade|upgraded|upgraded|ដំឡើងកម្រិត|Upgrade your phone.|ដំឡើងកម្រិតទូរស័ព្ទរបស់អ្នក។
outgrow|outgrew|outgrown|ធំហួសខ្នាត|Kids outgrow their clothes fast.|ក្មេងៗធំលឿនហួសខ្នាតសម្លៀកបំពាក់។
rewrite|rewrote|rewritten|សរសេរឡើងវិញ|Rewrite your essay.|សរសេរតែងសេចក្ដីរបស់អ្នកឡើងវិញ។
retell|retold|retold|និទានឡើងវិញ|Retell the story in your own words.|និទានរឿងឡើងវិញតាមពាក្យរបស់អ្នក។
rebuild|rebuilt|rebuilt|សាងសង់ឡើងវិញ|They rebuilt the school.|ពួកគេបានសាងសង់សាលាឡើងវិញ។
mislead|misled|misled|បំភាន់|The ad misled customers.|ការផ្សាយពាណិជ្ជកម្មបានបំភាន់អតិថិជន។
overhear|overheard|overheard|លួចឮ|I overheard their talk.|ខ្ញុំបានលួចឮការសន្ទនារបស់ពួកគេ។
bid|bid|bid|ដេញថ្លៃ|She bid $50 for the painting.|នាងបានដេញថ្លៃ ៥០ ដុល្លារសម្រាប់គំនូរនោះ។
cling|clung|clung|តោងជាប់|The baby clung to her mother.|ទារកបានតោងម្ដាយជាប់។
strive|strove|striven|ខិតខំប្រឹងប្រែង|We strive to improve.|យើងខិតខំប្រឹងប្រែងដើម្បីកែលម្អ។
stink|stank|stunk|ធុំក្លិនស្អុយ|The trash stinks.|ធុងសំរាមធុំក្លិនស្អុយ។
sow|sowed|sown|សាបព្រោះ|Farmers sow rice seeds.|កសិករសាបព្រោះគ្រាប់ពូជស្រូវ។
swell|swelled|swollen|ហើម|My foot swelled up.|ជើងរបស់ខ្ញុំបានហើម។
bind|bound|bound|ចង|Bind the books together.|ចងសៀវភៅបញ្ចូលគ្នា។
undergo|underwent|undergone|ឆ្លងកាត់|He underwent surgery.|គាត់បានឆ្លងកាត់ការវះកាត់។
adore|adored|adored|ស្រឡាញ់ខ្លាំង|She adores her cat.|នាងស្រឡាញ់ឆ្មារបស់នាងខ្លាំងណាស់។
alert|alerted|alerted|ព្រមាន / ជូនដំណឹង|The app alerts you.|App នេះជូនដំណឹងដល់អ្នក។
choke|choked|choked|ឈ្លក់|He choked on a fish bone.|គាត់បានឈ្លក់ឆ្អឹងត្រី។
clip|clipped|clipped|ខ្ទាស់ / កាត់|Clip the papers together.|ខ្ទាស់ក្រដាសបញ្ចូលគ្នា។
crave|craved|craved|ចង់បានខ្លាំង|I crave sweets.|ខ្ញុំចង់ញ៉ាំបង្អែមខ្លាំងណាស់។
cuddle|cuddled|cuddled|ឱបថ្នម|She cuddled the puppy.|នាងបានឱបថ្នមកូនឆ្កែ។
debug|debugged|debugged|រកកំហុសកូដ|He debugged the program.|គាត់បានរកកំហុសក្នុងកម្មវិធី។
dodge|dodged|dodged|គេចចៀស|He dodged the ball.|គាត់បានគេចបាល់។
doze|dozed|dozed|ងងុយ / គេងស្រុត|I dozed off in class.|ខ្ញុំបានងងុយដេកក្នុងថ្នាក់។
flip|flipped|flipped|ត្រឡប់|Flip the pancake.|ត្រឡប់នំខេក។
giggle|giggled|giggled|សើចគិកៗ|The girls giggled.|ក្មេងស្រីៗបានសើចគិកៗ។
glue|glued|glued|បិទកាវ|Glue the pictures.|បិទរូបភាពដោយកាវ។
gossip|gossiped|gossiped|និយាយដើមគេ|Don't gossip.|កុំនិយាយដើមគេ។
hike|hiked|hiked|ដើរឡើងភ្នំ|We hiked in Mondulkiri.|យើងបានដើរឡើងភ្នំនៅមណ្ឌលគិរី។
hop|hopped|hopped|លោតជើងម្ខាង|The rabbit hopped away.|ទន្សាយបានលោតចេញទៅ។
inhale|inhaled|inhaled|ស្រូបចូល|Inhale deeply.|ស្រូបខ្យល់ចូលឲ្យជ្រៅ។
exhale|exhaled|exhaled|ដកដង្ហើមចេញ|Exhale slowly.|ដកដង្ហើមចេញយឺតៗ។
irrigate|irrigated|irrigated|ស្រោចស្រព|Farmers irrigate their fields.|កសិករស្រោចស្រពស្រែរបស់ពួកគេ។
march|marched|marched|ដើរក្បួន|Soldiers marched.|ទាហានបានដើរក្បួន។
mop|mopped|mopped|ជូតឥដ្ឋ|Mop the floor.|ជូតឥដ្ឋ។
navigate|navigated|navigated|រុករកផ្លូវ|Use the map to navigate.|ប្រើផែនទីដើម្បីរកផ្លូវ។
nap|napped|napped|គេងថ្ងៃ|I napped after lunch.|ខ្ញុំបានគេងថ្ងៃក្រោយអាហារថ្ងៃត្រង់។
pat|patted|patted|ទះថ្នមៗ|He patted the dog.|គាត់បានទះថ្នមៗលើឆ្កែ។
pedal|pedaled|pedaled|ធាក់កង់|Pedal faster!|ធាក់កង់ឲ្យលឿនជាងនេះ!
rearrange|rearranged|rearranged|រៀបចំឡើងវិញ|Rearrange the furniture.|រៀបចំគ្រឿងសង្ហារិមឡើងវិញ។
recite|recited|recited|សូត្រ / ថាមាត់ទទេ|Recite the poem.|សូត្រកំណាព្យ។
refill|refilled|refilled|បំពេញម្ដងទៀត|Refill my glass, please.|សូមចាក់បន្ថែមឲ្យពេញកែវខ្ញុំ។
reheat|reheated|reheated|កម្ដៅឡើងវិញ|Reheat the soup.|កម្ដៅសម្លឡើងវិញ។
rewind|rewound|rewound|ចាក់ថយក្រោយ|Rewind the video.|ចាក់វីដេអូថយក្រោយ។
scrub|scrubbed|scrubbed|ដុសឲ្យស្អាត|Scrub the pot.|ដុសឆ្នាំងឲ្យស្អាត។
shower|showered|showered|ងូតទឹកផ្កាឈូក|I showered quickly.|ខ្ញុំបានងូតទឹកយ៉ាងលឿន។
sneak|sneaked|sneaked|លបចេញ / លបចូល|He sneaked out.|គាត់បានលបចេញទៅក្រៅ។
splash|splashed|splashed|ខ្ទាតទឹក|Kids splashed in the pool.|ក្មេងៗខ្ទាតទឹកលេងក្នុងអាង។
sprint|sprinted|sprinted|រត់លឿនបំផុត|He sprinted to the bus.|គាត់បានរត់យ៉ាងលឿនទៅឡានក្រុង។
steam|steamed|steamed|ចំហុយ|Steam the fish.|ចំហុយត្រី។
stumble|stumbled|stumbled|ជំពប់ដួល|I stumbled on the stairs.|ខ្ញុំបានជំពប់ដួលលើជណ្ដើរ។
sweat|sweated|sweated|បែកញើស|I sweat a lot in April.|ខ្ញុំបែកញើសច្រើននៅខែមេសា។
tickle|tickled|tickled|ចាក់ក្លៀក|Don't tickle me!|កុំចាក់ក្លៀកខ្ញុំ!
toast|toasted|toasted|អាំងនំប៉័ង / លើកកែវជូនពរ|Toast the bread.|អាំងនំប៉័ង។
vacuum|vacuumed|vacuumed|បូមធូលី|Vacuum the carpet.|បូមធូលីលើកម្រាល។
absorb|absorbed|absorbed|ស្រូប|Plants absorb water.|រុក្ខជាតិស្រូបទឹក។
advance|advanced|advanced|រីកចម្រើន / ឈានទៅមុខ|Technology advances quickly.|បច្ចេកវិទ្យារីកចម្រើនយ៉ាងលឿន។
assess|assessed|assessed|វាយតម្លៃ|Teachers assess students.|គ្រូវាយតម្លៃសិស្ស។
blend|blended|blended|លាយបញ្ចូលគ្នា|Blend the fruit with ice.|ក្រឡុកផ្លែឈើជាមួយទឹកកក។
blossom|blossomed|blossomed|រីក (ផ្កា)|The flowers blossomed.|ផ្កាបានរីក។
boast|boasted|boasted|អួត|He boasts about his car.|គាត់អួតពីឡានរបស់គាត់។
brighten|brightened|brightened|ធ្វើឲ្យភ្លឺ|Flowers brighten the room.|ផ្កាធ្វើឲ្យបន្ទប់ភ្លឺស្វាង។
collaborate|collaborated|collaborated|សហការ|We collaborated on the project.|យើងបានសហការគ្នាលើគម្រោង។
comprehend|comprehended|comprehended|យល់|I couldn't comprehend the lecture.|ខ្ញុំមិនអាចយល់ការបង្រៀនបានទេ។
dictate|dictated|dictated|អានឲ្យសរសេរ|The teacher dictated a sentence.|គ្រូបានអានប្រយោគមួយឲ្យសរសេរតាម។
discourage|discouraged|discouraged|បន្ទាបទឹកចិត្ត|Don't discourage him.|កុំបន្ទាបទឹកចិត្តគាត់។
dump|dumped|dumped|ចោល|Don't dump trash in the river.|កុំចាក់សំរាមចូលទន្លេ។
dye|dyed|dyed|ជ្រលក់ពណ៌|She dyed her hair.|នាងបានជ្រលក់ពណ៌សក់។
evacuate|evacuated|evacuated|ជម្លៀស|They evacuated the building.|ពួកគេបានជម្លៀសមនុស្សចេញពីអគារ។
excel|excelled|excelled|ពូកែលើស|She excels at math.|នាងពូកែគណិតវិទ្យាខ្លាំង។
expire|expired|expired|ផុតកំណត់|My visa expired.|ទិដ្ឋាការរបស់ខ្ញុំបានផុតកំណត់។
explode|exploded|exploded|ផ្ទុះ|The tire exploded.|កង់ឡានបានផ្ទុះ។
fund|funded|funded|ផ្ដល់មូលនិធិ|The bank funded the project.|ធនាគារបានផ្ដល់មូលនិធិដល់គម្រោង។
grin|grinned|grinned|ញញឹមធំ|He grinned at me.|គាត់បានញញឹមធំដាក់ខ្ញុំ។
hint|hinted|hinted|ប្រាប់តម្រុយ|She hinted at the answer.|នាងបានប្រាប់តម្រុយនៃចម្លើយ។
instruct|instructed|instructed|ណែនាំ / បង្គាប់|The coach instructed the players.|គ្រូបង្វឹកបានណែនាំកីឡាករ។
interact|interacted|interacted|ធ្វើអន្តរកម្ម|Kids interact with the app.|ក្មេងៗធ្វើអន្តរកម្មជាមួយ App។
mourn|mourned|mourned|កាន់ទុក្ខ|They mourned their grandfather.|ពួកគេកាន់ទុក្ខជីតារបស់ពួកគេ។
narrate|narrated|narrated|និទាន|She narrated the story.|នាងបាននិទានរឿង។
neglect|neglected|neglected|ធ្វេសប្រហែស|Don't neglect your health.|កុំធ្វេសប្រហែសសុខភាពរបស់អ្នក។
outline|outlined|outlined|គូសបញ្ជាក់ចំណុចសំខាន់|Outline your essay first.|គូសចំណុចសំខាន់ៗនៃតែងសេចក្ដីរបស់អ្នកជាមុនសិន។
overflow|overflowed|overflowed|ហៀរ|The river overflowed.|ទន្លេបានហៀរ។
paddle|paddled|paddled|ចែវ|We paddled the boat.|យើងបានចែវទូក។
panic|panicked|panicked|ភ័យស្លន់ស្លោ|Don't panic.|កុំភ័យស្លន់ស្លោ។
pinch|pinched|pinched|ក្ដិច|Don't pinch me.|កុំក្ដិចខ្ញុំ។
proofread|proofread|proofread|ពិនិត្យអក្ខរាវិរុទ្ធ|Proofread your essay.|ពិនិត្យអក្ខរាវិរុទ្ធតែងសេចក្ដីរបស់អ្នក។
reassure|reassured|reassured|ធ្វើឲ្យធូរចិត្ត|The doctor reassured me.|វេជ្ជបណ្ឌិតបានធ្វើឲ្យខ្ញុំធូរចិត្ត។
renovate|renovated|renovated|ជួសជុលកែលម្អ|They renovated the house.|ពួកគេបានជួសជុលកែលម្អផ្ទះ។
replay|replayed|replayed|ចាក់ម្ដងទៀត|Replay the song.|ចាក់បទចម្រៀងម្ដងទៀត។
restart|restarted|restarted|ចាប់ផ្ដើមឡើងវិញ|Restart the game.|ចាប់ផ្ដើមហ្គេមឡើងវិញ។
reunite|reunited|reunited|ជួបជុំគ្នាវិញ|The family reunited.|ក្រុមគ្រួសារបានជួបជុំគ្នាវិញ។
rust|rusted|rusted|ច្រេះ|The old bike rusted.|កង់ចាស់បានច្រេះ។
scatter|scattered|scattered|ខ្ចាត់ខ្ចាយ|Toys were scattered everywhere.|ប្រដាប់ក្មេងលេងខ្ចាត់ខ្ចាយពាសពេញ។
sense|sensed|sensed|ដឹងដោយអារម្មណ៍|I sensed danger.|ខ្ញុំបានដឹងថាមានគ្រោះថ្នាក់។
shift|shifted|shifted|ផ្លាស់ / ប្ដូរ|The wind shifted.|ខ្យល់បានប្ដូរទិស។
skate|skated|skated|ជិះស្គី|We skated in the park.|យើងបានជិះស្គីនៅសួនច្បារ។
slap|slapped|slapped|ទះកំផ្លៀង|She slapped him.|នាងបានទះកំផ្លៀងគាត់។
smash|smashed|smashed|បំបែកខ្ទេច|He smashed the glass.|គាត់បានបំបែកកែវខ្ទេច។
snatch|snatched|snatched|ឆក់|A thief snatched her bag.|ចោរម្នាក់បានឆក់កាបូបរបស់នាង។
spray|sprayed|sprayed|បាញ់ (ទឹក / ថ្នាំ)|Spray water on the plants.|បាញ់ទឹកលើដើមឈើ។
sprinkle|sprinkled|sprinkled|រោយ|Sprinkle some salt.|រោយអំបិលបន្តិច។
stain|stained|stained|ប្រឡាក់|Coffee stained my shirt.|កាហ្វេបានប្រឡាក់អាវរបស់ខ្ញុំ។
stamp|stamped|stamped|បោះត្រា|They stamped my passport.|ពួកគេបានបោះត្រាលើលិខិតឆ្លងដែនរបស់ខ្ញុំ។
stroll|strolled|strolled|ដើរលេងសប្បាយ|We strolled along the riverside.|យើងបានដើរលេងតាមមាត់ទន្លេ។
struggle|struggled|struggled|តស៊ូ / ពិបាក|He struggled with math.|គាត់ពិបាកនឹងគណិតវិទ្យា។
suck|sucked|sucked|បឺត|The baby sucked her thumb.|ទារកបានបឺតមេដៃរបស់នាង។
suit|suited|suited|សម|That color suits you.|ពណ៌នោះសមនឹងអ្នកណាស់។
thrive|thrived|thrived|រីកចម្រើនខ្លាំង|Small businesses thrive here.|អាជីវកម្មខ្នាតតូចរីកចម្រើននៅទីនេះ។
trap|trapped|trapped|ជាប់អន្ទាក់|The cat was trapped in the tree.|ឆ្មាបានជាប់នៅលើដើមឈើ។
tremble|trembled|trembled|ញ័រ|Her hands trembled.|ដៃរបស់នាងញ័រ។
trim|trimmed|trimmed|កាត់ឲ្យស្អាត|Trim your nails.|កាត់ក្រចករបស់អ្នក។
unwrap|unwrapped|unwrapped|ស្រាយ (កញ្ចប់)|Unwrap your gift.|ស្រាយកាដូរបស់អ្នក។
wag|wagged|wagged|គ្រវីកន្ទុយ|The dog wagged its tail.|ឆ្កែបានគ្រវីកន្ទុយ។
wrestle|wrestled|wrestled|ចំបាប់|They wrestled on the grass.|ពួកគេបានចំបាប់គ្នាលើស្មៅ។
brew|brewed|brewed|ឆុង (តែ / កាហ្វេ)|Brew some coffee.|ឆុងកាហ្វេបន្តិច។
dip|dipped|dipped|ជ្រលក់|Dip the bread in the soup.|ជ្រលក់នំប៉័ងក្នុងស៊ុប។
leak|leaked|leaked|លេច|The roof leaks.|ដំបូលលេចទឹក។
marinate|marinated|marinated|ប្រឡាក់គ្រឿង|Marinate the beef for an hour.|ប្រឡាក់សាច់គោជាមួយគ្រឿងមួយម៉ោង។
mash|mashed|mashed|កិនឲ្យម៉ត់|Mash the potatoes.|កិនដំឡូងបារាំងឲ្យម៉ត់។
roar|roared|roared|គ្រហឹម|The lion roared.|តោបានគ្រហឹម។
season|seasoned|seasoned|ប្រឡាក់គ្រឿងទេស|Season the soup with salt.|ប្រឡាក់ស៊ុបជាមួយអំបិល។
snap|snapped|snapped|បាក់ / ផ្ទាត់|The branch snapped.|មែកឈើបានបាក់។
whisk|whisked|whisked|វាយ (ពង)|Whisk the eggs.|វាយពង។
sob|sobbed|sobbed|យំសស្រាក់|The child sobbed quietly.|ក្មេងបានយំសស្រាក់ស្ងាត់ៗ។
bark|barked|barked|ព្រុស|The dog barked all night.|ឆ្កែបានព្រុសពេញមួយយប់។
chirp|chirped|chirped|យំចៀប (សត្វស្លាប)|Birds chirp in the morning.|សត្វស្លាបយំចៀបៗនៅពេលព្រឹក។
gulp|gulped|gulped|ក្លឹកលេប|He gulped his water.|គាត់បានក្លឹកលេបទឹក។
nibble|nibbled|nibbled|ខាំតិចៗ|The mouse nibbled the cheese.|កណ្ដុរបានខាំឈីសតិចៗ។
peck|pecked|pecked|ចឹក|The chicken pecked the corn.|មាន់បានចឹកពោត។
rattle|rattled|rattled|រញ្ជួយឲ្យឮសូរ|The window rattled in the wind.|បង្អួចរញ្ជួយឮសូរដោយសារខ្យល់។
squash|squashed|squashed|សង្កត់ឲ្យសំប៉ែត|Don't squash the bread.|កុំសង្កត់នំប៉័ងឲ្យសំប៉ែត។
stew|stewed|stewed|ខ (ម្ហូប)|Stew the pork with eggs.|ខសាច់ជ្រូកជាមួយពង។
tumble|tumbled|tumbled|ដួលរមៀល|The boy tumbled down the hill.|ក្មេងប្រុសបានដួលរមៀលចុះពីលើភ្នំតូច។
drizzle|drizzled|drizzled|ភ្លៀងរលឹម|It drizzled all morning.|ភ្លៀងរលឹមពេញមួយព្រឹក។
sizzle|sizzled|sizzled|ឮសូរឆ្អើតៗ (ពេលចៀន)|The fish sizzled in the pan.|ត្រីឮសូរឆ្អើតៗក្នុងខ្ទះ។`,
3:`analyze|analyzed|analyzed|វិភាគ|Analyze the data carefully.|វិភាគទិន្នន័យដោយយកចិត្តទុកដាក់។
announce|announced|announced|ប្រកាស|The school announced a holiday.|សាលាបានប្រកាសថ្ងៃឈប់សម្រាក។
approve|approved|approved|អនុម័ត|The plan was approved.|ផែនការនេះត្រូវបានអនុម័ត។
attract|attracted|attracted|ទាក់ទាញ|Angkor attracts many tourists.|អង្គរទាក់ទាញភ្ញៀវទេសចរជាច្រើន។
claim|claimed|claimed|អះអាង|He claimed he was right.|គាត់បានអះអាងថាគាត់ត្រូវ។
conclude|concluded|concluded|សន្និដ្ឋាន / បញ្ចប់|We concluded the meeting.|យើងបានបញ្ចប់កិច្ចប្រជុំ។
confirm|confirmed|confirmed|បញ្ជាក់|Please confirm your booking.|សូមបញ្ជាក់ការកក់របស់អ្នក។
contribute|contributed|contributed|ចូលរួមចំណែក|Everyone contributed money.|គ្រប់គ្នាបានចូលរួមចំណែកលុយ។
convince|convinced|convinced|បញ្ចុះបញ្ចូល|She convinced me to go.|នាងបានបញ្ចុះបញ្ចូលខ្ញុំឲ្យទៅ។
damage|damaged|damaged|ធ្វើឲ្យខូចខាត|The storm damaged houses.|ព្យុះបានធ្វើឲ្យខូចខាតផ្ទះ។
debate|debated|debated|ជជែកដេញដោល|They debated the new law.|ពួកគេបានជជែកដេញដោលអំពីច្បាប់ថ្មី។
demand|demanded|demanded|ទាមទារ|Workers demanded higher pay.|កម្មករបានទាមទារប្រាក់ឈ្នួលខ្ពស់ជាងនេះ។
deny|denied|denied|បដិសេធ|He denied the rumor.|គាត់បានបដិសេធពាក្យចចាមអារ៉ាម។
depend|depended|depended|អាស្រ័យ|It depends on the weather.|វាអាស្រ័យលើអាកាសធាតុ។
determine|determined|determined|កំណត់|Tests determine your level.|ការធ្វើតេស្តកំណត់កម្រិតរបស់អ្នក។
emphasize|emphasized|emphasized|សង្កត់ធ្ងន់|She emphasized safety.|នាងបានសង្កត់ធ្ងន់លើសុវត្ថិភាព។
establish|established|established|បង្កើតឡើង|The company was established in 2010.|ក្រុមហ៊ុននេះត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ ២០១០។
estimate|estimated|estimated|ប៉ាន់ស្មាន|We estimated the cost.|យើងបានប៉ាន់ស្មានតម្លៃ។
expand|expanded|expanded|ពង្រីក|The city is expanding.|ទីក្រុងកំពុងពង្រីក។
identify|identified|identified|កំណត់ / រកឃើញ|Can you identify the problem?|តើអ្នកអាចរកឃើញបញ្ហាបានទេ?
increase|increased|increased|កើនឡើង|Prices increased this year.|តម្លៃបានកើនឡើងក្នុងឆ្នាំនេះ។
indicate|indicated|indicated|បង្ហាញ|The results indicate progress.|លទ្ធផលបង្ហាញពីការរីកចម្រើន។
influence|influenced|influenced|មានឥទ្ធិពល|Music influences our mood.|តន្ត្រីមានឥទ្ធិពលលើអារម្មណ៍របស់យើង។
investigate|investigated|investigated|ស៊ើបអង្កេត|Police investigated the case.|ប៉ូលិសបានស៊ើបអង្កេតករណីនេះ។
involve|involved|involved|ពាក់ព័ន្ធ|The job involves travel.|ការងារនេះពាក់ព័ន្ធនឹងការធ្វើដំណើរ។
maintain|maintained|maintained|ថែរក្សា|Maintain your bike.|ថែរក្សាកង់របស់អ្នក។
negotiate|negotiated|negotiated|ចរចា|They negotiated a deal.|ពួកគេបានចរចាកិច្ចព្រមព្រៀងមួយ។
obtain|obtained|obtained|ទទួលបាន|She obtained a visa.|នាងបានទទួលទិដ្ឋាការ។
occur|occurred|occurred|កើតឡើង|The accident occurred at night.|គ្រោះថ្នាក់បានកើតឡើងនៅពេលយប់។
participate|participated|participated|ចូលរួម|Students participated actively.|សិស្សបានចូលរួមយ៉ាងសកម្ម។
predict|predicted|predicted|ទស្សន៍ទាយ|Experts predicted growth.|អ្នកជំនាញបានទស្សន៍ទាយពីកំណើន។
publish|published|published|បោះពុម្ពផ្សាយ|He published a book.|គាត់បានបោះពុម្ពផ្សាយសៀវភៅមួយ។
recognize|recognized|recognized|ស្គាល់ / ទទួលស្គាល់|I recognized her voice.|ខ្ញុំស្គាល់សំឡេងរបស់នាង។
recover|recovered|recovered|ជាសះស្បើយ|He recovered from the flu.|គាត់បានជាសះស្បើយពីជំងឺផ្ដាសាយ។
reflect|reflected|reflected|ឆ្លុះបញ្ចាំង|The lake reflects the sky.|បឹងឆ្លុះបញ្ចាំងមេឃ។
reject|rejected|rejected|បដិសេធ|They rejected my idea.|ពួកគេបានបដិសេធគំនិតរបស់ខ្ញុំ។
represent|represented|represented|តំណាង|She represents our school.|នាងតំណាងឲ្យសាលារបស់យើង។
survive|survived|survived|រស់រានមានជីវិត|Few people survived.|មានមនុស្សតិចណាស់ដែលរស់រានមានជីវិត។
threaten|threatened|threatened|គំរាមកំហែង|Pollution threatens wildlife.|ការបំពុលគំរាមកំហែងដល់សត្វព្រៃ។
abolish|abolished|abolished|លុបបំបាត់|They abolished the old law.|ពួកគេបានលុបបំបាត់ច្បាប់ចាស់។
accelerate|accelerated|accelerated|បង្កើនល្បឿន|The car accelerated.|ឡានបានបង្កើនល្បឿន។
accommodate|accommodated|accommodated|ផ្ដល់កន្លែងស្នាក់នៅ|The hotel can accommodate 200 guests.|សណ្ឋាគារអាចទទួលភ្ញៀវបាន ២០០ នាក់។
accomplish|accomplished|accomplished|សម្រេចបាន|We accomplished our goal.|យើងបានសម្រេចគោលដៅរបស់យើង។
adopt|adopted|adopted|អនុម័ត / សុំកូនចិញ្ចឹម|They adopted a new policy.|ពួកគេបានអនុម័តគោលនយោបាយថ្មីមួយ។
align|aligned|aligned|តម្រឹម|Align the text to the left.|តម្រឹមអត្ថបទទៅខាងឆ្វេង។
allege|alleged|alleged|ចោទ (ដោយគ្មានភស្តុតាង)|Police allege he stole the car.|ប៉ូលិសចោទថាគាត់បានលួចឡាន។
amend|amended|amended|ធ្វើវិសោធនកម្ម|Parliament amended the law.|សភាបានធ្វើវិសោធនកម្មច្បាប់។
aspire|aspired|aspired|ប្រាថ្នាចង់|She aspires to be a pilot.|នាងប្រាថ្នាចង់ក្លាយជាអ្នកបើកយន្តហោះ។
assert|asserted|asserted|អះអាងយ៉ាងមុតមាំ|He asserted his innocence.|គាត់បានអះអាងថាគាត់គ្មានទោស។
attribute|attributed|attributed|សន្មតថាដោយសារ|She attributes her success to hard work.|នាងសន្មតថាជោគជ័យរបស់នាងបានមកពីការខិតខំ។
authorize|authorized|authorized|ផ្ដល់សិទ្ធិ / អនុញ្ញាត|Only managers can authorize payments.|មានតែអ្នកគ្រប់គ្រងទេដែលអាចអនុញ្ញាតការបង់ប្រាក់។
boycott|boycotted|boycotted|ធ្វើពហិការ|Fans boycotted the product.|អ្នកគាំទ្របានធ្វើពហិការផលិតផលនោះ។
campaign|campaigned|campaigned|ធ្វើយុទ្ធនាការ|They campaigned for clean water.|ពួកគេបានធ្វើយុទ្ធនាការដើម្បីទឹកស្អាត។
characterize|characterized|characterized|ពិពណ៌នាលក្ខណៈ|The city is characterized by old buildings.|ទីក្រុងនេះមានលក្ខណៈពិសេសដោយអគារចាស់ៗ។
cite|cited|cited|ដកស្រង់ / យោង|Cite your sources.|យោងប្រភពរបស់អ្នក។
clash|clashed|clashed|ប៉ះទង្គិច|Protesters clashed with police.|ក្រុមបាតុករបានប៉ះទង្គិចជាមួយប៉ូលិស។
collide|collided|collided|បុកគ្នា|Two cars collided.|ឡានពីរបានបុកគ្នា។
commence|commenced|commenced|ចាប់ផ្ដើម (ផ្លូវការ)|The ceremony commenced at nine.|ពិធីបានចាប់ផ្ដើមនៅម៉ោងប្រាំបួន។
compile|compiled|compiled|ចងក្រង|She compiled a list of words.|នាងបានចងក្រងបញ្ជីពាក្យ។
comply|complied|complied|អនុវត្តតាម|All shops must comply with the rules.|ហាងទាំងអស់ត្រូវអនុវត្តតាមច្បាប់។
compromise|compromised|compromised|សម្របសម្រួល|Both sides compromised.|ភាគីទាំងពីរបានសម្របសម្រួលគ្នា។
conceal|concealed|concealed|លាក់បាំង|He concealed the truth.|គាត់បានលាក់បាំងការពិត។
concede|conceded|conceded|ទទួលស្គាល់ (ចាញ់)|The team conceded two goals.|ក្រុមនេះបានរងគ្រាប់បាល់ពីរ។
condemn|condemned|condemned|ថ្កោលទោស|The world condemned the attack.|ពិភពលោកបានថ្កោលទោសការវាយប្រហារនេះ។
confront|confronted|confronted|ប្រឈមមុខ|She confronted the problem.|នាងបានប្រឈមមុខនឹងបញ្ហា។
contemplate|contemplated|contemplated|ពិចារណាយូរ|He contemplated leaving his job.|គាត់បានពិចារណាអំពីការលាឈប់ពីការងារ។
contradict|contradicted|contradicted|ផ្ទុយ / និយាយផ្ទុយ|The facts contradict his story.|ការពិតផ្ទុយនឹងរឿងរបស់គាត់។
convey|conveyed|conveyed|បញ្ជូន (សារ)|Pictures convey emotion.|រូបភាពបញ្ជូនអារម្មណ៍។
coordinate|coordinated|coordinated|សម្របសម្រួល|She coordinates the project.|នាងសម្របសម្រួលគម្រោងនេះ។
correspond|corresponded|corresponded|ត្រូវគ្នា / ឆ្លើយឆ្លង|The results correspond to our data.|លទ្ធផលត្រូវគ្នានឹងទិន្នន័យរបស់យើង។
deduce|deduced|deduced|សន្និដ្ឋាន|What can you deduce from this?|តើអ្នកអាចសន្និដ្ឋានអ្វីពីរឿងនេះ?
delegate|delegated|delegated|ប្រគល់ភារកិច្ច|A good leader delegates tasks.|អ្នកដឹកនាំល្អចេះប្រគល់ភារកិច្ចឲ្យអ្នកដទៃ។
depict|depicted|depicted|ពិពណ៌នា / បង្ហាញ (រូប)|The painting depicts village life.|គំនូរនេះបង្ហាញពីជីវិតនៅភូមិ។
deploy|deployed|deployed|ដាក់ពង្រាយ|The army deployed troops.|កងទ័ពបានដាក់ពង្រាយទាហាន។
deprive|deprived|deprived|ដកហូត|Don't deprive children of sleep.|កុំដកហូតការគេងរបស់កុមារ។
derive|derived|derived|មានប្រភពពី|Many Khmer words derive from Sanskrit.|ពាក្យខ្មែរជាច្រើនមានប្រភពមកពីភាសាសំស្ក្រឹត។
detain|detained|detained|ឃុំខ្លួន|Police detained two men.|ប៉ូលិសបានឃុំខ្លួនបុរសពីរនាក់។
devastate|devastated|devastated|បំផ្លិចបំផ្លាញ|The storm devastated the coast.|ព្យុះបានបំផ្លិចបំផ្លាញតំបន់ឆ្នេរ។
differentiate|differentiated|differentiated|បែងចែកភាពខុសគ្នា|Can you differentiate the two?|តើអ្នកអាចបែងចែកភាពខុសគ្នារវាងរបស់ទាំងពីរបានទេ?
disclose|disclosed|disclosed|បង្ហាញ (ព័ត៌មានសម្ងាត់)|The company disclosed its profits.|ក្រុមហ៊ុនបានបង្ហាញប្រាក់ចំណេញរបស់ខ្លួន។
discriminate|discriminated|discriminated|រើសអើង|Never discriminate against others.|កុំរើសអើងអ្នកដទៃ។
disrupt|disrupted|disrupted|ធ្វើឲ្យរអាក់រអួល|The strike disrupted transport.|កូដកម្មបានធ្វើឲ្យការដឹកជញ្ជូនរអាក់រអួល។
dominate|dominated|dominated|លើសលុប|The team dominated the match.|ក្រុមនេះមានលើសលុបក្នុងការប្រកួត។
drift|drifted|drifted|រសាត់|The boat drifted away.|ទូកបានរសាត់ទៅឆ្ងាយ។
elaborate|elaborated|elaborated|ពន្យល់លម្អិត|Could you elaborate on that?|តើអ្នកអាចពន្យល់លម្អិតបន្ថែមបានទេ?
emerge|emerged|emerged|លេចចេញ|New problems emerged.|បញ្ហាថ្មីៗបានលេចចេញ។
emit|emitted|emitted|បញ្ចេញ (ឧស្ម័ន)|Cars emit carbon dioxide.|ឡានបញ្ចេញឧស្ម័នកាបូនិច។
encounter|encountered|encountered|ជួបប្រទះ|We encountered many problems.|យើងបានជួបប្រទះបញ្ហាជាច្រើន។
endorse|endorsed|endorsed|គាំទ្រ / យល់ព្រម|The singer endorsed the brand.|តារាចម្រៀងបានគាំទ្រម៉ាកនេះ។
endure|endured|endured|ទ្រាំទ្រ|They endured hunger.|ពួកគេបានទ្រាំទ្រនឹងការអត់ឃ្លាន។
enforce|enforced|enforced|អនុវត្ត (ច្បាប់)|Police enforce the law.|ប៉ូលិសអនុវត្តច្បាប់។
engage|engaged|engaged|ចូលរួម / ទាក់ទាញ|Good teachers engage students.|គ្រូល្អធ្វើឲ្យសិស្សចាប់អារម្មណ៍។
escalate|escalated|escalated|កាន់តែធ្ងន់ធ្ងរ|The conflict escalated.|ជម្លោះកាន់តែធ្ងន់ធ្ងរ។
exceed|exceeded|exceeded|លើស|Don't exceed the speed limit.|កុំបើកបរលើសល្បឿនកំណត់។
execute|executed|executed|អនុវត្ត|They executed the plan well.|ពួកគេបានអនុវត្តផែនការបានល្អ។
exhaust|exhausted|exhausted|ធ្វើឲ្យហត់ / អស់|The long walk exhausted me.|ការដើរយូរធ្វើឲ្យខ្ញុំហត់។
exploit|exploited|exploited|កេងប្រវ័ញ្ច|Companies must not exploit workers.|ក្រុមហ៊ុនមិនត្រូវកេងប្រវ័ញ្ចកម្មករទេ។
expose|exposed|exposed|លាតត្រដាង|The report exposed corruption.|របាយការណ៍បានលាតត្រដាងអំពើពុករលួយ។
extract|extracted|extracted|ដកស្រង់ / ចម្រាញ់|They extract oil from coconuts.|ពួកគេចម្រាញ់ប្រេងពីដូង។
favor|favored|favored|ពេញចិត្ត / លម្អៀង|The weather favored us.|អាកាសធាតុបានអំណោយផលដល់យើង។
finance|financed|financed|ផ្ដល់ហិរញ្ញប្បទាន|The bank financed the project.|ធនាគារបានផ្ដល់ហិរញ្ញប្បទានដល់គម្រោង។
flourish|flourished|flourished|រីកចម្រើន|Art flourished in the Angkor period.|សិល្បៈបានរីកចម្រើនក្នុងសម័យអង្គរ។
formulate|formulated|formulated|រៀបចំបង្កើត|They formulated a new plan.|ពួកគេបានរៀបចំបង្កើតផែនការថ្មីមួយ។
foster|fostered|fostered|ជំរុញ / ចិញ្ចឹម|Schools foster creativity.|សាលាជំរុញភាពច្នៃប្រឌិត។
frustrate|frustrated|frustrated|ធ្វើឲ្យខកចិត្ត|Slow internet frustrates me.|អ៊ីនធឺណិតយឺតធ្វើឲ្យខ្ញុំធុញថប់។
grasp|grasped|grasped|ចាប់ / យល់|She quickly grasped the idea.|នាងបានយល់គំនិតនោះយ៉ាងលឿន។
halt|halted|halted|បញ្ឈប់|Work halted because of rain.|ការងារបានផ្អាកដោយសារភ្លៀង។
hinder|hindered|hindered|រារាំង|Bad roads hinder development.|ផ្លូវអាក្រក់រារាំងការអភិវឌ្ឍ។
honor|honored|honored|ផ្ដល់កិត្តិយស|They honored the teachers.|ពួកគេបានផ្ដល់កិត្តិយសដល់គ្រូបង្រៀន។
illuminate|illuminated|illuminated|បំភ្លឺ|Lights illuminated the temple.|ភ្លើងបានបំភ្លឺប្រាសាទ។
imply|implied|implied|បញ្ជាក់ដោយប្រយោល|What does his silence imply?|តើភាពស្ងៀមស្ងាត់របស់គាត់មានន័យថាអ្វី?
impose|imposed|imposed|ដាក់បន្ទុក / ដាក់ពន្ធ|The government imposed a new tax.|រដ្ឋាភិបាលបានដាក់ពន្ធថ្មីមួយ។
incorporate|incorporated|incorporated|បញ្ចូល|We incorporated your ideas.|យើងបានបញ្ចូលគំនិតរបស់អ្នក។
inhabit|inhabited|inhabited|រស់នៅ (តំបន់)|Elephants inhabit the forest.|ដំរីរស់នៅក្នុងព្រៃ។
initiate|initiated|initiated|ផ្ដួចផ្ដើម|She initiated the project.|នាងបានផ្ដួចផ្ដើមគម្រោងនេះ។
innovate|innovated|innovated|បង្កើតថ្មី|Companies must innovate to survive.|ក្រុមហ៊ុនត្រូវតែបង្កើតថ្មីដើម្បីរស់រាន។
inquire|inquired|inquired|សាកសួរ|I inquired about the price.|ខ្ញុំបានសាកសួរអំពីតម្លៃ។
integrate|integrated|integrated|ធ្វើសមាហរណកម្ម|Integrate technology into teaching.|បញ្ចូលបច្ចេកវិទ្យាទៅក្នុងការបង្រៀន។
intervene|intervened|intervened|អន្តរាគមន៍|The teacher intervened in the fight.|គ្រូបានអន្តរាគមន៍ក្នុងការវាយគ្នា។
invade|invaded|invaded|ឈ្លានពាន|The army invaded the country.|កងទ័ពបានឈ្លានពានប្រទេសនោះ។
isolate|isolated|isolated|ញែកដាច់|Sick patients were isolated.|អ្នកជំងឺត្រូវបានដាក់ឲ្យនៅដាច់ដោយឡែក។
liberate|liberated|liberated|រំដោះ|The soldiers liberated the city.|ទាហានបានរំដោះទីក្រុង។
manipulate|manipulated|manipulated|បញ្ឆោត / រៀបចំ|Don't let ads manipulate you.|កុំឲ្យការផ្សាយពាណិជ្ជកម្មបញ្ឆោតអ្នក។
maximize|maximized|maximized|បង្កើនឲ្យខ្ពស់បំផុត|Maximize your profit.|បង្កើនប្រាក់ចំណេញរបស់អ្នកឲ្យខ្ពស់បំផុត។
modernize|modernized|modernized|ធ្វើទំនើបកម្ម|They modernized the airport.|ពួកគេបានធ្វើទំនើបកម្មព្រលានយន្តហោះ។
narrow|narrowed|narrowed|បង្រួម|Narrow down your choices.|បង្រួមជម្រើសរបស់អ្នក។
nominate|nominated|nominated|ដាក់ឈ្មោះបេក្ខភាព|She was nominated for an award.|នាងត្រូវបានដាក់ឈ្មោះជាបេក្ខភាពទទួលពានរង្វាន់។
opt|opted|opted|ជ្រើសរើស|Many students opt for IT.|សិស្សជាច្រើនជ្រើសរើសរៀន IT។
outweigh|outweighed|outweighed|លើសពី|The benefits outweigh the risks.|អត្ថប្រយោជន៍លើសពីហានិភ័យ។
overlook|overlooked|overlooked|មើលរំលង|Don't overlook small details.|កុំមើលរំលងព័ត៌មានលម្អិតតូចៗ។
oversee|oversaw|overseen|មើលការខុសត្រូវ|She oversees the project.|នាងមើលការខុសត្រូវគម្រោងនេះ។
persist|persisted|persisted|នៅតែបន្ត|The pain persisted for days.|ការឈឺចាប់នៅតែបន្តជាច្រើនថ្ងៃ។
pose|posed|posed|បង្ក / ឈរឲ្យថត|Floods pose a threat.|ទឹកជំនន់បង្កការគំរាមកំហែង។
precede|preceded|preceded|មកមុន|A storm preceded the flood.|ព្យុះបានកើតឡើងមុនទឹកជំនន់។
prompt|prompted|prompted|ជំរុញ|The accident prompted new rules.|គ្រោះថ្នាក់បានជំរុញឲ្យមានច្បាប់ថ្មី។
prosper|prospered|prospered|រុងរឿង|The town prospered.|ទីក្រុងនេះបានរុងរឿង។
provoke|provoked|provoked|ញុះញង់|Don't provoke the dog.|កុំញុះញង់ឆ្កែ។
reinforce|reinforced|reinforced|ពង្រឹង|Practice reinforces learning.|ការអនុវត្តពង្រឹងការរៀនសូត្រ។
reside|resided|resided|រស់នៅ (ផ្លូវការ)|He resides in Phnom Penh.|គាត់រស់នៅក្នុងរាជធានីភ្នំពេញ។
resume|resumed|resumed|បន្តម្ដងទៀត|Classes resumed after the holiday.|ការសិក្សាបានបន្តឡើងវិញបន្ទាប់ពីថ្ងៃឈប់សម្រាក។
retrieve|retrieved|retrieved|យកមកវិញ|I retrieved my lost files.|ខ្ញុំបានយកឯកសារដែលបាត់មកវិញ។
reverse|reversed|reversed|បញ្ច្រាស|Reverse the car.|បើកឡានថយក្រោយ។
revive|revived|revived|ធ្វើឲ្យរស់ឡើងវិញ|They revived traditional dance.|ពួកគេបានធ្វើឲ្យរបាំប្រពៃណីរស់ឡើងវិញ។
rid|rid|rid|កម្ចាត់|Get rid of old clothes.|បោះចោលសម្លៀកបំពាក់ចាស់ៗ។
safeguard|safeguarded|safeguarded|ការពារ|Safeguard your data.|ការពារទិន្នន័យរបស់អ្នក។
secure|secured|secured|ធានា / ទទួលបាន|She secured a scholarship.|នាងបានទទួលអាហារូបករណ៍។
seize|seized|seized|រឹបអូស / ចាប់យក|Police seized the drugs.|ប៉ូលិសបានរឹបអូសគ្រឿងញៀន។
settle|settled|settled|ដោះស្រាយ / តាំងទីលំនៅ|They settled the dispute.|ពួកគេបានដោះស្រាយវិវាទ។
shelter|sheltered|sheltered|ផ្ដល់ជម្រក|They sheltered the refugees.|ពួកគេបានផ្ដល់ជម្រកដល់ជនភៀសខ្លួន។
simulate|simulated|simulated|ក្លែងធ្វើ|The game simulates real driving.|ហ្គេមនេះក្លែងធ្វើការបើកបរពិតប្រាកដ។
soar|soared|soared|ហោះឡើងខ្ពស់ / កើនខ្លាំង|Prices soared.|តម្លៃបានឡើងខ្ពស់ខ្លាំង។
specify|specified|specified|បញ្ជាក់ច្បាស់|Specify the size you want.|បញ្ជាក់ទំហំដែលអ្នកចង់បាន។
stabilize|stabilized|stabilized|ធ្វើឲ្យមានស្ថិរភាព|Prices stabilized.|តម្លៃមានស្ថិរភាពវិញ។
stimulate|stimulated|stimulated|ជំរុញ|The policy stimulated growth.|គោលនយោបាយនេះបានជំរុញកំណើន។
substitute|substituted|substituted|ជំនួស|Substitute sugar with honey.|ប្រើទឹកឃ្មុំជំនួសស្ករ។
suppress|suppressed|suppressed|បង្ក្រាប / ទប់|She suppressed a laugh.|នាងបានទប់សំណើច។
surpass|surpassed|surpassed|វ៉ាជែង / លើស|Sales surpassed expectations.|ការលក់បានលើសពីការរំពឹងទុក។
suspend|suspended|suspended|ផ្អាក|The school suspended classes.|សាលាបានផ្អាកការសិក្សា។
symbolize|symbolized|symbolized|ជានិមិត្តរូប|The lotus symbolizes purity.|ផ្កាឈូកជានិមិត្តរូបនៃភាពបរិសុទ្ធ។
tackle|tackled|tackled|ដោះស្រាយ|We must tackle poverty.|យើងត្រូវតែដោះស្រាយភាពក្រីក្រ។
terminate|terminated|terminated|បញ្ចប់|They terminated the contract.|ពួកគេបានបញ្ចប់កិច្ចសន្យា។
testify|testified|testified|ផ្ដល់សក្ខីកម្ម|She testified in court.|នាងបានផ្ដល់សក្ខីកម្មនៅតុលាការ។
trace|traced|traced|តាមដាន / រកប្រភព|They traced the call.|ពួកគេបានតាមដានរកប្រភពនៃការហៅទូរស័ព្ទ។
transmit|transmitted|transmitted|បញ្ជូន / ចម្លង|Mosquitoes transmit disease.|មូសចម្លងជំងឺ។
trigger|triggered|triggered|បង្ក|Smoke triggered the alarm.|ផ្សែងបានធ្វើឲ្យរោទ៍ប្រកាសអាសន្នបន្លឺឡើង។
unveil|unveiled|unveiled|បើកសម្ពោធ / បង្ហាញ|They unveiled a new statue.|ពួកគេបានបើកសម្ពោធរូបសំណាកថ្មីមួយ។
uphold|upheld|upheld|រក្សា / គាំទ្រ|Courts uphold the law.|តុលាការរក្សាការគោរពច្បាប់។
utilize|utilized|utilized|ប្រើប្រាស់|Utilize your time well.|ប្រើប្រាស់ពេលវេលារបស់អ្នកឲ្យបានល្អ។
validate|validated|validated|ធ្វើឲ្យមានសុពលភាព|Validate your email address.|ផ្ទៀងផ្ទាត់អាសយដ្ឋានអ៊ីមែលរបស់អ្នក។
verify|verified|verified|ផ្ទៀងផ្ទាត់|Verify your account.|ផ្ទៀងផ្ទាត់គណនីរបស់អ្នក។
violate|violated|violated|រំលោភ|He violated the rules.|គាត់បានរំលោភច្បាប់។
visualize|visualized|visualized|ស្រមៃមើលឃើញ|Visualize your goal.|ស្រមៃមើលគោលដៅរបស់អ្នក។
worsen|worsened|worsened|កាន់តែអាក្រក់|The traffic worsened.|ចរាចរណ៍កាន់តែអាក្រក់។
yield|yielded|yielded|ផ្ដល់ផល|The farm yields a lot of rice.|កសិដ្ឋាននេះផ្ដល់ផលស្រូវច្រើន។
audit|audited|audited|ធ្វើសវនកម្ម|They audited the accounts.|ពួកគេបានធ្វើសវនកម្មគណនី។
diversify|diversified|diversified|ធ្វើពិពិធកម្ម|Farmers diversify their crops.|កសិករធ្វើពិពិធកម្មដំណាំ។
lease|leased|leased|ជួល (រយៈពេលវែង)|They leased the land.|ពួកគេបានជួលដីរយៈពេលវែង។
market|marketed|marketed|ធ្វើទីផ្សារ|They marketed the product online.|ពួកគេបានធ្វើទីផ្សារផលិតផលតាមអនឡាញ។
outsource|outsourced|outsourced|ជួលក្រុមហ៊ុនខាងក្រៅ|They outsource IT work.|ពួកគេជួលក្រុមហ៊ុនខាងក្រៅធ្វើការងារ IT។
profit|profited|profited|ចំណេញ|Who profits from this?|តើនរណាទទួលបានចំណេញពីរឿងនេះ?
subsidize|subsidized|subsidized|ឧបត្ថម្ភធន|The state subsidizes rice farmers.|រដ្ឋឧបត្ថម្ភធនដល់កសិករដាំស្រូវ។
tax|taxed|taxed|យកពន្ធ|The government taxes imports.|រដ្ឋាភិបាលយកពន្ធលើទំនិញនាំចូល។
underestimate|underestimated|underestimated|មើលស្រាល|Never underestimate yourself.|កុំមើលស្រាលខ្លួនឯង។
overestimate|overestimated|overestimated|វាយតម្លៃខ្ពស់ពេក|We overestimated the cost.|យើងបានប៉ាន់ស្មានតម្លៃខ្ពស់ពេក។
contaminate|contaminated|contaminated|ធ្វើឲ្យកខ្វក់|Waste contaminated the water.|សំណល់បានធ្វើឲ្យទឹកកខ្វក់។
decompose|decomposed|decomposed|រលួយ / បំបែក|Leaves decompose quickly.|ស្លឹកឈើរលួយយ៉ាងលឿន។
erode|eroded|eroded|សំណឹក|The river eroded the bank.|ទន្លេបានធ្វើឲ្យច្រាំងបាក់សំណឹក។
evaporate|evaporated|evaporated|ហួត|Water evaporates in the sun.|ទឹកហួតនៅក្រោមកម្ដៅថ្ងៃ។
fertilize|fertilized|fertilized|ដាក់ជី|Farmers fertilize the soil.|កសិករដាក់ជីលើដី។
inject|injected|injected|ចាក់ថ្នាំ|The nurse injected the vaccine.|គិលានុបដ្ឋាយិកាបានចាក់វ៉ាក់សាំង។
orbit|orbited|orbited|វិលជុំវិញ (គន្លង)|The moon orbits the earth.|ព្រះច័ន្ទវិលជុំវិញផែនដី។
pollinate|pollinated|pollinated|លំអង|Bees pollinate flowers.|ឃ្មុំលំអងផ្កា។
purify|purified|purified|ធ្វើឲ្យបរិសុទ្ធ|This machine purifies water.|ម៉ាស៊ីននេះធ្វើឲ្យទឹកបរិសុទ្ធ។
reproduce|reproduced|reproduced|បន្តពូជ / ចម្លង|Fish reproduce in the rainy season.|ត្រីបន្តពូជនៅរដូវវស្សា។
vaccinate|vaccinated|vaccinated|ចាក់វ៉ាក់សាំង|Children were vaccinated.|កុមារត្រូវបានចាក់វ៉ាក់សាំង។
convict|convicted|convicted|កាត់ទោស|He was convicted of theft.|គាត់ត្រូវបានផ្ដន្ទាទោសពីបទលួច។
reform|reformed|reformed|កែទម្រង់|They reformed the education system.|ពួកគេបានកែទម្រង់ប្រព័ន្ធអប់រំ។
regulate|regulated|regulated|គ្រប់គ្រងដោយច្បាប់|The bank regulates interest rates.|ធនាគារគ្រប់គ្រងអត្រាការប្រាក់។
sentence|sentenced|sentenced|កាត់ទោស (ឲ្យជាប់គុក)|He was sentenced to five years.|គាត់ត្រូវបានកាត់ទោសដាក់ពន្ធនាគារប្រាំឆ្នាំ។
sue|sued|sued|ប្ដឹង|She sued the company.|នាងបានប្ដឹងក្រុមហ៊ុន។
paraphrase|paraphrased|paraphrased|សរសេរឡើងវិញដោយពាក្យខ្លួនឯង|Paraphrase the paragraph.|សរសេរកថាខណ្ឌឡើងវិញតាមពាក្យរបស់អ្នក។
reason|reasoned|reasoned|វែកញែក|She reasoned that it was too late.|នាងបានវែកញែកថាវាយឺតពេលហើយ។
betray|betrayed|betrayed|ក្បត់|He betrayed his friend.|គាត់បានក្បត់មិត្តរបស់គាត់។
console|consoled|consoled|លួងលោម|She consoled the crying child.|នាងបានលួងលោមក្មេងដែលកំពុងយំ។
despise|despised|despised|ស្អប់ខ្ពើម|He despises liars.|គាត់ស្អប់ខ្ពើមមនុស្សកុហក។
dread|dreaded|dreaded|ខ្លាចរអា|I dread exams.|ខ្ញុំខ្លាចរអាការប្រឡង។
empathize|empathized|empathized|យល់ចិត្ត|Good teachers empathize with students.|គ្រូល្អយល់ចិត្តសិស្ស។
flatter|flattered|flattered|បញ្ចើចបញ្ចើ|He flattered his boss.|គាត់បានបញ្ចើចបញ្ចើថៅកែរបស់គាត់។
humiliate|humiliated|humiliated|ធ្វើឲ្យអាម៉ាស់|Don't humiliate others.|កុំធ្វើឲ្យអ្នកដទៃអាម៉ាស់។
intimidate|intimidated|intimidated|បំភិតបំភ័យ|Big dogs intimidate me.|ឆ្កែធំៗធ្វើឲ្យខ្ញុំខ្លាច។
overwhelm|overwhelmed|overwhelmed|ធ្វើឲ្យទប់មិនឈរ|The work overwhelmed her.|ការងារបានធ្វើឲ្យនាងទប់មិនឈរ។
resent|resented|resented|អាក់អន់ចិត្ត|She resented his comments.|នាងអាក់អន់ចិត្តនឹងមតិរបស់គាត់។
treasure|treasured|treasured|ឲ្យតម្លៃខ្លាំង|I treasure this gift.|ខ្ញុំឲ្យតម្លៃកាដូនេះខ្លាំងណាស់។
worship|worshipped|worshipped|គោរពបូជា|People worship at the temple.|មនុស្សគោរពបូជានៅប្រាសាទ។
automate|automated|automated|ធ្វើស្វ័យប្រវត្តិ|Factories automate production.|រោងចក្រធ្វើឲ្យការផលិតដំណើរការដោយស្វ័យប្រវត្តិ។
compress|compressed|compressed|បង្រួម (ឯកសារ)|Compress the files into a zip.|បង្រួមឯកសារទៅជា zip។
configure|configured|configured|កំណត់រចនាសម្ព័ន្ធ|Configure the router.|កំណត់រចនាសម្ព័ន្ធ router។
decode|decoded|decoded|បកកូដ|Decode the message.|បកកូដសារ។
encode|encoded|encoded|ដាក់កូដ|Encode the video.|ដាក់កូដវីដេអូ។
encrypt|encrypted|encrypted|អ៊ិនគ្រីប (ការពារទិន្នន័យ)|Encrypt your data.|អ៊ិនគ្រីបទិន្នន័យរបស់អ្នក។
format|formatted|formatted|ធ្វើទ្រង់ទ្រាយ|Format the document.|ធ្វើទ្រង់ទ្រាយឯកសារ។
optimize|optimized|optimized|ធ្វើឲ្យប្រសើរបំផុត|Optimize your website.|ធ្វើឲ្យវេបសាយរបស់អ្នកដំណើរការល្អបំផុត។
render|rendered|rendered|Render / បង្ហាញ|The video is rendering.|វីដេអូកំពុង render។
stream|streamed|streamed|ផ្សាយផ្ទាល់|They streamed the concert.|ពួកគេបានផ្សាយផ្ទាល់ការប្រគុំតន្ត្រី។
synchronize|synchronized|synchronized|ធ្វើសមកាលកម្ម|Synchronize your devices.|ធ្វើសមកាលកម្មឧបករណ៍របស់អ្នក។
troubleshoot|troubleshot|troubleshot|ដោះស្រាយបញ្ហាបច្ចេកទេស|He troubleshot the network.|គាត់បានដោះស្រាយបញ្ហាបណ្ដាញ។
alternate|alternated|alternated|ឆ្លាស់គ្នា|Rain and sun alternated all day.|ភ្លៀង និងថ្ងៃក្ដៅឆ្លាស់គ្នាពេញមួយថ្ងៃ។
amplify|amplified|amplified|ពង្រីក (សំឡេង)|The speaker amplifies sound.|ឧបករណ៍បំពងសំឡេងពង្រីកសំឡេង។
anchor|anchored|anchored|ចាក់យុថ្កា|The ship anchored near the island.|នាវាបានចាក់យុថ្កានៅជិតកោះ។
attain|attained|attained|សម្រេចបាន|She attained her goal.|នាងបានសម្រេចគោលដៅរបស់នាង។
brainstorm|brainstormed|brainstormed|បំផុសគំនិត|Let's brainstorm ideas.|តោះបំផុសគំនិត។
bypass|bypassed|bypassed|ឆ្លងកាត់ / គេចវៀង|The new road bypasses the city.|ផ្លូវថ្មីឆ្លងកាត់ក្រៅទីក្រុង។
categorize|categorized|categorized|ចាត់ជាប្រភេទ|Categorize the words.|ចាត់ពាក្យជាប្រភេទ។
cater|catered|catered|ផ្គត់ផ្គង់ម្ហូប|They catered the wedding.|ពួកគេបានផ្គត់ផ្គង់ម្ហូបសម្រាប់ពិធីមង្គលការ។
certify|certified|certified|ផ្ដល់វិញ្ញាបនបត្រ / បញ្ជាក់|She is certified as a teacher.|នាងមានវិញ្ញាបនបត្រជាគ្រូបង្រៀន។
circulate|circulated|circulated|ចរាចរ / ផ្សព្វផ្សាយ|Blood circulates in the body.|ឈាមចរាចរក្នុងរាងកាយ។
coexist|coexisted|coexisted|រួមរស់ជាមួយគ្នា|Different cultures coexist here.|វប្បធម៌ផ្សេងៗគ្នារួមរស់ជាមួយគ្នានៅទីនេះ។
commemorate|commemorated|commemorated|រំលឹកខួប|We commemorate Independence Day.|យើងរំលឹកខួបទិវាឯករាជ្យ។
complement|complemented|complemented|បំពេញគ្នា|The colors complement each other.|ពណ៌ទាំងនេះបំពេញគ្នាទៅវិញទៅមក។
confiscate|confiscated|confiscated|រឹបអូស|The teacher confiscated my phone.|គ្រូបានរឹបអូសទូរស័ព្ទរបស់ខ្ញុំ។
conquer|conquered|conquered|ដណ្ដើមយក / យកឈ្នះ|She conquered her fear.|នាងបានយកឈ្នះការភ័យខ្លាចរបស់នាង។
contrast|contrasted|contrasted|ប្រៀបធៀបភាពផ្ទុយ|Contrast the two poems.|ប្រៀបធៀបភាពផ្ទុយគ្នានៃកំណាព្យទាំងពីរ។
counsel|counseled|counseled|ផ្ដល់ប្រឹក្សា|Teachers counsel students.|គ្រូផ្ដល់ប្រឹក្សាដល់សិស្ស។
defy|defied|defied|ប្រឆាំង / មិនស្ដាប់|He defied his parents.|គាត់បានប្រឆាំងនឹងឪពុកម្ដាយរបស់គាត់។
demolish|demolished|demolished|រុះរើ|They demolished the old building.|ពួកគេបានរុះរើអគារចាស់។
deter|deterred|deterred|ទប់ស្កាត់|Cameras deter thieves.|កាមេរ៉ាទប់ស្កាត់ចោរ។
devise|devised|devised|បង្កើតវិធី|They devised a new method.|ពួកគេបានបង្កើតវិធីសាស្ត្រថ្មីមួយ។
dispute|disputed|disputed|ជំទាស់ / វិវាទ|They disputed the result.|ពួកគេបានជំទាស់នឹងលទ្ធផល។
distort|distorted|distorted|បង្ខូច|The media distorted the facts.|ប្រព័ន្ធផ្សព្វផ្សាយបានបង្ខូចការពិត។
divert|diverted|diverted|បង្វែរ|Police diverted traffic.|ប៉ូលិសបានបង្វែរចរាចរណ៍។
document|documented|documented|កត់ត្រាជាឯកសារ|They documented the process.|ពួកគេបានកត់ត្រាដំណើរការជាឯកសារ។
enrich|enriched|enriched|ធ្វើឲ្យសម្បូរបែប|Reading enriches the mind.|ការអានធ្វើឲ្យចំណេះដឹងសម្បូរបែប។
envision|envisioned|envisioned|ស្រមៃមើលអនាគត|We envision a greener city.|យើងស្រមៃឃើញទីក្រុងដែលបៃតងជាងនេះ។
exclaim|exclaimed|exclaimed|ស្រែកឡើង (ភ្ញាក់ផ្អើល)|"Wow!" she exclaimed.|នាងស្រែកឡើងថា «វ៉ោវ!»។
excavate|excavated|excavated|ជីកកកាយ|They excavated an ancient temple.|ពួកគេបានជីកកកាយប្រាសាទបុរាណមួយ។
expel|expelled|expelled|បណ្ដេញចេញ|He was expelled from school.|គាត់ត្រូវបានបណ្ដេញចេញពីសាលា។
fabricate|fabricated|fabricated|ប្រឌិត (មិនពិត)|He fabricated the story.|គាត់បានប្រឌិតរឿងនោះឡើង។
fascinate|fascinated|fascinated|ទាក់ទាញខ្លាំង|Space fascinates me.|លំហអាកាសទាក់ទាញចិត្តខ្ញុំខ្លាំងណាស់។
fuel|fueled|fueled|បំពេញឥន្ធនៈ / ជំរុញ|Social media fueled the rumor.|បណ្ដាញសង្គមបានជំរុញឲ្យពាក្យចចាមអារ៉ាមរីករាលដាល។
harass|harassed|harassed|យាយី|Never harass anyone.|កុំយាយីនរណាម្នាក់។
ignite|ignited|ignited|ដុតឲ្យឆេះ|The spark ignited the fire.|ផ្កាភ្លើងបានធ្វើឲ្យឆេះ។
immerse|immersed|immersed|ជ្រមុជ / ផ្ដោតទាំងស្រុង|Immerse yourself in English.|ផ្ដោតខ្លួនទាំងស្រុងទៅលើភាសាអង់គ្លេស។
immigrate|immigrated|immigrated|ចូលមកតាំងលំនៅ|They immigrated to Canada.|ពួកគេបានទៅតាំងទីលំនៅនៅប្រទេសកាណាដា។
emigrate|emigrated|emigrated|ចាកចេញទៅរស់នៅបរទេស|Many people emigrated in the 1980s.|មនុស្សជាច្រើនបានចាកចេញទៅរស់នៅបរទេសក្នុងទសវត្សរ៍ ១៩៨០។
imprison|imprisoned|imprisoned|ដាក់គុក|He was imprisoned for theft.|គាត់ត្រូវបានដាក់គុកពីបទលួច។
improvise|improvised|improvised|ធ្វើភ្លាមៗដោយមិនបានត្រៀម|The singer improvised a song.|តារាចម្រៀងបានច្រៀងបទមួយភ្លាមៗដោយមិនបានត្រៀម។
infect|infected|infected|ឆ្លងមេរោគ|The virus infected thousands.|មេរោគបានឆ្លងមនុស្សរាប់ពាន់នាក់។
intensify|intensified|intensified|កាន់តែខ្លាំង|The storm intensified.|ព្យុះកាន់តែខ្លាំងឡើង។
interfere|interfered|interfered|ជ្រៀតជ្រែក|Don't interfere in their business.|កុំជ្រៀតជ្រែករឿងរបស់ពួកគេ។
irritate|irritated|irritated|ធ្វើឲ្យរមាស់ / ខឹង|Smoke irritates my eyes.|ផ្សែងធ្វើឲ្យភ្នែកខ្ញុំរមាស់ចុក។
juggle|juggled|juggled|ធ្វើច្រើនការក្នុងពេលតែមួយ|She juggles work and study.|នាងធ្វើការផង រៀនផងក្នុងពេលតែមួយ។
lessen|lessened|lessened|កាត់បន្ថយ|Medicine lessened the pain.|ថ្នាំបានកាត់បន្ថយការឈឺចាប់។
linger|lingered|lingered|នៅយូរ|The smell lingered.|ក្លិននៅតែមានយូរ។
lure|lured|lured|ល្បួង|Cheap prices lure customers.|តម្លៃថោកទាក់ទាញអតិថិជន។
magnify|magnified|magnified|ពង្រីក|A lens magnifies objects.|កែវពង្រីកធ្វើឲ្យវត្ថុមើលទៅធំ។
mature|matured|matured|ចាស់ទុំ|He matured a lot this year.|គាត់ចាស់ទុំច្រើនក្នុងឆ្នាំនេះ។
mimic|mimicked|mimicked|ធ្វើត្រាប់តាម|Parrots mimic human voices.|សេកធ្វើត្រាប់តាមសំឡេងមនុស្ស។
mingle|mingled|mingled|ចូលលាយឡំ|Guests mingled at the party.|ភ្ញៀវបានដើររាប់អានគ្នានៅក្នុងពិធីជប់លៀង។
mumble|mumbled|mumbled|និយាយខ្សាវៗ|Don't mumble, speak clearly.|កុំនិយាយខ្សាវៗ និយាយឲ្យច្បាស់។
nurture|nurtured|nurtured|ថែទាំ / ចិញ្ចឹមបីបាច់|Parents nurture their children.|ឪពុកម្ដាយចិញ្ចឹមបីបាច់កូនៗ។
obstruct|obstructed|obstructed|រារាំង|A truck obstructed the road.|ឡានដឹកទំនិញមួយបានរារាំងផ្លូវ។
overthrow|overthrew|overthrown|ផ្ដួលរំលំ|The people overthrew the dictator.|ប្រជាជនបានផ្ដួលរំលំជនផ្ដាច់ការ។
patrol|patrolled|patrolled|ល្បាត|Police patrol the streets.|ប៉ូលិសល្បាតតាមដងផ្លូវ។
perceive|perceived|perceived|យល់ឃើញ|How do people perceive us?|តើមនុស្សយល់ឃើញយ៉ាងណាចំពោះយើង?
persevere|persevered|persevered|ព្យាយាមតស៊ូ|Keep persevering until you succeed.|បន្តតស៊ូរហូតដល់អ្នកទទួលបានជោគជ័យ។
plunge|plunged|plunged|ធ្លាក់ចុះខ្លាំង / លោតចូល|Prices plunged last month.|តម្លៃបានធ្លាក់ចុះខ្លាំងកាលពីខែមុន។
ponder|pondered|pondered|ពិចារណា|She pondered the question.|នាងបានពិចារណាសំណួរនោះ។
portray|portrayed|portrayed|ពិពណ៌នា / សម្ដែងជា|The film portrays a farmer's life.|ភាពយន្តនេះពិពណ៌នាពីជីវិតរបស់កសិករ។
presume|presumed|presumed|សន្មត|I presume you are the new teacher.|ខ្ញុំសន្មតថាអ្នកជាគ្រូថ្មី។
proclaim|proclaimed|proclaimed|ប្រកាស (ផ្លូវការ)|They proclaimed a holiday.|ពួកគេបានប្រកាសថ្ងៃឈប់សម្រាកមួយ។
prolong|prolonged|prolonged|ពន្យារ|Don't prolong the meeting.|កុំពន្យារកិច្ចប្រជុំឲ្យយូរ។
prosecute|prosecuted|prosecuted|ចោទប្រកាន់តាមផ្លូវច្បាប់|Shoplifters will be prosecuted.|អ្នកលួចឥវ៉ាន់ក្នុងហាងនឹងត្រូវចោទប្រកាន់តាមផ្លូវច្បាប់។
radiate|radiated|radiated|បញ្ចេញ (ពន្លឺ កំដៅ)|The sun radiates heat.|ព្រះអាទិត្យបញ្ចេញកំដៅ។
rebel|rebelled|rebelled|បះបោរ|Teenagers often rebel.|ក្មេងជំទង់ច្រើនតែបះបោរ។
reclaim|reclaimed|reclaimed|ទាមទារយកមកវិញ|They reclaimed land from the sea.|ពួកគេបានយកដីពីសមុទ្រមកវិញ។
reconstruct|reconstructed|reconstructed|កសាងឡើងវិញ|They reconstructed the bridge.|ពួកគេបានកសាងស្ពានឡើងវិញ។
redesign|redesigned|redesigned|រចនាឡើងវិញ|They redesigned the website.|ពួកគេបានរចនាវេបសាយឡើងវិញ។
refine|refined|refined|កែលម្អ / ចម្រាញ់|Refine your writing.|កែលម្អការសរសេររបស់អ្នក។
refrain|refrained|refrained|ជៀសវាង / ទប់ចិត្ត|Please refrain from smoking.|សូមកុំជក់បារី។
relocate|relocated|relocated|ផ្លាស់ទីតាំង|The office relocated to Siem Reap.|ការិយាល័យបានផ្លាស់ទីតាំងទៅសៀមរាប។
reschedule|rescheduled|rescheduled|កំណត់ពេលថ្មី|We rescheduled the meeting.|យើងបានកំណត់ពេលប្រជុំថ្មី។
retreat|retreated|retreated|ដកថយ|The army retreated.|កងទ័ពបានដកថយ។
revolutionize|revolutionized|revolutionized|ធ្វើបដិវត្ត|Smartphones revolutionized communication.|ស្មាតហ្វូនបានធ្វើបដិវត្តលើការទំនាក់ទំនង។
roam|roamed|roamed|ដើរព្រាត|Cows roam freely in the village.|គោដើរព្រាតដោយសេរីនៅក្នុងភូមិ។
screen|screened|screened|ត្រួតពិនិត្យ / បញ្ចាំង|They screened the film on Friday.|ពួកគេបានបញ្ចាំងភាពយន្តនៅថ្ងៃសុក្រ។
shatter|shattered|shattered|បែកខ្ទេច|The glass shattered.|កែវបានបែកខ្ទេច។
signify|signified|signified|មានន័យថា / បង្ហាញ|A red light signifies danger.|ភ្លើងក្រហមមានន័យថាគ្រោះថ្នាក់។
smuggle|smuggled|smuggled|រត់ពន្ធ|They smuggled goods across the border.|ពួកគេបានរត់ពន្ធទំនិញឆ្លងព្រំដែន។
speculate|speculated|speculated|ស្មាន|Experts speculated about the cause.|អ្នកជំនាញបានស្មានអំពីមូលហេតុ។
submerge|submerged|submerged|លិចក្នុងទឹក|The flood submerged the fields.|ទឹកជំនន់បានលិចវាលស្រែ។
summon|summoned|summoned|កោះហៅ|The judge summoned the witness.|ចៅក្រមបានកោះហៅសាក្សី។
surrender|surrendered|surrendered|ចុះចាញ់|The enemy surrendered.|សត្រូវបានចុះចាញ់។
tame|tamed|tamed|បង្ហាត់ (សត្វ)|They tamed the wild horse.|ពួកគេបានបង្ហាត់សេះព្រៃ។
tempt|tempted|tempted|ល្បួង|The cake tempted me.|នំខេកបានល្បួងខ្ញុំ។
unify|unified|unified|បង្រួបបង្រួម|The king unified the country.|ព្រះមហាក្សត្របានបង្រួបបង្រួមប្រទេស។
venture|ventured|ventured|ហ៊ានធ្វើ / ផ្សងព្រេង|They ventured into the jungle.|ពួកគេបានហ៊ានចូលទៅក្នុងព្រៃ។
vow|vowed|vowed|សច្ចា|She vowed to return.|នាងបានសច្ចាថានឹងត្រឡប់មកវិញ។
wither|withered|withered|ស្វិត|The flowers withered.|ផ្កាបានស្វិត។
abstain|abstained|abstained|ជៀសវាង / មិនបោះឆ្នោត|Three members abstained from voting.|សមាជិកបីនាក់បានអនុប្បវាទ (មិនបោះឆ្នោត)។
activate|activated|activated|ធ្វើឲ្យដំណើរការ|Activate your account.|ធ្វើឲ្យគណនីរបស់អ្នកដំណើរការ។
deactivate|deactivated|deactivated|បិទដំណើរការ|Deactivate the alarm.|បិទរោទ៍ប្រកាសអាសន្ន។
adhere|adhered|adhered|ប្រកាន់ខ្ជាប់|Adhere to the rules.|ប្រកាន់ខ្ជាប់តាមច្បាប់។
administer|administered|administered|គ្រប់គ្រង / ផ្ដល់ (ថ្នាំ)|The nurse administered the medicine.|គិលានុបដ្ឋាយិកាបានផ្ដល់ថ្នាំ។
affirm|affirmed|affirmed|បញ្ជាក់|She affirmed her support.|នាងបានបញ្ជាក់ពីការគាំទ្ររបស់នាង។
aid|aided|aided|ជួយ|The money aided flood victims.|ប្រាក់នេះបានជួយជនរងគ្រោះទឹកជំនន់។
anger|angered|angered|ធ្វើឲ្យខឹង|His words angered her.|សម្ដីរបស់គាត់ធ្វើឲ្យនាងខឹង។
archive|archived|archived|រក្សាទុកជាបណ្ណសារ|Archive old emails.|រក្សាទុកអ៊ីមែលចាស់ៗជាបណ្ណសារ។
astonish|astonished|astonished|ធ្វើឲ្យភ្ញាក់ផ្អើលខ្លាំង|The news astonished everyone.|ដំណឹងនេះធ្វើឲ្យគ្រប់គ្នាភ្ញាក់ផ្អើលខ្លាំង។
avert|averted|averted|ជៀសផុត|They averted a disaster.|ពួកគេបានជៀសផុតពីគ្រោះមហន្តរាយ។
befriend|befriended|befriended|រាប់អានជាមិត្ត|She befriended the new student.|នាងបានរាប់អានសិស្សថ្មីជាមិត្ត។
blur|blurred|blurred|ធ្វើឲ្យព្រិល|Blur the background.|ធ្វើឲ្យផ្ទៃខាងក្រោយព្រិល។
bookmark|bookmarked|bookmarked|ចំណាំទំព័រ|Bookmark this website.|ចំណាំទំព័រវេបសាយនេះ។
bribe|bribed|bribed|សូកប៉ាន់|He tried to bribe the officer.|គាត់បានព្យាយាមសូកប៉ាន់មន្ត្រី។
burden|burdened|burdened|ដាក់បន្ទុក|Don't burden your parents.|កុំដាក់បន្ទុកលើឪពុកម្ដាយរបស់អ្នក។
capitalize|capitalized|capitalized|សរសេរអក្សរធំ / ឆ្លៀតឱកាស|Capitalize the first letter.|សរសេរអក្សរទីមួយជាអក្សរធំ។
caution|cautioned|cautioned|ព្រមាន|The doctor cautioned him about sugar.|វេជ្ជបណ្ឌិតបានព្រមានគាត់អំពីស្ករ។
censor|censored|censored|ត្រួតពិនិត្យ / កាត់ចេញ|The film was censored.|ភាពយន្តនេះត្រូវបានកាត់ចេញខ្លះៗ។
compute|computed|computed|គណនា|The computer computes the results.|កុំព្យូទ័រគណនាលទ្ធផល។
condense|condensed|condensed|បង្រួម|Condense the report to one page.|បង្រួមរបាយការណ៍ឲ្យនៅត្រឹមមួយទំព័រ។
confide|confided|confided|និយាយរឿងសម្ងាត់ដោយទុកចិត្ត|She confided in her sister.|នាងបាននិយាយរឿងសម្ងាត់ប្រាប់បងស្រីរបស់នាង។
conform|conformed|conformed|អនុលោមតាម|Products must conform to standards.|ផលិតផលត្រូវតែអនុលោមតាមស្តង់ដារ។
corrupt|corrupted|corrupted|ធ្វើឲ្យខូច / ពុករលួយ|The virus corrupted my files.|មេរោគបានធ្វើឲ្យឯកសាររបស់ខ្ញុំខូច។
crumble|crumbled|crumbled|បាក់បែកជាកំទេច|The old wall crumbled.|ជញ្ជាំងចាស់បានបាក់បែកជាកំទេច។
decay|decayed|decayed|ពុកផុយ|Sugar makes teeth decay.|ស្ករធ្វើឲ្យធ្មេញពុក។
deceive|deceived|deceived|បោកប្រាស់|Don't deceive your friends.|កុំបោកប្រាស់មិត្តភក្តិរបស់អ្នក។
deduct|deducted|deducted|កាត់ (ប្រាក់)|Tax is deducted from your salary.|ពន្ធត្រូវបានកាត់ចេញពីប្រាក់ខែរបស់អ្នក។
descend|descended|descended|ចុះ|The plane began to descend.|យន្តហោះបានចាប់ផ្ដើមចុះ។
detach|detached|detached|ផ្ដាច់|Detach the cable.|ផ្ដាច់ខ្សែ។
dilute|diluted|diluted|លាយឲ្យរាវ|Dilute the juice with water.|លាយទឹកផ្លែឈើជាមួយទឹកឲ្យរាវ។
disable|disabled|disabled|បិទ / ធ្វើឲ្យប្រើមិនបាន|Disable notifications.|បិទការជូនដំណឹង។
disapprove|disapproved|disapproved|មិនយល់ព្រម|My parents disapprove of smoking.|ឪពុកម្ដាយខ្ញុំមិនយល់ព្រមនឹងការជក់បារីទេ។
discard|discarded|discarded|បោះចោល|Discard old food.|បោះចោលម្ហូបចាស់។
disconnect|disconnected|disconnected|ផ្ដាច់|The internet disconnected.|អ៊ីនធឺណិតបានដាច់។
disguise|disguised|disguised|ក្លែងខ្លួន|He disguised himself as a monk.|គាត់បានក្លែងខ្លួនជាព្រះសង្ឃ។
divorce|divorced|divorced|លែងលះ|They divorced last year.|ពួកគេបានលែងលះគ្នាកាលពីឆ្នាំមុន។
duplicate|duplicated|duplicated|ចម្លងមួយទៀត|Duplicate the file.|ចម្លងឯកសារមួយទៀត។
elevate|elevated|elevated|លើកឡើង|Elevate your leg.|លើកជើងរបស់អ្នកឲ្យខ្ពស់។
empower|empowered|empowered|ផ្ដល់អំណាច / លើកកម្លាំង|Education empowers women.|ការអប់រំផ្ដល់អំណាចដល់ស្ត្រី។
enclose|enclosed|enclosed|ភ្ជាប់មកជាមួយ / ព័ទ្ធ|Please find the receipt enclosed.|សូមមើលវិក្កយបត្រដែលភ្ជាប់មកជាមួយ។
endanger|endangered|endangered|ធ្វើឲ្យគ្រោះថ្នាក់|Pollution endangers wildlife.|ការបំពុលធ្វើឲ្យសត្វព្រៃប្រឈមនឹងគ្រោះថ្នាក់។
entrust|entrusted|entrusted|ប្រគល់ឲ្យទុកចិត្ត|She entrusted me with her keys.|នាងបានប្រគល់សោឲ្យខ្ញុំទុកដោយទុកចិត្ត។
erupt|erupted|erupted|ផ្ទុះ (ភ្នំភ្លើង)|The volcano erupted.|ភ្នំភ្លើងបានផ្ទុះ។
extinguish|extinguished|extinguished|ពន្លត់|Extinguish the fire.|ពន្លត់ភ្លើង។
finalize|finalized|finalized|បញ្ចប់ចុងក្រោយ|Finalize the design.|បញ្ចប់ការរចនាចុងក្រោយ។
generalize|generalized|generalized|និយាយទូទៅ|Don't generalize about people.|កុំនិយាយទូទៅអំពីមនុស្ស។
grieve|grieved|grieved|សោកសៅ|She grieved for her dog.|នាងសោកសៅចំពោះឆ្កែរបស់នាង។
haunt|haunted|haunted|លងបន្លាច|The memory haunts him.|អនុស្សាវរីយ៍នោះលងបន្លាចគាត់។
hover|hovered|hovered|ហោះសំកាំង|A drone hovered above us.|យន្តហោះគ្មានមនុស្សបើកបានហោះសំកាំងពីលើយើង។
hydrate|hydrated|hydrated|ផ្ដល់ជាតិទឹក|Stay hydrated in hot weather.|ផឹកទឹកឲ្យបានគ្រប់គ្រាន់នៅពេលអាកាសធាតុក្ដៅ។
interrogate|interrogated|interrogated|សួរចម្លើយ|Police interrogated the suspect.|ប៉ូលិសបានសួរចម្លើយជនសង្ស័យ។
legalize|legalized|legalized|ធ្វើឲ្យស្របច្បាប់|They legalized the business.|ពួកគេបានធ្វើឲ្យអាជីវកម្មស្របច្បាប់។
lengthen|lengthened|lengthened|ពន្លូត|Lengthen the skirt.|ពន្លូតសំពត់។
shorten|shortened|shortened|ធ្វើឲ្យខ្លី|Shorten your essay.|ធ្វើឲ្យតែងសេចក្ដីរបស់អ្នកខ្លីជាងនេះ។
marvel|marveled|marveled|ស្ងើចសរសើរ|Tourists marvel at Angkor Wat.|ភ្ញៀវទេសចរស្ងើចសរសើរអង្គរវត្ត។
mediate|mediated|mediated|សម្របសម្រួលវិវាទ|The teacher mediated between the two students.|គ្រូបានសម្របសម្រួលរវាងសិស្សទាំងពីរនាក់។
mentor|mentored|mentored|ណែនាំ (ជាអ្នកណែនាំ)|She mentors young designers.|នាងណែនាំអ្នករចនាវ័យក្មេង។
misplace|misplaced|misplaced|ដាក់ភ្លេច|I misplaced my keys.|ខ្ញុំដាក់សោភ្លេចនៅកន្លែងណាមួយ។
misspell|misspelled|misspelled|ប្រកបខុស|You misspelled my name.|អ្នកប្រកបឈ្មោះខ្ញុំខុស។
nag|nagged|nagged|រអ៊ូរទាំ|Stop nagging me!|ឈប់រអ៊ូរទាំដាក់ខ្ញុំទៅ!
outperform|outperformed|outperformed|ធ្វើបានល្អជាង|She outperformed her classmates.|នាងធ្វើបានល្អជាងមិត្តរួមថ្នាក់។
overcharge|overcharged|overcharged|គិតថ្លៃហួស|The taxi driver overcharged us.|អ្នកបើកតាក់ស៊ីបានគិតថ្លៃយើងហួសពេក។
overeat|overate|overeaten|ញ៉ាំច្រើនពេក|Don't overeat at night.|កុំញ៉ាំច្រើនពេកនៅពេលយប់។
overreact|overreacted|overreacted|មានប្រតិកម្មហួសហេតុ|Don't overreact.|កុំមានប្រតិកម្មហួសហេតុ។
overwork|overworked|overworked|ធ្វើការហួសកម្លាំង|He overworked and got sick.|គាត់ធ្វើការហួសកម្លាំង ហើយឈឺ។
pave|paved|paved|ចាក់កៅស៊ូ / ក្រាល|They paved the road.|ពួកគេបានចាក់កៅស៊ូផ្លូវ។
penalize|penalized|penalized|ពិន័យ|Late assignments are penalized.|កិច្ចការដែលប្រគល់យឺតនឹងត្រូវកាត់ពិន្ទុ។
personalize|personalized|personalized|ធ្វើតាមចិត្តផ្ទាល់ខ្លួន|Personalize your profile.|កែប្រែប្រវត្តិរូបរបស់អ្នកតាមចិត្ត។
plagiarize|plagiarized|plagiarized|លួចចម្លងស្នាដៃ|Never plagiarize an essay.|កុំលួចចម្លងតែងសេចក្ដីរបស់អ្នកដទៃ។
pledge|pledged|pledged|សន្យា|They pledged to help.|ពួកគេបានសន្យាថានឹងជួយ។
preheat|preheated|preheated|កម្ដៅមុន|Preheat the oven.|កម្ដៅឡមុន។
procrastinate|procrastinated|procrastinated|ពន្យារពេលធ្វើការ|Stop procrastinating!|ឈប់ពន្យារពេលធ្វើការទៅ!
publicize|publicized|publicized|ផ្សព្វផ្សាយជាសាធារណៈ|They publicized the event.|ពួកគេបានផ្សព្វផ្សាយព្រឹត្តិការណ៍នេះជាសាធារណៈ។
puzzle|puzzled|puzzled|ធ្វើឲ្យងឿងឆ្ងល់|The question puzzled me.|សំណួរនោះធ្វើឲ្យខ្ញុំងឿងឆ្ងល់។
quarantine|quarantined|quarantined|ធ្វើចត្តាឡីស័ក|Travelers were quarantined.|អ្នកធ្វើដំណើរត្រូវបានធ្វើចត្តាឡីស័ក។
reconnect|reconnected|reconnected|ភ្ជាប់ឡើងវិញ|Reconnect to the Wi-Fi.|ភ្ជាប់ Wi-Fi ឡើងវិញ។
redo|redid|redone|ធ្វើម្ដងទៀត|Redo the exercise.|ធ្វើលំហាត់ម្ដងទៀត។
rename|renamed|renamed|ប្ដូរឈ្មោះ|Rename the file.|ប្ដូរឈ្មោះឯកសារ។
reopen|reopened|reopened|បើកឡើងវិញ|The school reopened.|សាលាបានបើកឡើងវិញ។
rephrase|rephrased|rephrased|និយាយម្យ៉ាងទៀត|Can you rephrase the question?|តើអ្នកអាចសួរសំណួរម្យ៉ាងទៀតបានទេ?
reread|reread|reread|អានម្ដងទៀត|Reread the instructions.|អានការណែនាំម្ដងទៀត។
reset|reset|reset|កំណត់ឡើងវិញ|Reset your password.|កំណត់ពាក្យសម្ងាត់របស់អ្នកឡើងវិញ។
retake|retook|retaken|ប្រឡងឡើងវិញ|He retook the exam.|គាត់បានប្រឡងម្ដងទៀត។
rethink|rethought|rethought|គិតឡើងវិញ|Rethink your plan.|គិតពីផែនការរបស់អ្នកឡើងវិញ។
reuse|reused|reused|ប្រើឡើងវិញ|Reuse plastic bags.|ប្រើថង់ប្លាស្ទិកឡើងវិញ។
ridicule|ridiculed|ridiculed|ចំអកមើលងាយ|Don't ridicule others.|កុំចំអកមើលងាយអ្នកដទៃ។
sanitize|sanitized|sanitized|សម្លាប់មេរោគ|Sanitize your hands.|សម្លាប់មេរោគលើដៃរបស់អ្នក។
showcase|showcased|showcased|បង្ហាញស្នាដៃ|The fair showcased local products.|ពិព័រណ៍បានបង្ហាញផលិតផលក្នុងស្រុក។
shortlist|shortlisted|shortlisted|ជ្រើសចូលបញ្ជីចុងក្រោយ|She was shortlisted for the job.|នាងត្រូវបានជ្រើសចូលបញ្ជីចុងក្រោយសម្រាប់ការងារនោះ។
skim|skimmed|skimmed|អានរំលងៗ|Skim the article first.|អានរំលងៗអត្ថបទជាមុនសិន។
socialize|socialized|socialized|រាប់អានសង្គម|Students socialize after class.|សិស្សរាប់អានគ្នាបន្ទាប់ពីម៉ោងរៀន។
stammer|stammered|stammered|និយាយរដាក់|He stammered when nervous.|គាត់និយាយរដាក់ពេលភ័យ។
straighten|straightened|straightened|តម្រង់|Straighten your back.|តម្រង់ខ្នងរបស់អ្នក។
swipe|swiped|swiped|អូសអេក្រង់ / ឆូតកាត|Swipe left to delete.|អូសទៅឆ្វេងដើម្បីលុប។
tilt|tilted|tilted|ផ្អៀង|Tilt your head.|ផ្អៀងក្បាលរបស់អ្នក។
transcribe|transcribed|transcribed|ចម្លងជាអក្សរ|Transcribe the interview.|ចម្លងការសម្ភាសន៍ជាអក្សរ។
trek|trekked|trekked|ដើរផ្លូវឆ្ងាយ|We trekked through the jungle.|យើងបានដើរផ្លូវឆ្ងាយកាត់ព្រៃ។
unfold|unfolded|unfolded|លាត / បង្ហាញ|Unfold the map.|លាតផែនទី។
unload|unloaded|unloaded|ទម្លាក់ឥវ៉ាន់|Unload the truck.|ទម្លាក់ឥវ៉ាន់ចេញពីឡាន។
unsubscribe|unsubscribed|unsubscribed|ឈប់ជាវ|Unsubscribe from emails.|ឈប់ជាវអ៊ីមែល។
vibrate|vibrated|vibrated|ញ័រ|My phone vibrated.|ទូរស័ព្ទរបស់ខ្ញុំបានញ័រ។
acquaint|acquainted|acquainted|ធ្វើឲ្យស្គាល់|Get acquainted with your new classmates.|ស្គាល់មិត្តរួមថ្នាក់ថ្មីរបស់អ្នក។
captivate|captivated|captivated|ទាក់ចិត្ត|The dancers captivated the audience.|អ្នករាំបានទាក់ចិត្តទស្សនិកជន។
champion|championed|championed|គាំទ្រយ៉ាងសកម្ម|She championed girls' education.|នាងបានគាំទ្រយ៉ាងសកម្មដល់ការអប់រំក្មេងស្រី។
clutch|clutched|clutched|ក្ដាប់ជាប់|She clutched her bag.|នាងបានក្ដាប់កាបូបរបស់នាងជាប់។
commend|commended|commended|សរសើរជាផ្លូវការ|The mayor commended the volunteers.|អភិបាលក្រុងបានសរសើរអ្នកស្ម័គ្រចិត្ត។
compel|compelled|compelled|បង្ខំ|The rain compelled us to stay inside.|ភ្លៀងបានបង្ខំឲ្យយើងនៅក្នុងផ្ទះ។
confer|conferred|conferred|ផ្ដល់ (សញ្ញាបត្រ) / ពិភាក្សា|The university conferred degrees.|សាកលវិទ្យាល័យបានប្រគល់សញ្ញាបត្រ។
consent|consented|consented|យល់ព្រម|Her parents consented to the marriage.|ឪពុកម្ដាយរបស់នាងបានយល់ព្រមឲ្យរៀបការ។
contend|contended|contended|ប្រកួតប្រជែង / អះអាង|Three teams contend for the title.|ក្រុមបីកំពុងប្រកួតប្រជែងដណ្ដើមពានរង្វាន់។
convene|convened|convened|កោះប្រជុំ|The council convened on Monday.|ក្រុមប្រឹក្សាបានកោះប្រជុំនៅថ្ងៃច័ន្ទ។
cram|crammed|crammed|រៀនទន្ទេញប្រញាប់ / ញាត់|I crammed for the test all night.|ខ្ញុំបានរៀនទន្ទេញប្រញាប់ពេញមួយយប់សម្រាប់ការប្រឡង។
critique|critiqued|critiqued|វាយតម្លៃរិះគន់|The teacher critiqued our designs.|គ្រូបានវាយតម្លៃរិះគន់ការរចនារបស់យើង។
dazzle|dazzled|dazzled|ធ្វើឲ្យស្រឡាំងកាំង|The fireworks dazzled the crowd.|កាំជ្រួចបានធ្វើឲ្យហ្វូងមនុស្សស្រឡាំងកាំង។
deem|deemed|deemed|ចាត់ទុកថា|The film was deemed a success.|ភាពយន្តនេះត្រូវបានចាត់ទុកថាទទួលបានជោគជ័យ។
defer|deferred|deferred|ពន្យារ|She deferred her studies for a year.|នាងបានពន្យារការសិក្សារបស់នាងមួយឆ្នាំ។
denounce|denounced|denounced|បរិហារ|They denounced the violence.|ពួកគេបានបរិហារអំពើហិង្សា។
deplete|depleted|depleted|ធ្វើឲ្យអស់|We are depleting natural resources.|យើងកំពុងធ្វើឲ្យធនធានធម្មជាតិអស់។
deport|deported|deported|និរទេស|He was deported for working illegally.|គាត់ត្រូវបាននិរទេសដោយសារធ្វើការខុសច្បាប់។
designate|designated|designated|កំណត់ / ចាត់តាំង|This area is designated for parking.|តំបន់នេះត្រូវបានកំណត់សម្រាប់ចតឡាន។
devour|devoured|devoured|ស៊ីលេប / អានយ៉ាងលឿន|She devoured the book in one day.|នាងបានអានសៀវភៅនោះចប់ក្នុងមួយថ្ងៃ។
dismantle|dismantled|dismantled|រុះរើ|They dismantled the stage.|ពួកគេបានរុះរើឆាក។
dispatch|dispatched|dispatched|បញ្ជូន|The order was dispatched today.|ការកុម្ម៉ង់ត្រូវបានបញ្ជូនចេញថ្ងៃនេះ។
disperse|dispersed|dispersed|បំបែកហ្វូង|Police dispersed the crowd.|ប៉ូលិសបានបំបែកហ្វូងមនុស្ស។
disregard|disregarded|disregarded|មិនអើពើ|He disregarded the warning.|គាត់បានមិនអើពើនឹងការព្រមាន។
dissuade|dissuaded|dissuaded|បញ្ចុះបញ្ចូលកុំឲ្យធ្វើ|I dissuaded him from quitting.|ខ្ញុំបានបញ្ចុះបញ្ចូលគាត់កុំឲ្យឈប់។
dwindle|dwindled|dwindled|ថយចុះបន្តិចម្ដងៗ|The fish population dwindled.|ចំនួនត្រីបានថយចុះបន្តិចម្ដងៗ។
embark|embarked|embarked|ចាប់ផ្ដើម (ដំណើរ)|They embarked on a new project.|ពួកគេបានចាប់ផ្ដើមគម្រោងថ្មីមួយ។
embody|embodied|embodied|តំណាង / ជារូបរាង|She embodies kindness.|នាងជាតំណាងនៃចិត្តល្អ។
entail|entailed|entailed|ទាមទារ / ពាក់ព័ន្ធ|The job entails a lot of travel.|ការងារនេះតម្រូវឲ្យធ្វើដំណើរច្រើន។
equate|equated|equated|ចាត់ទុកស្មើ|Don't equate money with happiness.|កុំចាត់ទុកលុយស្មើនឹងសុភមង្គល។
eradicate|eradicated|eradicated|លុបបំបាត់ចោល|They eradicated polio.|ពួកគេបានលុបបំបាត់ជំងឺស្វិតដៃជើង។
evade|evaded|evaded|គេចវេះ|He evaded the question.|គាត់បានគេចវេះសំណួរ។
evoke|evoked|evoked|ដាស់អារម្មណ៍ / ការចងចាំ|The song evokes childhood memories.|បទចម្រៀងនេះដាស់ការចងចាំកាលពីក្មេង។
exert|exerted|exerted|ប្រើ (កម្លាំង / ឥទ្ធិពល)|Parents exert influence on children.|ឪពុកម្ដាយមានឥទ្ធិពលលើកូនៗ។
fortify|fortified|fortified|ពង្រឹង|The milk is fortified with vitamins.|ទឹកដោះគោនេះត្រូវបានបន្ថែមវីតាមីន។
hamper|hampered|hampered|រារាំង|Heavy rain hampered the rescue.|ភ្លៀងខ្លាំងបានរារាំងការជួយសង្គ្រោះ។
hasten|hastened|hastened|ពន្លឿន|Stress may hasten aging.|ភាពតានតឹងអាចពន្លឿនភាពចាស់។
heed|heeded|heeded|យកចិត្តទុកដាក់ស្ដាប់|Heed your doctor's advice.|ស្ដាប់ដំបូន្មានរបស់វេជ្ជបណ្ឌិត។
impair|impaired|impaired|ធ្វើឲ្យខ្សោយ|Loud music can impair hearing.|តន្ត្រីខ្លាំងៗអាចធ្វើឲ្យការស្ដាប់ខ្សោយ។
impede|impeded|impeded|រារាំង|Corruption impedes progress.|អំពើពុករលួយរារាំងការរីកចម្រើន។
incur|incurred|incurred|ទទួលរង (ថ្លៃ / ការខាតបង់)|The company incurred big losses.|ក្រុមហ៊ុនបានរងការខាតបង់ធំ។
induce|induced|induced|បណ្ដាលឲ្យ|Some medicines induce sleep.|ថ្នាំខ្លះធ្វើឲ្យងងុយគេង។
inflict|inflicted|inflicted|ធ្វើឲ្យរង (ការខូចខាត)|The storm inflicted heavy damage.|ព្យុះបានបង្កការខូចខាតយ៉ាងធ្ងន់ធ្ងរ។
instill|instilled|instilled|បណ្ដុះ (គុណធម៌)|Parents instill good values.|ឪពុកម្ដាយបណ្ដុះគុណតម្លៃល្អៗ។
intercept|intercepted|intercepted|ស្ទាក់ចាប់|He intercepted the pass.|គាត់បានស្ទាក់ចាប់បាល់។
lament|lamented|lamented|ទួញសោក / សោកស្ដាយ|They lamented the loss of the forest.|ពួកគេសោកស្ដាយចំពោះការបាត់បង់ព្រៃឈើ។
loom|loomed|loomed|ខិតជិតមកដល់ (គួរឲ្យខ្លាច)|Exams loom ahead.|ការប្រឡងកំពុងខិតជិតមកដល់។
mandate|mandated|mandated|តម្រូវដោយច្បាប់|The law mandates seat belts.|ច្បាប់តម្រូវឲ្យពាក់ខ្សែក្រវាត់សុវត្ថិភាព។
mobilize|mobilized|mobilized|កៀរគរ|They mobilized volunteers.|ពួកគេបានកៀរគរអ្នកស្ម័គ្រចិត្ត។
mock|mocked|mocked|ចំអក|Don't mock his accent.|កុំចំអកសំនៀងរបស់គាត់។
nourish|nourished|nourished|ផ្ដល់អាហារូបត្ថម្ភ|Good food nourishes the body.|អាហារល្អផ្ដល់អាហារូបត្ថម្ភដល់រាងកាយ។
oblige|obliged|obliged|តម្រូវ / បង្ខំ|The law obliges drivers to stop.|ច្បាប់តម្រូវឲ្យអ្នកបើកបរឈប់។
offset|offset|offset|ទូទាត់ / ទប់ទល់|Higher prices offset the costs.|តម្លៃខ្ពស់ជាងមុនបានទូទាត់ចំណាយ។
outnumber|outnumbered|outnumbered|ច្រើនជាង|Girls outnumber boys in our class.|ក្មេងស្រីមានច្រើនជាងក្មេងប្រុសក្នុងថ្នាក់យើង។
override|overrode|overridden|មានអាទិភាពជាង / បដិសេធ|Safety overrides speed.|សុវត្ថិភាពសំខាន់ជាងល្បឿន។
overturn|overturned|overturned|ផ្កាប់ / លុបចោល|The truck overturned.|ឡានដឹកទំនិញបានផ្កាប់។
plummet|plummeted|plummeted|ធ្លាក់ចុះគំហុក|Temperatures plummeted.|សីតុណ្ហភាពបានធ្លាក់ចុះគំហុក។
prevail|prevailed|prevailed|ឈ្នះ / មានលើសលុប|Justice will prevail.|យុត្តិធម៌នឹងមានជ័យជម្នះ។
propel|propelled|propelled|ជំរុញទៅមុខ|Engines propel the boat.|ម៉ាស៊ីនជំរុញទូកឲ្យទៅមុខ។
rally|rallied|rallied|ប្រមូលផ្ដុំ / គាំទ្រ|Fans rallied behind the team.|អ្នកគាំទ្របានរួបរួមគ្នាគាំទ្រក្រុម។
reap|reaped|reaped|ប្រមូលផល|You reap what you sow.|ធ្វើល្អបានល្អ ធ្វើអាក្រក់បានអាក្រក់។
recede|receded|receded|ស្រក (ទឹក)|The flood waters receded.|ទឹកជំនន់បានស្រក។
reckon|reckoned|reckoned|គិតថា|I reckon it will rain.|ខ្ញុំគិតថាមេឃនឹងភ្លៀង។
rectify|rectified|rectified|កែតម្រូវ|They rectified the mistake.|ពួកគេបានកែតម្រូវកំហុស។
reiterate|reiterated|reiterated|និយាយម្ដងទៀត|The teacher reiterated the rules.|គ្រូបាននិយាយពីច្បាប់ម្ដងទៀត។
remedy|remedied|remedied|ដោះស្រាយ / ព្យាបាល|We must remedy the situation.|យើងត្រូវតែដោះស្រាយស្ថានភាពនេះ។
repel|repelled|repelled|ច្រានចោល / ការពារ|This spray repels mosquitoes.|ថ្នាំបាញ់នេះការពារមូស។
replenish|replenished|replenished|បំពេញឡើងវិញ|Replenish your water supply.|បំពេញទឹកដែលអ្នកមានឡើងវិញ។
reprimand|reprimanded|reprimanded|ស្ដីបន្ទោស (ផ្លូវការ)|The boss reprimanded him.|ថៅកែបានស្ដីបន្ទោសគាត់។
restrain|restrained|restrained|ទប់ / ឃាត់|Police restrained the man.|ប៉ូលិសបានឃាត់បុរសនោះ។
retaliate|retaliated|retaliated|សងសឹក|They retaliated quickly.|ពួកគេបានសងសឹកយ៉ាងលឿន។
revoke|revoked|revoked|ដកហូត (អាជ្ញាប័ណ្ណ)|They revoked his license.|ពួកគេបានដកហូតប័ណ្ណបើកបររបស់គាត់។
shun|shunned|shunned|ជៀសវាង|He shunned publicity.|គាត់បានជៀសវាងការផ្សព្វផ្សាយ។
soothe|soothed|soothed|បន្ធូរ / លួងលោម|Music soothes the mind.|តន្ត្រីធ្វើឲ្យចិត្តស្ងប់។
spur|spurred|spurred|ជំរុញ|The prize spurred her on.|រង្វាន់បានជំរុញនាងឲ្យខិតខំ។
squander|squandered|squandered|ខ្ជះខ្ជាយ|He squandered his money.|គាត់បានខ្ជះខ្ជាយលុយរបស់គាត់។
stagnate|stagnated|stagnated|នៅទ្រឹង|The economy stagnated.|សេដ្ឋកិច្ចនៅទ្រឹង។
stall|stalled|stalled|គាំង / ពន្យារ|The car stalled.|ឡានបានរលត់ម៉ាស៊ីន។
steer|steered|steered|កាច់ចង្កូត / ដឹកនាំ|She steered the boat.|នាងបានកាច់ចង្កូតទូក។
streamline|streamlined|streamlined|សម្រួលដំណើរការ|They streamlined the process.|ពួកគេបានសម្រួលដំណើរការការងារ។
subside|subsided|subsided|ថយចុះ / ស្រាក|The pain subsided.|ការឈឺចាប់បានស្រាកស្រាន្ត។
surge|surged|surged|កើនឡើងភ្លាមៗ|Demand surged.|តម្រូវការបានកើនឡើងភ្លាមៗ។
sway|swayed|swayed|យោល / បញ្ចុះបញ្ចូល|The trees swayed in the wind.|ដើមឈើយោលតាមខ្យល់។
topple|toppled|toppled|ផ្ដួល|The wind toppled the tree.|ខ្យល់បានផ្ដួលដើមឈើ។
unearth|unearthed|unearthed|ជីករកឃើញ|They unearthed ancient coins.|ពួកគេបានជីករកឃើញកាក់បុរាណ។
vacate|vacated|vacated|ចាកចេញ (ពីកន្លែង)|Please vacate the room by noon.|សូមចាកចេញពីបន្ទប់មុនម៉ោង ១២ ថ្ងៃត្រង់។
waive|waived|waived|លើកលែង (ថ្លៃ)|The school waived the fees.|សាលាបានលើកលែងថ្លៃសិក្សា។
baste|basted|basted|ស្រោចទឹកខ្លាញ់ (ពេលអាំង)|Baste the chicken every ten minutes.|ស្រោចទឹកខ្លាញ់លើសាច់មាន់រៀងរាល់ដប់នាទី។
blanch|blanched|blanched|ស្រុះទឹកពុះ|Blanch the vegetables for one minute.|ស្រុះបន្លែក្នុងទឹកពុះមួយនាទី។
braise|braised|braised|ខ / ចម្អិនយឺតៗ|Braise the pork with soy sauce.|ខសាច់ជ្រូកជាមួយទឹកស៊ីអ៊ីវ។
caramelize|caramelized|caramelized|ធ្វើឲ្យស្ករឡើងពណ៌ (ខារ៉ាមែល)|Caramelize the sugar slowly.|ធ្វើឲ្យស្ករឡើងពណ៌ខារ៉ាមែលយឺតៗ។
dice|diced|diced|ហាន់ជាដុំការ៉េ|Dice the onions.|ហាន់ខ្ទឹមបារាំងជាដុំការ៉េតូចៗ។
glaze|glazed|glazed|លាបស្រោប (ឲ្យរលោង)|Glaze the cake with chocolate.|លាបស្រោបនំខេកជាមួយសូកូឡា។
grate|grated|grated|កោស / ឈូស (ដូង ឈីស)|Grate the coconut.|កោសដូង។
knead|kneaded|kneaded|ច្របាច់ម្សៅ|Knead the dough for ten minutes.|ច្របាច់ម្សៅដប់នាទី។
mince|minced|minced|ចិញ្ច្រាំឲ្យម៉ត់|Mince the garlic and lemongrass.|ចិញ្ច្រាំខ្ទឹមស និងស្លឹកគ្រៃឲ្យម៉ត់។
purée|puréed|puréed|កិនឲ្យម៉ត់ (ជាទឹក)|Purée the pumpkin for the baby.|កិនល្ពៅឲ្យម៉ត់សម្រាប់ទារក។
sauté|sautéed|sautéed|ឆា|Sauté the vegetables in oil.|ឆាបន្លែជាមួយប្រេង។
scramble|scrambled|scrambled|ចៀនពងកូរ / ប្រញាប់ប្រញាល់|I scrambled two eggs.|ខ្ញុំបានចៀនពងកូរពីរគ្រាប់។
sear|seared|seared|ចៀនឲ្យឆាប់ឡើងពណ៌|Sear the beef on high heat.|ចៀនសាច់គោឲ្យឡើងពណ៌លើភ្លើងខ្លាំង។
sift|sifted|sifted|រែង|Sift the flour first.|រែងម្សៅជាមុនសិន។
simmer|simmered|simmered|ដាំឲ្យពុះតិចៗ|Let the soup simmer for an hour.|ទុកឲ្យស៊ុបពុះតិចៗមួយម៉ោង។
skewer|skewered|skewered|ចាក់ចង្កាក់|Skewer the meat for grilling.|ចាក់សាច់នឹងចង្កាក់ដើម្បីអាំង។
steep|steeped|steeped|ត្រាំ (តែ)|Let the tea steep for three minutes.|ទុកតែឲ្យត្រាំបីនាទី។
strain|strained|strained|ច្រោះ / ធ្វើឲ្យតឹង|Strain the noodles.|ច្រោះមីឲ្យស្រក់ទឹក។
stuff|stuffed|stuffed|ញាត់|Stuff the chicken with rice.|ញាត់បាយក្នុងសាច់មាន់។
thicken|thickened|thickened|ធ្វើឲ្យខាប់|Thicken the sauce with flour.|ធ្វើឲ្យទឹកជ្រលក់ខាប់ដោយម្សៅ។
whip|whipped|whipped|វាយ (ក្រែម / ពង)|Whip the cream until thick.|វាយក្រែមរហូតដល់ខាប់។
bandage|bandaged|bandaged|រុំរបួស|The nurse bandaged my arm.|គិលានុបដ្ឋាយិកាបានរុំរបួសដៃខ្ញុំ។
bruise|bruised|bruised|ជាំ|I bruised my knee.|ជង្គង់ខ្ញុំជាំ។
cramp|cramped|cramped|រមួលសាច់ដុំ|My leg cramped while swimming.|ជើងខ្ញុំរមួលពេលហែលទឹក។
dislocate|dislocated|dislocated|ផ្លាស់សន្លាក់|He dislocated his shoulder.|គាត់បានផ្លាស់សន្លាក់ស្មា។
fracture|fractured|fractured|បាក់ (ឆ្អឹង)|She fractured her wrist.|នាងបានបាក់កដៃ។
limp|limped|limped|ដើរខ្ញើច|He limped after the game.|គាត់ដើរខ្ញើចក្រោយការប្រកួត។
nurse|nursed|nursed|មើលថែ (អ្នកជំងឺ)|She nursed her mother back to health.|នាងបានមើលថែម្ដាយរហូតដល់ជាសះស្បើយ។
sedate|sedated|sedated|ឲ្យថ្នាំសណ្ដំ|The doctor sedated the patient.|វេជ្ជបណ្ឌិតបានឲ្យថ្នាំសណ្ដំដល់អ្នកជំងឺ។
sprain|sprained|sprained|រមួលកជើង / កដៃ|I sprained my ankle.|ខ្ញុំបានរមួលកជើង។
stitch|stitched|stitched|ដេរ (របួស / សំពត់)|The doctor stitched the cut.|វេជ្ជបណ្ឌិតបានដេររបួស។
sterilize|sterilized|sterilized|សម្លាប់មេរោគ|Sterilize the baby bottles.|សម្លាប់មេរោគដបទឹកដោះទារក។
crop|cropped|cropped|កាត់ (រូបភាព)|Crop the photo to a square.|កាត់រូបថតឲ្យជាការ៉េ។
digitize|digitized|digitized|បម្លែងជាឌីជីថល|They digitized old documents.|ពួកគេបានបម្លែងឯកសារចាស់ៗជាឌីជីថល។
embed|embedded|embedded|បង្កប់ / បញ្ចូល|Embed the video in your website.|បញ្ចូលវីដេអូទៅក្នុងវេបសាយរបស់អ្នក។
mute|muted|muted|បិទសំឡេង|Mute your microphone.|បិទសំឡេងមីក្រូហ្វូនរបស់អ្នក។
unmute|unmuted|unmuted|បើកសំឡេង|Please unmute and speak.|សូមបើកសំឡេង ហើយនិយាយ។
pin|pinned|pinned|ខ្ទាស់ / ខ្ទាស់ទុកខាងលើ|Pin the message to the top.|ខ្ទាស់សារទុកនៅខាងលើ។
preview|previewed|previewed|មើលជាមុន|Preview the file before sending.|មើលឯកសារជាមុនមុននឹងផ្ញើ។
reinstall|reinstalled|reinstalled|ដំឡើងឡើងវិញ|Reinstall the app.|ដំឡើង App ឡើងវិញ។
screenshot|screenshotted|screenshotted|ថតអេក្រង់|I screenshotted the message.|ខ្ញុំបានថតអេក្រង់សារនោះ។
sync|synced|synced|ធ្វើសមកាលកម្ម|Sync your phone with your laptop.|ធ្វើសមកាលកម្មទូរស័ព្ទជាមួយកុំព្យូទ័រយួរដៃ។
toggle|toggled|toggled|បិទបើក (ប៊ូតុង)|Toggle dark mode on.|បើករបៀបងងឹត។
unfollow|unfollowed|unfollowed|ឈប់តាមដាន|She unfollowed him on Instagram.|នាងបានឈប់តាមដានគាត់នៅលើ Instagram។
uninstall|uninstalled|uninstalled|លុបកម្មវិធីចេញ|Uninstall apps you don't use.|លុប App ដែលអ្នកមិនប្រើចេញ។
unzip|unzipped|unzipped|ពន្លាឯកសារ / ស្រាយរ៉ូត|Unzip the file first.|ពន្លាឯកសារជាមុនសិន។
iterate|iterated|iterated|ធ្វើម្ដងហើយម្ដងទៀត (កែលម្អ)|Designers iterate on their ideas.|អ្នករចនាកែលម្អគំនិតរបស់ពួកគេម្ដងហើយម្ដងទៀត។
prototype|prototyped|prototyped|បង្កើតគំរូសាកល្បង|We prototyped the app in Figma.|យើងបានបង្កើតគំរូសាកល្បង App ក្នុង Figma។
query|queried|queried|សួរ / ទាញទិន្នន័យ|Query the database for all users.|ទាញទិន្នន័យអ្នកប្រើទាំងអស់ពី database។
spam|spammed|spammed|ផ្ញើសារឥតប្រយោជន៍ច្រើន|Don't spam the group chat.|កុំផ្ញើសារឥតប្រយោជន៍ច្រើនក្នុងក្រុមជជែក។
vlog|vlogged|vlogged|ថតវីដេអូប្លុក|She vlogs about food.|នាងថតវីដេអូប្លុកអំពីម្ហូប។
livestream|livestreamed|livestreamed|ផ្សាយផ្ទាល់|They livestreamed the concert.|ពួកគេបានផ្សាយផ្ទាល់ការប្រគុំតន្ត្រី។
invoice|invoiced|invoiced|ចេញវិក្កយបត្រ|We invoiced the client.|យើងបានចេញវិក្កយបត្រឲ្យអតិថិជន។
network|networked|networked|បង្កើតទំនាក់ទំនង|She networks at business events.|នាងបង្កើតទំនាក់ទំនងនៅព្រឹត្តិការណ៍អាជីវកម្ម។
partner|partnered|partnered|ធ្វើជាដៃគូ|We partnered with a local school.|យើងបានធ្វើជាដៃគូជាមួយសាលាក្នុងស្រុក។
pitch|pitched|pitched|បង្ហាញគំនិត (ដើម្បីលក់) / បោះ|She pitched her idea to investors.|នាងបានបង្ហាញគំនិតរបស់នាងដល់វិនិយោគិន។
rebrand|rebranded|rebranded|ប្ដូររូបភាពម៉ាក|The café rebranded last year.|ហាងកាហ្វេបានប្ដូររូបភាពម៉ាកកាលពីឆ្នាំមុន។
restock|restocked|restocked|បំពេញស្តុកវិញ|The shop restocked its shelves.|ហាងបានបំពេញទំនិញលើធ្នើវិញ។
retail|retailed|retailed|លក់រាយ|The phone retails for $300.|ទូរស័ព្ទនេះលក់រាយក្នុងតម្លៃ ៣០០ ដុល្លារ។
upsell|upsold|upsold|លក់បន្ថែម (ផលិតផលថ្លៃជាង)|The waiter upsold us dessert.|អ្នករត់តុបានលក់បង្អែមបន្ថែមដល់យើង។
franchise|franchised|franchised|ផ្ដល់សិទ្ធិអាជីវកម្ម (ហ្វ្រែនឆាយ)|The brand franchised its stores.|ម៉ាកនេះបានផ្ដល់សិទ្ធិហ្វ្រែនឆាយហាងរបស់ខ្លួន។
headhunt|headhunted|headhunted|ទាក់ទាញបុគ្គលិកពូកែ|She was headhunted by a big company.|នាងត្រូវបានក្រុមហ៊ុនធំមួយទាក់ទាញឲ្យទៅធ្វើការ។
onboard|onboarded|onboarded|ណែនាំបុគ្គលិកថ្មី|We onboard new staff every Monday.|យើងណែនាំបុគ្គលិកថ្មីរៀងរាល់ថ្ងៃច័ន្ទ។
outbid|outbid|outbid|ដេញថ្លៃលើស|They outbid us for the house.|ពួកគេបានដេញថ្លៃលើសយើងសម្រាប់ផ្ទះនោះ។
outsell|outsold|outsold|លក់ដាច់ជាង|This phone outsold all others.|ទូរស័ព្ទនេះលក់ដាច់ជាងគេទាំងអស់។
sublet|sublet|sublet|ជួលបន្ត|He sublet his room to a student.|គាត់បានជួលបន្ទប់បន្តឲ្យសិស្សម្នាក់។
subcontract|subcontracted|subcontracted|ម៉ៅការបន្ត|They subcontracted the painting.|ពួកគេបានម៉ៅការបន្តការលាបថ្នាំ។
quiz|quizzed|quizzed|សួរសាកល្បង|The teacher quizzed us on verbs.|គ្រូបានសួរសាកល្បងយើងអំពី verb។
tutor|tutored|tutored|បង្រៀនគួរ|She tutors kids in English.|នាងបង្រៀនគួរភាសាអង់គ្លេសដល់ក្មេងៗ។
dribble|dribbled|dribbled|បណ្ដើរបាល់ / ស្រក់|He dribbled past two players.|គាត់បានបណ្ដើរបាល់កាត់កីឡាករពីរនាក់។
dunk|dunked|dunked|ស៊ុតបាល់បោះពីលើ / ជ្រលក់|He dunked the ball.|គាត់បានស៊ុតបាល់ពីលើកន្ត្រក។
referee|refereed|refereed|ធ្វើជាអាជ្ញាកណ្ដាល|Who refereed the match?|តើនរណាជាអាជ្ញាកណ្ដាលការប្រកួតនោះ?
spike|spiked|spiked|វាយបាល់ទះ / កើនភ្លាមៗ|She spiked the ball over the net.|នាងបានវាយបាល់ឆ្លងសំណាញ់។
volley|volleyed|volleyed|ទាត់ / វាយបាល់មុនប៉ះដី|He volleyed the ball into the goal.|គាត់បានទាត់បាល់ចូលទីមុនពេលបាល់ប៉ះដី។
row|rowed|rowed|ចែវទូក|We rowed across the lake.|យើងបានចែវទូកឆ្លងបឹង។
kayak|kayaked|kayaked|ជិះទូកកាយ៉ាក់|We kayaked on the Mekong.|យើងបានជិះទូកកាយ៉ាក់នៅទន្លេមេគង្គ។
snorkel|snorkeled|snorkeled|មុជទឹកមើលផ្កាថ្ម|We snorkeled near Koh Rong.|យើងបានមុជទឹកមើលផ្កាថ្មក្បែរកោះរ៉ុង។
hail|hailed|hailed|ធ្លាក់ព្រឹល / ហៅ (តាក់ស៊ី)|It hailed last night.|កាលពីយប់មិញមានធ្លាក់ព្រឹល។
thunder|thundered|thundered|ផ្គរលាន់|It thundered all night.|ផ្គរលាន់ពេញមួយយប់។
thaw|thawed|thawed|រលាយ (ទឹកកក)|The ice thawed in the sun.|ទឹកកកបានរលាយក្រោមពន្លឺថ្ងៃ។
sprout|sprouted|sprouted|ដុះពន្លក|The seeds sprouted after a week.|គ្រាប់ពូជបានដុះពន្លកក្រោយមួយសប្ដាហ៍។
rot|rotted|rotted|រលួយ|The fruit rotted in the heat.|ផ្លែឈើបានរលួយដោយសារកម្ដៅ។
ripen|ripened|ripened|ទុំ|The mangoes ripened quickly.|ស្វាយបានទុំយ៉ាងលឿន។
germinate|germinated|germinated|ដុះពន្លក (គ្រាប់ពូជ)|Rice seeds germinate in water.|គ្រាប់ស្រូវដុះពន្លកក្នុងទឹក។
hibernate|hibernated|hibernated|ដេកសម្ងំរដូវរងា|Bears hibernate in winter.|ខ្លាឃ្មុំដេកសម្ងំក្នុងរដូវរងា។
nest|nested|nested|ធ្វើសំបុក|Birds nest in the trees.|សត្វស្លាបធ្វើសំបុកនៅលើដើមឈើ។
graze|grazed|grazed|ស៊ីស្មៅ / កោស|Cows graze in the field.|គោស៊ីស្មៅនៅវាល។
prowl|prowled|prowled|លបដើររកចំណី|A tiger prowled the jungle.|ខ្លាមួយបានលបដើររកចំណីក្នុងព្រៃ។
howl|howled|howled|លូ (ឆ្កែចចក) / ស្រែកថ្ងូរ|Dogs howled at the moon.|ឆ្កែលូដាក់ព្រះច័ន្ទ។
buzz|buzzed|buzzed|បន្លឺសូររ៉ូៗ (ឃ្មុំ)|Bees buzzed around the flowers.|ឃ្មុំហើររ៉ូៗជុំវិញផ្កា។
growl|growled|growled|គ្រហឹម (ឆ្កែ)|The dog growled at the stranger.|ឆ្កែបានគ្រហឹមដាក់មនុស្សចម្លែក។
purr|purred|purred|ឆ្មាបន្លឺសូរពេលសប្បាយ|The cat purred on my lap.|ឆ្មាបានបន្លឺសូរផ្អឹតៗលើភ្លៅខ្ញុំ។
flutter|fluttered|fluttered|បក់ស្លាប / រវិចៗ|The butterfly fluttered by.|មេអំបៅហើររវិចៗកាត់។
swoop|swooped|swooped|ហោះចុះខ្ទប់|The eagle swooped down.|ឥន្ទ្រីបានហោះចុះខ្ទប់។
perch|perched|perched|ទំ|A bird perched on the wire.|សត្វស្លាបមួយទំលើខ្សែភ្លើង។
burrow|burrowed|burrowed|ជីករូង|Rabbits burrow underground.|ទន្សាយជីករូងនៅក្រោមដី។
clatter|clattered|clattered|បន្លឺសូរក្រាំងៗ|Dishes clattered in the kitchen.|ចានបន្លឺសូរក្រាំងៗក្នុងផ្ទះបាយ។
creak|creaked|creaked|បន្លឺសូរគ្រេចៗ (ទ្វារ)|The old door creaked.|ទ្វារចាស់បន្លឺសូរគ្រេចៗ។
crunch|crunched|crunched|ទំពារឮសូរក្រួបៗ|He crunched on an apple.|គាត់ទំពារផ្លែប៉ោមឮសូរក្រួបៗ។
rustle|rustled|rustled|បន្លឺសូររសាប់រសល់ (ស្លឹកឈើ)|Leaves rustled in the wind.|ស្លឹកឈើបន្លឺសូររសាប់រសល់តាមខ្យល់។
squeak|squeaked|squeaked|បន្លឺសូរជ្រៀក|The mouse squeaked.|កណ្ដុរបន្លឺសូរជ្រៀកៗ។
squeal|squealed|squealed|ស្រែកឡើងខ្ពស់|The kids squealed with joy.|ក្មេងៗស្រែកដោយក្ដីរីករាយ។
thud|thudded|thudded|ធ្លាក់ឮសូរធ្លុក|The book thudded on the floor.|សៀវភៅធ្លាក់ឮសូរធ្លុកលើឥដ្ឋ។
beep|beeped|beeped|បន្លឺសូរប៊ីប|The microwave beeped.|ម៉ាស៊ីនកម្ដៅបន្លឺសូរប៊ីប។
honk|honked|honked|ចុចស៊ីផ្លេ|Drivers honked in the traffic jam.|អ្នកបើកបរចុចស៊ីផ្លេក្នុងពេលស្ទះចរាចរណ៍។
rumble|rumbled|rumbled|បន្លឺសូររ៉ឺៗ (ផ្គរ / ពោះ)|My stomach rumbled.|ពោះខ្ញុំបន្លឺសូររ៉ឺៗ។
chime|chimed|chimed|រោទ៍ (នាឡិកា / កណ្ដឹង)|The clock chimed twelve.|នាឡិការោទ៍ដប់ពីរដង។
echo|echoed|echoed|បន្លឺខ្ទរ|His voice echoed in the cave.|សំឡេងរបស់គាត់បន្លឺខ្ទរក្នុងរូងភ្នំ។
blush|blushed|blushed|មុខឡើងក្រហម (ខ្មាស)|She blushed when he smiled.|នាងមុខឡើងក្រហមពេលគាត់ញញឹម។
pout|pouted|pouted|បបូរមាត់ស្រួច (អន់ចិត្ត)|The child pouted.|ក្មេងបានធ្វើបបូរមាត់ស្រួចអន់ចិត្ត។
scowl|scowled|scowled|ធ្វើមុខក្រញូវ|He scowled at me.|គាត់បានធ្វើមុខក្រញូវដាក់ខ្ញុំ។
smirk|smirked|smirked|ញញឹមចំអក|She smirked at his mistake.|នាងញញឹមចំអកនឹងកំហុសរបស់គាត់។
sneer|sneered|sneered|មើលងាយ (ដោយទឹកមុខ)|They sneered at his old clothes.|ពួកគេមើលងាយសម្លៀកបំពាក់ចាស់របស់គាត់។
wail|wailed|wailed|ទ្រហោយំ|The baby wailed all night.|ទារកទ្រហោយំពេញមួយយប់។
mutter|muttered|muttered|រអ៊ូខ្សឹបៗ|He muttered something under his breath.|គាត់បានរអ៊ូខ្សឹបៗអ្វីមួយ។
murmur|murmured|murmured|ខ្សឹបខ្សៀវ|She murmured a prayer.|នាងបានសូត្រធម៌ខ្សឹបៗ។
stutter|stuttered|stuttered|និយាយរដាក់|He stutters when he's nervous.|គាត់និយាយរដាក់ពេលភ័យ។
babble|babbled|babbled|និយាយរអ៊ូ (ទារក)|The baby babbled happily.|ទារកនិយាយរអ៊ូយ៉ាងសប្បាយ។
chatter|chattered|chattered|និយាយច្រើន / ធ្មេញញ័រ|The girls chattered all afternoon.|ក្មេងស្រីៗនិយាយច្រើនពេញមួយរសៀល។
brag|bragged|bragged|អួត|He always brags about his car.|គាត់តែងតែអួតពីឡានរបស់គាត់។
bicker|bickered|bickered|ឈ្លោះគ្នារឿងតូចតាច|They bicker about everything.|ពួកគេឈ្លោះគ្នារឿងតូចតាចគ្រប់យ៉ាង។
comfort|comforted|comforted|លួងលោម|She comforted her crying friend.|នាងបានលួងលោមមិត្តដែលកំពុងយំ។
sympathize|sympathized|sympathized|អាណិតអាសូរ / យល់ចិត្ត|I sympathize with your situation.|ខ្ញុំយល់ចិត្តចំពោះស្ថានភាពរបស់អ្នក។
wring|wrung|wrung|ច្របាច់ (សម្លៀកបំពាក់)|Wring out the wet towel.|ច្របាច់កន្សែងសើមឲ្យស្រក់ទឹក។
declutter|decluttered|decluttered|រៀបចំបោះចោលរបស់មិនចាំបាច់|I decluttered my room.|ខ្ញុំបានរៀបចំបោះចោលរបស់មិនចាំបាច់ក្នុងបន្ទប់។
repaint|repainted|repainted|លាបថ្នាំឡើងវិញ|We repainted the house.|យើងបានលាបថ្នាំផ្ទះឡើងវិញ។
unclog|unclogged|unclogged|ដោះការស្ទះ|He unclogged the sink.|គាត់បានដោះការស្ទះអាងលាងចាន។
unscrew|unscrewed|unscrewed|មួលដោះខ្ចៅ / គម្រប|Unscrew the bottle cap.|មួលគម្របដបចេញ។
screw|screwed|screwed|មួលខ្ចៅ|Screw the shelf to the wall.|មួលខ្ចៅភ្ជាប់ធ្នើនឹងជញ្ជាំង។
drill|drilled|drilled|ខួង / ហាត់សម|Drill a hole in the wall.|ខួងរន្ធមួយលើជញ្ជាំង។
saw|sawed|sawn|អារ (ឈើ)|He sawed the wood in half.|គាត់បានអារឈើជាពីរ។
nail|nailed|nailed|វាយដែកគោល|Nail the board to the fence.|វាយដែកគោលភ្ជាប់ក្ដារនឹងរបង។
tape|taped|taped|បិទស្កុត|Tape the poster to the wall.|បិទផូស្ទ័រនឹងជញ្ជាំងដោយស្កុត។
staple|stapled|stapled|កិប (ក្រដាស)|Staple the pages together.|កិបទំព័របញ្ចូលគ្នា។
hem|hemmed|hemmed|ដេរជាយ (ខោអាវ)|She hemmed my trousers.|នាងបានដេរជាយខោរបស់ខ្ញុំ។
patch|patched|patched|ប៉ះ (រន្ធ)|He patched the hole in his jeans.|គាត់បានប៉ះរន្ធលើខោខូវប៊យ។
weave|wove|woven|ត្បាញ|She weaves silk scarves.|នាងត្បាញក្រមាសូត្រ។
embroider|embroidered|embroidered|ប៉ាក់|She embroidered flowers on the cloth.|នាងបានប៉ាក់ផ្កាលើក្រណាត់។
cruise|cruised|cruised|ជិះទូកកម្សាន្ត / បើកយឺតៗ|We cruised along the Mekong.|យើងបានជិះទូកកម្សាន្តតាមទន្លេមេគង្គ។
detour|detoured|detoured|បត់ផ្លូវវាង|We detoured around the flooded road.|យើងបានបត់ផ្លូវវាងផ្លូវដែលលិចទឹក។
hitchhike|hitchhiked|hitchhiked|ជិះឡានគេដោយសុំ|He hitchhiked to Kampot.|គាត់បានសុំជិះឡានគេទៅកំពត។
overbook|overbooked|overbooked|កក់លើសចំនួន|The flight was overbooked.|ជើងហោះហើរត្រូវបានកក់លើសចំនួន។
reroute|rerouted|rerouted|ប្ដូរផ្លូវ|The bus was rerouted.|ឡានក្រុងត្រូវបានប្ដូរផ្លូវ។
sightsee|sightsaw|sightseen|ដើរមើលទេសភាព|We sightsaw in Siem Reap.|យើងបានដើរមើលទេសភាពនៅសៀមរាប។
backpack|backpacked|backpacked|ធ្វើដំណើរដោយកាបូបស្ពាយ|She backpacked across Asia.|នាងបានធ្វើដំណើរដោយកាបូបស្ពាយជុំវិញអាស៊ី។
carpool|carpooled|carpooled|ជិះឡានរួមគ្នា|We carpool to work.|យើងជិះឡានរួមគ្នាទៅធ្វើការ។
refuel|refueled|refueled|ចាក់សាំងឡើងវិញ|We stopped to refuel.|យើងបានឈប់ដើម្បីចាក់សាំង។
plough|ploughed|ploughed|ភ្ជួរ (ដី)|Farmers plough the fields before planting.|កសិករភ្ជួរស្រែមុនពេលដាំ។
till|tilled|tilled|ភ្ជួររាស់ / ដាំដុះ|They tilled the land by hand.|ពួកគេបានភ្ជួររាស់ដីដោយដៃ។
hoe|hoed|hoed|ជីកដោយចប|Grandpa hoed the vegetable garden.|លោកតាបានជីកសួនបន្លែដោយចប។
weed|weeded|weeded|ដកស្មៅ|We weeded the garden on Sunday.|យើងបានដកស្មៅក្នុងសួនច្បារនៅថ្ងៃអាទិត្យ។
mill|milled|milled|កិន (ស្រូវ ម្សៅ)|The rice is milled in the village.|ស្រូវត្រូវបានកិននៅក្នុងភូមិ។
fence|fenced|fenced|ធ្វើរបង / កីឡាដាវ|They fenced the garden to keep out cows.|ពួកគេបានធ្វើរបងសួនច្បារការពារគោ។
herd|herded|herded|ឃ្វាល / បណ្ដើរជាហ្វូង|The boy herds cattle every afternoon.|ក្មេងប្រុសឃ្វាលគោរៀងរាល់រសៀល។
milk|milked|milked|រីងទឹកដោះ / កេងប្រវ័ញ្ច|She milks the cow every morning.|នាងរីងទឹកដោះគោរៀងរាល់ព្រឹក។
pickle|pickled|pickled|ជ្រក់|My mother pickles cucumbers.|ម្ដាយខ្ញុំជ្រក់ត្រសក់។
mow|mowed|mown|កាត់ស្មៅ|He mows the lawn every week.|គាត់កាត់ស្មៅរៀងរាល់សប្ដាហ៍។
rake|raked|raked|ហាលដោយរនាស់|Rake the leaves into a pile.|ហាលស្លឹកឈើមកជាគំនរ។
net|netted|netted|ចាប់ដោយសំណាញ់ / រកបានសុទ្ធ|They netted twenty fish.|ពួកគេបានចាប់ត្រីម្ភៃក្បាលដោយសំណាញ់។
bait|baited|baited|ដាក់នុយ / ញុះញង់|He baited the hook with a worm.|គាត់បានដាក់ជន្លេនជានុយលើសន្ទូច។
hook|hooked|hooked|ជាប់សន្ទូច / ពាក់|I hooked a big fish!|ខ្ញុំបានទាក់ត្រីធំមួយ!
scale|scaled|scaled|ឡើង / ចាក់ស្រកា|They scaled the mountain in two days.|ពួកគេបានឡើងភ្នំក្នុងរយៈពេលពីរថ្ងៃ។
cool|cooled|cooled|ធ្វើឲ្យត្រជាក់|Let the cake cool before cutting.|ទុកនំឲ្យត្រជាក់មុនពេលកាត់។
bat|batted|batted|វាយ (បាល់កីឡា)|It's your turn to bat.|ដល់វេនអ្នកវាយហើយ។
bowl|bowled|bowled|បោះបាល់ (កីឡា) / ប៊ូលីង|We bowled on Friday night.|យើងបានលេងប៊ូលីងនៅយប់ថ្ងៃសុក្រ។
box|boxed|boxed|ប្រដាល់ / ដាក់ប្រអប់|He boxes three times a week.|គាត់ហាត់ប្រដាល់បីដងក្នុងមួយសប្ដាហ៍។
frame|framed|framed|ដាក់ស៊ុម / ចោទប្រកាន់ខុស|We framed our wedding photo.|យើងបានដាក់ស៊ុមរូបថតមង្គលការ។
pan|panned|panned|ងាកកាមេរ៉ា / រិះគន់ខ្លាំង|The camera panned across the beach.|កាមេរ៉ាបានងាកពីម្ខាងទៅម្ខាងនៃឆ្នេរ។
model|modelled|modelled|ធ្វើជាតារាម៉ូដែល / ធ្វើតាមគំរូ|She models for a clothing brand.|នាងធ្វើជាតារាម៉ូដែលឲ្យម៉ាកសម្លៀកបំពាក់មួយ។
bolt|bolted|bolted|ចាក់រនុក / រត់ភ្លាមៗ|Bolt the door at night.|ចាក់រនុកទ្វារនៅពេលយប់។
sand|sanded|sanded|ខាត់ដោយក្រដាសខ្សាច់|Sand the wood before painting.|ខាត់ឈើមុនពេលលាបថ្នាំ។
tile|tiled|tiled|ក្រាលការ៉ូ|We tiled the bathroom floor.|យើងបានក្រាលការ៉ូឥដ្ឋបន្ទប់ទឹក។
roof|roofed|roofed|ប្រក់ដំបូល|The house was roofed with tiles.|ផ្ទះត្រូវបានប្រក់ក្បឿង។
wire|wired|wired|តខ្សែភ្លើង / ផ្ញើប្រាក់|An electrician wired the new house.|ជាងភ្លើងបានតខ្សែភ្លើងផ្ទះថ្មី។
survey|surveyed|surveyed|ស្ទង់មតិ / វាស់វែង|We surveyed 500 students.|យើងបានស្ទង់មតិសិស្ស ៥០០ នាក់។
level|levelled|levelled|ធ្វើឲ្យរាបស្មើ|They levelled the ground before building.|ពួកគេបានធ្វើឲ្យដីរាបស្មើមុនពេលសាងសង់។
poll|polled|polled|ស្ទង់មតិ|We polled 1,000 voters.|យើងបានស្ទង់មតិអ្នកបោះឆ្នោត ១,០០០ នាក់។
fast|fasted|fasted|តមអាហារ|Many Muslims fast during Ramadan.|ជនមូស្លីមជាច្រើនតមអាហារក្នុងខែរ៉ាម៉ាដាន។
bleach|bleached|bleached|ធ្វើឲ្យស / បន្សាប|She bleached her hair blonde.|នាងបានបន្សាបសក់ឲ្យទៅជាពណ៌មាស។
braid|braided|braided|ក្រងសក់|My sister braided my hair.|បងស្រីខ្ញុំបានក្រងសក់ឲ្យខ្ញុំ។
curl|curled|curled|រួញ / អង្គុញ|The cat curled up on the sofa.|ឆ្មាបានអង្គុញនៅលើសាឡុង។
moisturize|moisturized|moisturized|លាបឡេ (ធ្វើឲ្យស្បែកសើម)|Moisturize your skin after washing.|លាបឡេបន្ទាប់ពីលាងមុខ។
powder|powdered|powdered|លាបម្សៅ|She powdered her face.|នាងបានលាបម្សៅលើមុខ។
style|styled|styled|រៀបម៉ូដ (សក់)|The hairdresser styled her hair for the wedding.|ជាងសក់បានរៀបសក់ឲ្យនាងសម្រាប់ពិធីមង្គលការ។
tan|tanned|tanned|ស្បែកខ្មៅដោយថ្ងៃ|He tanned quickly at the beach.|ស្បែកគាត់ខ្មៅយ៉ាងលឿននៅឆ្នេរ។
wax|waxed|waxed|លាបក្រមួន / ដករោមដោយក្រមួន|He waxed his car until it shone.|គាត់បានលាបក្រមួនឡានរហូតដល់ភ្លឺរលោង។
dock|docked|docked|ចតកំពង់ផែ / កាត់ប្រាក់|The ship docked in Sihanoukville.|កប៉ាល់បានចតនៅក្រុងព្រះសីហនុ។
ferry|ferried|ferried|ដឹកឆ្លង|Boats ferry people across the Mekong.|ទូកដឹកមនុស្សឆ្លងទន្លេមេគង្គ។
tow|towed|towed|អូស (ឡាន)|My car was towed away.|ឡានរបស់ខ្ញុំត្រូវបានគេអូសយកទៅ។
idle|idled|idled|បើកម៉ាស៊ីនទុកនៅស្ងៀម / ខ្ជិល|Don't leave the engine idling.|កុំបើកម៉ាស៊ីនទុកនៅស្ងៀម។
taxi|taxied|taxied|រំកិលលើផ្លូវរត់ (យន្តហោះ)|The plane taxied to the runway.|យន្តហោះបានរំកិលទៅផ្លូវរត់។
sleet|sleeted|sleeted|ធ្លាក់ភ្លៀងលាយទឹកកក|It sleeted all night in Seoul.|ភ្លៀងលាយទឹកកកបានធ្លាក់ពេញមួយយប់នៅសេអ៊ូល។
gust|gusted|gusted|បក់ខ្លាំងភ្លាមៗ|The wind gusted up to 80 km/h.|ខ្យល់បានបក់ខ្លាំងរហូតដល់ ៨០ គ.ម ក្នុងមួយម៉ោង។`,
4:`abandon|abandoned|abandoned|បោះបង់ចោល|They abandoned the old house.|ពួកគេបានបោះបង់ចោលផ្ទះចាស់។
accumulate|accumulated|accumulated|ប្រមូលផ្ដុំ / កកកុញ|Dust accumulated on the shelf.|ធូលីបានកកកុញលើធ្នើ។
acknowledge|acknowledged|acknowledged|ទទួលស្គាល់|He acknowledged his mistake.|គាត់បានទទួលស្គាល់កំហុសរបស់គាត់។
advocate|advocated|advocated|តស៊ូមតិ|She advocates for education.|នាងតស៊ូមតិដើម្បីការអប់រំ។
allocate|allocated|allocated|បែងចែក|The budget was allocated to schools.|ថវិកាត្រូវបានបែងចែកទៅឲ្យសាលារៀន។
anticipate|anticipated|anticipated|រំពឹងទុក|We anticipate heavy traffic.|យើងរំពឹងទុកថានឹងមានចរាចរណ៍កកស្ទះ។
assume|assumed|assumed|សន្មត|I assumed you knew.|ខ្ញុំសន្មតថាអ្នកដឹងហើយ។
compensate|compensated|compensated|សងជំងឺចិត្ត|They compensated the workers.|ពួកគេបានសងសំណងដល់កម្មករ។
comprise|comprised|comprised|មានសមាសភាព|The team comprises five members.|ក្រុមនេះមានសមាជិកប្រាំនាក់។
deteriorate|deteriorated|deteriorated|កាន់តែអាក្រក់|His health deteriorated.|សុខភាពរបស់គាត់កាន់តែអាក្រក់។
diminish|diminished|diminished|ថយចុះ|The pain diminished.|ការឈឺចាប់បានថយចុះ។
enhance|enhanced|enhanced|លើកកម្ពស់|Music enhances learning.|តន្ត្រីលើកកម្ពស់ការរៀនសូត្រ។
evaluate|evaluated|evaluated|វាយតម្លៃ|Teachers evaluate students.|គ្រូវាយតម្លៃសិស្ស។
facilitate|facilitated|facilitated|សម្រួល|Technology facilitates communication.|បច្ចេកវិទ្យាសម្រួលដល់ការទំនាក់ទំនង។
fluctuate|fluctuated|fluctuated|ប្រែប្រួល|Prices fluctuate daily.|តម្លៃប្រែប្រួលរាល់ថ្ងៃ។
implement|implemented|implemented|អនុវត្ត|The government implemented a new policy.|រដ្ឋាភិបាលបានអនុវត្តគោលនយោបាយថ្មីមួយ។
justify|justified|justified|បង្ហាញហេតុផល|Can you justify your answer?|តើអ្នកអាចបង្ហាញហេតុផលនៃចម្លើយរបស់អ្នកបានទេ?
mitigate|mitigated|mitigated|កាត់បន្ថយ (ផលប៉ះពាល់)|Trees mitigate flooding.|ដើមឈើជួយកាត់បន្ថយទឹកជំនន់។
undermine|undermined|undermined|ធ្វើឲ្យចុះខ្សោយ|Lies undermine trust.|ការកុហកធ្វើឲ្យទំនុកចិត្តចុះខ្សោយ។
prioritize|prioritized|prioritized|ដាក់អាទិភាព|Prioritize your health.|ដាក់សុខភាពរបស់អ្នកជាអាទិភាព។
sustain|sustained|sustained|ទ្រទ្រង់ / រក្សា|We must sustain growth.|យើងត្រូវតែរក្សាកំណើន។
undertake|undertook|undertaken|ទទួលធ្វើ|She undertook a big project.|នាងបានទទួលធ្វើគម្រោងធំមួយ។
foresee|foresaw|foreseen|មើលឃើញទុកមុន|No one foresaw the crisis.|គ្មាននរណាម្នាក់មើលឃើញវិបត្តិនេះទុកជាមុនទេ។
withstand|withstood|withstood|ទប់ទល់|The bridge withstood the flood.|ស្ពានបានទប់ទល់នឹងទឹកជំនន់។
alleviate|alleviated|alleviated|បន្ធូរបន្ថយ|Medicine alleviates pain.|ថ្នាំបន្ធូរបន្ថយការឈឺចាប់។
scrutinize|scrutinized|scrutinized|ពិនិត្យយ៉ាងល្អិតល្អន់|Journalists scrutinized the report.|អ្នកកាសែតបានពិនិត្យរបាយការណ៍យ៉ាងល្អិតល្អន់។
abate|abated|abated|ស្រាកស្រាន្ត / ថយចុះ|The storm finally abated.|ព្យុះបានស្រាកស្រាន្តនៅទីបំផុត។
abduct|abducted|abducted|ចាប់ពង្រត់|The child was abducted.|ក្មេងនោះត្រូវបានគេចាប់ពង្រត់។
acclimatize|acclimatized|acclimatized|សម្របខ្លួននឹងអាកាសធាតុ|Tourists need time to acclimatize.|ភ្ញៀវទេសចរត្រូវការពេលដើម្បីសម្របខ្លួននឹងអាកាសធាតុ។
adjourn|adjourned|adjourned|ផ្អាក (កិច្ចប្រជុំ)|The meeting was adjourned until Friday.|កិច្ចប្រជុំត្រូវបានផ្អាករហូតដល់ថ្ងៃសុក្រ។
aggravate|aggravated|aggravated|ធ្វើឲ្យកាន់តែធ្ងន់|Running aggravated his knee injury.|ការរត់បានធ្វើឲ្យរបួសជង្គង់គាត់កាន់តែធ្ងន់។
alienate|alienated|alienated|ធ្វើឲ្យឃ្លាតឆ្ងាយ|His rude words alienated his friends.|សម្ដីឈ្លើយរបស់គាត់ធ្វើឲ្យមិត្តភក្តិឃ្លាតឆ្ងាយ។
allot|allotted|allotted|បែងចែក (ពេល / ចំណែក)|Each student is allotted ten minutes.|សិស្សម្នាក់ៗត្រូវបានបែងចែកពេលដប់នាទី។
amass|amassed|amassed|ប្រមូលបានច្រើន|He amassed a large fortune.|គាត់បានប្រមូលទ្រព្យសម្បត្តិបានយ៉ាងច្រើន។
annotate|annotated|annotated|កត់សម្គាល់ពន្យល់|Annotate the text as you read.|កត់សម្គាល់ពន្យល់លើអត្ថបទពេលអ្នកអាន។
appraise|appraised|appraised|វាយតម្លៃ (ថ្លៃ)|An expert appraised the house.|អ្នកជំនាញបានវាយតម្លៃផ្ទះ។
apprehend|apprehended|apprehended|ចាប់ខ្លួន|Police apprehended the suspect.|ប៉ូលិសបានចាប់ខ្លួនជនសង្ស័យ។
ascertain|ascertained|ascertained|រកឲ្យដឹងច្បាស់|We must ascertain the facts.|យើងត្រូវរកឲ្យដឹងច្បាស់ពីការពិត។
assimilate|assimilated|assimilated|សម្របខ្លួន / ស្រូបយក|Immigrants assimilated into society.|ជនអន្តោប្រវេសន៍បានសម្របខ្លួនចូលក្នុងសង្គម។
augment|augmented|augmented|បង្កើន|He augments his income by teaching.|គាត់បង្កើនប្រាក់ចំណូលដោយការបង្រៀន។
bolster|bolstered|bolstered|ពង្រឹង|The win bolstered their confidence.|ជ័យជម្នះបានពង្រឹងទំនុកចិត្តរបស់ពួកគេ។
breach|breached|breached|រំលោភ (កិច្ចសន្យា)|The company breached the contract.|ក្រុមហ៊ុនបានរំលោភកិច្ចសន្យា។
coerce|coerced|coerced|បង្ខិតបង្ខំ|He was coerced into signing.|គាត់ត្រូវបានគេបង្ខិតបង្ខំឲ្យចុះហត្ថលេខា។
commission|commissioned|commissioned|ជួលឲ្យធ្វើ|The city commissioned a new statue.|ទីក្រុងបានជួលឲ្យធ្វើរូបសំណាកថ្មីមួយ។
condone|condoned|condoned|អធ្យាស្រ័យ (អំពើខុស)|We cannot condone violence.|យើងមិនអាចអធ្យាស្រ័យចំពោះអំពើហិង្សាបានទេ។
confine|confined|confined|កំណត់ត្រឹម / ឃុំ|Keep your answer confined to one page.|កំណត់ចម្លើយរបស់អ្នកត្រឹមមួយទំព័រ។
constitute|constituted|constituted|បង្កើតជា / ស្មើនឹង|Women constitute half the workforce.|ស្ត្រីមានចំនួនពាក់កណ្ដាលនៃកម្លាំងពលកម្ម។
constrain|constrained|constrained|រឹតត្បិត|Lack of money constrained our plans.|កង្វះលុយបានរឹតត្បិតផែនការរបស់យើង។
contest|contested|contested|ជំទាស់ / ប្រកួត|He contested the election result.|គាត់បានជំទាស់នឹងលទ្ធផលបោះឆ្នោត។
curb|curbed|curbed|ទប់ស្កាត់|New laws curb pollution.|ច្បាប់ថ្មីទប់ស្កាត់ការបំពុល។
curtail|curtailed|curtailed|កាត់បន្ថយ|The rain curtailed our trip.|ភ្លៀងបានកាត់បន្ថយដំណើររបស់យើង។
decentralize|decentralized|decentralized|ធ្វើវិមជ្ឈការ|The government decentralized power.|រដ្ឋាភិបាលបានធ្វើវិមជ្ឈការអំណាច។
deliberate|deliberated|deliberated|ពិភាក្សាពិចារណា|The jury deliberated for hours.|គណៈវិនិច្ឆ័យបានពិភាក្សាពិចារណាអស់ច្រើនម៉ោង។
denote|denoted|denoted|តំណាង / បង្ហាញ|The red line denotes the border.|បន្ទាត់ក្រហមតំណាងឲ្យព្រំដែន។
detract|detracted|detracted|បន្ថយតម្លៃ|The noise detracted from the show.|សំឡេងរំខានបានបន្ថយភាពល្អនៃការសម្ដែង។
discern|discerned|discerned|មើលឃើញ / យល់ដឹង|I could discern a shape in the dark.|ខ្ញុំអាចមើលឃើញរូបរាងមួយក្នុងភាពងងឹត។
disintegrate|disintegrated|disintegrated|បែកខ្ទេចខ្ចាំ|The old paper disintegrated.|ក្រដាសចាស់បានបែកខ្ទេចខ្ចាំ។
dispel|dispelled|dispelled|កម្ចាត់ (ការសង្ស័យ)|The report dispelled our fears.|របាយការណ៍បានកម្ចាត់ការភ័យខ្លាចរបស់យើង។
displace|displaced|displaced|ធ្វើឲ្យបាត់ទីលំនៅ|The flood displaced thousands.|ទឹកជំនន់បានធ្វើឲ្យមនុស្សរាប់ពាន់នាក់បាត់ទីលំនៅ។
dispose|disposed|disposed|បោះចោល|Dispose of batteries safely.|បោះចោលថ្មដោយសុវត្ថិភាព។
divulge|divulged|divulged|បញ្ចេញ (អាថ៌កំបាំង)|He refused to divulge his sources.|គាត់បដិសេធមិនបញ្ចេញប្រភពរបស់គាត់។
downsize|downsized|downsized|កាត់បន្ថយបុគ្គលិក|The company downsized last year.|ក្រុមហ៊ុនបានកាត់បន្ថយបុគ្គលិកកាលពីឆ្នាំមុន។
elicit|elicited|elicited|ទាញយក (ចម្លើយ)|The teacher elicited answers from students.|គ្រូបានទាញយកចម្លើយពីសិស្ស។
embezzle|embezzled|embezzled|កិបកេងលុយ|He embezzled company funds.|គាត់បានកិបកេងថវិកាក្រុមហ៊ុន។
emulate|emulated|emulated|យកតម្រាប់|She emulates her older sister.|នាងយកតម្រាប់តាមបងស្រីរបស់នាង។
enlist|enlisted|enlisted|ស្នើសុំជំនួយ / ចុះឈ្មោះ|We enlisted the help of volunteers.|យើងបានស្នើសុំជំនួយពីអ្នកស្ម័គ្រចិត្ត។
ensue|ensued|ensued|កើតឡើងបន្ទាប់|A long debate ensued.|ការជជែកវែកញែកដ៏យូរបានកើតឡើងបន្ទាប់មក។
exempt|exempted|exempted|លើកលែង|Students are exempted from the fee.|សិស្សត្រូវបានលើកលែងថ្លៃនេះ។
expedite|expedited|expedited|ពន្លឿន|We expedited the delivery.|យើងបានពន្លឿនការដឹកជញ្ជូន។
falsify|falsified|falsified|ក្លែងបន្លំ|He falsified the documents.|គាត់បានក្លែងបន្លំឯកសារ។
forfeit|forfeited|forfeited|បាត់បង់សិទ្ធិ|The team forfeited the match.|ក្រុមនេះបានបាត់បង់សិទ្ធិប្រកួត។
garner|garnered|garnered|ទទួលបាន (ការគាំទ្រ)|The film garnered great reviews.|ភាពយន្តនេះទទួលបានការវាយតម្លៃល្អ។
gauge|gauged|gauged|វាយតម្លៃ / វាស់|It's hard to gauge public opinion.|ពិបាកនឹងវាយតម្លៃមតិសាធារណៈ។
harness|harnessed|harnessed|ប្រើប្រាស់ (ធនធាន)|We can harness solar energy.|យើងអាចប្រើប្រាស់ថាមពលព្រះអាទិត្យ។
hypothesize|hypothesized|hypothesized|ដាក់សម្មតិកម្ម|Scientists hypothesized a link.|អ្នកវិទ្យាសាស្ត្របានដាក់សម្មតិកម្មថាមានទំនាក់ទំនងមួយ។
impart|imparted|imparted|ផ្ដល់ (ចំណេះដឹង)|Teachers impart knowledge.|គ្រូផ្ដល់ចំណេះដឹង។
incentivize|incentivized|incentivized|ផ្ដល់ការលើកទឹកចិត្ត|Bonuses incentivize workers.|ប្រាក់រង្វាន់លើកទឹកចិត្តកម្មករ។
inhibit|inhibited|inhibited|រារាំង / ទប់|Fear inhibits learning.|ការភ័យខ្លាចរារាំងការរៀនសូត្រ។
instigate|instigated|instigated|ញុះញង់ / ផ្ដួចផ្ដើម|He instigated the fight.|គាត់បានញុះញង់ឲ្យវាយគ្នា។
invalidate|invalidated|invalidated|ធ្វើឲ្យមោឃៈ|The error invalidated the results.|កំហុសបានធ្វើឲ្យលទ្ធផលមោឃៈ។
jeopardize|jeopardized|jeopardized|ធ្វើឲ្យប្រថុយគ្រោះថ្នាក់|Don't jeopardize your future.|កុំធ្វើឲ្យអនាគតរបស់អ្នកប្រថុយគ្រោះថ្នាក់។
legislate|legislated|legislated|បង្កើតច្បាប់|Parliament legislates on education.|សភាបង្កើតច្បាប់ស្ដីពីការអប់រំ។
misinterpret|misinterpreted|misinterpreted|បកស្រាយខុស|She misinterpreted my message.|នាងបានបកស្រាយសាររបស់ខ្ញុំខុស។
moderate|moderated|moderated|សម្របសម្រួល (កិច្ចពិភាក្សា)|He moderated the debate.|គាត់បានសម្របសម្រួលកិច្ចពិភាក្សាដេញដោល។
necessitate|necessitated|necessitated|តម្រូវឲ្យមាន|The project necessitates more staff.|គម្រោងនេះតម្រូវឲ្យមានបុគ្គលិកច្រើនជាងនេះ។
neutralize|neutralized|neutralized|បន្សាប|The medicine neutralizes acid.|ថ្នាំនេះបន្សាបជាតិអាស៊ីត។
nullify|nullified|nullified|ធ្វើឲ្យមោឃៈ|The court nullified the contract.|តុលាការបានធ្វើឲ្យកិច្ចសន្យាមោឃៈ។
originate|originated|originated|មានប្រភពពី|The tradition originated in India.|ប្រពៃណីនេះមានប្រភពមកពីប្រទេសឥណ្ឌា។
overhaul|overhauled|overhauled|កែលម្អទាំងស្រុង|They overhauled the old system.|ពួកគេបានកែលម្អប្រព័ន្ធចាស់ទាំងស្រុង។
perpetuate|perpetuated|perpetuated|ធ្វើឲ្យបន្តមាន|Stereotypes perpetuate inequality.|ការយល់ឃើញបែបបំភាន់ធ្វើឲ្យវិសមភាពបន្តមាន។
pertain|pertained|pertained|ទាក់ទងនឹង|These rules pertain to all students.|ច្បាប់ទាំងនេះទាក់ទងនឹងសិស្សទាំងអស់។
preclude|precluded|precluded|រារាំងមិនឲ្យ|Bad weather precluded the trip.|អាកាសធាតុអាក្រក់បានរារាំងមិនឲ្យធ្វើដំណើរ។
procure|procured|procured|ទិញ / រកបាន|The school procured new computers.|សាលាបានទិញកុំព្យូទ័រថ្មី។
quantify|quantified|quantified|វាស់ជាចំនួន|It's difficult to quantify happiness.|ពិបាកនឹងវាស់សុភមង្គលជាចំនួន។
ratify|ratified|ratified|ផ្ដល់សច្ចាប័ន|The country ratified the treaty.|ប្រទេសនេះបានផ្ដល់សច្ចាប័នលើសន្ធិសញ្ញា។
reaffirm|reaffirmed|reaffirmed|បញ្ជាក់ឡើងវិញ|They reaffirmed their commitment.|ពួកគេបានបញ្ជាក់ឡើងវិញពីការប្ដេជ្ញាចិត្ត។
rebuke|rebuked|rebuked|ស្ដីបន្ទោស|The teacher rebuked the noisy students.|គ្រូបានស្ដីបន្ទោសសិស្សដែលធ្វើសំឡេងរំខាន។
reciprocate|reciprocated|reciprocated|តបស្នង|She smiled and he reciprocated.|នាងញញឹម ហើយគាត់ញញឹមតបវិញ។
refute|refuted|refuted|បដិសេធដោយភស្តុតាង|He refuted the accusation.|គាត់បានបដិសេធការចោទប្រកាន់ដោយភស្តុតាង។
rehabilitate|rehabilitated|rehabilitated|ស្ដារឡើងវិញ|The center rehabilitates injured animals.|មជ្ឈមណ្ឌលនេះស្ដារសុខភាពសត្វដែលរងរបួស។
reimburse|reimbursed|reimbursed|សងប្រាក់វិញ|The company reimbursed my travel costs.|ក្រុមហ៊ុនបានសងថ្លៃធ្វើដំណើររបស់ខ្ញុំវិញ។
renounce|renounced|renounced|លះបង់|He renounced his citizenship.|គាត់បានលះបង់សញ្ជាតិរបស់គាត់។
replicate|replicated|replicated|ធ្វើម្ដងទៀតដូចដើម|Scientists replicated the experiment.|អ្នកវិទ្យាសាស្ត្របានធ្វើពិសោធន៍ម្ដងទៀតដូចដើម។
rescind|rescinded|rescinded|លុបចោល|The school rescinded the rule.|សាលាបានលុបចោលច្បាប់នោះ។
retract|retracted|retracted|ដកវិញ (សម្ដី)|He retracted his statement.|គាត់បានដកសេចក្ដីថ្លែងការណ៍របស់គាត់វិញ។
saturate|saturated|saturated|ធ្វើឲ្យឆ្អែត / ពេញ|The market is saturated with phones.|ទីផ្សារពេញទៅដោយទូរស័ព្ទ។
segregate|segregated|segregated|ញែកដាច់ពីគ្នា|Waste should be segregated.|សំរាមគួរតែញែកដាច់ពីគ្នា។
solicit|solicited|solicited|ស្នើសុំ|They solicited feedback from users.|ពួកគេបានស្នើសុំមតិយោបល់ពីអ្នកប្រើប្រាស់។
stipulate|stipulated|stipulated|កំណត់ (ក្នុងកិច្ចសន្យា)|The contract stipulates the price.|កិច្ចសន្យាកំណត់តម្លៃ។
supplement|supplemented|supplemented|បំពេញបន្ថែម|She supplements her diet with vitamins.|នាងបំពេញរបបអាហារបន្ថែមដោយវីតាមីន។
surmount|surmounted|surmounted|យកឈ្នះ (ឧបសគ្គ)|They surmounted many obstacles.|ពួកគេបានយកឈ្នះឧបសគ្គជាច្រើន។
transcend|transcended|transcended|ហួសពី|Music transcends language.|តន្ត្រីហួសពីព្រំដែនភាសា។
transition|transitioned|transitioned|ផ្លាស់ប្ដូរ|She transitioned into a new role.|នាងបានផ្លាស់ប្ដូរទៅតួនាទីថ្មី។
underpin|underpinned|underpinned|គាំទ្រជាមូលដ្ឋាន|Research underpins our decisions.|ការស្រាវជ្រាវគាំទ្រជាមូលដ្ឋានដល់ការសម្រេចចិត្តរបស់យើង។
uproot|uprooted|uprooted|រំលើងទាំងឫស / ផ្លាស់ទីលំនៅ|The storm uprooted trees.|ព្យុះបានរំលើងដើមឈើទាំងឫស។
warrant|warranted|warranted|តម្រូវឲ្យមាន / សមហេតុផល|The situation warrants action.|ស្ថានភាពនេះតម្រូវឲ្យមានសកម្មភាព។
withhold|withheld|withheld|មិនផ្ដល់ / ឃាត់ទុក|They withheld important information.|ពួកគេមិនបានផ្ដល់ព័ត៌មានសំខាន់ៗ។
yearn|yearned|yearned|ប្រាថ្នាខ្លាំង|She yearned for home.|នាងប្រាថ្នាចង់ត្រឡប់ទៅផ្ទះវិញខ្លាំងណាស់។
accrue|accrued|accrued|កើនឡើងបន្តិចម្ដងៗ|Interest accrues every month.|ការប្រាក់កើនឡើងរៀងរាល់ខែ។
attest|attested|attested|បញ្ជាក់|Many people attest to his honesty.|មនុស្សជាច្រើនបញ្ជាក់ពីភាពស្មោះត្រង់របស់គាត់។
belittle|belittled|belittled|មើលងាយ|Don't belittle her achievements.|កុំមើលងាយសមិទ្ធផលរបស់នាង។
bestow|bestowed|bestowed|ប្រទាន / ផ្ដល់|The king bestowed an honor on him.|ព្រះមហាក្សត្របានប្រទានគ្រឿងឥស្សរិយយសដល់គាត់។
coincide|coincided|coincided|ស្របពេលគ្នា|My birthday coincides with the festival.|ថ្ងៃកំណើតខ្ញុំស្របពេលជាមួយពិធីបុណ្យ។
collate|collated|collated|ប្រមូល និងរៀបចំ|We collated the survey results.|យើងបានប្រមូល និងរៀបចំលទ្ធផលស្ទង់មតិ។
conceive|conceived|conceived|បង្កើតគំនិត|She conceived the idea last year.|នាងបានបង្កើតគំនិតនេះកាលពីឆ្នាំមុន។
concur|concurred|concurred|យល់ស្រប|The experts concurred with the report.|អ្នកជំនាញបានយល់ស្របនឹងរបាយការណ៍។
culminate|culminated|culminated|ឈានដល់ចំណុចកំពូល|The festival culminated in fireworks.|ពិធីបុណ្យបានឈានដល់ចំណុចកំពូលដោយការបាញ់កាំជ្រួច។
debunk|debunked|debunked|បង្ហាញថាខុស|Scientists debunked the myth.|អ្នកវិទ្យាសាស្ត្របានបង្ហាញថាជំនឿនោះខុស។
deviate|deviated|deviated|ងាកចេញពី|Don't deviate from the plan.|កុំងាកចេញពីផែនការ។
diffuse|diffused|diffused|សាយភាយ|The light diffused through the curtains.|ពន្លឺបានសាយភាយកាត់វាំងនន។
digress|digressed|digressed|និយាយងាកចេញពីប្រធានបទ|The speaker digressed often.|អ្នកថ្លែងបាននិយាយងាកចេញពីប្រធានបទញឹកញាប់។
discredit|discredited|discredited|បង្ខូចកេរ្តិ៍ឈ្មោះ|The scandal discredited the minister.|រឿងអាស្រូវបានបង្ខូចកេរ្តិ៍ឈ្មោះរដ្ឋមន្ត្រី។
dissipate|dissipated|dissipated|រលាយបាត់|The fog dissipated by noon.|អ័ព្ទបានរលាយបាត់នៅថ្ងៃត្រង់។
encompass|encompassed|encompassed|គ្របដណ្ដប់ / រួមបញ្ចូល|The course encompasses all grammar.|វគ្គនេះគ្របដណ្ដប់វេយ្យាករណ៍ទាំងអស់។
enumerate|enumerated|enumerated|រាប់រៀប|She enumerated the reasons.|នាងបានរាប់រៀបហេតុផល។
envisage|envisaged|envisaged|គ្រោងទុក / ស្រមៃ|We envisage growth next year.|យើងគ្រោងទុកថានឹងមានកំណើននៅឆ្នាំក្រោយ។
forgo|forwent|forgone|លះបង់ / មិនយក|She forwent lunch to finish work.|នាងបានលះបង់អាហារថ្ងៃត្រង់ដើម្បីបញ្ចប់ការងារ។
infringe|infringed|infringed|រំលោភ (សិទ្ធិ)|Copying the film infringes copyright.|ការចម្លងភាពយន្តរំលោភសិទ្ធិអ្នកនិពន្ធ។
infuse|infused|infused|បញ្ចូល|She infused energy into the team.|នាងបានបញ្ចូលថាមពលដល់ក្រុម។
negate|negated|negated|ធ្វើឲ្យគ្មានប្រសិទ្ធភាព|Junk food negates exercise.|អាហារគ្មានប្រយោជន៍ធ្វើឲ្យការហាត់ប្រាណគ្មានប្រសិទ្ធភាព។
outlast|outlasted|outlasted|ស្ថិតស្ថេរយូរជាង|Stone temples outlasted the kingdoms.|ប្រាសាទថ្មបានស្ថិតស្ថេរយូរជាងនគរ។
pacify|pacified|pacified|ធ្វើឲ្យស្ងប់|She pacified the angry customer.|នាងបានធ្វើឲ្យអតិថិជនដែលខឹងស្ងប់ចិត្ត។
permeate|permeated|permeated|ជ្រាបចូល|The smell permeated the house.|ក្លិនបានជ្រាបចូលពេញផ្ទះ។
reinstate|reinstated|reinstated|ទទួលឲ្យធ្វើវិញ|The worker was reinstated.|កម្មករត្រូវបានទទួលឲ្យធ្វើការឡើងវិញ។
resonate|resonated|resonated|ប៉ះពាល់ចិត្ត / បន្លឺ|Her speech resonated with young people.|សុន្ទរកថារបស់នាងបានប៉ះពាល់ចិត្តយុវជន។
sever|severed|severed|កាត់ផ្ដាច់|They severed ties with the company.|ពួកគេបានកាត់ផ្ដាច់ទំនាក់ទំនងជាមួយក្រុមហ៊ុន។
spearhead|spearheaded|spearheaded|ដឹកនាំនៅជួរមុខ|She spearheaded the campaign.|នាងបានដឹកនាំយុទ្ធនាការនៅជួរមុខ។
stigmatize|stigmatized|stigmatized|ដាក់ស្លាក / រើសអើង|Don't stigmatize people with illness.|កុំរើសអើងមនុស្សដែលមានជំងឺ។
tarnish|tarnished|tarnished|ធ្វើឲ្យខូចកេរ្តិ៍ / ស្រអាប់|The scandal tarnished his image.|រឿងអាស្រូវបានធ្វើឲ្យខូចរូបភាពរបស់គាត់។
transpire|transpired|transpired|ទើបដឹងថា / កើតឡើង|It transpired that he had lied.|ក្រោយមកទើបដឹងថាគាត់បានកុហក។
accentuate|accentuated|accentuated|សង្កត់ធ្ងន់ / ធ្វើឲ្យលេចធ្លោ|The dress accentuates her eyes.|រ៉ូបនេះធ្វើឲ្យភ្នែករបស់នាងលេចធ្លោ។
affix|affixed|affixed|បិទភ្ជាប់|Affix a stamp to the envelope.|បិទតែមលើស្រោមសំបុត្រ។
alight|alighted|alighted|ចុះ (ពីយានជំនិះ) / ទំ|Passengers alighted from the train.|អ្នកដំណើរបានចុះពីរថភ្លើង។
annul|annulled|annulled|លុបចោល (ជាផ្លូវការ)|The marriage was annulled.|អាពាហ៍ពិពាហ៍ត្រូវបានលុបចោល។
apprise|apprised|apprised|ជូនដំណឹង|Keep me apprised of any changes.|ជូនដំណឹងមកខ្ញុំរាល់ការផ្លាស់ប្ដូរ។
assuage|assuaged|assuaged|បន្ធូរ (ការឈឺចាប់ / កង្វល់)|Nothing could assuage her grief.|គ្មានអ្វីអាចបន្ធូរទុក្ខសោករបស់នាងបានទេ។
baffle|baffled|baffled|ធ្វើឲ្យងឿងឆ្ងល់|The question baffled the students.|សំណួរនេះធ្វើឲ្យសិស្សងឿងឆ្ងល់។
barter|bartered|bartered|ដូរទំនិញ|Villagers bartered rice for fish.|អ្នកភូមិដូរអង្ករយកត្រី។
bask|basked|basked|ហាលថ្ងៃ / រីករាយក្នុង|Cats bask in the sun.|ឆ្មាហាលថ្ងៃ។
befall|befell|befallen|កើតឡើងចំពោះ (រឿងអាក្រក់)|A tragedy befell the family.|សោកនាដកម្មមួយបានកើតឡើងចំពោះក្រុមគ្រួសារ។
belie|belied|belied|បង្ហាញផ្ទុយពីការពិត|Her smile belied her sadness.|ស្នាមញញឹមរបស់នាងលាក់បាំងភាពសោកសៅ។
bequeath|bequeathed|bequeathed|ទុកមរតកឲ្យ|He bequeathed his house to his son.|គាត់បានទុកផ្ទះជាមរតកឲ្យកូនប្រុស។
besiege|besieged|besieged|ឡោមព័ទ្ធ|Fans besieged the singer.|អ្នកគាំទ្របានឡោមព័ទ្ធតារាចម្រៀង។
blare|blared|blared|បន្លឺសំឡេងខ្លាំង|Music blared from the speakers.|តន្ត្រីបន្លឺខ្លាំងពីឧបករណ៍បំពងសំឡេង។
blaze|blazed|blazed|ឆេះសន្ធោសន្ធៅ|The fire blazed all night.|ភ្លើងបានឆេះសន្ធោសន្ធៅពេញមួយយប់។
bluff|bluffed|bluffed|បន្លាច / ធ្វើពុត|He was only bluffing.|គាត់គ្រាន់តែធ្វើពុតប៉ុណ្ណោះ។
botch|botched|botched|ធ្វើខូច|He botched the repair.|គាត់បានជួសជុលខូចថែមទៀត។
brood|brooded|brooded|គិតព្រួយយូរ / ក្រាប (ពង)|Stop brooding about the past.|ឈប់គិតព្រួយពីអតីតកាល។
bungle|bungled|bungled|ធ្វើខុសឆ្គង|They bungled the operation.|ពួកគេបានធ្វើប្រតិបត្តិការខុសឆ្គង។
burgeon|burgeoned|burgeoned|រីកចម្រើនយ៉ាងលឿន|The city's tech scene is burgeoning.|វិស័យបច្ចេកវិទ្យារបស់ទីក្រុងកំពុងរីកចម្រើនយ៉ាងលឿន។
cede|ceded|ceded|ប្រគល់ (ទឹកដី / អំណាច)|They ceded control of the port.|ពួកគេបានប្រគល់ការគ្រប់គ្រងកំពង់ផែ។
censure|censured|censured|រិះគន់ជាផ្លូវការ|The minister was censured.|រដ្ឋមន្ត្រីត្រូវបានរិះគន់ជាផ្លូវការ។
chronicle|chronicled|chronicled|កត់ត្រាប្រវត្តិ|The book chronicles the war.|សៀវភៅនេះកត់ត្រាប្រវត្តិនៃសង្គ្រាម។
cleanse|cleansed|cleansed|សម្អាតឲ្យបរិសុទ្ធ|Cleanse your face every night.|សម្អាតមុខរបស់អ្នករៀងរាល់យប់។
clench|clenched|clenched|ក្ដាប់ / ខាំធ្មេញ|He clenched his fists.|គាត់បានក្ដាប់កណ្ដាប់ដៃ។
coddle|coddled|coddled|បណ្ដោយ / ថ្នាក់ថ្នមពេក|Don't coddle your children.|កុំថ្នាក់ថ្នមកូនពេក។
commandeer|commandeered|commandeered|រឹបយកមកប្រើ|Soldiers commandeered the truck.|ទាហានបានរឹបយកឡានដឹកទំនិញមកប្រើ។
compound|compounded|compounded|ធ្វើឲ្យកាន់តែធ្ងន់|Rain compounded our problems.|ភ្លៀងបានធ្វើឲ្យបញ្ហារបស់យើងកាន់តែធ្ងន់។
confound|confounded|confounded|ធ្វើឲ្យច្រឡំ|The results confounded experts.|លទ្ធផលបានធ្វើឲ្យអ្នកជំនាញច្រឡំ។
conjure|conjured|conjured|បង្កើតដូចមន្តអាគម / ស្រមៃ|The smell conjured up memories.|ក្លិននោះបានដាស់ការចងចាំឡើងវិញ។
contort|contorted|contorted|បង្ខូចរូបរាង|His face contorted with pain.|មុខរបស់គាត់បានរមួលដោយការឈឺចាប់។
cower|cowered|cowered|អោនខ្លួនដោយខ្លាច|The dog cowered in the corner.|ឆ្កែបានអោនខ្លួនដោយខ្លាចនៅជ្រុងបន្ទប់។
cringe|cringed|cringed|រួញខ្លួន (ដោយខ្មាស / ខ្ពើម)|I cringe when I hear my voice.|ខ្ញុំខ្មាសពេលឮសំឡេងខ្លួនឯង។
cull|culled|culled|ជ្រើសរើស / កាប់សម្លាប់ (សត្វ)|Data was culled from many sources.|ទិន្នន័យត្រូវបានជ្រើសរើសពីប្រភពជាច្រើន។
curdle|curdled|curdled|កក (ទឹកដោះគោ)|The milk curdled.|ទឹកដោះគោបានកក។
dabble|dabbled|dabbled|សាកលេងបន្តិចបន្តួច|She dabbles in painting.|នាងសាកលេងគូររូបបន្តិចបន្តួច។
dampen|dampened|dampened|ធ្វើឲ្យសើម / បន្ថយ|The rain dampened our spirits.|ភ្លៀងបានធ្វើឲ្យយើងអស់កម្លាំងចិត្ត។
dawdle|dawdled|dawdled|ដើរយឺតៗ / ខ្ជិល|Don't dawdle, we're late.|កុំដើរយឺតៗ យើងយឺតហើយ។
daunt|daunted|daunted|ធ្វើឲ្យបាក់ទឹកចិត្ត|The task didn't daunt her.|កិច្ចការនេះមិនបានធ្វើឲ្យនាងបាក់ទឹកចិត្តទេ។
debilitate|debilitated|debilitated|ធ្វើឲ្យខ្សោយ|The illness debilitated him.|ជំងឺបានធ្វើឲ្យគាត់ខ្សោយ។
decree|decreed|decreed|ចេញក្រឹត្យ|The king decreed a holiday.|ព្រះមហាក្សត្របានចេញព្រះរាជក្រឹត្យកំណត់ថ្ងៃឈប់សម្រាក។
delve|delved|delved|ស្រាវជ្រាវស៊ីជម្រៅ|She delved into the history of Angkor.|នាងបានស្រាវជ្រាវស៊ីជម្រៅពីប្រវត្តិសាស្ត្រអង្គរ។
demarcate|demarcated|demarcated|កំណត់ព្រំដែន|They demarcated the border.|ពួកគេបានកំណត់ព្រំដែន។
demote|demoted|demoted|បន្ទាបតំណែង|He was demoted for being late.|គាត់ត្រូវបានបន្ទាបតំណែងដោយសារមកយឺត។
detonate|detonated|detonated|បំផ្ទុះ|Experts detonated the old bomb.|អ្នកជំនាញបានបំផ្ទុះគ្រាប់បែកចាស់។
dilate|dilated|dilated|រីក (ភ្នែក / សរសៃ)|Her pupils dilated.|កែវភ្នែករបស់នាងបានរីក។
dishearten|disheartened|disheartened|ធ្វើឲ្យបាក់ទឹកចិត្ត|The bad news disheartened us.|ដំណឹងអាក្រក់បានធ្វើឲ្យយើងបាក់ទឹកចិត្ត។
dislodge|dislodged|dislodged|រុញចេញពីកន្លែង|The storm dislodged roof tiles.|ព្យុះបានធ្វើឲ្យក្បឿងរបូតចេញ។
dismay|dismayed|dismayed|ធ្វើឲ្យខកចិត្ត / តក់ស្លុត|We were dismayed by the result.|យើងខកចិត្តនឹងលទ្ធផល។
disown|disowned|disowned|មិនទទួលស្គាល់ (ជាកូន)|His father disowned him.|ឪពុករបស់គាត់មិនទទួលស្គាល់គាត់ជាកូន។
dither|dithered|dithered|ស្ទាក់ស្ទើរ|Stop dithering and decide.|ឈប់ស្ទាក់ស្ទើរ ហើយសម្រេចចិត្តទៅ។
dote|doted|doted|ស្រឡាញ់ខ្លាំងហួស|Grandparents dote on their grandchildren.|ជីដូនជីតាស្រឡាញ់ចៅៗខ្លាំងណាស់។
douse|doused|doused|ស្រោចទឹក / ពន្លត់|They doused the fire with water.|ពួកគេបានស្រោចទឹកពន្លត់ភ្លើង។
dredge|dredged|dredged|បូមខ្សាច់ / ជីកបាត|They dredged the river.|ពួកគេបានបូមខ្សាច់ពីបាតទន្លេ។
drench|drenched|drenched|ធ្វើឲ្យទទឹកជោក|The rain drenched us.|ភ្លៀងបានធ្វើឲ្យយើងទទឹកជោក។
drone|droned|droned|និយាយគួរឲ្យធុញ / បន្លឺសូរ|The teacher droned on for hours.|គ្រូបាននិយាយគួរឲ្យធុញអស់ច្រើនម៉ោង។
dupe|duped|duped|បោកបញ្ឆោត|He was duped into paying.|គាត់ត្រូវបានគេបោកឲ្យបង់ប្រាក់។
eavesdrop|eavesdropped|eavesdropped|លួចស្ដាប់|Don't eavesdrop on others.|កុំលួចស្ដាប់អ្នកដទៃ។
ebb|ebbed|ebbed|ស្រក / ថយចុះ|The tide ebbed.|ទឹកសមុទ្របានស្រក។
eclipse|eclipsed|eclipsed|បាំង / លើសលប់|Her success eclipsed his.|ជោគជ័យរបស់នាងបានលើសលប់ជោគជ័យរបស់គាត់។
elongate|elongated|elongated|ពន្លូត|The shadow elongated in the evening.|ស្រមោលកាន់តែវែងនៅពេលល្ងាច។
embitter|embittered|embittered|ធ្វើឲ្យជូរចត់ចិត្ត|The divorce embittered him.|ការលែងលះបានធ្វើឲ្យគាត់ជូរចត់ចិត្ត។
encumber|encumbered|encumbered|ធ្វើឲ្យជាប់បន្ទុក|Debt encumbered the company.|បំណុលបានធ្វើឲ្យក្រុមហ៊ុនជាប់បន្ទុក។
endeavor|endeavored|endeavored|ខិតខំ|We endeavor to help every student.|យើងខិតខំជួយសិស្សគ្រប់រូប។
engrave|engraved|engraved|ឆ្លាក់|They engraved her name on the ring.|ពួកគេបានឆ្លាក់ឈ្មោះនាងលើចិញ្ចៀន។
enlighten|enlightened|enlightened|បំភ្លឺ (គំនិត)|The book enlightened me.|សៀវភៅនេះបានបំភ្លឺគំនិតខ្ញុំ។
enrage|enraged|enraged|ធ្វើឲ្យខឹងខ្លាំង|His rudeness enraged her.|ភាពឈ្លើយរបស់គាត់ធ្វើឲ្យនាងខឹងខ្លាំង។
enshrine|enshrined|enshrined|ចែងទុក (ក្នុងច្បាប់)|Rights are enshrined in the constitution.|សិទ្ធិត្រូវបានចែងក្នុងរដ្ឋធម្មនុញ្ញ។
entangle|entangled|entangled|ជាប់រុំ|The bird got entangled in a net.|សត្វស្លាបបានជាប់ក្នុងសំណាញ់។
enthrall|enthralled|enthralled|ទាក់ទាញចិត្តខ្លាំង|The story enthralled the children.|រឿងនេះបានទាក់ទាញចិត្តក្មេងៗខ្លាំងណាស់។
entreat|entreated|entreated|អង្វរ|She entreated him to stay.|នាងបានអង្វរគាត់ឲ្យនៅ។
envelop|enveloped|enveloped|រុំព័ទ្ធ|Fog enveloped the city.|អ័ព្ទបានរុំព័ទ្ធទីក្រុង។
err|erred|erred|ធ្វើខុស|To err is human.|ការធ្វើខុសគឺជាធម្មជាតិរបស់មនុស្ស។
evict|evicted|evicted|បណ្ដេញចេញពីផ្ទះ|They were evicted for not paying rent.|ពួកគេត្រូវបានបណ្ដេញចេញដោយសារមិនបង់ថ្លៃជួល។
exasperate|exasperated|exasperated|ធ្វើឲ្យខឹងអស់ទ្រាំ|His excuses exasperated me.|លេសរបស់គាត់ធ្វើឲ្យខ្ញុំខឹងអស់ទ្រាំ។
extort|extorted|extorted|ជំរិតទារលុយ|The gang extorted money from shops.|ក្រុមក្មេងទំនើងបានជំរិតទារលុយពីហាង។
exude|exuded|exuded|បញ្ចេញ (ទំនុកចិត្ត / ក្លិន)|She exudes confidence.|នាងបញ្ចេញទំនុកចិត្តខ្ពស់។
fidget|fidgeted|fidgeted|រំកិលខ្លួនមិននៅស្ងៀម|Stop fidgeting in class.|ឈប់រំកិលខ្លួនក្នុងថ្នាក់ទៅ។
fixate|fixated|fixated|ផ្ដោតតែលើ (ហួសហេតុ)|Don't fixate on your mistakes.|កុំផ្ដោតតែលើកំហុសរបស់អ្នក។
flail|flailed|flailed|គ្រវីដៃជើងរពឹស|He flailed in the water.|គាត់បានគ្រវីដៃជើងក្នុងទឹក។
flaunt|flaunted|flaunted|អួតបង្ហាញ|He flaunts his wealth.|គាត់អួតបង្ហាញទ្រព្យសម្បត្តិរបស់គាត់។
flinch|flinched|flinched|រួញខ្លួនភ្លាម|She flinched at the noise.|នាងបានរួញខ្លួនភ្លាមពេលឮសំឡេង។
fluster|flustered|flustered|ធ្វើឲ្យភ័យច្របូកច្របល់|The question flustered him.|សំណួរនោះធ្វើឲ្យគាត់ភ័យច្របូកច្របល់។
forage|foraged|foraged|ស្វែងរកចំណី|Monkeys forage for fruit.|សត្វស្វាស្វែងរកផ្លែឈើជាចំណី។
foreclose|foreclosed|foreclosed|រឹបអូសទ្រព្យ (ដោយសារមិនសងបំណុល)|The bank foreclosed on the house.|ធនាគារបានរឹបអូសផ្ទះ។
foretell|foretold|foretold|ទាយទុកមុន|No one can foretell the future.|គ្មាននរណាអាចទាយអនាគតបានទេ។
forewarn|forewarned|forewarned|ព្រមានជាមុន|We were forewarned about the storm.|យើងត្រូវបានព្រមានជាមុនអំពីព្យុះ។
fritter|frittered|frittered|ខ្ជះខ្ជាយ (ពេល / លុយ)|He frittered away his money.|គាត់បានខ្ជះខ្ជាយលុយអស់។
frolic|frolicked|frolicked|លេងសប្បាយ|Children frolicked in the rain.|ក្មេងៗលេងសប្បាយក្នុងភ្លៀង។
fumble|fumbled|fumbled|ស្ទាបរក / ធ្វើច្រឡំ|He fumbled for his keys.|គាត់បានស្ទាបរកសោរបស់គាត់។
garble|garbled|garbled|ធ្វើឲ្យច្របូកច្របល់ (សារ)|The message was garbled.|សារនោះច្របូកច្របល់។
gape|gaped|gaped|ហាមាត់សម្លឹង|Tourists gaped at the temple.|ភ្ញៀវទេសចរបានហាមាត់សម្លឹងមើលប្រាសាទ។
garnish|garnished|garnished|តុបតែង (ម្ហូប)|Garnish the soup with herbs.|តុបតែងស៊ុបជាមួយជីរ។
glare|glared|glared|សម្លក់|She glared at me angrily.|នាងបានសម្លក់មកខ្ញុំទាំងខឹង។
glimpse|glimpsed|glimpsed|ក្រឡេកឃើញបន្តិច|I glimpsed a deer in the forest.|ខ្ញុំបានក្រឡេកឃើញក្ដាន់មួយក្នុងព្រៃ។
glisten|glistened|glistened|ភ្លឺចាំងចែង|The river glistened in the sun.|ទន្លេភ្លឺចាំងក្រោមពន្លឺថ្ងៃ។
gnaw|gnawed|gnawed|កកេរ|The rat gnawed the rope.|កណ្ដុរបានកកេរខ្សែ។
grumble|grumbled|grumbled|រអ៊ូ|He always grumbles about work.|គាត់តែងតែរអ៊ូពីការងារ។
guzzle|guzzled|guzzled|ផឹក / ញ៉ាំលឿនៗ|He guzzled a whole bottle of soda.|គាត់បានផឹកទឹកក្រូចមួយដបអស់យ៉ាងលឿន។
haggle|haggled|haggled|តថ្លៃ|We haggled at the market.|យើងបានតថ្លៃនៅផ្សារ។
hallucinate|hallucinated|hallucinated|ឃើញស្រមោល (មិនពិត)|The fever made him hallucinate.|គ្រុនក្ដៅធ្វើឲ្យគាត់ឃើញស្រមោលមិនពិត។
hassle|hassled|hassled|រំខាន|Stop hassling me!|ឈប់រំខានខ្ញុំទៅ!
heave|heaved|heaved|លើក / ទាញ (របស់ធ្ងន់)|They heaved the box onto the truck.|ពួកគេបានលើកប្រអប់ដាក់លើឡាន។
heckle|heckled|heckled|ស្រែករំខាន (អ្នកថ្លែង)|The crowd heckled the speaker.|ហ្វូងមនុស្សបានស្រែករំខានអ្នកថ្លែង។
hinge|hinged|hinged|អាស្រ័យលើ|Everything hinges on the vote.|អ្វីៗទាំងអស់អាស្រ័យលើការបោះឆ្នោត។
hiss|hissed|hissed|បន្លឺសូរស៊ីស (ពស់)|The snake hissed.|ពស់បានបន្លឺសូរស៊ីស។
hobble|hobbled|hobbled|ដើរខ្ញើច|He hobbled on his injured leg.|គាត់បានដើរខ្ញើចដោយសារជើងរបួស។
hoist|hoisted|hoisted|លើក (ទង់)|They hoisted the flag.|ពួកគេបានលើកទង់ជាតិ។
hound|hounded|hounded|ដេញតាមរំខាន|Reporters hounded the star.|អ្នកកាសែតបានដេញតាមរំខានតារា។
huddle|huddled|huddled|ផ្ដុំគ្នា|We huddled around the fire.|យើងបានផ្ដុំគ្នាជុំវិញភ្លើង។
humor|humored|humored|ធ្វើតាមចិត្ត|Just humor him.|គ្រាន់តែធ្វើតាមចិត្តគាត់ទៅ។
hurl|hurled|hurled|បោះយ៉ាងខ្លាំង|He hurled the stone into the river.|គាត់បានបោះដុំថ្មចូលទន្លេយ៉ាងខ្លាំង។
hustle|hustled|hustled|ប្រញាប់ / រុញ|She hustled the kids into the car.|នាងបានប្រញាប់រុញក្មេងៗចូលឡាន។
imbue|imbued|imbued|បំពេញ / បណ្ដុះ|Her words were imbued with hope.|សម្ដីរបស់នាងពោរពេញដោយក្ដីសង្ឃឹម។
immobilize|immobilized|immobilized|ធ្វើឲ្យរើមិនរួច|The cast immobilized his arm.|ស្បៃរុំបានធ្វើឲ្យដៃរបស់គាត់រើមិនរួច។
impersonate|impersonated|impersonated|ក្លែងខ្លួនជា|He impersonated a police officer.|គាត់បានក្លែងខ្លួនជាប៉ូលិស។
implant|implanted|implanted|ដាំ / បញ្ចូល|They implanted a chip in the dog.|ពួកគេបានបញ្ចូលបន្ទះឈីបក្នុងខ្លួនឆ្កែ។
inaugurate|inaugurated|inaugurated|សម្ពោធ / ចូលកាន់តំណែង|They inaugurated the new bridge.|ពួកគេបានសម្ពោធស្ពានថ្មី។
incarcerate|incarcerated|incarcerated|ដាក់គុក|He was incarcerated for ten years.|គាត់ត្រូវបានដាក់គុកដប់ឆ្នាំ។
incinerate|incinerated|incinerated|ដុតកម្ទេច|The waste is incinerated.|សំណល់ត្រូវបានដុតកម្ទេច។
incubate|incubated|incubated|ភ្ញាស់ / បណ្ដុះ|The hen incubated her eggs.|មេមាន់បានក្រាបភ្ញាស់ពង។
inflate|inflated|inflated|បូមខ្យល់ / បំប៉ោង|Inflate the tires.|បូមខ្យល់កង់។
inscribe|inscribed|inscribed|ចារឹក|The stone was inscribed in ancient Khmer.|ថ្មនេះត្រូវបានចារឹកជាអក្សរខ្មែរបុរាណ។
intrude|intruded|intruded|ជ្រៀតជ្រែក|I don't want to intrude.|ខ្ញុំមិនចង់រំខានទេ។
itemize|itemized|itemized|រាយជាមុខៗ|Please itemize the bill.|សូមរាយវិក្កយបត្រជាមុខៗ។
jostle|jostled|jostled|ច្រានគ្នា|People jostled for a better view.|មនុស្សបានច្រានគ្នាដើម្បីមើលឲ្យច្បាស់។
jumble|jumbled|jumbled|ច្របល់|The letters were jumbled.|អក្សរត្រូវបានច្របល់គ្នា។
lapse|lapsed|lapsed|ផុតកំណត់ / ធ្លាក់ចូល|My membership lapsed.|សមាជិកភាពរបស់ខ្ញុំបានផុតកំណត់។
laud|lauded|lauded|សរសើរ|The team was lauded for their effort.|ក្រុមនេះត្រូវបានសរសើរចំពោះការខិតខំ។
liquidate|liquidated|liquidated|រំលាយ (ក្រុមហ៊ុន)|The company was liquidated.|ក្រុមហ៊ុនត្រូវបានរំលាយ។
loiter|loitered|loitered|ដើរទាញហួងទំនេរ|Teenagers loitered outside the shop.|ក្មេងជំទង់ដើរទាញហួងនៅខាងក្រៅហាង។
lull|lulled|lulled|បំពេរ / ធ្វើឲ្យស្ងប់|The music lulled the baby to sleep.|តន្ត្រីបានបំពេរទារកឲ្យគេងលក់។
lurk|lurked|lurked|លបលាក់ខ្លួន|A crocodile lurked in the river.|ក្រពើមួយក្បាលលបលាក់ខ្លួនក្នុងទន្លេ។
mangle|mangled|mangled|ធ្វើឲ្យខូចទ្រង់ទ្រាយ|The machine mangled the paper.|ម៉ាស៊ីនបានធ្វើឲ្យក្រដាសខូចទ្រង់ទ្រាយ។
mar|marred|marred|ធ្វើឲ្យខូច|Rain marred the ceremony.|ភ្លៀងបានធ្វើឲ្យពិធីខូច។
mesmerize|mesmerized|mesmerized|ធ្វើឲ្យស្រឡាំងកាំង|The dancers mesmerized the audience.|អ្នករាំបានធ្វើឲ្យទស្សនិកជនស្រឡាំងកាំង។
metabolize|metabolized|metabolized|រំលាយ (ក្នុងខ្លួន)|The body metabolizes sugar.|រាងកាយរំលាយស្ករ។
misconstrue|misconstrued|misconstrued|យល់ខុស|She misconstrued my words.|នាងបានយល់ពាក្យរបស់ខ្ញុំខុស។
mishandle|mishandled|mishandled|ដោះស្រាយខុស|They mishandled the situation.|ពួកគេបានដោះស្រាយស្ថានភាពខុស។
mistreat|mistreated|mistreated|ធ្វើបាប|Never mistreat animals.|កុំធ្វើបាបសត្វ។
moan|moaned|moaned|ថ្ងូរ / រអ៊ូ|He moaned about the food.|គាត់បានរអ៊ូពីម្ហូប។
mope|moped|moped|អង្គុយក្រៀមក្រំ|Stop moping and go out.|ឈប់អង្គុយក្រៀមក្រំ ហើយចេញទៅក្រៅទៅ។
muffle|muffled|muffled|ធ្វើឲ្យសំឡេងស្រអាប់|The snow muffled our footsteps.|ព្រិលបានធ្វើឲ្យសំឡេងជំហានរបស់យើងស្រអាប់។
nestle|nestled|nestled|កាឡាក់ / ស្ថិតនៅក្បែរ|The village nestles in the hills.|ភូមិនេះស្ថិតនៅចន្លោះភ្នំតូចៗ។
nudge|nudged|nudged|កេះ / រុញស្រាលៗ|She nudged me to wake up.|នាងបានកេះខ្ញុំឲ្យភ្ញាក់។
obsess|obsessed|obsessed|ងប់ងល់|He obsesses over details.|គាត់ងប់ងល់នឹងព័ត៌មានលម្អិត។
oust|ousted|ousted|បណ្ដេញចេញពីតំណែង|The leader was ousted.|អ្នកដឹកនាំត្រូវបានបណ្ដេញចេញពីតំណែង។
outlive|outlived|outlived|រស់នៅយូរជាង|She outlived her husband.|នាងរស់នៅយូរជាងស្វាមីរបស់នាង។
outsmart|outsmarted|outsmarted|ឆ្លាតជាង / បោក|The fox outsmarted the dog.|ចចកឆ្លាតជាងឆ្កែ។
overlap|overlapped|overlapped|ត្រួតគ្នា|The two meetings overlap.|កិច្ចប្រជុំទាំងពីរត្រួតពេលគ្នា។
overpower|overpowered|overpowered|យកឈ្នះដោយកម្លាំង|Police overpowered the thief.|ប៉ូលិសបានចាប់ចោរដោយកម្លាំង។
overrate|overrated|overrated|វាយតម្លៃខ្ពស់ពេក|The film is overrated.|ភាពយន្តនេះត្រូវបានគេវាយតម្លៃខ្ពស់ពេក។
overrun|overran|overrun|ពាសពេញ / លើសពេល|The garden was overrun with weeds.|សួនច្បារពាសពេញទៅដោយស្មៅ។
oversimplify|oversimplified|oversimplified|ធ្វើឲ្យសាមញ្ញពេក|Don't oversimplify the problem.|កុំធ្វើឲ្យបញ្ហាសាមញ្ញពេក។
overstate|overstated|overstated|និយាយបំផ្លើស|He overstated the risks.|គាត់បាននិយាយបំផ្លើសពីហានិភ័យ។
overuse|overused|overused|ប្រើច្រើនពេក|Don't overuse your phone.|កុំប្រើទូរស័ព្ទច្រើនពេក។
pamper|pampered|pampered|ថ្នាក់ថ្នម|She pampers her cat.|នាងថ្នាក់ថ្នមឆ្មារបស់នាង។
parody|parodied|parodied|ធ្វើត្រាប់តាមបែបកំប្លែង|The show parodied famous films.|កម្មវិធីនេះបានធ្វើត្រាប់តាមភាពយន្តល្បីៗបែបកំប្លែង។
patronize|patronized|patronized|និយាយមើលងាយ / គាំទ្រ (ហាង)|Don't patronize me!|កុំនិយាយមើលងាយខ្ញុំ!
peddle|peddled|peddled|លក់ដូរតាមផ្លូវ|He peddles fruit in the market.|គាត់លក់ផ្លែឈើនៅផ្សារ។
penetrate|penetrated|penetrated|ជ្រាបចូល / ទម្លុះ|Sunlight penetrated the forest.|ពន្លឺថ្ងៃបានជ្រាបចូលក្នុងព្រៃ។
perish|perished|perished|ស្លាប់ / វិនាស|Many perished in the flood.|មនុស្សជាច្រើនបានស្លាប់ក្នុងទឹកជំនន់។
pester|pestered|pestered|រំខាន|Stop pestering your sister.|ឈប់រំខានប្អូនស្រីរបស់អ្នកទៅ។
pilfer|pilfered|pilfered|លួចបន្តិចបន្តួច|Someone pilfered my pens.|មាននរណាម្នាក់បានលួចប៊ិចរបស់ខ្ញុំ។
pinpoint|pinpointed|pinpointed|កំណត់ឲ្យចំ|We can't pinpoint the cause.|យើងមិនអាចកំណត់មូលហេតុឲ្យចំបានទេ។
plead|pleaded|pleaded|អង្វរ / ឆ្លើយ (នៅតុលាការ)|He pleaded for help.|គាត់បានអង្វរសុំជំនួយ។
poach|poached|poached|បរបាញ់ខុសច្បាប់ / ស្ងោរ|Hunters poach elephants for ivory.|អ្នកប្រមាញ់បរបាញ់ដំរីខុសច្បាប់ដើម្បីយកភ្លុក។
pounce|pounced|pounced|លោតខ្ទប់|The cat pounced on the mouse.|ឆ្មាបានលោតខ្ទប់កណ្ដុរ។
preach|preached|preached|អប់រំ / ទេសនា|The monk preached about kindness.|ព្រះសង្ឃបានទេសនាអំពីមេត្តាធម៌។
preside|presided|presided|ធ្វើជាអធិបតី|The minister presided over the ceremony.|រដ្ឋមន្ត្រីបានធ្វើជាអធិបតីក្នុងពិធី។
prod|prodded|prodded|ចាក់ / ជំរុញ|She prodded him to finish.|នាងបានជំរុញគាត់ឲ្យបញ្ចប់។
pry|pried|pried|លបមើលរឿងគេ / គាស់|Don't pry into my life.|កុំលបមើលរឿងជីវិតខ្ញុំ។
quiver|quivered|quivered|ញ័រ|Her lips quivered.|បបូរមាត់របស់នាងញ័រ។
ransack|ransacked|ransacked|រុករករាយប៉ាយ|Thieves ransacked the house.|ចោរបានរុករកផ្ទះរាយប៉ាយ។
ravage|ravaged|ravaged|បំផ្លិចបំផ្លាញ|War ravaged the country.|សង្គ្រាមបានបំផ្លិចបំផ្លាញប្រទេស។
rebound|rebounded|rebounded|លោតត្រឡប់ / ងើបវិញ|Prices rebounded quickly.|តម្លៃបានងើបឡើងវិញយ៉ាងលឿន។
recuperate|recuperated|recuperated|ជាសះស្បើយ|She is recuperating at home.|នាងកំពុងសម្រាកព្យាបាលនៅផ្ទះ។
reek|reeked|reeked|មានក្លិនស្អុយខ្លាំង|The room reeked of smoke.|បន្ទប់មានក្លិនផ្សែងខ្លាំង។
rehash|rehashed|rehashed|និយាយរឿងចាស់ឡើងវិញ|Don't rehash old arguments.|កុំយករឿងឈ្លោះចាស់ៗមកនិយាយទៀត។
rejuvenate|rejuvenated|rejuvenated|ធ្វើឲ្យស្រស់ថ្លាឡើងវិញ|The holiday rejuvenated me.|ថ្ងៃឈប់សម្រាកបានធ្វើឲ្យខ្ញុំស្រស់ថ្លាឡើងវិញ។
relapse|relapsed|relapsed|ធ្លាក់ខ្លួនឈឺឡើងវិញ|He relapsed after a week.|គាត់បានធ្លាក់ខ្លួនឈឺឡើងវិញក្រោយមួយសប្ដាហ៍។
relent|relented|relented|ទន់ចិត្ត / ព្រមតាម|Mom finally relented.|ម្ដាយបានទន់ចិត្តនៅទីបំផុត។
repatriate|repatriated|repatriated|បញ្ជូនមកស្រុកវិញ|Workers were repatriated.|កម្មករត្រូវបានបញ្ជូនមកស្រុកវិញ។
repress|repressed|repressed|ទប់ / បង្ក្រាប|She repressed her anger.|នាងបានទប់កំហឹងរបស់នាង។
reproach|reproached|reproached|បន្ទោស|She reproached him for lying.|នាងបានបន្ទោសគាត់ដោយសារកុហក។
resuscitate|resuscitated|resuscitated|ជួយឲ្យដឹងខ្លួនឡើងវិញ|Doctors resuscitated the man.|វេជ្ជបណ្ឌិតបានជួយឲ្យបុរសនោះដឹងខ្លួនឡើងវិញ។
revamp|revamped|revamped|កែលម្អថ្មី|They revamped the website.|ពួកគេបានកែលម្អវេបសាយថ្មី។
rivet|riveted|riveted|ទាក់ទាញចិត្តខ្លាំង|The film riveted the audience.|ភាពយន្តនេះទាក់ទាញចិត្តទស្សនិកជនខ្លាំងណាស់។
romanticize|romanticized|romanticized|ស្រមៃថាល្អពេក|Don't romanticize the past.|កុំស្រមៃថាអតីតកាលល្អពេក។
sanction|sanctioned|sanctioned|ដាក់ទណ្ឌកម្ម / អនុញ្ញាត|The UN sanctioned the country.|អង្គការសហប្រជាជាតិបានដាក់ទណ្ឌកម្មលើប្រទេសនោះ។
saunter|sauntered|sauntered|ដើរយឺតៗសប្បាយ|He sauntered into the room.|គាត់បានដើរយឺតៗចូលបន្ទប់។
scald|scalded|scalded|រលាកទឹកក្ដៅ|I scalded my hand with tea.|ខ្ញុំបានរលាកដៃដោយទឹកតែក្ដៅ។
scamper|scampered|scampered|រត់ផ្លូងៗ|The mice scampered away.|កណ្ដុររត់ផ្លូងៗចេញ។
scour|scoured|scoured|ស្វែងរកគ្រប់ទីកន្លែង / ដុស|We scoured the city for a hotel.|យើងបានស្វែងរកសណ្ឋាគារពេញទីក្រុង។
scuffle|scuffled|scuffled|ប៉ះទង្គិចគ្នា|Fans scuffled outside the stadium.|អ្នកគាំទ្របានប៉ះទង្គិចគ្នានៅក្រៅកីឡដ្ឋាន។
seclude|secluded|secluded|ញែកខ្លួនឲ្យនៅដាច់ឆ្ងាយ|He secluded himself to write.|គាត់បានញែកខ្លួននៅដាច់ឆ្ងាយដើម្បីសរសេរ។
seethe|seethed|seethed|ខឹងក្នុងចិត្ត|She seethed with anger.|នាងខឹងក្រហាយក្នុងចិត្ត។
shackle|shackled|shackled|ដាក់ច្រវាក់|The prisoner was shackled.|អ្នកទោសត្រូវបានដាក់ច្រវាក់។
sidestep|sidestepped|sidestepped|គេចវេះ|He sidestepped the question.|គាត់បានគេចវេះសំណួរ។
skew|skewed|skewed|បង្ខូច / លម្អៀង|The data was skewed.|ទិន្នន័យត្រូវបានលម្អៀង។
skyrocket|skyrocketed|skyrocketed|ឡើងខ្ពស់ខ្លាំង|Prices skyrocketed.|តម្លៃបានឡើងខ្ពស់ខ្លាំង។
slacken|slackened|slackened|បន្ធូរ / ថយចុះ|The rope slackened.|ខ្សែបានធូរ។
slither|slithered|slithered|លូនរអិល|The snake slithered away.|ពស់បានលូនរអិលចេញទៅ។
slouch|slouched|slouched|អង្គុយ / ឈរកោងខ្នង|Don't slouch at your desk.|កុំអង្គុយកោងខ្នងនៅតុ។
smear|smeared|smeared|លាបប្រឡាក់ / បង្ខូចកេរ្តិ៍|He smeared paint on the wall.|គាត់បានលាបថ្នាំប្រឡាក់ជញ្ជាំង។
snub|snubbed|snubbed|ព្រងើយមិនរាប់អាន|She snubbed me at the party.|នាងបានព្រងើយមិនរាប់អានខ្ញុំនៅពិធីជប់លៀង។
sparkle|sparkled|sparkled|ភ្លឺផ្លេកៗ|Her eyes sparkled with joy.|ភ្នែករបស់នាងភ្លឺផ្លេកៗដោយក្ដីរីករាយ។
splurge|splurged|splurged|ចាយលុយខ្ជះខ្ជាយ|I splurged on new shoes.|ខ្ញុំបានចាយលុយច្រើនទិញស្បែកជើងថ្មី។
sprawl|sprawled|sprawled|ដេកលាតខ្លួន / រីករាលដាល|He sprawled on the sofa.|គាត់បានដេកលាតខ្លួនលើសាឡុង។
squabble|squabbled|squabbled|ឈ្លោះគ្នារឿងតូចតាច|The kids squabbled over toys.|ក្មេងៗឈ្លោះគ្នាដណ្ដើមប្រដាប់ក្មេងលេង។
squint|squinted|squinted|ព្រិចភ្នែកមើល|She squinted at the small text.|នាងបានព្រិចភ្នែកមើលអក្សរតូចៗ។
stagger|staggered|staggered|ដើរទ្រេតទ្រោត / ធ្វើឲ្យភ្ញាក់ផ្អើល|He staggered home late at night.|គាត់បានដើរទ្រេតទ្រោតទៅផ្ទះពេលយប់ជ្រៅ។
stash|stashed|stashed|លាក់ទុក|She stashed money under the bed.|នាងបានលាក់លុយទុកក្រោមគ្រែ។
stoke|stoked|stoked|បន្ថែមអុស / ញុះញង់|He stoked the fire.|គាត់បានបន្ថែមអុសឲ្យភ្លើងឆេះខ្លាំង។
stow|stowed|stowed|ដាក់ទុក|Stow your bag under the seat.|ដាក់កាបូបរបស់អ្នកនៅក្រោមកៅអី។
strangle|strangled|strangled|ច្របាច់ក|Weeds strangled the plants.|ស្មៅចង្រៃបានរុំច្របាច់រុក្ខជាតិ។
stray|strayed|strayed|វង្វេង / ងាកចេញ|Don't stray from the path.|កុំងាកចេញពីផ្លូវ។
stun|stunned|stunned|ធ្វើឲ្យស្រឡាំងកាំង|The news stunned everyone.|ដំណឹងនេះធ្វើឲ្យគ្រប់គ្នាស្រឡាំងកាំង។
subdue|subdued|subdued|បង្ក្រាប / ធ្វើឲ្យស្ងប់|Police subdued the man.|ប៉ូលិសបានបង្ក្រាបបុរសនោះ។
sulk|sulked|sulked|ស្រពាប់ស្រពោនអន់ចិត្ត|He sulked all day.|គាត់បានអន់ចិត្តពេញមួយថ្ងៃ។
swagger|swaggered|swaggered|ដើរវាយឫក|He swaggered into class.|គាត់បានដើរវាយឫកចូលថ្នាក់។
swarm|swarmed|swarmed|ហ្វូង (ចូល)|Fans swarmed the stage.|អ្នកគាំទ្របានហ្វូងចូលឆាក។
swerve|swerved|swerved|ងាកភ្លាម (ឡាន)|The car swerved to avoid a dog.|ឡានបានងាកភ្លាមដើម្បីជៀសឆ្កែ។
tabulate|tabulated|tabulated|រៀបជាតារាង|We tabulated the survey results.|យើងបានរៀបលទ្ធផលស្ទង់មតិជាតារាង។
tantalize|tantalized|tantalized|ល្បួងឲ្យចង់|The smell tantalized us.|ក្លិននោះបានល្បួងឲ្យយើងចង់ញ៉ាំ។
tether|tethered|tethered|ចងភ្ជាប់|The cow was tethered to a tree.|គោត្រូវបានចងភ្ជាប់នឹងដើមឈើ។
throb|throbbed|throbbed|ឈឺផ្សាៗ / លោតញាប់|My head is throbbing.|ក្បាលខ្ញុំឈឺផ្សាៗ។
tinker|tinkered|tinkered|ជួសជុលលេងៗ|He likes to tinker with engines.|គាត់ចូលចិត្តជួសជុលម៉ាស៊ីនលេង។
totter|tottered|tottered|ដើរទ្រេតទ្រោត|The old man tottered across the road.|តាចាស់បានដើរទ្រេតទ្រោតឆ្លងផ្លូវ។
trample|trampled|trampled|ជាន់ខ្ទេច|The elephants trampled the crops.|ដំរីបានជាន់ដំណាំខ្ទេច។
transfix|transfixed|transfixed|ធ្វើឲ្យស្ញប់ស្ញែង|We were transfixed by the view.|យើងស្ញប់ស្ញែងនឹងទេសភាព។
tread|trod|trodden|ជាន់ / ដើរ|Don't tread on the flowers.|កុំជាន់ផ្កា។
trudge|trudged|trudged|ដើរយឺតៗដោយហត់|We trudged through the mud.|យើងបានដើរយឺតៗកាត់ភក់។
twitch|twitched|twitched|ញ័រកន្ត្រាក់|His eye twitched.|ភ្នែករបស់គាត់ញ័រកន្ត្រាក់។
underscore|underscored|underscored|សង្កត់ធ្ងន់|The report underscores the need for change.|របាយការណ៍នេះសង្កត់ធ្ងន់លើតម្រូវការនៃការផ្លាស់ប្ដូរ។
unleash|unleashed|unleashed|បញ្ចេញ / ដោះលែង|The storm unleashed heavy rain.|ព្យុះបានបញ្ចេញភ្លៀងយ៉ាងខ្លាំង។
unnerve|unnerved|unnerved|ធ្វើឲ្យបាត់ស្មារតី / ភ័យ|The silence unnerved me.|ភាពស្ងៀមស្ងាត់ធ្វើឲ្យខ្ញុំភ័យ។
upend|upended|upended|ផ្កាប់ / ផ្លាស់ប្ដូរទាំងស្រុង|The virus upended our lives.|មេរោគបានផ្លាស់ប្ដូរជីវិតរបស់យើងទាំងស្រុង។
uplift|uplifted|uplifted|លើកទឹកចិត្ត|The song uplifted everyone.|បទចម្រៀងនេះបានលើកទឹកចិត្តគ្រប់គ្នា។
upstage|upstaged|upstaged|ដណ្ដើមការចាប់អារម្មណ៍|The child upstaged the actors.|ក្មេងនោះបានដណ្ដើមការចាប់អារម្មណ៍ពីតួសម្ដែង។
vandalize|vandalized|vandalized|បំផ្លិចបំផ្លាញទ្រព្យសាធារណៈ|Someone vandalized the bus stop.|មាននរណាម្នាក់បានបំផ្លាញចំណតឡានក្រុង។
ventilate|ventilated|ventilated|បញ្ចេញខ្យល់|Open the window to ventilate the room.|បើកបង្អួចដើម្បីឲ្យខ្យល់ចេញចូលបន្ទប់។
veto|vetoed|vetoed|ប្រើវេតូ / បដិសេធ|The president vetoed the bill.|ប្រធានាធិបតីបានប្រើវេតូលើសេចក្ដីព្រាងច្បាប់។
vouch|vouched|vouched|ធានាអះអាង|I can vouch for his honesty.|ខ្ញុំអាចធានាពីភាពស្មោះត្រង់របស់គាត់។
wade|waded|waded|ដើរលុយទឹក|We waded across the stream.|យើងបានដើរលុយទឹកឆ្លងអូរ។
wallow|wallowed|wallowed|ងប់ក្នុង / ត្រាំ|Buffaloes wallow in the mud.|ក្របីត្រាំក្នុងភក់។
wane|waned|waned|ថយចុះ|His interest began to wane.|ការចាប់អារម្មណ៍របស់គាត់ចាប់ផ្ដើមថយចុះ។
wean|weaned|weaned|ផ្ដាច់ដោះ / បំបាត់ទម្លាប់|She weaned the baby at one year.|នាងបានផ្ដាច់ដោះទារកនៅអាយុមួយឆ្នាំ។
wheeze|wheezed|wheezed|ដកដង្ហើមខ្សឹប|He wheezed after climbing the stairs.|គាត់ដកដង្ហើមខ្សឹបក្រោយពេលឡើងជណ្ដើរ។
whimper|whimpered|whimpered|យំខ្សឹកខ្សួល|The puppy whimpered.|កូនឆ្កែបានយំខ្សឹកខ្សួល។
whine|whined|whined|យំរអ៊ូ|Stop whining!|ឈប់យំរអ៊ូទៅ!
whirl|whirled|whirled|វិលយ៉ាងលឿន|The dancers whirled around.|អ្នករាំបានវិលជុំវិញយ៉ាងលឿន។
wield|wielded|wielded|កាន់ / ប្រើ (អំណាច)|He wields great power.|គាត់មានអំណាចខ្លាំង។
wiggle|wiggled|wiggled|រញ្ជួយ / រើ|Wiggle your toes.|រើម្រាមជើងរបស់អ្នក។
wilt|wilted|wilted|ស្រពោន|The flowers wilted in the heat.|ផ្កាបានស្រពោនដោយសារកម្ដៅ។
wince|winced|winced|ញញើត (ដោយឈឺ)|She winced in pain.|នាងបានញញើតដោយការឈឺចាប់។
wobble|wobbled|wobbled|រញ្ជួយ / ទ្រេតទ្រោត|The table wobbles.|តុនេះរញ្ជួយ។
wrench|wrenched|wrenched|រមួល / ទាញខ្លាំង|He wrenched the door open.|គាត់បានទាញទ្វារបើកយ៉ាងខ្លាំង។
yank|yanked|yanked|ទាញភ្លាមៗ|She yanked the rope.|នាងបានទាញខ្សែភ្លាមៗ។
abbreviate|abbreviated|abbreviated|សរសេរកាត់|"Cambodia" is often abbreviated to "KH".|ពាក្យ "Cambodia" ច្រើនត្រូវបានសរសេរកាត់ថា "KH"។
adjoin|adjoined|adjoined|នៅជាប់|The kitchen adjoins the dining room.|ផ្ទះបាយនៅជាប់បន្ទប់ទទួលទានអាហារ។
animate|animated|animated|ធ្វើឲ្យមានចលនា / មានជីវិត|She animated the cartoon herself.|នាងបានធ្វើឲ្យតុក្កតាមានចលនាដោយខ្លួនឯង។
append|appended|appended|ភ្ជាប់បន្ថែមនៅចុង|Append your name to the list.|ភ្ជាប់ឈ្មោះអ្នកបន្ថែមនៅចុងបញ្ជី។
arouse|aroused|aroused|ដាស់ / បង្កឲ្យ (ចំណាប់អារម្មណ៍)|The story aroused my curiosity.|រឿងនោះបានដាស់ការចង់ដឹងរបស់ខ្ញុំ។
ascend|ascended|ascended|ឡើងទៅលើ|We ascended the stairs to the temple.|យើងបានឡើងជណ្ដើរទៅវត្ត។
backfire|backfired|backfired|ត្រឡប់មកវាយខ្លួនឯង|His plan backfired.|ផែនការរបស់គាត់បានត្រឡប់មកវាយខ្លួនឯងវិញ។
bombard|bombarded|bombarded|ទម្លាក់គ្រាប់ / សួរបន្តបន្ទាប់|Reporters bombarded him with questions.|អ្នកសារព័ត៌មានបានសួរគាត់បន្តបន្ទាប់។
calibrate|calibrated|calibrated|ក្រិតតាមខ្នាត|Calibrate the scale before use.|ក្រិតជញ្ជីងតាមខ្នាតមុនពេលប្រើ។
camouflage|camouflaged|camouflaged|ក្លែងបន្លំ (ពណ៌)|The lizard camouflaged itself on the tree.|តុកកែក្លែងខ្លួនលើដើមឈើ។
centralize|centralized|centralized|ប្រមូលផ្ដុំនៅកណ្ដាល|They centralized all records.|ពួកគេបានប្រមូលផ្ដុំឯកសារទាំងអស់នៅកន្លែងតែមួយ។
channel|channeled|channeled|បង្វែរ / បញ្ចូន|Channel your energy into study.|បង្វែរថាមពលរបស់អ្នកទៅលើការសិក្សា។
correlate|correlated|correlated|មានទំនាក់ទំនងគ្នា|Sleep correlates with good grades.|ការគេងមានទំនាក់ទំនងនឹងពិន្ទុល្អ។
counterfeit|counterfeited|counterfeited|ក្លែងបន្លំ (លុយ ទំនិញ)|They counterfeited brand-name bags.|ពួកគេបានក្លែងបន្លំកាបូបម៉ាកល្បី។
debut|debuted|debuted|បង្ហាញខ្លួនជាលើកដំបូង|The singer debuted last year.|អ្នកចម្រៀងបានបង្ហាញខ្លួនជាលើកដំបូងកាលពីឆ្នាំមុន។
deforest|deforested|deforested|កាប់បំផ្លាញព្រៃ|Large areas were deforested.|ផ្ទៃដីធំៗត្រូវបានកាប់បំផ្លាញព្រៃ។
degrade|degraded|degraded|ធ្វើឲ្យខូចគុណភាព / បន្ទាបបន្ថោក|Plastic takes years to degrade.|ប្លាស្ទិកត្រូវការពេលច្រើនឆ្នាំដើម្បីរលួយ។
depreciate|depreciated|depreciated|ធ្លាក់ថ្លៃ|Cars depreciate quickly.|ឡានធ្លាក់ថ្លៃយ៉ាងលឿន។
devalue|devalued|devalued|បន្ទាបតម្លៃ|Don't devalue your own work.|កុំបន្ទាបតម្លៃការងាររបស់ខ្លួនឯង។
eject|ejected|ejected|បញ្ចេញ / បណ្ដេញចេញ|Eject the USB safely.|ដក USB ចេញដោយសុវត្ថិភាព។
enact|enacted|enacted|អនុម័ត (ច្បាប់)|The government enacted a new law.|រដ្ឋាភិបាលបានអនុម័តច្បាប់ថ្មី។
reapply|reapplied|reapplied|ដាក់ពាក្យម្ដងទៀត / លាបម្ដងទៀត|Reapply sunscreen every two hours.|លាបឡេការពារកម្ដៅថ្ងៃម្ដងទៀតរៀងរាល់ពីរម៉ោង។
reappear|reappeared|reappeared|លេចមកវិញ|The sun reappeared after the rain.|ព្រះអាទិត្យលេចមកវិញក្រោយភ្លៀង។
reassess|reassessed|reassessed|វាយតម្លៃឡើងវិញ|We need to reassess our plan.|យើងត្រូវវាយតម្លៃផែនការរបស់យើងឡើងវិញ។
reconsider|reconsidered|reconsidered|ពិចារណាឡើងវិញ|Please reconsider your decision.|សូមពិចារណាការសម្រេចចិត្តរបស់អ្នកឡើងវិញ។
redecorate|redecorated|redecorated|តុបតែងឡើងវិញ|We redecorated the living room.|យើងបានតុបតែងបន្ទប់ទទួលភ្ញៀវឡើងវិញ។
reelect|reelected|reelected|បោះឆ្នោតជ្រើសរើសម្ដងទៀត|She was reelected as class leader.|នាងត្រូវបានជ្រើសរើសជាប្រធានថ្នាក់ម្ដងទៀត។
rejoin|rejoined|rejoined|ចូលរួមម្ដងទៀត|He rejoined the team after his injury.|គាត់បានចូលក្រុមវិញក្រោយពីរបួស។
relaunch|relaunched|relaunched|ដាក់ឲ្យដំណើរការឡើងវិញ|They relaunched the app with new features.|ពួកគេបានដាក់ App ឲ្យដំណើរការឡើងវិញជាមួយមុខងារថ្មី។
relive|relived|relived|រស់នៅក្នុងអនុស្សាវរីយ៍ម្ដងទៀត|Looking at photos, I relived the trip.|ពេលមើលរូបថត ខ្ញុំដូចជាបានធ្វើដំណើរនោះម្ដងទៀត។
reload|reloaded|reloaded|ផ្ទុកឡើងវិញ|Reload the page if it doesn't work.|ផ្ទុកទំព័រឡើងវិញប្រសិនបើវាមិនដំណើរការ។
remake|remade|remade|ធ្វើឡើងវិញ / ថតឡើងវិញ|They remade the old Khmer film.|ពួកគេបានថតខ្សែភាពយន្តខ្មែរចាស់ឡើងវិញ។
remarry|remarried|remarried|រៀបការម្ដងទៀត|His father remarried last year.|ឪពុករបស់គាត់បានរៀបការម្ដងទៀតកាលពីឆ្នាំមុន។
reorganize|reorganized|reorganized|រៀបចំឡើងវិញ|I reorganized my bookshelf.|ខ្ញុំបានរៀបចំធ្នើសៀវភៅឡើងវិញ។
repack|repacked|repacked|វេចខ្ចប់ឡើងវិញ|I had to repack my suitcase.|ខ្ញុំត្រូវវេចវ៉ាលីឡើងវិញ។
replant|replanted|replanted|ដាំឡើងវិញ|They replanted trees after the fire.|ពួកគេបានដាំដើមឈើឡើងវិញក្រោយអគ្គិភ័យ។
reprint|reprinted|reprinted|បោះពុម្ពឡើងវិញ|The book was reprinted three times.|សៀវភៅនោះត្រូវបានបោះពុម្ពឡើងវិញបីដង។
resell|resold|resold|លក់បន្ត|He buys old phones and resells them.|គាត់ទិញទូរស័ព្ទចាស់ ហើយលក់បន្ត។
resend|resent|resent|ផ្ញើម្ដងទៀត|Can you resend the email?|តើអ្នកអាចផ្ញើអ៊ីមែលម្ដងទៀតបានទេ?
reshape|reshaped|reshaped|កែទម្រង់ឡើងវិញ|AI is reshaping education.|AI កំពុងកែទម្រង់វិស័យអប់រំឡើងវិញ។
restate|restated|restated|និយាយម្ដងទៀត (ក្នុងពាក្យផ្សេង)|Restate the question in your own words.|និយាយសំណួរម្ដងទៀតដោយប្រើពាក្យរបស់អ្នក។
restructure|restructured|restructured|រៀបចំរចនាសម្ព័ន្ធឡើងវិញ|The company restructured its departments.|ក្រុមហ៊ុនបានរៀបចំរចនាសម្ព័ន្ធផ្នែកនានាឡើងវិញ។
retrain|retrained|retrained|បណ្ដុះបណ្ដាលឡើងវិញ|She retrained as a web designer.|នាងបានរៀនជំនាញថ្មីក្លាយជាអ្នករចនាវេបសាយ។
retype|retyped|retyped|វាយអក្សរម្ដងទៀត|Please retype your password.|សូមវាយពាក្យសម្ងាត់ម្ដងទៀត។
rewire|rewired|rewired|តខ្សែភ្លើងឡើងវិញ|We rewired the old house.|យើងបានតខ្សែភ្លើងផ្ទះចាស់ឡើងវិញ។
misbehave|misbehaved|misbehaved|ប្រព្រឹត្តមិនល្អ / រពិស|The kids misbehaved in class.|ក្មេងៗបានរពិសក្នុងថ្នាក់។
miscalculate|miscalculated|miscalculated|គណនាខុស|I miscalculated the total price.|ខ្ញុំបានគណនាតម្លៃសរុបខុស។
mislay|mislaid|mislaid|ដាក់ភ្លេច (រកមិនឃើញ)|I've mislaid my glasses again.|ខ្ញុំដាក់វ៉ែនតាភ្លេចម្ដងទៀតហើយ។
mispronounce|mispronounced|mispronounced|បញ្ចេញសំឡេងខុស|Many people mispronounce this word.|មនុស្សជាច្រើនបញ្ចេញសំឡេងពាក្យនេះខុស។
misread|misread|misread|អានខុស / យល់ខុស|I misread the time on the ticket.|ខ្ញុំបានអានម៉ោងលើសំបុត្រខុស។
mistranslate|mistranslated|mistranslated|បកប្រែខុស|The sign was mistranslated.|ផ្លាកសញ្ញានោះត្រូវបានបកប្រែខុស។
misjudge|misjudged|misjudged|វិនិច្ឆ័យខុស|I misjudged him; he's very kind.|ខ្ញុំបានវិនិច្ឆ័យគាត់ខុស គាត់ចិត្តល្អណាស់។
misuse|misused|misused|ប្រើខុស / ប្រើប្រាស់មិនត្រឹមត្រូវ|Don't misuse public money.|កុំប្រើប្រាស់ថវិកាសាធារណៈមិនត្រឹមត្រូវ។
overcook|overcooked|overcooked|ចម្អិនឆ្អិនហួស|I overcooked the noodles.|ខ្ញុំបានស្ងោរមីឆ្អិនហួស។
overdo|overdid|overdone|ធ្វើហួសហេតុ|Don't overdo the exercise.|កុំហាត់ប្រាណហួសហេតុ។
overheat|overheated|overheated|ក្ដៅហួស|My laptop overheated.|កុំព្យូទ័រយួរដៃរបស់ខ្ញុំក្ដៅហួស។
overload|overloaded|overloaded|ផ្ទុកលើសចំណុះ|Don't overload the truck.|កុំផ្ទុកឡានដឹកទំនិញលើសចំណុះ។
overpay|overpaid|overpaid|បង់លើស|I think we overpaid for this phone.|ខ្ញុំគិតថាយើងបានបង់លើសតម្លៃសម្រាប់ទូរស័ព្ទនេះ។
overspend|overspent|overspent|ចាយលើស|We overspent during the holiday.|យើងបានចាយលុយលើសកំណត់ក្នុងថ្ងៃឈប់សម្រាក។
outrun|outran|outrun|រត់លឿនជាង|He outran all the other runners.|គាត់រត់លឿនជាងអ្នករត់ទាំងអស់។
outshine|outshone|outshone|ពូកែ / លេចធ្លោជាង|The new student outshone everyone.|សិស្សថ្មីពូកែលេចធ្លោជាងគេទាំងអស់។
undercook|undercooked|undercooked|ចម្អិនមិនទាន់ឆ្អិនល្អ|The chicken was undercooked.|សាច់មាន់ចម្អិនមិនទាន់ឆ្អិនល្អ។
undercut|undercut|undercut|លក់ថោកជាង (គូប្រជែង)|The new shop undercut our prices.|ហាងថ្មីលក់ថោកជាងតម្លៃរបស់យើង។
underpay|underpaid|underpaid|បើកប្រាក់ខែតិចពេក|Many workers are underpaid.|កម្មករជាច្រើនទទួលបានប្រាក់ខែតិចពេក។
understate|understated|understated|និយាយបន្ថយ (ពីការពិត)|He understated the danger.|គាត់និយាយបន្ថយពីគ្រោះថ្នាក់។
undervalue|undervalued|undervalued|វាយតម្លៃទាបពេក|Teachers are often undervalued.|គ្រូបង្រៀនច្រើនត្រូវបានវាយតម្លៃទាបពេក។
undress|undressed|undressed|ដោះសម្លៀកបំពាក់|The child undressed for a bath.|ក្មេងបានដោះសម្លៀកបំពាក់ដើម្បីងូតទឹក។
untie|untied|untied|ស្រាយ (ចំណង)|Untie your shoelaces.|ស្រាយខ្សែស្បែកជើងរបស់អ្នក។
unbutton|unbuttoned|unbuttoned|ដោះឡេវ|He unbuttoned his jacket.|គាត់បានដោះឡេវអាវក្រៅ។
disallow|disallowed|disallowed|មិនអនុញ្ញាត / បដិសេធ|The goal was disallowed.|គ្រាប់បាល់នោះមិនត្រូវបានរាប់។
disarm|disarmed|disarmed|ដកហូតអាវុធ / ធ្វើឲ្យទន់ចិត្ត|Police disarmed the robber.|ប៉ូលិសបានដកហូតអាវុធពីចោរប្លន់។
discontinue|discontinued|discontinued|បញ្ឈប់ (ផលិតកម្ម សេវា)|This model has been discontinued.|ម៉ូដែលនេះត្រូវបានបញ្ឈប់ផលិតហើយ។
disobey|disobeyed|disobeyed|មិនស្ដាប់បង្គាប់|He disobeyed his parents.|គាត់មិនបានស្ដាប់បង្គាប់ឪពុកម្ដាយ។
displease|displeased|displeased|ធ្វើឲ្យមិនពេញចិត្ត|The late delivery displeased customers.|ការដឹកជញ្ជូនយឺតធ្វើឲ្យអតិថិជនមិនពេញចិត្ត។
disqualify|disqualified|disqualified|ដកសិទ្ធិ / លុបឈ្មោះចេញពីការប្រកួត|He was disqualified for cheating.|គាត់ត្រូវបានដកសិទ្ធិដោយសារបន្លំ។
distrust|distrusted|distrusted|មិនទុកចិត្ត|She distrusts online shops.|នាងមិនទុកចិត្តហាងអនឡាញទេ។
disinfect|disinfected|disinfected|សម្លាប់មេរោគ|Disinfect the table after eating.|សម្លាប់មេរោគលើតុក្រោយពេលញ៉ាំ។
dehydrate|dehydrated|dehydrated|ខ្វះជាតិទឹក / សម្ងួត|Drink water so you don't dehydrate.|ផឹកទឹកដើម្បីកុំឲ្យខ្វះជាតិទឹក។
defrost|defrosted|defrosted|រំលាយទឹកកក|Defrost the fish before cooking.|រំលាយទឹកកកត្រីមុនពេលចម្អិន។
prepay|prepaid|prepaid|បង់ប្រាក់ជាមុន|I prepaid for my phone card.|ខ្ញុំបានបង់ប្រាក់កាតទូរស័ព្ទជាមុន។
preorder|preordered|preordered|កុម្ម៉ង់ជាមុន|I preordered the new book.|ខ្ញុំបានកុម្ម៉ង់សៀវភៅថ្មីជាមុន។
presuppose|presupposed|presupposed|សន្មត់ទុកជាមុន|The lesson presupposes basic grammar.|មេរៀននេះសន្មត់ថាអ្នកដឹងវេយ្យាករណ៍មូលដ្ឋានហើយ។
prewash|prewashed|prewashed|លាងជាមុន|The rice is prewashed.|អង្ករនេះត្រូវបានលាងជាមុនហើយ។
vet|vetted|vetted|ពិនិត្យឲ្យបានហ្មត់ចត់|All candidates are carefully vetted.|បេក្ខជនទាំងអស់ត្រូវបានពិនិត្យយ៉ាងហ្មត់ចត់។
benchmark|benchmarked|benchmarked|ប្រៀបធៀបនឹងស្តង់ដារ|We benchmarked our prices against competitors.|យើងបានប្រៀបធៀបតម្លៃរបស់យើងជាមួយគូប្រកួត។
bill|billed|billed|ចេញវិក្កយបត្រ|The hotel billed us for extra nights.|សណ្ឋាគារបានចេញវិក្កយបត្រសម្រាប់យប់បន្ថែម។
downgrade|downgraded|downgraded|បន្ទាប់ចំណាត់ថ្នាក់|The bank downgraded its forecast.|ធនាគារបានបន្ទាប់ការព្យាករណ៍របស់ខ្លួន។
mortgage|mortgaged|mortgaged|បញ្ចាំ (ផ្ទះ ដី)|They mortgaged their house to start a business.|ពួកគេបានបញ្ចាំផ្ទះដើម្បីចាប់ផ្ដើមអាជីវកម្ម។
overdraw|overdrew|overdrawn|ដកប្រាក់លើសសមតុល្យ|Be careful not to overdraw your account.|ប្រយ័ត្នកុំដកប្រាក់លើសសមតុល្យគណនី។
reinvest|reinvested|reinvested|វិនិយោគឡើងវិញ|We reinvest our profits in the business.|យើងវិនិយោគប្រាក់ចំណេញឡើងវិញក្នុងអាជីវកម្ម។
stockpile|stockpiled|stockpiled|ស្តុកទុក|People stockpiled rice before the storm.|មនុស្សបានស្តុកអង្ករទុកមុនព្យុះ។
wholesale|wholesaled|wholesaled|លក់ដុំ|They wholesale clothes to small shops.|ពួកគេលក់ដុំសម្លៀកបំពាក់ឲ្យហាងតូចៗ។
authenticate|authenticated|authenticated|ផ្ទៀងផ្ទាត់ភាពពិត|Experts authenticated the painting.|អ្នកជំនាញបានផ្ទៀងផ្ទាត់ថាគំនូរនោះជារបស់ពិត។
cache|cached|cached|រក្សាទុកបណ្ដោះអាសន្ន|The browser caches images to load faster.|កម្មវិធីរុករករក្សាទុករូបភាពបណ្ដោះអាសន្នដើម្បីបើកលឿន។
crowdsource|crowdsourced|crowdsourced|ប្រមូលពីសាធារណជន|The app crowdsources traffic information.|កម្មវិធីនេះប្រមូលព័ត៌មានចរាចរណ៍ពីសាធារណជន។
decrypt|decrypted|decrypted|ឌិគ្រីប / ស្រាយកូដ|Only you can decrypt your messages.|មានតែអ្នកទេដែលអាចស្រាយកូដសាររបស់អ្នក។
encapsulate|encapsulated|encapsulated|សង្ខេប / វេចខ្ចប់|This photo encapsulates the spirit of the city.|រូបថតនេះសង្ខេបនូវស្មារតីនៃទីក្រុង។
fork|forked|forked|បំបែក (ផ្លូវ / កូដ)|The road forks after the bridge.|ផ្លូវបែកជាពីរក្រោយស្ពាន។
geotag|geotagged|geotagged|ភ្ជាប់ទីតាំង|She geotagged her photos in Kep.|នាងបានភ្ជាប់ទីតាំងរូបថតរបស់នាងនៅកែប។
hash|hashed|hashed|បម្លែងជាកូដសម្ងាត់ (hash)|Passwords should always be hashed.|ពាក្យសម្ងាត់គួរតែត្រូវបានបម្លែងជាកូដ hash ជានិច្ច។
hyperlink|hyperlinked|hyperlinked|ភ្ជាប់តំណ|Hyperlink the word to the website.|ភ្ជាប់តំណពាក្យនោះទៅកាន់វេបសាយ។
index|indexed|indexed|ធ្វើលិបិក្រម|Google indexes billions of pages.|Google ធ្វើលិបិក្រមទំព័ររាប់ពាន់លាន។
initialize|initialized|initialized|ចាប់ផ្ដើម (កំណត់តម្លៃដំបូង)|Initialize the variable before using it.|កំណត់តម្លៃដំបូងឲ្យអថេរមុនពេលប្រើ។
instantiate|instantiated|instantiated|បង្កើតវត្ថុ (object) ពី class|We instantiate an object from the class.|យើងបង្កើតវត្ថុមួយពី class។
interface|interfaced|interfaced|ភ្ជាប់ / ទំនាក់ទំនង|The app interfaces with your bank.|កម្មវិធីនេះភ្ជាប់ជាមួយធនាគាររបស់អ្នក។
log|logged|logged|កត់ត្រា / ចូលប្រព័ន្ធ|The system logs every error.|ប្រព័ន្ធកត់ត្រារាល់កំហុស។
minify|minified|minified|បង្រួមកូដ|Minify your CSS to make the site faster.|បង្រួមកូដ CSS ដើម្បីឲ្យវេបសាយលឿនជាងមុន។
mirror|mirrored|mirrored|ឆ្លុះបញ្ចាំង / ចម្លង|The website is mirrored on several servers.|វេបសាយត្រូវបានចម្លងនៅលើម៉ាស៊ីនមេជាច្រើន។
multitask|multitasked|multitasked|ធ្វើការងារច្រើនក្នុងពេលតែមួយ|Mothers often have to multitask.|ម្ដាយៗច្រើនត្រូវធ្វើការងារច្រើនក្នុងពេលតែមួយ។
overclock|overclocked|overclocked|បង្កើនល្បឿនប្រព័ន្ធដំណើរការលើសកម្រិត|He overclocked his gaming PC.|គាត់បានបង្កើនល្បឿន CPU កុំព្យូទ័រលេងហ្គេមលើសកម្រិត។
parse|parsed|parsed|វិភាគ (កូដ ប្រយោគ)|The program parses the JSON file.|កម្មវិធីវិភាគឯកសារ JSON។
ping|pinged|pinged|ផ្ញើសារខ្លី / ពិនិត្យការតភ្ជាប់|Ping me when you're ready.|ផ្ញើសារមកខ្ញុំពេលអ្នករួចរាល់។
port|ported|ported|ផ្ទេរកម្មវិធីទៅប្រព័ន្ធផ្សេង|The game was ported to mobile.|ហ្គេមនេះត្រូវបានផ្ទេរទៅទូរស័ព្ទ។
provision|provisioned|provisioned|ផ្គត់ផ្គង់ / រៀបចំធនធាន|The server was provisioned in minutes.|ម៉ាស៊ីនមេត្រូវបានរៀបចំក្នុងរយៈពេលប៉ុន្មាននាទី។
recompile|recompiled|recompiled|ចងក្រងកូដឡើងវិញ|Recompile the code after the update.|ចងក្រងកូដឡើងវិញក្រោយការធ្វើបច្ចុប្បន្នភាព។
refactor|refactored|refactored|រៀបចំកូដឡើងវិញ|We refactored the code to make it cleaner.|យើងបានរៀបចំកូដឡើងវិញឲ្យស្អាតជាងមុន។
repost|reposted|reposted|ប្រកាសឡើងវិញ / ចែករំលែក|She reposted my photo.|នាងបានចែករំលែករូបថតរបស់ខ្ញុំ។
roll back|rolled back|rolled back|ត្រឡប់ទៅកំណែមុន / បន្ថយ|We rolled back the update after the bug.|យើងបានត្រឡប់ទៅកំណែមុនក្រោយមានកំហុស។
sandbox|sandboxed|sandboxed|ដាក់ក្នុងបរិយាកាសសាកល្បងដាច់ដោយឡែក|The browser sandboxes each website.|កម្មវិធីរុករកដាក់វេបសាយនីមួយៗក្នុងបរិយាកាសដាច់ដោយឡែក។
serialize|serialized|serialized|បម្លែងទិន្នន័យជាអត្ថបទ / ផ្សាយជាភាគ|The novel was serialized in a magazine.|ប្រលោមលោកនេះត្រូវបានផ្សាយជាភាគៗក្នុងទស្សនាវដ្ដី។
spoof|spoofed|spoofed|ក្លែងបន្លំ (អ៊ីមែល លេខ)|Scammers spoof bank phone numbers.|ពួកបោកប្រាស់ក្លែងលេខទូរស័ព្ទធនាគារ។
tokenize|tokenized|tokenized|បំបែកជាតួ (token)|The program tokenizes each sentence.|កម្មវិធីបំបែកប្រយោគនីមួយៗជាតួៗ។
transcode|transcoded|transcoded|បម្លែងទម្រង់វីដេអូ|The video is transcoded for mobile.|វីដេអូត្រូវបានបម្លែងទម្រង់សម្រាប់ទូរស័ព្ទ។
tweet|tweeted|tweeted|សរសេរសារលើ X (Twitter)|The president tweeted about the election.|ប្រធានាធិបតីបានសរសេរសារអំពីការបោះឆ្នោត។
unfriend|unfriended|unfriended|ដកចេញពីបញ្ជីមិត្ត|He unfriended me after our argument.|គាត់បានដកខ្ញុំចេញពីបញ្ជីមិត្តក្រោយការឈ្លោះ។
upvote|upvoted|upvoted|បោះឆ្នោតគាំទ្រ (អនឡាញ)|Many users upvoted her answer.|អ្នកប្រើជាច្រើនបានគាំទ្រចម្លើយរបស់នាង។
virtualize|virtualized|virtualized|និម្មិតកម្ម|The company virtualized its servers.|ក្រុមហ៊ុនបានធ្វើនិម្មិតកម្មម៉ាស៊ីនមេរបស់ខ្លួន។
whitelist|whitelisted|whitelisted|ដាក់ក្នុងបញ្ជីអនុញ្ញាត|Whitelist our email so it doesn't go to spam.|ដាក់អ៊ីមែលរបស់យើងក្នុងបញ្ជីអនុញ្ញាត កុំឲ្យចូលក្នុង spam។
wireframe|wireframed|wireframed|គូរប្លង់ (UI)|The designer wireframed the app first.|អ្នករចនាបានគូរប្លង់កម្មវិធីជាមុនសិន។
thresh|threshed|threshed|បោកស្រូវ|Farmers thresh the rice after harvest.|កសិករបោកស្រូវក្រោយច្រូត។
winnow|winnowed|winnowed|រែងអង្កាម / ចម្រាញ់|She winnowed the rice with a basket.|នាងបានរែងស្រូវដោយប្រើចង្អេរ។
husk|husked|husked|បកសំបក|They husked the corn together.|ពួកគេបានបកសំបកពោតជាមួយគ្នា។
graft|grafted|grafted|ផ្សាំ (មែកឈើ ស្បែក)|He grafted mango branches onto the tree.|គាត់បានផ្សាំមែកស្វាយទៅលើដើម។
compost|composted|composted|ធ្វើជីកំប៉ុស្ត៍|We compost our kitchen waste.|យើងធ្វើជីកំប៉ុស្ត៍ពីកាកសំណល់ផ្ទះបាយ។
mulch|mulched|mulched|គ្របដីដោយចំបើង|Mulch the soil to keep it moist.|គ្របដីដោយចំបើងដើម្បីរក្សាសំណើម។
shear|sheared|shorn|កាត់រោម (ចៀម)|Farmers shear sheep in spring.|កសិករកាត់រោមចៀមនៅរដូវផ្ការីក។
harrow|harrowed|harrowed|រាស់ដី|After ploughing, they harrow the field.|ក្រោយភ្ជួររួច ពួកគេរាស់ស្រែ។
terrace|terraced|terraced|ធ្វើថ្នាក់ដីជាជាន់|They terraced the hillside for rice.|ពួកគេបានធ្វើដីជាជាន់លើភ្នំដើម្បីដាំស្រូវ។
landscape|landscaped|landscaped|រៀបចំសួន / ទេសភាព|The hotel gardens are beautifully landscaped.|សួនសណ្ឋាគារត្រូវបានរៀបចំយ៉ាងស្រស់ស្អាត។
trawl|trawled|trawled|អូសអួន / ស្វែងរកច្រើន|Boats trawl the sea for fish.|ទូកអូសអួនរកត្រីក្នុងសមុទ្រ។
angle|angled|angled|ស្ទូចត្រី / ផ្អៀង|They spent the day angling on the river.|ពួកគេបានចំណាយពេលពេញមួយថ្ងៃស្ទូចត្រីនៅទន្លេ។
gut|gutted|gutted|វះពោះសត្វ / បំផ្លាញខាងក្នុង|Gut the fish before cooking.|វះពោះត្រីមុនពេលចម្អិន។
fillet|filleted|filleted|ចិតសាច់ឥតឆ្អឹង|The cook filleted the fish.|ចុងភៅបានចិតសាច់ត្រីយកឆ្អឹងចេញ។
lob|lobbed|lobbed|បោះខ្ពស់ (បាល់)|She lobbed the ball over his head.|នាងបានបោះបាល់ខ្ពស់ហួសក្បាលគាត់។
putt|putted|putted|វាយបាល់កូនហ្គោលឲ្យរំកិល|He putted the ball into the hole.|គាត់បានវាយបាល់ចូលរន្ធ។
sculpt|sculpted|sculpted|ឆ្លាក់រូប|He sculpted a statue of the Buddha.|គាត់បានឆ្លាក់រូបព្រះពុទ្ធមួយ។
etch|etched|etched|ឆ្លាក់ (ដោយអាស៊ីត) / ចារឹកក្នុងចិត្ត|The memory is etched in my mind.|អនុស្សាវរីយ៍នោះត្រូវបានចារឹកក្នុងចិត្តខ្ញុំ។
mould|moulded|moulded|សូនរាង / ធ្វើពុម្ព|She moulded the clay into a pot.|នាងបានសូនដីឥដ្ឋធ្វើជាឆ្នាំង។
crochet|crocheted|crocheted|ចាក់សរសៃ (ដោយទំពក់)|Grandma crocheted a blanket for me.|យាយបានចាក់ភួយមួយឲ្យខ្ញុំ។
quilt|quilted|quilted|ដេរភួយ (ផ្ទាំងៗ)|She quilts in her free time.|នាងដេរភួយពេលទំនេរ។
choreograph|choreographed|choreographed|រៀបចំក្បាច់រាំ|She choreographed the Apsara dance.|នាងបានរៀបចំក្បាច់របាំអប្សរា។
dub|dubbed|dubbed|បញ្ចូលសំឡេង / ដាក់ឈ្មោះហៅ|The Korean drama was dubbed into Khmer.|រឿងភាគកូរ៉េត្រូវបានបញ្ចូលសំឡេងជាភាសាខ្មែរ។
subtitle|subtitled|subtitled|ដាក់អក្សររត់|The film is subtitled in English.|ខ្សែភាពយន្តមានអក្សររត់ជាភាសាអង់គ្លេស។
retouch|retouched|retouched|កែរូបថត|The photo was retouched to remove spots.|រូបថតត្រូវបានកែដើម្បីលុបស្នាមអុជៗ។
draft|drafted|drafted|ព្រាង / កេណ្ឌ|I drafted a letter to the manager.|ខ្ញុំបានព្រាងលិខិតទៅអ្នកគ្រប់គ្រង។
plaster|plastered|plastered|បូកបាយអ / បិទពេញ|They plastered the walls.|ពួកគេបានបូកបាយអជញ្ជាំង។
cement|cemented|cemented|ចាក់ស៊ីម៉ងត៍ / ពង្រឹង|The win cemented his reputation.|ជ័យជម្នះបានពង្រឹងកេរ្តិ៍ឈ្មោះរបស់គាត់។
weld|welded|welded|ផ្សារដែក|He welds metal for a living.|គាត់ផ្សារដែកដើម្បីចិញ្ចឹមជីវិត។
solder|soldered|soldered|ផ្សារសំណប៉ាហាំង|He soldered the wires together.|គាត់បានផ្សារខ្សែភ្លើងភ្ជាប់គ្នា។
varnish|varnished|varnished|លាបវ៉ានី|He varnished the wooden table.|គាត់បានលាបវ៉ានីតុឈើ។
plumb|plumbed|plumbed|តបំពង់ទឹក / ស្វែងយល់ជ្រៅ|They plumbed in the new washing machine.|ពួកគេបានតបំពង់ម៉ាស៊ីនបោកខោអាវថ្មី។
scaffold|scaffolded|scaffolded|ដាក់រន្ទា|The building was scaffolded for repairs.|អគារត្រូវបានដាក់រន្ទាដើម្បីជួសជុល។
brace|braced|braced|ត្រៀមខ្លួន (ទប់ទល់) / ទ្រ|Brace yourself for bad news.|ត្រៀមចិត្តទទួលដំណឹងអាក្រក់។
airlift|airlifted|airlifted|ដឹកតាមផ្លូវអាកាស|Injured people were airlifted to hospital.|អ្នករបួសត្រូវបានដឹកតាមឧទ្ធម្ភាគចក្រទៅមន្ទីរពេទ្យ។
ambush|ambushed|ambushed|វាយឆ្មក់ពីការលាក់ខ្លួន|The soldiers were ambushed in the forest.|ទាហានត្រូវបានវាយឆ្មក់ក្នុងព្រៃ។
shell|shelled|shelled|បាញ់គ្រាប់ផ្លោង / បកសំបក|Shell the peanuts before roasting.|បកសំបកសណ្ដែកដីមុនពេលលីង។
canvass|canvassed|canvassed|ឃោសនារកសំឡេង / ស្ទង់មតិ|Volunteers canvassed the neighbourhood.|អ្នកស្ម័គ្រចិត្តបានដើរឃោសនាក្នុងសង្កាត់។
lobby|lobbied|lobbied|បញ្ចុះបញ្ចូលអ្នកនយោបាយ|Farmers lobbied for lower taxes.|កសិករបានតស៊ូមតិសុំពន្ធទាបជាងនេះ។
baptize|baptized|baptized|ធ្វើពិធីជ្រមុជទឹក|The baby was baptized in a church.|ទារកត្រូវបានធ្វើពិធីជ្រមុជទឹកនៅព្រះវិហារ។
ordain|ordained|ordained|បំបួស / តែងតាំង (សាសនា)|He was ordained as a monk at twenty.|គាត់បានបួសជាព្រះសង្ឃនៅអាយុម្ភៃឆ្នាំ។
accessorize|accessorized|accessorized|តុបតែងដោយគ្រឿងអលង្ការ|She accessorized her dress with a silk scarf.|នាងបានតុបតែងរ៉ូបដោយក្រមាសូត្រ។
manicure|manicured|manicured|ធ្វើក្រចកដៃ|She manicures her nails every week.|នាងធ្វើក្រចកដៃរៀងរាល់សប្ដាហ៍។
pluck|plucked|plucked|បេះ / ដក (រោម)|She plucked a flower from the garden.|នាងបានបេះផ្កាមួយពីសួនច្បារ។
tailor|tailored|tailored|កាត់ដេរ / កែតាមតម្រូវការ|The course is tailored to beginners.|វគ្គសិក្សានេះត្រូវបានរៀបចំសម្រាប់អ្នកចាប់ផ្ដើម។
headline|headlined|headlined|ដាក់ចំណងជើង / ជាតារាឯក|The singer headlined the festival.|អ្នកចម្រៀងនោះជាតារាឯកនៃមហោស្រព។
televise|televised|televised|ផ្សាយតាមទូរទស្សន៍|The match was televised live.|ការប្រកួតត្រូវបានផ្សាយផ្ទាល់តាមទូរទស្សន៍។
air|aired|aired|ផ្សាយ / ហាលខ្យល់ / បញ្ចេញមតិ|The show airs every Sunday.|កម្មវិធីនេះផ្សាយរៀងរាល់ថ្ងៃអាទិត្យ។
podcast|podcasted|podcasted|ធ្វើផតខាស្ត៍|They podcast about tech every week.|ពួកគេធ្វើផតខាស្ត៍អំពីបច្ចេកវិទ្យារៀងរាល់សប្ដាហ៍។
trend|trended|trended|ល្បីពេញនិយម (អនឡាញ)|The video trended on TikTok.|វីដេអូនោះបានល្បីនៅលើ TikTok។
blog|blogged|blogged|សរសេរប្លុក|She blogs about Khmer cooking.|នាងសរសេរប្លុកអំពីការធ្វើម្ហូបខ្មែរ។
caption|captioned|captioned|សរសេរចំណងជើងរូប|She captioned the photo "Best day ever".|នាងបានសរសេរចំណងជើងរូបថតថា "ថ្ងៃល្អបំផុត"។
hashtag|hashtagged|hashtagged|ដាក់ហាសថែក|He hashtagged his post #Cambodia.|គាត់បានដាក់ហាសថែក #Cambodia លើប្រកាសរបស់គាត់។
major|majored|majored|រៀនឯកទេស (សាកលវិទ្យាល័យ)|She majored in economics.|នាងបានរៀនឯកទេសសេដ្ឋកិច្ច។
lecture|lectured|lectured|បង្រៀន (សាកលវិទ្យាល័យ) / ប្រៀនប្រដៅ|He lectures in history at RUPP.|គាត់បង្រៀនប្រវត្តិសាស្ត្រនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។`,
5:`corroborate|corroborated|corroborated|បញ្ជាក់ភស្តុតាង|Witnesses corroborated his story.|សាក្សីបានបញ្ជាក់ពីរឿងរបស់គាត់។
exacerbate|exacerbated|exacerbated|ធ្វើឲ្យកាន់តែធ្ងន់ធ្ងរ|Stress exacerbates the illness.|ភាពតានតឹងធ្វើឲ្យជំងឺកាន់តែធ្ងន់ធ្ងរ។
relinquish|relinquished|relinquished|លះបង់ / ប្រគល់|He relinquished control of the company.|គាត់បានប្រគល់អំណាចគ្រប់គ្រងក្រុមហ៊ុន។
articulate|articulated|articulated|បញ្ចេញមតិឲ្យច្បាស់|She articulated her ideas well.|នាងបានបញ្ចេញគំនិតរបស់នាងបានយ៉ាងច្បាស់។
circumvent|circumvented|circumvented|គេចវេះ|They circumvented the rules.|ពួកគេបានគេចវេះច្បាប់។
consolidate|consolidated|consolidated|ពង្រឹង / បង្រួបបង្រួម|Consolidate your knowledge.|ពង្រឹងចំណេះដឹងរបស់អ្នក។
delineate|delineated|delineated|គូសបញ្ជាក់|The map delineates the border.|ផែនទីគូសបញ្ជាក់ព្រំដែន។
elucidate|elucidated|elucidated|បំភ្លឺ / ពន្យល់|Please elucidate this point.|សូមបំភ្លឺចំណុចនេះ។
exemplify|exemplified|exemplified|ជាគំរូ|Her work exemplifies quality.|ស្នាដៃរបស់នាងជាគំរូនៃគុណភាព។
infer|inferred|inferred|សន្និដ្ឋាន|What can we infer from this?|តើយើងអាចសន្និដ្ឋានអ្វីពីរឿងនេះ?
reconcile|reconciled|reconciled|ផ្សះផ្សា|They reconciled after the fight.|ពួកគេបានផ្សះផ្សាគ្នាវិញក្រោយពីឈ្លោះគ្នា។
substantiate|substantiated|substantiated|បញ្ជាក់ដោយភស្តុតាង|Can you substantiate the claim?|តើអ្នកអាចបញ្ជាក់ការអះអាងនេះដោយភស្តុតាងបានទេ?
supersede|superseded|superseded|ជំនួស|The new law supersedes the old one.|ច្បាប់ថ្មីជំនួសច្បាប់ចាស់។
synthesize|synthesized|synthesized|សំយោគ|Synthesize the findings.|សំយោគលទ្ធផលនៃការស្រាវជ្រាវ។
oscillate|oscillated|oscillated|យោលទៅមក|The pendulum oscillates.|ប៉ោលយោលទៅមក។
proliferate|proliferated|proliferated|រីករាលដាលយ៉ាងលឿន|Mobile apps proliferated.|App ទូរស័ព្ទបានរីកសាយភាយយ៉ាងលឿន។
abound|abounded|abounded|មានច្រើនក្រៃលែង|Fish abound in the Tonle Sap.|ត្រីមានច្រើនក្រៃលែងនៅទន្លេសាប។
absolve|absolved|absolved|ដោះលែងពីទោស|The court absolved him of blame.|តុលាការបានដោះលែងគាត់ពីការទទួលខុសត្រូវ។
acclaim|acclaimed|acclaimed|សរសើរខ្លាំង|Critics acclaimed the film.|អ្នករិះគន់បានសរសើរភាពយន្តនេះខ្លាំងណាស់។
admonish|admonished|admonished|ព្រមាន / ស្ដីប្រដៅ|The teacher admonished the students.|គ្រូបានស្ដីប្រដៅសិស្ស។
adorn|adorned|adorned|តុបតែង|Flowers adorned the temple.|ផ្កាបានតុបតែងប្រាសាទ។
affiliate|affiliated|affiliated|ភ្ជាប់ទំនាក់ទំនង / ជាសមាជិក|The school is affiliated with a university.|សាលានេះមានទំនាក់ទំនងជាមួយសាកលវិទ្យាល័យមួយ។
allay|allayed|allayed|បន្ធូរ (ការភ័យខ្លាច)|The doctor allayed our fears.|វេជ្ជបណ្ឌិតបានបន្ធូរការភ័យខ្លាចរបស់យើង។
allude|alluded|alluded|និយាយសំដៅដោយប្រយោល|She alluded to the problem.|នាងបាននិយាយសំដៅដោយប្រយោលទៅលើបញ្ហា។
annex|annexed|annexed|បញ្ចូលទឹកដី|The country annexed the island.|ប្រទេសនោះបានបញ្ចូលកោះនោះជាទឹកដីរបស់ខ្លួន។
antagonize|antagonized|antagonized|ធ្វើឲ្យប្រឆាំង / ធ្វើឲ្យខឹង|Don't antagonize your neighbours.|កុំធ្វើឲ្យអ្នកជិតខាងខឹង។
appease|appeased|appeased|សម្រួលចិត្ត / បំពេញចិត្ត|They tried to appease the angry crowd.|ពួកគេបានព្យាយាមសម្រួលចិត្តហ្វូងមនុស្សដែលខឹង។
ascribe|ascribed|ascribed|សន្មតថាដោយសារ|He ascribed his success to luck.|គាត់សន្មតថាជោគជ័យរបស់គាត់គឺដោយសារសំណាង។
atone|atoned|atoned|សងបាប / កែកំហុស|He tried to atone for his mistakes.|គាត់បានព្យាយាមកែកំហុសរបស់គាត់។
avenge|avenged|avenged|សងសឹក|He vowed to avenge his father.|គាត់បានស្បថថានឹងសងសឹកជំនួសឪពុក។
banish|banished|banished|និរទេស / កម្ចាត់|The king banished the traitor.|ព្រះមហាក្សត្របាននិរទេសជនក្បត់។
beckon|beckoned|beckoned|ហៅដោយកាយវិការ|She beckoned me to come closer.|នាងបានហៅខ្ញុំដោយកាយវិការឲ្យចូលមកជិត។
bewilder|bewildered|bewildered|ធ្វើឲ្យវង្វេង / ច្រឡំ|The new rules bewildered everyone.|ច្បាប់ថ្មីបានធ្វើឲ្យគ្រប់គ្នាច្រឡំ។
blunder|blundered|blundered|ធ្វើខុសធ្ងន់|The minister blundered badly.|រដ្ឋមន្ត្រីបានធ្វើខុសយ៉ាងធ្ងន់ធ្ងរ។
broach|broached|broached|លើកឡើង (ប្រធានបទពិបាក)|She broached the subject carefully.|នាងបានលើកប្រធានបទនោះឡើងដោយប្រុងប្រយ័ត្ន។
cajole|cajoled|cajoled|លួងលោមឲ្យធ្វើ|She cajoled him into helping.|នាងបានលួងលោមគាត់ឲ្យជួយ។
chastise|chastised|chastised|ស្ដីបន្ទោសយ៉ាងខ្លាំង|The coach chastised the lazy players.|គ្រូបង្វឹកបានស្ដីបន្ទោសកីឡាករខ្ជិលៗយ៉ាងខ្លាំង។
coalesce|coalesced|coalesced|រួមបញ្ចូលគ្នា|Small groups coalesced into a movement.|ក្រុមតូចៗបានរួមបញ្ចូលគ្នាជាចលនាមួយ។
codify|codified|codified|ចងក្រងជាច្បាប់|They codified the rules.|ពួកគេបានចងក្រងច្បាប់ជាលាយលក្ខណ៍អក្សរ។
collude|colluded|colluded|ឃុបឃិតគ្នា|The companies colluded to raise prices.|ក្រុមហ៊ុនទាំងនោះបានឃុបឃិតគ្នាដំឡើងតម្លៃ។
commiserate|commiserated|commiserated|សម្ដែងការសោកស្ដាយ|We commiserated with the losing team.|យើងបានសម្ដែងការសោកស្ដាយចំពោះក្រុមដែលចាញ់។
concoct|concocted|concocted|ប្រឌិត / លាយបង្កើត|He concocted an excuse.|គាត់បានប្រឌិតលេសមួយ។
condescend|condescended|condescended|ប្រព្រឹត្តដោយមើលងាយ|Don't condescend to your students.|កុំប្រព្រឹត្តមើលងាយសិស្សរបស់អ្នក។
conflate|conflated|conflated|ច្របល់បញ្ចូលគ្នា|Don't conflate opinion with fact.|កុំច្របល់មតិជាមួយការពិត។
congregate|congregated|congregated|ប្រមូលផ្ដុំគ្នា|People congregated in the square.|មនុស្សបានប្រមូលផ្ដុំគ្នានៅទីលាន។
consecrate|consecrated|consecrated|ឧទ្ទិស / ប្រារព្ធពិធីសូត្រឆ្លង|The monks consecrated the new temple.|ព្រះសង្ឃបានប្រារព្ធពិធីឆ្លងវិហារថ្មី។
constrict|constricted|constricted|រួមតូច / ច្របាច់|The snake constricted its prey.|ពស់បានរឹតច្របាច់ចំណីរបស់វា។
construe|construed|construed|បកស្រាយ|His silence was construed as agreement.|ភាពស្ងៀមស្ងាត់របស់គាត់ត្រូវបានបកស្រាយថាជាការយល់ព្រម។
contrive|contrived|contrived|រៀបចំគ្រោង / បង្កើត|She contrived a way to escape.|នាងបានរៀបចំវិធីមួយដើម្បីរត់គេចខ្លួន។
converge|converged|converged|ប្រសព្វគ្នា / មកជួបគ្នា|The two rivers converge here.|ទន្លេទាំងពីរប្រសព្វគ្នានៅទីនេះ។
corrode|corroded|corroded|ស៊ីច្រេះ / ស្រឹក|Salt water corrodes metal.|ទឹកប្រៃធ្វើឲ្យដែកស៊ីច្រេះ។
debase|debased|debased|បន្ទាបតម្លៃ|Violence debases society.|អំពើហិង្សាបន្ទាបតម្លៃសង្គម។
decimate|decimated|decimated|បំផ្លាញយ៉ាងច្រើន|Disease decimated the population.|ជំងឺបានបំផ្លាញប្រជាជនយ៉ាងច្រើន។
decipher|deciphered|deciphered|អានឲ្យយល់ (អក្សរពិបាក)|I couldn't decipher his handwriting.|ខ្ញុំមិនអាចអានអក្សរដៃរបស់គាត់បានទេ។
decry|decried|decried|រិះគន់ជាសាធារណៈ|Many decried the new law.|មនុស្សជាច្រើនបានរិះគន់ច្បាប់ថ្មីជាសាធារណៈ។
deface|defaced|defaced|ធ្វើឲ្យខូចរូបរាង|Someone defaced the statue.|មាននរណាម្នាក់បានធ្វើឲ្យរូបសំណាកខូច។
defame|defamed|defamed|បរិហារកេរ្តិ៍|He sued them for defaming him.|គាត់បានប្ដឹងពួកគេពីបទបរិហារកេរ្តិ៍។
deflect|deflected|deflected|បង្វែរ|He deflected the question.|គាត់បានបង្វែរសំណួរ។
defraud|defrauded|defrauded|ឆបោក|He defrauded the bank.|គាត់បានឆបោកធនាគារ។
defuse|defused|defused|រំសាយ (គ្រាប់បែក / ភាពតានតឹង)|She defused the tense situation.|នាងបានរំសាយស្ថានភាពតានតឹង។
delude|deluded|deluded|បញ្ឆោត (ខ្លួនឯង)|Don't delude yourself.|កុំបញ្ឆោតខ្លួនឯង។
demean|demeaned|demeaned|បន្ទាបបន្ថោក|Don't demean yourself.|កុំបន្ទាបបន្ថោកខ្លួនឯង។
demystify|demystified|demystified|ពន្យល់ឲ្យងាយយល់|The book demystifies science.|សៀវភៅនេះពន្យល់វិទ្យាសាស្ត្រឲ្យងាយយល់។
denigrate|denigrated|denigrated|មើលងាយ / បន្ទាបតម្លៃ|Don't denigrate other cultures.|កុំមើលងាយវប្បធម៌ដទៃ។
deplore|deplored|deplored|ថ្កោលទោស / សោកស្ដាយខ្លាំង|We deplore all violence.|យើងថ្កោលទោសអំពើហិង្សាទាំងអស់។
depose|deposed|deposed|ទម្លាក់ពីអំណាច|The army deposed the president.|កងទ័ពបានទម្លាក់ប្រធានាធិបតីពីអំណាច។
deride|derided|derided|ចំអកមើលងាយ|They derided his ideas.|ពួកគេបានចំអកមើលងាយគំនិតរបស់គាត់។
desecrate|desecrated|desecrated|ប្រមាថទីសក្ការៈ|Vandals desecrated the temple.|ពួកបំផ្លិចបំផ្លាញបានប្រមាថប្រាសាទ។
despair|despaired|despaired|អស់សង្ឃឹម|Don't despair, things will improve.|កុំអស់សង្ឃឹម អ្វីៗនឹងប្រសើរឡើង។
detest|detested|detested|ស្អប់ខ្លាំង|I detest lies.|ខ្ញុំស្អប់ការកុហកខ្លាំងណាស់។
devolve|devolved|devolved|ផ្ទេរអំណាច|Power was devolved to the provinces.|អំណាចត្រូវបានផ្ទេរទៅខេត្តនានា។
disavow|disavowed|disavowed|បដិសេធមិនទទួលស្គាល់|He disavowed the statement.|គាត់បានបដិសេធមិនទទួលស្គាល់សេចក្ដីថ្លែងការណ៍នោះ។
disdain|disdained|disdained|មើលងាយ|She disdains fast food.|នាងមើលងាយអាហាររហ័ស។
disentangle|disentangled|disentangled|ស្រាយ / ដោះ|She disentangled the wires.|នាងបានស្រាយខ្សែភ្លើងដែលជាប់គ្នា។
disparage|disparaged|disparaged|បន្ទាបតម្លៃ|Don't disparage his efforts.|កុំបន្ទាបតម្លៃការខិតខំរបស់គាត់។
dispense|dispensed|dispensed|ចែកចាយ / ផ្ដល់|The machine dispenses drinks.|ម៉ាស៊ីននេះចេញភេសជ្ជៈ។
disseminate|disseminated|disseminated|ផ្សព្វផ្សាយ|They disseminated health information.|ពួកគេបានផ្សព្វផ្សាយព័ត៌មានសុខភាព។
dissent|dissented|dissented|មិនយល់ស្រប|Two judges dissented.|ចៅក្រមពីររូបមិនយល់ស្រប។
divest|divested|divested|ដកហូត / លក់ចេញ|The company divested its shares.|ក្រុមហ៊ុនបានលក់ភាគហ៊ុនរបស់ខ្លួនចេញ។
dwell|dwelt|dwelt|រស់នៅ / គិតតែពី|Don't dwell on the past.|កុំគិតតែពីអតីតកាល។
elude|eluded|eluded|គេចផុត|The thief eluded the police.|ចោរបានគេចផុតពីប៉ូលិស។
emanate|emanated|emanated|បញ្ចេញ / ចេញមកពី|A strange smell emanated from the box.|ក្លិនចម្លែកមួយបានចេញមកពីប្រអប់។
emancipate|emancipated|emancipated|រំដោះ|Education can emancipate people.|ការអប់រំអាចរំដោះមនុស្ស។
embellish|embellished|embellished|តុបតែង / បំផ្លើស|He embellished the story.|គាត់បានបំផ្លើសរឿង។
embroil|embroiled|embroiled|ទាក់ទាញចូលជម្លោះ|He was embroiled in a scandal.|គាត់បានជាប់ពាក់ព័ន្ធក្នុងរឿងអាស្រូវមួយ។
encroach|encroached|encroached|រំលោភ (ទឹកដី / សិទ្ធិ)|Farms encroached on the forest.|កសិដ្ឋានបានរំលោភចូលព្រៃឈើ។
endear|endeared|endeared|ធ្វើឲ្យគេស្រឡាញ់|Her kindness endeared her to everyone.|ចិត្តល្អរបស់នាងធ្វើឲ្យគ្រប់គ្នាស្រឡាញ់នាង។
engender|engendered|engendered|បង្កឲ្យមាន|The policy engendered anger.|គោលនយោបាយនេះបានបង្កឲ្យមានកំហឹង។
engulf|engulfed|engulfed|គ្របដណ្ដប់ទាំងស្រុង|Flames engulfed the building.|អណ្ដាតភ្លើងបានឆាបឆេះអគារទាំងមូល។
entice|enticed|enticed|ទាក់ទាញ / ល្បួង|The smell enticed us inside.|ក្លិនបានទាក់ទាញយើងឲ្យចូលខាងក្នុង។
entrench|entrenched|entrenched|ចាក់ឫសជ្រៅ|Old habits are deeply entrenched.|ទម្លាប់ចាស់ៗបានចាក់ឫសយ៉ាងជ្រៅ។
enunciate|enunciated|enunciated|បញ្ចេញសំឡេងឲ្យច្បាស់|Enunciate each word clearly.|បញ្ចេញសំឡេងពាក្យនីមួយៗឲ្យច្បាស់។
epitomize|epitomized|epitomized|ជាគំរូដ៏ល្អ|Angkor Wat epitomizes Khmer art.|អង្គរវត្តជាគំរូដ៏ល្អនៃសិល្បៈខ្មែរ។
eschew|eschewed|eschewed|ជៀសវាង|He eschews sugar.|គាត់ជៀសវាងស្ករ។
espouse|espoused|espoused|គាំទ្រ (គំនិត)|She espouses equal rights.|នាងគាំទ្រសិទ្ធិស្មើភាព។
exalt|exalted|exalted|លើកតម្កើង|The poem exalts nature.|កំណាព្យនេះលើកតម្កើងធម្មជាតិ។
exhort|exhorted|exhorted|ដាស់តឿន / លើកទឹកចិត្ត|The coach exhorted the team to win.|គ្រូបង្វឹកបានដាស់តឿនក្រុមឲ្យឈ្នះ។
expound|expounded|expounded|ពន្យល់លម្អិត|He expounded his theory.|គាត់បានពន្យល់ទ្រឹស្ដីរបស់គាត់លម្អិត។
extol|extolled|extolled|សរសើរខ្លាំង|She extolled the benefits of reading.|នាងបានសរសើរខ្លាំងពីអត្ថប្រយោជន៍នៃការអាន។
extricate|extricated|extricated|ដោះខ្លួនចេញ|He extricated himself from the mess.|គាត់បានដោះខ្លួនចេញពីភាពរញ៉េរញ៉ៃ។
falter|faltered|faltered|រអាក់រអួល / ស្ទាក់ស្ទើរ|Her voice faltered.|សំឡេងរបស់នាងរអាក់រអួល។
fathom|fathomed|fathomed|យល់ច្បាស់|I can't fathom why he left.|ខ្ញុំមិនអាចយល់ថាហេតុអ្វីគាត់ចាកចេញ។
feign|feigned|feigned|ធ្វើពុត|He feigned illness to skip school.|គាត់បានធ្វើពុតឈឺដើម្បីមិនទៅសាលា។
ferment|fermented|fermented|បណ្ដុះមេ / ផ្អាប់|They ferment fish to make prahok.|ពួកគេផ្អាប់ត្រីដើម្បីធ្វើប្រហុក។
flounder|floundered|floundered|រអាក់រអួល / ពិបាក|The business floundered.|អាជីវកម្មបានជួបការលំបាក។
forestall|forestalled|forestalled|ការពារមុន|They forestalled the attack.|ពួកគេបានការពារការវាយប្រហារជាមុន។
forge|forged|forged|ក្លែង / កសាង|He forged a signature.|គាត់បានក្លែងហត្ថលេខា។
forsake|forsook|forsaken|បោះបង់ចោល|Never forsake your friends.|កុំបោះបង់មិត្តភក្តិរបស់អ្នក។
galvanize|galvanized|galvanized|ជំរុញឲ្យសកម្ម|The speech galvanized the crowd.|សុន្ទរកថាបានជំរុញហ្វូងមនុស្សឲ្យសកម្ម។
glean|gleaned|gleaned|ប្រមូល (ព័ត៌មាន)|We gleaned facts from the report.|យើងបានប្រមូលការពិតពីរបាយការណ៍។
gloat|gloated|gloated|អរសប្បាយលើការបរាជ័យគេ|Don't gloat over their loss.|កុំអរសប្បាយលើការចាញ់របស់ពួកគេ។
grapple|grappled|grappled|តស៊ូដោះស្រាយ|We are grappling with a hard problem.|យើងកំពុងតស៊ូដោះស្រាយបញ្ហាពិបាកមួយ។
herald|heralded|heralded|ប្រកាសពីការមកដល់|Rain heralds the start of the season.|ភ្លៀងប្រកាសពីការចាប់ផ្ដើមរដូវ។
hoard|hoarded|hoarded|ប្រមូលទុក|People hoarded rice during the crisis.|មនុស្សបានប្រមូលអង្ករទុកក្នុងពេលវិបត្តិ។
hone|honed|honed|សំលៀង / ពង្រឹង (ជំនាញ)|She honed her writing skills.|នាងបានពង្រឹងជំនាញសរសេររបស់នាង។
idolize|idolized|idolized|គោរពដូចព្រះ|Teens idolize pop stars.|ក្មេងជំទង់គោរពតារាចម្រៀងដូចព្រះ។
impel|impelled|impelled|ជំរុញ|Hunger impelled them to steal.|ការអត់ឃ្លានបានជំរុញឲ្យពួកគេលួច។
imperil|imperiled|imperiled|ធ្វើឲ្យគ្រោះថ្នាក់|Pollution imperils our health.|ការបំពុលធ្វើឲ្យសុខភាពយើងប្រឈមគ្រោះថ្នាក់។
implicate|implicated|implicated|ពាក់ព័ន្ធ / ចោទថាពាក់ព័ន្ធ|He was implicated in the crime.|គាត់ត្រូវបានចោទថាពាក់ព័ន្ធនឹងបទឧក្រិដ្ឋ។
implore|implored|implored|អង្វរ|She implored him to stay.|នាងបានអង្វរគាត់ឲ្យនៅ។
incite|incited|incited|ញុះញង់|He incited violence.|គាត់បានញុះញង់ឲ្យមានអំពើហិង្សា។
incriminate|incriminated|incriminated|ធ្វើឲ្យមានទោស|The evidence incriminated him.|ភស្តុតាងបានធ្វើឲ្យគាត់មានទោស។
inculcate|inculcated|inculcated|បណ្ដុះ (តាមរយៈការបង្រៀន)|Schools inculcate discipline.|សាលាបណ្ដុះវិន័យ។
indulge|indulged|indulged|បណ្ដោយចិត្ត|I indulged in some chocolate.|ខ្ញុំបានបណ្ដោយចិត្តញ៉ាំសូកូឡាបន្តិច។
infiltrate|infiltrated|infiltrated|ជ្រៀតចូល|Spies infiltrated the group.|ចារកម្មបានជ្រៀតចូលក្រុម។
ingest|ingested|ingested|លេប / បរិភោគ|Do not ingest this liquid.|កុំលេបវត្ថុរាវនេះ។
insinuate|insinuated|insinuated|និយាយបញ្ឆិតបញ្ឆៀង|Are you insinuating I lied?|តើអ្នកចង់និយាយបញ្ឆិតថាខ្ញុំកុហកមែនទេ?
insulate|insulated|insulated|ការពារកំដៅ / ញែក|Insulate the roof to keep it cool.|ការពារកំដៅដំបូលដើម្បីឲ្យត្រជាក់។
interject|interjected|interjected|និយាយបញ្ចូល|"But why?" she interjected.|នាងនិយាយបញ្ចូលថា «ប៉ុន្តែហេតុអ្វី?»។
inundate|inundated|inundated|ជន់លិច / ហូរចូលច្រើន|We were inundated with emails.|យើងទទួលបានអ៊ីមែលច្រើនលើសលប់។
invigorate|invigorated|invigorated|ធ្វើឲ្យស្រស់ស្រាយ|The cold shower invigorated me.|ការងូតទឹកត្រជាក់ធ្វើឲ្យខ្ញុំស្រស់ស្រាយ។
juxtapose|juxtaposed|juxtaposed|ដាក់ក្បែរគ្នាដើម្បីប្រៀបធៀប|The photo juxtaposes old and new.|រូបថតនេះដាក់ចាស់ និងថ្មីក្បែរគ្នា។
languish|languished|languished|ស្ថិតក្នុងស្ថានភាពលំបាកយូរ|The project languished for years.|គម្រោងនេះបានទ្រុឌទ្រោមអស់ជាច្រើនឆ្នាំ។
loathe|loathed|loathed|ស្អប់ខ្លាំង|I loathe waking up early.|ខ្ញុំស្អប់ការក្រោកពីព្រលឹមខ្លាំងណាស់។
malign|maligned|maligned|និយាយបង្ខូច|He was unfairly maligned.|គាត់ត្រូវបានគេនិយាយបង្ខូចដោយអយុត្តិធម៌។
meander|meandered|meandered|បត់បែន / ដើរយឺតៗ|The river meanders through the valley.|ទន្លេហូរបត់បែនកាត់ជ្រលងភ្នំ។
mollify|mollified|mollified|ធ្វើឲ្យស្ងប់ខឹង|An apology mollified her.|ការសុំទោសបានធ្វើឲ្យនាងស្ងប់ខឹង។
muster|mustered|mustered|ប្រមូល (កម្លាំង)|She mustered the courage to speak.|នាងបានប្រមូលភាពក្លាហានដើម្បីនិយាយ។
mutate|mutated|mutated|បំប្លែងហ្សែន|The virus mutated quickly.|មេរោគបានបំប្លែងខ្លួនយ៉ាងលឿន។
obliterate|obliterated|obliterated|លុបបំបាត់ទាំងស្រុង|The bomb obliterated the village.|គ្រាប់បែកបានបំផ្លាញភូមិទាំងស្រុង។
officiate|officiated|officiated|ធ្វើជាអាជ្ញាកណ្ដាល / ធ្វើពិធី|A monk officiated at the ceremony.|ព្រះសង្ឃមួយអង្គបានធ្វើពិធី។
ostracize|ostracized|ostracized|ធ្វើឲ្យឯកោ / មិនរាប់អាន|He was ostracized by his classmates.|គាត់ត្រូវបានមិត្តរួមថ្នាក់មិនរាប់អាន។
outstrip|outstripped|outstripped|លើស / វ៉ាជែង|Demand outstripped supply.|តម្រូវការលើសការផ្គត់ផ្គង់។
pander|pandered|pandered|បំពេញចិត្តគេ (មិនល្អ)|Politicians pander to voters.|អ្នកនយោបាយធ្វើតាមចិត្តអ្នកបោះឆ្នោត។
paralyze|paralyzed|paralyzed|ធ្វើឲ្យខ្វិន / គាំង|The strike paralyzed the city.|កូដកម្មបានធ្វើឲ្យទីក្រុងគាំង។
peruse|perused|perused|អានពិនិត្យ|She perused the menu.|នាងបានអានពិនិត្យម៉ឺនុយ។
pervade|pervaded|pervaded|សាយភាយពេញ|A feeling of joy pervaded the room.|អារម្មណ៍រីករាយបានសាយភាយពេញបន្ទប់។
placate|placated|placated|សម្រួលចិត្ត|He placated his angry boss.|គាត់បានសម្រួលចិត្តថៅកែដែលខឹង។
plunder|plundered|plundered|ប្លន់ / លួចយក|Thieves plundered the temple.|ចោរបានប្លន់ប្រាសាទ។
posit|posited|posited|លើកជាសម្មតិកម្ម|Scientists posit that life exists elsewhere.|អ្នកវិទ្យាសាស្ត្រលើកសម្មតិកម្មថាមានជីវិតនៅកន្លែងផ្សេង។
preempt|preempted|preempted|ធ្វើមុនដើម្បីទប់ស្កាត់|They preempted the attack.|ពួកគេបានធ្វើសកម្មភាពមុនដើម្បីទប់ស្កាត់ការវាយប្រហារ។
profess|professed|professed|អះអាង / ប្រកាស|He professed his love.|គាត់បានប្រកាសសេចក្ដីស្រឡាញ់របស់គាត់។
propagate|propagated|propagated|ផ្សព្វផ្សាយ / បន្តពូជ|They propagate plants from cuttings.|ពួកគេបណ្ដុះរុក្ខជាតិពីមែក។
prune|pruned|pruned|កាត់មែក|Prune the roses in spring.|កាត់មែកផ្កាកុលាបនៅរដូវផ្ការីក។
purport|purported|purported|អះអាងថា (ប្រហែលមិនពិត)|The letter purports to be from the bank.|សំបុត្រនោះអះអាងថាមកពីធនាគារ។
quash|quashed|quashed|លុបចោល / បង្ក្រាប|The court quashed the verdict.|តុលាការបានលុបចោលសាលក្រម។
quell|quelled|quelled|បង្ក្រាប / បន្ធូរ|Police quelled the riot.|ប៉ូលិសបានបង្ក្រាបកុបកម្ម។
allure|allured|allured|ទាក់ទាញ / លួងលោម|Bright lights allure tourists at night.|ពន្លឺភ្លើងភ្លឺៗទាក់ទាញភ្ញៀវទេសចរនៅពេលយប់។
assassinate|assassinated|assassinated|ធ្វើឃាត (អ្នកនយោបាយ)|The king was assassinated in 1610.|ស្ដេចត្រូវបានធ្វើឃាតនៅឆ្នាំ ១៦១០។
awaken|awakened|awakened|ភ្ញាក់ / ដាស់ (អារម្មណ៍)|The trip awakened her love of nature.|ដំណើរនោះបានដាស់ស្នេហាធម្មជាតិក្នុងចិត្តនាង។
bundle|bundled|bundled|ចងជាបាច់ / រុំ|She bundled the old clothes together.|នាងបានចងសម្លៀកបំពាក់ចាស់ជាបាច់។
caress|caressed|caressed|អង្អែលថ្នមៗ|The mother caressed her baby's face.|ម្ដាយបានអង្អែលមុខកូនថ្នមៗ។
cease|ceased|ceased|ឈប់ / បញ្ចប់|The rain finally ceased.|ទីបំផុតភ្លៀងក៏ឈប់។
chuckle|chuckled|chuckled|សើចក្នុងក|He chuckled at the joke.|គាត់សើចក្នុងកនឹងរឿងកំប្លែង។
coax|coaxed|coaxed|លួងលោមឲ្យធ្វើ|She coaxed the cat out of the tree.|នាងបានលួងឆ្មាឲ្យចុះពីដើមឈើ។
combat|combated|combated|ប្រយុទ្ធប្រឆាំង|We must combat corruption.|យើងត្រូវប្រយុទ្ធប្រឆាំងនឹងអំពើពុករលួយ។
counter|countered|countered|តបត / ប្រឆាំងតប|She countered his argument with facts.|នាងបានតបតអំណះអំណាងរបស់គាត់ដោយការពិត។
delight|delighted|delighted|ធ្វើឲ្យរីករាយ|The show delighted the children.|ការសម្ដែងបានធ្វើឲ្យក្មេងៗរីករាយ។
dim|dimmed|dimmed|បន្ថយពន្លឺ|Dim the lights, please.|សូមបន្ថយពន្លឺភ្លើង។
ease|eased|eased|បន្ធូរ / ធូរស្បើយ|The medicine eased her headache.|ថ្នាំបានធ្វើឲ្យការឈឺក្បាលរបស់នាងធូរស្បើយ។
feast|feasted|feasted|ជប់លៀង / ញ៉ាំយ៉ាងឆ្អែត|We feasted on grilled fish.|យើងបានញ៉ាំត្រីអាំងយ៉ាងឆ្អែត។
flick|flicked|flicked|ខ្ទាត / ចុចប្រាប់ (ស្វីច)|He flicked the switch.|គាត់បានចុចស្វីចភ្លើង។
flock|flocked|flocked|ទៅជាហ្វូង|Tourists flock to Angkor Wat.|ភ្ញៀវទេសចរនាំគ្នាទៅអង្គរវត្តជាហ្វូងៗ។
fulfil|fulfilled|fulfilled|បំពេញ (ក្ដីសុបិន ការសន្យា)|She fulfilled her dream of becoming a doctor.|នាងបានសម្រេចក្ដីសុបិនក្លាយជាវេជ្ជបណ្ឌិត។
gasp|gasped|gasped|ដកដង្ហើមហត់ / ភ្ញាក់ផ្អើល|We gasped at the beautiful view.|យើងស្រឡាំងកាំងនឹងទេសភាពដ៏ស្រស់ស្អាត។
gaze|gazed|gazed|សម្លឹងមើលយូរ|She gazed at the stars.|នាងសម្លឹងមើលផ្កាយយ៉ាងយូរ។
glide|glided|glided|រអិលទៅយ៉ាងរលូន / ហោះរសាត់|The boat glided across the lake.|ទូករសាត់យ៉ាងរលូនឆ្លងបឹង។
grip|gripped|gripped|ក្ដាប់ជាប់|Grip the handle tightly.|ក្ដាប់ដៃកាន់ឲ្យជាប់។
incline|inclined|inclined|ទំនោរ / ផ្អៀង|I'm inclined to agree with you.|ខ្ញុំទំនោរយល់ស្របជាមួយអ្នក។
kidnap|kidnapped|kidnapped|ចាប់ជំរិត|The boy was kidnapped for money.|ក្មេងប្រុសត្រូវបានចាប់ជំរិតដើម្បីលុយ។
lavish|lavished|lavished|ផ្ដល់ឲ្យយ៉ាងច្រើនហួសហេតុ|Grandparents lavish gifts on their grandchildren.|ជីដូនជីតាឲ្យកាដូចៅៗយ៉ាងច្រើន។
moisten|moistened|moistened|ធ្វើឲ្យសើម|Moisten the cloth with water.|ធ្វើឲ្យក្រណាត់សើមដោយទឹក។
obscure|obscured|obscured|បាំង / ធ្វើឲ្យមិនច្បាស់|Clouds obscured the moon.|ពពកបានបាំងព្រះច័ន្ទ។
omit|omitted|omitted|លុបចោល / រំលង|Don't omit any important details.|កុំរំលងព័ត៌មានលម្អិតសំខាន់ណាមួយ។
oppress|oppressed|oppressed|ជិះជាន់|The people were oppressed for years.|ប្រជាជនត្រូវបានជិះជាន់អស់ជាច្រើនឆ្នាំ។
pardon|pardoned|pardoned|លើកលែងទោស|The king pardoned the prisoners.|ព្រះមហាក្សត្របានលើកលែងទោសដល់អ្នកទោស។
pierce|pierced|pierced|ចោះ / ទម្លុះ|She had her ears pierced.|នាងបានចោះត្រចៀក។
probe|probed|probed|ស៊ើបអង្កេត / ស្ទង់|Police probed the cause of the fire.|ប៉ូលិសបានស៊ើបអង្កេតមូលហេតុនៃអគ្គិភ័យ។
punctuate|punctuated|punctuated|ដាក់វណ្ណយុត្តិ / កាត់ជាចន្លោះៗ|Punctuate your sentences correctly.|ដាក់វណ្ណយុត្តិក្នុងប្រយោគរបស់អ្នកឲ្យត្រឹមត្រូវ។
quench|quenched|quenched|បំបាត់ (ស្រេកទឹក) / ពន្លត់|Coconut water quenches your thirst.|ទឹកដូងបំបាត់ការស្រេកទឹក។
raid|raided|raided|ឆ្មក់ចូល / វាយឆ្មក់|Police raided the casino.|ប៉ូលិសបានឆ្មក់ចូលកាស៊ីណូ។
recount|recounted|recounted|រៀបរាប់ / រាប់ម្ដងទៀត|Grandpa recounted stories of the old days.|លោកតាបានរៀបរាប់រឿងកាលពីជំនាន់មុន។
redeem|redeemed|redeemed|ប្ដូរយក (ពិន្ទុ គូប៉ុង) / លោះ|Redeem your points for a free coffee.|ប្ដូរពិន្ទុរបស់អ្នកយកកាហ្វេឥតគិតថ្លៃ។
regain|regained|regained|ទទួលបានមកវិញ|She regained her strength after the illness.|នាងបានកម្លាំងមកវិញក្រោយពីជំងឺ។
reign|reigned|reigned|សោយរាជ្យ / គ្រប់គ្រង|Jayavarman VII reigned in the 12th century.|ព្រះបាទជ័យវរ្ម័នទី ៧ សោយរាជ្យក្នុងសតវត្សទី ១២។
rejoice|rejoiced|rejoiced|ត្រេកអរ|The people rejoiced at the news.|ប្រជាជនត្រេកអរនឹងដំណឹងនោះ។
revolt|revolted|revolted|បះបោរ|The farmers revolted against high taxes.|កសិករបានបះបោរប្រឆាំងនឹងពន្ធខ្ពស់។
revolve|revolved|revolved|វិលជុំវិញ|The earth revolves around the sun.|ផែនដីវិលជុំវិញព្រះអាទិត្យ។
rub|rubbed|rubbed|ជូត / ត្រដុស|He rubbed his tired eyes.|គាត់បានត្រដុសភ្នែកដែលនឿយហត់។
salute|saluted|saluted|គោរពវន្ទនា (ទាហាន)|The soldiers saluted the flag.|ទាហានបានគោរពទង់ជាតិ។
shudder|shuddered|shuddered|ញាក់ខ្លួន (ភ័យ ខ្លាច)|I shudder to think what could happen.|ខ្ញុំញាក់ខ្លួនពេលគិតពីអ្វីដែលអាចកើតឡើង។
skid|skidded|skidded|រអិល (កង់ឡាន)|The motorbike skidded on the wet road.|ម៉ូតូបានរអិលនៅលើផ្លូវសើម។
slam|slammed|slammed|បិទខ្លាំងៗ / ទះ|She slammed the door angrily.|នាងបានបិទទ្វារខ្លាំងៗដោយកំហឹង។
slaughter|slaughtered|slaughtered|សម្លាប់ (សត្វ) / សម្លាប់រង្គាល|They slaughtered a pig for the wedding.|ពួកគេបានសម្លាប់ជ្រូកមួយសម្រាប់ពិធីមង្គលការ។
slay|slew|slain|សម្លាប់ (ភាសាអក្សរសាស្ត្រ)|The hero slew the dragon.|វីរបុរសបានសម្លាប់នាគ។
slump|slumped|slumped|ធ្លាក់ចុះខ្លាំង / អង្គុយទ្រុឌ|Sales slumped during the rainy season.|ការលក់បានធ្លាក់ចុះខ្លាំងក្នុងរដូវវស្សា។
sniff|sniffed|sniffed|ហិត|The dog sniffed my bag.|ឆ្កែបានហិតកាបូបរបស់ខ្ញុំ។
stalk|stalked|stalked|តាមលបៗ|The tiger stalked its prey.|ខ្លាបានតាមលបចំណីរបស់វា។
startle|startled|startled|ធ្វើឲ្យភ្ញាក់ផ្អើល|The loud noise startled the baby.|សំឡេងខ្លាំងបានធ្វើឲ្យទារកភ្ញាក់ផ្អើល។
thrust|thrust|thrust|រុញខ្លាំង / ចាក់|He thrust the money into my hand.|គាត់បានរុញលុយចូលដៃខ្ញុំ។
torment|tormented|tormented|ធ្វើទារុណកម្ម / ធ្វើឲ្យរងទុក្ខ|Guilt tormented him for years.|ការដឹងកំហុសបានធ្វើឲ្យគាត់រងទុក្ខអស់ជាច្រើនឆ្នាំ។
transplant|transplanted|transplanted|ស្ទូង / ប្ដូរ (សរីរាង្គ)|Farmers transplant rice seedlings in July.|កសិករស្ទូងសំណាបនៅខែកក្កដា។
trespass|trespassed|trespassed|ចូលដោយគ្មានការអនុញ្ញាត|Do not trespass on private land.|កុំចូលដីឯកជនដោយគ្មានការអនុញ្ញាត។
triumph|triumphed|triumphed|ទទួលជ័យជម្នះ|Good triumphs over evil.|អំពើល្អតែងតែឈ្នះអំពើអាក្រក់។
trot|trotted|trotted|រត់ជ្រុលៗ (សេះ)|The horse trotted along the road.|សេះរត់ជ្រុលៗតាមបណ្ដោយផ្លូវ។
tuck|tucked|tucked|ញាត់ / ដាក់សំងំ|Tuck your shirt in.|ញាត់អាវរបស់អ្នកចូលក្នុងខោ។
twinkle|twinkled|twinkled|ភ្លឹបភ្លែត|Stars twinkle in the night sky.|ផ្កាយភ្លឹបភ្លែតលើមេឃពេលយប់។
wreck|wrecked|wrecked|បំផ្លាញ|The storm wrecked many houses.|ព្យុះបានបំផ្លាញផ្ទះជាច្រើន។
acidify|acidified|acidified|ធ្វើឲ្យទៅជាអាស៊ីត|Pollution acidifies the ocean.|ការបំពុលធ្វើឲ្យមហាសមុទ្រក្លាយជាអាស៊ីត។
amputate|amputated|amputated|កាត់អវយវៈចេញ|Doctors had to amputate his leg.|វេជ្ជបណ្ឌិតត្រូវកាត់ជើងគាត់ចេញ។
anesthetize|anesthetized|anesthetized|ធ្វើឲ្យស្ពឹក (ថ្នាំសណ្ដំ)|The patient was anesthetized before surgery.|អ្នកជំងឺត្រូវបានធ្វើឲ្យស្ពឹកមុនការវះកាត់។
calcify|calcified|calcified|ក្លាយជាកាល់ស្យូម / រឹង|The bones calcify as children grow.|ឆ្អឹងរឹងឡើងនៅពេលក្មេងធំធាត់។
catalyze|catalyzed|catalyzed|ជំរុញ (ប្រតិកម្ម)|Enzymes catalyze reactions in the body.|អង់ស៊ីមជំរុញប្រតិកម្មក្នុងរាងកាយ។
clone|cloned|cloned|ក្លូន / ចម្លង|Scientists cloned a sheep in 1996.|អ្នកវិទ្យាសាស្ត្របានក្លូនចៀមមួយក្បាលនៅឆ្នាំ ១៩៩៦។
coagulate|coagulated|coagulated|កក (ឈាម)|Blood coagulates to stop bleeding.|ឈាមកកដើម្បីបញ្ឈប់ការហូរឈាម។
combust|combusted|combusted|ឆេះ|Fuel combusts inside the engine.|ឥន្ធនៈឆេះនៅក្នុងម៉ាស៊ីន។
crystallize|crystallized|crystallized|កកជាគ្រីស្តាល់ / ច្បាស់លាស់|Her ideas crystallized after the trip.|គំនិតរបស់នាងកាន់តែច្បាស់ក្រោយដំណើរនោះ។
decontaminate|decontaminated|decontaminated|សម្អាតសារធាតុពុល|The area was decontaminated after the leak.|តំបន់នោះត្រូវបានសម្អាតសារធាតុពុលក្រោយការលេចធ្លាយ។
dehumidify|dehumidified|dehumidified|បន្ថយសំណើម|This machine dehumidifies the room.|ម៉ាស៊ីននេះបន្ថយសំណើមក្នុងបន្ទប់។
dissect|dissected|dissected|វះកាត់ពិនិត្យ / វិភាគលម្អិត|Students dissected a frog in biology class.|សិស្សបានវះកង្កែបក្នុងថ្នាក់ជីវវិទ្យា។
electrify|electrified|electrified|ផ្ដល់អគ្គិសនី / ធ្វើឲ្យរំភើប|The singer electrified the crowd.|អ្នកចម្រៀងបានធ្វើឲ្យហ្វូងមនុស្សរំភើបខ្លាំង។
electrocute|electrocuted|electrocuted|ឆក់ខ្សែភ្លើង|Never touch wet wires or you may be electrocuted.|កុំប៉ះខ្សែភ្លើងសើម ក្រែងលោត្រូវឆក់។
emulsify|emulsified|emulsified|លាយបញ្ចូលគ្នា (ប្រេង និងទឹក)|Egg yolk helps emulsify the sauce.|ស៊ុតក្រហមជួយលាយទឹកជ្រលក់ឲ្យចូលគ្នា។
excrete|excreted|excreted|បញ្ចេញ (កាកសំណល់ពីរាងកាយ)|The kidneys excrete waste.|តម្រងនោមបញ្ចេញកាកសំណល់។
exfoliate|exfoliated|exfoliated|ដុសស្បែកងាប់ចេញ|Exfoliate your skin once a week.|ដុសស្បែកងាប់ចេញម្ដងក្នុងមួយសប្ដាហ៍។
fossilize|fossilized|fossilized|ក្លាយជាហ្វូស៊ីល|Dinosaur bones fossilized over millions of years.|ឆ្អឹងដាយណូស័រក្លាយជាហ្វូស៊ីលក្នុងរយៈពេលរាប់លានឆ្នាំ។
fumigate|fumigated|fumigated|បាញ់ថ្នាំសម្លាប់សត្វល្អិត|They fumigated the house to kill termites.|ពួកគេបានបាញ់ថ្នាំក្នុងផ្ទះដើម្បីសម្លាប់កណ្ដៀរ។
hybridize|hybridized|hybridized|បង្កាត់ពូជ|Farmers hybridize rice to increase yields.|កសិករបង្កាត់ពូជស្រូវដើម្បីបង្កើនទិន្នផល។
immunize|immunized|immunized|ចាក់ថ្នាំបង្ការ|All children should be immunized against measles.|ក្មេងទាំងអស់គួរចាក់ថ្នាំបង្ការជំងឺកញ្ជ្រឹល។
incise|incised|incised|វះ / ឆ្លាក់|The surgeon incised the skin carefully.|គ្រូពេទ្យវះកាត់បានវះស្បែកដោយប្រុងប្រយ័ត្ន។
inoculate|inoculated|inoculated|ចាក់វ៉ាក់សាំង|The nurse inoculated the children.|គិលានុបដ្ឋាយិកាបានចាក់វ៉ាក់សាំងឲ្យក្មេងៗ។
intubate|intubated|intubated|ដាក់បំពង់ដកដង្ហើម|The patient was intubated in the ICU.|អ្នកជំងឺត្រូវបានដាក់បំពង់ដកដង្ហើមក្នុងបន្ទប់សង្គ្រោះ។
ionize|ionized|ionized|អ៊ីយ៉ូដ|Radiation can ionize atoms.|វិទ្យុសកម្មអាចអ៊ីយ៉ូដអាតូម។
irradiate|irradiated|irradiated|បាញ់កាំរស្មី|The food was irradiated to kill bacteria.|អាហារត្រូវបានបាញ់កាំរស្មីដើម្បីសម្លាប់បាក់តេរី។
liquefy|liquefied|liquefied|ធ្វើឲ្យរាវ|Heat liquefies the wax.|កម្ដៅធ្វើឲ្យក្រមួនរលាយ។
magnetize|magnetized|magnetized|ធ្វើឲ្យមានម៉ាញេទិច|You can magnetize a needle with a magnet.|អ្នកអាចធ្វើឲ្យម្ជុលមានម៉ាញេទិចដោយប្រើមេដែក។
medicate|medicated|medicated|ឲ្យថ្នាំ|The vet medicated the sick dog.|ពេទ្យសត្វបានឲ្យថ្នាំឆ្កែឈឺ។
metastasize|metastasized|metastasized|រាលដាល (មហារីក)|The cancer had metastasized to the liver.|មហារីកបានរាលដាលដល់ថ្លើម។
microwave|microwaved|microwaved|កម្ដៅក្នុងមីក្រូវ៉េវ|Microwave the soup for two minutes.|កម្ដៅស៊ុបក្នុងមីក្រូវ៉េវពីរនាទី។
oxidize|oxidized|oxidized|អុកស៊ីតកម្ម / ច្រេះ|Iron oxidizes when it gets wet.|ដែកច្រេះពេលវាសើម។
pasteurize|pasteurized|pasteurized|ប៉ាស្ទ័រ (សម្លាប់មេរោគដោយកម្ដៅ)|Milk is pasteurized to make it safe.|ទឹកដោះគោត្រូវបានប៉ាស្ទ័រដើម្បីឲ្យមានសុវត្ថិភាព។
photosynthesize|photosynthesized|photosynthesized|ធ្វើរស្មីសំយោគ|Plants photosynthesize using sunlight.|រុក្ខជាតិធ្វើរស្មីសំយោគដោយប្រើពន្លឺព្រះអាទិត្យ។
precipitate|precipitated|precipitated|បង្កឲ្យកើតភ្លាមៗ / កករ|The scandal precipitated his resignation.|រឿងអាស្រូវបានបង្កឲ្យគាត់លាលែងភ្លាមៗ។
pressurize|pressurized|pressurized|ដាក់សម្ពាធ|Airplane cabins are pressurized.|បន្ទប់អ្នកដំណើរយន្តហោះត្រូវបានដាក់សម្ពាធ។
recalibrate|recalibrated|recalibrated|ក្រិតឡើងវិញ / កែតម្រូវ|We need to recalibrate our expectations.|យើងត្រូវកែតម្រូវការរំពឹងទុករបស់យើង។
refract|refracted|refracted|ចំណាំងបែរ (ពន្លឺ)|Water refracts light.|ទឹកធ្វើឲ្យពន្លឺចំណាំងបែរ។
refrigerate|refrigerated|refrigerated|ដាក់ទូទឹកកក|Refrigerate the meat after cooking.|ដាក់សាច់ក្នុងទូទឹកកកក្រោយចម្អិន។
rehydrate|rehydrated|rehydrated|បំពេញជាតិទឹកឡើងវិញ|Drink oral salts to rehydrate.|ផឹកអំបិលស្ករដើម្បីបំពេញជាតិទឹកឡើងវិញ។
sequence|sequenced|sequenced|រៀបតាមលំដាប់ / កំណត់ឌីអិនអេ|Scientists sequenced the virus genome.|អ្នកវិទ្យាសាស្ត្របានកំណត់លំដាប់ហ្សែនរបស់មេរោគ។
suture|sutured|sutured|ដេររបួស|The doctor sutured the wound.|វេជ្ជបណ្ឌិតបានដេររបួស។
titrate|titrated|titrated|កំណត់កម្រិតថ្នាំ / ទីត្រាស្យុង|The dose was titrated slowly.|កម្រិតថ្នាំត្រូវបានកែតម្រូវយឺតៗ។
transfuse|transfused|transfused|បញ្ចូលឈាម|She was transfused with two units of blood.|នាងត្រូវបានបញ្ចូលឈាមពីរថង់។
vaporize|vaporized|vaporized|ហួតជាចំហាយ|Water vaporizes at 100°C.|ទឹកហួតជាចំហាយនៅ ១០០ អង្សា។
acquit|acquitted|acquitted|ដោះលែង (រកឃើញថាគ្មានទោស)|The court acquitted him of murder.|តុលាការបានរកឃើញថាគាត់គ្មានទោសពីបទឃាតកម្ម។
arraign|arraigned|arraigned|នាំមកចោទប្រកាន់នៅតុលាការ|He was arraigned on fraud charges.|គាត់ត្រូវបាននាំមកតុលាការពីបទបន្លំ។
bail|bailed|bailed|បង់ប្រាក់ធានា / ជួយសង្គ្រោះ|His family bailed him out of jail.|គ្រួសាររបស់គាត់បានបង់ប្រាក់ធានាឲ្យគាត់ចេញពីគុក។
extradite|extradited|extradited|បញ្ជូនជនល្មើសទៅប្រទេសដើម|He was extradited to the United States.|គាត់ត្រូវបានបញ្ជូនទៅសហរដ្ឋអាមេរិក។
indict|indicted|indicted|ចោទប្រកាន់ជាផ្លូវការ|The minister was indicted for corruption.|រដ្ឋមន្ត្រីត្រូវបានចោទប្រកាន់ពីបទពុករលួយ។
litigate|litigated|litigated|ប្ដឹងផ្ដល់|The case was litigated for years.|ករណីនេះត្រូវបានប្ដឹងផ្ដល់អស់ជាច្រើនឆ្នាំ។
notarize|notarized|notarized|បញ្ជាក់ដោយសារការី|The contract must be notarized.|កិច្ចសន្យាត្រូវតែបញ្ជាក់ដោយសារការី។
overrule|overruled|overruled|បដិសេធ (សេចក្ដីសម្រេច)|The judge overruled the objection.|ចៅក្រមបានបដិសេធការជំទាស់។
parole|paroled|paroled|ដោះលែងមានលក្ខខណ្ឌ|He was paroled after five years.|គាត់ត្រូវបានដោះលែងដោយមានលក្ខខណ្ឌក្រោយប្រាំឆ្នាំ។
repeal|repealed|repealed|លុបចោល (ច្បាប់)|The old law was repealed last year.|ច្បាប់ចាស់ត្រូវបានលុបចោលកាលពីឆ្នាំមុន។
subpoena|subpoenaed|subpoenaed|កោះហៅមកតុលាការ|The witness was subpoenaed to testify.|សាក្សីត្រូវបានកោះហៅមកផ្ដល់សក្ខីកម្ម។
amortize|amortized|amortized|រំលស់ (បំណុល)|The loan is amortized over ten years.|ប្រាក់កម្ចីត្រូវបានរំលស់ក្នុងរយៈពេលដប់ឆ្នាំ។
commodify|commodified|commodified|ធ្វើឲ្យក្លាយជាទំនិញ|Some say tourism commodifies culture.|អ្នកខ្លះថាទេសចរណ៍ធ្វើឲ្យវប្បធម៌ក្លាយជាទំនិញ។
default|defaulted|defaulted|ខកខានសងបំណុល|The company defaulted on its loans.|ក្រុមហ៊ុនបានខកខានសងប្រាក់កម្ចី។
embargo|embargoed|embargoed|ហាមឃាត់ពាណិជ្ជកម្ម|The country embargoed oil exports.|ប្រទេសនោះបានហាមឃាត់ការនាំចេញប្រេង។
hedge|hedged|hedged|ការពារហានិភ័យ / និយាយមិនច្បាស់|Investors hedge against inflation.|វិនិយោគិនការពារហានិភ័យពីអតិផរណា។
leverage|leveraged|leveraged|ប្រើប្រាស់ (ឲ្យមានប្រយោជន៍)|Leverage your skills to find a better job.|ប្រើប្រាស់ជំនាញរបស់អ្នកដើម្បីរកការងារល្អជាងនេះ។
monetize|monetized|monetized|រកប្រាក់ពី|She monetized her YouTube channel.|នាងបានរកប្រាក់ពីឆានែល YouTube របស់នាង។
nationalize|nationalized|nationalized|ធ្វើជាសម្បត្តិរដ្ឋ|The government nationalized the railways.|រដ្ឋាភិបាលបានធ្វើឲ្យផ្លូវដែកក្លាយជាសម្បត្តិរដ្ឋ។
privatize|privatized|privatized|ធ្វើឯកជនភាវូបនីយកម្ម|The airport was privatized in 1995.|អាកាសយានដ្ឋានត្រូវបានធ្វើឯកជនភាវូបនីយកម្មនៅឆ្នាំ ១៩៩៥។
recoup|recouped|recouped|ទាញយកមកវិញ (ដើមទុន)|It took three years to recoup the investment.|ចំណាយពេលបីឆ្នាំដើម្បីទាញយកដើមទុនមកវិញ។
refinance|refinanced|refinanced|ខ្ចីប្រាក់ថ្មីសងប្រាក់ចាស់|They refinanced their mortgage at a lower rate.|ពួកគេបានខ្ចីថ្មីដើម្បីសងប្រាក់កម្ចីផ្ទះក្នុងអត្រាទាបជាង។
remunerate|remunerated|remunerated|បើកប្រាក់ឈ្នួល|Staff are well remunerated.|បុគ្គលិកទទួលបានប្រាក់ឈ្នួលល្អ។
tender|tendered|tendered|ដាក់ (ពាក្យលាលែង ការដេញថ្លៃ)|He tendered his resignation.|គាត់បានដាក់ពាក្យលាលែង។
underwrite|underwrote|underwritten|ធានា (ហិរញ្ញវត្ថុ)|The bank agreed to underwrite the project.|ធនាគារបានយល់ព្រមធានាគម្រោងនេះ។
unionize|unionized|unionized|បង្កើតសហជីព|The workers voted to unionize.|កម្មករបានបោះឆ្នោតបង្កើតសហជីព។
orchestrate|orchestrated|orchestrated|រៀបចំ (ដោយលាក់លៀម) / ដាក់ភ្លេង|The protest was carefully orchestrated.|បាតុកម្មត្រូវបានរៀបចំយ៉ាងល្អិតល្អន់។
curate|curated|curated|ជ្រើសរើសរៀបចំ (ពិព័រណ៍)|She curated an exhibition of Khmer art.|នាងបានរៀបចំពិព័រណ៍សិល្បៈខ្មែរ។
conscript|conscripted|conscripted|កេណ្ឌទាហាន|Young men were conscripted into the army.|យុវជនត្រូវបានកេណ្ឌចូលជាទាហាន។
garrison|garrisoned|garrisoned|ដាក់ទ័ពឈរជើង|Troops garrisoned the border town.|កងទ័ពបានឈរជើងនៅក្រុងព្រំដែន។
deregulate|deregulated|deregulated|បន្ធូរបទប្បញ្ញត្តិ|The government deregulated the telecom market.|រដ្ឋាភិបាលបានបន្ធូរបទប្បញ្ញត្តិទីផ្សារទូរគមនាគមន៍។
impeach|impeached|impeached|ចោទប្រកាន់ដើម្បីទម្លាក់ពីតំណែង|The president was impeached by parliament.|ប្រធានាធិបតីត្រូវបានសភាចោទប្រកាន់ដើម្បីទម្លាក់ពីតំណែង។
sanctify|sanctified|sanctified|ធ្វើឲ្យពិសិដ្ឋ|The ground was sanctified by monks.|ដីនោះត្រូវបានព្រះសង្ឃធ្វើឲ្យពិសិដ្ឋ។
syndicate|syndicated|syndicated|ផ្សាយតាមប្រព័ន្ធផ្សព្វផ្សាយជាច្រើន|Her column is syndicated in 50 newspapers.|អត្ថបទរបស់នាងត្រូវបានផ្សាយក្នុងកាសែត ៥០។`,
6:`obfuscate|obfuscated|obfuscated|ធ្វើឲ្យស្រពិចស្រពិល|Don't obfuscate the facts.|កុំធ្វើឲ្យការពិតស្រពិចស្រពិល។
extrapolate|extrapolated|extrapolated|ព្យាករពីទិន្នន័យ|We extrapolated future trends.|យើងបានព្យាករនិន្នាការនាពេលអនាគត។
vilify|vilified|vilified|បរិហារកេរ្តិ៍|The press vilified him.|សារព័ត៌មានបានបរិហារកេរ្តិ៍គាត់។
ameliorate|ameliorated|ameliorated|ធ្វើឲ្យប្រសើរឡើង|Aid ameliorated the situation.|ជំនួយបានធ្វើឲ្យស្ថានភាពប្រសើរឡើង។
castigate|castigated|castigated|ស្ដីបន្ទោសយ៉ាងខ្លាំង|The coach castigated the team.|គ្រូបង្វឹកបានស្ដីបន្ទោសក្រុមយ៉ាងខ្លាំង។
equivocate|equivocated|equivocated|និយាយវៀចវេរ|Stop equivocating and answer.|ឈប់និយាយវៀចវេរ ហើយឆ្លើយមក។
exonerate|exonerated|exonerated|ដោះលែងពីការចោទប្រកាន់|The court exonerated her.|តុលាការបានដោះលែងនាងពីការចោទប្រកាន់។
promulgate|promulgated|promulgated|ប្រកាសឲ្យប្រើ (ច្បាប់)|The law was promulgated last year.|ច្បាប់នេះត្រូវបានប្រកាសឲ្យប្រើកាលពីឆ្នាំមុន។
repudiate|repudiated|repudiated|បដិសេធទាំងស្រុង|He repudiated the claims.|គាត់បានបដិសេធការចោទប្រកាន់ទាំងស្រុង។
vindicate|vindicated|vindicated|បង្ហាញថាត្រឹមត្រូវ|The results vindicated her.|លទ្ធផលបានបង្ហាញថានាងត្រឹមត្រូវ។
abrogate|abrogated|abrogated|លុបចោល (ច្បាប់ / សន្ធិសញ្ញា)|They abrogated the treaty.|ពួកគេបានលុបចោលសន្ធិសញ្ញា។
abdicate|abdicated|abdicated|ដាក់រាជ្យ / លះបង់តំណែង|The king abdicated in 2004.|ព្រះមហាក្សត្របានដាក់រាជ្យក្នុងឆ្នាំ ២០០៤។
abhor|abhorred|abhorred|ស្អប់ខ្ពើមខ្លាំង|I abhor cruelty to animals.|ខ្ញុំស្អប់ខ្ពើមការធ្វើបាបសត្វខ្លាំងណាស់។
accede|acceded|acceded|យល់ព្រម / ឡើងសោយរាជ្យ|They acceded to our request.|ពួកគេបានយល់ព្រមតាមសំណើរបស់យើង។
adjudicate|adjudicated|adjudicated|កាត់សេចក្ដី / វិនិច្ឆ័យ|A judge adjudicated the dispute.|ចៅក្រមម្នាក់បានកាត់សេចក្ដីលើវិវាទ។
amalgamate|amalgamated|amalgamated|រួមបញ្ចូលគ្នា|The two schools amalgamated.|សាលាទាំងពីរបានរួមបញ្ចូលគ្នា។
annihilate|annihilated|annihilated|បំផ្លាញទាំងស្រុង|The team annihilated their rivals.|ក្រុមនេះបានកម្ទេចគូប្រជែងទាំងស្រុង។
apportion|apportioned|apportioned|បែងចែក|They apportioned the blame equally.|ពួកគេបានបែងចែកការទទួលខុសត្រូវស្មើៗគ្នា។
arbitrate|arbitrated|arbitrated|ធ្វើជាមជ្ឈត្តករ|A neutral party arbitrated the dispute.|ភាគីអព្យាក្រឹតមួយបានធ្វើជាមជ្ឈត្តករលើវិវាទ។
assail|assailed|assailed|វាយប្រហារ / រិះគន់ខ្លាំង|Critics assailed the plan.|អ្នករិះគន់បានវាយប្រហារផែនការយ៉ាងខ្លាំង។
attenuate|attenuated|attenuated|ធ្វើឲ្យខ្សោយ|Trees attenuate the noise.|ដើមឈើកាត់បន្ថយសំឡេងរំខាន។
bemoan|bemoaned|bemoaned|ត្អូញត្អែរ / សោកស្ដាយ|He bemoaned the high prices.|គាត់បានត្អូញត្អែរពីតម្លៃខ្ពស់។
berate|berated|berated|ស្ដីឲ្យយ៉ាងខ្លាំង|She berated him for being late.|នាងបានស្ដីឲ្យគាត់យ៉ាងខ្លាំងដោយសារមកយឺត។
beseech|besought|besought|អង្វរករ|I beseech you to listen.|ខ្ញុំអង្វរករអ្នកឲ្យស្ដាប់។
brandish|brandished|brandished|គ្រវី (អាវុធ)|The robber brandished a knife.|ចោរប្លន់បានគ្រវីកាំបិត។
buttress|buttressed|buttressed|ពង្រឹង / ទ្រ|Data buttressed her argument.|ទិន្នន័យបានពង្រឹងអំណះអំណាងរបស់នាង។
capitulate|capitulated|capitulated|ចុះចាញ់|The city capitulated after a long siege.|ទីក្រុងបានចុះចាញ់បន្ទាប់ពីការឡោមព័ទ្ធយូរ។
catapult|catapulted|catapulted|បាញ់បោះ / ធ្វើឲ្យល្បីភ្លាម|The song catapulted her to fame.|បទចម្រៀងនោះបានធ្វើឲ្យនាងល្បីភ្លាមៗ។
chide|chided|chided|ស្ដីប្រដៅ|Mother chided me for my messy room.|ម្ដាយបានស្ដីប្រដៅខ្ញុំដោយសារបន្ទប់រញ៉េរញ៉ៃ។
circumscribe|circumscribed|circumscribed|ដាក់កម្រិត|His power was circumscribed by law.|អំណាចរបស់គាត់ត្រូវបានដាក់កម្រិតដោយច្បាប់។
compartmentalize|compartmentalized|compartmentalized|បែងចែកជាផ្នែក|She compartmentalizes work and family.|នាងបែងចែកការងារ និងគ្រួសារដាច់ពីគ្នា។
connive|connived|connived|ឃុបឃិត|They connived to cheat the system.|ពួកគេបានឃុបឃិតគ្នាបន្លំប្រព័ន្ធ។
consign|consigned|consigned|ប្រគល់ / ផ្ញើ|The old car was consigned to the scrapyard.|ឡានចាស់ត្រូវបានបញ្ជូនទៅកន្លែងកម្ទេចសំណល់។
deprecate|deprecated|deprecated|មិនគាំទ្រ / ឈប់ប្រើ|This function is deprecated.|មុខងារនេះត្រូវបានឈប់ប្រើហើយ។
disabuse|disabused|disabused|កែការយល់ខុស|Let me disabuse you of that idea.|ទុកឲ្យខ្ញុំកែការយល់ខុសរបស់អ្នកអំពីគំនិតនោះ។
dissociate|dissociated|dissociated|ផ្ដាច់ខ្លួនពី|She dissociated herself from the group.|នាងបានផ្ដាច់ខ្លួនពីក្រុមនោះ។
distill|distilled|distilled|ចម្រាញ់ / សង្ខេប|She distilled the report into one page.|នាងបានសង្ខេបរបាយការណ៍មកត្រឹមមួយទំព័រ។
edify|edified|edified|អប់រំ (ផ្លូវចិត្ត)|The lecture edified the students.|ការបង្រៀនបានអប់រំសិស្ស។
efface|effaced|effaced|លុបចោល|Time effaced the old writing.|ពេលវេលាបានលុបអក្សរចាស់ៗ។
ensnare|ensnared|ensnared|ចាប់ក្នុងអន្ទាក់|The spider ensnared the fly.|ពីងពាងបានចាប់រុយក្នុងអន្ទាក់។
evince|evinced|evinced|បង្ហាញ|He evinced no interest.|គាត់មិនបានបង្ហាញការចាប់អារម្មណ៍ទេ។
excise|excised|excised|កាត់ចេញ|The editor excised two paragraphs.|អ្នកកែសម្រួលបានកាត់កថាខណ្ឌពីរចេញ។
expunge|expunged|expunged|លុបចេញពីកំណត់ត្រា|His record was expunged.|កំណត់ត្រារបស់គាត់ត្រូវបានលុបចេញ។
fester|festered|festered|កាន់តែអាក្រក់ (របួស / កំហឹង)|The wound festered.|របួសបានកើតបូស។
foment|fomented|fomented|ញុះញង់ (ភាពវឹកវរ)|They fomented unrest.|ពួកគេបានញុះញង់ឲ្យមានភាពវឹកវរ។
fraternize|fraternized|fraternized|រាប់អានជាមិត្ត|Staff shouldn't fraternize with clients.|បុគ្គលិកមិនគួររាប់អានជាមិត្តជាមួយអតិថិជនទេ។
gesticulate|gesticulated|gesticulated|ធ្វើកាយវិការ|He gesticulated wildly.|គាត់បានធ្វើកាយវិការយ៉ាងខ្លាំង។
goad|goaded|goaded|ញុះញង់ / ជំរុញ|They goaded him into fighting.|ពួកគេបានញុះញង់គាត់ឲ្យវាយគ្នា។
gorge|gorged|gorged|ញ៉ាំច្រើនហួស|We gorged on mangoes.|យើងបានញ៉ាំស្វាយច្រើនហួស។
harangue|harangued|harangued|ស្ដីអប់រំយូរ|He harangued the crowd for an hour.|គាត់បានថ្លែងស្ដីទៅកាន់ហ្វូងមនុស្សអស់មួយម៉ោង។
hurtle|hurtled|hurtled|រត់ / ហោះយ៉ាងលឿន|A car hurtled down the road.|ឡានមួយបានបើកយ៉ាងលឿនតាមផ្លូវ។
impound|impounded|impounded|រឹបអូស (ឡាន)|Police impounded the car.|ប៉ូលិសបានរឹបអូសឡាន។
incapacitate|incapacitated|incapacitated|ធ្វើឲ្យគ្មានសមត្ថភាព|The injury incapacitated him.|របួសបានធ្វើឲ្យគាត់គ្មានសមត្ថភាពធ្វើការ។
incense|incensed|incensed|ធ្វើឲ្យខឹងខ្លាំង|The decision incensed the workers.|ការសម្រេចចិត្តនេះធ្វើឲ្យកម្មករខឹងខ្លាំង។
indoctrinate|indoctrinated|indoctrinated|បង្ខំឲ្យជឿ|They indoctrinated the young soldiers.|ពួកគេបានបង្ខំឲ្យទាហានវ័យក្មេងជឿលើមនោគមវិជ្ជា។
inflame|inflamed|inflamed|ធ្វើឲ្យរលាក / ញុះញង់|His words inflamed the crowd.|សម្ដីរបស់គាត់បានញុះញង់ហ្វូងមនុស្ស។
irk|irked|irked|ធ្វើឲ្យរំខានចិត្ត|His attitude irked me.|ឥរិយាបថរបស់គាត់ធ្វើឲ្យខ្ញុំរំខានចិត្ត។
jeer|jeered|jeered|ស្រែកចំអក|The crowd jeered the referee.|ហ្វូងមនុស្សបានស្រែកចំអកអាជ្ញាកណ្ដាល។
lionize|lionized|lionized|លើកតម្កើងដូចវីរបុរស|The media lionized the young hero.|ប្រព័ន្ធផ្សព្វផ្សាយបានលើកតម្កើងវីរបុរសវ័យក្មេង។
rebuff|rebuffed|rebuffed|បដិសេធយ៉ាងតឹងរ៉ឹង|She rebuffed his offer.|នាងបានបដិសេធការផ្ដល់ជូនរបស់គាត់យ៉ាងតឹងរ៉ឹង។
recant|recanted|recanted|ដកសម្ដីវិញ|The witness recanted her statement.|សាក្សីបានដកចម្លើយរបស់នាងវិញ។
recoil|recoiled|recoiled|រួញថយ (ដោយខ្លាច)|She recoiled from the snake.|នាងបានរួញថយចេញពីពស់។
redress|redressed|redressed|កែតម្រូវ (អយុត្តិធម៌)|The law aims to redress inequality.|ច្បាប់នេះមានគោលបំណងកែតម្រូវវិសមភាព។
refurbish|refurbished|refurbished|ជួសជុលឲ្យថ្មី|They refurbished the old cinema.|ពួកគេបានជួសជុលរោងកុនចាស់ឲ្យថ្មី។
regale|regaled|regaled|រីករាយនិទានប្រាប់|He regaled us with funny stories.|គាត់បាននិទានរឿងកំប្លែងឲ្យយើងស្ដាប់។
relegate|relegated|relegated|បន្ទាបចំណាត់ថ្នាក់|The team was relegated.|ក្រុមនេះត្រូវបានធ្លាក់ចំណាត់ថ្នាក់។
relish|relished|relished|រីករាយនឹង|She relished the challenge.|នាងរីករាយនឹងការប្រកួតប្រជែង។
reminisce|reminisced|reminisced|រំលឹកអតីតកាល|We reminisced about our school days.|យើងបានរំលឹកពីគ្រាដែលនៅរៀន។
remit|remitted|remitted|ផ្ញើលុយ|Workers remit money home.|កម្មករផ្ញើលុយទៅផ្ទះ។
renege|reneged|reneged|មិនធ្វើតាមការសន្យា|He reneged on the deal.|គាត់មិនបានធ្វើតាមកិច្ចព្រមព្រៀង។
repent|repented|repented|ប្រែចិត្ត|He repented his mistakes.|គាត់បានប្រែចិត្តចំពោះកំហុសរបស់គាត់។
resurrect|resurrected|resurrected|ធ្វើឲ្យរស់ឡើងវិញ|They resurrected an old tradition.|ពួកគេបានធ្វើឲ្យប្រពៃណីចាស់រស់ឡើងវិញ។
retort|retorted|retorted|តបវិញភ្លាម|"That's not true!" she retorted.|នាងតបវិញភ្លាមថា «នោះមិនពិតទេ!»។
revel|reveled|reveled|រីករាយខ្លាំង|They reveled in their victory.|ពួកគេរីករាយខ្លាំងនឹងជ័យជម្នះរបស់ពួកគេ។
reverberate|reverberated|reverberated|បន្លឺសំឡេងខ្ទរ|Music reverberated through the hall.|តន្ត្រីបន្លឺខ្ទរពេញសាល។
rummage|rummaged|rummaged|រុករក|She rummaged through her bag.|នាងបានរុករកក្នុងកាបូបរបស់នាង។
rupture|ruptured|ruptured|ផ្ទុះ / ប្រេះ|The pipe ruptured.|បំពង់បានប្រេះ។
sabotage|sabotaged|sabotaged|បំផ្លិចបំផ្លាញដោយចេតនា|Someone sabotaged the machine.|មាននរណាម្នាក់បានបំផ្លាញម៉ាស៊ីនដោយចេតនា។
salvage|salvaged|salvaged|សង្គ្រោះ (របស់)|They salvaged what they could from the fire.|ពួកគេបានសង្គ្រោះអ្វីដែលអាចយកបានពីភ្លើង។
scavenge|scavenged|scavenged|រើសរកចំណី|Dogs scavenged for food.|ឆ្កែបានរើសរកចំណី។
scorn|scorned|scorned|មើលងាយ|She scorned his offer.|នាងមើលងាយការផ្ដល់ជូនរបស់គាត់។
secede|seceded|seceded|បំបែកខ្លួន|The region tried to secede.|តំបន់នោះបានព្យាយាមបំបែកខ្លួន។
shirk|shirked|shirked|គេចពីការងារ|Don't shirk your duties.|កុំគេចពីភារកិច្ចរបស់អ្នក។
slander|slandered|slandered|បរិហារកេរ្តិ៍ (ដោយពាក្យ)|He slandered his rival.|គាត់បានបរិហារកេរ្តិ៍គូប្រជែងរបស់គាត់។
smother|smothered|smothered|ថប់ដង្ហើម / គ្រប|Don't smother the fire with water.|កុំគ្របភ្លើងដោយទឹក។
solidify|solidified|solidified|ធ្វើឲ្យរឹង|The lava solidified.|កម្អែភ្នំភ្លើងបានរឹង។
spurn|spurned|spurned|បដិសេធ (ដោយមើលងាយ)|She spurned his advice.|នាងបានបដិសេធដំបូន្មានរបស់គាត់។
stifle|stifled|stifled|ទប់ / ធ្វើឲ្យថប់|She stifled a yawn.|នាងបានទប់ការស្ងាប។
strew|strewed|strewn|រាយប៉ាយ|Toys were strewn across the floor.|ប្រដាប់ក្មេងលេងរាយប៉ាយពេញឥដ្ឋ។
subjugate|subjugated|subjugated|ត្រួតត្រា|The empire subjugated its neighbours.|ចក្រភពបានត្រួតត្រាប្រទេសជិតខាង។
subvert|subverted|subverted|បំផ្លាញ (ប្រព័ន្ធ)|They tried to subvert the government.|ពួកគេបានព្យាយាមផ្ដួលរំលំរដ្ឋាភិបាល។
succumb|succumbed|succumbed|ចុះចាញ់|He succumbed to temptation.|គាត់បានចុះចាញ់ការល្បួង។
supplant|supplanted|supplanted|ជំនួស|Phones have supplanted cameras.|ទូរស័ព្ទបានជំនួសកាមេរ៉ា។
surmise|surmised|surmised|ស្មាន|I surmised that he was tired.|ខ្ញុំស្មានថាគាត់ហត់។
swindle|swindled|swindled|បោកប្រាស់យកលុយ|He swindled old people.|គាត់បានបោកប្រាស់យកលុយពីមនុស្សចាស់។
tamper|tampered|tampered|កែប្រែដោយខុសច្បាប់|Someone tampered with the lock.|មាននរណាម្នាក់បានប៉ះពាល់សោ។
taunt|taunted|taunted|ចំអកឲ្យខឹង|They taunted the losing team.|ពួកគេបានចំអកក្រុមដែលចាញ់។
teem|teemed|teemed|ពោរពេញទៅដោយ|The market teems with people.|ផ្សារពោរពេញទៅដោយមនុស្ស។
thwart|thwarted|thwarted|រារាំង / បង្អាក់|Police thwarted the robbery.|ប៉ូលិសបានរារាំងការប្លន់។
tout|touted|touted|ផ្សព្វផ្សាយខ្លាំង|The app is touted as the best.|App នេះត្រូវបានផ្សព្វផ្សាយថាល្អបំផុត។
transgress|transgressed|transgressed|ល្មើស (ច្បាប់)|He transgressed the rules.|គាត់បានល្មើសច្បាប់។
traverse|traversed|traversed|ឆ្លងកាត់|They traversed the desert.|ពួកគេបានឆ្លងកាត់វាលខ្សាច់។
truncate|truncated|truncated|កាត់ឲ្យខ្លី|The text was truncated.|អត្ថបទត្រូវបានកាត់ឲ្យខ្លី។
unravel|unraveled|unraveled|ស្រាយ / បែកធ្លាយ|Police unraveled the mystery.|ប៉ូលិសបានស្រាយអាថ៌កំបាំង។
usurp|usurped|usurped|ដណ្ដើមអំណាច|The general usurped the throne.|ឧត្តមសេនីយ៍បានដណ្ដើមរាជបល្ល័ង្ក។
vacillate|vacillated|vacillated|ស្ទាក់ស្ទើរ / មិនដាច់ចិត្ត|She vacillated between two choices.|នាងស្ទាក់ស្ទើររវាងជម្រើសពីរ។
venerate|venerated|venerated|គោរពបូជា|Khmer people venerate their ancestors.|ប្រជាជនខ្មែរគោរពបូជាដូនតា។
verge|verged|verged|ជិតដល់|Her joy verged on tears.|ក្ដីរីករាយរបស់នាងស្ទើរតែយំ។
vex|vexed|vexed|ធ្វើឲ្យរំខានចិត្ត|The problem vexed the scientists.|បញ្ហានេះធ្វើឲ្យអ្នកវិទ្យាសាស្ត្រពិបាកចិត្ត។
vie|vied|vied|ប្រជែងគ្នា|Teams vied for the trophy.|ក្រុមនានាបានប្រជែងគ្នាដណ្ដើមពានរង្វាន់។
waver|wavered|wavered|ស្ទាក់ស្ទើរ / ញ័រ|His confidence never wavered.|ទំនុកចិត្តរបស់គាត់មិនដែលរង្គោះរង្គើទេ។
whet|whetted|whetted|ធ្វើឲ្យចង់ (ញ៉ាំ / ដឹង)|The smell whetted my appetite.|ក្លិននោះធ្វើឲ្យខ្ញុំឃ្លាន។
wrangle|wrangled|wrangled|ឈ្លោះប្រកែក|They wrangled over the price.|ពួកគេបានឈ្លោះប្រកែកអំពីតម្លៃ។
wreak|wreaked|wreaked|បង្ក (ការខូចខាត)|The storm wreaked havoc.|ព្យុះបានបង្កការខូចខាតយ៉ាងធ្ងន់ធ្ងរ។
writhe|writhed|writhed|រមួលខ្លួន (ឈឺ)|He writhed in pain.|គាត់បានរមួលខ្លួនដោយការឈឺចាប់។`,
7:`give up|gave up|given up|បោះបង់|Don't give up!|កុំបោះបង់!
look after|looked after|looked after|មើលថែ|She looks after her little brother.|នាងមើលថែប្អូនប្រុសតូចរបស់នាង។
look for|looked for|looked for|រក|I'm looking for my keys.|ខ្ញុំកំពុងរកសោរបស់ខ្ញុំ។
look up|looked up|looked up|រកមើល (ក្នុងវចនានុក្រម)|Look up the word in a dictionary.|រកមើលពាក្យនេះក្នុងវចនានុក្រម។
look forward to|looked forward to|looked forward to|ទន្ទឹងរង់ចាំ|I look forward to seeing you.|ខ្ញុំទន្ទឹងរង់ចាំជួបអ្នក។
get up|got up|got up|ក្រោកពីគេង|I get up at six every day.|ខ្ញុំក្រោកពីគេងម៉ោងប្រាំមួយរៀងរាល់ថ្ងៃ។
wake up|woke up|woken up|ភ្ញាក់ពីគេង|Wake up! It's late.|ភ្ញាក់ឡើង! យឺតហើយ។
turn on|turned on|turned on|បើក (ភ្លើង / ម៉ាស៊ីន)|Turn on the light, please.|សូមបើកភ្លើង។
turn off|turned off|turned off|បិទ (ភ្លើង / ម៉ាស៊ីន)|Turn off the TV before bed.|បិទទូរទស្សន៍មុនពេលចូលគេង។
turn up|turned up|turned up|បង្កើនសំឡេង / មកដល់|Turn up the music!|បង្កើនសំឡេងតន្ត្រី!
turn down|turned down|turned down|បន្ថយសំឡេង / បដិសេធ|She turned down the job offer.|នាងបានបដិសេធការផ្ដល់ការងារ។
put on|put on|put on|ពាក់ / ស្លៀក|Put on your jacket.|ពាក់អាវក្រៅរបស់អ្នក។
take off|took off|taken off|ដោះចេញ / ហោះឡើង|The plane took off at noon.|យន្តហោះបានហោះឡើងនៅថ្ងៃត្រង់។
pick up|picked up|picked up|រើស / ទៅទទួល|I'll pick you up at five.|ខ្ញុំនឹងទៅទទួលអ្នកនៅម៉ោងប្រាំ។
find out|found out|found out|រកឃើញ / ដឹង|I found out the truth.|ខ្ញុំបានដឹងការពិត។
come back|came back|come back|ត្រឡប់មកវិញ|Come back soon!|ត្រឡប់មកវិញឆាប់ៗ!
go back|went back|gone back|ត្រឡប់ទៅវិញ|I want to go back home.|ខ្ញុំចង់ត្រឡប់ទៅផ្ទះវិញ។
go out|went out|gone out|ចេញទៅក្រៅ|Let's go out for dinner.|តោះចេញទៅញ៉ាំអាហារពេលល្ងាច។
come in|came in|come in|ចូលមក|Please come in.|សូមអញ្ជើញចូល។
sit down|sat down|sat down|អង្គុយចុះ|Please sit down.|សូមអង្គុយចុះ។
stand up|stood up|stood up|ក្រោកឈរ|Stand up when the teacher comes in.|ក្រោកឈរនៅពេលគ្រូចូលមក។
write down|wrote down|written down|កត់ទុក|Write down my phone number.|កត់លេខទូរស័ព្ទរបស់ខ្ញុំទុក។
fill in|filled in|filled in|បំពេញ (ទម្រង់)|Fill in your name here.|បំពេញឈ្មោះរបស់អ្នកនៅទីនេះ។
fill out|filled out|filled out|បំពេញ (ពាក្យសុំ)|Fill out the application form.|បំពេញពាក្យសុំ។
carry on|carried on|carried on|បន្ត|Carry on with your work.|បន្តការងាររបស់អ្នក។
set up|set up|set up|បង្កើត / ដំឡើង|They set up a new business.|ពួកគេបានបង្កើតអាជីវកម្មថ្មីមួយ។
break down|broke down|broken down|ខូច (ម៉ាស៊ីន)|My car broke down on the road.|ឡានរបស់ខ្ញុំខូចនៅលើផ្លូវ។
run out of|ran out of|run out of|អស់ (ស្បៀង / លុយ)|We ran out of rice.|យើងអស់អង្ករហើយ។
get on|got on|got on|ឡើង (ឡានក្រុង / រថភ្លើង)|Get on the bus quickly.|ឡើងឡានក្រុងឲ្យលឿន។
get off|got off|got off|ចុះ (ពីឡាន)|Get off at the next stop.|ចុះនៅចំណតបន្ទាប់។
get in|got in|got in|ចូល (ឡាន)|Get in the car.|ចូលឡាន។
get out|got out|got out|ចេញ|Get out of the water!|ចេញពីទឹកមក!
get along with|got along with|got along with|ចុះសម្រុងជាមួយ|I get along with my classmates.|ខ្ញុំចុះសម្រុងជាមួយមិត្តរួមថ្នាក់។
get over|got over|got over|ជាសះស្បើយ / យកឈ្នះ|She got over her cold.|នាងបានជាសះស្បើយពីជំងឺផ្ដាសាយ។
give back|gave back|given back|ប្រគល់វិញ|Give back my pen.|ប្រគល់ប៊ិចខ្ញុំមកវិញ។
hand in|handed in|handed in|ប្រគល់ (កិច្ចការ)|Hand in your homework tomorrow.|ប្រគល់កិច្ចការផ្ទះរបស់អ្នកនៅថ្ងៃស្អែក។
hand out|handed out|handed out|ចែកចាយ|The teacher handed out the papers.|គ្រូបានចែកក្រដាសប្រឡង។
hang out|hung out|hung out|ដើរលេងជាមួយគ្នា|We hang out at the mall on weekends.|យើងដើរលេងនៅផ្សារទំនើបនៅចុងសប្ដាហ៍។
hang up|hung up|hung up|ដាក់ទូរស័ព្ទចុះ|Don't hang up!|កុំដាក់ទូរស័ព្ទចុះ!
hold on|held on|held on|រង់ចាំបន្តិច / តោងជាប់|Hold on, I'm coming.|ចាំបន្តិច ខ្ញុំកំពុងមក។
keep up|kept up|kept up|តាមឲ្យទាន់ / រក្សា|Keep up the good work!|បន្តធ្វើការល្អបែបនេះ!
catch up|caught up|caught up|តាមឲ្យទាន់|I need to catch up on my studies.|ខ្ញុំត្រូវរៀនឲ្យទាន់មេរៀន។
check in|checked in|checked in|ចុះឈ្មោះចូល (សណ្ឋាគារ)|We checked in at the hotel.|យើងបានចុះឈ្មោះចូលស្នាក់នៅសណ្ឋាគារ។
check out|checked out|checked out|ចាកចេញ (សណ្ឋាគារ) / មើល|Check out this video!|មើលវីដេអូនេះមើល!
clean up|cleaned up|cleaned up|សម្អាត|Clean up your room.|សម្អាតបន្ទប់របស់អ្នក។
cut down on|cut down on|cut down on|កាត់បន្ថយ|Cut down on sugar.|កាត់បន្ថយការញ៉ាំស្ករ។
figure out|figured out|figured out|រកដំណោះស្រាយ / យល់|I can't figure out this problem.|ខ្ញុំមិនអាចរកដំណោះស្រាយបញ្ហានេះបានទេ។
go on|went on|gone on|បន្ត / កើតឡើង|What's going on?|មានរឿងអ្វីកើតឡើង?
grow up|grew up|grown up|ធំឡើង|I grew up in Battambang.|ខ្ញុំធំឡើងនៅបាត់ដំបង។
call back|called back|called back|ទូរស័ព្ទមកវិញ|I'll call you back later.|ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកវិញពេលក្រោយ។
call off|called off|called off|លុបចោល|They called off the match.|ពួកគេបានលុបចោលការប្រកួត។
calm down|calmed down|calmed down|ស្ងប់ចិត្ត|Calm down and breathe.|ស្ងប់ចិត្ត ហើយដកដង្ហើម។
cheer up|cheered up|cheered up|ធ្វើឲ្យសប្បាយចិត្តវិញ|Cheer up! It's not so bad.|សប្បាយចិត្តឡើង! វាមិនអាក្រក់ប៉ុណ្ណឹងទេ។
come across|came across|come across|ជួបដោយចៃដន្យ|I came across an old photo.|ខ្ញុំបានរកឃើញរូបថតចាស់មួយដោយចៃដន្យ។
come up with|came up with|come up with|គិតឃើញ (គំនិត)|She came up with a great idea.|នាងបានគិតឃើញគំនិតដ៏ល្អមួយ។
count on|counted on|counted on|ពឹងផ្អែកលើ|You can count on me.|អ្នកអាចពឹងលើខ្ញុំបាន។
drop off|dropped off|dropped off|ទម្លាក់ (មនុស្ស / ឥវ៉ាន់)|Drop me off at school.|ទម្លាក់ខ្ញុំនៅសាលា។
drop out|dropped out|dropped out|បោះបង់ការសិក្សា|He dropped out of university.|គាត់បានបោះបង់ការសិក្សានៅសាកលវិទ្យាល័យ។
eat out|ate out|eaten out|ញ៉ាំនៅខាងក្រៅ|We eat out on Fridays.|យើងញ៉ាំនៅខាងក្រៅរៀងរាល់ថ្ងៃសុក្រ។
fall apart|fell apart|fallen apart|បែកបាក់ / ខូចខ្ទេច|My old shoes are falling apart.|ស្បែកជើងចាស់របស់ខ្ញុំកំពុងរហែក។
fall down|fell down|fallen down|ដួល|The child fell down.|ក្មេងបានដួល។
get away|got away|got away|រត់គេចខ្លួន / ទៅលំហែ|The thief got away.|ចោរបានរត់គេចខ្លួន។
get back|got back|got back|ត្រឡប់មកវិញ / បានមកវិញ|When did you get back?|តើអ្នកត្រឡប់មកវិញពេលណា?
get by|got by|got by|រស់បាន (ដោយលំបាក)|We get by on a small salary.|យើងរស់បានដោយប្រាក់ខែតិចតួច។
give away|gave away|given away|ឲ្យទានទទេ|She gave away her old clothes.|នាងបានឲ្យសម្លៀកបំពាក់ចាស់ៗទៅអ្នកដទៃ។
go ahead|went ahead|gone ahead|ធ្វើទៅ / បន្តទៅមុខ|Go ahead and start.|ចាប់ផ្ដើមទៅ។
go over|went over|gone over|ពិនិត្យឡើងវិញ|Let's go over the answers.|តោះពិនិត្យចម្លើយឡើងវិញ។
hurry up|hurried up|hurried up|ប្រញាប់ឡើង|Hurry up, the bus is coming!|ប្រញាប់ឡើង ឡានក្រុងកំពុងមក!
keep on|kept on|kept on|បន្តធ្វើ|Keep on trying.|បន្តព្យាយាម។
kick off|kicked off|kicked off|ចាប់ផ្ដើម|The match kicks off at seven.|ការប្រកួតចាប់ផ្ដើមនៅម៉ោងប្រាំពីរ។
knock down|knocked down|knocked down|រុះរើ / បុកដួល|They knocked down the old house.|ពួកគេបានរុះរើផ្ទះចាស់។
let down|let down|let down|ធ្វើឲ្យខកចិត្ត|Don't let your team down.|កុំធ្វើឲ្យក្រុមរបស់អ្នកខកចិត្ត។
log in|logged in|logged in|ចូលគណនី|Log in with your email.|ចូលគណនីដោយប្រើអ៊ីមែលរបស់អ្នក។
log out|logged out|logged out|ចាកចេញពីគណនី|Log out when you finish.|ចាកចេញពីគណនីនៅពេលអ្នករួចរាល់។
look out|looked out|looked out|ប្រយ័ត្ន|Look out! A car is coming.|ប្រយ័ត្ន! មានឡានមក។
look into|looked into|looked into|ស៊ើបអង្កេត / ពិនិត្យ|We will look into the problem.|យើងនឹងពិនិត្យមើលបញ្ហានេះ។
make up|made up|made up|ប្រឌិត / ផ្សះផ្សា|He made up a story.|គាត់បានប្រឌិតរឿងមួយ។
mix up|mixed up|mixed up|ច្រឡំ|I always mix up their names.|ខ្ញុំតែងតែច្រឡំឈ្មោះរបស់ពួកគេ។
move in|moved in|moved in|ផ្លាស់ចូលនៅ|We moved in last week.|យើងបានផ្លាស់ចូលនៅកាលពីសប្ដាហ៍មុន។
move out|moved out|moved out|ផ្លាស់ចេញ|She moved out of her parents' house.|នាងបានផ្លាស់ចេញពីផ្ទះឪពុកម្ដាយ។
pass away|passed away|passed away|ទទួលមរណភាព|His grandfather passed away last year.|ជីតារបស់គាត់បានទទួលមរណភាពកាលពីឆ្នាំមុន។
pass out|passed out|passed out|សន្លប់|She passed out from the heat.|នាងបានសន្លប់ដោយសារកម្ដៅ។
pay back|paid back|paid back|សងវិញ|I'll pay you back tomorrow.|ខ្ញុំនឹងសងអ្នកវិញនៅថ្ងៃស្អែក។
plug in|plugged in|plugged in|ដោតភ្លើង|Plug in your laptop.|ដោតភ្លើងកុំព្យូទ័ររបស់អ្នក។
point out|pointed out|pointed out|ចង្អុលបង្ហាញ|She pointed out my mistake.|នាងបានចង្អុលបង្ហាញកំហុសរបស់ខ្ញុំ។
put away|put away|put away|ទុកដាក់ឲ្យមានរបៀប|Put away your toys.|ទុកដាក់ប្រដាប់ក្មេងលេងរបស់អ្នក។
put off|put off|put off|ពន្យារពេល|Don't put off your homework.|កុំពន្យារពេលធ្វើកិច្ចការផ្ទះ។
put up with|put up with|put up with|ទ្រាំ|I can't put up with the noise.|ខ្ញុំមិនអាចទ្រាំនឹងសំឡេងរំខានបានទេ។
run away|ran away|run away|រត់ចេញ|The dog ran away.|ឆ្កែបានរត់ចេញបាត់។
run into|ran into|run into|ជួបដោយចៃដន្យ|I ran into my teacher at the market.|ខ្ញុំបានជួបគ្រូរបស់ខ្ញុំដោយចៃដន្យនៅផ្សារ។
set off|set off|set off|ចេញដំណើរ|We set off early in the morning.|យើងចេញដំណើរពីព្រឹកព្រលឹម។
show off|showed off|showed off|អួត / បង្ហាញខ្លួន|He likes to show off his new phone.|គាត់ចូលចិត្តអួតទូរស័ព្ទថ្មីរបស់គាត់។
show up|showed up|showed up|មកដល់ / លេចមុខ|He didn't show up for the meeting.|គាត់មិនបានមកចូលរួមកិច្ចប្រជុំទេ។
shut down|shut down|shut down|បិទ (ម៉ាស៊ីន / អាជីវកម្ម)|Shut down your computer.|បិទកុំព្យូទ័ររបស់អ្នក។
sign up|signed up|signed up|ចុះឈ្មោះ|Sign up for the English class.|ចុះឈ្មោះរៀនថ្នាក់ភាសាអង់គ្លេស។
slow down|slowed down|slowed down|បន្ថយល្បឿន|Slow down! You're driving too fast.|បន្ថយល្បឿន! អ្នកបើកលឿនពេកហើយ។
sort out|sorted out|sorted out|ដោះស្រាយ / រៀបចំ|We need to sort out this problem.|យើងត្រូវដោះស្រាយបញ្ហានេះ។
speak up|spoke up|spoken up|និយាយឲ្យខ្លាំង / បញ្ចេញមតិ|Please speak up, I can't hear you.|សូមនិយាយឲ្យខ្លាំងបន្តិច ខ្ញុំស្ដាប់មិនឮទេ។
take after|took after|taken after|មានលក្ខណៈដូច (ឪពុកម្ដាយ)|She takes after her mother.|នាងមានលក្ខណៈដូចម្ដាយរបស់នាង។
take care of|took care of|taken care of|ថែរក្សា|Take care of yourself.|ថែរក្សាខ្លួនផង។
take up|took up|taken up|ចាប់ផ្ដើម (ចំណង់ចំណូលចិត្ត) / ប្រើ (កន្លែង)|I took up swimming last year.|ខ្ញុំបានចាប់ផ្ដើមហែលទឹកកាលពីឆ្នាំមុន។
take over|took over|taken over|កាន់កាប់ / ទទួលបន្ត|She took over the family business.|នាងបានទទួលបន្តអាជីវកម្មគ្រួសារ។
think over|thought over|thought over|ពិចារណាឲ្យល្អ|Think it over before you decide.|ពិចារណាឲ្យល្អមុននឹងសម្រេចចិត្ត។
throw away|threw away|thrown away|បោះចោល|Don't throw away plastic bottles.|កុំបោះចោលដបប្លាស្ទិក។
try on|tried on|tried on|សាកពាក់|Can I try on this shirt?|តើខ្ញុំអាចសាកពាក់អាវនេះបានទេ?
try out|tried out|tried out|សាកល្បង|Try out the new app.|សាកល្បង App ថ្មី។
turn around|turned around|turned around|បែរក្រោយ|Turn around and look at me.|បែរក្រោយ ហើយមើលមកខ្ញុំ។
use up|used up|used up|ប្រើអស់|We used up all the paper.|យើងបានប្រើក្រដាសអស់ហើយ។
warm up|warmed up|warmed up|កម្ដៅសាច់ដុំ / កម្ដៅ|Warm up before you run.|កម្ដៅសាច់ដុំមុនពេលអ្នករត់។
work out|worked out|worked out|ហាត់ប្រាណ / ដោះស្រាយ|I work out at the gym.|ខ្ញុំហាត់ប្រាណនៅក្លឹបហាត់ប្រាណ។
bring up|brought up|brought up|ចិញ្ចឹមបីបាច់ / លើកឡើង|She was brought up by her grandmother.|នាងត្រូវបានយាយចិញ្ចឹមបីបាច់។
blow up|blew up|blown up|ផ្ទុះ / ផ្លុំ (បាឡុង)|Blow up the balloons.|ផ្លុំបាឡុង។
break up|broke up|broken up|បែកគ្នា|They broke up last month.|ពួកគេបានបែកគ្នាកាលពីខែមុន។
break in|broke in|broken in|លួចចូល|Thieves broke in last night.|ចោរបានលួចចូលកាលពីយប់មិញ។
back up|backed up|backed up|បម្រុងទុក / គាំទ្រ|Back up your files.|បម្រុងទុកឯកសាររបស់អ្នក។
come over|came over|come over|មកលេងផ្ទះ|Come over for dinner tonight.|មកញ៉ាំអាហារពេលល្ងាចនៅផ្ទះខ្ញុំយប់នេះ។
cross out|crossed out|crossed out|គូសចោល|Cross out the wrong answers.|គូសចោលចម្លើយខុស។
do without|did without|done without|រស់ដោយគ្មាន|I can't do without coffee.|ខ្ញុំមិនអាចរស់ដោយគ្មានកាហ្វេបានទេ។
dress up|dressed up|dressed up|ស្លៀកពាក់ស្អាត|We dressed up for the wedding.|យើងស្លៀកពាក់ស្អាតសម្រាប់ពិធីមង្គលការ។
end up|ended up|ended up|ចុងក្រោយ / បញ្ចប់ដោយ|We ended up staying home.|ចុងក្រោយយើងនៅផ្ទះ។
fall behind|fell behind|fallen behind|យឺតជាងគេ|Don't fall behind in class.|កុំរៀនយឺតជាងគេក្នុងថ្នាក់។
go through|went through|gone through|ឆ្លងកាត់ / ពិនិត្យ|She went through a hard time.|នាងបានឆ្លងកាត់ពេលវេលាដ៏លំបាក។
hand over|handed over|handed over|ប្រគល់|Hand over the keys.|ប្រគល់សោមក។
hold up|held up|held up|ពន្យារ / ប្លន់|Traffic held us up.|ចរាចរណ៍បានធ្វើឲ្យយើងយឺត។
join in|joined in|joined in|ចូលរួម|Everyone joined in the song.|គ្រប់គ្នាបានច្រៀងចូលរួម។
keep away|kept away|kept away|នៅឲ្យឆ្ងាយ|Keep away from the fire.|នៅឲ្យឆ្ងាយពីភ្លើង។
lay off|laid off|laid off|បញ្ឈប់ពីការងារ|The factory laid off 100 workers.|រោងចក្របានបញ្ឈប់កម្មករ ១០០ នាក់ពីការងារ។
leave out|left out|left out|ទុកចោល / មិនរាប់បញ្ចូល|Don't leave out any details.|កុំរំលងព័ត៌មានលម្អិតណាមួយ។
let in|let in|let in|អនុញ្ញាតឲ្យចូល|Open the window to let in fresh air.|បើកបង្អួចឲ្យខ្យល់បរិសុទ្ធចូល។
look down on|looked down on|looked down on|មើលងាយ|Don't look down on poor people.|កុំមើលងាយអ្នកក្រ។
look up to|looked up to|looked up to|គោរពកោតសរសើរ|I look up to my father.|ខ្ញុំគោរពកោតសរសើរឪពុករបស់ខ្ញុំ។
make out|made out|made out|មើលឃើញ / យល់|I can't make out what he's saying.|ខ្ញុំស្ដាប់មិនយល់ថាគាត់និយាយអ្វីទេ។
put out|put out|put out|ពន្លត់|Firefighters put out the fire.|អ្នកពន្លត់អគ្គិភ័យបានពន្លត់ភ្លើង។
run over|ran over|run over|បុកកិន|A car ran over the cat.|ឡានមួយបានបុកកិនឆ្មា។
see off|saw off|seen off|ជូនដំណើរ|We saw her off at the airport.|យើងបានជូនដំណើរនាងនៅព្រលានយន្តហោះ។
settle down|settled down|settled down|តាំងលំនៅ / ស្ងប់|They settled down in Kampot.|ពួកគេបានតាំងលំនៅនៅកំពត។
stand out|stood out|stood out|លេចធ្លោ|Her red dress stood out.|រ៉ូបពណ៌ក្រហមរបស់នាងលេចធ្លោ។
stay up|stayed up|stayed up|នៅមិនទាន់គេង|I stayed up until midnight.|ខ្ញុំមិនទាន់គេងរហូតដល់អាធ្រាត្រ។
take back|took back|taken back|យកទៅប្ដូរ / ដកសម្ដីវិញ|I took the shoes back to the shop.|ខ្ញុំបានយកស្បែកជើងទៅហាងវិញ។
tell off|told off|told off|ស្ដីបន្ទោស|The teacher told him off.|គ្រូបានស្ដីបន្ទោសគាត់។
tidy up|tidied up|tidied up|រៀបចំឲ្យស្អាត|Tidy up before guests arrive.|រៀបចំឲ្យស្អាតមុនភ្ញៀវមកដល់។
turn into|turned into|turned into|ប្រែក្លាយជា|The caterpillar turned into a butterfly.|ដង្កូវបានប្រែក្លាយជាមេអំបៅ។
wash up|washed up|washed up|លាងចាន|I'll wash up after dinner.|ខ្ញុំនឹងលាងចានក្រោយអាហារពេលល្ងាច។
wear out|wore out|worn out|ពាក់រហែក / ធ្វើឲ្យហត់|I wore out my shoes.|ខ្ញុំពាក់ស្បែកជើងរហូតរហែក។
work on|worked on|worked on|ធ្វើការលើ|I'm working on a new project.|ខ្ញុំកំពុងធ្វើការលើគម្រោងថ្មីមួយ។
get rid of|got rid of|got rid of|កម្ចាត់ / បោះចោល|Get rid of old newspapers.|បោះចោលកាសែតចាស់ៗ។
look around|looked around|looked around|ដើរមើលជុំវិញ|We looked around the market.|យើងបានដើរមើលជុំវិញផ្សារ។
come on|came on|come on|តោះ / ឆាប់ឡើង|Come on, we're late!|តោះ ឆាប់ឡើង យើងយឺតហើយ!
go away|went away|gone away|ចេញទៅ|Go away, I'm busy.|ចេញទៅ ខ្ញុំរវល់។
come up|came up|come up|កើតឡើង / ឡើងមក|Something came up at work.|មានរឿងអ្វីមួយកើតឡើងនៅកន្លែងធ្វើការ។
look at|looked at|looked at|មើល|Look at this picture.|មើលរូបភាពនេះ។
listen to|listened to|listened to|ស្ដាប់|Listen to the teacher.|ស្ដាប់គ្រូ។
wait for|waited for|waited for|រង់ចាំ|Wait for me at the gate.|ចាំខ្ញុំនៅមាត់ទ្វារ។
think about|thought about|thought about|គិតអំពី|I'm thinking about my future.|ខ្ញុំកំពុងគិតអំពីអនាគតរបស់ខ្ញុំ។
talk about|talked about|talked about|និយាយអំពី|Let's talk about your plan.|តោះនិយាយអំពីផែនការរបស់អ្នក។
belong to|belonged to|belonged to|ជារបស់|This book belongs to me.|សៀវភៅនេះជារបស់ខ្ញុំ។
depend on|depended on|depended on|អាស្រ័យលើ|It depends on the weather.|វាអាស្រ័យលើអាកាសធាតុ។
apply for|applied for|applied for|ដាក់ពាក្យសុំ|I applied for a scholarship.|ខ្ញុំបានដាក់ពាក្យសុំអាហារូបករណ៍។
deal with|dealt with|dealt with|ដោះស្រាយ|How do you deal with stress?|តើអ្នកដោះស្រាយភាពតានតឹងដោយរបៀបណា?
take part in|took part in|taken part in|ចូលរួម|I took part in the competition.|ខ្ញុំបានចូលរួមការប្រកួត។
act up|acted up|acted up|ធ្វើអាកប្បកិរិយាមិនល្អ / ដំណើរការមិនប្រក្រតី|My phone is acting up again.|ទូរស័ព្ទរបស់ខ្ញុំដំណើរការមិនប្រក្រតីទៀតហើយ។
add up|added up|added up|បូកបញ្ចូលគ្នា / សមហេតុផល|Add up these numbers.|បូកលេខទាំងនេះបញ្ចូលគ្នា។
ask out|asked out|asked out|បបួលណាត់ជួប|He asked her out to dinner.|គាត់បានបបួលនាងទៅញ៉ាំអាហារពេលល្ងាច។
back down|backed down|backed down|ដកថយ / បោះបង់ការទាមទារ|He refused to back down.|គាត់បដិសេធមិនព្រមដកថយ។
back off|backed off|backed off|ថយចេញ|Back off and give me space.|ថយចេញ ហើយទុកកន្លែងឲ្យខ្ញុំ។
bear with|bore with|borne with|អត់ធ្មត់រង់ចាំ|Please bear with me for a moment.|សូមអត់ធ្មត់រង់ចាំខ្ញុំបន្តិច។
beat up|beat up|beaten up|វាយដំ|They beat up the thief.|ពួកគេបានវាយដំចោរ។
blow out|blew out|blown out|ផ្លុំឲ្យរលត់|Blow out the candles!|ផ្លុំទៀនឲ្យរលត់!
boil over|boiled over|boiled over|ពុះហៀរ|The soup boiled over.|ស៊ុបបានពុះហៀរចេញ។
bounce back|bounced back|bounced back|ងើបឡើងវិញ|She bounced back after the illness.|នាងបានងើបឡើងវិញក្រោយពេលឈឺ។
branch out|branched out|branched out|ពង្រីកសកម្មភាព|The shop branched out into online sales.|ហាងបានពង្រីកទៅលក់តាមអនឡាញ។
break out|broke out|broken out|ផ្ទុះឡើង|A fire broke out last night.|អគ្គិភ័យបានផ្ទុះឡើងកាលពីយប់មិញ។
break through|broke through|broken through|ទម្លុះ / ឈានទៅមុខ|The sun broke through the clouds.|ព្រះអាទិត្យបានទម្លុះពពកចេញមក។
brush up on|brushed up on|brushed up on|រំលឹកឡើងវិញ (ជំនាញ)|I need to brush up on my English.|ខ្ញុំត្រូវរំលឹកភាសាអង់គ្លេសរបស់ខ្ញុំឡើងវិញ។
bump into|bumped into|bumped into|ជួបដោយចៃដន្យ|I bumped into an old friend.|ខ្ញុំបានជួបមិត្តចាស់ម្នាក់ដោយចៃដន្យ។
burn down|burned down|burned down|ឆេះអស់|The old market burned down.|ផ្សារចាស់បានឆេះអស់។
burn out|burned out|burned out|អស់កម្លាំង (ធ្វើការច្រើនពេក)|Don't work too much or you'll burn out.|កុំធ្វើការច្រើនពេក បើមិនដូច្នោះទេអ្នកនឹងអស់កម្លាំង។
call in|called in|called in|ហៅមក / ទូរស័ព្ទជូនដំណឹង|She called in sick today.|ថ្ងៃនេះនាងទូរស័ព្ទប្រាប់ថាឈឺ។
call on|called on|called on|ហៅឲ្យឆ្លើយ / ទៅលេង|The teacher called on me.|គ្រូបានហៅខ្ញុំឲ្យឆ្លើយ។
carry out|carried out|carried out|អនុវត្ត|They carried out the plan.|ពួកគេបានអនុវត្តផែនការ។
catch on|caught on|caught on|ពេញនិយម / យល់|The new game caught on quickly.|ហ្គេមថ្មីបានពេញនិយមយ៉ាងលឿន។
chill out|chilled out|chilled out|សម្រាកលំហែ|Let's chill out this weekend.|តោះសម្រាកលំហែនៅចុងសប្ដាហ៍នេះ។
chip in|chipped in|chipped in|ចូលលុយគ្នា|Everyone chipped in for the gift.|គ្រប់គ្នាបានចូលលុយគ្នាទិញកាដូ។
clear up|cleared up|cleared up|ស្រឡះ (មេឃ) / បំភ្លឺ|The sky cleared up after the rain.|មេឃបានស្រឡះក្រោយពេលភ្លៀង។
close down|closed down|closed down|បិទទ្វារ (អាជីវកម្ម)|The cinema closed down.|រោងកុនបានបិទទ្វារ។
come along|came along|come along|មកជាមួយ / រីកចម្រើន|Do you want to come along?|តើអ្នកចង់មកជាមួយទេ?
come apart|came apart|come apart|របើក / បែកចេញពីគ្នា|The old book came apart.|សៀវភៅចាស់បានរបើកចេញពីគ្នា។
come down with|came down with|come down with|ឈឺ (ជំងឺស្រាល)|I came down with a cold.|ខ្ញុំបានកើតជំងឺផ្ដាសាយ។
come forward|came forward|come forward|ចេញមុខ|A witness came forward.|សាក្សីម្នាក់បានចេញមុខ។
come out|came out|come out|ចេញផ្សាយ / ចេញមក|Her new song came out today.|បទចម្រៀងថ្មីរបស់នាងបានចេញផ្សាយថ្ងៃនេះ។
come through|came through|come through|ឆ្លងផុត / បានសម្រេច|My visa finally came through.|ទិដ្ឋាការរបស់ខ្ញុំបានចេញមកហើយនៅទីបំផុត។
cool down|cooled down|cooled down|ត្រជាក់ចុះ / ស្ងប់ចិត្ត|Let the soup cool down.|ទុកឲ្យស៊ុបត្រជាក់សិន។
cover up|covered up|covered up|លាក់បាំង|They tried to cover up the mistake.|ពួកគេបានព្យាយាមលាក់បាំងកំហុស។
crack down on|cracked down on|cracked down on|បង្ក្រាប|Police cracked down on drunk drivers.|ប៉ូលិសបានបង្ក្រាបអ្នកបើកបរស្រវឹង។
cut back|cut back|cut back|កាត់បន្ថយ (ចំណាយ)|We need to cut back on spending.|យើងត្រូវកាត់បន្ថយការចំណាយ។
cut off|cut off|cut off|ផ្ដាច់|The electricity was cut off.|ភ្លើងត្រូវបានផ្ដាច់។
cut out|cut out|cut out|កាត់ចេញ / ឈប់|Cut out the picture.|កាត់រូបភាពចេញ។
dig in|dug in|dug in|ចាប់ផ្ដើមញ៉ាំ|Dinner is ready, dig in!|អាហារពេលល្ងាចរួចរាល់ហើយ ញ៉ាំទៅ!
do up|did up|done up|ចាក់ឡេវ / ជួសជុល|Do up your jacket.|ចាក់ឡេវអាវក្រៅរបស់អ្នក។
drag on|dragged on|dragged on|អូសបន្លាយយូរ|The meeting dragged on for hours.|កិច្ចប្រជុំបានអូសបន្លាយអស់ច្រើនម៉ោង។
draw up|drew up|drawn up|រៀបចំ (ផែនការ / កិច្ចសន្យា)|We drew up a plan.|យើងបានរៀបចំផែនការមួយ។
drift off|drifted off|drifted off|ងងុយដេកលក់|I drifted off during the movie.|ខ្ញុំបានដេកលក់ពេលកំពុងមើលភាពយន្ត។
drop by|dropped by|dropped by|ចូលលេងបន្តិច|Drop by my house anytime.|ចូលលេងផ្ទះខ្ញុំពេលណាក៏បាន។
drop in|dropped in|dropped in|ចូលលេងដោយមិនបានប្រាប់មុន|My aunt dropped in yesterday.|មីងខ្ញុំបានចូលលេងម្សិលមិញ។
dry up|dried up|dried up|រីងស្ងួត|The river dried up.|ទន្លេបានរីងស្ងួត។
ease off|eased off|eased off|ស្រាល / ថយចុះ|The rain eased off.|ភ្លៀងបានស្រាលចុះ។
eat up|ate up|eaten up|ញ៉ាំឲ្យអស់|Eat up your vegetables.|ញ៉ាំបន្លែរបស់អ្នកឲ្យអស់។
fall for|fell for|fallen for|លង់ស្នេហ៍ / ចាញ់បោក|He fell for her at first sight.|គាត់បានលង់ស្នេហ៍នាងតាំងពីឃើញដំបូង។
fall out|fell out|fallen out|ឈ្លោះគ្នា / ជ្រុះ|They fell out over money.|ពួកគេបានឈ្លោះគ្នាដោយសារលុយ។
fall through|fell through|fallen through|បរាជ័យ / មិនបានសម្រេច|Our travel plans fell through.|ផែនការធ្វើដំណើររបស់យើងមិនបានសម្រេច។
fill up|filled up|filled up|ចាក់ឲ្យពេញ|Fill up the tank.|ចាក់សាំងឲ្យពេញធុង។
fit in|fit in|fit in|ចុះសម្រុង / ចូលគ្នាបាន|She fit in well at the new school.|នាងចុះសម្រុងបានល្អនៅសាលាថ្មី។
fix up|fixed up|fixed up|ជួសជុល / រៀបចំ|We fixed up the old house.|យើងបានជួសជុលផ្ទះចាស់។
flick through|flicked through|flicked through|បើកមើលរំលងៗ|I flicked through the magazine.|ខ្ញុំបានបើកមើលទស្សនាវដ្ដីរំលងៗ។
freak out|freaked out|freaked out|ភ័យស្លន់ស្លោ|She freaked out when she saw the snake.|នាងបានភ័យស្លន់ស្លោពេលឃើញពស់។
get across|got across|got across|ធ្វើឲ្យគេយល់|He couldn't get his idea across.|គាត់មិនអាចធ្វើឲ្យគេយល់គំនិតរបស់គាត់បានទេ។
get ahead|got ahead|got ahead|រីកចម្រើន / ឈានមុខ|Hard work helps you get ahead.|ការខិតខំធ្វើការជួយឲ្យអ្នករីកចម្រើន។
get around|got around|got around|ធ្វើដំណើរ / គេចវេះ|It's easy to get around by tuk-tuk.|ងាយស្រួលធ្វើដំណើរដោយតុកតុក។
get down to|got down to|got down to|ចាប់ផ្ដើមធ្វើយ៉ាងម៉ឺងម៉ាត់|Let's get down to work.|តោះចាប់ផ្ដើមធ្វើការ។
get into|got into|got into|ចូល / ចាប់អារម្មណ៍|She got into a good university.|នាងបានចូលរៀនសាកលវិទ្យាល័យល្អមួយ។
get through|got through|got through|ឆ្លងផុត / ទូរស័ព្ទចូល|We got through the hard times.|យើងបានឆ្លងផុតពេលវេលាលំបាក។
get together|got together|got together|ជួបជុំគ្នា|Let's get together on Sunday.|តោះជួបជុំគ្នានៅថ្ងៃអាទិត្យ។
give in|gave in|given in|ចុះចាញ់ / ព្រមតាម|My parents finally gave in.|ឪពុកម្ដាយខ្ញុំបានព្រមតាមនៅទីបំផុត។
give out|gave out|given out|ចែកចាយ / ខូច|They gave out free books.|ពួកគេបានចែកសៀវភៅដោយឥតគិតថ្លៃ។
go after|went after|gone after|ដេញតាម|The police went after the thief.|ប៉ូលិសបានដេញតាមចោរ។
go along with|went along with|gone along with|យល់ព្រមតាម|I'll go along with your plan.|ខ្ញុំនឹងយល់ព្រមតាមផែនការរបស់អ្នក។
go down|went down|gone down|ថយចុះ|Prices have gone down.|តម្លៃបានថយចុះ។
go for|went for|gone for|ជ្រើសរើស / ព្យាយាមយក|I'll go for the chicken.|ខ្ញុំនឹងជ្រើសរើសសាច់មាន់។
go off|went off|gone off|រោទ៍ / ផ្ទុះ / ខូច (ម្ហូប)|My alarm went off at six.|នាឡិការោទ៍របស់ខ្ញុំបានរោទ៍នៅម៉ោងប្រាំមួយ។
go up|went up|gone up|ឡើង / កើនឡើង|The price of rice went up.|តម្លៃអង្ករបានឡើង។
go without|went without|gone without|រស់ដោយគ្មាន|They went without food for a day.|ពួកគេបានអត់អាហារមួយថ្ងៃ។
grow out of|grew out of|grown out of|ធំហួស (សម្លៀកបំពាក់ / ទម្លាប់)|He grew out of his old shoes.|គាត់បានធំហួសខ្នាតស្បែកជើងចាស់។
hang around|hung around|hung around|ដើរលេងក្បែរៗ|Kids hang around the park.|ក្មេងៗដើរលេងក្បែរៗសួនច្បារ។
hang on|hung on|hung on|ចាំបន្តិច / តោងជាប់|Hang on a minute.|ចាំមួយភ្លែត។
hear from|heard from|heard from|បានដំណឹងពី|Have you heard from your brother?|តើអ្នកបានដំណឹងពីបងប្រុសរបស់អ្នកទេ?
help out|helped out|helped out|ជួយ|Can you help me out?|តើអ្នកអាចជួយខ្ញុំបានទេ?
hold back|held back|held back|ទប់ / ឃាត់|She held back her tears.|នាងបានទប់ទឹកភ្នែក។
iron out|ironed out|ironed out|ដោះស្រាយ (បញ្ហាតូចៗ)|We ironed out the problems.|យើងបានដោះស្រាយបញ្ហាតូចៗ។
jump in|jumped in|jumped in|លោតចូល / ចូលរួមភ្លាម|He jumped in to help.|គាត់បានចូលជួយភ្លាម។
keep off|kept off|kept off|កុំចូល / កុំជាន់|Keep off the grass.|កុំជាន់ស្មៅ។
keep out|kept out|kept out|មិនឲ្យចូល|Keep out! Danger!|ហាមចូល! គ្រោះថ្នាក់!
keep up with|kept up with|kept up with|តាមឲ្យទាន់|I can't keep up with the news.|ខ្ញុំតាមព័ត៌មានមិនទាន់ទេ។
kick out|kicked out|kicked out|បណ្ដេញចេញ|They kicked him out of the club.|ពួកគេបានបណ្ដេញគាត់ចេញពីក្លឹប។
knock out|knocked out|knocked out|វាយសន្លប់ / ផ្ដួល|The boxer knocked out his opponent.|អ្នកប្រដាល់បានវាយគូប្រកួតសន្លប់។
lead up to|led up to|led up to|នាំទៅដល់|The events that led up to the war.|ព្រឹត្តិការណ៍ដែលនាំទៅដល់សង្គ្រាម។
leave behind|left behind|left behind|ទុកចោល / ភ្លេចទុក|I left my bag behind.|ខ្ញុំភ្លេចកាបូបទុកនៅកន្លែងនោះ។
let out|let out|let out|បញ្ចេញ / ដោះលែង|She let out a scream.|នាងបានស្រែកឡើង។
lie down|lay down|lain down|ដេកចុះ|I need to lie down.|ខ្ញុំត្រូវដេកចុះបន្តិច។
light up|lit up|lit up|ភ្លឺស្វាង|Her face lit up when she smiled.|មុខរបស់នាងភ្លឺស្វាងពេលនាងញញឹម។
line up|lined up|lined up|តម្រង់ជួរ|Students lined up outside.|សិស្សបានតម្រង់ជួរនៅខាងក្រៅ។
live on|lived on|lived on|រស់ដោយពឹងលើ|They live on rice and fish.|ពួកគេរស់ដោយពឹងលើបាយ និងត្រី។
live up to|lived up to|lived up to|សមនឹងការរំពឹងទុក|The movie lived up to my expectations.|ភាពយន្តនេះសមនឹងការរំពឹងទុករបស់ខ្ញុំ។
lock up|locked up|locked up|ចាក់សោ / ដាក់គុក|Lock up before you leave.|ចាក់សោមុននឹងចាកចេញ។
look back|looked back|looked back|រំលឹកអតីតកាល|Looking back, I was very happy.|រំលឹកមើលទៅវិញ ខ្ញុំសប្បាយចិត្តណាស់។
look over|looked over|looked over|ពិនិត្យមើល|Can you look over my essay?|តើអ្នកអាចពិនិត្យមើលតែងសេចក្ដីរបស់ខ្ញុំបានទេ?
look through|looked through|looked through|មើលរំលងៗ / រកមើល|I looked through my old photos.|ខ្ញុំបានមើលរូបថតចាស់ៗរបស់ខ្ញុំ។
make up for|made up for|made up for|សងបំណាច់ / ទូទាត់|I'll make up for being late.|ខ្ញុំនឹងសងបំណាច់ចំពោះការមកយឺត។
miss out|missed out|missed out|ខកខាន (ឱកាស)|Don't miss out on this chance.|កុំខកខានឱកាសនេះ។
move on|moved on|moved on|បន្តទៅមុខ|It's time to move on.|ដល់ពេលបន្តទៅមុខហើយ។
nod off|nodded off|nodded off|ងងុយដេកលក់|Grandpa nodded off in his chair.|ជីតាបានដេកលក់នៅលើកៅអី។
open up|opened up|opened up|បើកចិត្ត / បើក|She finally opened up to me.|នាងបានបើកចិត្តប្រាប់ខ្ញុំនៅទីបំផុត។
opt out|opted out|opted out|ជ្រើសមិនចូលរួម|You can opt out of the program.|អ្នកអាចជ្រើសមិនចូលរួមកម្មវិធីនេះ។
pay off|paid off|paid off|សងរួច / ទទួលផល|Hard work pays off.|ការខិតខំនឹងទទួលបានផល។
pick on|picked on|picked on|ធ្វើបាប / សម្លុត|Stop picking on your sister.|ឈប់ធ្វើបាបប្អូនស្រីរបស់អ្នក។
pick out|picked out|picked out|ជ្រើសរើស|Pick out a dress you like.|ជ្រើសរើសរ៉ូបដែលអ្នកចូលចិត្ត។
pile up|piled up|piled up|គរ / កកកុញ|The dishes piled up in the sink.|ចានគរពេញក្នុងអាងលាងចាន។
play down|played down|played down|បន្ថយសារៈសំខាន់|He played down the problem.|គាត់បានបន្ថយសារៈសំខាន់នៃបញ្ហា។
pop in|popped in|popped in|ចូលលេងបន្តិច|I'll pop in to see you later.|ខ្ញុំនឹងចូលទៅលេងអ្នកបន្តិចពេលក្រោយ។
pop up|popped up|popped up|លេចឡើងភ្លាមៗ|An ad popped up on my screen.|ការផ្សាយពាណិជ្ជកម្មមួយបានលេចឡើងលើអេក្រង់ខ្ញុំ។
pull out|pulled out|pulled out|ដកចេញ / ចេញ|He pulled out of the race.|គាត់បានដកខ្លួនចេញពីការប្រណាំង។
pull over|pulled over|pulled over|ចតឡានចូលចិញ្ចើមផ្លូវ|The police told us to pull over.|ប៉ូលិសបានប្រាប់យើងឲ្យចតឡានចូលចិញ្ចើមផ្លូវ។
pull through|pulled through|pulled through|រួចជីវិត / ឆ្លងផុត|The patient pulled through.|អ្នកជំងឺបានរួចជីវិត។
pull up|pulled up|pulled up|ចត / ទាញឡើង|A taxi pulled up outside.|តាក់ស៊ីមួយបានចតនៅខាងក្រៅ។
put down|put down|put down|ដាក់ចុះ / មើលងាយ|Put down your pens.|ដាក់ប៊ិចរបស់អ្នកចុះ។
put forward|put forward|put forward|ស្នើ (គំនិត)|She put forward a new idea.|នាងបានស្នើគំនិតថ្មីមួយ។
put together|put together|put together|ផ្គុំ / រៀបចំ|We put together a team.|យើងបានរៀបចំក្រុមមួយ។
put up|put up|put up|ដំឡើង / ព្យួរ / ឲ្យស្នាក់នៅ|Put up the poster on the wall.|បិទផូស្ទ័រនៅលើជញ្ជាំង។
read out|read out|read out|អានឲ្យឮ|Read out your answer.|អានចម្លើយរបស់អ្នកឲ្យឮ។
ring up|rang up|rung up|ទូរស័ព្ទ|I'll ring you up tomorrow.|ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកនៅថ្ងៃស្អែក។
rip off|ripped off|ripped off|បោកយកលុយ (ថ្លៃពេក)|That shop ripped me off.|ហាងនោះបានបោកយកលុយខ្ញុំ។
root for|rooted for|rooted for|គាំទ្រ (ក្រុម)|We're rooting for our team.|យើងកំពុងគាំទ្រក្រុមរបស់យើង។
rule out|ruled out|ruled out|ដកចេញពីលទ្ធភាព|We can't rule out rain.|យើងមិនអាចប្រាកដថាមិនភ្លៀងទេ។
run after|ran after|run after|ដេញតាម|The dog ran after the ball.|ឆ្កែបានដេញតាមបាល់។
run through|ran through|run through|ពិនិត្យរហ័ស / ហាត់|Let's run through the plan again.|តោះពិនិត្យផែនការម្ដងទៀតរហ័សៗ។
save up|saved up|saved up|សន្សំលុយ|I'm saving up for a laptop.|ខ្ញុំកំពុងសន្សំលុយទិញកុំព្យូទ័រយួរដៃ។
sell out|sold out|sold out|លក់អស់|The tickets sold out quickly.|សំបុត្រត្រូវបានលក់អស់យ៉ាងលឿន។
send back|sent back|sent back|ផ្ញើត្រឡប់វិញ|I sent back the broken phone.|ខ្ញុំបានផ្ញើទូរស័ព្ទខូចត្រឡប់វិញ។
set aside|set aside|set aside|ទុកដាក់ឡែក|Set aside some money each month.|ទុកលុយមួយចំនួនដាក់ឡែករៀងរាល់ខែ។
set back|set back|set back|ធ្វើឲ្យយឺតយ៉ាវ|The rain set back our work.|ភ្លៀងបានធ្វើឲ្យការងាររបស់យើងយឺតយ៉ាវ។
settle in|settled in|settled in|សម្របខ្លួននៅកន្លែងថ្មី|Have you settled in at your new home?|តើអ្នកសម្របខ្លួនបាននៅផ្ទះថ្មីហើយឬនៅ?
shop around|shopped around|shopped around|ដើរប្រៀបធៀបតម្លៃ|Shop around before you buy a phone.|ដើរប្រៀបធៀបតម្លៃមុននឹងទិញទូរស័ព្ទ។
shut up|shut up|shut up|បិទមាត់ / ស្ងៀម|Please shut up and listen.|សូមស្ងៀម ហើយស្ដាប់។
sign in|signed in|signed in|ចុះឈ្មោះចូល|Sign in at the front desk.|ចុះឈ្មោះចូលនៅតុទទួលភ្ញៀវ។
sit back|sat back|sat back|អង្គុយសម្រាក|Sit back and enjoy the show.|អង្គុយសម្រាក ហើយរីករាយនឹងការសម្ដែង។
sleep in|slept in|slept in|គេងយឺត|I slept in on Sunday.|ខ្ញុំគេងយឺតនៅថ្ងៃអាទិត្យ។
sleep over|slept over|slept over|គេងនៅផ្ទះគេ|My cousin slept over last night.|បងប្អូនជីដូនមួយរបស់ខ្ញុំបានគេងនៅផ្ទះខ្ញុំកាលពីយប់មិញ។
slip up|slipped up|slipped up|ធ្វើខុស|I slipped up on the last question.|ខ្ញុំបានធ្វើខុសនៅសំណួរចុងក្រោយ។
speed up|sped up|sped up|បង្កើនល្បឿន|Speed up, we're late!|បង្កើនល្បឿន យើងយឺតហើយ!
split up|split up|split up|បែកគ្នា / ចែកគ្នា|Let's split up into groups.|តោះចែកគ្នាជាក្រុមៗ។
stand by|stood by|stood by|ត្រៀមខ្លួន / គាំទ្រ|I'll stand by you.|ខ្ញុំនឹងនៅក្បែរគាំទ្រអ្នក។
stand for|stood for|stood for|តំណាងឲ្យ / មកពីពាក្យ|What does "UN" stand for?|តើ «UN» មកពីពាក្យអ្វី?
stand up for|stood up for|stood up for|ការពារ (សិទ្ធិ)|Stand up for your rights.|ការពារសិទ្ធិរបស់អ្នក។
start over|started over|started over|ចាប់ផ្ដើមម្ដងទៀត|Let's start over from the beginning.|តោះចាប់ផ្ដើមម្ដងទៀតពីដំបូង។
step down|stepped down|stepped down|លាលែងពីតំណែង|The director stepped down.|នាយកបានលាលែងពីតំណែង។
step in|stepped in|stepped in|ចូលជួយ / អន្តរាគមន៍|The teacher stepped in to stop the fight.|គ្រូបានចូលទៅបញ្ឈប់ការវាយគ្នា។
stick to|stuck to|stuck to|ប្រកាន់ខ្ជាប់|Stick to your plan.|ប្រកាន់ខ្ជាប់ផែនការរបស់អ្នក។
stick out|stuck out|stuck out|លយចេញ / លេចធ្លោ|Don't stick out your tongue.|កុំលៀនអណ្ដាត។
sum up|summed up|summed up|សង្ខេប|Let me sum up the main points.|ខ្ញុំសូមសង្ខេបចំណុចសំខាន់ៗ។
switch off|switched off|switched off|បិទ|Switch off your phone in class.|បិទទូរស័ព្ទរបស់អ្នកក្នុងថ្នាក់។
switch on|switched on|switched on|បើក|Switch on the fan.|បើកកង្ហារ។
take apart|took apart|taken apart|ដោះគ្រឿង|He took apart the radio.|គាត់បានដោះគ្រឿងវិទ្យុ។
take down|took down|taken down|ដោះចុះ / កត់ត្រា|Take down the old posters.|ដោះផូស្ទ័រចាស់ៗចុះ។
take in|took in|taken in|ទទួលយក / យល់|It's a lot of information to take in.|វាជាព័ត៌មានច្រើនណាស់ដែលត្រូវយល់។
take on|took on|taken on|ទទួលធ្វើ / ជួល|She took on extra work.|នាងបានទទួលធ្វើការងារបន្ថែម។
take out|took out|taken out|យកចេញ|Take out the trash.|យកសំរាមទៅចោល។
talk into|talked into|talked into|បញ្ចុះបញ្ចូលឲ្យធ្វើ|She talked me into joining the club.|នាងបានបញ្ចុះបញ្ចូលខ្ញុំឲ្យចូលក្លឹប។
talk over|talked over|talked over|ពិភាក្សា|Let's talk it over at lunch.|តោះពិភាក្សារឿងនេះនៅពេលអាហារថ្ងៃត្រង់។
tear down|tore down|torn down|រុះរើ|They tore down the old school.|ពួកគេបានរុះរើសាលាចាស់។
tear up|tore up|torn up|ហែកចោល|She tore up the letter.|នាងបានហែកសំបុត្រចោល។
think ahead|thought ahead|thought ahead|គិតទុកមុន|Always think ahead.|ត្រូវគិតទុកមុនជានិច្ច។
throw up|threw up|thrown up|ក្អួត|He threw up after the boat ride.|គាត់បានក្អួតក្រោយពេលជិះទូក។
tie up|tied up|tied up|ចង / រវល់|Tie up the dog.|ចងឆ្កែ។
top up|topped up|topped up|បញ្ចូលលុយ (ទូរស័ព្ទ)|I need to top up my phone.|ខ្ញុំត្រូវបញ្ចូលលុយទូរស័ព្ទ។
track down|tracked down|tracked down|តាមរកឃើញ|Police tracked down the thief.|ប៉ូលិសបានតាមរកឃើញចោរ។
trade in|traded in|traded in|ដូរយករបស់ថ្មី|I traded in my old phone.|ខ្ញុំបានដូរទូរស័ព្ទចាស់យកថ្មី។
turn back|turned back|turned back|ត្រឡប់ក្រោយ|We turned back because of the rain.|យើងបានត្រឡប់ក្រោយដោយសារភ្លៀង។
turn in|turned in|turned in|ប្រគល់ / ចូលគេង|Turn in your report by Friday.|ប្រគល់របាយការណ៍របស់អ្នកមុនថ្ងៃសុក្រ។
turn out|turned out|turned out|ប្រែជា / លទ្ធផលចេញមក|It turned out to be a great day.|វាប្រែជាថ្ងៃដ៏ល្អមួយ។
turn over|turned over|turned over|បង្វិល / ត្រឡប់|Turn over the page.|ត្រឡប់ទំព័រ។
walk out|walked out|walked out|ដើរចេញ (ដោយខឹង)|He walked out of the meeting.|គាត់បានដើរចេញពីកិច្ចប្រជុំ។
watch out|watched out|watched out|ប្រយ័ត្ន|Watch out for snakes.|ប្រយ័ត្នពស់។
wear off|wore off|worn off|អស់ឥទ្ធិពល|The medicine wore off.|ថ្នាំបានអស់ឥទ្ធិពល។
wind down|wound down|wound down|សម្រាកបន្តិចម្ដងៗ|I read a book to wind down.|ខ្ញុំអានសៀវភៅដើម្បីសម្រាកចិត្ត។
wipe out|wiped out|wiped out|បំផ្លាញអស់|The flood wiped out the crops.|ទឹកជំនន់បានបំផ្លាញដំណាំអស់។
wrap up|wrapped up|wrapped up|បញ្ចប់ / រុំ|Let's wrap up the meeting.|តោះបញ្ចប់កិច្ចប្រជុំ។
write off|wrote off|written off|លុបចោល / ចាត់ទុកថាខូច|The car was written off after the crash.|ឡានត្រូវបានចាត់ទុកថាខូចទាំងស្រុងក្រោយការបុក។
write up|wrote up|written up|សរសេររបាយការណ៍|Write up your notes after class.|សរសេរកំណត់ត្រារបស់អ្នកក្រោយម៉ោងរៀន។
zone out|zoned out|zoned out|វង្វេងស្មារតី / គិតរវើរវាយ|I zoned out during the lecture.|ខ្ញុំគិតរវើរវាយពេលកំពុងស្ដាប់ការបង្រៀន។
back out|backed out|backed out|ដកខ្លួន (ពីការសន្យា)|He backed out of the deal.|គាត់បានដកខ្លួនចេញពីកិច្ចព្រមព្រៀង។
bring about|brought about|brought about|បង្កឲ្យមាន|Technology brought about big changes.|បច្ចេកវិទ្យាបានបង្កឲ្យមានការផ្លាស់ប្ដូរធំៗ។
bring back|brought back|brought back|នាំមកវិញ / រំលឹក|This song brings back memories.|បទចម្រៀងនេះរំលឹកអនុស្សាវរីយ៍។
bring down|brought down|brought down|បន្ថយ / ផ្ដួល|The new law brought down prices.|ច្បាប់ថ្មីបានបន្ថយតម្លៃ។
bring in|brought in|brought in|នាំចូល / រកចំណូល|The festival brings in many tourists.|ពិធីបុណ្យនាំភ្ញៀវទេសចរជាច្រើនចូលមក។
bring out|brought out|brought out|ចេញផ្សាយ / បង្ហាញ|The company brought out a new model.|ក្រុមហ៊ុនបានចេញម៉ូដែលថ្មីមួយ។
call up|called up|called up|ទូរស័ព្ទ / ហៅ|Call me up when you arrive.|ទូរស័ព្ទមកខ្ញុំនៅពេលអ្នកមកដល់។
check up on|checked up on|checked up on|តាមដានពិនិត្យ|The nurse checked up on the patient.|គិលានុបដ្ឋាយិកាបានតាមដានពិនិត្យអ្នកជំងឺ។
come about|came about|come about|កើតឡើង|How did the accident come about?|តើគ្រោះថ្នាក់កើតឡើងដោយរបៀបណា?
come down|came down|come down|ចុះមក / ថយចុះ|Come down from the tree!|ចុះពីលើដើមឈើមក!
come off|came off|come off|របូត / ជោគជ័យ|A button came off my shirt.|ឡេវមួយបានរបូតពីអាវរបស់ខ្ញុំ។
crop up|cropped up|cropped up|កើតឡើងភ្លាមៗ (បញ្ហា)|A problem cropped up at work.|បញ្ហាមួយបានកើតឡើងភ្លាមៗនៅកន្លែងធ្វើការ។
cry out|cried out|cried out|ស្រែកឡើង|She cried out in pain.|នាងបានស្រែកឡើងដោយការឈឺចាប់។
do away with|did away with|done away with|លុបបំបាត់|They did away with the old rules.|ពួកគេបានលុបបំបាត់ច្បាប់ចាស់ៗ។
fall off|fell off|fallen off|ធ្លាក់ពី|He fell off his bike.|គាត់បានធ្លាក់ពីកង់។
get on with|got on with|got on with|បន្តធ្វើ / ចុះសម្រុង|Get on with your work.|បន្តធ្វើការងាររបស់អ្នក។
give off|gave off|given off|បញ្ចេញ (ក្លិន / កំដៅ)|The flowers give off a sweet smell.|ផ្កាបញ្ចេញក្លិនក្រអូប។
head back|headed back|headed back|ត្រឡប់ទៅវិញ|We headed back to the hotel.|យើងបានត្រឡប់ទៅសណ្ឋាគារវិញ។
hit back|hit back|hit back|វាយតប / ឆ្លើយតប|He hit back at his critics.|គាត់បានឆ្លើយតបទៅអ្នករិះគន់។
hold off|held off|held off|ពន្យារ / មិនទាន់ធ្វើ|The rain held off until evening.|ភ្លៀងមិនទាន់ធ្លាក់រហូតដល់ល្ងាច។
kick in|kicked in|kicked in|ចាប់ផ្ដើមមានឥទ្ធិពល|The medicine kicked in quickly.|ថ្នាំបានចាប់ផ្ដើមមានឥទ្ធិពលយ៉ាងលឿន។
knock over|knocked over|knocked over|ទង្គិចឲ្យដួល|The cat knocked over the vase.|ឆ្មាបានទង្គិចឲ្យថូផ្កាដួល។
lag behind|lagged behind|lagged behind|យឺតជាងគេ|Our town lags behind in technology.|ក្រុងរបស់យើងយឺតជាងគេផ្នែកបច្ចេកវិទ្យា។
laugh at|laughed at|laughed at|សើចចំអក|Don't laugh at other people's mistakes.|កុំសើចចំអកកំហុសរបស់អ្នកដទៃ។
let go of|let go of|let go of|លែងដៃ / បំភ្លេច|Let go of my hand.|លែងដៃខ្ញុំ។
look ahead|looked ahead|looked ahead|មើលទៅមុខ (អនាគត)|We need to look ahead to next year.|យើងត្រូវមើលទៅឆ្នាំក្រោយ។
mess up|messed up|messed up|ធ្វើឲ្យរញ៉េរញ៉ៃ / ធ្វើខុស|I messed up the test.|ខ្ញុំបានធ្វើតេស្តខុសច្រើន។
own up|owned up|owned up|សារភាព|He owned up to breaking the window.|គាត់បានសារភាពថាគាត់បានបំបែកបង្អួច។
pass by|passed by|passed by|ដើរកាត់|I pass by the market every day.|ខ្ញុំដើរកាត់ផ្សាររៀងរាល់ថ្ងៃ។
pass on|passed on|passed on|បញ្ជូនបន្ត|Please pass on the message.|សូមបញ្ជូនសារនេះបន្ត។
pay for|paid for|paid for|បង់ថ្លៃ|Who will pay for dinner?|តើនរណានឹងបង់ថ្លៃអាហារពេលល្ងាច?
run down|ran down|run down|អស់ថ្ម / និយាយអាក្រក់|My phone battery ran down.|ថ្មទូរស័ព្ទខ្ញុំអស់។
sail through|sailed through|sailed through|ឆ្លងផុតយ៉ាងងាយ|She sailed through the exam.|នាងបានប្រឡងជាប់យ៉ាងងាយ។
set out|set out|set out|ចេញដំណើរ / ចាប់ផ្ដើម|We set out at dawn.|យើងបានចេញដំណើរនៅពេលព្រលឹម។
show around|showed around|shown around|នាំដើរមើល|Let me show you around the school.|ទុកឲ្យខ្ញុំនាំអ្នកដើរមើលសាលា។
sit up|sat up|sat up|អង្គុយឲ្យត្រង់|Sit up straight.|អង្គុយឲ្យត្រង់។
stand back|stood back|stood back|ថយក្រោយ|Stand back from the edge.|ថយក្រោយពីគែម។
stay in|stayed in|stayed in|នៅផ្ទះ|Let's stay in tonight.|យប់នេះតោះនៅផ្ទះ។
stay out|stayed out|stayed out|នៅក្រៅផ្ទះ (យប់)|Don't stay out too late.|កុំនៅក្រៅផ្ទះយឺតពេក។
stop by|stopped by|stopped by|ចូលលេងបន្តិច|Stop by the shop on your way home.|ចូលហាងបន្តិចពេលអ្នកត្រឡប់ទៅផ្ទះ។
take away|took away|taken away|យកចេញ / ខ្ចប់យកទៅ|Take away the dishes.|យកចានចេញ។
tune in|tuned in|tuned in|បើកមើល / ស្ដាប់ (កម្មវិធី)|Tune in at 8 pm for the news.|បើកមើលព័ត៌មាននៅម៉ោង ៨ យប់។
walk away|walked away|walked away|ដើរចេញ|He just walked away.|គាត់គ្រាន់តែដើរចេញទៅ។
account for|accounted for|accounted for|ពន្យល់ / មានចំនួន|Women account for half of our staff.|ស្ត្រីមានចំនួនពាក់កណ្ដាលនៃបុគ្គលិករបស់យើង។
act on|acted on|acted on|ធ្វើតាម (ដំបូន្មាន)|She acted on my advice.|នាងបានធ្វើតាមដំបូន្មានរបស់ខ្ញុំ។
aim at|aimed at|aimed at|តម្រង់ទៅ / មានគោលដៅ|This app is aimed at students.|App នេះមានគោលដៅសម្រាប់សិស្ស។
allow for|allowed for|allowed for|គិតទុកជាមុន|Allow for traffic when you plan.|គិតទុកជាមុនពីចរាចរណ៍ពេលអ្នករៀបចំផែនការ។
answer back|answered back|answered back|តមាត់ (ឈ្លើយ)|Don't answer back to your teacher.|កុំតមាត់ជាមួយគ្រូរបស់អ្នក។
ask for|asked for|asked for|សុំ|He asked for help.|គាត់បានសុំជំនួយ។
attend to|attended to|attended to|យកចិត្តទុកដាក់ / បម្រើ|A nurse attended to the patient.|គិលានុបដ្ឋាយិកាម្នាក់បានមើលថែអ្នកជំងឺ។
back away|backed away|backed away|ថយក្រោយ (ដោយខ្លាច)|She backed away from the dog.|នាងបានថយក្រោយចេញពីឆ្កែ។
bail out|bailed out|bailed out|ជួយសង្គ្រោះ (ហិរញ្ញវត្ថុ)|The government bailed out the bank.|រដ្ឋាភិបាលបានជួយសង្គ្រោះធនាគារ។
black out|blacked out|blacked out|សន្លប់ / ដាច់ភ្លើង|He blacked out for a moment.|គាត់បានសន្លប់មួយភ្លែត។
blend in|blended in|blended in|ចូលគ្នាបានល្អ|The new student blended in quickly.|សិស្សថ្មីបានចុះសម្រុងយ៉ាងលឿន។
blow over|blew over|blown over|ស្ងប់ / កន្លងផុត|The storm blew over.|ព្យុះបានកន្លងផុតទៅ។
boil down to|boiled down to|boiled down to|សរុបមកគឺ|It all boils down to money.|សរុបមកគឺរឿងលុយ។
bottle up|bottled up|bottled up|ទប់ទុកក្នុងចិត្ត|Don't bottle up your feelings.|កុំទប់អារម្មណ៍ទុកក្នុងចិត្ត។
break away|broke away|broken away|ផ្ដាច់ខ្លួន / រត់ចេញ|The puppy broke away from its owner.|កូនឆ្កែបានរត់ចេញពីម្ចាស់។
break off|broke off|broken off|បំបាក់ / បញ្ឈប់|She broke off a piece of bread.|នាងបានកាច់នំប៉័ងមួយដុំ។
breeze through|breezed through|breezed through|ធ្វើបានយ៉ាងងាយ|He breezed through the test.|គាត់បានធ្វើតេស្តយ៉ាងងាយ។
bring along|brought along|brought along|យកមកជាមួយ|Bring along your friends.|នាំមិត្តភក្តិរបស់អ្នកមកជាមួយ។
bring forward|brought forward|brought forward|ផ្លាស់ឲ្យមុនពេល|The meeting was brought forward to Monday.|កិច្ចប្រជុំត្រូវបានផ្លាស់មកថ្ងៃច័ន្ទ។
bring on|brought on|brought on|បណ្ដាលឲ្យ|Stress can bring on a headache.|ភាពតានតឹងអាចបណ្ដាលឲ្យឈឺក្បាល។
bring together|brought together|brought together|នាំមកជុំគ្នា|Music brings people together.|តន្ត្រីនាំមនុស្សឲ្យជុំគ្នា។
brush off|brushed off|brushed off|មិនអើពើ / ជូតចេញ|She brushed off his comments.|នាងមិនអើពើនឹងមតិរបស់គាត់។
buckle up|buckled up|buckled up|ពាក់ខ្សែក្រវាត់|Buckle up before we go.|ពាក់ខ្សែក្រវាត់មុនពេលយើងចេញដំណើរ។
build up|built up|built up|កសាង / កើនឡើង|Build up your confidence.|កសាងទំនុកចិត្តរបស់អ្នក។
bundle up|bundled up|bundled up|ស្លៀកពាក់ក្រាស់|Bundle up, it's cold outside.|ស្លៀកពាក់ឲ្យក្រាស់ ខាងក្រៅត្រជាក់។
burst into|burst into|burst into|ផ្ទុះ (យំ / សើច) ភ្លាមៗ|She burst into tears.|នាងបានយំឡើងភ្លាមៗ។
burst out|burst out|burst out|ផ្ទុះ (សំណើច)|They burst out laughing.|ពួកគេបានផ្ទុះសំណើចឡើង។
call for|called for|called for|តម្រូវ / អំពាវនាវ|This calls for a celebration!|រឿងនេះត្រូវតែអបអរ!
call out|called out|called out|ស្រែកហៅ / រិះគន់|The teacher called out my name.|គ្រូបានស្រែកហៅឈ្មោះខ្ញុំ។
care for|cared for|cared for|មើលថែ|She cares for her sick mother.|នាងមើលថែម្ដាយដែលឈឺ។
carry over|carried over|carried over|ផ្ទេរបន្ត|Unused days carry over to next year.|ថ្ងៃដែលមិនបានប្រើត្រូវបានផ្ទេរបន្តទៅឆ្នាំក្រោយ។
cave in|caved in|caved in|បាក់ស្រុត / ព្រមចុះចាញ់|The roof caved in.|ដំបូលបានបាក់ស្រុត។
change into|changed into|changed into|ប្ដូរ (សម្លៀកបំពាក់)|Change into your uniform.|ប្ដូរទៅពាក់ឯកសណ្ឋានរបស់អ្នក។
check off|checked off|checked off|គូសធីក|Check off each task when done.|គូសធីកលើកិច្ចការនីមួយៗពេលធ្វើរួច។
chicken out|chickened out|chickened out|ខ្លាចមិនហ៊ានធ្វើ|He chickened out of the jump.|គាត់បានខ្លាចមិនហ៊ានលោត។
clam up|clammed up|clammed up|ស្ងៀមមិននិយាយ|She clammed up when I asked.|នាងស្ងៀមមិននិយាយពេលខ្ញុំសួរ។
clear out|cleared out|cleared out|សម្អាតចេញ|Clear out the old boxes.|សម្អាតប្រអប់ចាស់ៗចេញ។
clock in|clocked in|clocked in|ស្កេនចូលធ្វើការ|Workers clock in at eight.|កម្មករស្កេនចូលធ្វើការម៉ោងប្រាំបី។
clock out|clocked out|clocked out|ស្កេនចេញពីការងារ|I clocked out at five.|ខ្ញុំស្កេនចេញពីការងារម៉ោងប្រាំ។
close in|closed in|closed in|ខិតចូលជិត|Night was closing in.|យប់កំពុងខិតជិតមកដល់។
come by|came by|come by|រកបាន / ចូលលេង|Good jobs are hard to come by.|ការងារល្អពិបាករកណាស់។
come into|came into|come into|ទទួលបាន (មរតក)|She came into some money.|នាងបានទទួលលុយមួយចំនួន។
come under|came under|come under|រងនូវ|The plan came under attack.|ផែនការនេះត្រូវបានគេរិះគន់។
cool off|cooled off|cooled off|ត្រជាក់ចិត្ត / ត្រជាក់ខ្លួន|We swam to cool off.|យើងបានហែលទឹកដើម្បីឲ្យត្រជាក់ខ្លួន។
cough up|coughed up|coughed up|បង់លុយ (ដោយមិនចង់)|He had to cough up $50.|គាត់ត្រូវបង់ ៥០ ដុល្លារ។
count down|counted down|counted down|រាប់ថយក្រោយ|We counted down to the new year.|យើងបានរាប់ថយក្រោយដើម្បីចូលឆ្នាំថ្មី។
cover for|covered for|covered for|ធ្វើការជំនួស / លាក់ឲ្យ|Can you cover for me tomorrow?|តើអ្នកអាចធ្វើការជំនួសខ្ញុំថ្ងៃស្អែកបានទេ?
crack up|cracked up|cracked up|សើចខ្លាំង|We cracked up at his joke.|យើងបានសើចខ្លាំងនឹងរឿងកំប្លែងរបស់គាត់។
creep up on|crept up on|crept up on|លបចូលជិត|Old age creeps up on you.|ភាពចាស់មកដល់ដោយមិនដឹងខ្លួន។
cross off|crossed off|crossed off|គូសចេញពីបញ្ជី|Cross off the items you bought.|គូសចេញនូវរបស់ដែលអ្នកបានទិញរួច។
cut in|cut in|cut in|កាត់សម្ដី / កាត់មុខ|Don't cut in while I'm talking.|កុំកាត់សម្ដីពេលខ្ញុំកំពុងនិយាយ។
cut up|cut up|cut up|ហាន់ជាដុំៗ|Cut up the vegetables.|ហាន់បន្លែជាដុំៗ។
dash off|dashed off|dashed off|ប្រញាប់ចេញ / សរសេររហ័ស|She dashed off to catch the bus.|នាងបានប្រញាប់ចេញទៅទាន់ឡានក្រុង។
die down|died down|died down|ស្ងប់ / ស្រាលចុះ|The wind died down.|ខ្យល់បានស្ងប់ចុះ។
die out|died out|died out|ផុតពូជ / បាត់បង់|Dinosaurs died out long ago.|សត្វដាយណូស័របានផុតពូជយូរមកហើយ។
dive in|dived in|dived in|ចាប់ផ្ដើមភ្លាម|Food's ready, dive in!|ម្ហូបរួចហើយ ញ៉ាំភ្លាមទៅ!
doze off|dozed off|dozed off|ងងុយដេកលក់|I dozed off on the bus.|ខ្ញុំបានដេកលក់នៅលើឡានក្រុង។
drag out|dragged out|dragged out|អូសបន្លាយ|Don't drag out the meeting.|កុំអូសបន្លាយកិច្ចប្រជុំ។
draw on|drew on|drawn on|ប្រើប្រាស់ (បទពិសោធន៍)|She drew on her experience.|នាងបានប្រើប្រាស់បទពិសោធន៍របស់នាង។
dream up|dreamed up|dreamed up|ប្រឌិតគំនិត|He dreamed up a crazy plan.|គាត់បានប្រឌិតផែនការដ៏ចម្លែកមួយ។
drink up|drank up|drunk up|ផឹកឲ្យអស់|Drink up your milk.|ផឹកទឹកដោះគោឲ្យអស់។
drive off|drove off|driven off|បើកឡានចេញ|He drove off without saying goodbye.|គាត់បានបើកឡានចេញដោយមិននិយាយលា។
drown out|drowned out|drowned out|លុបសំឡេង|The music drowned out our voices.|តន្ត្រីបានលុបសំឡេងរបស់យើង។
dry off|dried off|dried off|ជូតឲ្យស្ងួត|Dry off with a towel.|ជូតខ្លួនឲ្យស្ងួតដោយកន្សែង។
dust off|dusted off|dusted off|ជូតធូលី / យកមកប្រើវិញ|He dusted off his old guitar.|គាត់បានយកហ្គីតាចាស់មកលេងវិញ។
end in|ended in|ended in|បញ្ចប់ដោយ|The match ended in a draw.|ការប្រកួតបានបញ្ចប់ដោយលទ្ធផលស្មើ។
face up to|faced up to|faced up to|ទទួលស្គាល់ និងប្រឈមមុខ|Face up to your problems.|ប្រឈមមុខនឹងបញ្ហារបស់អ្នក។
fade away|faded away|faded away|រសាត់បាត់|The music faded away.|តន្ត្រីបានរសាត់បាត់បន្តិចម្ដងៗ។
fall back on|fell back on|fallen back on|ពឹងលើ (ពេលអាសន្ន)|We have savings to fall back on.|យើងមានប្រាក់សន្សំសម្រាប់ពឹងពេលអាសន្ន។
feel up to|felt up to|felt up to|មានកម្លាំងល្មមធ្វើ|I don't feel up to going out.|ខ្ញុំមិនមានកម្លាំងល្មមចេញទៅក្រៅទេ។
fend off|fended off|fended off|ការពារ / ទប់|She fended off the attack.|នាងបានទប់ការវាយប្រហារ។
fight back|fought back|fought back|តទល់ / ទប់|She fought back tears.|នាងបានទប់ទឹកភ្នែក។
fill in for|filled in for|filled in for|ធ្វើជំនួស|I filled in for the sick teacher.|ខ្ញុំបានបង្រៀនជំនួសគ្រូដែលឈឺ។
fizzle out|fizzled out|fizzled out|រលាយបាត់បន្តិចម្ដងៗ|Their friendship fizzled out.|មិត្តភាពរបស់ពួកគេបានរសាត់បាត់បន្តិចម្ដងៗ។
flare up|flared up|flared up|ផ្ទុះឡើងវិញ|The fighting flared up again.|ការប្រយុទ្ធបានផ្ទុះឡើងវិញ។
fly by|flew by|flown by|កន្លងផុតយ៉ាងលឿន|The holidays flew by.|ថ្ងៃឈប់សម្រាកបានកន្លងផុតយ៉ាងលឿន។
follow up|followed up|followed up|តាមដានបន្ត|I'll follow up with an email.|ខ្ញុំនឹងតាមដានបន្តតាមអ៊ីមែល។
fool around|fooled around|fooled around|លេងសើច / មិនម៉ឺងម៉ាត់|Stop fooling around and study.|ឈប់លេងសើច ហើយរៀនទៅ។
gear up|geared up|geared up|ត្រៀមខ្លួន|We're gearing up for the exam.|យើងកំពុងត្រៀមខ្លួនសម្រាប់ការប្រឡង។
get at|got at|got at|ចង់និយាយ / ទៅដល់|What are you getting at?|តើអ្នកចង់និយាយអ្វី?
get away with|got away with|got away with|រួចខ្លួន (ពីទោស)|He got away with cheating.|គាត់បានបន្លំ ហើយរួចខ្លួនពីការដាក់ទោស។
get behind|got behind|got behind|យឺតពេល / គាំទ្រ|I got behind with my work.|ខ្ញុំធ្វើការយឺតជាងគ្រោងទុក។
get down|got down|got down|ចុះ / ធ្វើឲ្យធ្លាក់ទឹកចិត្ត|The rain gets me down.|ភ្លៀងធ្វើឲ្យខ្ញុំធ្លាក់ទឹកចិត្ត។
get out of|got out of|got out of|គេចពី (កិច្ចការ)|He got out of doing the dishes.|គាត់បានគេចពីការលាងចាន។
get round to|got round to|got round to|មានពេលធ្វើ (ទីបំផុត)|I finally got round to cleaning my room.|ទីបំផុតខ្ញុំមានពេលសម្អាតបន្ទប់ខ្ញុំ។
give up on|gave up on|given up on|អស់សង្ឃឹមលើ|Don't give up on your dreams.|កុំអស់សង្ឃឹមលើក្ដីស្រមៃរបស់អ្នក។
go about|went about|gone about|ចាប់ផ្ដើមធ្វើ|How do I go about applying?|តើខ្ញុំត្រូវចាប់ផ្ដើមដាក់ពាក្យយ៉ាងដូចម្ដេច?
go against|went against|gone against|ប្រឆាំងនឹង|It goes against my beliefs.|វាប្រឆាំងនឹងជំនឿរបស់ខ្ញុំ។
go back on|went back on|gone back on|មិនធ្វើតាមការសន្យា|Don't go back on your word.|កុំក្បត់ពាក្យសន្យារបស់អ្នក។
go by|went by|gone by|កន្លងផុត|Time goes by quickly.|ពេលវេលាកន្លងផុតយ៉ាងលឿន។
go into|went into|gone into|ចូល / ពិភាក្សាលម្អិត|She went into teaching.|នាងបានចូលប្រកបវិជ្ជាជីវៈជាគ្រូបង្រៀន។
go out with|went out with|gone out with|ណាត់ជួប / ស្រឡាញ់គ្នា|He's going out with my sister.|គាត់កំពុងស្រឡាញ់ជាមួយបងស្រីខ្ញុំ។
go through with|went through with|gone through with|ធ្វើរហូតដល់ចប់|She went through with the plan.|នាងបានធ្វើផែនការរហូតដល់ចប់។
go together|went together|gone together|សមគ្នា|These colors go together well.|ពណ៌ទាំងនេះសមគ្នាណាស់។
go under|went under|gone under|ក្ស័យធន / លិច|The company went under.|ក្រុមហ៊ុនបានក្ស័យធន។
grow apart|grew apart|grown apart|ឃ្លាតឆ្ងាយពីគ្នា|We grew apart after school.|យើងបានឃ្លាតឆ្ងាយពីគ្នាក្រោយបញ្ចប់ការសិក្សា។
grow on|grew on|grown on|ចាប់ចូលចិត្តបន្តិចម្ដងៗ|This song is growing on me.|ខ្ញុំចាប់ផ្ដើមចូលចិត្តបទនេះបន្តិចម្ដងៗ។
hand down|handed down|handed down|បន្តឲ្យជំនាន់ក្រោយ|This ring was handed down from my grandmother.|ចិញ្ចៀននេះត្រូវបានបន្តពីយាយរបស់ខ្ញុំ។
head for|headed for|headed for|ធ្វើដំណើរឆ្ពោះទៅ|We headed for the beach.|យើងបានធ្វើដំណើរឆ្ពោះទៅឆ្នេរ។
head off|headed off|headed off|ចេញដំណើរ / ទប់ស្កាត់|I'm heading off now.|ខ្ញុំចេញដំណើរឥឡូវហើយ។
heat up|heated up|heated up|កម្ដៅ / ក្ដៅឡើង|Heat up the leftovers.|កម្ដៅម្ហូបដែលសល់។
hold onto|held onto|held onto|តោងជាប់ / រក្សាទុក|Hold onto the rail.|តោងរបងឲ្យជាប់។
hold out|held out|held out|ហុច / ស៊ូទ្រាំ|She held out her hand.|នាងបានលាតដៃមក។
hook up|hooked up|hooked up|ភ្ជាប់|Hook up the speakers to the TV.|ភ្ជាប់ឧបករណ៍បំពងសំឡេងទៅទូរទស្សន៍។
hunt down|hunted down|hunted down|តាមរកឲ្យឃើញ|They hunted down the best price.|ពួកគេបានតាមរកតម្លៃល្អបំផុត។
jot down|jotted down|jotted down|កត់ខ្លីៗ|Jot down your ideas.|កត់គំនិតរបស់អ្នកខ្លីៗ។
keep down|kept down|kept down|រក្សាឲ្យទាប|Keep your voice down.|និយាយតិចៗ។
keep to|kept to|kept to|ប្រកាន់ខ្ជាប់|Keep to the left.|បើកនៅខាងឆ្វេង។
kick back|kicked back|kicked back|សម្រាកលំហែ|Kick back and relax.|សម្រាកលំហែឲ្យស្រួល។
knock off|knocked off|knocked off|ឈប់ធ្វើការ / ទម្លាក់|We knock off at five.|យើងឈប់ធ្វើការនៅម៉ោងប្រាំ។
lash out|lashed out|lashed out|ខឹងវាយប្រហារ / ស្ដីឲ្យ|He lashed out at his friends.|គាត់បានខឹងស្ដីឲ្យមិត្តភក្តិ។
lay out|laid out|laid out|រៀបចំ / លាត|Lay out the plan clearly.|រៀបចំផែនការឲ្យច្បាស់លាស់។
let off|let off|let off|អត់ទោសឲ្យ / បាញ់ (កាំជ្រួច)|The teacher let him off with a warning.|គ្រូបានអត់ទោសឲ្យគាត់ដោយគ្រាន់តែព្រមាន។
lie around|lay around|lain around|ដេកលេង / ទុកចោលរាយប៉ាយ|Don't leave your clothes lying around.|កុំទុកសម្លៀកបំពាក់ចោលរាយប៉ាយ។
lift off|lifted off|lifted off|ហោះឡើង|The rocket lifted off.|រ៉ុក្កែតបានហោះឡើង។
lighten up|lightened up|lightened up|កុំម៉ឺងម៉ាត់ពេក|Lighten up, it's just a game.|កុំម៉ឺងម៉ាត់ពេក វាគ្រាន់តែជាហ្គេម។
link up|linked up|linked up|ភ្ជាប់ / ជួបគ្នា|Let's link up after class.|តោះជួបគ្នាក្រោយម៉ោងរៀន។
listen in|listened in|listened in|លួចស្ដាប់|Don't listen in on our call.|កុំលួចស្ដាប់ការហៅទូរស័ព្ទរបស់យើង។
live with|lived with|lived with|រស់នៅជាមួយ / ទទួលយក|I live with my grandparents.|ខ្ញុំរស់នៅជាមួយជីដូនជីតា។
liven up|livened up|livened up|ធ្វើឲ្យរស់រវើក|Music livened up the party.|តន្ត្រីធ្វើឲ្យពិធីជប់លៀងរស់រវើក។
load up|loaded up|loaded up|ផ្ទុកឲ្យពេញ|Load up the car.|ផ្ទុកឥវ៉ាន់ឡើងឡានឲ្យពេញ។
lock out|locked out|locked out|ជាប់សោនៅខាងក្រៅ|I locked myself out of the house.|ខ្ញុំជាប់សោនៅខាងក្រៅផ្ទះ។
log on|logged on|logged on|ចូលប្រព័ន្ធ|Log on to the website.|ចូលទៅក្នុងវេបសាយ។
look in on|looked in on|looked in on|ចូលមើល (សួរសុខទុក្ខ)|I'll look in on Grandma.|ខ្ញុំនឹងចូលទៅសួរសុខទុក្ខយាយ។
look on|looked on|looked on|ឈរមើល|People looked on as he sang.|មនុស្សឈរមើលពេលគាត់ច្រៀង។
look out for|looked out for|looked out for|ប្រយ័ត្ន / មើលថែ|Look out for each other.|មើលថែគ្នាទៅវិញទៅមក។
loosen up|loosened up|loosened up|បន្ធូរអារម្មណ៍|Loosen up and have fun.|បន្ធូរអារម្មណ៍ ហើយសប្បាយ។
make for|made for|made for|ធ្វើដំណើរទៅ / បង្កើត|They made for the exit.|ពួកគេបានធ្វើដំណើរទៅច្រកចេញ។
make of|made of|made of|យល់ / គិតយ៉ាងណា|What do you make of this?|តើអ្នកគិតយ៉ាងណាចំពោះរឿងនេះ?
map out|mapped out|mapped out|រៀបចំផែនការលម្អិត|Map out your study plan.|រៀបចំផែនការសិក្សារបស់អ្នកឲ្យលម្អិត។
mark down|marked down|marked down|បញ្ចុះតម្លៃ / កត់ត្រា|All shirts are marked down.|អាវទាំងអស់ត្រូវបានបញ្ចុះតម្លៃ។
measure up|measured up|measured up|ល្អគ្រប់គ្រាន់|Did the hotel measure up?|តើសណ្ឋាគារល្អគ្រប់គ្រាន់ទេ?
mess around|messed around|messed around|លេងសើច / ខ្ជិល|Stop messing around!|ឈប់លេងសើចទៅ!
mull over|mulled over|mulled over|គិតពិចារណាយូរ|I'll mull it over tonight.|ខ្ញុំនឹងគិតពិចារណារឿងនេះយប់នេះ។
narrow down|narrowed down|narrowed down|បង្រួមជម្រើស|Narrow down your list to three.|បង្រួមបញ្ជីរបស់អ្នកឲ្យនៅសល់បី។
note down|noted down|noted down|កត់ត្រា|Note down the address.|កត់ត្រាអាសយដ្ឋាន។
opt in|opted in|opted in|ជ្រើសចូលរួម|You can opt in to receive news.|អ្នកអាចជ្រើសចូលរួមដើម្បីទទួលព័ត៌មាន។
pack up|packed up|packed up|វេចឥវ៉ាន់ / បញ្ចប់|Pack up your things.|វេចឥវ៉ាន់របស់អ្នក។
pair up|paired up|paired up|ចាប់ដៃគូ|Pair up with a classmate.|ចាប់ដៃគូជាមួយមិត្តរួមថ្នាក់។
pan out|panned out|panned out|ប្រែជា (ល្អ / អាក្រក់)|Let's see how it pans out.|តោះមើលថាវានឹងប្រែជាយ៉ាងណា។
pass up|passed up|passed up|ខកខាន (ឱកាស)|Don't pass up this chance.|កុំខកខានឱកាសនេះ។
patch up|patched up|patched up|ផ្សះផ្សា / ប៉ះ|They patched up their friendship.|ពួកគេបានផ្សះផ្សាមិត្តភាពរបស់ពួកគេ។
pay in|paid in|paid in|ដាក់លុយចូល|I paid in $100 to my account.|ខ្ញុំបានដាក់លុយ ១០០ ដុល្លារចូលគណនី។
peel off|peeled off|peeled off|របក|The paint is peeling off.|ថ្នាំលាបកំពុងរបក។
phase out|phased out|phased out|លុបចោលបន្តិចម្ដងៗ|Plastic bags are being phased out.|ថង់ប្លាស្ទិកកំពុងត្រូវលុបចោលបន្តិចម្ដងៗ។
pick up on|picked up on|picked up on|កត់សម្គាល់|She picked up on my mistake.|នាងបានកត់សម្គាល់កំហុសរបស់ខ្ញុំ។
piece together|pieced together|pieced together|ផ្គុំបញ្ចូលគ្នា|Police pieced together the story.|ប៉ូលិសបានផ្គុំរឿងរ៉ាវបញ្ចូលគ្នា។
pig out|pigged out|pigged out|ញ៉ាំច្រើនហួស|We pigged out on pizza.|យើងបានញ៉ាំភីហ្សាច្រើនហួស។
pipe down|piped down|piped down|ស្ងៀម / និយាយតិចៗ|Pipe down, the baby is sleeping.|ស្ងៀម ទារកកំពុងគេង។
play around|played around|played around|លេង / សាកល្បង|I played around with the new app.|ខ្ញុំបានសាកលេង App ថ្មី។
play up|played up|played up|ធ្វើបាប / សង្កត់ធ្ងន់|The kids played up all day.|ក្មេងៗរពឹសពេញមួយថ្ងៃ។
plough through|ploughed through|ploughed through|ខិតខំធ្វើរហូតដល់ចប់|I ploughed through the long report.|ខ្ញុំបានខិតខំអានរបាយការណ៍វែងរហូតដល់ចប់។
point to|pointed to|pointed to|ចង្អុលទៅ / បង្ហាញ|The evidence points to him.|ភស្តុតាងចង្អុលទៅលើគាត់។
polish off|polished off|polished off|ញ៉ាំអស់ / បញ្ចប់រហ័ស|He polished off the cake.|គាត់បានញ៉ាំនំខេកអស់។
pop out|popped out|popped out|ចេញទៅបន្តិច|I'm popping out for coffee.|ខ្ញុំចេញទៅទិញកាហ្វេបន្តិច។
pour in|poured in|poured in|ហូរចូល|Messages poured in after the news.|សារបានហូរចូលច្រើនក្រោយព័ត៌មាននេះ។
press on|pressed on|pressed on|បន្តទៅមុខ|We pressed on despite the rain.|យើងបានបន្តទៅមុខទោះបីភ្លៀងក៏ដោយ។
print out|printed out|printed out|បោះពុម្ពចេញ|Print out your ticket.|បោះពុម្ពសំបុត្ររបស់អ្នក។
pull apart|pulled apart|pulled apart|ទាញឲ្យបែក|Pull apart the bread.|ទាញនំប៉័ងឲ្យបែក។
pull down|pulled down|pulled down|រុះរើ / ទាញចុះ|They pulled down the old wall.|ពួកគេបានរុះរើជញ្ជាំងចាស់។
pull in|pulled in|pulled in|ចូលចត (រថភ្លើង)|The train pulled in at noon.|រថភ្លើងបានចូលចតនៅថ្ងៃត្រង់។
pull off|pulled off|pulled off|ធ្វើបានសម្រេច|She pulled off a great result.|នាងបានសម្រេចលទ្ធផលដ៏ល្អ។
push around|pushed around|pushed around|ជិះជាន់|Don't let them push you around.|កុំឲ្យពួកគេជិះជាន់អ្នក។
put aside|put aside|put aside|ទុកមួយឡែក|Put aside your phone and study.|ទុកទូរស័ព្ទមួយឡែក ហើយរៀន។
put back|put back|put back|ដាក់កន្លែងដើមវិញ|Put the book back on the shelf.|ដាក់សៀវភៅវិញនៅលើធ្នើ។
put in|put in|put in|ដាក់ / ចំណាយ (កម្លាំង)|She put in a lot of effort.|នាងបានចំណាយកម្លាំងច្រើន។
put through|put through|put through|ភ្ជាប់ (ទូរស័ព្ទ)|Please put me through to the manager.|សូមភ្ជាប់ខ្ញុំទៅអ្នកគ្រប់គ្រង។
reach out|reached out|reached out|ទាក់ទង / លាតដៃ|Reach out if you need help.|ទាក់ទងមក បើអ្នកត្រូវការជំនួយ។
read up on|read up on|read up on|អានស្រាវជ្រាវ|Read up on the topic before class.|អានស្រាវជ្រាវអំពីប្រធានបទមុនម៉ោងរៀន។
report back|reported back|reported back|រាយការណ៍មកវិញ|Report back to me tomorrow.|រាយការណ៍មកខ្ញុំវិញនៅថ្ងៃស្អែក។
rip up|ripped up|ripped up|ហែកខ្ទេច|He ripped up the letter.|គាត់បានហែកសំបុត្រខ្ទេច។
round up|rounded up|rounded up|ប្រមូលផ្ដុំ / បង្គត់|Round up the students.|ប្រមូលសិស្សមកជុំគ្នា។
rub out|rubbed out|rubbed out|លុប (ដោយជ័រលុប)|Rub out the wrong answer.|លុបចម្លើយខុស។
run across|ran across|run across|ជួបដោយចៃដន្យ|I ran across an old letter.|ខ្ញុំបានរកឃើញសំបុត្រចាស់មួយដោយចៃដន្យ។
run by|ran by|run by|ប្រាប់ឲ្យដឹង (យកមតិ)|Let me run this idea by you.|ទុកឲ្យខ្ញុំប្រាប់គំនិតនេះឲ្យអ្នកដឹង។
run up|ran up|run up|ជំពាក់ច្រើន / រត់ឡើង|He ran up a big bill.|គាត់បានជំពាក់វិក្កយបត្រធំ។
rush off|rushed off|rushed off|ប្រញាប់ចេញទៅ|She rushed off to work.|នាងបានប្រញាប់ចេញទៅធ្វើការ។
scale back|scaled back|scaled back|កាត់បន្ថយ (ទំហំ)|They scaled back the project.|ពួកគេបានកាត់បន្ថយទំហំគម្រោង។
scrape by|scraped by|scraped by|រស់ដោយលំបាក|They scrape by on a small income.|ពួកគេរស់ដោយលំបាកដោយប្រាក់ចំណូលតិចតួច។
screw up|screwed up|screwed up|ធ្វើខុសធ្ងន់|I screwed up the presentation.|ខ្ញុំបានធ្វើបទបង្ហាញខុសធ្ងន់។
see to|saw to|seen to|ដោះស្រាយ / យកចិត្តទុកដាក់|I'll see to the tickets.|ខ្ញុំនឹងរៀបចំរឿងសំបុត្រ។
sell off|sold off|sold off|លក់ចោល (តម្លៃថោក)|They sold off old stock.|ពួកគេបានលក់ទំនិញចាស់ចោល។
send in|sent in|sent in|ផ្ញើចូល|Send in your application.|ផ្ញើពាក្យសុំរបស់អ្នកចូល។
send out|sent out|sent out|ផ្ញើចេញ|We sent out the invitations.|យើងបានផ្ញើលិខិតអញ្ជើញចេញ។
set in|set in|set in|ចាប់ផ្ដើម (ហើយបន្ត)|The rainy season has set in.|រដូវវស្សាបានចាប់ផ្ដើមហើយ។
settle up|settled up|settled up|ទូទាត់លុយ|Let's settle up the bill.|តោះទូទាត់វិក្កយបត្រ។
shake off|shook off|shaken off|កម្ចាត់ / រលាស់ចេញ|I can't shake off this cold.|ខ្ញុំមិនអាចបំបាត់ជំងឺផ្ដាសាយនេះបានទេ។
shake up|shook up|shaken up|ធ្វើឲ្យតក់ស្លុត / កែប្រែ|The accident shook me up.|គ្រោះថ្នាក់បានធ្វើឲ្យខ្ញុំតក់ស្លុត។
shoot up|shot up|shot up|ឡើងខ្ពស់យ៉ាងលឿន|Prices shot up last month.|តម្លៃបានឡើងខ្ពស់យ៉ាងលឿនកាលពីខែមុន។
shut out|shut out|shut out|មិនឲ្យចូល / បិទចេញ|Don't shut out your friends.|កុំបិទចិត្តចំពោះមិត្តភក្តិរបស់អ្នក។
single out|singled out|singled out|ជ្រើសចេញម្នាក់|The teacher singled out my essay.|គ្រូបានជ្រើសរើសតែងសេចក្ដីរបស់ខ្ញុំ។
sink in|sank in|sunk in|យល់ច្បាស់ (បន្តិចម្ដងៗ)|The news hasn't sunk in yet.|ខ្ញុំមិនទាន់ទទួលយកដំណឹងនេះបាននៅឡើយ។
size up|sized up|sized up|វាយតម្លៃ (ស្ថានភាព)|She sized up the situation.|នាងបានវាយតម្លៃស្ថានភាព។
sleep on|slept on|slept on|ពិចារណាមួយយប់សិន|Let me sleep on it.|ទុកឲ្យខ្ញុំពិចារណាមួយយប់សិន។
slip away|slipped away|slipped away|លបចេញ / កន្លងផុត|Time is slipping away.|ពេលវេលាកំពុងកន្លងផុតទៅ។
smooth over|smoothed over|smoothed over|សម្រួល (បញ្ហា)|She smoothed over the argument.|នាងបានសម្រួលជម្លោះ។
sneak up on|sneaked up on|sneaked up on|លបចូលជិត|Don't sneak up on me!|កុំលបចូលមកជិតខ្ញុំ!
snap up|snapped up|snapped up|ទិញយ៉ាងលឿន|Shoppers snapped up the deals.|អ្នកទិញបានទិញទំនិញបញ្ចុះតម្លៃយ៉ាងលឿន។
soak up|soaked up|soaked up|ស្រូបយក|Kids soak up new words quickly.|ក្មេងៗស្រូបយកពាក្យថ្មីៗយ៉ាងលឿន។
spell out|spelled out|spelled out|ពន្យល់ឲ្យច្បាស់|Let me spell out the rules.|ទុកឲ្យខ្ញុំពន្យល់ច្បាប់ឲ្យច្បាស់។
spread out|spread out|spread out|រាយ / ពង្រាយ|Spread out the map.|លាតផែនទី។
spring up|sprang up|sprung up|លេចឡើងយ៉ាងលឿន|New cafes sprang up everywhere.|ហាងកាហ្វេថ្មីៗបានលេចឡើងគ្រប់ទីកន្លែង។
stack up|stacked up|stacked up|គរឡើង / ប្រៀបធៀប|The bills are stacking up.|វិក្កយបត្រកំពុងគរឡើង។
stamp out|stamped out|stamped out|លុបបំបាត់|We must stamp out corruption.|យើងត្រូវតែលុបបំបាត់អំពើពុករលួយ។
start off|started off|started off|ចាប់ផ្ដើម|Let's start off with a song.|តោះចាប់ផ្ដើមដោយបទចម្រៀងមួយ។
start up|started up|started up|បង្កើត (អាជីវកម្ម) / បើក (ម៉ាស៊ីន)|She started up her own business.|នាងបានបង្កើតអាជីវកម្មផ្ទាល់ខ្លួន។
stay on|stayed on|stayed on|នៅបន្ត|He stayed on after class.|គាត់បាននៅបន្តក្រោយម៉ោងរៀន។
steer clear of|steered clear of|steered clear of|ជៀសវាង|Steer clear of junk food.|ជៀសវាងអាហារគ្មានប្រយោជន៍។
step back|stepped back|stepped back|ថយក្រោយ (ដើម្បីគិត)|Step back and look at the big picture.|ថយក្រោយ ហើយមើលរូបភាពទាំងមូល។
step up|stepped up|stepped up|បង្កើន / ចេញមុខទទួលខុសត្រូវ|We need to step up our efforts.|យើងត្រូវបង្កើនការខិតខំ។
stick around|stuck around|stuck around|នៅទីនោះបន្ត|Stick around after the show.|នៅបន្តក្រោយការសម្ដែង។
stick up for|stuck up for|stuck up for|ការពារ (មនុស្ស)|She stuck up for her friend.|នាងបានការពារមិត្តរបស់នាង។
stir up|stirred up|stirred up|ញុះញង់ / កូរ|Don't stir up trouble.|កុំញុះញង់បង្កបញ្ហា។
stock up|stocked up|stocked up|ទិញទុកច្រើន|We stocked up on rice.|យើងបានទិញអង្ករទុកច្រើន។
straighten out|straightened out|straightened out|ដោះស្រាយ / តម្រង់|We need to straighten out this mess.|យើងត្រូវដោះស្រាយភាពរញ៉េរញ៉ៃនេះ។
stress out|stressed out|stressed out|ធ្វើឲ្យតានតឹង|Exams stress me out.|ការប្រឡងធ្វើឲ្យខ្ញុំតានតឹង។
strike up|struck up|struck up|ចាប់ផ្ដើម (ការសន្ទនា)|He struck up a conversation.|គាត់បានចាប់ផ្ដើមការសន្ទនា។
swing by|swung by|swung by|ចូលលេងបន្តិច|I'll swing by your office.|ខ្ញុំនឹងចូលទៅការិយាល័យរបស់អ្នកបន្តិច។
switch over|switched over|switched over|ប្ដូរទៅ|We switched over to solar power.|យើងបានប្ដូរទៅប្រើថាមពលព្រះអាទិត្យ។
take to|took to|taken to|ចាប់ចូលចិត្ត|She took to swimming quickly.|នាងបានចាប់ចូលចិត្តហែលទឹកយ៉ាងលឿន។
team up|teamed up|teamed up|សហការជាក្រុម|Let's team up for the project.|តោះសហការគ្នាជាក្រុមសម្រាប់គម្រោងនេះ។
tell apart|told apart|told apart|បែងចែក|I can't tell the twins apart.|ខ្ញុំមិនអាចបែងចែកកូនភ្លោះទាំងពីរបានទេ។
think back|thought back|thought back|រំលឹកឡើងវិញ|Think back to your first day of school.|រំលឹកឡើងវិញពីថ្ងៃដំបូងនៃការចូលរៀនរបស់អ្នក។
think through|thought through|thought through|គិតឲ្យហ្មត់ចត់|Think through your answer.|គិតឲ្យហ្មត់ចត់ពីចម្លើយរបស់អ្នក។
throw in|threw in|thrown in|ថែមឲ្យ|They threw in a free drink.|ពួកគេបានថែមភេសជ្ជៈមួយដោយឥតគិតថ្លៃ។
throw out|threw out|thrown out|បោះចោល / បណ្ដេញ|Throw out the old food.|បោះចោលម្ហូបចាស់។
tick off|ticked off|ticked off|គូសធីក / ធ្វើឲ្យខឹង|Tick off each name on the list.|គូសធីកលើឈ្មោះនីមួយៗក្នុងបញ្ជី។
tide over|tided over|tided over|ជួយឲ្យរស់បានមួយរយៈ|This money will tide us over.|លុយនេះនឹងជួយឲ្យយើងរស់បានមួយរយៈ។
tip off|tipped off|tipped off|ប្រាប់ព័ត៌មានសម្ងាត់|Someone tipped off the police.|មាននរណាម្នាក់បានប្រាប់ព័ត៌មានដល់ប៉ូលិស។
tone down|toned down|toned down|បន្ថយ (ភាពខ្លាំង)|Tone down your language.|ប្រើពាក្យឲ្យស្រាលជាងនេះ។
touch down|touched down|touched down|ចុះចត|The plane touched down safely.|យន្តហោះបានចុះចតដោយសុវត្ថិភាព។
touch on|touched on|touched on|លើកឡើងបន្តិច|The teacher touched on the topic.|គ្រូបានលើកឡើងប្រធានបទនេះបន្តិច។
toughen up|toughened up|toughened up|ធ្វើឲ្យរឹងមាំ|You need to toughen up.|អ្នកត្រូវតែរឹងមាំជាងនេះ។
trip up|tripped up|tripped up|ធ្វើឲ្យជំពប់ / ធ្វើខុស|The last question tripped me up.|សំណួរចុងក្រោយបានធ្វើឲ្យខ្ញុំខុស។
tuck in|tucked in|tucked in|ញ៉ាំ / ដាក់ក្មេងគេង|Tuck in your shirt.|ញាត់ចុងអាវចូលក្នុងខោ។
turn away|turned away|turned away|បែរចេញ / បដិសេធមិនឲ្យចូល|They turned us away at the door.|ពួកគេមិនឲ្យយើងចូលនៅមាត់ទ្វារ។
turn to|turned to|turned to|ពឹងពាក់ / ងាកទៅ|You can always turn to me.|អ្នកអាចពឹងពាក់ខ្ញុំជានិច្ច។
type up|typed up|typed up|វាយជាអត្ថបទ|Type up your notes.|វាយកំណត់ត្រារបស់អ្នកជាអត្ថបទ។
wait on|waited on|waited on|បម្រើ|The waiter waited on us.|អ្នករត់តុបានបម្រើយើង។
walk through|walked through|walked through|ពន្យល់ម្ដងមួយជំហាន|Let me walk you through the steps.|ទុកឲ្យខ្ញុំពន្យល់អ្នកម្ដងមួយជំហាន។
wash off|washed off|washed off|លាងចេញ|Wash off the soap.|លាងសាប៊ូចេញ។
wear down|wore down|worn down|ធ្វើឲ្យអស់កម្លាំង|The long trip wore me down.|ដំណើរវែងបានធ្វើឲ្យខ្ញុំអស់កម្លាំង។
weed out|weeded out|weeded out|ច្រោះចេញ|We weeded out the weak ideas.|យើងបានច្រោះគំនិតខ្សោយៗចេញ។
while away|whiled away|whiled away|ចំណាយពេលទំនេរ|We whiled away the afternoon by the river.|យើងបានចំណាយពេលរសៀលនៅមាត់ទន្លេ។
win over|won over|won over|ទាក់ទាញឲ្យគាំទ្រ|She won over the audience.|នាងបានទាក់ទាញចិត្តទស្សនិកជន។
wind up|wound up|wound up|បញ្ចប់ / ចុងក្រោយ|We wound up eating at home.|ចុងក្រោយយើងបានញ៉ាំនៅផ្ទះ។
wipe off|wiped off|wiped off|ជូតចេញ|Wipe off the dust.|ជូតធូលីចេញ។
work through|worked through|worked through|ដោះស្រាយម្ដងមួយៗ|Let's work through the problems.|តោះដោះស្រាយបញ្ហាម្ដងមួយៗ។
write back|wrote back|written back|សរសេរឆ្លើយតប|Please write back soon.|សូមសរសេរឆ្លើយតបឲ្យបានឆាប់។
zero in on|zeroed in on|zeroed in on|ផ្ដោតលើ|Let's zero in on the main problem.|តោះផ្ដោតលើបញ្ហាចម្បង។
zip up|zipped up|zipped up|ទាញរ៉ូត|Zip up your jacket.|ទាញរ៉ូតអាវក្រៅរបស់អ្នក។
bear out|bore out|borne out|បញ្ជាក់ថាត្រឹមត្រូវ|The facts bear out his story.|ការពិតបញ្ជាក់ថារឿងរបស់គាត់ត្រឹមត្រូវ។
blow away|blew away|blown away|ផ្លុំហោះ / ធ្វើឲ្យស្ងើច|The wind blew away my hat.|ខ្យល់បានផ្លុំមួករបស់ខ្ញុំហោះបាត់។
boot up|booted up|booted up|បើកកុំព្យូទ័រ|Wait for the computer to boot up.|រង់ចាំកុំព្យូទ័របើកដំណើរការ។
bring over|brought over|brought over|យកមកផ្ទះ|Bring over your laptop.|យកកុំព្យូទ័រយួរដៃរបស់អ្នកមកផ្ទះខ្ញុំ។
brush aside|brushed aside|brushed aside|មិនអើពើ|He brushed aside my question.|គាត់មិនអើពើនឹងសំណួររបស់ខ្ញុំ។
catch up with|caught up with|caught up with|តាមទាន់|I'll catch up with you later.|ខ្ញុំនឹងតាមអ្នកទាន់ពេលក្រោយ។
clear away|cleared away|cleared away|រៀបចេញ|Clear away the dishes.|រៀបចានចេញ។
clear off|cleared off|cleared off|ចេញទៅ / សម្អាត|Clear off the table.|សម្អាតតុឲ្យទំនេរ។
close off|closed off|closed off|បិទផ្លូវ|Police closed off the street.|ប៉ូលិសបានបិទផ្លូវ។
close up|closed up|closed up|បិទ (ហាង)|The shop closes up at nine.|ហាងបិទនៅម៉ោងប្រាំបួន។
come around|came around|come around|ដឹងខ្លួនវិញ / ព្រមយល់ស្រប|He'll come around to our idea.|គាត់នឹងព្រមយល់ស្របនឹងគំនិតរបស់យើង។
come between|came between|come between|ធ្វើឲ្យបែកបាក់|Don't let money come between us.|កុំឲ្យលុយធ្វើឲ្យយើងបែកបាក់គ្នា។
come up against|came up against|come up against|ជួបប្រទះ (ឧបសគ្គ)|We came up against many problems.|យើងបានជួបប្រទះបញ្ហាជាច្រើន។
count out|counted out|counted out|រាប់ចេញ / មិនរាប់បញ្ចូល|Count me out, I'm too tired.|កុំរាប់ខ្ញុំចូល ខ្ញុំហត់ពេកហើយ។
cross over|crossed over|crossed over|ឆ្លងទៅម្ខាង|We crossed over the bridge.|យើងបានឆ្លងកាត់ស្ពាន។
cut across|cut across|cut across|កាត់ផ្លូវកាត់|We cut across the park.|យើងបានដើរកាត់សួនច្បារ។
do with|did with|done with|ត្រូវការ (could do with)|I could do with a cup of coffee.|ខ្ញុំត្រូវការកាហ្វេមួយកែវ។
draw out|drew out|drawn out|ដកលុយ / អូសបន្លាយ|I drew out some cash.|ខ្ញុំបានដកលុយមួយចំនួន។
drive away|drove away|driven away|បើកចេញ / បណ្ដេញ|The smell drove away customers.|ក្លិននោះបានធ្វើឲ្យអតិថិជនរត់ចេញ។
eat in|ate in|eaten in|ញ៉ាំនៅផ្ទះ / ញ៉ាំនៅហាង|Do you want to eat in or take away?|តើអ្នកចង់ញ៉ាំនៅទីនេះ ឬខ្ចប់យកទៅ?
fall over|fell over|fallen over|ដួល|The bike fell over.|កង់បានដួល។
feel for|felt for|felt for|អាណិត|I really feel for you.|ខ្ញុំពិតជាអាណិតអ្នកណាស់។
fight off|fought off|fought off|ទប់ទល់ / កម្ចាត់|She fought off the flu.|នាងបានទប់ទល់នឹងជំងឺផ្ដាសាយធំ។
finish off|finished off|finished off|បញ្ចប់ / ញ៉ាំអស់|Finish off your homework.|បញ្ចប់កិច្ចការផ្ទះរបស់អ្នក។
finish up|finished up|finished up|បញ្ចប់ / ចុងក្រោយទៅដល់|We finished up at the beach.|ចុងក្រោយយើងទៅដល់ឆ្នេរ។
fly away|flew away|flown away|ហោះទៅបាត់|The bird flew away.|សត្វស្លាបបានហោះទៅបាត់។
fly in|flew in|flown in|ហោះហើរមកដល់|She flew in from Bangkok.|នាងបានហោះហើរមកពីបាងកក។
fold up|folded up|folded up|បត់|Fold up the chairs.|បត់កៅអី។
follow through|followed through|followed through|ធ្វើរហូតចប់|Follow through on your promises.|ធ្វើតាមការសន្យារបស់អ្នករហូតដល់ចប់។
get up to|got up to|got up to|ធ្វើ (រឿងរពឹស)|What did you get up to this weekend?|តើអ្នកបានធ្វើអ្វីខ្លះនៅចុងសប្ដាហ៍នេះ?
get back at|got back at|got back at|សងសឹក|He wanted to get back at them.|គាត់ចង់សងសឹកពួកគេ។
get back to|got back to|got back to|ឆ្លើយតបវិញ / ត្រឡប់ទៅ|I'll get back to you tomorrow.|ខ្ញុំនឹងឆ្លើយតបអ្នកវិញនៅថ្ងៃស្អែក។
go around|went around|gone around|រាលដាល / ដើរជុំវិញ|A cold is going around the school.|ជំងឺផ្ដាសាយកំពុងរាលដាលនៅសាលា។
go on about|went on about|gone on about|និយាយរឿងដដែលៗ|He always goes on about his car.|គាត់តែងតែនិយាយពីឡានរបស់គាត់ដដែលៗ។
go with|went with|gone with|សមនឹង / ជ្រើសយក|This tie goes with your shirt.|ក្រវ៉ាត់កនេះសមនឹងអាវរបស់អ្នក។
grow into|grew into|grown into|ធំឡើងក្លាយជា|She grew into a smart young woman.|នាងបានធំឡើងក្លាយជានារីវ័យក្មេងដ៏ឆ្លាតវៃ។
hold down|held down|held down|រក្សា (ការងារ) / សង្កត់|He can't hold down a job.|គាត់មិនអាចធ្វើការងារមួយបានយូរទេ។
hold together|held together|held together|រក្សាការរួបរួម|The family held together in hard times.|ក្រុមគ្រួសាររួបរួមគ្នាក្នុងពេលលំបាក។
jump at|jumped at|jumped at|ចាប់យកភ្លាម (ឱកាស)|She jumped at the chance.|នាងបានចាប់យកឱកាសនោះភ្លាម។
jump out|jumped out|jumped out|លោតចេញ / លេចធ្លោ|A cat jumped out of the box.|ឆ្មាមួយបានលោតចេញពីប្រអប់។
keep back|kept back|kept back|ថយក្រោយ / លាក់ទុក|Keep back from the fire.|ថយក្រោយពីភ្លើង។
laugh off|laughed off|laughed off|សើចចំអកមិនខ្វល់|He laughed off the criticism.|គាត់បានសើចមិនខ្វល់នឹងការរិះគន់។
lead to|led to|led to|នាំឲ្យ|Smoking can lead to cancer.|ការជក់បារីអាចនាំឲ្យកើតជំងឺមហារីក។
lie in|lay in|lain in|គេងយឺតពេលព្រឹក|I like to lie in on Sundays.|ខ្ញុំចូលចិត្តគេងយឺតនៅថ្ងៃអាទិត្យ។
lift up|lifted up|lifted up|លើកឡើង|Lift up the box carefully.|លើកប្រអប់ឡើងដោយប្រុងប្រយ័ត្ន។
live off|lived off|lived off|រស់ដោយពឹងលើ|He lives off his parents.|គាត់រស់ដោយពឹងលើឪពុកម្ដាយ។
live through|lived through|lived through|ឆ្លងកាត់ (ពេលលំបាក)|My grandparents lived through the war.|ជីដូនជីតារបស់ខ្ញុំបានឆ្លងកាត់សង្គ្រាម។
mark off|marked off|marked off|គូសព្រំ / គូសចេញ|Mark off the days on the calendar.|គូសថ្ងៃនៅលើប្រតិទិន។
move away|moved away|moved away|ផ្លាស់ទៅឆ្ងាយ|My best friend moved away.|មិត្តល្អបំផុតរបស់ខ្ញុំបានផ្លាស់ទៅឆ្ងាយ។
move along|moved along|moved along|ដើរទៅមុខ / រីកចម្រើន|The project is moving along well.|គម្រោងកំពុងរីកចម្រើនបានល្អ។
move over|moved over|moved over|រំកិលចេញ (ទុកកន្លែង)|Move over so I can sit.|រំកិលចេញបន្តិច ដើម្បីឲ្យខ្ញុំអង្គុយ។
move up|moved up|moved up|ឡើងថ្នាក់ / រំកិលឡើង|She moved up to the next level.|នាងបានឡើងទៅកម្រិតបន្ទាប់។
order around|ordered around|ordered around|បញ្ជាគេគ្រប់យ៉ាង|Stop ordering me around!|ឈប់បញ្ជាខ្ញុំគ្រប់យ៉ាងទៅ!
order in|ordered in|ordered in|កុម្ម៉ង់ម្ហូបមកផ្ទះ|Let's order in pizza tonight.|យប់នេះតោះកុម្ម៉ង់ភីហ្សាមកផ្ទះ។
pass around|passed around|passed around|ហុចជុំវិញ|Pass around the cake.|ហុចនំខេកឲ្យគ្នា។
pass down|passed down|passed down|បន្តដល់ជំនាន់ក្រោយ|The story was passed down for generations.|រឿងនេះត្រូវបានបន្តពីជំនាន់មួយទៅជំនាន់មួយ។
pay out|paid out|paid out|ចំណាយ / បង់ចេញ|The company paid out bonuses.|ក្រុមហ៊ុនបានបើកប្រាក់រង្វាន់។
play along|played along|played along|ធ្វើតាម (ដើម្បីលេង)|I played along with the joke.|ខ្ញុំបានធ្វើតាមរឿងកំប្លែងនោះ។
play back|played back|played back|ចាក់ឡើងវិញ|Play back the recording.|ចាក់ការថតឡើងវិញ។
pull ahead|pulled ahead|pulled ahead|ឈានទៅមុខ|Our team pulled ahead in the second half.|ក្រុមរបស់យើងបានឈានទៅមុខនៅតង់ទីពីរ។
pull back|pulled back|pulled back|ទាញថយក្រោយ / ដកថយ|Pull back the curtains.|ទាញវាំងននបើក។
pull together|pulled together|pulled together|រួបរួមគ្នា|We need to pull together.|យើងត្រូវរួបរួមគ្នា។
push for|pushed for|pushed for|ទាមទារ / ជំរុញ|They pushed for better schools.|ពួកគេបានទាមទារសាលារៀនល្អជាងនេះ។
push on|pushed on|pushed on|បន្តទៅមុខ|We pushed on through the night.|យើងបានបន្តទៅមុខពេញមួយយប់។
put across|put across|put across|បកស្រាយឲ្យយល់|She put across her ideas clearly.|នាងបានបកស្រាយគំនិតរបស់នាងបានយ៉ាងច្បាស់។
read over|read over|read over|អានពិនិត្យ|Read over your answers.|អានពិនិត្យចម្លើយរបស់អ្នក។
read through|read through|read through|អានឲ្យចប់|Read through the whole text.|អានអត្ថបទទាំងមូលឲ្យចប់។
ring back|rang back|rung back|ទូរស័ព្ទមកវិញ|I'll ring you back later.|ខ្ញុំនឹងទូរស័ព្ទទៅអ្នកវិញពេលក្រោយ។
roll out|rolled out|rolled out|ដាក់ឲ្យប្រើ / លាត|The app rolled out a new update.|App បានដាក់ឲ្យប្រើកំណែថ្មី។
roll over|rolled over|rolled over|ប្រែខ្លួន / ងើប|The dog rolled over.|ឆ្កែបានប្រែខ្លួន។
roll up|rolled up|rolled up|រមូរ / ហ៊ុំ|Roll up your sleeves.|ហ៊ុំដៃអាវរបស់អ្នក។
rub in|rubbed in|rubbed in|លាប / រំលឹកកំហុសគេ|Don't rub it in!|កុំរំលឹករឿងនោះច្រើនពេក!
run out|ran out|run out|អស់|Time is running out.|ពេលវេលាជិតអស់ហើយ។
run around|ran around|run around|រត់ចុះឡើង / រវល់|The kids ran around the yard.|ក្មេងៗរត់លេងជុំវិញទីធ្លា។
rush around|rushed around|rushed around|រវល់ប្រញាប់ប្រញាល់|I rushed around all morning.|ខ្ញុំរវល់ប្រញាប់ប្រញាល់ពេញមួយព្រឹក។
send for|sent for|sent for|ហៅឲ្យមក|Send for a doctor!|ហៅគ្រូពេទ្យមក!
send off|sent off|sent off|ផ្ញើចេញ / បណ្ដេញចេញពីទីលាន|The player was sent off.|កីឡាករត្រូវបានបណ្ដេញចេញពីទីលាន។
set about|set about|set about|ចាប់ផ្ដើមធ្វើ|She set about cleaning the house.|នាងបានចាប់ផ្ដើមសម្អាតផ្ទះ។
shout out|shouted out|shouted out|ស្រែកឡើង|Shout out the answer.|ស្រែកប្រាប់ចម្លើយ។
shut off|shut off|shut off|បិទ (ទឹក / ម៉ាស៊ីន)|Shut off the water.|បិទទឹក។
sign off|signed off|signed off|បញ្ចប់ (សារ / កម្មវិធី)|The presenter signed off at ten.|អ្នកសម្របសម្រួលបានបញ្ចប់កម្មវិធីនៅម៉ោងដប់។
sign out|signed out|signed out|ចាកចេញពីគណនី / ចុះឈ្មោះចេញ|Remember to sign out.|កុំភ្លេចចាកចេញពីគណនី។
sit around|sat around|sat around|អង្គុយទំនេរ|Don't just sit around all day.|កុំអង្គុយទំនេរពេញមួយថ្ងៃ។
sit through|sat through|sat through|អង្គុយមើលរហូតចប់|We sat through a boring film.|យើងបានអង្គុយមើលភាពយន្តគួរឲ្យធុញរហូតដល់ចប់។
sleep off|slept off|slept off|គេងឲ្យបាត់ (ហត់ / ឈឺ)|He slept off his headache.|គាត់បានគេងឲ្យបាត់ឈឺក្បាល។
slip out|slipped out|slipped out|លបចេញ / និយាយច្រឡំ|The secret slipped out.|អាថ៌កំបាំងបានលេចធ្លាយចេញ។
speak out|spoke out|spoken out|និយាយចេញមុខ|She spoke out against violence.|នាងបាននិយាយចេញមុខប្រឆាំងនឹងអំពើហិង្សា។
stand around|stood around|stood around|ឈរទំនេរ|People stood around waiting.|មនុស្សឈររង់ចាំទំនេរ។
stand in for|stood in for|stood in for|ធ្វើជំនួស|She stood in for the teacher.|នាងបានបង្រៀនជំនួសគ្រូ។
start out|started out|started out|ចាប់ផ្ដើមដំបូង|He started out as a waiter.|គាត់បានចាប់ផ្ដើមដំបូងជាអ្នករត់តុ។
stay away|stayed away|stayed away|នៅឲ្យឆ្ងាយ|Stay away from the river.|នៅឲ្យឆ្ងាយពីទន្លេ។
stay behind|stayed behind|stayed behind|នៅបន្ត (ពេលគេទៅ)|I stayed behind to help the teacher.|ខ្ញុំបាននៅបន្តដើម្បីជួយគ្រូ។
step aside|stepped aside|stepped aside|ថយចេញម្ខាង / លាលែង|Please step aside.|សូមថយចេញម្ខាង។
step out|stepped out|stepped out|ចេញទៅក្រៅបន្តិច|She stepped out for lunch.|នាងបានចេញទៅញ៉ាំអាហារថ្ងៃត្រង់។
stick together|stuck together|stuck together|នៅជាមួយគ្នា / ជាប់គ្នា|Friends stick together.|មិត្តភក្តិនៅជាមួយគ្នាជានិច្ច។
stick with|stuck with|stuck with|បន្តជាមួយ|Stick with it, you'll improve.|បន្តព្យាយាម អ្នកនឹងប្រសើរឡើង។
stop off|stopped off|stopped off|ឈប់បន្តិចតាមផ្លូវ|We stopped off in Kampong Cham.|យើងបានឈប់បន្តិចនៅកំពង់ចាម។
sweep away|swept away|swept away|បក់ទៅ / ធ្វើឲ្យរំភើប|The flood swept away the bridge.|ទឹកជំនន់បានបក់ស្ពានទៅបាត់។
talk back|talked back|talked back|តមាត់|Don't talk back to your parents.|កុំតមាត់ជាមួយឪពុកម្ដាយ។
talk down to|talked down to|talked down to|និយាយមើលងាយ|Don't talk down to me.|កុំនិយាយមើលងាយខ្ញុំ។
tell on|told on|told on|ប្ដឹង (រឿងអាក្រក់អ្នកដទៃ)|My sister told on me.|ប្អូនស្រីខ្ញុំបានប្ដឹងរឿងខ្ញុំ។
think up|thought up|thought up|គិតបង្កើត|She thought up a new game.|នាងបានគិតបង្កើតហ្គេមថ្មីមួយ។
tip over|tipped over|tipped over|ផ្កាប់|The boat tipped over.|ទូកបានផ្កាប់។
touch up|touched up|touched up|កែលម្អបន្តិច|She touched up the photo.|នាងបានកែលម្អរូបថតបន្តិច។
turn against|turned against|turned against|ប្រឆាំងនឹង|His friends turned against him.|មិត្តភក្តិរបស់គាត់បានប្រឆាំងនឹងគាត់។
wait around|waited around|waited around|រង់ចាំទំនេរ|I waited around for an hour.|ខ្ញុំបានរង់ចាំទំនេរអស់មួយម៉ោង។
wait up|waited up|waited up|នៅចាំមិនទាន់គេង|Don't wait up for me.|កុំនៅចាំខ្ញុំ ចូលគេងទៅ។
walk off|walked off|walked off|ដើរចេញ|He walked off angrily.|គាត់បានដើរចេញទាំងខឹង។
wash away|washed away|washed away|ហូរនាំបាត់|The rain washed away the soil.|ភ្លៀងបានហូរនាំដីបាត់។
wash down|washed down|washed down|ផឹកទឹកតាម (លេបថ្នាំ)|Wash down the pill with water.|ផឹកទឹកតាមពេលលេបថ្នាំ។
watch over|watched over|watched over|មើលថែ|She watched over the sleeping baby.|នាងបានមើលថែទារកដែលកំពុងគេង។
work around|worked around|worked around|រកវិធីដោះស្រាយ|We worked around the problem.|យើងបានរកវិធីដោះស្រាយបញ្ហានេះ។
write out|wrote out|written out|សរសេរឲ្យពេញ|Write out the full sentence.|សរសេរប្រយោគឲ្យពេញ។
agree with|agreed with|agreed with|យល់ស្របជាមួយ|I agree with you.|ខ្ញុំយល់ស្របជាមួយអ្នក។
apologize for|apologized for|apologized for|សុំទោសចំពោះ|He apologized for being late.|គាត់បានសុំទោសចំពោះការមកយឺត។
approve of|approved of|approved of|យល់ព្រម / គាំទ្រ|My parents approve of my plan.|ឪពុកម្ដាយខ្ញុំគាំទ្រផែនការរបស់ខ្ញុំ។
believe in|believed in|believed in|ជឿលើ|I believe in you.|ខ្ញុំជឿលើអ្នក។
care about|cared about|cared about|ខ្វល់អំពី|I care about the environment.|ខ្ញុំខ្វល់អំពីបរិស្ថាន។
complain about|complained about|complained about|ត្អូញត្អែរអំពី|They complained about the noise.|ពួកគេបានត្អូញត្អែរអំពីសំឡេងរំខាន។
concentrate on|concentrated on|concentrated on|ផ្ដោតលើ|Concentrate on your studies.|ផ្ដោតលើការសិក្សារបស់អ្នក។
cope with|coped with|coped with|ទប់ទល់នឹង|She coped with the pressure well.|នាងបានទប់ទល់នឹងសម្ពាធបានល្អ។
decide on|decided on|decided on|សម្រេចជ្រើសរើស|We decided on a red car.|យើងបានសម្រេចជ្រើសរើសឡានពណ៌ក្រហម។
dream of|dreamed of|dreamed of|ស្រមៃចង់|I dream of visiting Japan.|ខ្ញុំស្រមៃចង់ទៅលេងប្រទេសជប៉ុន។
focus on|focused on|focused on|ផ្ដោតលើ|Focus on the main idea.|ផ្ដោតលើគំនិតចម្បង។
hear about|heard about|heard about|ឮអំពី|Did you hear about the accident?|តើអ្នកបានឮអំពីគ្រោះថ្នាក់នោះទេ?
insist on|insisted on|insisted on|ទទូចលើ|She insisted on paying.|នាងបានទទូចចង់បង់ប្រាក់។
look like|looked like|looked like|មើលទៅដូច|You look like your father.|អ្នកមើលទៅដូចឪពុករបស់អ្នក។
object to|objected to|objected to|ជំទាស់នឹង|I object to this decision.|ខ្ញុំជំទាស់នឹងការសម្រេចចិត្តនេះ។
prepare for|prepared for|prepared for|ត្រៀមសម្រាប់|Prepare for the exam.|ត្រៀមខ្លួនសម្រាប់ការប្រឡង។
protect from|protected from|protected from|ការពារពី|Sunscreen protects you from the sun.|ឡេការពារកម្ដៅថ្ងៃការពារអ្នកពីពន្លឺព្រះអាទិត្យ។
recover from|recovered from|recovered from|ជាសះស្បើយពី|He recovered from the illness.|គាត់បានជាសះស្បើយពីជំងឺ។
refer to|referred to|referred to|សំដៅលើ / យោង|Refer to page ten.|យោងទំព័រទីដប់។
rely on|relied on|relied on|ពឹងផ្អែកលើ|You can rely on her.|អ្នកអាចពឹងផ្អែកលើនាងបាន។
search for|searched for|searched for|ស្វែងរក|They searched for the missing child.|ពួកគេបានស្វែងរកក្មេងដែលបាត់ខ្លួន។
specialize in|specialized in|specialized in|មានជំនាញខាង|She specializes in graphic design.|នាងមានជំនាញខាងរចនាក្រាហ្វិក។
succeed in|succeeded in|succeeded in|ទទួលបានជោគជ័យក្នុង|He succeeded in passing the test.|គាត់បានទទួលជោគជ័យក្នុងការប្រឡងជាប់។
suffer from|suffered from|suffered from|រងទុក្ខពី / មានជំងឺ|She suffers from headaches.|នាងតែងតែឈឺក្បាល។
think of|thought of|thought of|គិតអំពី / គិតឃើញ|What do you think of my idea?|តើអ្នកគិតយ៉ាងណាអំពីគំនិតរបស់ខ្ញុំ?
worry about|worried about|worried about|បារម្ភអំពី|Don't worry about me.|កុំបារម្ភអំពីខ្ញុំ។
speak to|spoke to|spoken to|និយាយជាមួយ|Can I speak to the manager?|តើខ្ញុំអាចនិយាយជាមួយអ្នកគ្រប់គ្រងបានទេ?
accuse of|accused of|accused of|ចោទថា|They accused him of stealing.|ពួកគេបានចោទគាត់ថាលួច។
adapt to|adapted to|adapted to|សម្របខ្លួនទៅនឹង|She adapted to city life.|នាងបានសម្របខ្លួនទៅនឹងជីវិតទីក្រុង។
add to|added to|added to|បន្ថែមលើ|The rain added to our problems.|ភ្លៀងបានបន្ថែមបញ្ហាដល់យើង។
admit to|admitted to|admitted to|សារភាពថា|He admitted to cheating.|គាត់បានសារភាពថាបានបន្លំ។
agree on|agreed on|agreed on|ព្រមព្រៀងលើ|We agreed on a price.|យើងបានព្រមព្រៀងលើតម្លៃ។
aim for|aimed for|aimed for|តម្រង់ទៅ / មានគោលដៅ|Aim for the top!|តម្រង់ទៅកំពូល!
amount to|amounted to|amounted to|សរុបចំនួន / ស្មើនឹង|The bill amounted to $50.|វិក្កយបត្រសរុប ៥០ ដុល្លារ។
argue about|argued about|argued about|ឈ្លោះគ្នាអំពី|They argued about politics.|ពួកគេបានឈ្លោះគ្នាអំពីនយោបាយ។
arrive at|arrived at|arrived at|ទៅដល់ / ឈានដល់|We arrived at a decision.|យើងបានឈានដល់ការសម្រេចចិត្តមួយ។
ask about|asked about|asked about|សួរអំពី|She asked about your health.|នាងបានសួរអំពីសុខភាពរបស់អ្នក។
beg for|begged for|begged for|អង្វរសុំ|He begged for forgiveness.|គាត់បានអង្វរសុំការអភ័យទោស។
blame for|blamed for|blamed for|បន្ទោសដោយសារ|Don't blame me for your mistake.|កុំបន្ទោសខ្ញុំដោយសារកំហុសរបស់អ្នក។
boast about|boasted about|boasted about|អួតអំពី|He boasts about his grades.|គាត់អួតអំពីពិន្ទុរបស់គាត់។
borrow from|borrowed from|borrowed from|ខ្ចីពី|I borrowed money from my brother.|ខ្ញុំបានខ្ចីលុយពីបងប្រុស។
break into|broke into|broken into|លួចចូល / ចាប់ផ្ដើមភ្លាម|Someone broke into our house.|មាននរណាម្នាក់បានលួចចូលផ្ទះយើង។
charge for|charged for|charged for|គិតថ្លៃលើ|They charge for delivery.|ពួកគេគិតថ្លៃដឹកជញ្ជូន។
chat with|chatted with|chatted with|ជជែកជាមួយ|I chatted with my cousin online.|ខ្ញុំបានជជែកជាមួយបងប្អូនជីដូនមួយតាមអនឡាញ។
choose between|chose between|chosen between|ជ្រើសរើសរវាង|Choose between tea and coffee.|ជ្រើសរើសរវាងតែ និងកាហ្វេ។
comment on|commented on|commented on|បញ្ចេញមតិលើ|Please comment on my essay.|សូមបញ្ចេញមតិលើតែងសេចក្ដីរបស់ខ្ញុំ។
compare with|compared with|compared with|ប្រៀបធៀបជាមួយ|Compare this year with last year.|ប្រៀបធៀបឆ្នាំនេះជាមួយឆ្នាំមុន។
compete with|competed with|competed with|ប្រកួតប្រជែងជាមួយ|Small shops compete with big malls.|ហាងតូចៗប្រកួតប្រជែងជាមួយផ្សារទំនើបធំៗ។
confess to|confessed to|confessed to|សារភាពថា|She confessed to eating the cake.|នាងបានសារភាពថាបានញ៉ាំនំខេក។
congratulate on|congratulated on|congratulated on|អបអរសាទរចំពោះ|We congratulated her on her success.|យើងបានអបអរសាទរនាងចំពោះជោគជ័យរបស់នាង។
connect to|connected to|connected to|ភ្ជាប់ទៅ|Connect your phone to the TV.|ភ្ជាប់ទូរស័ព្ទរបស់អ្នកទៅទូរទស្សន៍។
consist of|consisted of|consisted of|មាន / ផ្សំពី|The test consists of 20 questions.|ការប្រឡងមានសំណួរ ២០។
contribute to|contributed to|contributed to|ចូលរួមចំណែកដល់|Everyone contributed to the project.|គ្រប់គ្នាបានចូលរួមចំណែកដល់គម្រោង។
convert into|converted into|converted into|បម្លែងទៅជា|They converted the house into a café.|ពួកគេបានបម្លែងផ្ទះទៅជាហាងកាហ្វេ។
decide against|decided against|decided against|សម្រេចមិនធ្វើ|We decided against going out.|យើងបានសម្រេចមិនចេញទៅក្រៅទេ។
die of|died of|died of|ស្លាប់ដោយសារ|Many people die of heart disease.|មនុស្សជាច្រើនស្លាប់ដោយសារជំងឺបេះដូង។
differ from|differed from|differed from|ខុសពី|Khmer differs from Thai.|ភាសាខ្មែរខុសពីភាសាថៃ។
disagree with|disagreed with|disagreed with|មិនយល់ស្របជាមួយ|I disagree with his opinion.|ខ្ញុំមិនយល់ស្របនឹងមតិរបស់គាត់ទេ។
divide into|divided into|divided into|ចែកជា|Divide the class into groups.|ចែកថ្នាក់ជាក្រុមៗ។
dream about|dreamed about|dreamed about|សុបិនឃើញ|I dreamed about my grandmother.|ខ្ញុំបានសុបិនឃើញយាយរបស់ខ្ញុំ។
escape from|escaped from|escaped from|រត់គេចពី|The bird escaped from its cage.|សត្វស្លាបបានរត់គេចពីទ្រុង។
excel at|excelled at|excelled at|ពូកែខាង|She excels at drawing.|នាងពូកែខាងគូររូប។
explain to|explained to|explained to|ពន្យល់ដល់|Can you explain this to me?|តើអ្នកអាចពន្យល់រឿងនេះដល់ខ្ញុំបានទេ?
fight for|fought for|fought for|តស៊ូដើម្បី|They fought for freedom.|ពួកគេបានតស៊ូដើម្បីសេរីភាព។
fill with|filled with|filled with|ចាក់ឲ្យពេញដោយ|Fill the glass with water.|ចាក់ទឹកឲ្យពេញកែវ។
forgive for|forgave for|forgiven for|អភ័យទោសចំពោះ|Forgive me for being rude.|សូមអភ័យទោសចំពោះការឈ្លើយរបស់ខ្ញុំ។
get used to|got used to|got used to|ធ្លាប់ / ស៊ាំនឹង|I got used to the hot weather.|ខ្ញុំបានស៊ាំនឹងអាកាសធាតុក្ដៅ។
glance at|glanced at|glanced at|ក្រឡេកមើល|She glanced at the clock.|នាងបានក្រឡេកមើលនាឡិកា។
graduate from|graduated from|graduated from|បញ្ចប់ការសិក្សាពី|He graduated from RUPP.|គាត់បានបញ្ចប់ការសិក្សាពីសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។
happen to|happened to|happened to|កើតឡើងចំពោះ|What happened to your car?|តើមានរឿងអ្វីកើតឡើងចំពោះឡានរបស់អ្នក?
hear of|heard of|heard of|ធ្លាប់ឮ|Have you heard of this singer?|តើអ្នកធ្លាប់ឮឈ្មោះតារាចម្រៀងនេះទេ?
help with|helped with|helped with|ជួយលើ|Can you help me with my homework?|តើអ្នកអាចជួយខ្ញុំធ្វើកិច្ចការផ្ទះបានទេ?
hide from|hid from|hidden from|លាក់ខ្លួនពី|The cat hid from the dog.|ឆ្មាបានលាក់ខ្លួនពីឆ្កែ។
hope for|hoped for|hoped for|សង្ឃឹមចង់បាន|We hope for good weather.|យើងសង្ឃឹមថានឹងមានអាកាសធាតុល្អ។
invest in|invested in|invested in|វិនិយោគលើ|Invest in your education.|វិនិយោគលើការអប់រំរបស់អ្នក។
joke about|joked about|joked about|និយាយលេងអំពី|Don't joke about serious things.|កុំនិយាយលេងអំពីរឿងធ្ងន់ធ្ងរ។
keep from|kept from|kept from|ទប់ / ឃាត់មិនឲ្យ|I couldn't keep from laughing.|ខ្ញុំមិនអាចទប់សំណើចបានទេ។
lean against|leaned against|leaned against|ផ្អែកនឹង|Don't lean against the wall.|កុំផ្អែកនឹងជញ្ជាំង។
learn about|learned about|learned about|រៀនអំពី|We learned about Angkor history.|យើងបានរៀនអំពីប្រវត្តិសាស្ត្រអង្គរ។
lend to|lent to|lent to|ឲ្យខ្ចីទៅ|I lent my bike to a friend.|ខ្ញុំបានឲ្យមិត្តភក្តិខ្ចីកង់។
live for|lived for|lived for|រស់នៅដើម្បី|She lives for her children.|នាងរស់នៅដើម្បីកូនៗ។
long for|longed for|longed for|ប្រាថ្នាខ្លាំង|They longed for peace.|ពួកគេប្រាថ្នាចង់បានសន្តិភាពខ្លាំងណាស់។
major in|majored in|majored in|រៀនឯកទេស|I majored in English.|ខ្ញុំបានរៀនឯកទេសភាសាអង់គ្លេស។
mix with|mixed with|mixed with|លាយជាមួយ / រាប់អាន|Oil doesn't mix with water.|ប្រេងមិនលាយជាមួយទឹកទេ។
name after|named after|named after|ដាក់ឈ្មោះតាម|She was named after her grandmother.|នាងត្រូវបានដាក់ឈ្មោះតាមយាយរបស់នាង។
operate on|operated on|operated on|វះកាត់|The doctor operated on her knee.|វេជ្ជបណ្ឌិតបានវះកាត់ជង្គង់របស់នាង។
participate in|participated in|participated in|ចូលរួមក្នុង|I participated in the race.|ខ្ញុំបានចូលរួមក្នុងការប្រណាំង។
plan for|planned for|planned for|រៀបចំផែនការសម្រាប់|Plan for the future.|រៀបចំផែនការសម្រាប់អនាគត។
pray for|prayed for|prayed for|បួងសួងសុំ|We prayed for rain.|យើងបានបួងសួងសុំភ្លៀង។
prevent from|prevented from|prevented from|រារាំងមិនឲ្យ|The rain prevented us from going out.|ភ្លៀងបានរារាំងមិនឲ្យយើងចេញទៅក្រៅ។
profit from|profited from|profited from|ទទួលផលពី|Farmers profited from the good harvest.|កសិករបានទទួលផលពីការប្រមូលផលល្អ។
protest against|protested against|protested against|តវ៉ាប្រឆាំង|Students protested against the new rule.|សិស្សបានតវ៉ាប្រឆាំងនឹងច្បាប់ថ្មី។
provide with|provided with|provided with|ផ្គត់ផ្គង់ដោយ|The school provides students with books.|សាលាផ្ដល់សៀវភៅដល់សិស្ស។
punish for|punished for|punished for|ដាក់ទោសដោយសារ|He was punished for lying.|គាត់ត្រូវបានដាក់ទោសដោយសារកុហក។
react to|reacted to|reacted to|មានប្រតិកម្មចំពោះ|How did she react to the news?|តើនាងមានប្រតិកម្មយ៉ាងណាចំពោះដំណឹងនេះ?
reply to|replied to|replied to|ឆ្លើយតបទៅ|Please reply to my message.|សូមឆ្លើយតបសាររបស់ខ្ញុំ។
resign from|resigned from|resigned from|លាលែងពី|She resigned from the company.|នាងបានលាលែងពីក្រុមហ៊ុន។
respond to|responded to|responded to|ឆ្លើយតបចំពោះ|The doctor responded to the call.|វេជ្ជបណ្ឌិតបានឆ្លើយតបការហៅ។
result in|resulted in|resulted in|បណ្ដាលឲ្យ|The storm resulted in flooding.|ព្យុះបានបណ្ដាលឲ្យមានទឹកជំនន់។
retire from|retired from|retired from|ចូលនិវត្តន៍ពី|He retired from teaching.|គាត់បានចូលនិវត្តន៍ពីការបង្រៀន។
run for|ran for|run for|ឈរឈ្មោះបោះឆ្នោត|She ran for class president.|នាងបានឈរឈ្មោះជាប្រធានថ្នាក់។
save for|saved for|saved for|សន្សំសម្រាប់|I'm saving for a new bike.|ខ្ញុំកំពុងសន្សំលុយទិញកង់ថ្មី។
shout at|shouted at|shouted at|ស្រែកដាក់|Don't shout at the children.|កុំស្រែកដាក់ក្មេងៗ។
smile at|smiled at|smiled at|ញញឹមដាក់|The baby smiled at me.|ទារកបានញញឹមដាក់ខ្ញុំ។
spend on|spent on|spent on|ចំណាយលើ|I spend a lot on food.|ខ្ញុំចំណាយច្រើនលើម្ហូប។
stare at|stared at|stared at|សម្លឹងមើល|Why are you staring at me?|ហេតុអ្វីអ្នកសម្លឹងមើលខ្ញុំ?
subscribe to|subscribed to|subscribed to|ជាវ|I subscribe to a YouTube channel.|ខ្ញុំជាវឆានែល YouTube មួយ។
talk to|talked to|talked to|និយាយជាមួយ|I need to talk to you.|ខ្ញុំត្រូវនិយាយជាមួយអ្នក។
thank for|thanked for|thanked for|អរគុណចំពោះ|Thank you for your help.|អរគុណចំពោះជំនួយរបស់អ្នក។
translate into|translated into|translated into|បកប្រែទៅជា|Translate this into Khmer.|បកប្រែរឿងនេះទៅជាភាសាខ្មែរ។
vote for|voted for|voted for|បោះឆ្នោតឲ្យ|Who did you vote for?|តើអ្នកបានបោះឆ្នោតឲ្យនរណា?
warn about|warned about|warned about|ព្រមានអំពី|They warned us about the storm.|ពួកគេបានព្រមានយើងអំពីព្យុះ។
wish for|wished for|wished for|ប្រាថ្នាចង់បាន|What do you wish for?|តើអ្នកប្រាថ្នាចង់បានអ្វី?
work for|worked for|worked for|ធ្វើការឲ្យ|She works for a big company.|នាងធ្វើការឲ្យក្រុមហ៊ុនធំមួយ។
write to|wrote to|written to|សរសេរផ្ញើទៅ|I wrote to my pen pal.|ខ្ញុំបានសរសេរសំបុត្រផ្ញើទៅមិត្តឆ្លើយឆ្លង។
yell at|yelled at|yelled at|ស្រែកដាក់|The coach yelled at the players.|គ្រូបង្វឹកបានស្រែកដាក់កីឡាករ។
beef up|beefed up|beefed up|ពង្រឹង|They beefed up security.|ពួកគេបានពង្រឹងសន្តិសុខ។
brighten up|brightened up|brightened up|ធ្វើឲ្យភ្លឺ / សប្បាយឡើង|Flowers brighten up the room.|ផ្កាធ្វើឲ្យបន្ទប់ភ្លឺស្វាង។
buy into|bought into|bought into|ជឿ (គំនិត)|I don't buy into that idea.|ខ្ញុំមិនជឿគំនិតនោះទេ។
check into|checked into|checked into|ចុះឈ្មោះចូល (សណ្ឋាគារ)|We checked into the hotel at noon.|យើងបានចុះឈ្មោះចូលសណ្ឋាគារនៅថ្ងៃត្រង់។
cheer on|cheered on|cheered on|លើកទឹកចិត្ត (ពេលប្រកួត)|Fans cheered on their team.|អ្នកគាំទ្របានលើកទឹកចិត្តក្រុមរបស់ពួកគេ។
chop down|chopped down|chopped down|កាប់រំលំ|They chopped down the tree.|ពួកគេបានកាប់រំលំដើមឈើ។
chop up|chopped up|chopped up|ចិញ្ច្រាំ|Chop up the garlic.|ចិញ្ច្រាំខ្ទឹមស។
clean out|cleaned out|cleaned out|សម្អាតឲ្យអស់|Clean out the fridge.|សម្អាតទូទឹកកកឲ្យស្អាត។
dig up|dug up|dug up|ជីកឡើង / រកឃើញ|The dog dug up a bone.|ឆ្កែបានជីកឆ្អឹងមួយឡើង។
divide up|divided up|divided up|ចែកគ្នា|Divide up the money equally.|ចែកលុយគ្នាឲ្យស្មើ។
ease up|eased up|eased up|បន្ធូរ / ស្រាល|The traffic eased up.|ចរាចរណ៍បានធូរស្រាល។
eat away at|ate away at|eaten away at|ស៊ីបន្តិចម្ដងៗ|Rust ate away at the metal.|ច្រេះស៊ីដែកបន្តិចម្ដងៗ។
even out|evened out|evened out|ធ្វើឲ្យស្មើ|Prices evened out.|តម្លៃបានស្មើគ្នាវិញ។
feed on|fed on|fed on|ស៊ីជាអាហារ|Cows feed on grass.|គោស៊ីស្មៅជាអាហារ។
flag down|flagged down|flagged down|គ្រវីដៃឲ្យឈប់|I flagged down a taxi.|ខ្ញុំបានគ្រវីដៃឲ្យតាក់ស៊ីឈប់។
flip through|flipped through|flipped through|បើកមើលរំលងៗ|She flipped through the menu.|នាងបានបើកមើលម៉ឺនុយរំលងៗ។
freshen up|freshened up|freshened up|លាងមុខ / ធ្វើខ្លួនឲ្យស្រស់|I'll freshen up before dinner.|ខ្ញុំនឹងលាងមុខធ្វើខ្លួនឲ្យស្រស់មុនអាហារពេលល្ងាច។
gang up on|ganged up on|ganged up on|រួមគ្នាធ្វើបាប|The boys ganged up on him.|ក្មេងប្រុសៗបានរួមគ្នាធ្វើបាបគាត់។
gloss over|glossed over|glossed over|និយាយរំលងៗ (លាក់បញ្ហា)|He glossed over the problems.|គាត់បាននិយាយរំលងបញ្ហាៗ។
hammer out|hammered out|hammered out|ចរចាឲ្យបានព្រមព្រៀង|They hammered out a deal.|ពួកគេបានចរចាឲ្យបានកិច្ចព្រមព្រៀងមួយ។
hear out|heard out|heard out|ស្ដាប់ឲ្យចប់|Please hear me out.|សូមស្ដាប់ខ្ញុំនិយាយឲ្យចប់សិន។
hold against|held against|held against|ប្រកាន់ទោស|I won't hold it against you.|ខ្ញុំនឹងមិនប្រកាន់ទោសអ្នកទេ។
hush up|hushed up|hushed up|លាក់រឿង|They tried to hush up the scandal.|ពួកគេបានព្យាយាមលាក់រឿងអាស្រូវ។
knuckle down|knuckled down|knuckled down|ផ្ដោតខិតខំធ្វើ|It's time to knuckle down and study.|ដល់ពេលផ្ដោតខិតខំរៀនហើយ។
let up|let up|let up|ស្រាក / ឈប់|The rain didn't let up all day.|ភ្លៀងមិនបានស្រាកពេញមួយថ្ងៃ។
lock away|locked away|locked away|ចាក់សោទុក|Lock away your valuables.|ចាក់សោទុករបស់មានតម្លៃរបស់អ្នក។
log off|logged off|logged off|ចាកចេញពីប្រព័ន្ធ|Log off before you leave.|ចាកចេញពីប្រព័ន្ធមុនពេលអ្នកចាកចេញ។
max out|maxed out|maxed out|ប្រើអស់កម្រិត|He maxed out his credit card.|គាត់បានប្រើកាតឥណទានអស់កម្រិត។
measure out|measured out|measured out|វាស់ចេញ|Measure out two cups of rice.|វាស់អង្ករពីរកែវចេញ។
mess with|messed with|messed with|រំខាន / លេងជាមួយ|Don't mess with my phone.|កុំលេងទូរស័ព្ទរបស់ខ្ញុំ។
mop up|mopped up|mopped up|ជូតសម្អាត|Mop up the spilled water.|ជូតសម្អាតទឹកដែលកំពប់។
muddle through|muddled through|muddled through|ធ្វើបានទោះមិនច្បាស់|We muddled through the exam.|យើងបានធ្វើការប្រឡងរួចទោះមិនសូវច្បាស់។
nail down|nailed down|nailed down|កំណត់ឲ្យច្បាស់|Let's nail down the date.|តោះកំណត់កាលបរិច្ឆេទឲ្យច្បាស់។
peter out|petered out|petered out|រសាត់បាត់បន្តិចម្ដងៗ|The path petered out in the forest.|ផ្លូវតូចបានបាត់បន្តិចម្ដងៗក្នុងព្រៃ។
pluck up|plucked up|plucked up|ប្រមូលភាពក្លាហាន|He plucked up the courage to speak.|គាត់បានប្រមូលភាពក្លាហានដើម្បីនិយាយ។
pore over|pored over|pored over|ពិនិត្យយ៉ាងល្អិត|She pored over the map.|នាងបានពិនិត្យផែនទីយ៉ាងល្អិត។
power off|powered off|powered off|បិទម៉ាស៊ីន|Power off your phone on the plane.|បិទទូរស័ព្ទរបស់អ្នកនៅលើយន្តហោះ។
prop up|propped up|propped up|ទប់ / គាំទ្រ|Prop up the door with a chair.|ទប់ទ្វារដោយកៅអី។
push in|pushed in|pushed in|កាត់ជួរ|Don't push in, wait your turn.|កុំកាត់ជួរ ចាំវេនរបស់អ្នក។
quiet down|quieted down|quieted down|ស្ងៀម / ស្ងប់|The class quieted down.|ថ្នាក់បានស្ងៀមស្ងាត់វិញ។
rack up|racked up|racked up|ប្រមូលបានច្រើន|She racked up many awards.|នាងបានប្រមូលពានរង្វាន់ជាច្រើន។
rake in|raked in|raked in|រកលុយបានច្រើន|The film raked in millions.|ភាពយន្តនេះរកលុយបានរាប់លាន។
ramp up|ramped up|ramped up|បង្កើនយ៉ាងលឿន|They ramped up production.|ពួកគេបានបង្កើនការផលិតយ៉ាងលឿន។
reel in|reeled in|reeled in|ទាញ (ត្រី) / ទាក់ទាញ|He reeled in a big fish.|គាត់បានទាញត្រីធំមួយឡើង។
ride out|rode out|ridden out|ឆ្លងផុតដោយសុវត្ថិភាព|We rode out the storm at home.|យើងបានឆ្លងផុតព្យុះនៅផ្ទះ។
scoop up|scooped up|scooped up|ដួស / ឱបលើក|She scooped up the baby.|នាងបានឱបលើកទារក។
scrape together|scraped together|scraped together|ប្រមូលបន្តិចម្ដងៗ|We scraped together enough money.|យើងបានប្រមូលលុយបន្តិចម្ដងៗរហូតគ្រប់គ្រាន់។
scribble down|scribbled down|scribbled down|សរសេររហ័ស|I scribbled down her number.|ខ្ញុំបានសរសេរលេខរបស់នាងយ៉ាងរហ័ស។
seal off|sealed off|sealed off|បិទខ្ទប់|Police sealed off the area.|ប៉ូលិសបានបិទខ្ទប់តំបន់នោះ។
seek out|sought out|sought out|ស្វែងរក|She sought out the best teacher.|នាងបានស្វែងរកគ្រូដែលពូកែបំផុត។
settle for|settled for|settled for|ទទួលយក (ទោះមិនល្អបំផុត)|Don't settle for less.|កុំទទួលយកអ្វីដែលតិចជាងនេះ។
shape up|shaped up|shaped up|រីកចម្រើនល្អ / កែខ្លួន|The project is shaping up nicely.|គម្រោងកំពុងរីកចម្រើនបានល្អ។
shoot down|shot down|shot down|បាញ់ទម្លាក់ / បដិសេធ|They shot down my idea.|ពួកគេបានបដិសេធគំនិតរបស់ខ្ញុំ។
shore up|shored up|shored up|ពង្រឹង / ទប់|They shored up the river bank.|ពួកគេបានពង្រឹងច្រាំងទន្លេ។
shrug off|shrugged off|shrugged off|មិនខ្វល់|He shrugged off the injury.|គាត់មិនខ្វល់នឹងរបួសនោះទេ។
sift through|sifted through|sifted through|ពិនិត្យរើសម្ដងមួយៗ|She sifted through the old letters.|នាងបានពិនិត្យសំបុត្រចាស់ៗម្ដងមួយៗ។
simmer down|simmered down|simmered down|ស្ងប់ចិត្ត|Simmer down and listen.|ស្ងប់ចិត្ត ហើយស្ដាប់។
slack off|slacked off|slacked off|ខ្ជិលច្រអូស|Don't slack off before the exam.|កុំខ្ជិលច្រអូសមុនការប្រឡង។
slim down|slimmed down|slimmed down|សម្រកទម្ងន់ / កាត់បន្ថយ|He slimmed down for the race.|គាត់បានសម្រកទម្ងន់សម្រាប់ការប្រណាំង។
snap at|snapped at|snapped at|ស្ដីឲ្យភ្លាមៗ (ដោយខឹង)|Sorry I snapped at you.|សុំទោសដែលខ្ញុំខឹងស្ដីឲ្យអ្នក។
spice up|spiced up|spiced up|ធ្វើឲ្យរស់រវើក|Music can spice up a party.|តន្ត្រីអាចធ្វើឲ្យពិធីជប់លៀងរស់រវើក។
splash out|splashed out|splashed out|ចាយលុយច្រើន|We splashed out on a nice dinner.|យើងបានចាយលុយច្រើនលើអាហារពេលល្ងាចដ៏ល្អ។
spruce up|spruced up|spruced up|តុបតែងឲ្យស្អាត|They spruced up the old café.|ពួកគេបានតុបតែងហាងកាហ្វេចាស់ឲ្យស្អាត។
squeeze in|squeezed in|squeezed in|រកពេល / ញាត់ចូល|I can squeeze in a meeting at three.|ខ្ញុំអាចរកពេលប្រជុំនៅម៉ោងបីបាន។
stay over|stayed over|stayed over|ស្នាក់នៅមួយយប់|You can stay over at my place.|អ្នកអាចស្នាក់នៅផ្ទះខ្ញុំមួយយប់បាន។
tag along|tagged along|tagged along|ទៅតាម|Can I tag along?|តើខ្ញុំអាចទៅតាមបានទេ?
taper off|tapered off|tapered off|ថយចុះបន្តិចម្ដងៗ|The rain tapered off.|ភ្លៀងបានស្រាកបន្តិចម្ដងៗ។
tear apart|tore apart|torn apart|ហែកខ្ទេច / បំបែក|The war tore the country apart.|សង្គ្រាមបានបំបែកប្រទេស។
tense up|tensed up|tensed up|តឹងសរសៃ|Don't tense up, just relax.|កុំតឹងសរសៃ សម្រាកចុះ។
thaw out|thawed out|thawed out|រលាយទឹកកក|Thaw out the meat before cooking.|រំលាយទឹកកកសាច់មុនពេលចម្អិន។
tighten up|tightened up|tightened up|រឹតបន្តឹង|They tightened up the rules.|ពួកគេបានរឹតបន្តឹងច្បាប់។
trail behind|trailed behind|trailed behind|ដើរតាមក្រោយ / ចាញ់|Our team trailed behind by two goals.|ក្រុមរបស់យើងចាញ់ពីរគ្រាប់។
trim down|trimmed down|trimmed down|កាត់បន្ថយ|Trim down your essay to 200 words.|កាត់បន្ថយតែងសេចក្ដីរបស់អ្នកឲ្យនៅ ២០០ ពាក្យ។
tune up|tuned up|tuned up|ជួសជុល (ម៉ាស៊ីន) / ស៊ីសំឡេង|The band tuned up before the show.|ក្រុមតន្ត្រីបានស៊ីសំឡេងមុនការសម្ដែង។
vote out|voted out|voted out|បោះឆ្នោតទម្លាក់|They voted out the old leader.|ពួកគេបានបោះឆ្នោតទម្លាក់អ្នកដឹកនាំចាស់។
walk around|walked around|walked around|ដើរជុំវិញ|We walked around the lake.|យើងបានដើរជុំវិញបឹង។
ward off|warded off|warded off|ការពារ / បណ្ដេញ|Garlic is said to ward off colds.|គេនិយាយថាខ្ទឹមសការពារជំងឺផ្ដាសាយ។
water down|watered down|watered down|ធ្វើឲ្យស្រាល / លាយទឹក|They watered down the plan.|ពួកគេបានធ្វើឲ្យផែនការស្រាលជាងមុន។
weigh down|weighed down|weighed down|ធ្វើឲ្យធ្ងន់|Heavy bags weighed me down.|កាបូបធ្ងន់ៗធ្វើឲ្យខ្ញុំពិបាកដើរ។
well up|welled up|welled up|ស្រក់ (ទឹកភ្នែក)|Tears welled up in her eyes.|ទឹកភ្នែកបានរលីងរលោងក្នុងភ្នែកនាង។
whip up|whipped up|whipped up|ធ្វើរហ័ស / ញុះញង់|She whipped up a quick meal.|នាងបានធ្វើម្ហូបមួយយ៉ាងរហ័ស។
wolf down|wolfed down|wolfed down|ញ៉ាំយ៉ាងលឿន|He wolfed down his lunch.|គាត់បានញ៉ាំអាហារថ្ងៃត្រង់យ៉ាងលឿន។
bang on|banged on|banged on|និយាយរឿងដដែលៗ|He keeps banging on about his new car.|គាត់និយាយរឿងឡានថ្មីរបស់គាត់ដដែលៗ។
bank on|banked on|banked on|ពឹងផ្អែកលើ|Don't bank on the bus being on time.|កុំពឹងថាឡានក្រុងនឹងមកទាន់ម៉ោង។
break even|broke even|broken even|រួចដើម (មិនចំណេញ មិនខាត)|The shop broke even in its first year.|ហាងបានរួចដើមក្នុងឆ្នាំដំបូង។
butt in|butted in|butted in|លូកមាត់ / កាត់សម្ដី|Sorry to butt in, but I have a question.|សុំទោសដែលកាត់សម្ដី ប៉ុន្តែខ្ញុំមានសំណួរមួយ។
cash in on|cashed in on|cashed in on|ទាញយកប្រយោជន៍ (រកលុយ)|Shops cash in on the New Year holiday.|ហាងនានាទាញយកប្រយោជន៍ពីថ្ងៃបុណ្យចូលឆ្នាំ។
dawn on|dawned on|dawned on|ស្រាប់តែដឹង / យល់ភ្លាម|It dawned on me that I had left my keys.|ខ្ញុំស្រាប់តែដឹងថាខ្ញុំភ្លេចកូនសោ។
dwell on|dwelt on|dwelt on|គិតតែពីរឿងនោះ (រឿងមិនល្អ)|Don't dwell on your mistakes.|កុំគិតតែពីកំហុសរបស់អ្នក។
egg on|egged on|egged on|ញុះញង់ / លើកទឹកចិត្ត (ឲ្យធ្វើរឿងមិនល្អ)|His friends egged him on to jump.|មិត្តភក្ដិញុះញង់ឲ្យគាត់លោត។
hit it off|hit it off|hit it off|ត្រូវចិត្តគ្នាភ្លាម|We hit it off at the first meeting.|យើងត្រូវចិត្តគ្នាភ្លាមតាំងពីជួបលើកដំបូង។
lock in|locked in|locked in|កំណត់ឲ្យជាប់ (តម្លៃ កិច្ចព្រមព្រៀង)|Book now to lock in the low price.|កក់ឥឡូវដើម្បីកំណត់តម្លៃទាបឲ្យជាប់។
luck out|lucked out|lucked out|សំណាងល្អ|We lucked out with the weather.|យើងសំណាងល្អដែលអាកាសធាតុល្អ។
pin down|pinned down|pinned down|កំណត់ឲ្យច្បាស់|It's hard to pin down the exact cause.|វាពិបាកកំណត់មូលហេតុឲ្យច្បាស់។
rush into|rushed into|rushed into|ធ្វើអ្វីដោយប្រញាប់ពេក|Don't rush into marriage.|កុំប្រញាប់រៀបការពេក។
snap out of|snapped out of|snapped out of|ងើបចេញពី (អារម្មណ៍មិនល្អ)|Come on, snap out of it!|តោះ ងើបចេញពីអារម្មណ៍នេះទៅ!
storm off|stormed off|stormed off|ដើរចេញទាំងខឹង|She stormed off after the argument.|នាងដើរចេញទាំងខឹងក្រោយការឈ្លោះ។
swear by|swore by|sworn by|ជឿជាក់ខ្លាំងលើ (ប្រសិទ្ធភាព)|My mum swears by ginger tea.|ម្ដាយខ្ញុំជឿជាក់ខ្លាំងលើតែខ្ញី។
trail off|trailed off|trailed off|សំឡេងស្រកទៅៗ (និយាយមិនចប់)|Her voice trailed off.|សំឡេងនាងស្រកទៅៗ។
veg out|vegged out|vegged out|អង្គុយសម្រាកមិនធ្វើអ្វី|I just want to veg out this weekend.|ខ្ញុំគ្រាន់តែចង់សម្រាកមិនធ្វើអ្វីចុងសប្ដាហ៍នេះ។
zoom in|zoomed in|zoomed in|ពង្រីក (រូបភាព)|Zoom in to see the details.|ពង្រីកដើម្បីមើលព័ត៌មានលម្អិត។`
};

XC.verbs = {};
for (const lv in XC.verbsRaw) {
  XC.verbs[lv] = XC.verbsRaw[lv].trim().split("\n").map(l => {
    const [v1, v2, v3, kh, ex, exkh = ""] = l.split("|");
    return { v1, v2, v3, kh, ex, exkh, lv: +lv, irr: !/ed$/.test(v2.split(" ")[0]) };
  });
}

/* ---------- Grammar A1–C2 ----------
   q: [question, [options], index of correct answer] */
XC.grammar = [
 {lv:"A1",title:"Verb to be: am / is / are",rule:"I → am · He / She / It → is · You / We / They → are",
  kh:"ប្រើ «to be» ដើម្បីប្រាប់ថា នរណាម្នាក់ជាអ្វី នៅទីណា ឬមានសភាពយ៉ាងដូចម្ដេច។",
  ex:[["I [am] a student.","ខ្ញុំជាសិស្ស។"],["She [is] happy.","នាងសប្បាយចិត្ត។"],["They [are] at home.","ពួកគេនៅផ្ទះ។"]],
  q:[["I ___ from Cambodia.",["am","is","are"],0],["My sister ___ a nurse.",["am","is","are"],1],["We ___ hungry.",["am","is","are"],2],["It ___ hot today.",["am","is","are"],1],["You ___ my friend.",["am","is","are"],2]]},
 {lv:"A1",title:"Present Simple",rule:"I / You / We / They + V1 · He / She / It + V1 + s / es",
  kh:"ប្រើសម្រាប់ទម្លាប់ ឬការពិតទូទៅ។ ពេលប្រធានជា he, she, it ត្រូវថែម -s ឬ -es លើ verb។",
  ex:[["I [drink] coffee every morning.","ខ្ញុំផឹកកាហ្វេរាល់ព្រឹក។"],["He [works] in a bank.","គាត់ធ្វើការនៅធនាគារ។"],["The sun [rises] in the east.","ព្រះអាទិត្យរះនៅទិសខាងកើត។"]],
  q:[["She ___ to school by bike.",["go","goes","going"],1],["They ___ rice every day.",["eat","eats","eating"],0],["My father ___ TV at night.",["watch","watches","watchs"],1],["I ___ English.",["study","studies","studys"],0],["It ___ a lot in July.",["rain","rains","raining"],1]]},
 {lv:"A1",title:"Past Simple",rule:"Subject + V2 · Regular: V1 + ed (work → worked) · Irregular: go → went",
  kh:"ប្រើសម្រាប់សកម្មភាពដែលបានកើតឡើង ហើយបញ្ចប់រួចនៅអតីតកាល ដូចជា yesterday, last week, in 2020។",
  ex:[["I [visited] Siem Reap last year.","ខ្ញុំបានទៅលេងសៀមរាបកាលពីឆ្នាំមុន។"],["We [went] to the market yesterday.","យើងបានទៅផ្សារកាលពីម្សិលមិញ។"],["She [bought] a new bag.","នាងបានទិញកាបូបថ្មីមួយ។"]],
  q:[["Yesterday I ___ to the cinema.",["go","went","gone"],1],["She ___ a letter last night.",["write","wrote","written"],1],["We ___ football on Sunday.",["play","played","playing"],1],["He ___ his keys.",["lose","lost","losed"],1],["They ___ dinner at 7.",["eat","ate","eaten"],1]]},
 {lv:"A1",title:"a / an",rule:"a + សំឡេងព្យញ្ជនៈ (a book) · an + សំឡេងស្រៈ (an apple, an hour)",
  kh:"ប្រើ a ឬ an មុននាមឯកវចនៈ។ មើលលើ «សំឡេង» មិនមែនអក្សរទេ៖ an hour (h មិនបញ្ចេញសំឡេង), a university (សំឡេង yu)។",
  ex:[["I have [a] cat.","ខ្ញុំមានឆ្មាមួយ។"],["She eats [an] egg.","នាងញ៉ាំពងមួយ។"],["Wait [an] hour.","រង់ចាំមួយម៉ោង។"]],
  q:[["___ orange",["a","an"],1],["___ teacher",["a","an"],0],["___ umbrella",["a","an"],1],["___ university",["a","an"],0],["___ hour",["a","an"],1]]},
 {lv:"A2",title:"Present Continuous",rule:"am / is / are + V-ing",
  kh:"ប្រើសម្រាប់សកម្មភាពដែលកំពុងកើតឡើងឥឡូវនេះ ឬនៅពេលនេះ។ ពាក្យញឹកញាប់៖ now, right now, at the moment, Look!, Listen!",
  ex:[["I [am reading] a book now.","ខ្ញុំកំពុងអានសៀវភៅឥឡូវនេះ។"],["They [are playing] football.","ពួកគេកំពុងលេងបាល់ទាត់។"],["[Is] it [raining]?","តើមេឃកំពុងភ្លៀងទេ?"]],
  q:[["Listen! The baby ___.",["cries","is crying","cry"],1],["We ___ dinner now.",["are having","have","has"],0],["She ___ TV at the moment.",["watches","is watching","watch"],1],["Look! It ___.",["rains","is raining","rain"],1],["I ___ for the bus right now.",["wait","am waiting","waits"],1]]},
 {lv:"A2",title:"Comparatives",rule:"adj ខ្លី + er + than · more + adj វែង + than · good → better · bad → worse",
  kh:"ប្រើសម្រាប់ប្រៀបធៀបរបស់ពីរ។ adjective ខ្លីថែម -er ឯ adjective វែងប្រើ more ពីមុខ។",
  ex:[["My brother is [taller than] me.","បងប្រុសខ្ញុំខ្ពស់ជាងខ្ញុំ។"],["English is [more interesting than] math.","ភាសាអង់គ្លេសគួរឲ្យចាប់អារម្មណ៍ជាងគណិតវិទ្យា។"],["Today is [better than] yesterday.","ថ្ងៃនេះល្អជាងម្សិលមិញ។"]],
  q:[["A car is ___ than a bike.",["fast","faster","more fast"],1],["This book is ___ than that one.",["more expensive","expensiver","expensive"],0],["My test was ___ than yours.",["bad","worse","badder"],1],["Phnom Penh is ___ than Kep.",["big","bigger","more big"],1],["She is ___ than her sister.",["more beautiful","beautifuler","beautiful"],0]]},
 {lv:"B1",title:"Present Perfect",rule:"have / has + V3",
  kh:"ប្រើសម្រាប់បទពិសោធន៍ ឬសកម្មភាពនៅអតីតកាលដែលនៅទាក់ទងនឹងបច្ចុប្បន្ន។ ពាក្យញឹកញាប់៖ ever, never, already, yet, since, for។",
  ex:[["I [have visited] Japan twice.","ខ្ញុំធ្លាប់ទៅជប៉ុនពីរដង។"],["She [has already eaten].","នាងញ៉ាំរួចហើយ។"],["We [have lived] here for five years.","យើងរស់នៅទីនេះបានប្រាំឆ្នាំហើយ។"]],
  q:[["I ___ never ___ sushi.",["have … eaten","has … ate","have … ate"],0],["She ___ here since 2020.",["has worked","have worked","worked"],0],["Have you ever ___ to Bangkok?",["be","been","was"],1],["They ___ just ___.",["have … arrived","has … arrived","have … arrive"],0],["He hasn't finished his homework ___.",["already","yet","since"],1]]},
 {lv:"B1",title:"First Conditional",rule:"If + present simple, will + V1",
  kh:"ប្រើសម្រាប់លក្ខខណ្ឌដែលអាចកើតឡើងពិតនៅពេលអនាគត។",
  ex:[["[If it rains], I [will stay] home.","បើភ្លៀង ខ្ញុំនឹងនៅផ្ទះ។"],["[If you study] hard, you [will pass].","បើអ្នករៀនខ្លាំង អ្នកនឹងប្រឡងជាប់។"],["She [will be] happy [if you call] her.","នាងនឹងសប្បាយចិត្ត បើអ្នកទូរស័ព្ទទៅនាង។"]],
  q:[["If you ___ late, you will miss the bus.",["are","will be","were"],0],["If it ___ sunny, we will go to the beach.",["is","will be","was"],0],["I ___ you if I see him.",["tell","will tell","told"],1],["If she ___ the train, she will arrive at 9.",["catches","will catch","caught"],0],["We ___ late if we don't hurry.",["are","will be","were"],1]]},
 {lv:"B2",title:"Passive Voice",rule:"be + V3 (+ by …)",
  kh:"ប្រើពេលយើងចង់ផ្ដោតលើអ្វីដែលទទួលសកម្មភាព ជាជាងអ្នកធ្វើសកម្មភាព។",
  ex:[["Angkor Wat [was built] in the 12th century.","អង្គរវត្តត្រូវបានសាងសង់នៅសតវត្សទី ១២។"],["English [is spoken] all over the world.","ភាសាអង់គ្លេសត្រូវបាននិយាយនៅទូទាំងពិភពលោក។"],["The letter [will be sent] tomorrow.","លិខិតនឹងត្រូវផ្ញើនៅថ្ងៃស្អែក។"]],
  q:[["Rice ___ in Battambang.",["grows","is grown","grown"],1],["The window ___ by the boy yesterday.",["was broken","broke","is broken"],0],["The new road ___ next year.",["will be built","will build","is built"],0],["This song ___ by millions of people.",["has heard","has been heard","heard"],1],["The emails ___ every morning.",["are checked","check","checked"],0]]},
 {lv:"B2",title:"Second Conditional",rule:"If + past simple, would + V1",
  kh:"ប្រើសម្រាប់ស្ថានភាពស្រមៃ ឬមិនទំនងកើតឡើងនៅបច្ចុប្បន្ន ឬអនាគត។ ជាមួយ I ប្រើ were ក្នុងការសរសេរផ្លូវការ។",
  ex:[["[If I had] a lot of money, I [would travel] the world.","បើខ្ញុំមានលុយច្រើន ខ្ញុំនឹងធ្វើដំណើរជុំវិញពិភពលោក។"],["[If I were] you, I [would study] harder.","បើខ្ញុំជាអ្នក ខ្ញុំនឹងរៀនឲ្យខ្លាំងជាងនេះ។"],["What [would] you [do] [if you won] the lottery?","តើអ្នកនឹងធ្វើអ្វី បើអ្នកឈ្នះឆ្នោត?"]],
  q:[["If I ___ a car, I would drive to Kampot.",["have","had","will have"],1],["If she knew the answer, she ___ tell us.",["will","would","can"],1],["If I ___ you, I'd accept the offer.",["am","were","will be"],1],["They ___ happier if they lived near the sea.",["will be","would be","are"],1],["If it ___ cheaper, I would buy it.",["is","was","will be"],1]]},
 {lv:"C1",title:"Third Conditional",rule:"If + had + V3, would have + V3",
  kh:"ប្រើសម្រាប់និយាយអំពីអតីតកាលដែលមិនបានកើតឡើង និងលទ្ធផលស្រមៃ ជាញឹកញាប់សម្រាប់បង្ហាញការសោកស្ដាយ។",
  ex:[["[If I had studied], I [would have passed].","បើខ្ញុំបានរៀន ខ្ញុំប្រហែលជាប្រឡងជាប់ហើយ។"],["[If she had left] earlier, she [wouldn't have missed] the flight.","បើនាងចេញមុននេះ នាងមិនខកជើងហោះហើរទេ។"],["We [would have come] [if you had invited] us.","យើងប្រហែលជាមកហើយ បើអ្នកបានអញ្ជើញយើង។"]],
  q:[["If he ___ harder, he would have won.",["had trained","trained","has trained"],0],["I ___ you if I had known.",["would help","would have helped","helped"],1],["If they had taken a taxi, they ___ late.",["wouldn't have been","wouldn't be","weren't"],0],["If you ___ me, I would have come.",["called","had called","have called"],1],["She would have bought it if it ___ cheaper.",["had been","was","has been"],0]]},
 {lv:"C1",title:"Relative Clauses",rule:"who (មនុស្ស) · which (វត្ថុ) · whose (កម្មសិទ្ធិ) · where (ទីកន្លែង) · non-defining = មានក្បៀស",
  kh:"ប្រើដើម្បីផ្ដល់ព័ត៌មានបន្ថែមអំពីនាម។ Non-defining clause (មានក្បៀស) គ្រាន់តែជាព័ត៌មានបន្ថែម ហើយមិនអាចប្រើ that បានទេ។",
  ex:[["The woman [who lives next door] is a doctor.","ស្ត្រីដែលរស់នៅជាប់ផ្ទះគឺជាវេជ្ជបណ្ឌិត។"],["Siem Reap, [which is famous for Angkor], attracts millions of visitors.","សៀមរាប ដែលល្បីដោយសារអង្គរ ទាក់ទាញភ្ញៀវរាប់លាននាក់។"],["That's the man [whose car] was stolen.","នោះជាបុរសដែលឡានរបស់គាត់ត្រូវបានគេលួច។"]],
  q:[["The book ___ I bought is great.",["which","who","whose"],0],["She's the teacher ___ helped me.",["who","which","where"],0],["This is the town ___ I was born.",["which","where","who"],1],["My father, ___ is 60, still works.",["that","who","which"],1],["The girl ___ phone rang left the room.",["who","whose","which"],1]]},
 {lv:"C2",title:"Inversion for Emphasis",rule:"Never / Rarely / Not only / Hardly + auxiliary + subject",
  kh:"ប្រើក្នុងការសរសេរផ្លូវការ ឬដើម្បីសង្កត់ធ្ងន់ ដោយដាក់ auxiliary verb (do, have, should…) មុនប្រធាន។",
  ex:[["[Never have I seen] such a beautiful sunset.","ខ្ញុំមិនដែលឃើញថ្ងៃលិចស្អាតបែបនេះទេ។"],["[Not only did she win], but she also broke the record.","នាងមិនត្រឹមតែឈ្នះទេ ថែមទាំងបំបែកកំណត់ត្រាទៀតផង។"],["[Hardly had we arrived] when it started to rain.","យើងទើបតែមកដល់ មេឃក៏ចាប់ផ្ដើមភ្លៀង។"]],
  q:[["Rarely ___ such talent.",["we see","do we see","we do see"],1],["Not only ___ late, but he also forgot his book.",["he was","was he","he is"],1],["Never ___ so tired.",["I have felt","have I felt","I felt"],1],["Hardly ___ the door when the phone rang.",["had I closed","I had closed","I closed"],0],["Under no circumstances ___ leave the room.",["you should","should you","you must"],1]]},
 {lv:"C2",title:"The Subjunctive",rule:"suggest / insist / demand / It's essential + that + subject + base verb · I wish I were…",
  kh:"ប្រើសម្រាប់ការស្នើ ការតម្រូវ ឬបំណងប្រាថ្នា។ Verb ប្រើទម្រង់ដើម (មិនថែម s) សូម្បីតែប្រធានជា he ឬ she។",
  ex:[["The doctor suggested that he [rest].","វេជ្ជបណ្ឌិតបានស្នើឲ្យគាត់សម្រាក។"],["It is essential that she [be] on time.","វាចាំបាច់ណាស់ដែលនាងត្រូវមកទាន់ពេល។"],["I wish I [were] taller.","ខ្ញុំប្រាថ្នាចង់ខ្ពស់ជាងនេះ។"]],
  q:[["I insist that he ___ the truth.",["tells","tell","told"],1],["It's vital that everyone ___ present.",["is","be","are"],1],["She demanded that the manager ___.",["come","comes","came"],0],["If I ___ you, I'd apologize.",["was","were","am"],1],["They recommended that she ___ a lawyer.",["hire","hires","hired"],0]]}
];


/* ---------- More grammar lessons (A1, A2) ---------- */
XC.grammar.push(
 {lv:"A1",title:"There is / There are",rule:"There is + នាមឯកវចនៈ · There are + នាមពហុវចនៈ",
  kh:"ប្រើដើម្បីប្រាប់ថា មានអ្វីមួយនៅកន្លែងណាមួយ។ ពេលសួរ ប្រើ Is there…? / Are there…?",
  ex:[["[There is] a cat on the bed.","មានឆ្មាមួយនៅលើគ្រែ។"],["[There are] three students in the room.","មានសិស្សបីនាក់នៅក្នុងបន្ទប់។"],["[Is there] a bank near here?","តើមានធនាគារនៅជិតនេះទេ?"]],
  q:[["There ___ a book on the table.",["is","are","am"],0],["There ___ many people at the market.",["is","are","be"],1],["___ there a hospital in your town?",["Is","Are","Do"],0],["There ___ two cats in my house.",["is","are","has"],1],["There ___ some water in the bottle.",["is","are","have"],0]]},
 {lv:"A1",title:"Possessive adjectives: my, your, his, her…",rule:"I → my · you → your · he → his · she → her · it → its · we → our · they → their",
  kh:"ប្រើដើម្បីបង្ហាញថា វត្ថុជារបស់នរណា។ ដាក់ពីមុខនាមជានិច្ច។",
  ex:[["This is [my] book.","នេះជាសៀវភៅរបស់ខ្ញុំ។"],["[Her] name is Srey Mom.","ឈ្មោះរបស់នាងគឺស្រីមុំ។"],["[Their] house is big.","ផ្ទះរបស់ពួកគេធំ។"]],
  q:[["I love ___ mother.",["my","me","I"],0],["He washes ___ car every Sunday.",["her","his","its"],1],["We like ___ teacher.",["our","us","we"],0],["The dog is eating ___ food.",["it's","its","his"],1],["They visited ___ grandparents.",["them","their","they"],1]]},
 {lv:"A1",title:"can / can't",rule:"Subject + can / can't + V1 (មិនថែម s ទេ)",
  kh:"ប្រើ can ដើម្បីនិយាយអំពីសមត្ថភាព (ចេះ / អាច) ឬសុំការអនុញ្ញាត។ can't = cannot = មិនអាច / មិនចេះ។",
  ex:[["I [can swim].","ខ្ញុំចេះហែលទឹក។"],["She [can't drive].","នាងមិនចេះបើកឡានទេ។"],["[Can] I [open] the window?","តើខ្ញុំអាចបើកបង្អួចបានទេ?"]],
  q:[["My brother ___ speak three languages.",["can","cans","can to"],0],["Penguins ___ fly.",["can","can't","are"],1],["___ you help me, please?",["Can","Do","Are"],0],["She can ___ the guitar.",["plays","play","playing"],1],["I'm sorry, I ___ come tomorrow.",["can","can't","not can"],1]]},
 {lv:"A1",title:"Prepositions of place: in, on, under, next to",rule:"in (ក្នុង) · on (លើ) · under (ក្រោម) · next to (ក្បែរ) · between (ចន្លោះ) · behind (ក្រោយ)",
  kh:"ប្រើដើម្បីប្រាប់ទីតាំងរបស់វត្ថុ ឬមនុស្ស។",
  ex:[["The phone is [on] the table.","ទូរស័ព្ទនៅលើតុ។"],["The cat is [under] the chair.","ឆ្មានៅក្រោមកៅអី។"],["The bank is [next to] the market.","ធនាគារនៅក្បែរផ្សារ។"]],
  q:[["The keys are ___ my bag.",["in","on","under"],0],["The picture is ___ the wall.",["in","on","under"],1],["The dog is sleeping ___ the table.",["on","under","in"],1],["The school is ___ the hospital and the park.",["between","next","under"],0],["My house is ___ the pagoda.",["next to","next","between"],0]]},
 {lv:"A1",title:"Plural nouns",rule:"+s (book → books) · +es (box → boxes) · y → ies (city → cities) · irregular: man → men, child → children",
  kh:"នាមពហុវចនៈ (ច្រើនជាងមួយ) ភាគច្រើនថែម -s។ ពាក្យបញ្ចប់ដោយ s, sh, ch, x ថែម -es។ ពាក្យខ្លះប្ដូរទម្រង់ទាំងស្រុង។",
  ex:[["I have two [brothers].","ខ្ញុំមានបងប្អូនប្រុសពីរនាក់។"],["There are many [buses] in Phnom Penh.","មានឡានក្រុងច្រើននៅភ្នំពេញ។"],["The [children] are playing.","ក្មេងៗកំពុងលេង។"]],
  q:[["one box, two ___",["boxs","boxes","boxies"],1],["one baby, three ___",["babys","babies","babyes"],1],["one man, two ___",["mans","men","mens"],1],["one child, many ___",["childs","children","childrens"],1],["one tooth, all my ___",["tooths","teeth","teeths"],1]]},
 {lv:"A2",title:"Past Continuous",rule:"was / were + V-ing",
  kh:"ប្រើសម្រាប់សកម្មភាពដែលកំពុងកើតឡើងនៅពេលណាមួយក្នុងអតីតកាល ជាញឹកញាប់ជាមួយ when ឬ while។",
  ex:[["I [was sleeping] when you called.","ខ្ញុំកំពុងគេង ពេលអ្នកទូរស័ព្ទមក។"],["They [were playing] football at 5 pm.","ពួកគេកំពុងលេងបាល់ទាត់នៅម៉ោង ៥ ល្ងាច។"],["What [were] you [doing] last night?","តើអ្នកកំពុងធ្វើអ្វីកាលពីយប់មិញ?"]],
  q:[["I ___ TV when the phone rang.",["was watching","watched","am watching"],0],["They ___ dinner at 8 o'clock.",["was having","were having","have"],1],["While she ___, it started to rain.",["was walking","walks","walked"],0],["What ___ you doing at 10 pm?",["was","were","did"],1],["He ___ not listening to the teacher.",["were","was","is"],1]]},
 {lv:"A2",title:"be going to (អនាគត)",rule:"am / is / are + going to + V1",
  kh:"ប្រើសម្រាប់គម្រោងដែលបានសម្រេចចិត្តរួចហើយ ឬការទស្សន៍ទាយពីអ្វីដែលឃើញ។",
  ex:[["I['m going to visit] my grandmother this weekend.","ចុងសប្ដាហ៍នេះ ខ្ញុំនឹងទៅលេងយាយ។"],["Look at the clouds! It['s going to rain].","មើលពពក! មេឃនឹងភ្លៀងហើយ។"],["[Are] you [going to study] abroad?","តើអ្នកនឹងទៅរៀននៅបរទេសទេ?"]],
  q:[["We ___ going to travel to Kampot.",["is","are","am"],1],["She is going ___ a new phone.",["buy","to buy","buying"],1],["Look! The baby ___ going to fall.",["is","are","will"],0],["I ___ going to study tonight.",["am","is","are"],0],["___ they going to come?",["Is","Are","Do"],1]]},
 {lv:"A2",title:"Superlatives",rule:"the + adj ខ្លី + est · the most + adj វែង · good → the best · bad → the worst",
  kh:"ប្រើសម្រាប់ប្រៀបធៀបរបស់បី ឬច្រើនជាងនេះ ដើម្បីបង្ហាញថាមួយណា «បំផុត»។",
  ex:[["Angkor Wat is [the largest] religious monument in the world.","អង្គរវត្តជាវិមានសាសនាធំជាងគេក្នុងពិភពលោក។"],["She is [the most intelligent] student in our class.","នាងជាសិស្សពូកែបំផុតក្នុងថ្នាក់។"],["This is [the best] day of my life.","នេះជាថ្ងៃល្អបំផុតក្នុងជីវិតខ្ញុំ។"]],
  q:[["The Mekong is the ___ river in Cambodia.",["longer","longest","most long"],1],["This is the ___ book I have ever read.",["most interesting","interestingest","more interesting"],0],["He is the ___ player on the team.",["better","best","goodest"],1],["Today is the ___ day of the year.",["hottest","hotest","most hot"],0],["That was the ___ movie ever!",["baddest","worst","worse"],1]]},
 {lv:"A2",title:"some / any · much / many",rule:"some (ប្រយោគវិជ្ជមាន) · any (អវិជ្ជមាន និងសំណួរ) · many + នាមរាប់បាន · much + នាមរាប់មិនបាន",
  kh:"នាមរាប់បាន៖ apple, book, student។ នាមរាប់មិនបាន៖ water, rice, money, time។ How many…? សម្រាប់រាប់បាន, How much…? សម្រាប់រាប់មិនបាន។",
  ex:[["I have [some] friends in Siem Reap.","ខ្ញុំមានមិត្តខ្លះនៅសៀមរាប។"],["There isn't [any] milk in the fridge.","គ្មានទឹកដោះគោក្នុងទូទឹកកកទេ។"],["How [much] money do you have?","តើអ្នកមានលុយប៉ុន្មាន?"]],
  q:[["Do you have ___ brothers?",["some","any","much"],1],["How ___ students are in your class?",["much","many","any"],1],["I'd like ___ water, please.",["some","any","many"],0],["We don't have ___ time.",["many","much","some"],1],["There aren't ___ eggs left.",["some","any","much"],1]]},
 {lv:"A2",title:"Adverbs of frequency",rule:"always (១០០%) · usually · often · sometimes · rarely · never (០%) — ដាក់មុខ verb ធម្មតា តែក្រោយ be",
  kh:"ប្រើដើម្បីប្រាប់ថា យើងធ្វើអ្វីមួយញឹកញាប់ប៉ុណ្ណា។",
  ex:[["I [always] wake up at six.","ខ្ញុំតែងតែភ្ញាក់ម៉ោងប្រាំមួយ។"],["She is [never] late.","នាងមិនដែលមកយឺតទេ។"],["We [sometimes] eat at a restaurant.","ពួកយើងពេលខ្លះញ៉ាំនៅភោជនីយដ្ឋាន។"]],
  q:[["Which word means 100%?",["sometimes","always","rarely"],1],["He ___ late for class.",["is never","never is","never"],0],["I ___ drink coffee in the morning.",["usually","am usually","usual"],0],["Which is correct?",["She goes often to the gym.","She often goes to the gym.","Often she go to the gym."],1],["Which word means 0%?",["never","often","usually"],0]]},
 {lv:"A2",title:"should / must",rule:"should + V1 = ដំបូន្មាន · must + V1 = កាតព្វកិច្ច · mustn't = ហាមឃាត់",
  kh:"should ប្រើដើម្បីផ្ដល់ដំបូន្មាន។ must ប្រើសម្រាប់អ្វីដែលចាំបាច់ត្រូវធ្វើ។ mustn't មានន័យថាមិនត្រូវធ្វើដាច់ខាត។",
  ex:[["You [should drink] more water.","អ្នកគួរផឹកទឹកឲ្យបានច្រើន។"],["You [must wear] a helmet.","អ្នកត្រូវតែពាក់មួកសុវត្ថិភាព។"],["You [mustn't smoke] here.","អ្នកមិនត្រូវជក់បារីនៅទីនេះទេ។"]],
  q:[["You look tired. You ___ go to bed early.",["should","mustn't","shouldn't"],0],["Students ___ cheat in exams.",["must","mustn't","should"],1],["You ___ stop at a red light.",["must","shouldn't","mustn't"],0],["He should ___ a doctor.",["sees","see","to see"],1],["You ___ eat so much sugar.",["should","shouldn't","must"],1]]}
);
{ const order = ["A1","A2","B1","B2","C1","C2"]; XC.grammar.sort((a, b) => order.indexOf(a.lv) - order.indexOf(b.lv)); }


/* ---------- More grammar lessons (B1, B2) ---------- */
XC.grammar.push(
 {lv:"B1",title:"used to",rule:"used to + V1 (ទម្លាប់ពីមុន ដែលឥឡូវលែងធ្វើ) · didn't use to · Did you use to…?",
  kh:"ប្រើសម្រាប់ទម្លាប់ ឬស្ថានភាពនៅអតីតកាល ដែលឥឡូវលែងមានទៀតហើយ។",
  ex:[["I [used to live] in Battambang.","ខ្ញុំធ្លាប់រស់នៅបាត់ដំបង (ឥឡូវលែងហើយ)។"],["She [didn't use to like] vegetables.","ពីមុននាងមិនចូលចិត្តបន្លែទេ។"],["[Did] you [use to play] football?","តើពីមុនអ្នកធ្លាប់លេងបាល់ទាត់ទេ?"]],
  q:[["When I was a child, I ___ climb trees.",["used to","use to","was used"],0],["He didn't ___ smoke.",["used to","use to","using to"],1],["___ you use to walk to school?",["Did","Do","Were"],0],["There ___ to be a cinema here.",["use","used","uses"],1],["We used to ___ in a small house.",["lived","live","living"],1]]},
 {lv:"B1",title:"will (ការទស្សន៍ទាយ សន្យា ការសម្រេចភ្លាមៗ)",rule:"will + V1 · won't + V1",
  kh:"ប្រើ will សម្រាប់ការទស្សន៍ទាយផ្អែកលើគំនិត ការសន្យា ការផ្ដល់ជំនួយ ឬការសម្រេចចិត្តភ្លាមៗពេលនិយាយ។",
  ex:[["I think it [will rain] tomorrow.","ខ្ញុំគិតថាថ្ងៃស្អែកនឹងភ្លៀង។"],["I['ll help] you with your bag.","ខ្ញុំនឹងជួយយួរកាបូបឲ្យអ្នក។"],["I promise I [won't be] late.","ខ្ញុំសន្យាថានឹងមិនមកយឺតទេ។"]],
  q:[["The phone is ringing. I ___ answer it.",["will","am going to","am"],0],["I think Cambodia ___ win the match.",["will","is","going"],0],["I promise I ___ tell anyone.",["won't","don't","am not"],0],["___ you help me, please?",["Will","Are","Do"],0],["She will ___ the results tomorrow.",["gets","get","to get"],1]]},
 {lv:"B1",title:"may / might / could (ប្រហែល)",rule:"may / might / could + V1 = ប្រហែលជា",
  kh:"ប្រើដើម្បីនិយាយអំពីអ្វីដែលអាចកើតឡើង ប៉ុន្តែមិនប្រាកដ។ might ប្រាកដតិចជាង may បន្តិច។",
  ex:[["It [might rain] this afternoon.","រសៀលនេះប្រហែលជាភ្លៀង។"],["She [may come] to the party.","នាងប្រហែលជាមកពិធីជប់លៀង។"],["That [could be] true.","នោះអាចជាការពិត។"]],
  q:[["Take an umbrella. It ___ rain.",["might","must","can't"],0],["I'm not sure. I ___ go to the beach.",["may","will","am"],0],["He might ___ late.",["is","be","being"],1],["Which means 'perhaps'?",["could","must","have to"],0],["They ___ not come because of the storm.",["might","musts","cans"],0]]},
 {lv:"B1",title:"Gerund (V-ing) vs Infinitive (to + V)",rule:"enjoy / finish / avoid + V-ing · want / decide / hope + to V",
  kh:"verb ខ្លះត្រូវតាមដោយ V-ing ហើយខ្លះត្រូវតាមដោយ to + V1។ ត្រូវចាំតាមបញ្ជី។ ក្រោយ preposition (in, at, of…) ប្រើ V-ing ជានិច្ច។",
  ex:[["I enjoy [reading] books.","ខ្ញុំចូលចិត្តអានសៀវភៅ។"],["She decided [to study] IT.","នាងបានសម្រេចចិត្តរៀន IT។"],["He is good at [drawing].","គាត់ពូកែគូររូប។"]],
  q:[["I want ___ a doctor.",["to become","becoming","become"],0],["She finished ___ her homework.",["to do","doing","do"],1],["We hope ___ you soon.",["to see","seeing","see"],0],["They avoid ___ fast food.",["to eat","eating","eat"],1],["I'm interested in ___ Chinese.",["to learn","learning","learn"],1]]},
 {lv:"B1",title:"Zero Conditional",rule:"If + present simple, present simple",
  kh:"ប្រើសម្រាប់ការពិតទូទៅ ឬលទ្ធផលដែលកើតឡើងជានិច្ច។",
  ex:[["[If you heat] water to 100°C, it [boils].","បើកម្ដៅទឹកដល់ ១០០°C វានឹងពុះ។"],["[If I drink] coffee at night, I [can't sleep].","បើខ្ញុំផឹកកាហ្វេពេលយប់ ខ្ញុំគេងមិនលក់។"],["Plants [die] [if they don't get] water.","រុក្ខជាតិងាប់ បើវាមិនបានទឹក។"]],
  q:[["If you mix red and blue, you ___ purple.",["get","will got","got"],0],["If it ___, the ground gets wet.",["rains","will rain","rained"],0],["Ice ___ if you heat it.",["melts","melted","melting"],0],["If people don't eat, they ___ hungry.",["get","got","getting"],0],["Which type is this? 'If you press this button, the light turns on.'",["Zero conditional","Second conditional","Third conditional"],0]]},
 {lv:"B2",title:"Reported Speech",rule:"\"I am tired.\" → He said (that) he was tired. · present → past · will → would · can → could",
  kh:"ប្រើពេលនិយាយឡើងវិញនូវអ្វីដែលអ្នកដទៃបាននិយាយ។ ជាទូទៅ tense ថយក្រោយមួយជំហាន ហើយសព្វនាមក៏ប្ដូរដែរ។",
  ex:[["She said that she [was] busy.","នាងបាននិយាយថានាងរវល់។"],["He told me he [would call] later.","គាត់បានប្រាប់ខ្ញុំថាគាត់នឹងទូរស័ព្ទមកពេលក្រោយ។"],["They asked [if I could] help.","ពួកគេបានសួរថាតើខ្ញុំអាចជួយបានទេ។"]],
  q:[["\"I like pizza.\" → She said she ___ pizza.",["likes","liked","like"],1],["\"I will come.\" → He said he ___ come.",["will","would","won't"],1],["\"I can swim.\" → She said she ___ swim.",["can","could","cans"],1],["\"Are you OK?\" → He asked me ___ OK.",["if I was","am I","was I"],0],["\"I am working.\" → He said he ___.",["was working","is working","works"],0]]},
 {lv:"B2",title:"Present Perfect Continuous",rule:"have / has been + V-ing",
  kh:"ប្រើសម្រាប់សកម្មភាពដែលចាប់ផ្ដើមនៅអតីតកាល ហើយនៅតែបន្តដល់ឥឡូវ ដោយផ្ដោតលើរយៈពេល (for, since, how long)។",
  ex:[["I [have been learning] English for three years.","ខ្ញុំបានរៀនភាសាអង់គ្លេសបីឆ្នាំហើយ (នៅតែរៀន)។"],["It [has been raining] since morning.","មេឃភ្លៀងតាំងពីព្រឹកមក។"],["How long [have] you [been waiting]?","តើអ្នករង់ចាំយូរប៉ុណ្ណាហើយ?"]],
  q:[["She ___ working here since 2020.",["has been","have been","is"],0],["How long ___ you been studying?",["have","has","did"],0],["They have been ___ for two hours.",["play","playing","played"],1],["I'm tired because I ___ running.",["have been","has been","was been"],0],["It ___ raining all day.",["has been","have been","is been"],0]]},
 {lv:"B2",title:"Modals of deduction (must / can't / might have)",rule:"must be (ប្រាកដថាពិត) · can't be (ប្រាកដថាមិនពិត) · must have + V3 (អតីតកាល)",
  kh:"ប្រើដើម្បីសន្និដ្ឋានពីភស្តុតាង។ must = ប្រាកដណាស់ថាពិត, can't = ប្រាកដថាមិនពិត, might = ប្រហែល។",
  ex:[["He has a big house. He [must be] rich.","គាត់មានផ្ទះធំ។ គាត់ប្រាកដជាអ្នកមាន។"],["She [can't be] at home. Her car is gone.","នាងមិនអាចនៅផ្ទះទេ។ ឡានរបស់នាងបាត់។"],["The ground is wet. It [must have rained].","ដីសើម។ ប្រាកដជាភ្លៀងហើយ។"]],
  q:[["The lights are off. They ___ be asleep.",["must","can't","mustn't"],0],["He just ate. He ___ be hungry.",["must","can't","should"],1],["She looks sad. She ___ have failed the test.",["might","can","will"],0],["You walked 20 km? You ___ be tired!",["must","can't","won't"],0],["The window is broken. Someone ___ have hit it.",["must","can't","won't"],0]]},
 {lv:"B2",title:"wish / If only",rule:"wish + past simple (បច្ចុប្បន្ន) · wish + had + V3 (អតីតកាល) · wish + would (ចង់ឲ្យអ្នកដទៃប្ដូរ)",
  kh:"ប្រើដើម្បីបង្ហាញបំណងចង់ឲ្យស្ថានភាពខុសពីការពិត ឬការសោកស្ដាយ។",
  ex:[["I [wish I had] more time.","ខ្ញុំប្រាថ្នាចង់មានពេលច្រើនជាងនេះ។"],["I [wish I had studied] harder.","ខ្ញុំសោកស្ដាយ ដែលមិនបានរៀនឲ្យខ្លាំងជាងនេះ។"],["I [wish you would stop] talking.","ខ្ញុំចង់ឲ្យអ្នកឈប់និយាយ។"]],
  q:[["I wish I ___ a car. (I don't have one)",["have","had","will have"],1],["She wishes she ___ the party. (She went)",["didn't go","hadn't gone","doesn't go"],1],["If only it ___ raining!",["stopped","would stop","stops"],1],["I wish I ___ speak French.",["can","could","will"],1],["He wishes he ___ taller.",["is","were","be"],1]]},
 {lv:"B2",title:"Causative: have / get something done",rule:"have / get + object + V3",
  kh:"ប្រើពេលយើងឲ្យអ្នកដទៃធ្វើអ្វីមួយឲ្យយើង (ជាធម្មតាបង់ប្រាក់) មិនមែនធ្វើដោយខ្លួនឯងទេ។",
  ex:[["I [had] my hair [cut] yesterday.","ម្សិលមិញខ្ញុំបានទៅកាត់សក់ (គេកាត់ឲ្យ)។"],["She is [getting] her phone [repaired].","នាងកំពុងឲ្យគេជួសជុលទូរស័ព្ទ។"],["We need to [have] the car [washed].","យើងត្រូវយកឡានទៅឲ្យគេលាង។"]],
  q:[["I ___ my car repaired last week.",["had","have","did"],0],["She got her nails ___.",["paint","painted","painting"],1],["We are having our house ___.",["painted","paint","painting"],0],["Where do you get your hair ___?",["cut","cuts","cutting"],0],["He will have the documents ___ tomorrow.",["print","printed","printing"],1]]}
);
{ const order = ["A1","A2","B1","B2","C1","C2"]; XC.grammar.sort((a, b) => order.indexOf(a.lv) - order.indexOf(b.lv)); }

/* ---------- Grammar expansion: more topics A1–C2 ([…] = highlighted grammar) ---------- */
XC.grammar.push(
 {lv:"A1",title:"Object pronouns: me, him, her…",rule:"I → me · you → you · he → him · she → her · it → it · we → us · they → them",
  kh:"ប្រើនៅក្រោយ verb ឬ preposition (ជាកម្មបទ)។ មិនប្រើ I, he, she នៅក្រោយ verb ទេ។",
  ex:[["Call [me] tomorrow.","ទូរស័ព្ទមកខ្ញុំថ្ងៃស្អែក។"],["I love [her] very much.","ខ្ញុំស្រឡាញ់នាងខ្លាំងណាស់។"],["Can you help [us]?","តើអ្នកអាចជួយយើងបានទេ?"],["The teacher gave [them] homework.","គ្រូបានឲ្យកិច្ចការផ្ទះដល់ពួកគេ។"]],
  q:[["Please listen to ___.",["I","me","my"],1],["I know ___. He is my neighbor.",["he","him","his"],1],["She called ___ last night. (we)",["we","our","us"],2],["Give the book to ___. (she)",["she","her","hers"],1],["I like these shoes. I'll buy ___.",["they","them","their"],1]]},
 {lv:"A1",title:"Imperatives (ប្រយោគបញ្ជា)",rule:"V1 + … (Open the door.) · Don't + V1 (Don't run.) · Let's + V1",
  kh:"ប្រើដើម្បីបញ្ជា ណែនាំ ឬស្នើ។ មិនមានប្រធានទេ។ ថែម please ដើម្បីឲ្យគួរសម។",
  ex:[["[Open] your books, please.","សូមបើកសៀវភៅរបស់អ្នក។"],["[Don't touch] that!","កុំប៉ះវត្ថុនោះ!"],["[Turn] left at the market.","បត់ឆ្វេងនៅផ្សារ។"],["[Let's go] to the beach.","តោះទៅឆ្នេរ។"]],
  q:[["___ quiet, please!",["Be","Are","Is"],0],["___ run in the classroom.",["Not","Don't","No"],1],["___ eat out tonight.",["Let's","Let","Lets'"],0],["___ the window, please. It's hot.",["Opens","Opening","Open"],2],["Don't ___ late.",["be","are","being"],0]]},
 {lv:"A1",title:"Wh- questions: what, where, when, who, why, how",rule:"Wh- + am/is/are + subject? · Wh- + do/does + subject + V1?",
  kh:"what = អ្វី · where = ណា · when = ពេលណា · who = នរណា · why = ហេតុអ្វី · how = យ៉ាងម៉េច",
  ex:[["[What] is your name?","តើអ្នកឈ្មោះអ្វី?"],["[Where do] you live?","តើអ្នករស់នៅឯណា?"],["[Why are] you sad?","ហេតុអ្វីបានជាអ្នកកើតទុក្ខ?"],["[How does] she go to work?","តើនាងទៅធ្វើការដោយរបៀបណា?"]],
  q:[["___ is your birthday? – In May.",["Where","When","Who"],1],["___ is that man? – My uncle.",["Who","What","Why"],0],["___ do you live? – In Kampot.",["When","How","Where"],2],["___ are you late? – Because of traffic.",["Why","What","Who"],0],["___ old are you?",["What","How","Which"],1]]},
 {lv:"A1",title:"this / that / these / those",rule:"this (ជិត · ឯកវចនៈ) · that (ឆ្ងាយ · ឯកវចនៈ) · these (ជិត · ពហុ) · those (ឆ្ងាយ · ពហុ)",
  kh:"ប្រើដើម្បីចង្អុលបង្ហាញវត្ថុ ឬមនុស្ស តាមចម្ងាយ និងចំនួន។",
  ex:[["[This] is my phone.","នេះជាទូរស័ព្ទរបស់ខ្ញុំ។"],["[That] house is very old.","ផ្ទះនោះចាស់ណាស់។"],["[These] mangoes are sweet.","ស្វាយទាំងនេះផ្អែម។"],["Who are [those] people?","តើមនុស្សទាំងនោះជានរណា?"]],
  q:[["___ shoes here are new.",["This","These","That"],1],["Look at ___ bird in the sky!",["this","these","that"],2],["___ is my sister, Lina. (next to me)",["This","Those","These"],0],["___ stars are beautiful. (far away)",["This","That","Those"],2],["Is ___ your bag? (in my hand)",["these","this","those"],1]]},
 {lv:"A1",title:"do / does: questions and negatives",rule:"Do/Does + subject + V1? · Subject + don't/doesn't + V1",
  kh:"Present Simple ប្រើ do / does ពេលសួរ ឬបដិសេធ។ he/she/it → does/doesn't ហើយ verb ត្រឡប់ជា V1 (គ្មាន s)។",
  ex:[["[Do] you [like] durian?","តើអ្នកចូលចិត្តធុរេនទេ?"],["[Does] he [speak] Chinese?","តើគាត់និយាយភាសាចិនទេ?"],["I [don't eat] meat.","ខ្ញុំមិនញ៉ាំសាច់ទេ។"],["She [doesn't work] on Sunday.","នាងមិនធ្វើការនៅថ្ងៃអាទិត្យទេ។"]],
  q:[["___ your brother play football?",["Do","Does","Is"],1],["They ___ like spicy food.",["doesn't","don't","isn't"],1],["___ you live near here?",["Does","Are","Do"],2],["She doesn't ___ coffee.",["drinks","drink","drinking"],1],["My dad ___ watch TV at night.",["don't","doesn't","not"],1]]},
 {lv:"A1",title:"Prepositions of time: in, on, at",rule:"at + ម៉ោង (at 7:00) · on + ថ្ងៃ/កាលបរិច្ឆេទ (on Monday) · in + ខែ/ឆ្នាំ/រដូវ (in May)",
  kh:"ចងចាំ៖ at night, at the weekend (UK) · in the morning · on my birthday។",
  ex:[["The class starts [at] 8 o'clock.","ថ្នាក់ចាប់ផ្ដើមនៅម៉ោង ៨។"],["I was born [in] 2010.","ខ្ញុំកើតនៅឆ្នាំ ២០១០។"],["We have a test [on] Friday.","យើងមានការប្រឡងនៅថ្ងៃសុក្រ។"],["Khmer New Year is [in] April.","បុណ្យចូលឆ្នាំខ្មែរគឺនៅខែមេសា។"]],
  q:[["I get up ___ 6 a.m.",["in","on","at"],2],["My birthday is ___ June.",["at","in","on"],1],["See you ___ Monday!",["on","in","at"],0],["I study ___ the evening.",["on","at","in"],2],["The shop closes ___ night.",["in","at","on"],1]]},
 {lv:"A1",title:"like / love / hate + V-ing",rule:"like / love / enjoy / hate + V-ing (I like swimming.)",
  kh:"ប្រើដើម្បីនិយាយពីអ្វីដែលចូលចិត្ត ឬមិនចូលចិត្តធ្វើ។ verb ទីពីរថែម -ing។",
  ex:[["I [like reading] comics.","ខ្ញុំចូលចិត្តអានរឿងកំប្លែង។"],["She [loves dancing].","នាងស្រឡាញ់ការរាំ។"],["He [hates waking] up early.","គាត់ស្អប់ការក្រោកពីព្រលឹម។"],["Do you [enjoy cooking]?","តើអ្នកចូលចិត្តធ្វើម្ហូបទេ?"]],
  q:[["I like ___ music.",["listen","listening","listens"],1],["She hates ___ the dishes.",["washing","wash","washes"],0],["We love ___ in the sea.",["swim","swimming","swimed"],1],["Does he enjoy ___?",["cook","cooks","cooking"],2],["They like ___ football.",["playing","plays","play to"],0]]},

 {lv:"A2",title:"Past Simple: questions and negatives (did)",rule:"Did + subject + V1? · Subject + didn't + V1",
  kh:"ពេលសួរ ឬបដិសេធក្នុង Past Simple ប្រើ did / didn't ហើយ verb ត្រឡប់ទៅ V1 វិញ។",
  ex:[["[Did] you [finish] your homework?","តើអ្នកបានធ្វើកិច្ចការផ្ទះរួចហើយឬនៅ?"],["I [didn't go] to school yesterday.","ខ្ញុំមិនបានទៅសាលាកាលពីម្សិលមិញទេ។"],["Where [did] she [buy] that dress?","តើនាងទិញរ៉ូបនោះនៅឯណា?"],["They [didn't see] the film.","ពួកគេមិនបានមើលខ្សែភាពយន្តនោះទេ។"]],
  q:[["___ you call me last night?",["Do","Did","Was"],1],["I didn't ___ him at the party.",["saw","see","seen"],1],["What did you ___ for lunch?",["eat","ate","eaten"],0],["She ___ come to class yesterday.",["don't","didn't","wasn't"],1],["Did they ___ the game?",["won","win","wins"],1]]},
 {lv:"A2",title:"Possessive 's",rule:"នាម + 's (Dara's bag) · ពហុវចនៈ + ' (my parents' house)",
  kh:"ប្រើ 's ដើម្បីបង្ហាញភាពជាម្ចាស់។ ពហុវចនៈដែលបញ្ចប់ដោយ s ថែមតែ ' ។",
  ex:[["This is [Dara's] bike.","នេះជាកង់របស់ដារ៉ា។"],["My [mother's] cooking is the best.","ម្ហូបម្ដាយខ្ញុំឆ្ងាញ់ជាងគេ។"],["The [students'] books are on the desk.","សៀវភៅរបស់សិស្សៗនៅលើតុ។"],["The [children's] toys are everywhere.","របស់លេងក្មេងៗនៅពាសពេញ។"]],
  q:[["This is ___ phone. (Sokha)",["Sokha","Sokha's","Sokhas'"],1],["My ___ house is in Kampot. (parents)",["parents'","parent's","parents's"],0],["The ___ room is big. (boys)",["boy's","boys'","boys's"],1],["The ___ toys are new. (children)",["childrens'","children's","childs'"],1],["Is this ___ car? (your father)",["your father's","your fathers","your's father"],0]]},
 {lv:"A2",title:"Adverbs of manner (quickly, well…)",rule:"adjective + ly (slow → slowly) · good → well · fast → fast · hard → hard",
  kh:"Adverb ប្រាប់ពីរបៀបធ្វើសកម្មភាព ហើយជាធម្មតាដាក់ក្រោយ verb ឬក្រោយ object។",
  ex:[["She speaks English [well].","នាងនិយាយភាសាអង់គ្លេសបានល្អ។"],["Please drive [carefully].","សូមបើកបរដោយប្រុងប្រយ័ត្ន។"],["He finished the test [quickly].","គាត់បានធ្វើតេស្តរួចយ៉ាងលឿន។"],["They work very [hard].","ពួកគេធ្វើការយ៉ាងខ្លាំង។"]],
  q:[["He sings ___.",["beautiful","beautifully","beauty"],1],["She plays the piano very ___.",["good","well","goodly"],1],["Walk ___. The floor is wet.",["careful","carefully","care"],1],["He runs very ___.",["fast","fastly","faster"],0],["Please speak ___.",["slow","slowly","slowness"],1]]},
 {lv:"A2",title:"too / enough",rule:"too + adjective (too hot) · adjective + enough (old enough) · enough + noun (enough money)",
  kh:"too = ហួស (មានបញ្ហា)។ enough = គ្រប់គ្រាន់។ ចងចាំលំដាប់៖ big enough ប៉ុន្តែ enough time។",
  ex:[["The tea is [too hot] to drink.","តែក្ដៅពេកមិនអាចផឹកបាន។"],["She isn't [old enough] to drive.","នាងមិនទាន់គ្រប់អាយុបើកឡានទេ។"],["We don't have [enough time].","យើងមិនមានពេលគ្រប់គ្រាន់ទេ។"],["This bag is [too expensive] for me.","កាបូបនេះថ្លៃពេកសម្រាប់ខ្ញុំ។"]],
  q:[["I can't sleep. It's ___ noisy.",["enough","too","very enough"],1],["He is tall ___ to play basketball.",["too","enough","so"],1],["Do you have ___ money?",["enough","too","too much enough"],0],["The box is ___ heavy to carry.",["enough","too","much"],1],["Is the room big ___?",["too","enough","so"],1]]},
 {lv:"A2",title:"a few / a little / a lot of",rule:"a few + នាមរាប់បាន (a few eggs) · a little + នាមរាប់មិនបាន (a little sugar) · a lot of + ទាំងពីរ",
  kh:"នាមរាប់បាន (books, apples) និងរាប់មិនបាន (water, rice, money)។ ជ្រើសពាក្យតាមប្រភេទនាម។",
  ex:[["I have [a few] friends in Kep.","ខ្ញុំមានមិត្តភក្ដិពីរបីនាក់នៅកែប។"],["Add [a little] salt.","ដាក់អំបិលបន្តិច។"],["There are [a lot of] tourists in Siem Reap.","មានភ្ញៀវទេសចរច្រើននៅសៀមរាប។"],["She drinks [a lot of] water.","នាងផឹកទឹកច្រើន។"]],
  q:[["Can I have ___ milk in my coffee?",["a few","a little","many"],1],["There are ___ apples on the table.",["a little","a few","much"],1],["He has ___ money. He is rich.",["a lot of","a few","many"],0],["I need ___ minutes to get ready.",["a little","a few","much"],1],["We only have ___ rice left.",["a few","a little","many"],1]]},
 {lv:"A2",title:"have to / don't have to",rule:"have to / has to + V1 (ចាំបាច់) · don't / doesn't have to + V1 (មិនចាំបាច់)",
  kh:"have to = ត្រូវតែ (ដោយសារច្បាប់ ឬស្ថានភាព)។ don't have to = មិនចាំបាច់ ប៉ុន្តែអាចធ្វើក៏បាន។ ខុសពី mustn't (ហាមឃាត់)។",
  ex:[["I [have to] wear a uniform at school.","ខ្ញុំត្រូវពាក់ឯកសណ្ឋាននៅសាលា។"],["She [has to] work on Saturday.","នាងត្រូវធ្វើការនៅថ្ងៃសៅរ៍។"],["You [don't have to] pay. It's free.","អ្នកមិនចាំបាច់បង់ទេ វាឥតគិតថ្លៃ។"],["[Do] we [have to] bring a pen?","តើយើងត្រូវយកប៊ិចមកទេ?"]],
  q:[["He ___ get up early for work.",["have to","has to","have"],1],["Tomorrow is Sunday. I ___ go to school.",["don't have to","doesn't have to","have to"],0],["___ she have to wear glasses?",["Do","Does","Has"],1],["We ___ stop at a red light.",["don't have to","have to","has to"],1],["You ___ come if you're busy.",["don't have to","have to","must"],0]]},
 {lv:"A2",title:"Conjunctions: and, but, or, because, so",rule:"and (និង) · but (ប៉ុន្តែ) · or (ឬ) · because (ព្រោះ · មូលហេតុ) · so (ដូច្នេះ · លទ្ធផល)",
  kh:"ប្រើភ្ជាប់ប្រយោគពីរឲ្យទៅជាប្រយោគមួយវែងជាងមុន។",
  ex:[["I like tea, [but] my sister likes coffee.","ខ្ញុំចូលចិត្តតែ ប៉ុន្តែប្អូនស្រីខ្ញុំចូលចិត្តកាហ្វេ។"],["I stayed home [because] I was sick.","ខ្ញុំនៅផ្ទះព្រោះខ្ញុំឈឺ។"],["It was raining, [so] we took a tuk-tuk.","មេឃភ្លៀង ដូច្នេះយើងជិះតុកតុក។"],["Do you want rice [or] noodles?","តើអ្នកចង់បានបាយ ឬមី?"]],
  q:[["I was tired, ___ I went to bed early.",["because","so","but"],1],["She is poor ___ happy.",["but","or","so"],0],["He is late ___ he missed the bus.",["so","because","and"],1],["Would you like tea ___ coffee?",["or","but","so"],0],["I bought a pen ___ a notebook.",["but","or","and"],2]]},

 {lv:"B1",title:"Present Perfect vs Past Simple",rule:"Present Perfect: have/has + V3 (មិនកំណត់ពេល) · Past Simple: V2 + ពេលច្បាស់ (yesterday, in 2020)",
  kh:"បើនិយាយពីពេលច្បាស់លាស់ក្នុងអតីតកាល ប្រើ Past Simple។ បើពេលមិនច្បាស់ ឬនៅទាក់ទងដល់ឥឡូវ ប្រើ Present Perfect។",
  ex:[["I [have been] to Thailand.","ខ្ញុំធ្លាប់ទៅប្រទេសថៃ។"],["I [went] there [in 2022].","ខ្ញុំបានទៅទីនោះនៅឆ្នាំ ២០២២។"],["She [has lost] her keys. She can't get in.","នាងបាត់កូនសោ។ នាងចូលមិនបានទេ។"],["She [lost] her keys [yesterday].","នាងបានបាត់កូនសោកាលពីម្សិលមិញ។"]],
  q:[["I ___ that film last week.",["have seen","saw","see"],1],["___ you ever ___ sushi?",["Did / eat","Have / eaten","Do / eat"],1],["She ___ here since 2019.",["worked","has worked","works"],1],["When ___ you arrive?",["have","did","has"],1],["I ___ my homework. Can I go out now?",["finished","have finished","finish"],1]]},
 {lv:"B1",title:"Past Perfect",rule:"had + V3 (សកម្មភាពដែលកើតមុនសកម្មភាពមួយទៀតក្នុងអតីតកាល)",
  kh:"ប្រើ Past Perfect សម្រាប់សកម្មភាពដែលកើតឡើងមុនគេ ពេលនិយាយពីសកម្មភាពពីរក្នុងអតីតកាល។",
  ex:[["When I arrived, the bus [had left].","ពេលខ្ញុំទៅដល់ ឡានក្រុងបានចេញទៅបាត់ហើយ។"],["She [had never seen] the sea before.","នាងមិនដែលឃើញសមុទ្រពីមុនមកទេ។"],["After we [had eaten], we watched TV.","បន្ទាប់ពីយើងញ៉ាំរួច យើងមើលទូរទស្សន៍។"],["I knew him because we [had met] before.","ខ្ញុំស្គាល់គាត់ព្រោះយើងធ្លាប់ជួបគ្នាពីមុន។"]],
  q:[["When we got to the cinema, the film ___.",["started","had started","has started"],1],["She was sad because she ___ her phone.",["had lost","has lost","loses"],0],["I ___ breakfast before I left home.",["have had","had had","has"],1],["They ___ never flown before that trip.",["have","had","has"],1],["By the time he called, I ___ asleep.",["had fallen","have fallen","fall"],0]]},
 {lv:"B1",title:"Question tags",rule:"ប្រយោគវិជ្ជមាន → tag អវិជ្ជមាន (…, isn't it?) · ប្រយោគអវិជ្ជមាន → tag វិជ្ជមាន (…, is it?)",
  kh:"ប្រើនៅចុងប្រយោគដើម្បីសុំការយល់ព្រម ឬបញ្ជាក់។ ប្រើ auxiliary ដូចក្នុងប្រយោគ (is, do, did, have, can…)។",
  ex:[["It's hot today, [isn't it]?","ថ្ងៃនេះក្ដៅមែនទេ?"],["You like durian, [don't you]?","អ្នកចូលចិត្តធុរេនមែនទេ?"],["She can't swim, [can she]?","នាងហែលទឹកមិនកើតទេមែនទេ?"],["They went home, [didn't they]?","ពួកគេបានទៅផ្ទះហើយមែនទេ?"]],
  q:[["You are a student, ___?",["are you","aren't you","don't you"],1],["He doesn't eat pork, ___?",["does he","doesn't he","is he"],0],["They have finished, ___?",["didn't they","haven't they","don't they"],1],["She can drive, ___?",["can't she","can she","doesn't she"],0],["We went to Kep last year, ___?",["didn't we","weren't we","don't we"],0]]},
 {lv:"B1",title:"so / such",rule:"so + adjective/adverb (so beautiful) · such + (a/an) + adjective + noun (such a nice day)",
  kh:"ប្រើដើម្បីសង្កត់ន័យ។ អាចប្រើជាមួយ that ដើម្បីបង្ហាញលទ្ធផល៖ It was so hot that we stayed inside.",
  ex:[["The view is [so beautiful]!","ទេសភាពស្អាតណាស់!"],["It was [such a long] trip.","វាជាដំណើរដ៏វែងណាស់។"],["She speaks [so fast] that I can't understand.","នាងនិយាយលឿនណាស់ រហូតខ្ញុំស្ដាប់មិនយល់។"],["They are [such kind] people.","ពួកគេជាមនុស្សចិត្តល្អណាស់។"]],
  q:[["The film was ___ boring that I fell asleep.",["such","so","too"],1],["It's ___ a hot day!",["so","such","very"],1],["He is ___ a good teacher.",["such","so","too"],0],["I'm ___ tired today.",["such","so","such a"],1],["They have ___ beautiful children.",["so","such","such a"],1]]},
 {lv:"B1",title:"for / since / ago",rule:"for + រយៈពេល (for 3 years) · since + ចំណុចពេលចាប់ផ្ដើម (since 2020) · រយៈពេល + ago (2 years ago)",
  kh:"for និង since ច្រើនប្រើជាមួយ Present Perfect។ ago ប្រើជាមួយ Past Simple។",
  ex:[["I have lived here [for ten years].","ខ្ញុំរស់នៅទីនេះអស់រយៈពេលដប់ឆ្នាំហើយ។"],["She has worked here [since 2021].","នាងបានធ្វើការនៅទីនេះតាំងពីឆ្នាំ ២០២១។"],["I met him [three years ago].","ខ្ញុំបានជួបគាត់កាលពីបីឆ្នាំមុន។"],["We haven't eaten [since breakfast].","យើងមិនបានញ៉ាំអ្វីតាំងពីអាហារពេលព្រឹកមក។"]],
  q:[["I've known her ___ 2018.",["for","since","ago"],1],["He has been sick ___ a week.",["since","ago","for"],2],["We moved here five years ___.",["for","since","ago"],2],["She hasn't called ___ Monday.",["since","for","ago"],0],["They've been married ___ twenty years.",["since","for","ago"],1]]},
 {lv:"B1",title:"Indirect questions",rule:"Can you tell me / Do you know + wh- + subject + verb? (គ្មាន do/does និងមិនដាក់ verb ពីមុខ)",
  kh:"សំណួរប្រយោល គួរសមជាង។ ក្រោយ wh- លំដាប់ពាក្យដូចប្រយោគធម្មតា។ សំណួរ yes/no ប្រើ if ឬ whether។",
  ex:[["Can you tell me [where the station is]?","តើអ្នកអាចប្រាប់ខ្ញុំថាស្ថានីយនៅឯណាបានទេ?"],["Do you know [what time it starts]?","តើអ្នកដឹងថាវាចាប់ផ្ដើមម៉ោងប៉ុន្មានទេ?"],["I wonder [if she is coming].","ខ្ញុំឆ្ងល់ថាតើនាងមកឬអត់។"],["Could you tell me [how much this costs]?","តើអ្នកអាចប្រាប់ខ្ញុំថារបស់នេះថ្លៃប៉ុន្មានបានទេ?"]],
  q:[["Do you know where ___?",["does he live","he lives","lives he"],1],["Can you tell me what time ___?",["it is","is it","does it"],0],["I wonder ___ he will come.",["that","if","what does"],1],["Could you tell me where ___?",["the bank is","is the bank","does the bank"],0],["Do you know why ___ late?",["was she","she was","did she"],1]]},
 {lv:"B1",title:"both / either / neither",rule:"both … and (ទាំងពីរ) · either … or (មួយណាក៏បាន) · neither … nor (មិនទាំងពីរ)",
  kh:"ប្រើជាមួយរបស់ពីរ។ neither មានន័យអវិជ្ជមានរួចហើយ ដូច្នេះមិនប្រើ not ទៀតទេ។",
  ex:[["[Both] Dara [and] Lina passed the exam.","ទាំងដារ៉ា និងលីណាប្រឡងជាប់។"],["You can pay [either] by cash [or] by card.","អ្នកអាចបង់ដោយសាច់ប្រាក់ ឬដោយកាតក៏បាន។"],["[Neither] my mom [nor] my dad speaks English.","ទាំងម្ដាយ និងឪពុកខ្ញុំមិនចេះនិយាយភាសាអង់គ្លេសទេ។"],["I like [both] of them.","ខ្ញុំចូលចិត្តទាំងពីរ។"]],
  q:[["___ Tom and Ben are from Canada.",["Either","Both","Neither"],1],["We can go ___ today or tomorrow.",["either","neither","both"],0],["___ of my sisters can cook. They both can't.",["Both","Either","Neither"],2],["She speaks ___ Khmer and French.",["either","both","neither"],1],["It's neither hot ___ cold.",["or","and","nor"],2]]},

 {lv:"B2",title:"Future Continuous",rule:"will be + V-ing (សកម្មភាពដែលនឹងកំពុងកើតនៅពេលមួយនាពេលអនាគត)",
  kh:"ប្រើដើម្បីនិយាយពីអ្វីដែលនឹងកំពុងកើតឡើងនៅពេលជាក់លាក់មួយនាពេលអនាគត ឬដើម្បីសួរគួរសមអំពីផែនការ។",
  ex:[["This time tomorrow, I [will be flying] to Japan.","ម៉ោងនេះថ្ងៃស្អែក ខ្ញុំនឹងកំពុងហោះហើរទៅប្រទេសជប៉ុន។"],["Don't call at 8. We [will be having] dinner.","កុំទូរស័ព្ទម៉ោង ៨ យើងនឹងកំពុងញ៉ាំអាហារពេលល្ងាច។"],["[Will] you [be using] the car tonight?","តើអ្នកនឹងប្រើឡាននៅយប់នេះទេ?"],["She [will be working] late all week.","នាងនឹងធ្វើការដល់យប់ពេញមួយសប្ដាហ៍។"]],
  q:[["At 10 tomorrow, I ___ my exam.",["will take","will be taking","take"],1],["Next week, we ___ on the beach.",["will be lying","are lie","will lying"],0],["___ you be coming to the meeting?",["Are","Will","Do"],1],["Don't worry. I ___ for you at the station.",["will be waiting","will waiting","wait"],0],["This time next year, she ___ in London.",["will be studying","studies","will studied"],0]]},
 {lv:"B2",title:"Future Perfect",rule:"will have + V3 (សកម្មភាពនឹងបញ្ចប់មុនពេលមួយនាពេលអនាគត) · ច្រើនប្រើជាមួយ by…",
  kh:"ប្រើដើម្បីនិយាយថាអ្វីមួយនឹងបានបញ្ចប់រួចមុនពេលកំណត់ណាមួយនាពេលអនាគត។",
  ex:[["By 2030, I [will have finished] university.","ត្រឹមឆ្នាំ ២០៣០ ខ្ញុំនឹងបានបញ្ចប់សាកលវិទ្យាល័យរួចហើយ។"],["She [will have left] by the time you arrive.","នាងនឹងចាកចេញបាត់ហើយ មុនពេលអ្នកមកដល់។"],["By Friday, we [will have learned] 100 new words.","ត្រឹមថ្ងៃសុក្រ យើងនឹងបានរៀនពាក្យថ្មី ១០០ ពាក្យ។"],["[Will] you [have finished] the report by noon?","តើអ្នកនឹងធ្វើរបាយការណ៍រួចត្រឹមថ្ងៃត្រង់ទេ?"]],
  q:[["By next month, I ___ here for a year.",["will work","will have worked","have worked"],1],["She ___ dinner by 7 p.m.",["will have cooked","will cooking","cooks"],0],["By the time we get there, the film ___.",["will have started","will start","started"],0],["They ___ the bridge by 2027.",["will have built","will build have","have built"],0],["By tonight, I ___ all my homework.",["will finish have","will have done","have done"],1]]},
 {lv:"B2",title:"Contrast: although / despite / however",rule:"although + ប្រយោគ · despite / in spite of + នាម ឬ V-ing · However, + ប្រយោគថ្មី",
  kh:"ប្រើដើម្បីបង្ហាញភាពផ្ទុយគ្នា។ ប្រយ័ត្ន៖ despite មិនតាមដោយប្រយោគពេញលេញទេ។",
  ex:[["[Although] it was raining, we went out.","ទោះបីមេឃភ្លៀងក៏ដោយ យើងនៅតែចេញទៅក្រៅ។"],["[Despite] the rain, we went out.","ទោះបីមានភ្លៀងក៏ដោយ យើងនៅតែចេញទៅក្រៅ។"],["She was tired. [However], she kept working.","នាងហត់។ ទោះយ៉ាងណា នាងនៅតែបន្តធ្វើការ។"],["[In spite of] being poor, he was happy.","ទោះបីក្រក៏ដោយ គាត់នៅតែសប្បាយចិត្ត។"]],
  q:[["___ he was ill, he went to work.",["Despite","Although","However"],1],["___ the traffic, we arrived on time.",["Although","Despite","However"],1],["The food was cheap. ___, it was delicious.",["Although","Despite","However"],2],["In spite ___ the cold, she wore a T-shirt.",["of","that","to"],0],["Despite ___ hard, he failed.",["he studied","studying","study"],1]]},
 {lv:"B2",title:"make / let / allow",rule:"make + someone + V1 (បង្ខំ) · let + someone + V1 (អនុញ្ញាត) · allow + someone + to V1",
  kh:"make និង let តាមដោយ V1 ដោយគ្មាន to។ allow តាមដោយ to + V1។",
  ex:[["My mom [makes me clean] my room.","ម្ដាយខ្ញុំឲ្យខ្ញុំសម្អាតបន្ទប់។"],["My dad [lets me use] his laptop.","ឪពុកខ្ញុំអនុញ្ញាតឲ្យខ្ញុំប្រើកុំព្យូទ័ររបស់គាត់។"],["The school doesn't [allow students to use] phones.","សាលាមិនអនុញ្ញាតឲ្យសិស្សប្រើទូរស័ព្ទទេ។"],["That movie [made me cry].","ខ្សែភាពយន្តនោះធ្វើឲ្យខ្ញុំយំ។"]],
  q:[["The teacher made us ___ the test again.",["to do","do","doing"],1],["My parents let me ___ out late.",["stay","to stay","staying"],0],["We aren't allowed ___ here.",["park","to park","parking to"],1],["Sad songs make me ___ sad.",["feel","to feel","feeling"],0],["Will you let him ___ with us?",["to come","come","coming"],1]]},
 {lv:"B2",title:"Reported questions",rule:"Wh-: asked + wh- + subject + verb (ថយ tense) · Yes/No: asked + if/whether + subject + verb",
  kh:"ពេលរាយការណ៍សំណួរ លំដាប់ពាក្យដូចប្រយោគធម្មតា (គ្មាន do/did) ហើយ tense ថយក្រោយមួយកម្រិត។",
  ex:[["She asked me [where I lived].","នាងបានសួរខ្ញុំថាខ្ញុំរស់នៅឯណា។"],["He asked [if I was hungry].","គាត់បានសួរថាតើខ្ញុំឃ្លានទេ។"],["They asked [what time the shop opened].","ពួកគេបានសួរថាហាងបើកម៉ោងប៉ុន្មាន។"],["The teacher asked [whether we had finished].","គ្រូបានសួរថាតើយើងធ្វើរួចហើយឬនៅ។"]],
  q:[["\"Where do you work?\" → She asked me where I ___.",["work","worked","did work"],1],["\"Are you OK?\" → He asked ___ I was OK.",["that","if","what"],1],["\"What is your name?\" → She asked what my name ___.",["is","was","were"],1],["\"Can you swim?\" → He asked if I ___ swim.",["can","could","did"],1],["\"Did you see it?\" → She asked if I ___ it.",["had seen","saw it did","see"],0]]},
 {lv:"B2",title:"Passive with modals",rule:"modal (can, must, should, will…) + be + V3",
  kh:"ប្រើ Passive ជាមួយ modal ដើម្បីនិយាយពីអ្វីដែលអាច ត្រូវ ឬគួរត្រូវបានធ្វើ ដោយមិនផ្ដោតលើអ្នកធ្វើ។",
  ex:[["Phones [must be turned] off during the exam.","ទូរស័ព្ទត្រូវតែបិទពេលប្រឡង។"],["This problem [can be solved] easily.","បញ្ហានេះអាចដោះស្រាយបានយ៉ាងងាយ។"],["Plastic [should be recycled].","ប្លាស្ទិកគួរតែត្រូវបានកែច្នៃឡើងវិញ។"],["The results [will be announced] tomorrow.","លទ្ធផលនឹងត្រូវប្រកាសនៅថ្ងៃស្អែក។"]],
  q:[["The work must ___ by Friday.",["finish","be finished","be finishing"],1],["This medicine should ___ after meals.",["be taken","take","be take"],0],["Tickets can ___ online.",["book","be booked","booked"],1],["The road will ___ next year.",["be repaired","repair","repaired be"],0],["Rubbish mustn't ___ in the river.",["throw","be thrown","be throw"],1]]},
 {lv:"B2",title:"Articles: a / an / the / no article",rule:"a/an = លើកដំបូង ឬមិនជាក់លាក់ · the = ជាក់លាក់ ឬមានតែមួយ · Ø = ទូទៅ ពហុវចនៈ ឬរាប់មិនបាន",
  kh:"ឧ. I saw a dog. The dog was black. · the sun, the Mekong · Dogs are friendly. (ទូទៅ គ្មាន the)",
  ex:[["I bought [a] new phone. [The] phone is very fast.","ខ្ញុំបានទិញទូរស័ព្ទថ្មីមួយ។ ទូរស័ព្ទនោះលឿនណាស់។"],["[The] Mekong is a long river.","ទន្លេមេគង្គជាទន្លេដ៏វែងមួយ។"],["[Ø] Cats like to sleep.","ឆ្មាចូលចិត្តគេង។"],["She plays [the] piano.","នាងលេងព្យ៉ាណូ។"]],
  q:[["___ moon is bright tonight.",["A","The","—"],1],["I need ___ umbrella.",["a","an","the"],1],["___ honesty is important.",["The","A","—"],2],["She is ___ best student in class.",["a","the","—"],1],["I saw a film last night. ___ film was great.",["A","The","—"],1]]},

 {lv:"C1",title:"Mixed Conditionals",rule:"If + had + V3, would + V1 (អតីតកាល → លទ្ធផលឥឡូវ) · If + V2, would have + V3 (ឥឡូវ → លទ្ធផលអតីតកាល)",
  kh:"លាយ Second និង Third Conditional ពេលលក្ខខណ្ឌ និងលទ្ធផលស្ថិតក្នុងពេលខុសគ្នា។",
  ex:[["[If I had studied] medicine, I [would be] a doctor now.","ប្រសិនបើខ្ញុំបានរៀនវេជ្ជសាស្ត្រ ឥឡូវខ្ញុំនឹងជាវេជ្ជបណ្ឌិត។"],["[If she weren't] so shy, she [would have spoken] at the meeting.","ប្រសិនបើនាងមិនខ្មាសគេពេក នាងប្រហែលជាបាននិយាយនៅក្នុងកិច្ចប្រជុំ។"],["[If we had left] earlier, we [would be] there by now.","ប្រសិនបើយើងចេញមុននេះ ឥឡូវយើងប្រហែលជាទៅដល់ហើយ។"],["[If I spoke] Chinese, I [would have got] that job.","ប្រសិនបើខ្ញុំចេះភាសាចិន ខ្ញុំប្រហែលជាបានការងារនោះហើយ។"]],
  q:[["If I had saved money, I ___ rich now.",["would be","would have been","will be"],0],["If he ___ lazy, he would have passed.",["isn't","weren't","hadn't"],1],["If she had taken the job, she ___ in Paris now.",["would live","would have lived","lives"],0],["If I ___ you, I wouldn't have said that.",["were","had been","am"],0],["If they hadn't missed the bus, they ___ here now.",["would have been","would be","will be"],1]]},
 {lv:"C1",title:"Participle clauses",rule:"V-ing … (សកម្ម / ពេលដំណាលគ្នា) · V3 … (អកម្ម) · Having + V3 … (បញ្ចប់មុន)",
  kh:"ប្រើដើម្បីបង្រួមប្រយោគឲ្យខ្លី និងមានលក្ខណៈផ្លូវការ។ ប្រធានក្នុងប្រយោគទាំងពីរត្រូវតែដូចគ្នា។",
  ex:[["[Walking] home, I saw an accident.","ពេលដើរទៅផ្ទះ ខ្ញុំបានឃើញគ្រោះថ្នាក់មួយ។"],["[Built] in the 12th century, Angkor Wat is a wonder.","ដែលត្រូវបានសាងសង់ក្នុងសតវត្សទី ១២ អង្គរវត្តជាអច្ឆរិយវត្ថុមួយ។"],["[Having finished] her work, she went home.","ក្រោយពីធ្វើការរួច នាងបានទៅផ្ទះ។"],["[Not knowing] the way, we asked a policeman.","ដោយមិនស្គាល់ផ្លូវ យើងបានសួរប៉ូលិស។"]],
  q:[["___ the door, she saw a stranger.",["Opened","Opening","Having open"],1],["___ in 1990, the school is quite old.",["Founding","Founded","Having found"],1],["___ the report, he sent it to his boss.",["Having written","Written","Write"],0],["___ tired, I went to bed early.",["Felt","Feeling","Having feel"],1],["The man ___ next to me is my uncle.",["sitting","sat","sit"],0]]},
 {lv:"C1",title:"Cleft sentences: It is… that / What… is",rule:"It + be + ផ្នែកសង្កត់ន័យ + that/who … · What + clause + be + ផ្នែកសង្កត់ន័យ",
  kh:"ប្រើដើម្បីផ្ដោតលើព័ត៌មានសំខាន់មួយផ្នែកនៃប្រយោគ។",
  ex:[["[It was Dara who] broke the window.","គឺដារ៉ាទេដែលបានបំបែកបង្អួច។"],["[What I need is] a long holiday.","អ្វីដែលខ្ញុំត្រូវការគឺថ្ងៃឈប់សម្រាកវែងមួយ។"],["[It is] patience [that] makes a good teacher.","គឺការអត់ធ្មត់ហើយដែលធ្វើឲ្យគ្រូក្លាយជាគ្រូល្អ។"],["[What surprised me was] her calm answer.","អ្វីដែលធ្វើឲ្យខ្ញុំភ្ញាក់ផ្អើលគឺចម្លើយស្ងប់ស្ងាត់របស់នាង។"]],
  q:[["It was my sister ___ cooked dinner.",["which","who","what"],1],["___ I want is some peace and quiet.",["That","What","Which"],1],["It ___ in 2015 that we met.",["is","was","were"],1],["What she said ___ completely true.",["were","was","being"],1],["It's not money ___ makes people happy.",["that","what","whose"],0]]},
 {lv:"C1",title:"Future in the past: was going to / would",rule:"was/were going to + V1 · would + V1 (អនាគតដែលគិតពីអតីតកាល)",
  kh:"ប្រើពេលនិយាយពីផែនការ ឬការរំពឹងទុកក្នុងអតីតកាល ជាពិសេសផែនការដែលមិនបានកើតឡើង។",
  ex:[["I [was going to call] you, but I forgot.","ខ្ញុំគ្រោងនឹងទូរស័ព្ទទៅអ្នក ប៉ុន្តែខ្ញុំភ្លេច។"],["She knew she [would be] famous one day.","នាងដឹងថាថ្ងៃណាមួយនាងនឹងល្បី។"],["We [were going to travel], but the flight was cancelled.","យើងគ្រោងនឹងធ្វើដំណើរ ប៉ុន្តែជើងហោះហើរត្រូវបានលុបចោល។"],["He promised he [would help] me.","គាត់បានសន្យាថាគាត់នឹងជួយខ្ញុំ។"]],
  q:[["I ___ visit you, but I got sick.",["am going to","was going to","will"],1],["She said she ___ be late.",["will","would","is"],1],["They ___ to marry, but they broke up.",["were going","are going","went"],0],["I thought it ___ rain, so I took an umbrella.",["will","would","is going to"],1],["We were going to ___ a car, but it was too expensive.",["buy","bought","buying"],0]]},
 {lv:"C1",title:"Impersonal passive: It is said that…",rule:"It is said / believed / thought + that … · Subject + is said + to V1 / to have V3",
  kh:"ប្រើក្នុងព័ត៌មាន និងអត្ថបទផ្លូវការ ដើម្បីរាយការណ៍ពីអ្វីដែលមនុស្សទូទៅនិយាយ ឬជឿ។",
  ex:[["[It is said that] the temple is haunted.","គេនិយាយថាប្រាសាទនោះមានខ្មោចលង។"],["[It is believed that] the city was built in 800 AD.","គេជឿថាទីក្រុងនេះត្រូវបានសាងសង់នៅឆ្នាំ ៨០០ គ.ស.។"],["He [is thought to be] the richest man in town.","គេគិតថាគាត់ជាអ្នកមានជាងគេក្នុងទីក្រុង។"],["The thief [is believed to have escaped] to Thailand.","គេជឿថាចោរបានរត់គេចខ្លួនទៅប្រទេសថៃ។"]],
  q:[["It ___ that the hotel will close.",["says","is said","said"],1],["She is believed ___ very rich.",["to be","being","be"],0],["It is thought ___ he left the country.",["what","that","to"],1],["The painting is said ___ stolen in 1990.",["to be","to have been","having been"],1],["They ___ to be the best team in Asia.",["consider","are considered","considered"],1]]},
 {lv:"C1",title:"would rather / had better",rule:"would rather + V1 (ចង់ធ្វើជាង) · would rather + someone + V2 · had better + V1 (គួរតែ ដើម្បីជៀសបញ្ហា)",
  kh:"would rather បង្ហាញចំណូលចិត្ត។ had better ('d better) ជាដំបូន្មានខ្លាំង ហើយមានន័យថាបើមិនធ្វើនឹងមានបញ្ហា។",
  ex:[["I['d rather stay] home tonight.","យប់នេះខ្ញុំចង់នៅផ្ទះជាង។"],["I['d rather you didn't smoke] here.","ខ្ញុំចង់ឲ្យអ្នកកុំជក់បារីនៅទីនេះ។"],["You['d better hurry], or you'll miss the bus.","អ្នកគួរតែប្រញាប់ មិនដូច្នោះទេអ្នកនឹងខកឡានក្រុង។"],["We [had better not tell] Mom.","យើងមិនគួរប្រាប់ម៉ាក់ទេ។"]],
  q:[["I'd rather ___ tea than coffee.",["drink","to drink","drinking"],0],["You'd better ___ a coat. It's cold.",["take","to take","taking"],0],["I'd rather you ___ me the truth.",["tell","told","telling"],1],["We'd better ___ be late.",["not","don't","no"],0],["Would you rather ___ by bus or by train?",["go","going","to go"],0]]},
 {lv:"C1",title:"unless / provided that / as long as",rule:"unless = if not · provided (that) / as long as = លុះត្រាតែ · in case = ក្រែងលោ",
  kh:"ពាក្យទាំងនេះជំនួស if ដើម្បីបង្ហាញលក្ខខណ្ឌឲ្យច្បាស់ជាង។ ប្រើ present tense សម្រាប់អនាគត។",
  ex:[["You won't pass [unless] you study.","អ្នកនឹងមិនជាប់ទេ លុះត្រាតែអ្នករៀន។"],["You can borrow my car [as long as] you drive carefully.","អ្នកអាចខ្ចីឡានខ្ញុំបាន ឲ្យតែអ្នកបើកដោយប្រុងប្រយ័ត្ន។"],["I'll go [provided that] you come with me.","ខ្ញុំនឹងទៅ លុះត្រាតែអ្នកទៅជាមួយខ្ញុំ។"],["Take an umbrella [in case] it rains.","យកឆ័ត្រទៅ ក្រែងលោមេឃភ្លៀង។"]],
  q:[["I'll be there at 8 ___ the traffic is bad.",["unless","as long as","provided"],0],["You can stay ___ you keep quiet.",["unless","as long as","in case"],1],["Bring some cash ___ they don't take cards.",["in case","unless","provided"],0],["___ you hurry, we'll be late.",["As long as","Unless","Provided"],1],["We'll have the party outside, provided it ___.",["won't rain","doesn't rain","didn't rain"],1]]},
 {lv:"C1",title:"Emphatic do / does / did",rule:"do / does / did + V1 (ក្នុងប្រយោគវិជ្ជមាន ដើម្បីសង្កត់ន័យ)",
  kh:"ប្រើដើម្បីសង្កត់ន័យ បញ្ជាក់ ឬតបតនឹងការសង្ស័យ។ ពេលនិយាយ សង្កត់សំឡេងលើ do/does/did។",
  ex:[["I [did tell] you! You just forgot.","ខ្ញុំពិតជាបានប្រាប់អ្នកហើយ! អ្នកគ្រាន់តែភ្លេច។"],["She [does look] tired today.","ថ្ងៃនេះនាងមើលទៅពិតជាហត់មែន។"],["I [do like] your new haircut.","ខ្ញុំពិតជាចូលចិត្តម៉ូដសក់ថ្មីរបស់អ្នក។"],["[Do sit] down, please.","សូមអញ្ជើញអង្គុយ។"]],
  q:[["\"You didn't call.\" – \"I ___ call! Twice!\"",["did","do","was"],0],["He ___ work hard, even if you don't think so.",["do","does","did to"],1],["I ___ want to come, but I'm busy.",["do","does","am"],0],["She did ___ the email yesterday.",["sent","send","sending"],1],["___ come in! You're very welcome.",["Do","Does","Did"],0]]},

 {lv:"C2",title:"Conditionals without if (Should / Were / Had)",rule:"Should + S + V1 · Were + S + to V1 · Had + S + V3 (inversion ជំនួស if)",
  kh:"ប្រើក្នុងភាសាផ្លូវការ។ លុប if ហើយដាក់ should, were ឬ had នៅដើមប្រយោគ។",
  ex:[["[Should you need] help, please call me.","ប្រសិនបើអ្នកត្រូវការជំនួយ សូមទូរស័ព្ទមកខ្ញុំ។"],["[Were I] rich, I would build a school.","ប្រសិនបើខ្ញុំជាអ្នកមាន ខ្ញុំនឹងសាងសង់សាលារៀនមួយ។"],["[Had we known], we would have helped.","ប្រសិនបើយើងបានដឹង យើងនឹងបានជួយ។"],["[Were she to resign], the company would suffer.","ប្រសិនបើនាងលាឈប់ ក្រុមហ៊ុននឹងរងការលំបាក។"]],
  q:[["___ you have any questions, email us.",["Should","Would","Were"],0],["___ I you, I would accept the offer.",["Had","Were","Should"],1],["___ he studied harder, he would have passed.",["Should","Were","Had"],2],["Were they ___ the truth, they would be angry.",["know","to know","known"],1],["Had it not ___ for your help, I would have failed.",["been","be","was"],0]]},
 {lv:"C2",title:"Past modals: should have / needn't have / could have",rule:"should have + V3 (គួរតែបានធ្វើ) · needn't have + V3 (ធ្វើហើយ តែមិនចាំបាច់) · could have + V3 (អាចបាន តែមិនបានធ្វើ)",
  kh:"ប្រើដើម្បីនិយាយពីការសោកស្ដាយ ការរិះគន់ ឬលទ្ធភាពក្នុងអតីតកាល។",
  ex:[["You [should have told] me earlier.","អ្នកគួរតែបានប្រាប់ខ្ញុំមុននេះ។"],["I [needn't have cooked]. They had already eaten.","ខ្ញុំមិនចាំបាច់ធ្វើម្ហូបទេ។ ពួកគេញ៉ាំរួចហើយ។"],["She [could have won], but she gave up.","នាងអាចឈ្នះបាន ប៉ុន្តែនាងបោះបង់។"],["We [shouldn't have spent] so much money.","យើងមិនគួរចាយលុយច្រើនដល់ម្ល៉េះទេ។"]],
  q:[["I failed. I ___ harder.",["should study","should have studied","must study"],1],["You ___ brought food. We have plenty.",["needn't have","mustn't have","shouldn't"],0],["He ___ been killed! That was dangerous.",["could have","should have","needn't have"],0],["They ___ left so early. The party was fun.",["shouldn't have","needn't","couldn't"],0],["She ___ me, but she didn't.",["could have helped","could help have","can have helped"],0]]},
 {lv:"C2",title:"Fronting for emphasis",rule:"ដាក់ផ្នែកដែលចង់សង្កត់ន័យទៅដើមប្រយោគ (Object / Adjective / Adverbial)",
  kh:"ប្រើក្នុងការសរសេរបែបអក្សរសាស្ត្រ ឬការនិយាយដើម្បីបង្ហាញភាពផ្ទុយ ឬផ្ដោតលើព័ត៌មានថ្មី។",
  ex:[["[Strange] though it may seem, I enjoy exams.","ទោះបីស្ដាប់ទៅចម្លែកក៏ដោយ ខ្ញុំចូលចិត្តការប្រឡង។"],["[That film] I will never forget.","ខ្សែភាពយន្តនោះ ខ្ញុំនឹងមិនភ្លេចទេ។"],["[On the hill] stood an old temple.","នៅលើភ្នំ មានប្រាសាទចាស់មួយ។"],["[Much] as I love you, I can't stay.","ទោះខ្ញុំស្រឡាញ់អ្នកខ្លាំងប៉ុណ្ណាក៏ដោយ ខ្ញុំមិនអាចនៅបានទេ។"]],
  q:[["Tired ___ he was, he kept working.",["though","because","so"],0],["Into the room ___ a tall man.",["walked","walking","walks to"],0],["Much ___ I admire her, I disagree.",["as","so","that"],0],["Her name I ___ remember.",["can't","not can","don't can"],0],["Under the tree ___ a small dog.",["lay","laid","lying"],0]]},
 {lv:"C2",title:"Nominalisation (formal style)",rule:"បម្លែង verb / adjective → noun (decide → decision · important → importance)",
  kh:"ការសរសេរផ្លូវការ និងសិក្សាប្រើនាមច្រើនជាង verb ដើម្បីឲ្យប្រយោគខ្លី ច្បាស់ និងមានលក្ខណៈវិជ្ជាជីវៈ។",
  ex:[["[The decision] to close the school upset parents.","ការសម្រេចចិត្តបិទសាលាបានធ្វើឲ្យឪពុកម្ដាយមិនសប្បាយចិត្ត។"],["[The rapid growth] of the city caused traffic problems.","ការរីកចម្រើនយ៉ាងឆាប់រហ័សនៃទីក្រុងបានបង្កបញ្ហាចរាចរណ៍។"],["[The importance] of education cannot be overstated.","សារៈសំខាន់នៃការអប់រំមិនអាចនិយាយហួសហេតុបានទេ។"],["[Their failure] to respond was surprising.","ការមិនបានឆ្លើយតបរបស់ពួកគេគួរឲ្យភ្ញាក់ផ្អើល។"]],
  q:[["They analysed the data. → The ___ of the data took weeks.",["analyse","analysis","analytic"],1],["Prices increased. → The ___ in prices worried people.",["increase","increasing to","increased"],0],["She was absent. → Her ___ was noticed.",["absent","absence","absently"],1],["They developed the area. → The ___ of the area took years.",["develop","developing to","development"],2],["He refused to help. → His ___ to help shocked us.",["refuse","refusal","refused"],1]]},
 {lv:"C2",title:"Ellipsis & substitution (so, not, do, one)",rule:"so / not (I think so · I hope not) · do so · one / ones · លុបពាក្យដដែលៗចេញ",
  kh:"ជៀសវាងការនិយាយពាក្យដដែលៗ ដោយជំនួសដោយ so, not, do, one ឬលុបចោល។",
  ex:[["\"Will it rain?\" – \"I [hope not].\"","«តើមេឃនឹងភ្លៀងទេ?» – «ខ្ញុំសង្ឃឹមថាមិនភ្លៀងទេ។»"],["\"Is she coming?\" – \"I [think so].\"","«តើនាងមកទេ?» – «ខ្ញុំគិតថាមក។»"],["I don't like the red shirt; I prefer the blue [one].","ខ្ញុំមិនចូលចិត្តអាវក្រហមទេ ខ្ញុំចូលចិត្តអាវពណ៌ខៀវជាង។"],["She asked me to leave, and I [did so].","នាងបានប្រាប់ឲ្យខ្ញុំចាកចេញ ហើយខ្ញុំក៏ចាកចេញ។"]],
  q:[["\"Is the shop open?\" – \"I'm afraid ___.\"",["not","no","don't"],0],["\"Did he pass?\" – \"I believe ___.\"",["it","so","that"],1],["These shoes are old. I need new ___.",["one","ones","them"],1],["He promised to call, but he didn't ___.",["do it so","so","do so"],2],["\"Can you come?\" – \"I'd love ___.\"",["to","it","so"],0]]},
 {lv:"C2",title:"It's (high) time + Past Simple",rule:"It's (high / about) time + subject + V2 · It's time + to V1",
  kh:"ប្រើដើម្បីនិយាយថា អ្វីមួយគួរតែបានធ្វើរួចយូរហើយ។ ទោះប្រើ V2 ក៏មានន័យបច្ចុប្បន្ន ឬអនាគតដែរ។",
  ex:[["[It's time we left].","ដល់ពេលយើងគួរចាកចេញហើយ។"],["[It's high time you got] a job.","ដល់ពេលយូរហើយដែលអ្នកគួររកការងារធ្វើ។"],["[It's about time] the government [did] something.","ដល់ពេលហើយដែលរដ្ឋាភិបាលគួរធ្វើអ្វីមួយ។"],["[It's time to go] to bed.","ដល់ពេលចូលគេងហើយ។"]],
  q:[["It's time we ___ home.",["go","went","going"],1],["It's high time you ___ your room.",["clean","cleaned","cleaning"],1],["It's time ___ the meeting.",["start","to start","started to"],1],["It's about time he ___ the truth.",["told","tells","tell"],0],["It's high time the children ___ in bed.",["are","were","be"],1]]}
);
{ const order = ["A1","A2","B1","B2","C1","C2"]; XC.grammar.sort((a, b) => order.indexOf(a.lv) - order.indexOf(b.lv)); }

/* ---------- Grammar expansion 2: 36 more topics A1–C2 ---------- */
XC.grammar.push(
 {lv:"A1",title:"have / has (មាន)",rule:"I / You / We / They + have · He / She / It + has · don't have / doesn't have",
  kh:"ប្រើដើម្បីប្រាប់ពីអ្វីដែលយើងមាន (របស់ គ្រួសារ រោគសញ្ញា)។ he/she/it ប្រើ has។",
  ex:[["I [have] two sisters.","ខ្ញុំមានបងប្អូនស្រីពីរនាក់។"],["She [has] a new phone.","នាងមានទូរស័ព្ទថ្មីមួយ។"],["We [don't have] a car.","យើងមិនមានឡានទេ។"],["[Does] he [have] a headache?","តើគាត់ឈឺក្បាលទេ?"]],
  q:[["My father ___ a motorbike.",["have","has","haves"],1],["They ___ three children.",["has","have","having"],1],["She doesn't ___ any money.",["has","have","had"],1],["___ you have a pen?",["Does","Do","Are"],1],["The cat ___ green eyes.",["have","has","is"],1]]},
 {lv:"A1",title:"Subject pronouns: I, you, he, she, it…",rule:"I · you · he (ប្រុស) · she (ស្រី) · it (សត្វ/វត្ថុ) · we · they",
  kh:"Subject pronoun ដាក់នៅមុខ verb ជំនួសឈ្មោះមនុស្ស ឬវត្ថុ ដើម្បីកុំឲ្យនិយាយដដែលៗ។",
  ex:[["Dara is my friend. [He] is kind.","ដារ៉ាជាមិត្តរបស់ខ្ញុំ។ គាត់ចិត្តល្អ។"],["Lina is a nurse. [She] works at night.","លីណាជាគិលានុបដ្ឋាយិកា។ នាងធ្វើការនៅពេលយប់។"],["I have a dog. [It] is very small.","ខ្ញុំមានឆ្កែមួយ។ វាតូចណាស់។"],["My parents are farmers. [They] grow rice.","ឪពុកម្ដាយខ្ញុំជាកសិករ។ ពួកគាត់ដាំស្រូវ។"]],
  q:[["Sokha is a boy. ___ is ten.",["She","He","It"],1],["This is my bag. ___ is blue.",["He","They","It"],2],["Srey and I are friends. ___ study together.",["We","They","You"],0],["My sister is a teacher. ___ teaches English.",["He","She","They"],1],["The students are here. ___ are ready.",["We","It","They"],2]]},
 {lv:"A1",title:"Adjectives before nouns",rule:"adjective + noun (a big house) · be + adjective (The house is big.) · adjective មិនថែម s ទេ",
  kh:"ក្នុងភាសាអង់គ្លេស adjective ដាក់មុខនាម (ខុសពីខ្មែរ ដែលដាក់ក្រោយ)។ adjective មិនដែលមានទម្រង់ពហុវចនៈទេ។",
  ex:[["She has a [red] car.","នាងមានឡានពណ៌ក្រហមមួយ។"],["They are [good] students.","ពួកគេជាសិស្សល្អ។"],["It is a [beautiful] day.","វាជាថ្ងៃដ៏ស្រស់ស្អាតមួយ។"],["The soup is [hot].","ស៊ុបក្ដៅ។"]],
  q:[["Choose the correct one:",["a house big","a big house","a bigs house"],1],["They are ___ girls.",["smarts","smart","a smart"],1],["I want ___.",["a coffee hot","a hot coffee","hot a coffee"],1],["This is ___ book.",["a interesting","an interesting","interesting a"],1],["My shoes are ___.",["news","new","a new"],1]]},
 {lv:"A1",title:"Yes/No questions with be",rule:"Am I…? · Is he/she/it…? · Are you/we/they…? · ចម្លើយខ្លី៖ Yes, I am. / No, she isn't.",
  kh:"ដើម្បីសួរជាមួយ be ដាក់ am/is/are ទៅមុខប្រធាន។ ចម្លើយខ្លីប្រើ be ម្ដងទៀត។",
  ex:[["[Are you] a student? – [Yes, I am].","តើអ្នកជាសិស្សទេ? – បាទ/ចាស ខ្ញុំជាសិស្ស។"],["[Is she] from Kampot? – [No, she isn't].","តើនាងមកពីកំពតទេ? – ទេ នាងមិនមែនទេ។"],["[Is it] cold today?","តើថ្ងៃនេះត្រជាក់ទេ?"],["[Are they] at school?","តើពួកគេនៅសាលាទេ?"]],
  q:[["___ your brother tall?",["Are","Is","Am"],1],["Are you hungry? – Yes, I ___.",["am","is","are"],0],["___ they your friends?",["Is","Are","Am"],1],["Is it your book? – No, it ___.",["isn't","aren't","not"],0],["___ I late?",["Is","Are","Am"],2]]},
 {lv:"A1",title:"would like (ចង់បាន · គួរសម)",rule:"would like ('d like) + noun · would like + to V1 · Would you like…?",
  kh:"ប្រើដើម្បីស្នើ ឬបញ្ជាទិញដោយគួរសម។ គួរសមជាង want។",
  ex:[["[I'd like] a glass of water, please.","ខ្ញុំចង់បានទឹកមួយកែវ។"],["[Would you like] some tea?","តើអ្នកចង់ពិសាតែទេ?"],["She [would like to visit] Japan.","នាងចង់ទៅលេងប្រទេសជប៉ុន។"],["[I'd like to] book a table for two.","ខ្ញុំចង់កក់តុសម្រាប់ពីរនាក់។"]],
  q:[["I'd like ___ coffee, please.",["a","to","an"],0],["Would you like ___ dance?",["to","—","for"],0],["___ you like some cake?",["Do","Would","Are"],1],["She would like ___ a doctor.",["be","to be","being"],1],["I'd ___ the chicken, please.",["like","likes","liking"],0]]},
 {lv:"A1",title:"Present Simple spelling: -s / -es / -ies",rule:"ធម្មតា + s (works) · -s, -sh, -ch, -x, -o + es (watches, goes) · ព្យញ្ជនៈ + y → ies (studies)",
  kh:"ពេលប្រធានជា he/she/it ត្រូវប្ដូរ verb តាមច្បាប់សរសេរនេះ។ have → has ជាករណីពិសេស។",
  ex:[["He [watches] TV every night.","គាត់មើលទូរទស្សន៍រៀងរាល់យប់។"],["She [studies] at a university.","នាងរៀននៅសាកលវិទ្យាល័យ។"],["My dad [goes] to work by car.","ឪពុកខ្ញុំទៅធ្វើការដោយឡាន។"],["It [plays] music.","វាចាក់តន្ត្រី។"]],
  q:[["She ___ her hair every day.",["washs","washes","washies"],1],["He ___ very hard.",["studys","studies","studyes"],1],["My mom ___ the dishes.",["dos","does","doies"],1],["The baby ___ a lot.",["crys","cries","cryes"],1],["Tom ___ football.",["plaies","playes","plays"],2]]},

 {lv:"A2",title:"Possessive pronouns: mine, yours, his…",rule:"mine · yours · his · hers · ours · theirs (មិនមាននាមនៅពីក្រោយ)",
  kh:"Possessive pronoun ជំនួសទាំង possessive adjective និងនាម៖ my book → mine។",
  ex:[["This pen is [mine].","ប៊ិចនេះជារបស់ខ្ញុំ។"],["Is this bag [yours]?","តើកាបូបនេះជារបស់អ្នកទេ?"],["That house is [theirs].","ផ្ទះនោះជារបស់ពួកគេ។"],["My phone is old, but [hers] is new.","ទូរស័ព្ទខ្ញុំចាស់ ប៉ុន្តែរបស់នាងថ្មី។"]],
  q:[["This car is ___. (we)",["our","ours","us"],1],["Is this book ___? (you)",["your","yours","you"],1],["That bike is ___. (he)",["his","him","he's"],0],["The red shoes are ___. (she)",["her","hers","she"],1],["This isn't my coffee. ___ is hot.",["My","Mine","Me"],1]]},
 {lv:"A2",title:"Prepositions of movement: into, across, through…",rule:"into · out of · across · through · along · up · down · over · past · towards",
  kh:"ប្រើជាមួយ verb ចលនា (go, walk, run, drive…) ដើម្បីប្រាប់ទិសដៅ។",
  ex:[["She walked [into] the room.","នាងបានដើរចូលក្នុងបន្ទប់។"],["We drove [across] the bridge.","យើងបានបើកឡានឆ្លងស្ពាន។"],["The train went [through] a tunnel.","រថភ្លើងបានធ្វើដំណើរកាត់រូងក្រោមដី។"],["Walk [along] the river.","ដើរតាមបណ្ដោយទន្លេ។"]],
  q:[["The cat jumped ___ the wall.",["over","into","along"],0],["He ran ___ the house because of the fire.",["out of","into","across"],0],["We walked ___ the forest.",["through","into of","on"],0],["Go ___ the stairs to the second floor.",["up","across","through"],0],["She swam ___ the river.",["across","into","out"],0]]},
 {lv:"A2",title:"Present Continuous for future plans",rule:"am / is / are + V-ing + ពេលអនាគត (tomorrow, next week)",
  kh:"ប្រើសម្រាប់ផែនការដែលបានរៀបចំ ឬណាត់ជួបរួចហើយ (មានម៉ោង កន្លែងច្បាស់)។",
  ex:[["[I'm meeting] Dara [tomorrow].","ខ្ញុំនឹងជួបដារ៉ានៅថ្ងៃស្អែក។"],["We [are flying] to Bangkok [on Friday].","យើងនឹងហោះទៅបាងកកនៅថ្ងៃសុក្រ។"],["What [are] you [doing] [this weekend]?","តើអ្នកនឹងធ្វើអ្វីចុងសប្ដាហ៍នេះ?"],["She [isn't coming] to the party.","នាងមិនមកពិធីជប់លៀងទេ។"]],
  q:[["I ___ my grandmother on Sunday.",["visiting","am visiting","visits"],1],["What ___ you doing tonight?",["do","are","is"],1],["They ___ married next month.",["are getting","get","gets"],0],["She ___ to the dentist at 3 p.m.",["is going","go","going"],0],["We ___ dinner with friends tonight.",["have","are having","has"],1]]},
 {lv:"A2",title:"will vs be going to",rule:"will = សម្រេចភ្លាមៗ / ទស្សន៍ទាយ / សន្យា · be going to = ផែនការមានស្រាប់ / មានភស្តុតាង",
  kh:"បើសម្រេចចិត្តនៅពេលនិយាយ ប្រើ will។ បើបានគ្រោងទុកមុន ឬឃើញសញ្ញាច្បាស់ ប្រើ be going to។",
  ex:[["The phone is ringing. – [I'll answer] it.","ទូរស័ព្ទកំពុងរោទ៍។ – ខ្ញុំនឹងលើកវា។"],["[I'm going to study] IT next year.","ខ្ញុំគ្រោងនឹងរៀន IT នៅឆ្នាំក្រោយ។"],["Look at those clouds! It['s going to rain].","មើលពពកទាំងនោះ! មេឃនឹងភ្លៀងហើយ។"],["I think you [will pass] the exam.","ខ្ញុំគិតថាអ្នកនឹងប្រឡងជាប់។"]],
  q:[["I'm cold. – I ___ close the window.",["'ll","'m going to","am"],0],["We ___ visit Siem Reap next month. We booked the hotel.",["will","are going to","going"],1],["Watch out! You ___ fall!",["will","are going to","go"],1],["I promise I ___ tell anyone.",["won't","am not going","don't"],0],["She's bought paint. She ___ paint her room.",["will","is going to","goes to"],1]]},
 {lv:"A2",title:"Reflexive pronouns: myself, yourself…",rule:"myself · yourself · himself · herself · itself · ourselves · yourselves · themselves",
  kh:"ប្រើពេលប្រធាន និងកម្មបទជាមនុស្សតែមួយ ឬដើម្បីសង្កត់ថា «ដោយខ្លួនឯង»។ by myself = តែម្នាក់ឯង។",
  ex:[["I cut [myself] while cooking.","ខ្ញុំបានកាត់ដៃខ្លួនឯងពេលធ្វើម្ហូប។"],["She made the cake [herself].","នាងបានធ្វើនំខេកដោយខ្លួនឯង។"],["Enjoy [yourselves]!","សូមរីករាយ!"],["He lives [by himself].","គាត់រស់នៅតែម្នាក់ឯង។"]],
  q:[["They taught ___ English.",["them","themselves","theirselves"],1],["Be careful! Don't hurt ___.",["you","yourself","yours"],1],["We painted the house ___.",["ourself","ourselves","us"],1],["The cat is washing ___.",["itself","itsself","it"],0],["He looked at ___ in the mirror.",["him","himself","hisself"],1]]},
 {lv:"A2",title:"Polite requests: Can / Could / Would you…?",rule:"Can you + V1? (ធម្មតា) · Could you + V1? (គួរសមជាង) · Would you mind + V-ing?",
  kh:"ប្រើដើម្បីសុំឲ្យគេជួយ។ Could និង Would you mind គួរសមជាង Can។",
  ex:[["[Can you help] me, please?","តើអ្នកអាចជួយខ្ញុំបានទេ?"],["[Could you speak] more slowly?","តើអ្នកអាចនិយាយយឺតជាងនេះបានទេ?"],["[Would you mind closing] the door?","តើអ្នកអាចជួយបិទទ្វារបានទេ?"],["[Could I borrow] your pen?","តើខ្ញុំអាចខ្ចីប៊ិចរបស់អ្នកបានទេ?"]],
  q:[["Could you ___ me the salt?",["pass","passing","to pass"],0],["Would you mind ___ the window?",["open","opening","to open"],1],["___ I use your phone?",["Could","Would","Do"],0],["Can you ___ me at 6?",["calling","call","to call"],1],["Would you ___ waiting a moment?",["mind","like","want"],0]]},

 {lv:"B1",title:"-ed / -ing adjectives (bored / boring)",rule:"-ed = អារម្មណ៍របស់មនុស្ស (I'm bored) · -ing = លក្ខណៈរបស់វត្ថុ/ស្ថានភាព (The film is boring)",
  kh:"ពាក្យ -ed ប្រាប់ពីអារម្មណ៍ ហើយ -ing ប្រាប់ពីអ្វីដែលបង្កអារម្មណ៍នោះ។",
  ex:[["I'm [bored]. This lesson is [boring].","ខ្ញុំធុញ។ មេរៀននេះគួរឲ្យធុញ។"],["She was [surprised] by the news.","នាងភ្ញាក់ផ្អើលនឹងដំណឹងនោះ។"],["The trip was [exciting].","ដំណើរនោះគួរឲ្យរំភើប។"],["We were [tired] after a [tiring] day.","យើងហត់ក្រោយពីថ្ងៃដ៏នឿយហត់មួយ។"]],
  q:[["The film was very ___.",["interested","interesting","interest"],1],["I'm ___ in history.",["interested","interesting","interests"],0],["She felt ___ after the long walk.",["tiring","tired","tire"],1],["The news was ___.",["shocked","shocking","shock"],1],["Are you ___? You look sad.",["disappointed","disappointing","disappoint"],0]]},
 {lv:"B1",title:"So do I / Neither do I",rule:"យល់ស្របវិជ្ជមាន៖ So + auxiliary + subject · យល់ស្របអវិជ្ជមាន៖ Neither/Nor + auxiliary + subject",
  kh:"ប្រើដើម្បីនិយាយថា «ខ្ញុំក៏ដូចគ្នា»។ auxiliary ត្រូវតាម tense នៃប្រយោគមុន (am, do, did, can, have…)។",
  ex:[["I love durian. – [So do I].","ខ្ញុំចូលចិត្តធុរេន។ – ខ្ញុំក៏ដូចគ្នា។"],["I can't swim. – [Neither can I].","ខ្ញុំហែលទឹកមិនកើត។ – ខ្ញុំក៏អត់ដែរ។"],["She was tired. – [So was I].","នាងហត់។ – ខ្ញុំក៏ហត់ដែរ។"],["I haven't seen it. – [Neither have I].","ខ្ញុំមិនទាន់បានឃើញវាទេ។ – ខ្ញុំក៏មិនទាន់ដែរ។"]],
  q:[["I'm hungry. – So ___ I.",["do","am","have"],1],["I don't like coffee. – Neither ___ I.",["do","am","don't"],0],["I went to Kep. – So ___ I.",["did","do","went"],0],["I can't drive. – ___ can I.",["So","Neither","Either"],1],["I've finished. – So ___ I.",["have","did","am"],0]]},
 {lv:"B1",title:"when / while (Past Simple + Past Continuous)",rule:"Past Continuous (សកម្មភាពវែង) + when + Past Simple (សកម្មភាពខ្លីកាត់) · while + Past Continuous",
  kh:"ប្រើ when ជាមួយសកម្មភាពខ្លីដែលកាត់ចូល។ ប្រើ while ជាមួយសកម្មភាពវែងដែលកំពុងកើតឡើង។",
  ex:[["I [was cooking] [when] the power [went] off.","ខ្ញុំកំពុងធ្វើម្ហូប ពេលភ្លើងដាច់។"],["[While] she [was walking] home, it started to rain.","ពេលនាងកំពុងដើរទៅផ្ទះ មេឃចាប់ផ្ដើមភ្លៀង។"],["He [called] [while] I [was taking] a shower.","គាត់ទូរស័ព្ទមក ពេលខ្ញុំកំពុងងូតទឹក។"],["[When] I [arrived], they [were eating].","ពេលខ្ញុំមកដល់ ពួកគេកំពុងញ៉ាំ។"]],
  q:[["I was reading ___ the phone rang.",["while","when","during"],1],["___ we were playing, it got dark.",["When","While","During"],1],["She ___ TV when I came in.",["watched","was watching","watches"],1],["He fell ___ he was running.",["while","when","during"],0],["When the teacher ___, we were talking.",["came in","was coming in","comes in"],0]]},
 {lv:"B1",title:"Verb + preposition (depend on, listen to…)",rule:"listen to · wait for · depend on · look for · belong to · agree with · think about/of · pay for",
  kh:"verb ខ្លះត្រូវតែមាន preposition ជាក់លាក់មួយមុនកម្មបទ។ គួររៀនទន្ទេញជាគូ។",
  ex:[["I'm [listening to] music.","ខ្ញុំកំពុងស្ដាប់តន្ត្រី។"],["It [depends on] the weather.","វាអាស្រ័យលើអាកាសធាតុ។"],["Who does this bag [belong to]?","តើកាបូបនេះជារបស់នរណា?"],["I [agree with] you.","ខ្ញុំយល់ស្របជាមួយអ្នក។"]],
  q:[["We are waiting ___ the bus.",["for","to","on"],0],["Can you look ___ my keys?",["at for","for","to"],1],["I'm thinking ___ buying a laptop.",["about","on","to"],0],["Who paid ___ the meal?",["to","for","on"],1],["Our success depends ___ teamwork.",["of","in","on"],2]]},
 {lv:"B1",title:"Adjective + preposition (good at, afraid of…)",rule:"good at · afraid of · interested in · proud of · tired of · famous for · married to · different from",
  kh:"adjective ខ្លះត្រូវតាមដោយ preposition ជាក់លាក់។ បើតាមដោយ verb ត្រូវប្រើ V-ing (good at drawing)។",
  ex:[["She is [good at] maths.","នាងពូកែគណិតវិទ្យា។"],["I'm [afraid of] snakes.","ខ្ញុំខ្លាចពស់។"],["Kampot is [famous for] its pepper.","កំពតល្បីល្បាញដោយសារម្រេច។"],["My parents are [proud of] me.","ឪពុកម្ដាយខ្ញុំមានមោទនភាពចំពោះខ្ញុំ។"]],
  q:[["He's interested ___ photography.",["on","in","at"],1],["I'm tired ___ waiting.",["of","from","with"],0],["She's married ___ a doctor.",["with","to","for"],1],["This phone is different ___ mine.",["from","of","at"],0],["Are you good ___ cooking?",["in","at","on"],1]]},
 {lv:"B1",title:"Phrasal verbs: separable & inseparable",rule:"បំបែកបាន៖ turn the TV off / turn it off · មិនបំបែក៖ look after the baby (មិនមែន look the baby after)",
  kh:"ជាមួយ phrasal verb បំបែកបាន pronoun (it, them) ត្រូវដាក់នៅកណ្ដាលជានិច្ច៖ pick it up (មិនមែន pick up it)។",
  ex:[["Please [turn] the light [off].","សូមបិទភ្លើង។"],["[Pick it up], please.","សូមរើសវាឡើង។"],["She [looks after] her grandmother.","នាងមើលថែជីដូនរបស់នាង។"],["I [ran into] an old friend yesterday.","ខ្ញុំបានជួបមិត្តចាស់ម្នាក់ដោយចៃដន្យកាលពីម្សិលមិញ។"]],
  q:[["Your jacket is on the floor. Pick ___.",["up it","it up","up"],1],["Can you ___ my dog this weekend?",["look after","look my dog after","after look"],0],["The music is loud. Turn ___.",["down it","it down","down"],1],["I need to ___ this form.",["fill in","fill it in this","in fill"],0],["Put your coat on. – OK, I'll put ___.",["on it","it on","it"],1]]},

 {lv:"B2",title:"be used to / get used to",rule:"be used to + noun/V-ing (ស៊ាំហើយ) · get used to + noun/V-ing (កំពុងស៊ាំ) · ខុសពី used to + V1",
  kh:"be used to = ទម្លាប់រួចហើយ។ get used to = ចាប់ផ្ដើមទម្លាប់។ ក្រោយ to ប្រើ V-ing មិនមែន V1។",
  ex:[["I [am used to getting] up early.","ខ្ញុំទម្លាប់ក្រោកពីព្រលឹមហើយ។"],["She [is getting used to] the cold weather.","នាងកំពុងស៊ាំនឹងអាកាសធាតុត្រជាក់។"],["He [isn't used to driving] on the left.","គាត់មិនទាន់ទម្លាប់បើកបរខាងឆ្វេងទេ។"],["You'll soon [get used to] it.","អ្នកនឹងឆាប់ស៊ាំជាមួយវា។"]],
  q:[["I'm used to ___ spicy food.",["eat","eating","ate"],1],["She'll get used ___ the new job.",["to","with","for"],0],["He ___ used to living alone. It's normal for him.",["is","does","gets to"],0],["It took me a year to ___ used to the noise.",["be","get","do"],1],["I used to ___ in Battambang, but now I live here.",["living","live","lived"],1]]},
 {lv:"B2",title:"Reporting verbs: advise, suggest, deny…",rule:"advise/tell/ask + someone + to V1 · suggest/deny/admit + V-ing · promise/refuse/agree + to V1",
  kh:"ជំនួស said ដោយ verb ដែលប្រាប់ពីគោលបំណងនៃការនិយាយ។ verb នីមួយៗមានលំនាំខុសគ្នា។",
  ex:[["The doctor [advised me to rest].","វេជ្ជបណ្ឌិតបានណែនាំឲ្យខ្ញុំសម្រាក។"],["He [denied taking] the money.","គាត់បានបដិសេធថាមិនបានយកលុយ។"],["She [suggested going] to the beach.","នាងបានស្នើឲ្យទៅឆ្នេរ។"],["They [refused to help] us.","ពួកគេបានបដិសេធមិនជួយយើង។"]],
  q:[["She promised ___ me.",["calling","to call","call"],1],["He admitted ___ the window.",["to break","breaking","broke"],1],["My teacher advised me ___ harder.",["study","to study","studying"],1],["Dara suggested ___ a taxi.",["taking","to take","take"],0],["They agreed ___ the price.",["paying","to pay","pay"],1]]},
 {lv:"B2",title:"The more…, the more… (double comparatives)",rule:"The + comparative …, the + comparative … (The sooner, the better.)",
  kh:"ប្រើដើម្បីបង្ហាញថាការផ្លាស់ប្ដូរមួយនាំឲ្យមានការផ្លាស់ប្ដូរមួយទៀត។",
  ex:[["[The more] you practise, [the better] you get.","អ្នកកាន់តែហាត់ច្រើន អ្នកកាន់តែពូកែ។"],["[The sooner], [the better].","កាន់តែឆាប់ កាន់តែល្អ។"],["[The older] I get, [the happier] I am.","ខ្ញុំកាន់តែចាស់ ខ្ញុំកាន់តែសប្បាយចិត្ត។"],["[The more] money he earns, [the more] he spends.","គាត់រកលុយបានកាន់តែច្រើន គាត់ចាយកាន់តែច្រើន។"]],
  q:[["The harder you work, ___ you'll be.",["the more successful","more successful","the most successful"],0],["The ___ the hotel, the more expensive it is.",["big","bigger","biggest"],1],["___ more I read, the more I learn.",["A","The","—"],1],["The faster you drive, the ___ it is.",["dangerous","more dangerous","most dangerous"],1],["The ___, the better.",["soon","sooner","soonest"],1]]},
 {lv:"B2",title:"be about to / be due to / be on the point of",rule:"be about to + V1 (ជិតនឹង) · be due to + V1 (គ្រោងតាមកាលវិភាគ) · be on the point of + V-ing",
  kh:"ប្រើសម្រាប់អនាគតជិតបំផុត ឬព្រឹត្តិការណ៍ដែលមានកាលវិភាគកំណត់។",
  ex:[["Hurry! The film [is about to start].","ប្រញាប់! ខ្សែភាពយន្តជិតចាប់ផ្ដើមហើយ។"],["The train [is due to arrive] at 9:30.","រថភ្លើងគ្រោងមកដល់នៅម៉ោង ៩:៣០។"],["I [was on the point of leaving] when she called.","ខ្ញុំជិតចាកចេញហើយ ពេលនាងទូរស័ព្ទមក។"],["The baby [is due] next month.","ទារកគ្រោងនឹងកើតខែក្រោយ។"]],
  q:[["Don't go! Dinner is about ___ ready.",["to be","being","be"],0],["The plane is due ___ at noon.",["landing","to land","land"],1],["I was on the point of ___ up.",["give","giving","to give"],1],["We're about ___ go out. Can I call you later?",["to","for","—"],0],["The report ___ due on Friday.",["is","has","does"],0]]},
 {lv:"B2",title:"Past Perfect Continuous",rule:"had been + V-ing (សកម្មភាពបន្តរយៈពេលមួយ មុនពេលមួយក្នុងអតីតកាល)",
  kh:"ប្រើដើម្បីបង្ហាញថាសកម្មភាពមួយបានបន្តជាយូរ មុនពេលមានរឿងមួយទៀតកើតឡើង ឬដើម្បីពន្យល់មូលហេតុ។",
  ex:[["She was tired because she [had been working] all day.","នាងហត់ព្រោះនាងបានធ្វើការពេញមួយថ្ងៃ។"],["We [had been waiting] for an hour when the bus came.","យើងបានរង់ចាំអស់មួយម៉ោង ទើបឡានក្រុងមកដល់។"],["His eyes were red. He [had been crying].","ភ្នែកគាត់ក្រហម។ គាត់បានយំ។"],["How long [had] you [been living] there?","តើអ្នកបានរស់នៅទីនោះយូរប៉ុណ្ណាហើយ (មុនពេលនោះ)?"]],
  q:[["The ground was wet. It ___ all night.",["has been raining","had been raining","was rain"],1],["I ___ for two hours when he finally arrived.",["had been waiting","have been waiting","waited for"],0],["She was out of breath because she ___.",["had been running","has run","runs"],0],["They ___ for years before they got married.",["had been dating","have dated","dating"],0],["How long had you ___ English before the test?",["studied","been studying","be studying"],1]]},
 {lv:"B2",title:"each / every / all / none",rule:"each/every + នាមឯកវចនៈ · all + នាមពហុវចនៈ · none of + នាមពហុវចនៈ · each = ម្នាក់ៗ (ដាច់ដោយឡែក)",
  kh:"each ផ្ដោតលើម្នាក់ៗ every ផ្ដោតលើទាំងក្រុម។ none មានន័យអវិជ្ជមានរួចហើយ។",
  ex:[["[Each] student has a laptop.","សិស្សម្នាក់ៗមានកុំព្យូទ័រយួរដៃ។"],["I go there [every] day.","ខ្ញុំទៅទីនោះរៀងរាល់ថ្ងៃ។"],["[All] the shops were closed.","ហាងទាំងអស់បានបិទ។"],["[None of] my friends came.","មិត្តភក្ដិខ្ញុំគ្មាននរណាម្នាក់មកទេ។"]],
  q:[["___ child gets a present.",["All","Each","None"],1],["___ the students passed. Nobody failed.",["None of","All","Every"],1],["I visit my parents ___ weekend.",["every","all","none"],0],["___ of the answers were correct. They were all wrong.",["All","None","Every"],1],["___ of the two brothers has a car.",["Every","Each","All"],1]]},

 {lv:"C1",title:"whatever / whoever / wherever / however",rule:"wh- + ever = មិនថា…អ្វី/នរណា/ណា/យ៉ាងណា (no matter what/who/where/how)",
  kh:"ប្រើដើម្បីបង្ហាញថាលទ្ធផលមិនផ្លាស់ប្ដូរទេ ទោះស្ថានភាពយ៉ាងណាក៏ដោយ។",
  ex:[["[Whatever] you do, don't give up.","ទោះអ្នកធ្វើអ្វីក៏ដោយ កុំបោះបង់។"],["[Whoever] wins, we'll celebrate.","ទោះនរណាឈ្នះក៏ដោយ យើងនឹងអបអរ។"],["Sit [wherever] you like.","អង្គុយកន្លែងណាក៏បានតាមចិត្ត។"],["[However] hard I try, I can't sleep.","ទោះខ្ញុំព្យាយាមខ្លាំងប៉ុណ្ណាក៏ដោយ ខ្ញុំគេងមិនលក់។"]],
  q:[["___ she goes, she makes friends.",["Wherever","Whatever","Whoever"],0],["___ rich you are, you can't buy happiness.",["Whatever","However","Whenever"],1],["Take ___ you need.",["whoever","whatever","however"],1],["___ calls, tell them I'm busy.",["Whoever","Whatever","Wherever"],0],["Call me ___ you want.",["whenever","whoever","however"],0]]},
 {lv:"C1",title:"Passive gerunds & infinitives",rule:"being + V3 (I hate being lied to.) · to be + V3 (She wants to be promoted.) · to have been + V3",
  kh:"ប្រើ passive បន្ទាប់ពី verb ដែលតាមដោយ V-ing ឬ to + V ពេលប្រធានទទួលរងសកម្មភាព។",
  ex:[["I don't like [being told] what to do.","ខ្ញុំមិនចូលចិត្តត្រូវគេប្រាប់ថាត្រូវធ្វើអ្វីទេ។"],["She hopes [to be chosen] for the team.","នាងសង្ឃឹមថានឹងត្រូវបានជ្រើសរើសចូលក្រុម។"],["He avoided [being seen].","គាត់ជៀសវាងកុំឲ្យគេឃើញ។"],["The house seems [to have been abandoned].","ផ្ទះនោះហាក់ដូចជាត្រូវបានគេបោះបង់ចោល។"]],
  q:[["Nobody likes ___.",["being laughed at","laughing at","to laugh at"],0],["He expects ___ soon.",["to promote","to be promoted","being promote"],1],["She was afraid of ___.",["being forgotten","forgetting being","be forgotten"],0],["The letter needs ___ today.",["to send","to be sent","being send"],1],["I remember ___ to the zoo as a child.",["being taken","taking to","to be taken"],0]]},
 {lv:"C1",title:"be bound to / be likely to / be sure to",rule:"be bound to + V1 (ប្រាកដជា) · be likely to + V1 (ទំនងជា) · be unlikely to + V1",
  kh:"ប្រើដើម្បីបង្ហាញកម្រិតនៃភាពប្រាកដប្រជាអំពីអនាគត។",
  ex:[["It's [bound to rain] – look at the sky.","ប្រាកដជាភ្លៀងហើយ មើលមេឃទៅ។"],["Prices [are likely to rise] next year.","តម្លៃទំនងជានឹងឡើងនៅឆ្នាំក្រោយ។"],["She [is unlikely to come] today.","នាងមិនសូវទំនងជាមកថ្ងៃនេះទេ។"],["He [is sure to win]. He's the best.","គាត់ប្រាកដជាឈ្នះ។ គាត់ពូកែជាងគេ។"]],
  q:[["You've studied so hard. You're bound ___ pass.",["to","for","of"],0],["It's ___ to snow in Phnom Penh.",["likely","unlikely","bound"],1],["Traffic is likely ___ heavy tonight.",["being","to be","be"],1],["He's sure ___ late again.",["be","to be","being"],1],["There are bound to ___ problems at first.",["be","being","been"],0]]},
 {lv:"C1",title:"Discourse markers: furthermore, nevertheless…",rule:"បន្ថែម៖ furthermore, moreover · ផ្ទុយ៖ nevertheless, nonetheless · លទ្ធផល៖ therefore, consequently",
  kh:"ប្រើក្នុងការសរសេរផ្លូវការ (essay, IELTS) ដើម្បីភ្ជាប់គំនិតឲ្យរលូន។ ជាធម្មតាតាមដោយសញ្ញាក្បៀស។",
  ex:[["The job pays well. [Furthermore], it's close to home.","ការងារនេះប្រាក់ខែល្អ។ លើសពីនេះ វានៅជិតផ្ទះ។"],["It was difficult. [Nevertheless], we finished on time.","វាពិបាក។ ទោះជាយ៉ាងណាក៏ដោយ យើងបានបញ្ចប់ទាន់ពេល។"],["He didn't study. [Consequently], he failed.","គាត់មិនបានរៀនទេ។ ជាលទ្ធផល គាត់ធ្លាក់។"],["Prices rose; [therefore], sales fell.","តម្លៃបានឡើង ដូច្នេះការលក់បានធ្លាក់ចុះ។"]],
  q:[["The hotel was cheap. ___, the rooms were clean.",["Therefore","Moreover","Consequently"],1],["It was raining. ___, they played the match.",["Nevertheless","Furthermore","Therefore"],0],["He broke the rules; ___, he was fired.",["moreover","consequently","nevertheless"],1],["The plan is expensive. ___, it may not work.",["Furthermore","Nonetheless","Therefore"],0],["She was ill; ___, she went to work.",["therefore","nonetheless","moreover"],1]]},
 {lv:"C1",title:"Hedging: It seems / tend to / appear to",rule:"It seems/appears that … · S + seem/appear/tend + to V1 · may, might, could, possibly, arguably",
  kh:"ប្រើក្នុងភាសាសិក្សា ដើម្បីនិយាយដោយប្រុងប្រយ័ត្ន មិនអះអាងខ្លាំងពេក។",
  ex:[["[It seems that] the plan is working.","ហាក់ដូចជាផែនការនេះកំពុងដំណើរការ។"],["Young people [tend to use] social media more.","យុវជនមានទំនោរប្រើប្រព័ន្ធផ្សព្វផ្សាយសង្គមច្រើនជាង។"],["The results [appear to show] a clear trend.","លទ្ធផលហាក់បង្ហាញពីនិន្នាការច្បាស់លាស់មួយ។"],["This is [arguably] the best solution.","នេះអាចនិយាយបានថាជាដំណោះស្រាយល្អបំផុត។"]],
  q:[["Women tend ___ longer than men.",["live","to live","living"],1],["It ___ that nobody saw the accident.",["seems","tends","looks to"],0],["He appears ___ the problem.",["to understand","understanding","understand"],0],["This ___ be the reason for the delay.",["may","must to","tends"],0],["Prices seem ___ rising.",["be","to be","being"],1]]},
 {lv:"C1",title:"Purpose: so that / in order to / so as to",rule:"in order to / so as to + V1 · so that + subject + can/could/will/would · in order not to / so as not to",
  kh:"ប្រើដើម្បីប្រាប់ពីគោលបំណង (ដើម្បី)។ so that តាមដោយប្រយោគពេញ ដែលច្រើនមាន modal។",
  ex:[["I left early [in order to catch] the bus.","ខ្ញុំចេញមុនដើម្បីឲ្យទាន់ឡានក្រុង។"],["She whispered [so as not to wake] the baby.","នាងខ្សឹបដើម្បីកុំឲ្យទារកភ្ញាក់។"],["Speak slowly [so that] everyone [can understand].","និយាយយឺតៗ ដើម្បីឲ្យគ្រប់គ្នាអាចយល់។"],["He saved money [so that] he [could buy] a car.","គាត់សន្សំលុយដើម្បីអាចទិញឡានមួយ។"]],
  q:[["I study hard ___ get a scholarship.",["so that","in order to","so as"],1],["Write it down so ___ you don't forget.",["that","as","to"],0],["She ran so as not ___ late.",["be","to be","being"],1],["I'll give you a map so that you ___ get lost.",["won't","don't to","not"],0],["He went to Japan in order ___ Japanese.",["learning","to learn","learn"],1]]},

 {lv:"C2",title:"Inversion with Only / Little / Not until",rule:"Only then / Only when … + auxiliary + S · Little + did + S + V1 · Not until … + auxiliary + S",
  kh:"ប្រើក្នុងការសរសេរផ្លូវការ ដើម្បីសង្កត់ន័យខ្លាំង។ ក្រោយឃ្លានេះ ត្រូវប្ដូរលំដាប់ auxiliary ទៅមុខប្រធាន។",
  ex:[["[Only then did I realise] my mistake.","មានតែពេលនោះទេ ទើបខ្ញុំដឹងពីកំហុសរបស់ខ្ញុំ។"],["[Little did she know] what was waiting for her.","នាងមិនបានដឹងសោះថាមានអ្វីកំពុងរង់ចាំនាង។"],["[Not until] he left [did I feel] relaxed.","លុះតែគាត់ចាកចេញ ទើបខ្ញុំមានអារម្មណ៍ធូរស្រាល។"],["[Only when] you lose something [do you] value it.","លុះតែបាត់បង់អ្វីមួយ ទើបអ្នកឲ្យតម្លៃវា។"]],
  q:[["Little ___ we know that he was lying.",["do","did","had"],1],["Only later ___ the truth.",["I learned","did I learn","I did learn"],1],["Not until midnight ___ home.",["did she come","she came","came she"],0],["Only when it rains ___ the roof leak.",["does","do","is"],0],["Little ___ he realise how serious it was.",["does","did","has"],1]]},
 {lv:"C2",title:"as if / as though (unreal)",rule:"as if / as though + V2 (មិនពិតឥឡូវ) · + had + V3 (មិនពិតអតីតកាល) · + present (ប្រហែលពិត)",
  kh:"ប្រើដើម្បីប្រៀបធៀបជាមួយស្ថានភាពដែលមិនពិត ឬមិនច្បាស់។ ក្នុងភាសាផ្លូវការប្រើ were សម្រាប់គ្រប់ប្រធាន។",
  ex:[["He talks [as if he were] the boss.","គាត់និយាយដូចជាគាត់ជាចៅហ្វាយ។"],["She looked [as though she had seen] a ghost.","នាងមើលទៅដូចជាបានឃើញខ្មោច។"],["It looks [as if it's going to] rain.","មើលទៅដូចជាមេឃនឹងភ្លៀង។"],["Don't treat me [as if I were] a child.","កុំធ្វើចំពោះខ្ញុំដូចជាខ្ញុំជាក្មេង។"]],
  q:[["He acts as if he ___ everything.",["knows","knew","know"],1],["She spoke as though nothing ___.",["happened","had happened","happens"],1],["You look as if you ___ a holiday.",["need","needed to","needing"],0],["He behaves as if he ___ rich.",["were","is being","be"],0],["They looked as though they ___ all night.",["hadn't slept","haven't slept","don't sleep"],0]]},
 {lv:"C2",title:"will / would for habits & typical behaviour",rule:"will + V1 (ទម្លាប់/លក្ខណៈនាពេលបច្ចុប្បន្ន) · would + V1 (ទម្លាប់អតីតកាល) · ការសង្កត់សំឡេង WILL = រំខាន",
  kh:"ក្រៅពីអនាគត will/would ក៏ប្រើដើម្បីពិពណ៌នាទម្លាប់ ឬលក្ខណៈធម្មតារបស់មនុស្ស ឬវត្ថុ។",
  ex:[["She [will talk] for hours if you let her.","នាងតែងនិយាយរាប់ម៉ោងបើអ្នកទុកឲ្យនាងនិយាយ។"],["As children, we [would swim] in the river every day.","កាលពីក្មេង យើងតែងតែហែលទឹកក្នុងទន្លេរៀងរាល់ថ្ងៃ។"],["Oil [will float] on water.","ប្រេងតែងតែអណ្ដែតលើទឹក។"],["He [will keep] interrupting me!","គាត់ចេះតែកាត់សម្ដីខ្ញុំ!"]],
  q:[["Every Sunday, Grandpa ___ tell us old stories.",["would","will have","was"],0],["Boys ___ be boys.",["will","would have","are"],0],["She ___ always leave the door open. It's so annoying!",["will","is","does to"],0],["When I was young, my mother ___ sing to me.",["would","will","wills"],0],["This old car ___ start on cold mornings.",["won't","wouldn't have","doesn't to"],0]]},
 {lv:"C2",title:"Pseudo-cleft: All… / The thing… / The reason why…",rule:"All (that) + S + V + is/was … · The thing (that) … is … · The reason (why) … is that …",
  kh:"បន្ថែមលើ What-cleft ដើម្បីសង្កត់ន័យ និងរៀបចំព័ត៌មានក្នុងការនិយាយ និងសរសេរ។",
  ex:[["[All I want is] a quiet life.","អ្វីដែលខ្ញុំចង់បានគឺជីវិតស្ងប់ស្ងាត់មួយប៉ុណ្ណោះ។"],["[The thing that] worries me [is] the cost.","រឿងដែលធ្វើឲ្យខ្ញុំព្រួយបារម្ភគឺការចំណាយ។"],["[The reason why] I left [was that] I was bored.","មូលហេតុដែលខ្ញុំចាកចេញគឺខ្ញុំធុញ។"],["[The place where] we met [was] a small café.","កន្លែងដែលយើងជួបគ្នាគឺហាងកាហ្វេតូចមួយ។"]],
  q:[["All I need ___ some sleep.",["are","is","be"],1],["The reason ___ he quit was the low salary.",["what","why","which why"],1],["The thing ___ I love about her is her honesty.",["that","what","whose"],0],["All we did ___ talk.",["was","were","did"],0],["The person ___ helped me most was my teacher.",["who","what","which who"],0]]},
 {lv:"C2",title:"Formal relatives: in which / whereby / whose",rule:"preposition + which/whom (in which, to whom) · whereby (ដែលតាមរយៈនោះ) · of which / whose",
  kh:"ក្នុងភាសាផ្លូវការ preposition ដាក់ពីមុខ which/whom ជាជាងដាក់នៅចុងប្រយោគ។",
  ex:[["This is the house [in which] I was born.","នេះជាផ្ទះដែលខ្ញុំបានកើត។"],["The person [to whom] I spoke was very helpful.","មនុស្សដែលខ្ញុំបាននិយាយជាមួយបានជួយច្រើន។"],["They made an agreement [whereby] both sides would benefit.","ពួកគេបានធ្វើកិច្ចព្រមព្រៀងមួយដែលភាគីទាំងពីរនឹងទទួលបានផលប្រយោជន៍។"],["He has two cars, [both of which] are red.","គាត់មានឡានពីរ ដែលទាំងពីរពណ៌ក្រហម។"]],
  q:[["The man ___ I gave the money was a stranger.",["to who","to whom","whom to"],1],["This is the city ___ she grew up.",["in which","which in","in that"],0],["A system ___ students are tested every month.",["whereby","whose","whom"],0],["I have three sisters, all of ___ are teachers.",["them","whom","who"],1],["The book, the cover ___ is torn, is mine.",["of which","of whose","which of"],0]]},
 {lv:"C2",title:"Fixed subjunctive expressions",rule:"Long live… · Be that as it may · Come what may · So be it · God save… · If need be · Suffice it to say",
  kh:"ឃ្លាដែលប្រើទម្រង់ subjunctive ចាស់ៗ (V1 ដោយគ្មាន s)។ ប្រើក្នុងការនិយាយផ្លូវការ ឬបែបអក្សរសាស្ត្រ។",
  ex:[["[Come what may], I will finish this degree.","ទោះមានរឿងអ្វីកើតឡើងក៏ដោយ ខ្ញុំនឹងបញ្ចប់សញ្ញាបត្រនេះ។"],["[Be that as it may], we still need more money.","ទោះជាយ៉ាងនោះក៏ដោយ យើងនៅតែត្រូវការលុយបន្ថែម។"],["We can work at night [if need be].","បើចាំបាច់ យើងអាចធ្វើការនៅពេលយប់។"],["[Suffice it to say], the trip was a disaster.","និយាយត្រឹមនេះគ្រប់គ្រាន់ហើយ ដំណើរនោះបរាជ័យទាំងស្រុង។"]],
  q:[["___ what may, we'll stay together.",["Comes","Come","Came"],1],["Be that as it ___, the rule must be followed.",["may","might be","will"],0],["Long ___ the King!",["lives","live","living"],1],["If need ___, I'll call the police.",["be","is","are"],0],["___ it to say, he was not happy.",["Suffices","Suffice","Sufficed"],1]]}
);
{ const order = ["A1","A2","B1","B2","C1","C2"]; XC.grammar.sort((a, b) => order.indexOf(a.lv) - order.indexOf(b.lv)); }

/* ---------- Negative questions ---------- */
XC.grammar.push(
 {lv:"A2",title:"Negative questions: Don't you…? Isn't it…?",rule:"Don't / Doesn't / Didn't + S + V1? · Isn't / Aren't / Wasn't + S…? · Can't / Won't / Haven't + S…?",
  kh:"សំណួរអវិជ្ជមាន ប្រើពេលយើងរំពឹងថាចម្លើយគឺ «បាទ/ចាស» ពេលភ្ញាក់ផ្អើល ឬពេលអញ្ជើញ/ណែនាំដោយគួរសម។ ដាក់ n't ភ្ជាប់ជាមួយ auxiliary នៅដើមប្រយោគ។",
  ex:[["[Don't you] like durian?","អ្នកមិនចូលចិត្តធុរេនទេឬ?"],["[Isn't it] a beautiful day?","ថ្ងៃនេះស្អាតណាស់ មែនទេ?"],["[Didn't you] hear the alarm?","អ្នកមិនបានឮសំឡេងរោទ៍ទេឬ?"],["[Why don't you] come with us?","ហេតុអ្វីអ្នកមិនមកជាមួយយើង? (= មកជាមួយយើងទៅ)"]],
  q:[["___ you tired? You worked all day.",["Don't","Aren't","Isn't"],1],["___ she speak English? I thought she did.",["Doesn't","Isn't","Don't"],0],["___ you call me last night? I waited.",["Don't","Didn't","Weren't"],1],["___ it hot today?",["Doesn't","Isn't","Aren't"],1],["Why ___ you ask the teacher?",["don't","aren't","doesn't"],0]]},
 {lv:"B1",title:"Answering negative questions (Yes / No)",rule:"ឆ្លើយតាមការពិត មិនមែនតាមសំណួរ៖ Yes = វិជ្ជមាន (Yes, I do.) · No = អវិជ្ជមាន (No, I don't.)",
  kh:"ប្រយ័ត្ន! ភាសាខ្មែរ «បាទ» អាចមានន័យថា «ត្រូវហើយ ខ្ញុំមិន…» តែភាសាអង់គ្លេសមិនដូច្នោះទេ។ សួរ «Don't you like coffee?» បើអ្នកមិនចូលចិត្ត ត្រូវឆ្លើយ «No, I don't.» មិនមែន «Yes» ទេ។",
  ex:[["Don't you like coffee? – [No, I don't]. (មិនចូលចិត្ត)","អ្នកមិនចូលចិត្តកាហ្វេទេឬ? – បាទ ខ្ញុំមិនចូលចិត្តទេ។"],["Don't you like coffee? – [Yes, I do]! (ចូលចិត្ត)","អ្នកមិនចូលចិត្តកាហ្វេទេឬ? – ទេ ខ្ញុំចូលចិត្ត!"],["Isn't she your sister? – [Yes, she is].","នាងមិនមែនជាប្អូនស្រីរបស់អ្នកទេឬ? – មែន នាងជាប្អូនស្រីខ្ញុំ។"],["Haven't you finished? – [No, not yet].","អ្នកមិនទាន់ធ្វើរួចទេឬ? – បាទ មិនទាន់រួចទេ។"]],
  q:[["Didn't you go to school? (You stayed home.) – ___",["Yes, I did.","No, I didn't.","Yes, I didn't."],1],["Aren't you hungry? (You are hungry.) – ___",["Yes, I am.","No, I'm not.","Yes, I'm not."],0],["Can't you swim? (You can't swim.) – ___",["Yes, I can.","No, I can't.","Yes, I can't."],1],["Isn't he a doctor? (He is a doctor.) – ___",["No, he is.","Yes, he is.","No, he isn't."],1],["Don't you have a car? (You don't have one.) – ___",["No, I don't.","Yes, I don't.","Yes, I do."],0]]}
);
{ const order = ["A1","A2","B1","B2","C1","C2"]; XC.grammar.sort((a, b) => order.indexOf(a.lv) - order.indexOf(b.lv)); }

XC.homework = {
  A1:"សរសេរ ៥ ប្រយោគអំពីខ្លួនអ្នក និងគ្រួសារ ដោយប្រើ am / is / are និង Present Simple។",
  A2:"សរសេរ ៥ ប្រយោគប្រៀបធៀបទីក្រុងពីរ (ឧ. Phnom Penh is bigger than Kep.) និង ៣ ប្រយោគ Present Continuous អំពីអ្វីដែលកំពុងកើតឡើងជុំវិញអ្នក។",
  B1:"សរសេរកថាខណ្ឌខ្លី (៨០ ពាក្យ) អំពីបទពិសោធន៍ដែលអ្នកធ្លាប់មាន ដោយប្រើ Present Perfect និង First Conditional។",
  B2:"សរសេរ ៦ ប្រយោគ Passive អំពីប្រទេសកម្ពុជា (ឧ. Rice is grown in…) និង ៣ ប្រយោគ Second Conditional។",
  C1:"សរសេរ (១២០ ពាក្យ) អំពីការសម្រេចចិត្តសំខាន់មួយក្នុងជីវិត ដោយប្រើ Third Conditional យ៉ាងតិច ៣ ដង និង relative clauses។",
  C2:"សរសេរអត្ថបទផ្លូវការ (១៥០ ពាក្យ) ផ្ដល់អនុសាសន៍ដល់សាលារបស់អ្នក ដោយប្រើ Subjunctive និង Inversion។"
};

/* ---------- Reading A1–C2 ---------- */
XC.reading = [
 {lv:"A1",title:"Dara's Day",focus:"Present Simple",lines:[
  ["Dara [is] fifteen years old.","ដារ៉ាអាយុដប់ប្រាំឆ្នាំ។"],
  ["He [lives] with his family in Phnom Penh.","គាត់រស់នៅជាមួយគ្រួសាររបស់គាត់នៅភ្នំពេញ។"],
  ["Every morning, he [wakes] up at six o'clock.","រៀងរាល់ព្រឹក គាត់ភ្ញាក់ពីគេងនៅម៉ោងប្រាំមួយ។"],
  ["He [eats] rice and pork for breakfast.","គាត់ញ៉ាំបាយសាច់ជ្រូកជាអាហារពេលព្រឹក។"],
  ["Then he [rides] his bike to school.","បន្ទាប់មក គាត់ជិះកង់ទៅសាលា។"],
  ["His favorite subject [is] English.","មុខវិជ្ជាដែលគាត់ចូលចិត្តបំផុតគឺភាសាអង់គ្លេស។"],
  ["After school, he [plays] football with his friends.","ក្រោយចេញពីសាលា គាត់លេងបាល់ទាត់ជាមួយមិត្តភក្តិ។"],
  ["In the evening, he [does] his homework and [goes] to bed at ten.","នៅពេលល្ងាច គាត់ធ្វើកិច្ចការផ្ទះ ហើយចូលគេងនៅម៉ោងដប់។"]],
  q:[["How old is Dara?",["Ten","Fifteen","Twenty"],1],["How does he go to school?",["By bus","On foot","By bike"],2],["What is his favorite subject?",["Math","English","Khmer"],1]],
  write:"សរសេរ ៥ ប្រយោគអំពីថ្ងៃមួយរបស់អ្នក។ ឧ. I wake up at …"},
 {lv:"A2",title:"A Weekend in Kep",focus:"Past Simple · Comparatives",lines:[
  ["Last weekend, Srey Pov [went] to Kep with her family.","កាលពីចុងសប្ដាហ៍មុន ស្រីពៅបានទៅខេត្តកែបជាមួយគ្រួសាររបស់នាង។"],
  ["They [left] Phnom Penh early in the morning by car.","ពួកគេចាកចេញពីភ្នំពេញតាំងពីព្រឹកព្រលឹមដោយឡាន។"],
  ["The trip [took] about three hours.","ការធ្វើដំណើរចំណាយពេលប្រហែលបីម៉ោង។"],
  ["In Kep, they [ate] fresh crab with Kampot pepper.","នៅកែប ពួកគេបានញ៉ាំក្ដាមស្រស់ជាមួយម្រេចកំពត។"],
  ["In the afternoon, they [swam] in the sea and [took] many photos.","នៅពេលរសៀល ពួកគេបានហែលទឹកសមុទ្រ និងថតរូបជាច្រើន។"],
  ["Srey Pov thinks Kep is [quieter] and [cleaner than] Phnom Penh.","ស្រីពៅគិតថាកែបស្ងាត់ និងស្អាតជាងភ្នំពេញ។"]],
  q:[["How did they travel to Kep?",["By bus","By car","By boat"],1],["What did they eat?",["Fish soup","Crab with pepper","Noodles"],1],["How long was the trip?",["One hour","Three hours","Six hours"],1]],
  write:"សរសេរអំពីដំណើរកម្សាន្តចុងក្រោយរបស់អ្នក ដោយប្រើ Past Simple (៦ ប្រយោគ)។"},
 {lv:"B1",title:"Learning to Code",focus:"Present Perfect · First Conditional",lines:[
  ["Vuthy [has always been] interested in computers.","វុទ្ធីតែងតែចាប់អារម្មណ៍លើកុំព្យូទ័រ។"],
  ["Last year, he [decided to learn] programming online.","កាលពីឆ្នាំមុន គាត់បានសម្រេចចិត្តរៀនសរសេរកម្មវិធីតាមអនឡាញ។"],
  ["At first, it [was] difficult [because] most lessons [were] in English.","ដំបូងឡើយ វាពិបាក ព្រោះមេរៀនភាគច្រើនជាភាសាអង់គ្លេស។"],
  ["[However], he [practiced] for one hour every day, and his English [improved] too.","ទោះយ៉ាងណា គាត់បានហាត់រៀងរាល់ថ្ងៃមួយម៉ោង ហើយភាសាអង់គ្លេសរបស់គាត់ក៏ប្រសើរឡើងដែរ។"],
  ["He [has] now [built] three small websites for local shops.","ឥឡូវនេះ គាត់បានបង្កើតវេបសាយតូចៗចំនួនបីសម្រាប់ហាងក្នុងតំបន់។"],
  ["[If he keeps] learning, he [will become] a professional developer.","បើគាត់បន្តរៀន គាត់នឹងក្លាយជាអ្នកអភិវឌ្ឍន៍អាជីព។"]],
  q:[["Why was learning difficult at first?",["Lessons were in English","He had no computer","He was busy"],0],["How often did he practice?",["Once a week","Every day","Every month"],1],["How many websites has he built?",["One","Two","Three"],2]],
  write:"តើអ្នកចង់រៀនជំនាញអ្វី ហើយហេតុអ្វី? សរសេរ ៨០ ពាក្យ។"},
 {lv:"B2",title:"The Mekong River",focus:"Passive Voice · Relative clauses",lines:[
  ["The Mekong is one of [the longest] rivers in Asia, flowing through six countries.","ទន្លេមេគង្គជាទន្លេវែងជាងគេមួយនៅអាស៊ី ដែលហូរកាត់ប្រទេសចំនួនប្រាំមួយ។"],
  ["Millions of people [depend on] it for food, transport and farming.","មនុស្សរាប់លាននាក់ពឹងផ្អែកលើវាសម្រាប់ចំណីអាហារ ការដឹកជញ្ជូន និងកសិកម្ម។"],
  ["In Cambodia, it [is connected] to the Tonle Sap, a lake [whose size] changes dramatically every year.","នៅកម្ពុជា វាត្រូវបានភ្ជាប់ជាមួយទន្លេសាប ជាបឹងដែលទំហំប្រែប្រួលយ៉ាងខ្លាំងរៀងរាល់ឆ្នាំ។"],
  ["During the rainy season, water [flows] backwards from the Mekong into the lake.","ក្នុងរដូវវស្សា ទឹកហូរបញ្ច្រាសពីទន្លេមេគង្គចូលទៅក្នុងបឹង។"],
  ["However, dams and climate change [are threatening] the river's fish population.","ទោះយ៉ាងណា ទំនប់វារីអគ្គិសនី និងការប្រែប្រួលអាកាសធាតុកំពុងគំរាមកំហែងដល់ចំនួនត្រីក្នុងទន្លេ។"],
  ["Many experts believe that the river [must be protected] for future generations.","អ្នកជំនាញជាច្រើនជឿថា ទន្លេនេះត្រូវតែការពារសម្រាប់មនុស្សជំនាន់ក្រោយ។"]],
  q:[["How many countries does the Mekong flow through?",["Four","Six","Eight"],1],["What happens in the rainy season?",["The lake dries up","Water flows backwards into the lake","The river stops"],1],["What is threatening the fish?",["Tourism","Dams and climate change","Boats"],1]],
  write:"សរសេរ ១២០ ពាក្យ៖ តើយើងអាចការពារបរិស្ថាននៅកម្ពុជាដោយរបៀបណា? ប្រើ Passive Voice ២ ដង។"},
 {lv:"C1",title:"The Rise of Remote Work",focus:"Conditionals without if · Hedging",lines:[
  ["Over the past few years, remote work [has transformed] the way many people earn a living.","ក្នុងរយៈពេលប៉ុន្មានឆ្នាំចុងក្រោយនេះ ការងារពីចម្ងាយបានផ្លាស់ប្ដូររបៀបដែលមនុស្សជាច្រើនរកប្រាក់ចំណូល។"],
  ["[Had the internet not become] so fast and affordable, this shift [would never have been] possible.","បើអ៊ីនធឺណិតមិនបានក្លាយជាលឿន និងមានតម្លៃសមរម្យបែបនេះទេ ការផ្លាស់ប្ដូរនេះប្រហែលជាមិនអាចកើតឡើងបានឡើយ។"],
  ["Young Cambodians, [who often speak] English well, can now work for companies abroad without leaving home.","យុវជនកម្ពុជា ដែលជារឿយៗនិយាយភាសាអង់គ្លេសបានល្អ ឥឡូវនេះអាចធ្វើការឲ្យក្រុមហ៊ុនបរទេសដោយមិនចាំបាច់ចាកចេញពីផ្ទះ។"],
  ["[Nevertheless], working alone can lead to isolation and make it harder to separate work from personal life.","ទោះជាយ៉ាងណាក៏ដោយ ការធ្វើការតែម្នាក់ឯងអាចនាំឲ្យឯកោ និងធ្វើឲ្យពិបាកបំបែកការងារពីជីវិតផ្ទាល់ខ្លួន។"],
  ["Successful remote workers [tend to set] clear routines and communicate proactively with their teams.","អ្នកធ្វើការពីចម្ងាយដែលទទួលបានជោគជ័យ ច្រើនតែកំណត់ទម្លាប់ច្បាស់លាស់ និងទំនាក់ទំនងយ៉ាងសកម្មជាមួយក្រុមរបស់ពួកគេ។"]],
  q:[["What made remote work possible?",["Cheaper flights","Fast, affordable internet","New laws"],1],["What is one disadvantage mentioned?",["Low salary","Isolation","Bad weather"],1],["What do successful remote workers do?",["Work only at night","Set clear routines","Avoid their team"],1]],
  write:"សរសេរអត្ថបទ ១៥០ ពាក្យ៖ គុណសម្បត្តិ និងគុណវិបត្តិនៃការងារពីចម្ងាយ។"},
 {lv:"C2",title:"Language in the Age of AI",focus:"Inversion · Subjunctive · Nominalisation",lines:[
  ["[The advent] of artificial intelligence has prompted a profound reassessment of why we learn languages at all.","ការមកដល់នៃបញ្ញាសិប្បនិម្មិតបានជំរុញឲ្យមានការវាយតម្លៃឡើងវិញយ៉ាងស៊ីជម្រៅថា ហេតុអ្វីយើងត្រូវរៀនភាសា។"],
  ["Instant translation tools, while undeniably convenient, [seldom capture] the subtleties of humour, irony or cultural nuance.","ឧបករណ៍បកប្រែភ្លាមៗ ទោះបីងាយស្រួលពិតមែន ក៏កម្រចាប់បាននូវភាពល្អិតល្អន់នៃការលេងសើច ការបញ្ឆិតបញ្ឆៀង ឬអត្ថន័យវប្បធម៌។"],
  ["[Not only does] learning a language [sharpen] cognitive abilities, but it also fosters empathy towards other cultures.","ការរៀនភាសាមិនត្រឹមតែធ្វើឲ្យសមត្ថភាពគិតកាន់តែមុតស្រួចប៉ុណ្ណោះទេ ថែមទាំងបណ្ដុះការយល់ចិត្តចំពោះវប្បធម៌ដទៃទៀតផង។"],
  ["Critics argue that [it is essential that] education systems [adapt] rather than abandon language teaching.","អ្នករិះគន់អះអាងថា វាចាំបាច់ណាស់ដែលប្រព័ន្ធអប់រំត្រូវសម្របខ្លួន ជាជាងបោះបង់ការបង្រៀនភាសា។"],
  ["Ultimately, technology may augment human communication, but it [is unlikely to supersede] the connection built through a shared language.","ទីបំផុត បច្ចេកវិទ្យាអាចពង្រីកការប្រាស្រ័យទាក់ទងរបស់មនុស្ស ប៉ុន្តែទំនងជាមិនអាចជំនួសទំនាក់ទំនងដែលកសាងតាមរយៈភាសារួមគ្នាបានទេ។"]],
  q:[["What do translation tools often miss?",["Grammar","Cultural nuance","Spelling"],1],["Besides cognition, what does language learning foster?",["Empathy","Wealth","Speed"],0],["What is the author's conclusion?",["AI will replace languages","A shared language remains valuable","Schools should stop teaching languages"],1]],
  write:"សរសេរអត្ថបទ ២០០ ពាក្យ៖ តើ AI គួរប្ដូររបៀបរៀនភាសានៅកម្ពុជាដែរឬទេ?"}
];

/* ---------- Conversations ---------- */
/* ---------- Reading & Writing expansion (8 stories per level) ---------- */
XC.reading.push(
 {"lv": "A1", "title": "My Family", "focus": "have / has · Verb to be", "lines": [["My name [is] Lina.", "ខ្ញុំឈ្មោះលីណា។"], ["I [have] a big family.", "ខ្ញុំមានគ្រួសារធំមួយ។"], ["My father [is] a farmer and my mother [is] a teacher.", "ឪពុកខ្ញុំជាកសិករ ហើយម្ដាយខ្ញុំជាគ្រូបង្រៀន។"], ["I [have] two brothers and one sister.", "ខ្ញុំមានបងប្អូនប្រុសពីរនាក់ និងបងស្រីម្នាក់។"], ["My sister [has] long black hair.", "បងស្រីខ្ញុំមានសក់ខ្មៅវែង។"], ["My brothers [are] students. They [don't have] jobs.", "បងប្អូនប្រុសខ្ញុំជាសិស្ស។ ពួកគេមិនទាន់មានការងារទេ។"], ["We [are] very happy together.", "យើងសប្បាយចិត្តណាស់ពេលនៅជាមួយគ្នា។"]], "q": [["What is Lina's mother?", ["a farmer", "a teacher", "a doctor"], 1], ["How many brothers does Lina have?", ["one", "two", "three"], 1], ["Who has long black hair?", ["her mother", "her brother", "her sister"], 2]], "write": "សរសេរ ៥ ប្រយោគអំពីគ្រួសាររបស់អ្នក ដោយប្រើ have / has និង am / is / are។"},
 {"lv": "A1", "title": "My House", "focus": "There is / There are · Prepositions of place", "lines": [["I live in a small house [in] Kampong Cham.", "ខ្ញុំរស់នៅក្នុងផ្ទះតូចមួយនៅកំពង់ចាម។"], ["[There are] three rooms in my house.", "ផ្ទះខ្ញុំមានបន្ទប់បី។"], ["[There is] a big mango tree [in front of] the house.", "មានដើមស្វាយធំមួយនៅមុខផ្ទះ។"], ["My bed [is next to] the window.", "គ្រែរបស់ខ្ញុំនៅជាប់បង្អួច។"], ["[There is] a TV [in] the living room.", "មានទូរទស្សន៍មួយនៅក្នុងបន្ទប់ទទួលភ្ញៀវ។"], ["[There isn't] a garage, so we park our motorbike [under] the house.", "គ្មានយានដ្ឋានទេ ដូច្នេះយើងចតម៉ូតូនៅក្រោមផ្ទះ។"], ["I love my house.", "ខ្ញុំស្រឡាញ់ផ្ទះរបស់ខ្ញុំ។"]], "q": [["Where is the mango tree?", ["behind the house", "in front of the house", "in the kitchen"], 1], ["How many rooms are there?", ["two", "three", "four"], 1], ["Where do they park the motorbike?", ["in a garage", "on the street", "under the house"], 2]], "write": "សរសេរ ៥ ប្រយោគពិពណ៌នាផ្ទះរបស់អ្នក ដោយប្រើ There is / There are។"},
 {"lv": "A1", "title": "My School", "focus": "Present Simple · can / can't", "lines": [["My school [is] near the market.", "សាលារបស់ខ្ញុំនៅជិតផ្សារ។"], ["Classes [start] at seven o'clock.", "ថ្នាក់រៀនចាប់ផ្ដើមម៉ោងប្រាំពីរ។"], ["We [study] Khmer, maths, science and English.", "យើងរៀនភាសាខ្មែរ គណិតវិទ្យា វិទ្យាសាស្ត្រ និងភាសាអង់គ្លេស។"], ["My teacher [speaks] English very well.", "គ្រូរបស់ខ្ញុំនិយាយភាសាអង់គ្លេសបានល្អណាស់។"], ["We [can use] the computers in the library.", "យើងអាចប្រើកុំព្យូទ័រនៅក្នុងបណ្ណាល័យ។"], ["But we [can't use] our phones in class.", "ប៉ុន្តែយើងមិនអាចប្រើទូរស័ព្ទក្នុងថ្នាក់បានទេ។"], ["I [like] my school very much.", "ខ្ញុំចូលចិត្តសាលារបស់ខ្ញុំខ្លាំងណាស់។"]], "q": [["When do classes start?", ["at 6:00", "at 7:00", "at 8:00"], 1], ["Where can students use computers?", ["in the library", "in the classroom", "at the market"], 0], ["What can't they use in class?", ["books", "computers", "phones"], 2]], "write": "សរសេរ ៥ ប្រយោគអំពីសាលារបស់អ្នក។ តើអ្នកអាចធ្វើអ្វីបាននៅសាលា?"},
 {"lv": "A1", "title": "At the Market", "focus": "would like · How much…? · this / these", "lines": [["Sokha [goes] to the market every Sunday.", "សុខាទៅផ្សាររៀងរាល់ថ្ងៃអាទិត្យ។"], ["\"[I'd like] a kilo of mangoes, please.\"", "«ខ្ញុំចង់បានស្វាយមួយគីឡូ។»"], ["\"[How much are these] mangoes?\"", "«ស្វាយទាំងនេះថ្លៃប៉ុន្មាន?»"], ["\"They [are] five thousand riel a kilo.\"", "«វាតម្លៃប្រាំពាន់រៀលមួយគីឡូ។»"], ["\"[How much is this] fish?\"", "«ត្រីនេះថ្លៃប៉ុន្មាន?»"], ["\"It [is] ten thousand riel.\"", "«វាតម្លៃមួយម៉ឺនរៀល។»"], ["Sokha [buys] the mangoes and the fish and [goes] home.", "សុខាទិញស្វាយ និងត្រី រួចត្រឡប់ទៅផ្ទះវិញ។"]], "q": [["When does Sokha go to the market?", ["every Saturday", "every Sunday", "every day"], 1], ["How much are the mangoes?", ["5,000 riel a kilo", "10,000 riel a kilo", "1,000 riel a kilo"], 0], ["How much is the fish?", ["5,000 riel", "8,000 riel", "10,000 riel"], 2]], "write": "សរសេរការសន្ទនាខ្លីមួយ (៦ ប្រយោគ) ពេលអ្នកទិញអីវ៉ាន់នៅផ្សារ។"},
 {"lv": "A1", "title": "My Pet Cat", "focus": "Present Simple (he / she / it) · like + V-ing", "lines": [["I [have] a cat. Her name [is] Mimi.", "ខ្ញុំមានឆ្មាមួយ។ វាឈ្មោះមីមី។"], ["She [is] white and grey.", "វាមានពណ៌ស និងប្រផេះ។"], ["Mimi [sleeps] a lot during the day.", "មីមីគេងច្រើនពេលថ្ងៃ។"], ["She [likes playing] with a small ball.", "វាចូលចិត្តលេងជាមួយបាល់តូចមួយ។"], ["She [doesn't like] water.", "វាមិនចូលចិត្តទឹកទេ។"], ["Every evening, she [waits] for me at the door.", "រៀងរាល់ល្ងាច វារង់ចាំខ្ញុំនៅមាត់ទ្វារ។"], ["Mimi [is] my best friend.", "មីមីជាមិត្តល្អបំផុតរបស់ខ្ញុំ។"]], "q": [["What colour is Mimi?", ["black", "white and grey", "orange"], 1], ["What does Mimi like playing with?", ["a ball", "water", "a dog"], 0], ["What does Mimi do every evening?", ["She sleeps.", "She swims.", "She waits at the door."], 2]], "write": "សរសេរ ៥ ប្រយោគអំពីសត្វចិញ្ចឹម ឬសត្វដែលអ្នកចូលចិត្ត។"},
 {"lv": "A1", "title": "Food I Like", "focus": "like / love / hate · don't / doesn't", "lines": [["I [love] Khmer food.", "ខ្ញុំស្រឡាញ់ម្ហូបខ្មែរ។"], ["My favourite dish [is] fish amok.", "ម្ហូបដែលខ្ញុំចូលចិត្តបំផុតគឺអាម៉ុកត្រី។"], ["I [like eating] bai sach chrouk for breakfast.", "ខ្ញុំចូលចិត្តញ៉ាំបាយសាច់ជ្រូកជាអាហារពេលព្រឹក។"], ["My brother [doesn't like] vegetables.", "បងប្រុសខ្ញុំមិនចូលចិត្តបន្លែទេ។"], ["My mother [loves cooking] for the family.", "ម្ដាយខ្ញុំស្រឡាញ់ការធ្វើម្ហូបឲ្យគ្រួសារ។"], ["I [don't drink] coffee, but I [drink] a lot of sugarcane juice.", "ខ្ញុំមិនផឹកកាហ្វេទេ ប៉ុន្តែខ្ញុំផឹកទឹកអំពៅច្រើន។"]], "q": [["What is the writer's favourite dish?", ["fish amok", "noodle soup", "fried rice"], 0], ["Who doesn't like vegetables?", ["the writer", "the mother", "the brother"], 2], ["What does the writer drink a lot?", ["coffee", "tea", "sugarcane juice"], 2]], "write": "សរសេរ ៥ ប្រយោគអំពីម្ហូបដែលអ្នកចូលចិត្ត និងមិនចូលចិត្ត។"},
 {"lv": "A1", "title": "My Weekend", "focus": "Present Simple · Adverbs of frequency", "lines": [["On Saturdays, I [always get up] late.", "នៅថ្ងៃសៅរ៍ ខ្ញុំតែងតែក្រោកយឺត។"], ["I [usually help] my mother clean the house.", "ខ្ញុំជាធម្មតាជួយម្ដាយសម្អាតផ្ទះ។"], ["In the afternoon, I [sometimes go] to the river with my friends.", "នៅពេលរសៀល ខ្ញុំជួនកាលទៅមាត់ទន្លេជាមួយមិត្តភក្ដិ។"], ["On Sundays, my family [often visits] my grandparents.", "នៅថ្ងៃអាទិត្យ គ្រួសារខ្ញុំច្រើនទៅលេងជីដូនជីតា។"], ["My grandmother [always cooks] delicious food.", "ជីដូនខ្ញុំតែងតែធ្វើម្ហូបឆ្ងាញ់ៗ។"], ["I [never do] my homework on Sunday night. I do it on Saturday!", "ខ្ញុំមិនដែលធ្វើកិច្ចការផ្ទះនៅយប់ថ្ងៃអាទិត្យទេ។ ខ្ញុំធ្វើវានៅថ្ងៃសៅរ៍!"]], "q": [["What does the writer always do on Saturdays?", ["gets up late", "goes to school", "cooks"], 0], ["Who does the family visit on Sundays?", ["friends", "teachers", "grandparents"], 2], ["When does the writer do homework?", ["Sunday night", "Saturday", "Monday morning"], 1]], "write": "សរសេរ ៦ ប្រយោគអំពីចុងសប្ដាហ៍របស់អ្នក ដោយប្រើ always, usually, sometimes, never។"},
 {"lv": "A2", "title": "A Trip to Angkor Wat", "focus": "Past Simple (regular & irregular)", "lines": [["Last December, my class [went] to Siem Reap.", "កាលពីខែធ្នូ ថ្នាក់ខ្ញុំបានទៅសៀមរាប។"], ["We [left] at five in the morning and [arrived] at noon.", "យើងបានចេញម៉ោងប្រាំព្រឹក ហើយមកដល់ថ្ងៃត្រង់។"], ["The next day, we [woke] up at 4 a.m. to see the sunrise at Angkor Wat.", "ថ្ងៃបន្ទាប់ យើងបានក្រោកម៉ោង ៤ ព្រឹកដើម្បីមើលថ្ងៃរះនៅអង្គរវត្ត។"], ["The sky [turned] orange and pink. It [was] amazing.", "មេឃបានប្រែជាពណ៌ទឹកក្រូច និងផ្កាឈូក។ វាអស្ចារ្យណាស់។"], ["Our guide [told] us about the history of the temple.", "អ្នកនាំភ្ញៀវបានប្រាប់យើងអំពីប្រវត្តិប្រាសាទ។"], ["We [took] hundreds of photos and [bought] some souvenirs.", "យើងបានថតរូបរាប់រយសន្លឹក ហើយទិញវត្ថុអនុស្សាវរីយ៍ខ្លះ។"], ["I [didn't want] to go home!", "ខ្ញុំមិនចង់ត្រឡប់មកផ្ទះវិញទេ!"]], "q": [["When did the class go to Siem Reap?", ["last June", "last December", "last April"], 1], ["Why did they wake up at 4 a.m.?", ["to catch a bus", "to see the sunrise", "to eat breakfast"], 1], ["What did the guide do?", ["told them about history", "took photos", "sold souvenirs"], 0]], "write": "សរសេរ ៦ ប្រយោគអំពីកន្លែងប្រវត្តិសាស្ត្រដែលអ្នកធ្លាប់ទៅ ដោយប្រើ Past Simple។"},
 {"lv": "A2", "title": "Khmer New Year", "focus": "Past Simple · Past Continuous", "lines": [["Last April, we [celebrated] Khmer New Year in my village.", "កាលពីខែមេសា យើងបានប្រារព្ធបុណ្យចូលឆ្នាំខ្មែរនៅភូមិខ្ញុំ។"], ["On the first day, we [went] to the pagoda and [gave] food to the monks.", "នៅថ្ងៃដំបូង យើងបានទៅវត្ត ហើយប្រគេនចង្ហាន់ដល់ព្រះសង្ឃ។"], ["In the afternoon, young people [were playing] traditional games.", "នៅពេលរសៀល យុវជនកំពុងលេងល្បែងប្រជាប្រិយ។"], ["While we [were playing] bos chhoung, it [started] to rain.", "ពេលយើងកំពុងលេងបោះឈូង មេឃក៏ចាប់ផ្ដើមភ្លៀង។"], ["Nobody [stopped]. Everyone [was laughing] and [throwing] water!", "គ្មាននរណាឈប់ទេ។ គ្រប់គ្នាកំពុងសើច និងបាចទឹក!"], ["In the evening, we [ate] together and [danced] until midnight.", "នៅពេលល្ងាច យើងញ៉ាំជាមួយគ្នា ហើយរាំរហូតដល់អធ្រាត្រ។"], ["It [was] the best holiday of the year.", "វាជាថ្ងៃឈប់សម្រាកល្អបំផុតប្រចាំឆ្នាំ។"]], "q": [["What did they do at the pagoda?", ["played games", "gave food to monks", "danced"], 1], ["What happened while they were playing bos chhoung?", ["It started to rain.", "They went home.", "The monks came."], 0], ["Until when did they dance?", ["10 p.m.", "midnight", "morning"], 1]], "write": "សរសេរ ៧ ប្រយោគអំពីបុណ្យចូលឆ្នាំខ្មែរចុងក្រោយរបស់អ្នក។"},
 {"lv": "A2", "title": "My Hometown", "focus": "Comparatives", "lines": [["I [come] from Kampot, but now I live in Phnom Penh.", "ខ្ញុំមកពីកំពត ប៉ុន្តែឥឡូវខ្ញុំរស់នៅភ្នំពេញ។"], ["Phnom Penh is [bigger than] Kampot.", "ភ្នំពេញធំជាងកំពត។"], ["It is also [busier] and [noisier].", "វាក៏មមាញឹក និងអ៊ូអរជាងដែរ។"], ["Life in Kampot is [slower] and [more relaxing].", "ជីវិតនៅកំពតយឺត និងស្រួលចិត្តជាង។"], ["The air in Kampot is [cleaner than] the air in the city.", "ខ្យល់នៅកំពតស្អាតជាងខ្យល់នៅទីក្រុង។"], ["However, Phnom Penh has [more] jobs and [better] universities.", "ទោះយ៉ាងណា ភ្នំពេញមានការងារច្រើនជាង និងសាកលវិទ្យាល័យល្អជាង។"], ["Food in Kampot is [cheaper], and the pepper is the best!", "ម្ហូបនៅកំពតថោកជាង ហើយម្រេចល្អជាងគេ!"]], "q": [["Which city is busier?", ["Kampot", "Phnom Penh", "They are the same."], 1], ["Where is the air cleaner?", ["in Kampot", "in Phnom Penh", "in both"], 0], ["What does Phnom Penh have more of?", ["pepper", "quiet places", "jobs"], 2]], "write": "សរសេរ ៦ ប្រយោគប្រៀបធៀបស្រុកកំណើតរបស់អ្នក ជាមួយទីក្រុងមួយទៀត។"},
 {"lv": "A2", "title": "A Busy Morning", "focus": "Present Continuous", "lines": [["It's seven o'clock, and everyone at home [is getting] ready.", "ម៉ោងប្រាំពីរហើយ ហើយគ្រប់គ្នានៅផ្ទះកំពុងរៀបចំខ្លួន។"], ["My mother [is cooking] rice soup in the kitchen.", "ម្ដាយខ្ញុំកំពុងស្ងោរបបរក្នុងផ្ទះបាយ។"], ["My father [is reading] the news on his phone.", "ឪពុកខ្ញុំកំពុងអានព័ត៌មាននៅលើទូរស័ព្ទ។"], ["My little brother [isn't wearing] his uniform yet. He [is still sleeping]!", "ប្អូនប្រុសខ្ញុំមិនទាន់ពាក់ឯកសណ្ឋានទេ។ គាត់នៅតែកំពុងគេង!"], ["Outside, it [is raining] a little.", "នៅខាងក្រៅ មេឃកំពុងភ្លៀងបន្តិច។"], ["I [am looking] for my umbrella. Where is it?", "ខ្ញុំកំពុងរកឆ័ត្ររបស់ខ្ញុំ។ តើវានៅឯណា?"]], "q": [["What is the mother doing?", ["reading", "cooking", "sleeping"], 1], ["Who is still sleeping?", ["the father", "the writer", "the little brother"], 2], ["What is the writer looking for?", ["an umbrella", "a uniform", "a phone"], 0]], "write": "សរសេរ ៦ ប្រយោគពិពណ៌នាអ្វីដែលកំពុងកើតឡើងនៅជុំវិញអ្នកឥឡូវនេះ។"},
 {"lv": "A2", "title": "Plans for the Holidays", "focus": "be going to · Present Continuous for future", "lines": [["The school holidays [are starting] next week.", "ថ្ងៃឈប់សម្រាកសាលានឹងចាប់ផ្ដើមសប្ដាហ៍ក្រោយ។"], ["I [am going to visit] my aunt in Battambang.", "ខ្ញុំនឹងទៅលេងមីងរបស់ខ្ញុំនៅបាត់ដំបង។"], ["We [are taking] the bus on Monday morning.", "យើងនឹងជិះឡានក្រុងនៅព្រឹកថ្ងៃច័ន្ទ។"], ["My cousin and I [are going to ride] the bamboo train.", "ខ្ញុំ និងបងប្អូនជីដូនមួយនឹងជិះរថភ្លើងឫស្សី។"], ["I [am not going to study] much, but I [am going to read] two English books.", "ខ្ញុំនឹងមិនរៀនច្រើនទេ ប៉ុន្តែខ្ញុំនឹងអានសៀវភៅអង់គ្លេសពីរក្បាល។"], ["What [are] you [going to do] this holiday?", "តើអ្នកនឹងធ្វើអ្វីក្នុងថ្ងៃឈប់សម្រាកនេះ?"]], "q": [["Where is the writer going?", ["Kampot", "Battambang", "Siem Reap"], 1], ["How is the writer travelling?", ["by bus", "by plane", "by train"], 0], ["What is the writer going to read?", ["two English books", "one Khmer book", "nothing"], 0]], "write": "សរសេរ ៦ ប្រយោគអំពីផែនការរបស់អ្នកសម្រាប់ថ្ងៃឈប់សម្រាកខាងមុខ។"},
 {"lv": "A2", "title": "The Best Restaurant in Town", "focus": "Superlatives", "lines": [["Mr Rith's noodle shop is [the most popular] restaurant in our town.", "ហាងគុយទាវរបស់លោករិទ្ធិ ជាភោជនីយដ្ឋានពេញនិយមបំផុតនៅក្នុងក្រុងរបស់យើង។"], ["It isn't [the biggest], but it is [the busiest].", "វាមិនមែនធំជាងគេទេ ប៉ុន្តែវាមមាញឹកជាងគេ។"], ["People say his noodles are [the best] in the province.", "មនុស្សនិយាយថាគុយទាវរបស់គាត់ឆ្ងាញ់ជាងគេក្នុងខេត្ត។"], ["It is also [the cheapest] – only six thousand riel a bowl.", "វាក៏ថោកជាងគេដែរ – តែប្រាំមួយពាន់រៀលមួយចាន។"], ["[The best] time to go is early in the morning.", "ពេលល្អបំផុតដើម្បីទៅគឺព្រឹកព្រលឹម។"], ["By nine o'clock, the noodles are usually gone!", "ដល់ម៉ោងប្រាំបួន គុយទាវជាធម្មតាលក់អស់ហើយ!"]], "q": [["What is special about Mr Rith's shop?", ["It is the biggest.", "It is the most popular.", "It is the newest."], 1], ["How much is a bowl?", ["4,000 riel", "6,000 riel", "10,000 riel"], 1], ["When is the best time to go?", ["early morning", "lunchtime", "evening"], 0]], "write": "សរសេរ ៦ ប្រយោគអំពីកន្លែងដែលល្អបំផុតនៅក្នុងទីក្រុង ឬភូមិរបស់អ្នក។"},
 {"lv": "A2", "title": "A Healthy Life", "focus": "should / must · have to · too / enough", "lines": [["Many students [don't sleep enough].", "សិស្សជាច្រើនគេងមិនគ្រប់គ្រាន់។"], ["Doctors say teenagers [should sleep] eight to ten hours a night.", "វេជ្ជបណ្ឌិតនិយាយថា ក្មេងជំទង់គួរគេងពីប្រាំបី ទៅដប់ម៉ោងក្នុងមួយយប់។"], ["You [shouldn't drink] [too much] sugary tea or soft drinks.", "អ្នកមិនគួរផឹកតែផ្អែម ឬភេសជ្ជៈកាបូនិចច្រើនពេកទេ។"], ["You [should eat] more fruit and vegetables.", "អ្នកគួរញ៉ាំផ្លែឈើ និងបន្លែឲ្យបានច្រើនជាងនេះ។"], ["When you ride a motorbike, you [must wear] a helmet.", "ពេលជិះម៉ូតូ អ្នកត្រូវតែពាក់មួកសុវត្ថិភាព។"], ["You [don't have to] go to a gym. Walking for thirty minutes a day is [enough].", "អ្នកមិនចាំបាច់ទៅកន្លែងហាត់ប្រាណទេ។ ការដើររយៈពេលសាមសិបនាទីក្នុងមួយថ្ងៃគឺគ្រប់គ្រាន់ហើយ។"]], "q": [["How many hours should teenagers sleep?", ["6–7 hours", "8–10 hours", "12 hours"], 1], ["What must you wear on a motorbike?", ["a jacket", "a helmet", "gloves"], 1], ["Do you have to go to a gym?", ["Yes, every day.", "No, walking is enough.", "Yes, twice a week."], 1]], "write": "សរសេរដំបូន្មាន ៦ ប្រយោគសម្រាប់មិត្តដែលចង់មានសុខភាពល្អ ដោយប្រើ should / shouldn't។"},
 {"lv": "B1", "title": "My First Job", "focus": "Present Perfect · for / since", "lines": [["Chanthy [has worked] at a hotel in Siem Reap [since] last March.", "ចាន់ធីបានធ្វើការនៅសណ្ឋាគារមួយនៅសៀមរាប តាំងពីខែមីនាឆ្នាំមុន។"], ["It is her first job, and she [has learned] a lot.", "វាជាការងារដំបូងរបស់នាង ហើយនាងបានរៀនច្រើន។"], ["She [has met] tourists from more than thirty countries.", "នាងបានជួបភ្ញៀវទេសចរមកពីជាងសាមសិបប្រទេស។"], ["Her English [has improved] a lot, and she [has] even [started] learning French.", "ភាសាអង់គ្លេសរបស់នាងបានរីកចម្រើនច្រើន ហើយនាងថែមទាំងបានចាប់ផ្ដើមរៀនភាសាបារាំងទៀតផង។"], ["She [hasn't had] a holiday [for] six months because the hotel is always busy.", "នាងមិនបានឈប់សម្រាកអស់រយៈពេលប្រាំមួយខែហើយ ព្រោះសណ្ឋាគារតែងតែមមាញឹក។"], ["Her manager [has] just [offered] her a promotion.", "អ្នកគ្រប់គ្រងរបស់នាងទើបតែផ្ដល់ការដំឡើងតំណែងដល់នាង។"], ["\"I [have never been] so proud of myself,\" she says.", "នាងនិយាយថា «ខ្ញុំមិនដែលមានមោទនភាពចំពោះខ្លួនឯងខ្លាំងដល់ម្ល៉េះទេ»។"]], "q": [["How long has Chanthy worked at the hotel?", ["since last March", "for ten years", "since yesterday"], 0], ["What new language has she started learning?", ["Chinese", "French", "Thai"], 1], ["What has her manager just done?", ["fired her", "offered her a promotion", "given her a holiday"], 1]], "write": "សរសេរ ៨០ ពាក្យអំពីអ្វីដែលអ្នកធ្លាប់ធ្វើ ឬរៀន ដោយប្រើ Present Perfect និង for / since។"},
 {"lv": "B1", "title": "Saving Money", "focus": "First Conditional · should", "lines": [["Many young people find it hard to save money.", "យុវជនជាច្រើនយល់ថាការសន្សំលុយគឺពិបាក។"], ["[If you write down] everything you buy, you [will see] where your money goes.", "ប្រសិនបើអ្នកកត់ត្រាអ្វីៗដែលអ្នកទិញ អ្នកនឹងឃើញថាលុយរបស់អ្នកទៅណា។"], ["[If you buy] iced coffee every day, you [will spend] over thirty dollars a month.", "ប្រសិនបើអ្នកទិញកាហ្វេទឹកកករៀងរាល់ថ្ងៃ អ្នកនឹងចាយលើសពីសាមសិបដុល្លារក្នុងមួយខែ។"], ["You [should decide] how much to save at the start of each month.", "អ្នកគួរសម្រេចចិត្តថានឹងសន្សំប៉ុន្មាននៅដើមខែនីមួយៗ។"], ["[If you don't keep] cash in your pocket, you [won't spend] it so easily.", "ប្រសិនបើអ្នកមិនទុកលុយសុទ្ធក្នុងហោប៉ៅ អ្នកនឹងមិនចាយវាងាយៗទេ។"], ["Small savings [will grow] into big ones [if you are] patient.", "ការសន្សំតិចៗនឹងក្លាយជាច្រើន ប្រសិនបើអ្នកអត់ធ្មត់។"]], "q": [["What will happen if you write down everything you buy?", ["You will spend more.", "You will see where your money goes.", "You will lose money."], 1], ["How much can daily iced coffee cost per month?", ["about $5", "over $30", "over $300"], 1], ["When should you decide how much to save?", ["at the start of the month", "at the end of the year", "never"], 0]], "write": "សរសេរ ៨០ ពាក្យ៖ តើអ្នកសន្សំលុយដោយរបៀបណា? ប្រើ First Conditional យ៉ាងតិច ២ ដង។"},
 {"lv": "B1", "title": "Village Life Used to Be Different", "focus": "used to · would", "lines": [["My grandfather often tells me about his childhood in Takeo.", "ជីតាខ្ញុំតែងប្រាប់ខ្ញុំអំពីកុមារភាពរបស់គាត់នៅតាកែវ។"], ["There [used to be] no electricity in his village.", "នៅភូមិរបស់គាត់ធ្លាប់គ្មានអគ្គិសនីទេ។"], ["People [used to go] to bed early and [get up] before sunrise.", "មនុស្សធ្លាប់ចូលគេងឆាប់ ហើយក្រោកពីគេងមុនថ្ងៃរះ។"], ["Children [didn't use to have] toys, so they [used to make] their own from wood and leaves.", "ក្មេងៗមិនធ្លាប់មានរបស់លេងទេ ដូច្នេះពួកគេធ្លាប់ធ្វើរបស់លេងខ្លួនឯងពីឈើ និងស្លឹកឈើ។"], ["Every evening, his family [would sit] together and tell stories.", "រៀងរាល់ល្ងាច គ្រួសាររបស់គាត់តែងអង្គុយជុំគ្នា ហើយនិទានរឿង។"], ["Now the village has electricity, internet and a paved road.", "ឥឡូវភូមិមានអគ្គិសនី អ៊ីនធឺណិត និងផ្លូវកៅស៊ូ។"], ["\"Life is easier now,\" he says, \"but people [used to talk] to each other more.\"", "គាត់និយាយថា «ជីវិតឥឡូវស្រួលជាងមុន ប៉ុន្តែពីមុនមនុស្សធ្លាប់និយាយគ្នាច្រើនជាង»។"]], "q": [["What didn't the village use to have?", ["water", "electricity", "rice"], 1], ["How did children get toys?", ["They bought them.", "They made them.", "They had none at all."], 1], ["What does the grandfather miss?", ["people talking more", "the dark nights", "making toys"], 0]], "write": "សរសេរ ៨០ ពាក្យអំពីអ្វីដែលអ្នកធ្លាប់ធ្វើកាលពីក្មេង ដោយប្រើ used to។"},
 {"lv": "B1", "title": "Social Media and Me", "focus": "Gerund vs Infinitive · may / might", "lines": [["I [enjoy watching] short videos, and I [love sharing] photos with friends.", "ខ្ញុំចូលចិត្តមើលវីដេអូខ្លីៗ ហើយស្រឡាញ់ការចែករំលែករូបថតជាមួយមិត្តភក្ដិ។"], ["But last month I [realised] I was spending five hours a day on my phone.", "ប៉ុន្តែកាលពីខែមុន ខ្ញុំបានដឹងថាខ្ញុំចំណាយពេលប្រាំម៉ោងក្នុងមួយថ្ងៃលើទូរស័ព្ទ។"], ["So I [decided to set] a limit of one hour a day.", "ដូច្នេះខ្ញុំបានសម្រេចចិត្តកំណត់ត្រឹមមួយម៉ោងក្នុងមួយថ្ងៃ។"], ["At first, I [kept checking] my phone without thinking.", "ដំបូងឡើយ ខ្ញុំចេះតែពិនិត្យទូរស័ព្ទដោយមិនដឹងខ្លួន។"], ["Now I [have stopped scrolling] at night, and I sleep much better.", "ឥឡូវខ្ញុំឈប់អូសមើលទូរស័ព្ទពេលយប់ ហើយខ្ញុំគេងលក់ស្រួលជាងមុនច្រើន។"], ["Some of my friends think I [might miss] important news.", "មិត្តភក្ដិខ្លះរបស់ខ្ញុំគិតថាខ្ញុំប្រហែលជាខកព័ត៌មានសំខាន់ៗ។"], ["Maybe they're right, but I [want to have] more time for real life.", "ប្រហែលជាពួកគេនិយាយត្រូវ ប៉ុន្តែខ្ញុំចង់មានពេលច្រើនជាងនេះសម្រាប់ជីវិតពិត។"]], "q": [["How many hours a day did the writer spend on the phone?", ["one", "three", "five"], 2], ["What limit did the writer set?", ["one hour a day", "two hours a day", "no phone at all"], 0], ["What has improved?", ["grades", "sleep", "English"], 1]], "write": "សរសេរ ៨០ ពាក្យ៖ គុណសម្បត្តិ និងគុណវិបត្តិនៃប្រព័ន្ធផ្សព្វផ្សាយសង្គមសម្រាប់អ្នក។"},
 {"lv": "B1", "title": "The Lost Phone", "focus": "Past Perfect · when / while", "lines": [["Last Friday, Piseth [was riding] home [when] he [noticed] something terrible.", "កាលពីថ្ងៃសុក្រ ពិសិដ្ឋកំពុងជិះម៉ូតូទៅផ្ទះ ពេលគាត់សង្កេតឃើញរឿងគួរឲ្យភ័យមួយ។"], ["His phone [had disappeared] from his pocket.", "ទូរស័ព្ទរបស់គាត់បានបាត់ពីហោប៉ៅ។"], ["He [had used] it at a café an hour earlier.", "គាត់បានប្រើវានៅហាងកាហ្វេមួយម៉ោងមុននោះ។"], ["He [rushed] back, but the waiter said nobody [had found] a phone.", "គាត់ប្រញាប់ត្រឡប់ទៅវិញ ប៉ុន្តែអ្នករត់តុថាគ្មាននរណារើសបានទូរស័ព្ទទេ។"], ["That evening, a stranger [called] his mother's number.", "នៅល្ងាចនោះ មនុស្សចម្លែកម្នាក់បានទូរស័ព្ទទៅលេខម្ដាយរបស់គាត់។"], ["She [had found] the phone on the road and [had seen] \"Mum\" in the contacts.", "នាងបានរើសទូរស័ព្ទនៅលើផ្លូវ ហើយបានឃើញ «ម៉ាក់» ក្នុងបញ្ជីទំនាក់ទំនង។"], ["Piseth [had never felt] so grateful to a stranger.", "ពិសិដ្ឋមិនដែលដឹងគុណមនុស្សចម្លែកខ្លាំងដល់ម្ល៉េះទេ។"]], "q": [["Where had Piseth used his phone earlier?", ["at school", "at a café", "at home"], 1], ["Who found the phone?", ["the waiter", "his mother", "a stranger"], 2], ["How did the stranger contact the family?", ["She called \"Mum\" in the contacts.", "She went to the police.", "She posted online."], 0]], "write": "សរសេរ ៨០ ពាក្យអំពីពេលដែលអ្នកបាត់អ្វីមួយ ដោយប្រើ Past Perfect។"},
 {"lv": "B1", "title": "Volunteering at a Library", "focus": "Present Perfect vs Past Simple · so / such", "lines": [["Two years ago, Dalin [started] volunteering at a small library in her village.", "ពីរឆ្នាំមុន ដាលីនបានចាប់ផ្ដើមធ្វើការស្ម័គ្រចិត្តនៅបណ្ណាល័យតូចមួយក្នុងភូមិរបស់នាង។"], ["At first, only a few children [came] each week.", "ដំបូងឡើយ មានក្មេងតែពីរបីនាក់ប៉ុណ្ណោះដែលមកក្នុងមួយសប្ដាហ៍។"], ["Since then, the number of readers [has grown] to over fifty.", "តាំងពីពេលនោះមក ចំនួនអ្នកអានបានកើនដល់ជាងហាសិបនាក់។"], ["She [has organised] reading games and story competitions.", "នាងបានរៀបចំល្បែងអាន និងការប្រកួតនិទានរឿង។"], ["The children are [so excited] that they sometimes arrive before the library opens.", "ក្មេងៗរំភើបខ្លាំងណាស់ រហូតពេលខ្លះពួកគេមកដល់មុនបណ្ណាល័យបើក។"], ["\"It's [such a rewarding] job,\" Dalin says.", "ដាលីននិយាយថា «វាជាការងារដែលផ្ដល់ក្ដីរីករាយខ្លាំងណាស់»។"]], "q": [["When did Dalin start volunteering?", ["two years ago", "last month", "five years ago"], 0], ["How many readers are there now?", ["a few", "about twenty", "over fifty"], 2], ["Why do children arrive early?", ["They are bored.", "They are so excited.", "Their parents tell them to."], 1]], "write": "សរសេរ ៨០ ពាក្យអំពីការងារស្ម័គ្រចិត្តដែលអ្នកចង់ធ្វើ។"},
 {"lv": "B2", "title": "How Angkor Wat Was Built", "focus": "Passive Voice · Passive with modals", "lines": [["Angkor Wat [was built] in the early 12th century by King Suryavarman II.", "អង្គរវត្តត្រូវបានសាងសង់នៅដើមសតវត្សទី ១២ ដោយព្រះបាទសូរ្យវរ្ម័នទី ២។"], ["It [was] originally [dedicated] to the Hindu god Vishnu.", "ដើមឡើយវាត្រូវបានឧទ្ទិសដល់ព្រះវិស្ណុនៃសាសនាហិណ្ឌូ។"], ["Millions of sandstone blocks [were transported] from a mountain about fifty kilometres away.", "ថ្មភក់រាប់លានដុំត្រូវបានដឹកជញ្ជូនពីភ្នំមួយដែលនៅចម្ងាយប្រហែលហាសិបគីឡូម៉ែត្រ។"], ["Historians believe the stones [were moved] along canals on bamboo rafts.", "អ្នកប្រវត្តិសាស្ត្រជឿថាថ្មទាំងនោះត្រូវបានដឹកតាមប្រឡាយ ដោយប្រើក្បូនឫស្សី។"], ["The walls [are covered] with detailed carvings of battles and dancers.", "ជញ្ជាំងត្រូវបានគ្របដណ្ដប់ដោយចម្លាក់លម្អិតអំពីសង្គ្រាម និងអប្សរា។"], ["Today, the temple [is visited] by more than two million people a year.", "សព្វថ្ងៃ ប្រាសាទនេះត្រូវបានទស្សនាដោយមនុស្សជាងពីរលាននាក់ក្នុងមួយឆ្នាំ។"], ["Experts warn that it [must be protected] from damage caused by mass tourism.", "អ្នកជំនាញព្រមានថា វាត្រូវតែត្រូវបានការពារពីការខូចខាតដែលបង្កដោយទេសចរណ៍ច្រើនពេក។"]], "q": [["Who built Angkor Wat?", ["Jayavarman VII", "Suryavarman II", "Norodom"], 1], ["How were the stones probably moved?", ["by elephants only", "along canals on rafts", "by trucks"], 1], ["What must the temple be protected from?", ["floods", "mass tourism damage", "birds"], 1]], "write": "សរសេរ ១២០ ពាក្យអំពីអគារ ឬកន្លែងល្បីមួយ ដោយប្រើ Passive Voice យ៉ាងតិច ៤ ដង។"},
 {"lv": "B2", "title": "If I Won the Lottery", "focus": "Second Conditional · wish", "lines": [["Everyone dreams about winning the lottery.", "មនុស្សគ្រប់គ្នាសុបិនចង់ឈ្នះឆ្នោត។"], ["[If I won] a million dollars, I [wouldn't stop] working.", "ប្រសិនបើខ្ញុំឈ្នះមួយលានដុល្លារ ខ្ញុំនឹងមិនឈប់ធ្វើការទេ។"], ["First, I [would build] a new house for my parents.", "ដំបូង ខ្ញុំនឹងសាងសង់ផ្ទះថ្មីមួយសម្រាប់ឪពុកម្ដាយ។"], ["Then I [would pay] for my younger siblings to go to university.", "បន្ទាប់មក ខ្ញុំនឹងបង់ថ្លៃឲ្យប្អូនៗរបស់ខ្ញុំចូលរៀនសាកលវិទ្យាល័យ។"], ["[If I had] enough money left, I [would open] a free English school in my village.", "ប្រសិនបើខ្ញុំនៅសល់លុយគ្រប់គ្រាន់ ខ្ញុំនឹងបើកសាលាភាសាអង់គ្លេសឥតគិតថ្លៃមួយនៅភូមិរបស់ខ្ញុំ។"], ["Of course, I don't buy lottery tickets, so I [wish I had] another way to get rich!", "ជាការពិតណាស់ ខ្ញុំមិនទិញឆ្នោតទេ ដូច្នេះខ្ញុំប្រាថ្នាថាខ្ញុំមានវិធីផ្សេងទៀតដើម្បីក្លាយជាអ្នកមាន!"], ["Maybe hard work is the only real lottery.", "ប្រហែលជាការខិតខំធ្វើការគឺជាឆ្នោតពិតតែមួយគត់។"]], "q": [["Would the writer stop working?", ["Yes", "No", "Only for a year"], 1], ["What would the writer build first?", ["a school", "a house for parents", "a hotel"], 1], ["Does the writer buy lottery tickets?", ["Yes, every week.", "No", "Sometimes"], 1]], "write": "សរសេរ ១២០ ពាក្យ៖ អ្នកនឹងធ្វើអ្វី ប្រសិនបើអ្នកមានលុយមួយលានដុល្លារ? ប្រើ Second Conditional។"},
 {"lv": "B2", "title": "An Interview with a Rice Farmer", "focus": "Reported Speech · Reported questions", "lines": [["Last month, I interviewed Mr Sam, a rice farmer from Prey Veng.", "កាលពីខែមុន ខ្ញុំបានសម្ភាសលោកសំ កសិករដាំស្រូវមកពីព្រៃវែង។"], ["I asked him [how long he had been] a farmer.", "ខ្ញុំបានសួរគាត់ថាតើគាត់ធ្វើជាកសិករយូរប៉ុណ្ណាហើយ។"], ["He said that he [had started] working in the fields when he was twelve.", "គាត់បាននិយាយថាគាត់បានចាប់ផ្ដើមធ្វើស្រែតាំងពីអាយុដប់ពីរឆ្នាំ។"], ["He told me that the weather [was becoming] harder to predict.", "គាត់បានប្រាប់ខ្ញុំថាអាកាសធាតុកាន់តែពិបាកទស្សន៍ទាយ។"], ["I asked [whether his children wanted] to be farmers too.", "ខ្ញុំបានសួរថាតើកូនៗរបស់គាត់ចង់ធ្វើជាកសិករដែរឬទេ។"], ["He laughed and said they [preferred] working in the city.", "គាត់បានសើច ហើយនិយាយថាពួកគេចូលចិត្តធ្វើការនៅទីក្រុងជាង។"], ["He added that he [would keep] farming as long as he could.", "គាត់បានបន្ថែមថាគាត់នឹងបន្តធ្វើស្រែដរាបណាគាត់នៅអាចធ្វើបាន។"]], "q": [["When did Mr Sam start farming?", ["at 12", "at 20", "last year"], 0], ["What did he say about the weather?", ["It was easier to predict.", "It was harder to predict.", "It never changed."], 1], ["Where do his children prefer to work?", ["on the farm", "in the city", "abroad"], 1]], "write": "សាកសម្ភាសមនុស្សម្នាក់ រួចសរសេរ ១២០ ពាក្យជា Reported Speech។"},
 {"lv": "B2", "title": "Shopping Online", "focus": "although / despite / however · Passive", "lines": [["Online shopping has become extremely popular in Cambodia.", "ការទិញអីវ៉ាន់តាមអនឡាញបានក្លាយជាការពេញនិយមខ្លាំងនៅកម្ពុជា។"], ["Products can [be ordered] at midnight and [delivered] the next day.", "ទំនិញអាចត្រូវបានកុម្ម៉ង់នៅពាក់កណ្ដាលអធ្រាត្រ ហើយដឹកជញ្ជូនដល់នៅថ្ងៃបន្ទាប់។"], ["[Although] it is convenient, it also has some problems.", "ទោះបីវាងាយស្រួលក៏ដោយ វាក៏មានបញ្ហាខ្លះដែរ។"], ["Clothes often look different from the photos. [However], most shops now accept returns.", "សម្លៀកបំពាក់ច្រើនមើលទៅខុសពីរូបថត។ ទោះយ៉ាងណា ហាងភាគច្រើនឥឡូវទទួលយកការប្ដូរវិញ។"], ["[Despite] these risks, many people still prefer shopping from home.", "ទោះបីមានហានិភ័យទាំងនេះក៏ដោយ មនុស្សជាច្រើននៅតែចូលចិត្តទិញអីវ៉ាន់ពីផ្ទះ។"], ["Before you pay, reviews [should be read] carefully.", "មុនពេលបង់ប្រាក់ ការវាយតម្លៃរបស់អតិថិជនគួរតែត្រូវបានអានដោយប្រុងប្រយ័ត្ន។"]], "q": [["When can products be ordered?", ["only in the morning", "at any time, even midnight", "only on weekends"], 1], ["What is one problem with online clothes?", ["They are too cheap.", "They look different from the photos.", "They never arrive."], 1], ["What should you do before paying?", ["read reviews carefully", "call the shop", "visit the factory"], 0]], "write": "សរសេរ ១២០ ពាក្យប្រៀបធៀបការទិញអីវ៉ាន់តាមអនឡាញ និងនៅហាង ដោយប្រើ although / however។"},
 {"lv": "B2", "title": "Rice and a Changing Climate", "focus": "Future Continuous · Future Perfect · be likely to", "lines": [["Rice is the heart of Cambodian farming.", "ស្រូវគឺជាបេះដូងនៃកសិកម្មកម្ពុជា។"], ["But by 2050, temperatures [will have risen] by at least one degree.", "ប៉ុន្តែត្រឹមឆ្នាំ ២០៥០ សីតុណ្ហភាពនឹងបានកើនឡើងយ៉ាងហោចណាស់មួយអង្សា។"], ["Farmers [will be facing] longer dry seasons and stronger floods.", "កសិករនឹងកំពុងប្រឈមនឹងរដូវប្រាំងវែងជាងមុន និងទឹកជំនន់ខ្លាំងជាងមុន។"], ["Scientists [are] already [developing] rice that can survive under water.", "អ្នកវិទ្យាសាស្ត្រកំពុងអភិវឌ្ឍពូជស្រូវដែលអាចរស់បាននៅក្រោមទឹករួចហើយ។"], ["Many farmers [will be using] apps to check the weather before planting.", "កសិករជាច្រើននឹងកំពុងប្រើកម្មវិធីទូរស័ព្ទដើម្បីពិនិត្យអាកាសធាតុមុនពេលដាំ។"], ["If nothing changes, rice prices [are likely to rise].", "ប្រសិនបើគ្មានអ្វីផ្លាស់ប្ដូរ តម្លៃអង្ករទំនងជានឹងឡើងថ្លៃ។"]], "q": [["What will have happened by 2050?", ["Temperatures will have risen.", "Rice will have disappeared.", "Floods will have stopped."], 0], ["What are scientists developing?", ["new tractors", "rice that survives under water", "new apps"], 1], ["What is likely to happen if nothing changes?", ["Rice prices will rise.", "Rice prices will fall.", "Nothing"], 0]], "write": "សរសេរ ១២០ ពាក្យ៖ តើកម្ពុជានឹងមើលទៅយ៉ាងណានៅឆ្នាំ ២០៥០? ប្រើ Future Continuous និង Future Perfect។"},
 {"lv": "B2", "title": "Opening a Street Food Stall", "focus": "be used to / get used to · have something done", "lines": [["Last year, Mony quit her office job and opened a noodle stall.", "កាលពីឆ្នាំមុន មុន្នីបានឈប់ពីការងារការិយាល័យ ហើយបើកតូបលក់គុយទាវមួយ។"], ["At first, she [wasn't used to getting] up at 4 a.m.", "ដំបូងឡើយ នាងមិនទាន់ទម្លាប់ក្រោកពីគេងនៅម៉ោង ៤ ព្រឹកទេ។"], ["She [had her cart built] by a local welder.", "នាងបានឲ្យជាងផ្សារក្នុងស្រុកធ្វើរទេះរបស់នាង។"], ["She also [had a logo designed] by her cousin, who studies graphic design.", "នាងក៏បានឲ្យបងប្អូនជីដូនមួយ ដែលរៀនផ្នែករចនាក្រាហ្វិក រចនាឡូហ្គោឲ្យដែរ។"], ["Slowly, she [got used to] the long hours and the heat.", "បន្តិចម្ដងៗ នាងបានស៊ាំនឹងម៉ោងធ្វើការយូរ និងកម្ដៅ។"], ["Now she [is used to serving] over a hundred customers every morning.", "ឥឡូវនាងទម្លាប់បម្រើអតិថិជនជាងមួយរយនាក់រៀងរាល់ព្រឹក។"]], "q": [["What did Mony do before?", ["She was a student.", "She had an office job.", "She was a welder."], 1], ["Who designed her logo?", ["a welder", "her cousin", "a customer"], 1], ["How many customers does she serve every morning?", ["about 20", "about 50", "over 100"], 2]], "write": "សរសេរ ១២០ ពាក្យអំពីអាជីវកម្មតូចមួយដែលអ្នកចង់បើក។"},
 {"lv": "B2", "title": "Learning from Mistakes", "focus": "Modals of deduction · wish / If only", "lines": [["When Visal failed his driving test, he was shocked.", "ពេលវិសាលធ្លាក់ការប្រឡងបើកបរ គាត់ភ្ញាក់ផ្អើលណាស់។"], ["\"The examiner [must have made] a mistake,\" he thought.", "គាត់គិតថា «អ្នកប្រឡងប្រាកដជាបានធ្វើខុសហើយ»។"], ["But when he watched the video, he saw that he [couldn't have passed].", "ប៉ុន្តែពេលគាត់មើលវីដេអូ គាត់ឃើញថាគាត់មិនអាចប្រឡងជាប់បានទេ។"], ["He had forgotten to check his mirrors three times.", "គាត់បានភ្លេចពិនិត្យកញ្ចក់មើលក្រោយបីដង។"], ["\"[I wish I had practised] more,\" he admitted.", "គាត់បានទទួលស្គាល់ថា «ខ្ញុំប្រាថ្នាថាខ្ញុំបានហាត់បន្ថែមទៀត»។"], ["He booked ten extra lessons and passed easily the second time.", "គាត់បានកក់មេរៀនបន្ថែមដប់ម៉ោង ហើយប្រឡងជាប់យ៉ាងងាយនៅលើកទីពីរ។"], ["Now he tells his friends, \"Mistakes [might hurt], but they teach you more than success.\"", "ឥឡូវគាត់ប្រាប់មិត្តភក្ដិថា «កំហុសអាចធ្វើឲ្យឈឺចាប់ ប៉ុន្តែវាបង្រៀនអ្នកច្រើនជាងភាពជោគជ័យ»។"]], "q": [["What did Visal first think?", ["He drove badly.", "The examiner made a mistake.", "The car was broken."], 1], ["What had he forgotten to do?", ["wear a seatbelt", "check his mirrors", "stop at the light"], 1], ["What happened the second time?", ["He failed again.", "He passed easily.", "He didn't try."], 1]], "write": "សរសេរ ១២០ ពាក្យអំពីកំហុសមួយដែលអ្នកបានរៀនសូត្រពីវា ដោយប្រើ wish។"},
 {"lv": "C1", "title": "Small Loans, Big Changes", "focus": "Mixed Conditionals · Participle clauses", "lines": [["[Having grown up] in a poor village, Sophea knew how hard it was to start a business.", "ដោយបានធំធាត់នៅក្នុងភូមិក្រីក្រមួយ សុភាដឹងថាការចាប់ផ្ដើមអាជីវកម្មពិបាកយ៉ាងណា។"], ["In 2018, she took out a small loan to buy two sewing machines.", "នៅឆ្នាំ ២០១៨ នាងបានខ្ចីប្រាក់កម្ចីតូចមួយដើម្បីទិញម៉ាស៊ីនដេរពីរ។"], ["[If she hadn't borrowed] that money, she [wouldn't be running] a workshop with eight employees today.", "ប្រសិនបើនាងមិនបានខ្ចីលុយនោះទេ ថ្ងៃនេះនាងនឹងមិនកំពុងដំណើរការរោងជាងដែលមានបុគ្គលិកប្រាំបីនាក់ទេ។"], ["However, not every story ends so well.", "ទោះយ៉ាងណា មិនមែនរឿងទាំងអស់បញ្ចប់ដោយល្អបែបនេះទេ។"], ["[Faced] with high interest rates, some families have had to sell their land to repay debts.", "ដោយប្រឈមនឹងអត្រាការប្រាក់ខ្ពស់ គ្រួសារខ្លះត្រូវលក់ដីដើម្បីសងបំណុល។"], ["[If they were] better informed, they [would have chosen] safer options.", "ប្រសិនបើពួកគេមានព័ត៌មានគ្រប់គ្រាន់ជាងនេះ ពួកគេប្រហែលជាបានជ្រើសរើសជម្រើសដែលមានសុវត្ថិភាពជាង។"], ["Experts agree that financial education [is] as important as the loan itself.", "អ្នកជំនាញយល់ស្របថាការអប់រំហិរញ្ញវត្ថុមានសារៈសំខាន់ដូចប្រាក់កម្ចីដែរ។"]], "q": [["What did Sophea buy with her loan?", ["a shop", "two sewing machines", "land"], 1], ["Why have some families sold land?", ["to repay debts", "to move to the city", "to buy machines"], 0], ["What do experts say is as important as the loan?", ["interest rates", "financial education", "employees"], 1]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យ៖ តើកម្ចីខ្នាតតូចជួយ ឬធ្វើឲ្យខូចដល់គ្រួសារជនបទ?"},
 {"lv": "C1", "title": "The Growth of Phnom Penh", "focus": "Impersonal passive · Cleft sentences", "lines": [["Phnom Penh has changed beyond recognition in the past twenty years.", "ភ្នំពេញបានផ្លាស់ប្ដូររហូតស្ទើរតែមើលមិនស្គាល់ក្នុងរយៈពេលម្ភៃឆ្នាំកន្លងមក។"], ["[It is estimated that] the city's population has more than doubled since 2000.", "គេប៉ាន់ប្រមាណថាប្រជាជនក្នុងទីក្រុងបានកើនជាងទ្វេដងតាំងពីឆ្នាំ ២០០០។"], ["New towers [are said to be] rising faster than anywhere else in the region.", "គេនិយាយថាអគារខ្ពស់ៗថ្មីកំពុងសាងសង់លឿនជាងកន្លែងណាផ្សេងទៀតក្នុងតំបន់។"], ["[What residents complain about most is] the traffic.", "អ្វីដែលអ្នករស់នៅត្អូញត្អែរច្រើនជាងគេគឺចរាចរណ៍។"], ["[It is] the lack of public transport [that] makes congestion so severe.", "គឺការខ្វះខាតមធ្យោបាយដឹកជញ្ជូនសាធារណៈហើយ ដែលធ្វើឲ្យការកកស្ទះធ្ងន់ធ្ងរដល់ម្ល៉េះ។"], ["Many lakes [are believed to have been filled] in to make room for housing.", "គេជឿថាបឹងជាច្រើនត្រូវបានចាក់ដីលុបដើម្បីធ្វើលំនៅដ្ឋាន។"], ["[What the city needs now is] careful planning, not just more buildings.", "អ្វីដែលទីក្រុងត្រូវការឥឡូវនេះគឺការរៀបចំផែនការដោយប្រុងប្រយ័ត្ន មិនមែនគ្រាន់តែអគារបន្ថែមទៀតទេ។"]], "q": [["How has the population changed since 2000?", ["It has halved.", "It has more than doubled.", "It has stayed the same."], 1], ["What do residents complain about most?", ["noise", "traffic", "prices"], 1], ["What does the city need now?", ["more buildings", "careful planning", "more lakes"], 1]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យអំពីការផ្លាស់ប្ដូរនៃទីក្រុងរបស់អ្នក ដោយប្រើ It is said that… និង What… is…។"},
 {"lv": "C1", "title": "Tourism: A Double-Edged Sword", "focus": "Discourse markers · Hedging", "lines": [["Tourism [is arguably] Cambodia's most visible industry.", "ទេសចរណ៍អាចនិយាយបានថាជាឧស្សាហកម្មដែលគេមើលឃើញច្បាស់ជាងគេនៅកម្ពុជា។"], ["It creates jobs for hundreds of thousands of people. [Furthermore], it encourages the preservation of heritage sites.", "វាបង្កើតការងារសម្រាប់មនុស្សរាប់សែននាក់។ លើសពីនេះ វាលើកទឹកចិត្តឲ្យមានការថែរក្សាតំបន់បេតិកភណ្ឌ។"], ["[Nevertheless], rapid growth can place enormous pressure on local communities.", "ទោះជាយ៉ាងណាក៏ដោយ ការរីកចម្រើនយ៉ាងឆាប់រហ័សអាចដាក់សម្ពាធយ៉ាងខ្លាំងលើសហគមន៍មូលដ្ឋាន។"], ["Land prices near popular sites [tend to rise] sharply; [consequently], some residents can no longer afford to live there.", "តម្លៃដីក្បែរតំបន់ពេញនិយមមានទំនោរឡើងខ្លាំង ជាលទ្ធផល អ្នកស្រុកខ្លះលែងមានលទ្ធភាពរស់នៅទីនោះ។"], ["[It seems that] tourists increasingly prefer authentic, community-based experiences.", "ហាក់ដូចជាភ្ញៀវទេសចរកាន់តែចូលចិត្តបទពិសោធន៍ពិតប្រាកដដែលផ្អែកលើសហគមន៍។"], ["[Therefore], sustainable tourism [may well] be the key to long-term success.", "ដូច្នេះ ទេសចរណ៍ប្រកបដោយចីរភាពប្រហែលជាគន្លឹះនៃភាពជោគជ័យរយៈពេលវែង។"]], "q": [["What is one benefit of tourism mentioned?", ["lower prices", "preservation of heritage", "less traffic"], 1], ["Why can't some residents afford to live near popular sites?", ["Land prices rise.", "There are no jobs.", "Tourists leave."], 0], ["What do tourists seem to prefer increasingly?", ["luxury hotels", "community-based experiences", "shopping malls"], 1]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យ ដោយប្រើ furthermore, nevertheless, consequently យ៉ាងតិចម្ដងៗ។"},
 {"lv": "C1", "title": "The Revival of Khmer Silk", "focus": "Relative clauses · Participle clauses", "lines": [["Khmer silk, [which was once worn] only by royalty, is enjoying a remarkable revival.", "សូត្រខ្មែរ ដែលធ្លាប់ស្លៀកពាក់តែដោយរាជវង្សប៉ុណ្ណោះ កំពុងទទួលបានការរស់ឡើងវិញគួរឲ្យកត់សម្គាល់។"], ["[Woven] by hand on wooden looms, a single scarf can take a week to complete.", "ដោយត្បាញដោយដៃលើកី ក្រមាមួយអាចត្រូវការពេលមួយសប្ដាហ៍ដើម្បីបញ្ចប់។"], ["The weavers, [most of whom are] women, learned the craft from their grandmothers.", "អ្នកត្បាញ ដែលភាគច្រើនជាស្ត្រី បានរៀនសិប្បកម្មនេះពីជីដូនរបស់ពួកគេ។"], ["[Having almost disappeared] during the war, the skill survived thanks to a handful of elderly masters.", "ដោយស្ទើរតែបាត់បង់ក្នុងសម័យសង្គ្រាម ជំនាញនេះបានរស់រានដោយសារគ្រូចាស់ៗមួយក្ដាប់តូច។"], ["Today, designers [who want] something unique are ordering silk directly from villages.", "សព្វថ្ងៃ អ្នករចនាដែលចង់បានអ្វីប្លែកពីគេកំពុងកុម្ម៉ង់សូត្រដោយផ្ទាល់ពីភូមិ។"], ["[Combining] tradition with modern style, young weavers are attracting international buyers.", "ដោយរួមបញ្ចូលប្រពៃណីជាមួយម៉ូដទំនើប អ្នកត្បាញវ័យក្មេងកំពុងទាក់ទាញអ្នកទិញអន្តរជាតិ។"]], "q": [["Who used to wear Khmer silk?", ["farmers", "royalty", "tourists"], 1], ["How long can a scarf take to weave?", ["an hour", "a day", "a week"], 2], ["How did the skill survive?", ["thanks to a few elderly masters", "thanks to factories", "it didn't survive"], 0]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យអំពីសិប្បកម្មប្រពៃណីមួយ ដោយប្រើ relative clauses និង participle clauses។"},
 {"lv": "C1", "title": "The Gig Economy", "focus": "would rather / had better · unless / as long as", "lines": [["Ride-hailing and delivery apps have created a new kind of worker in Cambodia.", "កម្មវិធីហៅឡាន និងដឹកជញ្ជូនបានបង្កើតកម្មករប្រភេទថ្មីមួយនៅកម្ពុជា។"], ["Many young drivers say they [would rather choose] their own hours than work in an office.", "អ្នកបើកបរវ័យក្មេងជាច្រើននិយាយថាពួកគេចង់ជ្រើសម៉ោងធ្វើការដោយខ្លួនឯង ជាជាងធ្វើការក្នុងការិយាល័យ។"], ["They earn a reasonable income [as long as] demand stays high.", "ពួកគេរកប្រាក់ចំណូលសមរម្យបាន ដរាបណាតម្រូវការនៅខ្ពស់។"], ["[Unless] they work long hours, however, their earnings drop quickly.", "ទោះយ៉ាងណា លុះត្រាតែពួកគេធ្វើការច្រើនម៉ោង បើមិនដូច្នោះទេ ប្រាក់ចំណូលនឹងធ្លាក់ចុះយ៉ាងលឿន។"], ["They can take a day off whenever they like, [provided that] they accept lower pay that week.", "ពួកគេអាចឈប់សម្រាកមួយថ្ងៃពេលណាក៏បាន ឲ្យតែពួកគេទទួលយកប្រាក់ចំណូលតិចជាងមុនក្នុងសប្ដាហ៍នោះ។"], ["Financial advisers say gig workers [had better save] at least ten percent of what they earn.", "ទីប្រឹក្សាហិរញ្ញវត្ថុនិយាយថា កម្មករការងារឯករាជ្យគួរតែសន្សំយ៉ាងហោចណាស់ដប់ភាគរយនៃអ្វីដែលពួកគេរកបាន។"]], "q": [["What would many drivers rather do?", ["work in an office", "choose their own hours", "stop working"], 1], ["What happens unless they work long hours?", ["Their earnings drop.", "They get insurance.", "They get promoted."], 0], ["What should gig workers do according to advisers?", ["save at least 10%", "buy a car", "quit"], 0]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យ៖ តើអ្នកចូលចិត្តការងារពេញម៉ោង ឬការងារឯករាជ្យ? ហេតុអ្វី?"},
 {"lv": "C1", "title": "Why Sleep Matters for Learning", "focus": "Hedging · Passive gerunds & infinitives", "lines": [["Students who stay up all night before an exam [tend to perform] worse, not better.", "សិស្សដែលមិនគេងពេញមួយយប់មុនការប្រឡង មានទំនោរធ្វើបានអាក្រក់ជាង មិនមែនល្អជាងទេ។"], ["Research [appears to show] that the brain organises new information during deep sleep.", "ការស្រាវជ្រាវហាក់បង្ហាញថាខួរក្បាលរៀបចំព័ត៌មានថ្មីក្នុងពេលគេងលក់ស្កប់ស្កល់។"], ["Memories that [are not given] time to settle [are likely to be] forgotten.", "ការចងចាំដែលមិនត្រូវបានផ្ដល់ពេលឲ្យស្ថិតស្ថេរ ទំនងជានឹងត្រូវបំភ្លេចចោល។"], ["Most teenagers dislike [being told] to go to bed early.", "ក្មេងជំទង់ភាគច្រើនមិនចូលចិត្តត្រូវបានគេប្រាប់ឲ្យចូលគេងឆាប់ទេ។"], ["However, those who sleep well [seem to remember] up to forty percent more.", "ទោះយ៉ាងណា អ្នកដែលគេងបានល្អហាក់ដូចជាចងចាំបានច្រើនជាងរហូតដល់សែសិបភាគរយ។"], ["It [could be argued] that sleep is the most underrated study tool.", "គេអាចអះអាងបានថា ការគេងគឺជាឧបករណ៍សិក្សាដែលគេមើលរំលងជាងគេ។"]], "q": [["How do students who stay up all night tend to perform?", ["better", "worse", "the same"], 1], ["When does the brain organise new information?", ["during deep sleep", "during exams", "while eating"], 0], ["How much more might good sleepers remember?", ["up to 10%", "up to 40%", "100%"], 1]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យផ្ដល់ដំបូន្មានដល់សិស្សអំពីទម្លាប់រៀនល្អ ដោយប្រើ tend to / appear to។"},
 {"lv": "C1", "title": "A Late Career Change", "focus": "Third Conditional · Future in the past", "lines": [["At 35, Kosal [was going to spend] the rest of his life as a bank clerk.", "នៅអាយុ ៣៥ ឆ្នាំ កុសលគ្រោងនឹងធ្វើជាបុគ្គលិកធនាគារពេញមួយជីវិត។"], ["Then a friend asked him to help photograph a wedding.", "បន្ទាប់មក មិត្តម្នាក់បានសុំឲ្យគាត់ជួយថតរូបពិធីមង្គលការមួយ។"], ["He never imagined that this one day [would change] everything.", "គាត់មិនដែលស្រមៃថាថ្ងៃតែមួយនេះនឹងផ្លាស់ប្ដូរអ្វីៗទាំងអស់ទេ។"], ["[If his friend hadn't asked] him, he [would never have discovered] his talent.", "ប្រសិនបើមិត្តរបស់គាត់មិនបានសុំគាត់ទេ គាត់នឹងមិនដែលបានរកឃើញទេពកោសល្យរបស់គាត់ទេ។"], ["Within two years, he had left the bank and opened his own studio.", "ក្នុងរយៈពេលពីរឆ្នាំ គាត់បានលាឈប់ពីធនាគារ ហើយបើកស្ទូឌីយោផ្ទាល់ខ្លួន។"], ["\"[Had I waited] for the perfect moment, I [would have waited] forever,\" he says.", "គាត់និយាយថា «ប្រសិនបើខ្ញុំរង់ចាំពេលល្អឥតខ្ចោះ ខ្ញុំប្រហែលជារង់ចាំជារៀងរហូត»។"]], "q": [["What was Kosal's first job?", ["photographer", "bank clerk", "teacher"], 1], ["What changed his life?", ["photographing a wedding", "a promotion", "moving abroad"], 0], ["What did he do within two years?", ["opened his own studio", "became a manager", "got married"], 0]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យអំពីការសម្រេចចិត្តដែលបានផ្លាស់ប្ដូរជីវិតរបស់មនុស្សម្នាក់ ដោយប្រើ Third Conditional។"},
 {"lv": "C2", "title": "The Paradox of Choice", "focus": "Inversion · Inversion with Only / Little", "lines": [["[Never before have consumers had] so many options at their fingertips.", "មិនដែលមានពីមុនមកទេ ដែលអ្នកប្រើប្រាស់មានជម្រើសច្រើនដល់ម្ល៉េះនៅចុងម្រាមដៃ។"], ["One might assume that more choice inevitably leads to greater satisfaction.", "គេអាចសន្មត់ថាជម្រើសកាន់តែច្រើន នាំឲ្យមានការពេញចិត្តកាន់តែខ្លាំងជៀសមិនរួច។"], ["[Little do most people realise], however, that abundance can be paralysing.", "ទោះយ៉ាងណា មនុស្សភាគច្រើនមិនបានដឹងសោះថាភាពសម្បូរបែបអាចធ្វើឲ្យស្ទាក់ស្ទើរ។"], ["[Not only does] an overwhelming range of options [delay] decisions, but it also breeds regret.", "ជម្រើសច្រើនហួសហេតុ មិនត្រឹមតែពន្យារការសម្រេចចិត្តប៉ុណ្ណោះទេ ប៉ុន្តែវាថែមទាំងបង្កឲ្យមានការសោកស្ដាយទៀតផង។"], ["[Only when] we limit our options [do we] begin to appreciate what we have.", "លុះតែយើងកំណត់ជម្រើសរបស់យើង ទើបយើងចាប់ផ្ដើមឲ្យតម្លៃលើអ្វីដែលយើងមាន។"], ["[Rarely is] the \"perfect\" choice worth the hours spent searching for it.", "កម្រណាស់ដែលជម្រើស «ល្អឥតខ្ចោះ» សមនឹងពេលវេលារាប់ម៉ោងដែលចំណាយស្វែងរកវា។"]], "q": [["What do most people not realise?", ["that choice is expensive", "that abundance can be paralysing", "that shops are closing"], 1], ["What two effects do too many options have?", ["delay decisions and breed regret", "save time and money", "increase happiness"], 0], ["When do we begin to appreciate what we have?", ["when we buy more", "only when we limit our options", "never"], 1]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យ៖ តើជម្រើសច្រើនពេកធ្វើឲ្យមនុស្សសប្បាយចិត្ត ឬមិនសប្បាយចិត្ត? ប្រើ inversion យ៉ាងតិច ២ ដង។"},
 {"lv": "C2", "title": "Safeguarding Khmer Heritage", "focus": "The Subjunctive · Nominalisation", "lines": [["[The preservation] of intangible heritage poses challenges quite distinct from those of protecting temples.", "ការថែរក្សាបេតិកភណ្ឌអរូបីបង្កបញ្ហាប្រឈមខុសគ្នាស្រឡះពីការការពារប្រាសាទ។"], ["Music, dance and oral storytelling exist only as long as they are practised.", "តន្ត្រី របាំ និងការនិទានរឿងផ្ទាល់មាត់មាននៅដរាបណាគេនៅតែអនុវត្តវា។"], ["[The decline] in the number of master performers has alarmed cultural organisations.", "ការថយចុះនៃចំនួនសិល្បករជំនាញបានធ្វើឲ្យអង្គការវប្បធម៌ព្រួយបារម្ភ។"], ["Experts have recommended that every province [establish] a training programme for young artists.", "អ្នកជំនាញបានផ្ដល់អនុសាសន៍ឲ្យខេត្តនីមួយៗបង្កើតកម្មវិធីបណ្ដុះបណ្ដាលសម្រាប់សិល្បករវ័យក្មេង។"], ["[It is vital that] traditional knowledge [be recorded] before it is lost.", "វាមានសារៈសំខាន់ខ្លាំងណាស់ ដែលចំណេះដឹងប្រពៃណីត្រូវតែកត់ត្រាទុក មុនពេលវាបាត់បង់។"], ["Some even insist that classical dance [be taught] in all state schools.", "អ្នកខ្លះថែមទាំងទទូចឲ្យរបាំបុរាណត្រូវបង្រៀននៅគ្រប់សាលារដ្ឋ។"]], "q": [["How does intangible heritage survive?", ["only as long as it is practised", "in museums", "in temples"], 0], ["What have experts recommended?", ["closing schools", "provincial training programmes", "selling temples"], 1], ["What do some insist should be taught in state schools?", ["classical dance", "foreign languages", "temple building"], 0]], "write": "សរសេរអត្ថបទផ្លូវការ ២០០ ពាក្យ ផ្ដល់អនុសាសន៍ដល់រដ្ឋាភិបាល ដោយប្រើ Subjunctive (It is essential that…)។"},
 {"lv": "C2", "title": "The Anatomy of Misinformation", "focus": "as if / as though · Hedging · Discourse markers", "lines": [["False stories spread online [as if they were] verified facts.", "រឿងមិនពិតរីករាលដាលតាមអនឡាញ ដូចជាវាជាការពិតដែលបានផ្ទៀងផ្ទាត់។"], ["They are often written [as though] the author [had witnessed] events first-hand.", "ពួកវាច្រើនត្រូវបានសរសេរ ដូចជាអ្នកនិពន្ធបានឃើញព្រឹត្តិការណ៍ដោយផ្ទាល់ភ្នែក។"], ["Emotional headlines [appear to travel] six times faster than accurate ones.", "ចំណងជើងដែលប៉ះពាល់អារម្មណ៍ហាក់ដូចជារីករាលដាលលឿនជាងចំណងជើងត្រឹមត្រូវប្រាំមួយដង។"], ["[Nonetheless], simple habits can dramatically reduce the risk of being misled.", "ទោះជាយ៉ាងណាក៏ដោយ ទម្លាប់សាមញ្ញៗអាចកាត់បន្ថយហានិភ័យនៃការត្រូវគេបោកបញ្ឆោតយ៉ាងខ្លាំង។"], ["Checking the source, the date and at least one other outlet [is arguably] the most effective defence.", "ការពិនិត្យប្រភព កាលបរិច្ឆេទ និងប្រព័ន្ធផ្សព្វផ្សាយយ៉ាងហោចណាស់មួយទៀត អាចនិយាយបានថាជាការការពារដែលមានប្រសិទ្ធភាពបំផុត។"], ["[Only by] pausing before we share [can we] break the cycle.", "មានតែតាមរយៈការផ្អាកមុននឹងចែករំលែកប៉ុណ្ណោះ ទើបយើងអាចបំបែកវដ្ដនេះបាន។"]], "q": [["How do false stories spread?", ["as if they were verified facts", "slowly", "only on TV"], 0], ["How much faster do emotional headlines appear to travel?", ["twice", "six times", "ten times"], 1], ["What is called the most effective defence?", ["deleting apps", "checking source, date and another outlet", "sharing quickly"], 1]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យ៖ តើយុវជនអាចការពារខ្លួនពីព័ត៌មានក្លែងក្លាយដោយរបៀបណា?"},
 {"lv": "C2", "title": "Cities on Water", "focus": "Formal relatives (in which / whereby) · Fronting", "lines": [["Phnom Penh sits at the confluence of rivers, [in which] water has always shaped daily life.", "ភ្នំពេញស្ថិតនៅចំណុចប្រសព្វនៃទន្លេ ដែលទឹកតែងតែកំណត់ជីវិតប្រចាំថ្ងៃ។"], ["The wetlands, [on which] the city once depended for drainage, are rapidly disappearing.", "តំបន់ដីសើម ដែលទីក្រុងធ្លាប់ពឹងផ្អែកសម្រាប់បង្ហូរទឹក កំពុងបាត់បង់យ៉ាងឆាប់រហ័ស។"], ["[Gone are] the days when monsoon rain simply soaked into the land.", "ថ្ងៃដែលទឹកភ្លៀងមូសុងគ្រាន់តែជ្រាបចូលដីបានកន្លងផុតទៅហើយ។"], ["Planners have proposed a system [whereby] new developments must include green space.", "អ្នករៀបចំផែនការបានស្នើប្រព័ន្ធមួយ ដែលតាមរយៈនោះ គម្រោងអភិវឌ្ឍថ្មីៗត្រូវតែមានទីធ្លាបៃតង។"], ["[Equally important] is the restoration of canals [through which] floodwater can escape.", "សំខាន់ដូចគ្នាដែរ គឺការស្ដារប្រឡាយឡើងវិញ ដែលទឹកជំនន់អាចហូរចេញតាមនោះបាន។"], ["[Whether these plans succeed] will depend on political will as much as engineering.", "ថាតើផែនការទាំងនេះនឹងជោគជ័យឬអត់ គឺអាស្រ័យលើឆន្ទៈនយោបាយ ដូចគ្នានឹងវិស្វកម្មដែរ។"]], "q": [["What did the city once depend on wetlands for?", ["drinking water", "drainage", "fishing only"], 1], ["What would the proposed system require?", ["green space in new developments", "fewer roads", "taller buildings"], 0], ["What will success depend on?", ["money only", "political will and engineering", "tourists"], 1]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យអំពីបញ្ហាបរិស្ថានមួយ និងដំណោះស្រាយ ដោយប្រើ in which / whereby។"},
 {"lv": "C2", "title": "On Leadership", "focus": "Pseudo-cleft · will / would for habits", "lines": [["[What distinguishes] a great leader [is] not charisma but consistency.", "អ្វីដែលធ្វើឲ្យអ្នកដឹកនាំដ៏អស្ចារ្យខុសពីគេ មិនមែនជាមន្តស្នេហ៍ទេ ប៉ុន្តែជាភាពស្ថិតស្ថេរ។"], ["My first manager [would arrive] before anyone else and [would greet] every employee by name.", "អ្នកគ្រប់គ្រងដំបូងរបស់ខ្ញុំតែងមកដល់មុនគេ ហើយតែងស្វាគមន៍បុគ្គលិកម្នាក់ៗតាមឈ្មោះ។"], ["[All she ever asked of us was] honesty.", "អ្វីទាំងអស់ដែលនាងធ្លាប់ទាមទារពីយើង គឺភាពស្មោះត្រង់។"], ["[The reason why] the team trusted her [was that] she admitted her own mistakes.", "មូលហេតុដែលក្រុមទុកចិត្តនាង គឺដោយសារនាងទទួលស្គាល់កំហុសរបស់ខ្លួនឯង។"], ["Even under pressure, she [would] calmly [listen] before making a decision.", "ទោះស្ថិតក្រោមសម្ពាធក៏ដោយ នាងតែងស្ដាប់ដោយស្ងប់ស្ងាត់មុននឹងសម្រេចចិត្ត។"], ["[The thing I learned] from her [is that] leadership is a habit, not a title.", "រឿងដែលខ្ញុំបានរៀនពីនាង គឺការដឹកនាំជាទម្លាប់ មិនមែនជាងារទេ។"]], "q": [["What distinguishes a great leader according to the text?", ["charisma", "consistency", "wealth"], 1], ["What did the manager ask of the team?", ["long hours", "honesty", "perfection"], 1], ["Why did the team trust her?", ["She admitted her mistakes.", "She was rich.", "She never spoke."], 0]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យអំពីអ្នកដឹកនាំដែលអ្នកគោរព ដោយប្រើ What… is / All… is / The reason why…។"},
 {"lv": "C2", "title": "The Case for Doing Less", "focus": "It's (high) time · Fronting · Ellipsis", "lines": [["In a culture that celebrates busyness, rest is often mistaken for laziness.", "នៅក្នុងវប្បធម៌ដែលអបអរការរវល់ ការសម្រាកច្រើនត្រូវបានគេយល់ច្រឡំថាជាភាពខ្ជិលច្រអូស។"], ["[It is high time we questioned] this assumption.", "ដល់ពេលយូរហើយ ដែលយើងគួរចោទសួរការសន្មត់នេះ។"], ["[Exhausted though many professionals are], they rarely admit it.", "ទោះបីអ្នកជំនាញជាច្រើនហត់នឿយក៏ដោយ ពួកគេកម្រទទួលស្គាល់ណាស់។"], ["Will working fewer hours reduce productivity? Studies suggest [not].", "តើការធ្វើការតិចម៉ោងនឹងកាត់បន្ថយផលិតភាពទេ? ការសិក្សាបង្ហាញថាមិនមែនទេ។"], ["In fact, teams given longer breaks often produce better work than those [that aren't].", "តាមពិត ក្រុមដែលទទួលបានពេលសម្រាកវែងជាង ច្រើនផលិតការងារល្អជាងក្រុមដែលមិនបាន។"], ["[Simplicity], not speed, is what we should be striving for.", "ភាពសាមញ្ញ មិនមែនល្បឿនទេ គឺជាអ្វីដែលយើងគួរខិតខំឆ្ពោះទៅ។"]], "q": [["What is rest often mistaken for?", ["laziness", "productivity", "success"], 0], ["Does working fewer hours reduce productivity according to studies?", ["Yes", "No", "It doubles it"], 1], ["What should we strive for?", ["speed", "simplicity", "busyness"], 1]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យ៖ តើការរវល់ជានិច្ចគឺជាសញ្ញានៃភាពជោគជ័យមែនទេ?"},
 {"lv": "C2", "title": "Should Machines Write Our Stories?", "focus": "Conditionals without if · Past modals", "lines": [["When a novel written largely by software won a literary prize, the reaction was swift and divided.", "ពេលប្រលោមលោកមួយដែលភាគច្រើនសរសេរដោយកម្មវិធីបានឈ្នះពានរង្វាន់អក្សរសិល្ប៍ ប្រតិកម្មកើតឡើងយ៉ាងរហ័ស និងបែកបាក់។"], ["[Had the judges known] the truth, they [would] almost certainly [have chosen] differently.", "ប្រសិនបើគណៈកម្មការបានដឹងការពិត ពួកគេប្រាកដជាបានជ្រើសរើសខុសពីនេះ។"], ["The author, critics argued, [should have disclosed] how the book was produced.", "អ្នករិះគន់អះអាងថា អ្នកនិពន្ធគួរតែបានបង្ហាញពីរបៀបដែលសៀវភៅត្រូវបានផលិត។"], ["Others insisted the controversy [needn't have arisen] at all, since every writer uses tools.", "អ្នកផ្សេងទៀតទទូចថា ភាពចម្រូងចម្រាសនេះមិនចាំបាច់កើតឡើងទាល់តែសោះ ព្រោះអ្នកនិពន្ធគ្រប់រូបប្រើឧបករណ៍។"], ["[Were machines to replace] human authors entirely, literature [would lose] its most vital ingredient: lived experience.", "ប្រសិនបើម៉ាស៊ីនជំនួសអ្នកនិពន្ធមនុស្សទាំងស្រុង អក្សរសិល្ប៍នឹងបាត់បង់គ្រឿងផ្សំសំខាន់បំផុតរបស់វា គឺបទពិសោធន៍ជីវិតពិត។"], ["[Should you ever doubt] this, read a story by someone who [could not have written] it without suffering.", "ប្រសិនបើអ្នកធ្លាប់សង្ស័យរឿងនេះ សូមអានរឿងមួយដែលអ្នកនិពន្ធមិនអាចសរសេរបាន បើគ្មានការឈឺចាប់។"]], "q": [["Would the judges have chosen differently if they had known?", ["almost certainly yes", "no", "they didn't care"], 0], ["What did critics say the author should have done?", ["written faster", "disclosed how the book was produced", "won another prize"], 1], ["What would literature lose if machines replaced authors?", ["readers", "lived experience", "prizes"], 1]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យ៖ តើ AI គួរត្រូវបានប្រើក្នុងការសរសេររឿង ឬសិល្បៈដែរឬទេ?"},
 {"lv": "B1", "title": "Lost in China", "focus": "Indirect questions · Question tags · Verb + preposition", "lines": [["On her first trip abroad, Neary got lost near a busy market in Shanghai.", "ក្នុងដំណើរទៅបរទេសលើកដំបូង នារីបានវង្វេងផ្លូវក្បែរផ្សារដ៏មមាញឹកមួយនៅសៀងហៃ។"], ["She was [looking for] her hotel, but her phone battery was dead.", "នាងកំពុងរកសណ្ឋាគាររបស់នាង ប៉ុន្តែថ្មទូរស័ព្ទរបស់នាងអស់។"], ["She stopped a woman and asked, \"Excuse me, [could you tell me where] the river station [is]?\"", "នាងបានឃាត់ស្ត្រីម្នាក់ ហើយសួរថា «សុំទោស តើអ្នកអាចប្រាប់ខ្ញុំថាស្ថានីយទូកនៅឯណាបានទេ?»"], ["The woman smiled. \"You're not from here, [are you]?\"", "ស្ត្រីនោះញញឹម។ «អ្នកមិនមែនមកពីទីនេះទេ មែនទេ?»"], ["\"No, I'm from Cambodia. [Do you know how long] it [takes] to walk there?\"", "«ទេ ខ្ញុំមកពីកម្ពុជា។ តើអ្នកដឹងថាដើរទៅទីនោះចំណាយពេលប៉ុន្មានទេ?»"], ["\"About ten minutes. Just go straight and turn left at the temple. It's easy, [isn't it]?\"", "«ប្រហែលដប់នាទី។ គ្រាន់តែដើរត្រង់ ហើយបត់ឆ្វេងនៅវត្ត។ ងាយស្រួលមែនទេ?»"], ["Neary [thanked] her [for] her help and found her hotel before dark.", "នារីបានអរគុណនាងចំពោះជំនួយ ហើយរកឃើញសណ្ឋាគាររបស់នាងមុនពេលងងឹត។"]], "q": [["Why couldn't Neary use her phone?", ["It was stolen.", "The battery was dead.", "She had no internet."], 1], ["How long does it take to walk to the river station?", ["about 5 minutes", "about 10 minutes", "about an hour"], 1], ["Where should she turn left?", ["at the market", "at the temple", "at the hotel"], 1]], "write": "សរសេរការសន្ទនា ៨០ ពាក្យ ពេលអ្នកសួរផ្លូវនៅទីក្រុងថ្មី ដោយប្រើ indirect questions។"},
 {"lv": "A1", "title": "My Morning Routine", "focus": "Present Simple · Prepositions of time", "lines": [["I [get] up [at] six o'clock every day.", "ខ្ញុំក្រោកពីគេងនៅម៉ោងប្រាំមួយរៀងរាល់ថ្ងៃ។"], ["First, I [wash] my face and [brush] my teeth.", "ដំបូង ខ្ញុំលាងមុខ និងដុសធ្មេញ។"], ["Then I [eat] breakfast with my family.", "បន្ទាប់មក ខ្ញុំញ៉ាំអាហារពេលព្រឹកជាមួយគ្រួសារ។"], ["My father [drinks] coffee, but I [drink] milk.", "ឪពុកខ្ញុំផឹកកាហ្វេ ប៉ុន្តែខ្ញុំផឹកទឹកដោះគោ។"], ["I [leave] home [at] half past six.", "ខ្ញុំចេញពីផ្ទះនៅម៉ោងប្រាំមួយកន្លះ។"], ["[On] Sundays, I [don't get] up early.", "នៅថ្ងៃអាទិត្យ ខ្ញុំមិនក្រោកពីព្រលឹមទេ។"]], "q": [["What time does the writer get up?", ["at 5:00", "at 6:00", "at 7:00"], 1], ["What does the writer drink?", ["coffee", "tea", "milk"], 2], ["When does the writer not get up early?", ["on Mondays", "on Sundays", "every day"], 1]], "write": "សរសេរ ៦ ប្រយោគអំពីទម្លាប់ពេលព្រឹករបស់អ្នក ដោយប្រើ at / in / on។"},
 {"lv": "A1", "title": "The Weather in Cambodia", "focus": "It is… · There are · can", "lines": [["Cambodia [has] two seasons: the dry season and the rainy season.", "កម្ពុជាមានពីររដូវ៖ រដូវប្រាំង និងរដូវវស្សា។"], ["In April, [it is] very hot.", "នៅខែមេសា អាកាសធាតុក្ដៅខ្លាំងណាស់។"], ["From May to October, [it rains] almost every afternoon.", "ពីខែឧសភា ដល់ខែតុលា មេឃភ្លៀងស្ទើររៀងរាល់រសៀល។"], ["Sometimes [there are] floods in the countryside.", "ពេលខ្លះមានទឹកជំនន់នៅជនបទ។"], ["In December, the mornings [are] cool and fresh.", "នៅខែធ្នូ ពេលព្រឹកត្រជាក់ និងស្រស់ស្រាយ។"], ["You [can wear] a T-shirt all year!", "អ្នកអាចស្លៀកអាវយឺតពេញមួយឆ្នាំ!"]], "q": [["How many seasons does Cambodia have?", ["two", "three", "four"], 0], ["Which month is very hot?", ["December", "April", "October"], 1], ["How are December mornings?", ["very hot", "rainy", "cool and fresh"], 2]], "write": "សរសេរ ៥ ប្រយោគអំពីអាកាសធាតុនៅកន្លែងរបស់អ្នក។"},
 {"lv": "A2", "title": "A Day at the Beach", "focus": "Past Simple · Past Continuous · too / enough", "lines": [["Last Sunday, my friends and I [went] to Otres Beach in Sihanoukville.", "កាលពីថ្ងៃអាទិត្យ ខ្ញុំ និងមិត្តភក្ដិបានទៅឆ្នេរអូរត្រេះនៅក្រុងព្រះសីហនុ។"], ["The water [was] warm, so we [swam] for hours.", "ទឹកក្ដៅឧណ្ហៗ ដូច្នេះយើងបានហែលទឹកជាច្រើនម៉ោង។"], ["While we [were swimming], a big wave [took] my sunglasses!", "ពេលយើងកំពុងហែលទឹក រលកធំមួយបានយកវ៉ែនតាការពារពន្លឺរបស់ខ្ញុំបាត់!"], ["In the afternoon, it [was too hot] to play football.", "នៅពេលរសៀល ក្ដៅពេកមិនអាចលេងបាល់ទាត់បានទេ។"], ["We [didn't bring enough] water, so we [bought] coconuts.", "យើងមិនបានយកទឹកមកគ្រប់គ្រាន់ទេ ដូច្នេះយើងបានទិញដូង។"], ["We [were] tired but happy when we [got] home.", "យើងហត់ ប៉ុន្តែសប្បាយចិត្តពេលយើងមកដល់ផ្ទះ។"]], "q": [["Where did they go?", ["Kep", "Otres Beach", "Kampot"], 1], ["What did the wave take?", ["a phone", "sunglasses", "a bag"], 1], ["Why did they buy coconuts?", ["They were hungry.", "They didn't bring enough water.", "They wanted souvenirs."], 1]], "write": "សរសេរ ៦ ប្រយោគអំពីថ្ងៃមួយដែលអ្នកមិនអាចបំភ្លេចបាន។"},
 {"lv": "A2", "title": "My Favourite Teacher", "focus": "Adverbs of manner · Comparatives · Possessive 's", "lines": [["[Teacher Sreymom's] class is my favourite.", "ថ្នាក់របស់អ្នកគ្រូស្រីមុំគឺជាថ្នាក់ដែលខ្ញុំចូលចិត្តបំផុត។"], ["She speaks [slowly] and [clearly], so everyone understands.", "នាងនិយាយយឺតៗ និងច្បាស់ៗ ដូច្នេះគ្រប់គ្នាយល់។"], ["She explains grammar [more simply than] our textbook.", "នាងពន្យល់ grammar សាមញ្ញជាងសៀវភៅសិក្សារបស់យើង។"], ["When we make mistakes, she corrects us [kindly].", "ពេលយើងធ្វើខុស នាងកែឲ្យយើងដោយចិត្តល្អ។"], ["Her lessons are [more fun than] other classes because we play games.", "មេរៀនរបស់នាងសប្បាយជាងថ្នាក់ផ្សេងៗ ព្រោះយើងលេងល្បែង។"], ["Thanks to her, my English is [better] now.", "អរគុណនាង ឥឡូវភាសាអង់គ្លេសរបស់ខ្ញុំល្អជាងមុន។"]], "q": [["How does the teacher speak?", ["quickly", "slowly and clearly", "loudly"], 1], ["How does she correct mistakes?", ["angrily", "kindly", "she doesn't"], 1], ["Why are her lessons fun?", ["They are short.", "They play games.", "There is no homework."], 1]], "write": "សរសេរ ៦ ប្រយោគអំពីគ្រូដែលអ្នកចូលចិត្តបំផុត។"},
 {"lv": "B1", "title": "Growing Vegetables at Home", "focus": "Zero & First Conditional · Imperatives", "lines": [["More and more families in Phnom Penh [are growing] vegetables on their roofs.", "គ្រួសារកាន់តែច្រើននៅភ្នំពេញកំពុងដាំបន្លែនៅលើដំបូលផ្ទះ។"], ["[If you have] a sunny space, you [can grow] morning glory, chillies and herbs.", "បើអ្នកមានកន្លែងមានពន្លឺថ្ងៃ អ្នកអាចដាំត្រកួន ម្ទេស និងជីរ។"], ["[Use] old buckets or plastic bottles as pots.", "ប្រើធុង ឬដបប្លាស្ទិកចាស់ធ្វើជាថូ។"], ["[If plants get] too much water, their roots [rot].", "បើរុក្ខជាតិទទួលទឹកច្រើនពេក ឫសរបស់វានឹងរលួយ។"], ["[Don't use] chemicals – kitchen waste makes excellent fertiliser.", "កុំប្រើសារធាតុគីមី – កាកសំណល់ផ្ទះបាយជាជីដ៏ល្អ។"], ["[If you start] this month, you [will be eating] your own vegetables in six weeks.", "បើអ្នកចាប់ផ្ដើមខែនេះ អ្នកនឹងបានញ៉ាំបន្លែផ្ទាល់ខ្លួនក្នុងរយៈពេលប្រាំមួយសប្ដាហ៍។"]], "q": [["Where are families growing vegetables?", ["on their roofs", "in parks", "in schools"], 0], ["What happens if plants get too much water?", ["They grow faster.", "Their roots rot.", "Nothing"], 1], ["What makes excellent fertiliser?", ["chemicals", "kitchen waste", "plastic"], 1]], "write": "សរសេរ ៨០ ពាក្យណែនាំរបៀបធ្វើអ្វីមួយ (ឧ. ធ្វើម្ហូប ដាំបន្លែ)។"},
 {"lv": "B1", "title": "A Message to My Future Self", "focus": "will · might · be going to", "lines": [["Dear future me, I'm writing this when I am seventeen.", "ជូនចំពោះខ្លួនខ្ញុំនាពេលអនាគត ខ្ញុំសរសេរនេះនៅពេលខ្ញុំអាយុដប់ប្រាំពីរឆ្នាំ។"], ["In ten years, I think I [will be] a software developer.", "ក្នុងរយៈពេលដប់ឆ្នាំទៀត ខ្ញុំគិតថាខ្ញុំនឹងក្លាយជាអ្នកអភិវឌ្ឍកម្មវិធី។"], ["I [might live] in Phnom Penh, or I [might work] abroad.", "ខ្ញុំប្រហែលជារស់នៅភ្នំពេញ ឬប្រហែលជាធ្វើការនៅបរទេស។"], ["Next year, I['m going to take] the IELTS exam.", "ឆ្នាំក្រោយ ខ្ញុំនឹងប្រឡង IELTS។"], ["I hope you [won't forget] our family and our village.", "ខ្ញុំសង្ឃឹមថាអ្នកនឹងមិនភ្លេចគ្រួសារ និងភូមិរបស់យើងទេ។"], ["Whatever happens, I promise I [will keep] learning.", "ទោះមានអ្វីកើតឡើងក៏ដោយ ខ្ញុំសន្យាថាខ្ញុំនឹងបន្តរៀនសូត្រ។"]], "q": [["How old is the writer now?", ["15", "17", "27"], 1], ["What exam is the writer going to take?", ["TOEFL", "IELTS", "HSK"], 1], ["What does the writer promise?", ["to keep learning", "to move abroad", "to get rich"], 0]], "write": "សរសេរសំបុត្រ ៨០ ពាក្យទៅកាន់ខ្លួនអ្នកក្នុងរយៈពេល ១០ ឆ្នាំខាងមុខ។"},
 {"lv": "B2", "title": "The Night Market Business", "focus": "Present Perfect Continuous · Causative · Reporting verbs", "lines": [["Mr Heng [has been selling] grilled squid at the night market for fifteen years.", "លោកហេង បានលក់មឹកអាំងនៅផ្សាររាត្រីអស់រយៈពេលដប់ប្រាំឆ្នាំហើយ។"], ["Recently, he [has been experimenting] with new sauces.", "ថ្មីៗនេះ គាត់កំពុងសាកល្បងទឹកជ្រលក់ថ្មីៗ។"], ["Last year he [had his stall redesigned] to attract younger customers.", "កាលពីឆ្នាំមុន គាត់បានឲ្យគេរចនាតូបរបស់គាត់ឡើងវិញ ដើម្បីទាក់ទាញអតិថិជនវ័យក្មេង។"], ["His daughter [persuaded him to accept] payments by QR code.", "កូនស្រីរបស់គាត់បានបញ្ចុះបញ្ចូលគាត់ឲ្យទទួលការទូទាត់តាម QR កូដ។"], ["At first he [refused to change], but sales rose by thirty percent.", "ដំបូងគាត់បដិសេធមិនព្រមផ្លាស់ប្ដូរ ប៉ុន្តែការលក់បានកើនឡើងសាមសិបភាគរយ។"], ["He now [admits being] glad he listened to her.", "ឥឡូវគាត់ទទួលស្គាល់ថាគាត់រីករាយដែលបានស្ដាប់នាង។"]], "q": [["How long has Mr Heng been selling squid?", ["5 years", "15 years", "50 years"], 1], ["Who persuaded him to accept QR payments?", ["his son", "his daughter", "a customer"], 1], ["By how much did sales rise?", ["10%", "30%", "50%"], 1]], "write": "សរសេរ ១២០ ពាក្យអំពីអាជីវកម្មគ្រួសារ ឬអាជីវកម្មក្នុងតំបន់របស់អ្នក។"},
 {"lv": "B2", "title": "Studying Abroad", "focus": "Second Conditional · the more… the more · although", "lines": [["Every year, thousands of Cambodian students apply for scholarships abroad.", "រៀងរាល់ឆ្នាំ សិស្សកម្ពុជារាប់ពាន់នាក់ដាក់ពាក្យសុំអាហារូបករណ៍ទៅបរទេស។"], ["[Although] studying overseas is exciting, it can also be lonely.", "ទោះបីការរៀននៅបរទេសគួរឲ្យរំភើបក៏ដោយ វាក៏អាចធ្វើឲ្យឯកោដែរ។"], ["[The more] you practise the local language, [the faster] you will adapt.", "អ្នកកាន់តែហាត់ភាសាក្នុងស្រុក អ្នកនឹងកាន់តែសម្របខ្លួនបានលឿន។"], ["[If I had] the chance, I [would study] engineering in Japan.", "ប្រសិនបើខ្ញុំមានឱកាស ខ្ញុំនឹងរៀនវិស្វកម្មនៅប្រទេសជប៉ុន។"], ["Many graduates return home and [are] now [contributing] to Cambodia's development.", "និស្សិតបញ្ចប់ការសិក្សាជាច្រើនត្រឡប់មកវិញ ហើយឥឡូវកំពុងចូលរួមអភិវឌ្ឍកម្ពុជា។"], ["[Despite] the challenges, most say the experience changed their lives.", "ទោះបីមានការលំបាកក៏ដោយ ភាគច្រើននិយាយថាបទពិសោធន៍នោះបានផ្លាស់ប្ដូរជីវិតរបស់ពួកគេ។"]], "q": [["What can studying abroad also be?", ["boring", "lonely", "cheap"], 1], ["What helps you adapt faster?", ["practising the local language", "staying in your room", "calling home"], 0], ["Where would the writer study engineering?", ["Korea", "Japan", "France"], 1]], "write": "សរសេរ ១២០ ពាក្យ៖ គុណសម្បត្តិ និងគុណវិបត្តិនៃការទៅរៀននៅបរទេស។"},
 {"lv": "C1", "title": "The Rise of E-Sports", "focus": "Cleft sentences · Participle clauses · Hedging", "lines": [["[Once dismissed] as a waste of time, competitive gaming is now a global industry.", "ដែលធ្លាប់ត្រូវគេចាត់ទុកថាខ្ជះខ្ជាយពេល ការប្រកួតហ្គេមឥឡូវជាឧស្សាហកម្មសកល។"], ["Cambodian teams [have been competing] in regional tournaments since 2019.", "ក្រុមកម្ពុជាបានចូលរួមប្រកួតក្នុងការប្រកួតថ្នាក់តំបន់តាំងពីឆ្នាំ ២០១៩។"], ["[What surprises many parents is] how much discipline top players need.", "អ្វីដែលធ្វើឲ្យឪពុកម្ដាយជាច្រើនភ្ញាក់ផ្អើល គឺកីឡាករកំពូលត្រូវការវិន័យខ្លាំងប៉ុណ្ណា។"], ["[Training] up to ten hours a day, they follow strict diets and sleep schedules.", "ដោយហ្វឹកហាត់រហូតដល់ដប់ម៉ោងក្នុងមួយថ្ងៃ ពួកគេអនុវត្តរបបអាហារ និងកាលវិភាគគេងយ៉ាងតឹងរ៉ឹង។"], ["Critics argue that the industry [tends to overlook] players' mental health.", "អ្នករិះគន់អះអាងថាឧស្សាហកម្មនេះមានទំនោរមើលរំលងសុខភាពផ្លូវចិត្តរបស់កីឡាករ។"], ["[It is] this tension between passion and pressure [that] defines the sport today.", "គឺភាពតានតឹងរវាងចំណង់ចំណូលចិត្ត និងសម្ពាធនេះហើយ ដែលកំណត់អត្តសញ្ញាណកីឡានេះសព្វថ្ងៃ។"]], "q": [["How was competitive gaming once seen?", ["as a real sport", "as a waste of time", "as a job"], 1], ["How long do top players train per day?", ["up to 2 hours", "up to 10 hours", "24 hours"], 1], ["What do critics say the industry overlooks?", ["money", "mental health", "technology"], 1]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យ៖ តើ e-sports គួរត្រូវបានចាត់ទុកជាកីឡាពិតឬទេ?"},
 {"lv": "C1", "title": "Plastic and the Tonle Sap", "focus": "Impersonal passive · Discourse markers · unless", "lines": [["[It is estimated that] Cambodia uses over ten million plastic bags every day.", "គេប៉ាន់ប្រមាណថាកម្ពុជាប្រើថង់ប្លាស្ទិកជាងដប់លានថង់រៀងរាល់ថ្ងៃ។"], ["Much of this waste [is believed to end] up in rivers and the Tonle Sap.", "គេជឿថាកាកសំណល់នេះភាគច្រើនទៅបញ្ចប់នៅក្នុងទន្លេ និងបឹងទន្លេសាប។"], ["Fishermen report that their nets now catch plastic as often as fish; [moreover], floating villages struggle with waste collection.", "អ្នកនេសាទរាយការណ៍ថាសំណាញ់របស់ពួកគេឥឡូវជាប់ប្លាស្ទិកញឹកញាប់ដូចជាប់ត្រី លើសពីនេះ ភូមិបណ្ដែតទឹកជួបការលំបាកក្នុងការប្រមូលសំរាម។"], ["Some markets have introduced a small fee for plastic bags. [Consequently], usage has fallen sharply.", "ផ្សារខ្លះបានដាក់ថ្លៃតិចតួចលើថង់ប្លាស្ទិក។ ជាលទ្ធផល ការប្រើប្រាស់បានធ្លាក់ចុះយ៉ាងខ្លាំង។"], ["[Unless] such measures are adopted nationwide, the lake's ecosystem will continue to suffer.", "លុះត្រាតែវិធានការបែបនេះត្រូវបានអនុវត្តទូទាំងប្រទេស បើមិនដូច្នោះទេ ប្រព័ន្ធអេកូឡូស៊ីនៃបឹងនឹងបន្តរងគ្រោះ។"]], "q": [["How many plastic bags does Cambodia use daily?", ["over 1 million", "over 10 million", "over 100 million"], 1], ["What happened after markets introduced a fee?", ["Usage fell sharply.", "Usage rose.", "Nothing changed."], 0], ["What must happen to protect the lake?", ["measures adopted nationwide", "more fishing", "fewer markets"], 0]], "write": "សរសេរអត្ថបទ ១៥០ ពាក្យស្នើដំណោះស្រាយកាត់បន្ថយប្លាស្ទិក ដោយប្រើ furthermore និង unless។"},
 {"lv": "C2", "title": "The Art of Translation", "focus": "Inversion · Nominalisation · as if", "lines": [["[The translation] of poetry is often described as an impossible task.", "ការបកប្រែកំណាព្យច្រើនត្រូវបានពិពណ៌នាថាជាភារកិច្ចដែលមិនអាចទៅរួច។"], ["[Seldom does] a single word in Khmer [have] an exact equivalent in English.", "កម្រណាស់ដែលពាក្យខ្មែរមួយមានពាក្យអង់គ្លេសដែលស្មើគ្នាទាំងស្រុង។"], ["A skilled translator writes [as if she were] the original author.", "អ្នកបកប្រែជំនាញសរសេរដូចជានាងជាអ្នកនិពន្ធដើម។"], ["[Not only must] she [convey] meaning, but she must also preserve rhythm and tone.", "នាងមិនត្រឹមតែត្រូវបញ្ជូនអត្ថន័យប៉ុណ្ណោះទេ ប៉ុន្តែត្រូវរក្សាចង្វាក់ និងសំនៀងផងដែរ។"], ["[The loss] of nuance is inevitable; [the challenge] lies in minimising it.", "ការបាត់បង់ភាពល្អិតល្អន់មិនអាចជៀសវាងបាន បញ្ហាប្រឈមគឺការកាត់បន្ថយវា។"], ["[Only through] years of reading in both languages [does] this instinct [develop].", "មានតែតាមរយៈការអានជាច្រើនឆ្នាំក្នុងភាសាទាំងពីរប៉ុណ្ណោះ ទើបសភាវគតិនេះអភិវឌ្ឍឡើង។"]], "q": [["How is poetry translation often described?", ["easy", "impossible", "boring"], 1], ["How does a skilled translator write?", ["as if she were the original author", "word by word", "quickly"], 0], ["How does the translator's instinct develop?", ["through years of reading", "through apps", "overnight"], 0]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យ៖ ហេតុអ្វីការបកប្រែល្អជាសិល្បៈ មិនមែនគ្រាន់តែជាបច្ចេកទេស?"},
 {"lv": "C2", "title": "Silence in a Noisy World", "focus": "Fronting · Pseudo-cleft · It's high time", "lines": [["Car horns, karaoke and notifications: [rarely is] a Cambodian city truly quiet.", "ស៊ីផ្លេឡាន ខារ៉ាអូខេ និងការជូនដំណឹង៖ កម្រណាស់ដែលទីក្រុងនៅកម្ពុជាស្ងប់ស្ងាត់ពិតប្រាកដ។"], ["[What we lose in the noise is] the ability to think deeply.", "អ្វីដែលយើងបាត់បង់ក្នុងភាពអ៊ូអរ គឺសមត្ថភាពក្នុងការគិតឲ្យស៊ីជម្រៅ។"], ["[Precious though silence is], few of us seek it deliberately.", "ទោះបីភាពស្ងប់ស្ងាត់មានតម្លៃក៏ដោយ យើងតិចណាស់ដែលស្វែងរកវាដោយចេតនា។"], ["Monks [would] traditionally [spend] hours in meditation before dawn.", "ព្រះសង្ឃតាមប្រពៃណីតែងចំណាយពេលរាប់ម៉ោងសមាធិមុនថ្ងៃរះ។"], ["[All it takes is] ten minutes a day without a screen.", "អ្វីដែលត្រូវការគ្រាន់តែដប់នាទីក្នុងមួយថ្ងៃដោយគ្មានអេក្រង់។"], ["[It's high time we treated] quiet not as emptiness, but as nourishment.", "ដល់ពេលយូរហើយ ដែលយើងគួរចាត់ទុកភាពស្ងប់ស្ងាត់មិនមែនជាភាពទទេ ប៉ុន្តែជាអាហារសម្រាប់ចិត្ត។"]], "q": [["What do we lose in the noise according to the writer?", ["money", "the ability to think deeply", "friends"], 1], ["What did monks traditionally do before dawn?", ["sleep", "meditate", "work"], 1], ["How much quiet time does the writer suggest?", ["ten minutes a day", "one hour a day", "a whole day"], 0]], "write": "សរសេរអត្ថបទ ២០០ ពាក្យ៖ តើមនុស្សសម័យទំនើបត្រូវការភាពស្ងប់ស្ងាត់ច្រើនជាងនេះដែរឬទេ?"}
);

XC.conversations = [
 {title:"Meeting a new friend",kh:"ជួបមិត្តថ្មី",lv:"A1",who:["Sokha","Linda"],lines:[
  [0,"Hi! My name is Sokha. What's your name?","សួស្ដី! ខ្ញុំឈ្មោះសុខា។ តើអ្នកឈ្មោះអ្វី?"],
  [1,"Hello, Sokha. I'm Linda. Nice to meet you.","សួស្ដី សុខា។ ខ្ញុំឈ្មោះលីនដា។ រីករាយដែលបានជួប។"],
  [0,"Nice to meet you too. Where are you from?","ខ្ញុំក៏រីករាយដែរ។ តើអ្នកមកពីណា?"],
  [1,"I'm from Australia. I came to Cambodia last month.","ខ្ញុំមកពីអូស្ត្រាលី។ ខ្ញុំបានមកកម្ពុជាកាលពីខែមុន។"],
  [0,"Welcome! Do you like Khmer food?","សូមស្វាគមន៍! តើអ្នកចូលចិត្តម្ហូបខ្មែរទេ?"],
  [1,"Yes, I love amok!","ចាស ខ្ញុំចូលចិត្តអាម៉ុកខ្លាំងណាស់!"]]},
 {title:"At the market",kh:"នៅផ្សារ",lv:"A1",who:["Customer","Seller"],lines:[
  [0,"Excuse me, how much are these mangoes?","សុំទោស តើស្វាយទាំងនេះតម្លៃប៉ុន្មាន?"],
  [1,"Five thousand riel per kilo.","ប្រាំពាន់រៀលក្នុងមួយគីឡូ។"],
  [0,"Can you give me a discount?","តើអាចចុះតម្លៃឲ្យបានទេ?"],
  [1,"OK, four thousand five hundred.","អូខេ បួនពាន់ប្រាំរយ។"],
  [0,"Great. I'll take two kilos, please.","ល្អណាស់។ ខ្ញុំយកពីរគីឡូ។"],
  [1,"Here you are. Thank you!","នេះណា។ អរគុណ!"]]},
 {title:"At a restaurant",kh:"នៅភោជនីយដ្ឋាន",lv:"A2",who:["Guest","Waiter"],lines:[
  [0,"Good evening. A table for two, please.","សួស្ដីពេលល្ងាច។ សុំតុសម្រាប់ពីរនាក់។"],
  [1,"Of course. Please follow me. Here is the menu.","បាទ សូមអញ្ជើញតាមខ្ញុំ។ នេះជាម៉ឺនុយ។"],
  [0,"What do you recommend?","តើអ្នកណែនាំម្ហូបអ្វី?"],
  [1,"Our fish amok is very popular.","អាម៉ុកត្រីរបស់យើងពេញនិយមណាស់។"],
  [0,"Great, we'll have two amoks and two iced teas.","ល្អណាស់ យើងយកអាម៉ុកពីរ និងតែទឹកកកពីរ។"],
  [1,"Anything else?","ត្រូវការអ្វីទៀតទេ?"],
  [0,"No, thank you. Could we have the bill later?","អត់ទេ អរគុណ។ ចាំគិតលុយពេលក្រោយបានទេ?"]]},
 {title:"Job interview",kh:"សម្ភាសន៍ការងារ",lv:"B1",who:["Manager","Rithy"],lines:[
  [0,"Thank you for coming. Can you tell me about yourself?","អរគុណដែលបានមក។ តើអ្នកអាចប្រាប់អំពីខ្លួនអ្នកបានទេ?"],
  [1,"Sure. My name is Rithy. I graduated in IT last year.","បាទ។ ខ្ញុំឈ្មោះរិទ្ធី។ ខ្ញុំបានបញ្ចប់ការសិក្សាផ្នែក IT កាលពីឆ្នាំមុន។"],
  [0,"Why do you want to work here?","ហេតុអ្វីអ្នកចង់ធ្វើការនៅទីនេះ?"],
  [1,"Your company builds apps that help people, and I want to improve my skills.","ក្រុមហ៊ុនរបស់អ្នកបង្កើត app ដែលជួយមនុស្ស ហើយខ្ញុំចង់អភិវឌ្ឍជំនាញរបស់ខ្ញុំ។"],
  [0,"What are your strengths?","តើចំណុចខ្លាំងរបស់អ្នកមានអ្វីខ្លះ?"],
  [1,"I learn quickly, and I work well in a team.","ខ្ញុំរៀនលឿន ហើយធ្វើការជាក្រុមបានល្អ។"],
  [0,"Great. We will contact you next week.","ល្អណាស់។ យើងនឹងទាក់ទងអ្នកនៅសប្ដាហ៍ក្រោយ។"]]}
];
