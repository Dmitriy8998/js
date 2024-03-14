const word_1 = 'Hello';
const word_2 = 'World';
const word_3 = 'first';
const word_4 = 'second';
const word_5 = 'backtick';
const word_6 = 'new';
const num_1 = 1.0267;
const bool_1 = true;

// Some changes

// Some changes 2

// Some cheanges 3 (new)

// Some change 4 (add diveloper branch)

// Some change 5 (child branch)

/*******************************************ВЫВОД СТРОК И СИМВОЛОВ В КОНСОЛЬ***********************************************/
/*первый тип строк (вывод строки целеком)*/
console.log('Hello World new');
console.log('Hello World ' + 'Hello World');

/*второй тип строк (вывод по формату переменной или константы, может быть несколько как в С++, например %d, %u, %f, и другие...)*/
console.log('%s %s', word_1, word_2); // ссылки (%s) на переменные
console.log('Hello' + '%s' + '%s',word_2, word_3); // + это знак канкатинирования, без пробелов
console.log('Hello ' + '%s ' + '%s ', word_2, word_4); //знак канкатинирования + (теперь как надо)
console.log('%f', num_1); //с плавающей точкой (%f)

/*третий тип строк (с помощью шаблонов backtick)*/
console.log(`${word_1},${word_2},${word_5}`); //ЭТО НЕ КОВЫЧКИ, ЭТО ТИЛЬДА ИЛИ 'Ё'

/*смешанный тип (со знаками канкатинации)*/
console.log(`${word_1}` + ' %s ' + ' new number ' + ' %f ', word_2, num_1);
console.log(`${word_1} big ${word_6} ${word_2} !!!`);
console.log(`12345`); //так тоже работает, и так проще
console.log(`experiment for bool = ${!bool_1}`);
/**************************************************************************************************************************/

/******************************************************var let const*******************************************************/

//var - функциональная и блочная область видимости, имеет механизм поднятия
//проще - область видимости из блока в функцию из функии в блок + механизм поднятия

//let - блочная область видимости, механизм поднятия не действует
//проще - из функции в блок, из блока в функцию никак - механизм поднятия

//const - только для чтения значений,имеет свойства такие же как и у объявления let

//ФУНКЦИЯ ТОЖЕ ЯВЛЯЕТСЯ БЛОКОМ!!! БЛОК ОПРЕДЕЛЯЕТСЯ {}

console.log('\n--------------------------var-let-const--------------------------------------\n');

//var
var var_1 = 'TEST_var_1';

function function_var_1() {
    var var_funkt = 'TEST_var_funkt';
    console.log(var_1);

    if(true) {
        console.log(var_blok); //undefined т.к. объявлена позже, однако происходит поднятие при компиляции и поэтому нет ошибок
        var var_blok = 'TEST_var_blok';
        console.log(var_funkt);
    }

console.log(var_blok);
}
//console.log(var_blok); //не выведет т.к. var_blok имеет функциональную область видимости

function underline() {
    console.log('\n-----------------------------------------------------------------------------\n');
}

//var созданная в пределах видимости одной функции не является глобальной как в с++
//предел видимости ограничивается скобками

//let
let let_1 = 'TEST_let_1';

function function_let_1() {

    let let_blok = 'TEST_let_blok';
    console.log(let_1);
    
    if(true) {
        //console.log(let_2); //ОШИБКА т.к. не действует механизм поднятия
        let let_2 = 'TEST_let_2';
        console.log(let_blok);
    }
    //console.log(let_2); //не выведет т.к. let блочная
}

function_var_1();
underline();
function_let_1();
underline();
/**************************************************************************************************************************/

/****************************************************DATA TYPE*************************************************************/
/*
const st_1  = new String("asd");
const st_2  = new Number(123);
console.log(st_1);
console.log(st_2);
*/

console.log('\n-----------------------------------DATA-TYPE---------------------------------\n');

//ВСЕГО 8 ТИПОВ ДАННЫХ
//6 ПРИМИТИВЫ (Number, BigInt, String, Symbol, Boolean, Undefined)
//2 СЛОЖНЫЕ ТИПЫ (object, nul)

const number_1 = 123;
const biggi_1 = 50000n;
const string = "Hallo World";
const id = Symbol("id");
const boolean_1 = true;
const undefined_1 = undefined;
const age = null; // object потому, что ссылка на несуществующий элемент или 
//на некорректный ОБЪЕКТ. Данный тип является примитивом, но все остальные типы 
//наследованы от null

const struct = {
    name_1: "Dmitry",
    name_2: "John",

    age_1: 27,
    age_2: 34
};

const arr = [1,2,5,12,0];

console.log("---typeof---\n");
console.log(typeof number_1);
console.log(typeof biggi_1);
console.log(typeof string);
console.log(typeof id);
console.log(typeof boolean_1);
console.log(typeof undefined_1);
console.log(typeof age);
console.log(typeof struct);
console.log(typeof arr);
console.log(typeof underline+"\n");

console.log("---преобразование типов---\n");

//js-динамически типизированный. Одной переменной можно присваивать разный тип
let A = 120n;
let B = 150n;
let a = 1;  
let b = 10;
let c = "125";
let id_1 = Symbol("id_1");
let boolean_3 = true;
let boolean_4 = false;
let undefined_2 = undefined;
let null_1 = null;

console.log("A -- "+typeof A+" = "+A);
console.log("B -- "+typeof B+" = "+B);
console.log("a -- "+typeof a+" = "+a);
console.log("b -- "+typeof b+" = "+b);
console.log("c -- "+typeof c+" = "+c);
console.log("id_1 -- "+typeof id_1);
console.log("bolean_3 -- "+boolean_3+" "+typeof boolean_3);
console.log("bolean_4 -- "+boolean_4+" "+typeof boolean_4);
console.log("Undefined -- "+typeof undefined_2+" = "+undefined_2);
console.log("null_1 -- "+typeof null_1+" = "+null_1);

console.log("\nJS-динамически типизированный, одной переменной можно присваивать значения с разными типами:\n")

console.log("a = "+a);
a="присвоили переменной 'a' строковое значение\n";
console.log("a = "+a);

//Nimber + String
console.log("Number + String = String");
a=b+c;
console.log("a=b+c= "+a+" тип -- "+typeof a+"\n");

//Number - String
console.log("Number - String = Number");
a=b-c;
console.log("a=b-c= "+a+" тип -- "+typeof a);
a=c-b;
console.log("a=c-b= "+a+" тип -- "+typeof a+"\n");

//Number + Boolean
console.log("Number + Boolean(true) = Number");
a=b+boolean_3;
console.log("a=b+true= "+a+" тип -- "+typeof a);
console.log("Number + Boolean(false) = Number");
a=b+boolean_4;
console.log("a=b+false= "+a+" тип -- "+typeof a+"\n");

//Number - Boolean
console.log("Number - Boolean(true) = Namber");
a=b-boolean_3;
console.log("a=b-true= "+a+" тип -- "+typeof a);
console.log("Boolean(true) - Namber = Namber");
a=boolean_3-b;
console.log("a=true-b= "+a+" тип -- "+typeof a);
console.log("Number - Boolean(false) = Namber");
a=b-boolean_4;
console.log("a=b-false= "+a+" тип -- "+typeof a);
console.log("Boolean(false) - Namber = Namber");
a=boolean_4-b;
console.log("a=false-b= "+a+" тип -- "+typeof a+"\n");

//Number + Undefined
console.log("Number + Undefined = Namber");
a=b+undefined_2;
console.log("a=b+ndefined_2 = "+a+" тип -- "+typeof a);
a=undefined_2+b;
console.log("a=ndefined_2+b = "+a+" тип -- "+typeof a+"\n");

//Number - Undefined
console.log("Number - Undefined = Namber");
a=b-undefined_2;
console.log("a=b-ndefined_2 = "+a+" тип -- "+typeof a);
a=undefined_2-b;
console.log("a=ndefined_2-b = "+a+" тип -- "+typeof a+"\n");

//Number + null
console.log("Number + null = Number");
a=b+null_1;
console.log("a=b+null_1 = "+a+" тип -- "+typeof a+"\n");

//Number - null
console.log("Number - null = Number");
a=b-null_1;
console.log("a=b-null_1 = "+a+" тип -- "+typeof a);
console.log("Null - Number = ?");
a=null_1-b;
console.log("a=null_1-b = "+a+" тип --"+typeof a+"\n");


//BigInt + String
console.log("BigInt + String = String");
a=A+c;
console.log("a=A+c= "+a+" тип -- "+typeof a+"\n");

//BigInt - String
console.log("BigInt - String = ОИШБКА ТИПОВ ПРИ КОМПИЛЯЦИИ");
//a=A-c; //TypeError
//a=c-A; //TypeError

console.log("BigInt + Number = ОИШБКА ТИПОВ ПРИ КОМПИЛЯЦИИ,\n");

//Number + BigInt
console.log("Number + BigInt = ОИШБКА ТИПОВ ПРИ КОМПИЛЯЦИИ");
//a=A+b; //TypeError
//a=b+A  //TypeError
console.log("Number - BigInt = ОИШБКА ТИПОВ ПРИ КОМПИЛЯЦИИ,\n");
//a=A-b; //TypeError
//a=b-A; //TypeError

//Number+Symbol
console.log("Number + or - Symbol = ОИШБКА ТИПОВ ПРИ КОМПИЛЯЦИИ\n");
//a=id_1+b; //TypeError
//a=b+id_1; //TypeError
//a=id_1-b; //TypeError
//a=b-id_1; //TypeError

console.log("NaN - обозначает НЕчисло. То что выполненна бессмысленная опреация");
console.log("Однако NaN присваевается типу данный Number");

console.log("\n\n---преобразование string в number---\n");

//parseInt
console.log("---parseInt---");
console.log(parseInt("12345"));
console.log(parseInt("-12345")); //отрицательные тоже
console.log(parseInt("12345",24)); //!!!ТОЖЕ ПРЕОБРАЗУЕТ В 24-ех значн. систему
console.log(parseInt("-12345",24)); //-361253 отрицательные тоже
console.log(parseInt("12+14")); //выдаст только первое число до знака
console.log(parseInt("a+14")); //NaN
console.log(parseInt("a+14",16)); // A(hex) == 10(dec)
console.log(parseInt("123",16)); //123 примет как hex число и преобразует bin
console.log(parseInt("abc")); //воспримет как символы строки, выдаст NaN
console.log(parseInt("abc",16)) //воспримет как hex число
console.log(parseInt("   a   ")); //NaN так как пробелы
console.log(parseInt("   a   ",16)); //NaN 
console.log(parseInt("Hello world",16)); //NaN
console.log(parseInt("1.22222")); //1 так как отбрасывает числа после точки
console.log(parseInt("5,778")); //5
console.log(parseInt("5,778",16)); //5
console.log(parseInt("5",2)); // NaN
console.log(parseInt("00111001101")); //преобразует в bin число
console.log(parseInt("00111001101",2)); //преобразует bin число в dec число
console.log(parseInt("A",16));
console.log(parseInt("C",16));
console.log(parseInt("A",2)); //NaN
//parseFloat
console.log("\n---parseFloat---")
console.log(parseFloat("12")); //12
console.log(parseFloat("12.3333333334")); //12.3333333334
console.log(parseFloat("12.3333333334",8)); //второй аргумент (16) не действует
console.log(parseFloat("14",16)); //14
console.log(parseFloat("-0.5555555432")); //-0.5555555432  отрицательные тоже
//унарный плюс
console.log("\n---унарный плюс---");
console.log((+"1.1")+(+"1.1")); //2.2
console.log((+"1.25")-(+"1.5")); //-0.25
console.log((+"1.5")-(+"0.5")); //1
console.log((+"-47")+(+"43")); //-4 отрицательные числа тоже работают

underline();
/**************************************************************************************************************************/

/****************************************************if...else; switch...case**********************************************/
/*
при проверке нужного if следует ввести значение trye, 
false вводить неследует так как неидентифицированое значение переменной == undefined
*/

//СРАБОТАЕТ ТОЛЬКО ПЕРВЫЙ true if, ДАЛЕЕ ИНСТРУКЦИЯ ПРЕКРАТИТСЯ!!!

console.log('\n------------------------------if...else; switch...case-----------------------\n');

let if_1; 
let if_2 = true;
let if_3;
let if_4 = true;

if(if_1) {
    console.log("if_1");
}
else if(if_2) {
    console.log("if_2");
}
else if(if_3) {
    console.log("if_3");
}
else if(if_4) {
    console.log("if_4");
}

let case_lable_1 = 1;
let case_lable_2 = 2;
let case_lable_3 = 3;
let case_lable_4 = 4;

let apple = "Apple";
let orange = "Orange";
let banana = "Banana";
let watermelon = "Watermelon";

//значение case должно совпадать со значением switch

switch(2) {
    case case_lable_1:
        console.log("case_lable_1");
        break;
    case case_lable_2:
        console.log("case_lable_2");
        break;
    case case_lable_3:
        console.log("case_lable_3");
        break;
    case case_lable_4:
        console.log("case_lable_4");
        break; 
}

switch("Coconut") {
    case apple:
        console.log(`${apple}`);
        break;
    case orange:
        console.log(`${orange}`);
        break;
    case banana:
        console.log(`${banana}`);
        break;
    case watermelon:
        console.log(`${watermelon}`);
        break;
    default:
        console.log("no frut");
}
underline();
/**************************************************************************************************************************/

/*******************************************************throw; try...catch*************************************************/
console.log('\n---------------------------------throw; try...catch--------------------------\n');

//данный блок применяется для обработки стандартных исключительных ситуаций
//для выброса исключения используется инструкция throw

// --1--
//выбросим ошибку в консоль не перехватывая исключение
let div_1 = 9;
let div_2 = 8; //0

if(div_2 != 0) {
    let div_3 = div_1/div_2;
    console.log(div_3);
}
else {
    throw Error("на ноль делить нельзя"); //просто выбрасываем ошибку из возможных
    //throw "can't be divided by zero"; //или выбрасываем что-то свое
    //перечень Error-ов записан в документации
}

// --2--
//выбрасывание своих типов исключения
//для выполнения в кода в блоке cath должно быть выброшено исключение в try 
let div_4 = 9;
let div_5 = 3;  //0

try {
    if(div_5 != 0) {
        let div_6 = div_4/div_5;
        console.log(div_6);
    }
    else {
        throw err_1 = "error_1"; //свой объект исключения
    }
}
catch {
    console.log(err_1); // вот он
    console.log("can't be divided by zero");
}

// --3--
//блок finally, пример представленн в виде функции так как испульзуется return
//при наличии блока finally значения, которые должен возвращать try-catch
//будут проигнорированны 

//let div_7 = 9;
//let div_8 = 0; //0

function foo_1(div_7, div_8) {
    try {
        if(div_8 != 0) {
            var div_9 = div_7/div_8;
        }
        else {
            throw err_2 = "Error_test_finlly";
        }
    }
    catch {
        console.log("can't be divided by zero_THIS_FINALLY");
        return 21; //НЕ ВЫПОЛНИТСЯ, А ВЫПОЛНИТСЯ В finally
        console.log("bababa"); //НЕ ВЫПОЛНИТСЯ Т.К.ПОСЛЕ return
    }
    finally { //КОД В finally выполнится всегда
        console.log("test complited foo_1 = "+`${div_9}`);
        return div_9; // А ВОТ ЭТОТ ВЫПОЛНИТСЯ
    }
}
let finally_test_1 = foo_1(7,3); //сохраняем значение частного //0
console.log(finally_test_1); //вывод сохраненного значения
console.log("");

// --4--
//еще пример try...catch где исключение внутри вызываемой функции
function foo_2(div_10, div_11) {
    if(div_11 != 0) {
        var div_12 = div_10/div_11;
        console.log(`${div_12}`);
    }
    else {
        throw new Error("ошибка ввода"); //здесьдолжно быть значение Error
    }
}

//вот здесь и будет реализованна функция выбрасывающая ошибку
try {
    foo_2(1,3); //ВОТ ЗДЕСЬБУДЕТ ВЫБРОШЕНО ИСКЛЮЧЕНИЕ   //0
}
catch (e) {
    console.log(e.name);
    console.log(e.message);
}

/*
ИТОГО throw МОЖЕТ БЫТЬ ВЫБРОШЕН 2-МЯ СПОСОБАМИ
1-МОЖЕТ ОСУЩЕСТВИТСЯ throw ИСКЛЮЧЕНИЕ В ЛЮБОЙ МОМЕНТ
2-ПРИ ВЫБРОСЕ В БЛОКЕ try БУДЕТ ИСПОЛНЯТЬСЯ КОД В БЛОКЕ cath
throw ИСКЛЮЧЕНИЕ МОЖЕТ БЫТЬ ОБЪЕКТОМ ЛЮБОГО ТИПА
3-ПРИ ИСПОЛЬЗОВАНИИ finally ИЗ НЕСКОЛЬКИХ ВЫПОЛНИТСЯ ТОТ return КОТОРЫЙ В finlly 
4-ПОСЛЕ return КОД ФУНКЦИИ ПРЕКРАЩАЕТСЯ КАК И В C++
5-БЛОКИ try...catch МОГУТ ВКЛАДЫВАТЬСЯ ДРУГ В ДРУГА
*/
underline();
/**************************************************************************************************************************/

/**************************************************ОБЪЕКТЫ Promise*********************************************************/
//console.log('\n---------------------------------Promise-------------------------------------\n');

//

/**************************************************************************************************************************/

/**************************************************ЦИКЛЫ И ИТЕРАЦИИ*********************************************************/
console.log('\n-----------------------------циклы и итерации---------------------------------\n');

//

/**************************************************************************************************************************/
