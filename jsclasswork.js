// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let mainHeader = document.getElementById('main_header');
// mainHeader.innerText = 'FEB-2021';
// mainHeader.style.color = 'tomato';

// b) робить шириниу елементу ul 400px

// let ulList = document.getElementsByTagName('ul');
// ulList[0].style.width = '400px';

//c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkList = document.getElementsByClassName('linkList');
// for (let i = 0; i < linkList.length; i++) {
//     linkList[i].style.width = '50%';
//
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let textListElement2 = document.getElementsByClassName('listElement2')
// for (let i = 0; i < textListElement2.length; i++) {
//     console.log(textListElement2[i].innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let allLi = document.getElementsByTagName('li');
// for (let i = 0; i < allLi.length; i++) {
//     console.log(allLi[i]);
//     allLi[i].style.backgroundColor = 'gray';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let allA = document.getElementsByTagName("a");
// for (let i = 0; i < allA.length; i++) {
//     allA[i].classList.add('anchor');
//
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (let i = 0; i < allA.length; i++) {
//     if(allA[i].innerText === 'link3') {
//         allA[i].style.fontSize = '40px';
//     }
//
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (let i = 0; i < allA.length; i++) {
//     allA[i].classList.add('element_' + allA[i].innerText);
//
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeaderElements = document.getElementsByClassName('sub-header');
// let bgColor = prompt('Виберіть колір фону');
// for (let i = 0; i < subHeaderElements.length; i++) {
//     subHeaderElements[i].style.backgroundColor = bgColor
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeaderElements = document.getElementsByClassName('sub-header');
// let bgColor = prompt('Виберіть колір фону');
// for (let i = 0; i < subHeaderElements.length; i++) {
//     if (subHeaderElements[i].innerText === 'content 2 segment') {
//         subHeaderElements[i].style.backgroundColor = bgColor;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
// let content1Element = document.getElementsByClassName('content_1');
// let text = prompt("Введіть текст:")
// for (let i = 0; i < content1Element.length; i++) {
//     content1Element[i].innerText = text;
// }

// l) отримати елементи p та змінити їм padding на 20px
// let pElements = document.getElementsByTagName("p");
// for (let i = 0; i < pElements.length; i++) {
//     pElements[i].style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text2Elem = document.getElementsByClassName('text2');
// for (let i = 0; i < text2Elem.length; i++) {
//     text2Elem[i].innerText = 'FEB-2021';
// }


//2) Є масив котрий характеризує правила.
// Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// let h1Elem = document.createElement("h1");
// h1Elem.innerText = 'Правила бойцовского клуба';
// document.body.appendChild(h1Elem)
//
// let divContent = document.createElement("div");
// divContent.id = 'wrap';
// document.body.appendChild(divContent);
//
// for (let i = 0; i < rules.length + 1; i++) {
//     let userBlock = document.createElement('div');
//     userBlock.classList.add('rules');
//     userBlock.classList.add('rule' + (i + 1));
//     userBlock.innerHTML =
//         ` <h2>${rules[i].title}</h2>
//           <p>${rules[i].body}</p>
//     `
//     divContent.appendChild(userBlock);
// }


/*
- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
*/


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив*/
let adressArr = [];
for (let newArr of usersWithId) {
    adressArr.push(newArr)
}


for (let i = 0; i < adressArr.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (adressArr[i].id == citiesWithId[j].user_id){
            adressArr[i].adress = citiesWithId[j];
        }

    }
}

console.log(adressArr)



