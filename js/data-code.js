/* xCenbar Learning — Code / IT data
   Lesson: {t: title, kh: Khmer explanation, code, out: expected output, q: [question, options, answer], video: "" }
   To add a lesson video, put a YouTube embed link in video, e.g. "https://www.youtube.com/embed/VIDEO_ID" */
window.XC = window.XC || {};
const R = String.raw;

XC.codeTracks = [
 {id:"python",name:"Python",ic:"Py",desc:"ងាយរៀនបំផុត · AI · ទិន្នន័យ · ស្វ័យប្រវត្តិកម្ម",lessons:[
  {t:"Hello, World! (print)",kh:"print() ប្រើសម្រាប់បង្ហាញអក្សរលើអេក្រង់។ អក្សរ (string) ត្រូវដាក់ក្នុងសញ្ញា \" \" ឬ ' '។",
   code:R`print("Hello, World!")
print("សួស្ដី កម្ពុជា")`,out:"Hello, World!\nសួស្ដី កម្ពុជា",q:["តើ function មួយណាបង្ហាញអក្សរក្នុង Python?",["echo()","print()","show()"],1]},
  {t:"Variables និងប្រភេទទិន្នន័យ",kh:"Variable ជាប្រអប់សម្រាប់ផ្ទុកទិន្នន័យ។ Python កំណត់ប្រភេទដោយស្វ័យប្រវត្តិ៖ str (អក្សរ), int (ចំនួនគត់), float (ទសភាគ), bool (True/False)។",
   code:R`name = "Dara"
age = 18
height = 1.70
print(name, "is", age, "years old")`,out:"Dara is 18 years old",q:["តើ age = 18 ជាប្រភេទទិន្នន័យអ្វី?",["str","int","float"],1]},
  {t:"if / elif / else",kh:"if ប្រើសម្រាប់សម្រេចចិត្តតាមលក្ខខណ្ឌ។ Python ប្រើការចូលបន្ទាត់ (indentation) ៤ ដកឃ្លា ដើម្បីកំណត់ block កូដ។",
   code:R`score = 75
if score >= 80:
    print("Grade A")
elif score >= 50:
    print("Pass")
else:
    print("Fail")`,out:"Pass",q:["តើ Python ប្រើអ្វីដើម្បីកំណត់ block កូដ?",["{ }","Indentation (ការចូលបន្ទាត់)","begin / end"],1]},
  {t:"for loop និង range()",kh:"for loop ប្រើសម្រាប់ធ្វើការងារដដែលៗ។ range(1, 4) ផ្ដល់លេខ 1, 2, 3 (មិនរួមលេខចុងក្រោយ)។",
   code:R`for i in range(1, 4):
    print("Lesson", i)`,out:"Lesson 1\nLesson 2\nLesson 3",q:["range(3) ផ្ដល់លេខអ្វីខ្លះ?",["1, 2, 3","0, 1, 2","0, 1, 2, 3"],1]},
  {t:"List",kh:"List ផ្ទុកទិន្នន័យច្រើនក្នុង variable មួយ។ លេខរៀង (index) ចាប់ផ្ដើមពី 0។ append() បន្ថែមធាតុថ្មី។",
   code:R`fruits = ["mango", "banana"]
fruits.append("durian")
print(fruits[0])
print(len(fruits))`,out:"mango\n3",q:["fruits[0] គឺធាតុទីប៉ុន្មាន?",["ទីមួយ","ទីពីរ","ចុងក្រោយ"],0]},
  {t:"Functions",kh:"Function ជាកូដដែលអាចប្រើឡើងវិញបាន។ ប្រើពាក្យ def ដើម្បីបង្កើត ហើយ return ដើម្បីបញ្ជូនលទ្ធផលត្រឡប់។",
   code:R`def greet(name):
    return "Hello, " + name

print(greet("Sokha"))`,out:"Hello, Sokha",q:["ពាក្យមួយណាបង្កើត function ក្នុង Python?",["function","def","func"],1]}]},

 {id:"c",name:"C / C++",ic:"C",desc:"មូលដ្ឋានកម្មវិធី · ហ្គេម · ឧបករណ៍អេឡិចត្រូនិក",lessons:[
  {t:"Hello, World! ក្នុង C",kh:"កម្មវិធី C ចាប់ផ្ដើមពី main()។ printf() បង្ហាញអក្សរ។ \\n មានន័យថាចុះបន្ទាត់។ ប្រយោគនីមួយៗបញ្ចប់ដោយ ;",
   code:R`#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}`,out:"Hello, World!",q:["កម្មវិធី C ចាប់ផ្ដើមពី function មួយណា?",["start()","main()","run()"],1]},
  {t:"Variables ក្នុង C",kh:"C ត្រូវប្រកាសប្រភេទមុន៖ int (ចំនួនគត់), float (ទសភាគ), char (តួអក្សរមួយ)។ %d %f %c ប្រើក្នុង printf ដើម្បីបង្ហាញតម្លៃ។",
   code:R`int age = 18;
float price = 2.5;
char grade = 'A';
printf("%d %.1f %c\n", age, price, grade);`,out:"18 2.5 A",q:["ប្រភេទមួយណាសម្រាប់ចំនួនគត់?",["float","int","char"],1]},
  {t:"C++: cout និង if",kh:"C++ ប្រើ cout << ដើម្បីបង្ហាញ។ លក្ខខណ្ឌ if ដាក់ក្នុងវង់ក្រចក ( )។",
   code:R`#include <iostream>
using namespace std;

int main() {
    int score = 40;
    if (score >= 50) cout << "Pass";
    else cout << "Fail";
}`,out:"Fail",q:["C++ ប្រើអ្វីដើម្បីបង្ហាញលទ្ធផល?",["print","cout <<","echo"],1]},
  {t:"for loop",kh:"for loop មាន ៣ ផ្នែក៖ ចាប់ផ្ដើម ; លក្ខខណ្ឌ ; ការកើនឡើង។ i++ មានន័យថា i = i + 1។",
   code:R`for (int i = 1; i <= 3; i++) {
    cout << i << " ";
}`,out:"1 2 3",q:["i++ មានន័យថាអ្វី?",["i = i + 1","i = i * 2","i = 0"],0]},
  {t:"Functions",kh:"Function ក្នុង C/C++ ត្រូវប្រាប់ប្រភេទលទ្ធផល (int, void…) និងប្រភេទ parameter។",
   code:R`int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(3, 4);
}`,out:"7",q:["add(3, 4) បង្ហាញអ្វី?",["34","7","12"],1]}]},

 {id:"csharp",name:"C#",ic:"C#",desc:"ហ្គេម Unity · កម្មវិធី Windows · .NET",lessons:[
  {t:"Hello, World!",kh:"C# ប្រើ Console.WriteLine() ដើម្បីបង្ហាញអក្សរ ហើយចុះបន្ទាត់។ ពេញនិយមសម្រាប់ហ្គេម Unity។",
   code:R`Console.WriteLine("Hello, World!");`,out:"Hello, World!",q:["C# ជាភាសាសំខាន់សម្រាប់ game engine មួយណា?",["Unity","Photoshop","WordPress"],0]},
  {t:"Variables និង String interpolation",kh:"សញ្ញា $ ពីមុខ string អនុញ្ញាតឲ្យដាក់ variable ក្នុង { } ដោយផ្ទាល់។",
   code:R`string name = "Dara";
int age = 20;
Console.WriteLine($"{name} is {age}");`,out:"Dara is 20",q:["$\"{name}\" ហៅថាអ្វី?",["String interpolation","Comment","Loop"],0]},
  {t:"if / else",kh:"if ពិនិត្យលក្ខខណ្ឌ។ បើពិត ធ្វើ block ទីមួយ បើមិនពិត ធ្វើ else។",
   code:R`int temp = 35;
if (temp > 30)
    Console.WriteLine("Hot");
else
    Console.WriteLine("Cool");`,out:"Hot",q:["បើ temp = 20 នឹងបង្ហាញអ្វី?",["Hot","Cool","Error"],1]},
  {t:"Array និង foreach",kh:"foreach ដើរកាត់គ្រប់ធាតុក្នុង array ម្ដងមួយៗ។",
   code:R`string[] fruits = { "mango", "banana", "durian" };
foreach (string f in fruits)
    Console.WriteLine(f);`,out:"mango\nbanana\ndurian",q:["foreach ប្រើជាមួយអ្វី?",["Array / List","លេខតែមួយ","Comment"],0]},
  {t:"Methods",kh:"Method (function) ក្នុង C# ប្រាប់ប្រភេទលទ្ធផល ហើយអាចហៅប្រើបានច្រើនដង។",
   code:R`static int Square(int x) {
    return x * x;
}
Console.WriteLine(Square(5));`,out:"25",q:["Square(5) = ?",["10","25","55"],1]}]},

 {id:"php",name:"PHP",ic:"PHP",desc:"ផ្នែកខាងក្រោយវេបសាយ · WordPress · Laravel",lessons:[
  {t:"Hello, World!",kh:"PHP ដំណើរការនៅលើ server ហើយសរសេរនៅក្នុង <?php ... ?>។ echo បង្ហាញអក្សរ។",
   code:R`<?php
echo "Hello, World!";
?>`,out:"Hello, World!",q:["PHP ដំណើរការនៅឯណា?",["Server","Printer","កាមេរ៉ាទូរស័ព្ទ"],0]},
  {t:"Variables",kh:"Variable ក្នុង PHP ចាប់ផ្ដើមដោយសញ្ញា $។ ក្នុង \" \" PHP ដាក់តម្លៃ variable ចូលដោយស្វ័យប្រវត្តិ។",
   code:R`<?php
$name = "Sokha";
$age = 22;
echo "$name is $age years old";
?>`,out:"Sokha is 22 years old",q:["Variable ក្នុង PHP ចាប់ផ្ដើមដោយ?",["#","$","@"],1]},
  {t:"if / else",kh:"លក្ខខណ្ឌ if ក្នុង PHP ស្រដៀង C និង JavaScript។",
   code:R`<?php
$hour = 9;
if ($hour < 12) {
    echo "Good morning";
} else {
    echo "Good afternoon";
}
?>`,out:"Good morning",q:["បើ $hour = 15 នឹងបង្ហាញអ្វី?",["Good morning","Good afternoon","Error"],1]},
  {t:"Array និង foreach",kh:"សញ្ញា . ប្រើសម្រាប់ភ្ជាប់អក្សរ (concatenation) ក្នុង PHP។",
   code:R`<?php
$colors = ["red", "green", "blue"];
foreach ($colors as $c) {
    echo $c . " ";
}
?>`,out:"red green blue",q:["PHP ប្រើសញ្ញាអ្វីភ្ជាប់អក្សរ?",["+",".","&"],1]},
  {t:"Functions",kh:"បង្កើត function ដោយពាក្យ function។ ឧទាហរណ៍នេះបម្លែងដុល្លារទៅរៀល។",
   code:R`<?php
function toRiel($usd) {
    return $usd * 4100;
}
echo toRiel(5) . " riel";
?>`,out:"20500 riel",q:["toRiel(2) = ?",["8200","4102","2"],0]}]},

 {id:"sql",name:"SQL",ic:"SQL",desc:"មូលដ្ឋានទិន្នន័យ · MySQL · PostgreSQL",lessons:[
  {t:"SELECT",kh:"SQL ប្រើសម្រាប់ទាញ និងគ្រប់គ្រងទិន្នន័យក្នុង database។ SELECT ជ្រើសរើស column ពី table។",
   code:R`SELECT name, age FROM students;`,out:"name   | age\nDara   | 18\nSreyna | 17\nVanna  | 19",q:["ពាក្យមួយណាទាញទិន្នន័យ?",["GET","SELECT","PULL"],1]},
  {t:"WHERE",kh:"WHERE ច្រោះយកតែជួរដែលត្រូវលក្ខខណ្ឌ។ * មានន័យថាគ្រប់ column។",
   code:R`SELECT * FROM students
WHERE age >= 18;`,out:"id | name  | age\n1  | Dara  | 18\n3  | Vanna | 19",q:["* ក្នុង SELECT * មានន័យថា?",["គ្រប់ column","គ្មាន column","column ទីមួយ"],0]},
  {t:"INSERT",kh:"INSERT INTO បន្ថែមទិន្នន័យថ្មីទៅក្នុង table។",
   code:R`INSERT INTO students (name, age)
VALUES ('Pisey', 16);`,out:"1 row inserted.",q:["ដើម្បីបន្ថែមជួរថ្មី ប្រើ?",["ADD","INSERT INTO","PUT"],1]},
  {t:"UPDATE និង DELETE",kh:"UPDATE កែទិន្នន័យ DELETE លុបទិន្នន័យ។ កុំភ្លេច WHERE បើមិនដូច្នោះទេ វានឹងប៉ះពាល់គ្រប់ជួរ!",
   code:R`UPDATE students SET age = 20
WHERE name = 'Vanna';

DELETE FROM students WHERE age < 10;`,out:"1 row updated.\n0 rows deleted.",q:["UPDATE ដោយគ្មាន WHERE នឹង?",["កែគ្រប់ជួរ","មិនធ្វើអ្វី","កែតែជួរទីមួយ"],0]},
  {t:"COUNT និង ORDER BY",kh:"COUNT(*) រាប់ចំនួនជួរ។ ORDER BY តម្រៀប ASC (តូច→ធំ) ឬ DESC (ធំ→តូច)។",
   code:R`SELECT COUNT(*) FROM students;
SELECT name FROM students ORDER BY age DESC;`,out:"3\nVanna\nDara\nSreyna",q:["DESC មានន័យថា?",["តម្រៀបពីធំទៅតូច","តម្រៀបពីតូចទៅធំ","លុប"],0]}]},

 {id:"java",name:"Java / Kotlin",ic:"Kt",desc:"App Android · កម្មវិធីក្រុមហ៊ុនធំៗ",lessons:[
  {t:"Hello, World! ក្នុង Java",kh:"Java ត្រូវមាន class និង main()។ System.out.println() បង្ហាញអក្សរ។",
   code:R`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,out:"Hello, World!",q:["Java បង្ហាញអក្សរដោយ?",["System.out.println()","print()","echo"],0]},
  {t:"Kotlin: val និង var",kh:"Kotlin ជាភាសាផ្លូវការសម្រាប់ Android។ val = មិនអាចប្ដូរតម្លៃ, var = អាចប្ដូរតម្លៃបាន។",
   code:R`fun main() {
    val name = "Dara"
    var score = 80
    score += 5
    println("$name: $score")
}`,out:"Dara: 85",q:["Variable មួយណាអាចប្ដូរតម្លៃបាន?",["val","var","const"],1]},
  {t:"Java: if / else",kh:"លក្ខខណ្ឌក្នុង Java ដាក់ក្នុង ( ) ហើយកូដក្នុង { }។",
   code:R`int age = 16;
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Teen");
}`,out:"Teen",q:["បើ age = 20 នឹងបង្ហាញ?",["Adult","Teen","Error"],0]},
  {t:"Kotlin: for loop និង range",kh:"1..3 ជា range ពី 1 ដល់ 3 (រួមទាំង 3)។",
   code:R`for (i in 1..3) {
    println("Step $i")
}`,out:"Step 1\nStep 2\nStep 3",q:["1..5 មានប៉ុន្មានលេខ?",["4","5","6"],1]},
  {t:"Kotlin: Functions",kh:"បង្កើត function ដោយពាក្យ fun ហើយប្រាប់ប្រភេទ parameter និងលទ្ធផល។",
   code:R`fun area(w: Int, h: Int): Int {
    return w * h
}

fun main() {
    println(area(4, 5))
}`,out:"20",q:["area(4, 5) = ?",["9","20","45"],1]}]},

 {id:"js",name:"JavaScript",ic:"JS",run:"js",desc:"វេបសាយមានអន្តរកម្ម · Web App · Node.js",lessons:[
  {t:"console.log()",kh:"JavaScript ដំណើរការនៅក្នុង browser។ console.log() បង្ហាញលទ្ធផល។ សាកកែកូដ ហើយចុច «ដំណើរការ»!",
   code:R`console.log("Hello, World!");
console.log(2 + 3);`,out:"Hello, World!\n5",q:["JavaScript ដំណើរការភាគច្រើននៅ?",["Browser","Printer","Excel"],0]},
  {t:"let និង const",kh:"let អាចប្ដូរតម្លៃបាន const មិនអាចប្ដូរ។ សញ្ញា + ភ្ជាប់អក្សរ។",
   code:R`let name = "Sokha";
const year = 2026;
name = "Sokha Chan";
console.log(name + " - " + year);`,out:"Sokha Chan - 2026",q:["Variable មួយណាមិនអាចប្ដូរតម្លៃ?",["let","var","const"],2]},
  {t:"if / else if / else",kh:"ពិនិត្យលក្ខខណ្ឌពីលើចុះក្រោម ហើយធ្វើ block ដំបូងដែលពិត។",
   code:R`let score = 85;
if (score >= 80) {
  console.log("A");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}`,out:"A",q:["បើ score = 60 នឹងបង្ហាញ?",["A","Pass","Fail"],1]},
  {t:"Array និង for…of",kh:"Array ផ្ទុកទិន្នន័យជាបញ្ជី។ for…of ដើរកាត់ធាតុម្ដងមួយៗ។ .length ប្រាប់ចំនួនធាតុ។",
   code:R`const fruits = ["mango", "jackfruit", "durian"];
for (const f of fruits) {
  console.log("I like " + f);
}
console.log(fruits.length);`,out:"I like mango\nI like jackfruit\nI like durian\n3",q:["fruits.length = ?",["2","3","4"],1]},
  {t:"Functions",kh:"Function អាចសរសេរពីររបៀប៖ function ធម្មតា ឬ arrow function (=>)។",
   code:R`function toRiel(usd) {
  return usd * 4100;
}
const double = n => n * 2;
console.log(toRiel(10));
console.log(double(21));`,out:"41000\n42",q:["toRiel(1) = ?",["4100","41","410"],0]}]},

 {id:"html",name:"HTML / CSS",ic:"</>",run:"html",desc:"រចនាសម្ព័ន្ធ និងរូបរាងវេបសាយ",lessons:[
  {t:"HTML Tags ដំបូង",kh:"HTML ប្រើ tag ដូចជា <h1> (ចំណងជើង) និង <p> (កថាខណ្ឌ)។ tag ភាគច្រើនមានបើក <p> និងបិទ </p>។ ចុច «ដំណើរការ» ដើម្បីមើលលទ្ធផល។",
   code:R`<h1>សួស្ដី!</h1>
<p>នេះជាវេបសាយដំបូងរបស់ខ្ញុំ។</p>`,out:"(មើលលទ្ធផលនៅប្រអប់ខាងក្រោម)",q:["Tag មួយណាសម្រាប់ចំណងជើងធំបំផុត?",["<h1>","<h6>","<p>"],0]},
  {t:"Links និង Lists",kh:"<a> បង្កើតតំណភ្ជាប់។ <ul> និង <li> បង្កើតបញ្ជី។",
   code:R`<a href="https://www.google.com" target="_blank">ទៅ Google</a>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,out:"(មើលលទ្ធផលនៅប្រអប់ខាងក្រោម)",q:["Tag មួយណាបង្កើតតំណភ្ជាប់?",["<link>","<a>","<url>"],1]},
  {t:"CSS ដំបូង",kh:"CSS កំណត់រូបរាង៖ selector { property: value; }",
   code:R`<style>
  h1 { color: tomato; }
  p { font-size: 20px; color: teal; }
</style>
<h1>CSS ធ្វើឲ្យស្អាត</h1>
<p>ពណ៌ និងទំហំអក្សរ</p>`,out:"(មើលលទ្ធផលនៅប្រអប់ខាងក្រោម)",q:["Property មួយណាប្ដូរពណ៌អក្សរ?",["color","background","font"],0]},
  {t:"Box Model",kh:"គ្រប់ធាតុជាប្រអប់៖ content → padding → border → margin។",
   code:R`<style>
  .card { padding: 16px; margin: 10px;
          border: 2px solid teal; border-radius: 12px; }
</style>
<div class="card">Padding · Border · Margin</div>`,out:"(មើលលទ្ធផលនៅប្រអប់ខាងក្រោម)",q:["ចន្លោះនៅខាងក្នុង border ហៅថា?",["margin","padding","gap"],1]},
  {t:"Flexbox",kh:"display: flex រៀបធាតុជាជួរដេក។ gap កំណត់ចន្លោះរវាងធាតុ។",
   code:R`<style>
  .row { display: flex; gap: 10px; }
  .row div { background: gold; padding: 20px;
             flex: 1; text-align: center; }
</style>
<div class="row"><div>1</div><div>2</div><div>3</div></div>`,out:"(មើលលទ្ធផលនៅប្រអប់ខាងក្រោម)",q:["display: flex រៀបធាតុជា?",["ជួរដេក (row)","ជួរឈរតែប៉ុណ្ណោះ","លាក់"],0]}]}
];

/* Homework: 30 tasks for general programming languages */
XC.homeworkGeneral = [
 "បង្ហាញឈ្មោះ និងអាយុរបស់អ្នកលើអេក្រង់។","បង្កើត variable ៣ (ឈ្មោះ អាយុ ទីក្រុង) ហើយបង្ហាញវា។","គណនាផលបូក ផលដក ផលគុណ និងផលចែក នៃលេខពីរ។",
 "បម្លែងដុល្លារទៅជារៀល (1 USD = 4100 រៀល)។","គណនាផ្ទៃក្រឡាចតុកោណកែង។","ពិនិត្យថាលេខមួយជាលេខគូ ឬលេខសេស។",
 "ពិនិត្យថាអ្នកប្រើពេញវ័យ (អាយុ ≥ 18) ឬអត់។","ផ្ដល់និទ្ទេស A–F តាមពិន្ទុ។","រកលេខធំបំផុតក្នុងចំណោមលេខបី។",
 "បង្ហាញលេខ 1 ដល់ 100។","បង្ហាញតារាងគុណនៃលេខ 7។","គណនាផលបូកពី 1 ដល់ 100។",
 "បង្ហាញតែលេខគូពី 1 ដល់ 50។","រាប់ចំនួនតួអក្សរក្នុងពាក្យមួយ។","បញ្ច្រាសពាក្យមួយ (hello → olleh)។",
 "បង្កើតបញ្ជីផ្លែឈើ ៥ ហើយបង្ហាញម្ដងមួយៗ។","រកលេខធំបំផុត និងតូចបំផុតក្នុងបញ្ជី។","គណនាមធ្យមភាគនៃពិន្ទុក្នុងបញ្ជី។",
 "សរសេរ function បូកលេខពីរ។","សរសេរ function ពិនិត្យលេខបឋម (prime number)។","សរសេរ function គណនា factorial (5! = 120)។",
 "បង្កើតហ្គេមទាយលេខ (1–10)។","បង្កើតម៉ាស៊ីនគិតលេខសាមញ្ញ (+ − × ÷)។","ពិនិត្យថាពាក្យមួយជា palindrome (ឧ. level)។",
 "រាប់ចំនួនស្រៈ (a, e, i, o, u) ក្នុងប្រយោគ។","FizzBuzz ពី 1 ដល់ 30។","រក្សាទុកព័ត៌មានសិស្ស (ឈ្មោះ ពិន្ទុ) ហើយបង្ហាញសិស្សពិន្ទុខ្ពស់បំផុត។",
 "តម្រៀបបញ្ជីលេខពីតូចទៅធំ។","បង្កើតកម្មវិធីបញ្ជីការងារ (to-do) ដែលអាចបន្ថែម និងលុប។","គម្រោងតូច៖ ប្រព័ន្ធគ្រប់គ្រងពិន្ទុសិស្ស ដោយប្រើអ្វីដែលបានរៀនទាំងអស់។"];
XC.homeworkSQL = [
 "បង្កើត table students (id, name, age, score)។","បញ្ចូលសិស្ស ៥ នាក់។","បង្ហាញសិស្សទាំងអស់។","បង្ហាញតែឈ្មោះសិស្ស។",
 "បង្ហាញសិស្សអាយុលើស 18។","តម្រៀបសិស្សតាមពិន្ទុពីខ្ពស់ទៅទាប។","រាប់ចំនួនសិស្ស។","គណនាមធ្យមភាគពិន្ទុ (AVG)។",
 "រកពិន្ទុខ្ពស់បំផុត (MAX)។","កែពិន្ទុសិស្សម្នាក់ (UPDATE)។","លុបសិស្សម្នាក់ (DELETE)។","ស្វែងរកឈ្មោះចាប់ផ្ដើមដោយ S (LIKE 'S%')។",
 "បង្កើត table classes ហើយភ្ជាប់ដោយ JOIN។","រាប់សិស្សតាមថ្នាក់ (GROUP BY)។","គម្រោង៖ database បណ្ណាល័យ (សៀវភៅ អ្នកខ្ចី ការខ្ចី)។"];
XC.homeworkHTML = [
 "ទំព័រ «អំពីខ្ញុំ» មានចំណងជើង និងកថាខណ្ឌ។","បញ្ជីម្ហូបដែលអ្នកចូលចិត្ត (<ul>)។","ដាក់រូបភាព (<img>) ជាមួយ alt។","តំណភ្ជាប់ ៣ ទៅវេបសាយផ្សេងៗ។",
 "តារាងកាលវិភាគរៀន (<table>)។","Form ចុះឈ្មោះ (ឈ្មោះ អ៊ីមែល ពាក្យសម្ងាត់)។","ប្ដូរពណ៌ និងពុម្ពអក្សរដោយ CSS។","កាតព័ត៌មានដោយប្រើ Box Model។",
 "ម៉ឺនុយ navigation ដោយ Flexbox។","Grid រូបភាព ៦ ដោយ CSS Grid។","ប៊ូតុងដែលប្ដូរពណ៌ពេល hover។","ទំព័រដែលស្អាតលើទូរស័ព្ទ (media query)។",
 "Landing page ហាងកាហ្វេ។","Portfolio ទំព័រមួយ។","គម្រោង៖ វេបសាយ ៣ ទំព័រ (Home, About, Contact)។"];
