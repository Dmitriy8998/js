console.log("Hello world");

let usl_1 = 0;

//цикл с предусловием
while(usl_1<5) {
    console.log(usl_1);
    usl_1++;
}

//цикл с постусловием
do {
    console.log(usl_1);
    usl_1--;
} while(usl_1>=0);

//цикл счета
for(i=1; i<=5; i++) {
    console.log(i);
}
console.log("i из цикла = "+i+"\n"); //6 i-попадает в область видимости

for(let j=0; j<=5; j++) {
    console.log("j= "+j);
}
for(let t=0; t<=5; t++) {
    console.log("\nt= "+t+" далее break и цикл прекращается");
    break;
}
//console.log(j); //выдаст ошибку так как переменная j имеет блочную область видимости
//ключевые выражения можно прописывать и в циклах
//break прерывает любой из циклов (do...while; while; for)
//continue не прерывает цикл полностью в отличие от break, он переходит к ночалу цикла
//то есть continue уменьшает цикл на итерацию

/*************************************МЕТКА lable*************************************/
console.log("\n----------------------МЕТКА lable----------------------\n");

let x = 0;
let y = 0;

flag_1 = false;

//break lable
lable_break: while(1) {
    console.log("first_cicle = "+x);
    x++;
    y=0;
    while(1) {
        console.log("thecond_cicle = "+y);
        y++;
        if(y==3 && x==3) {
            break lable_break; //ПРЕКРАТИТ ЦИКЛ ПО ДАННОЙ МЕТКЕ
        }
        if(y==3) {
            break; //ПО ЭТОМУ БРЯКУ ВЫКИНЕТ ТОЛЬКО ИЗ БЛОКА, НО ПЕРВЫЙ ЦИКЛ ПРОДОЛЖЕТСЯ
        }
    }
}
console.log("---прервал по метке---\n");

//continue lable
lable_continue: for(i=0; i<=5; i++) {
    console.log("первичный цикл "+i+" раз");
    if(i==5 && flag_1==false) {
        console.log("далее continue по метке");
        console.log("повторение первичного цикла");
        flag_1=true;
        i=0;
        continue lable_continue; // ПЕРЕХОДИТ НА ПЕРВИЧНЫЙ ЦИКЛ И ПОВТРОЯЕТ ЕГО 1 РАЗ
    }
}
label_text: console.log("text");
console.log("-------------------------------------------------------\n");

/*
метки в JS используются только в блочных операторах, как например циклы
метки могут быть break и continue
использование break или continue приведет к выходу из цикла или уменьшению на итерацию 
*/

/**************************************for...in***************************************/
console.log("\n-----------------------for...in------------------------\n");

/*
в js имеются объекты (НЕ КЛАССЫ, ПОЛЯ И МЕТОДЫ КЛАССОВ КАК В С++),
а объекты и свойства объектов (объект сруктура, его свойства car, model)
*/

//объект стуктура
let struct_car_1={
    car:[" lada ", " ford ", " mazda ", " opel "],
    model:[" sedan ", " mustang ", " cross "]
}
console.log(struct_car_1.car[3]+struct_car_1.model[1]);

//объект массив
let arr_1=[1,2,3,4,5,6,7,8,9,10];

//тестовая функция
function did_1(a,b) {
    let c=a%b;
    return c;
}
//let div_test = did_1(14,4);
console.log(did_1(14,4));
//console.log(div_test);

//for...in
let result_str;
for(var i in struct_car_1) { 
    result_str+=struct_car_1[i];
}
console.log(result_str); //запишит только текстовые строки из структуры

let result_num;
for(var i in arr_1) {
    result_num+=arr_1[i];
}
console.log(result_num); //выдаст НЕ ЧИСЛО, NaN ТАК КАК result_num НЕ ПРОИНИЦИАЛИЗИРОВАННА

result_num=0; //инициализация, тип namber
for(var i in arr_1) {
    result_num+=arr_1[i];
}
console.log("\n---вот теперь выдал---")
console.log(result_num); //А ВОТ ТЕПЕРЬ ВЫДАСТ ЧИСЛО СУММЫ ТАК КАК У ПЕРЕМЕННОЙ СВОЙ ТИП number
console.log("---\n");

for(var i in arr_1) {
    console.log(arr_1[i]); //выдаст все числа массива
    //result_num+=arr_1[i];
}

console.log("\n-----------------------for...in...of------------------------\n");

let iterable = [10, 20, 30];

let struct_2 = {
    model: [" lada ", " opel ", " mazda ", " ferrary "],
    type: [" sedan ", " mustang ", " cross "]
}
// in
for(var i in iterable) {
    console.log(i);
} //проходит все элементы и выводит инексы
for(var i in struct_2.model) {
    console.log(i);
} //0,1,2,3

//of
for (var i of iterable) {
  console.log(i);
} //проходит все элементы массива под индексами
for(var i of struct_2.model) {
    console.log(i);
}//lada opel mazda ferrary 
for(var i of struct_2.type) {
    console.log(i);
}
console.log("-------------------------------------------------------\n");
/*****************************************ternary expression**************************/
let a=10;
let b= a? a==10:a==11; //true
console.log(b);

b=a? a==12:a==10; //false
console.log(b);
/*************************************************************************************/

/**************************************function***************************************/

  
/*************************************************************************************/