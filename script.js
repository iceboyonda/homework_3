const student = "Зима Дмитрий Владимирович"; //
document.getElementById("student").innerHTML = student; //

const users = [{name: 'Пономарев Андрей Алексеевич', gender: 'male', birthDate: '11.12.1980'}, // По сути маленькая бд (Большой массив с именами пользователей)

{name: 'Смирнова София Львовна', gender: 'female', birthDate: '02.01.1987'}, // Переменная Gender и переменная Birthdate, также переменная name{
{name: 'Владимиров Артём Григорьевич', gender: 'male', birthDate: '07.12.1990'}, 
{name: 'Маслова Елизавета Егоровна', gender: 'female', birthDate: '10.10.1997'}, 
{name: 'Назарова Вера Романовна', gender: 'female', birthDate: '01.05.1983'}, 
{name: 'Иванов Иван Фёдорович', gender: 'male', birthDate: '05.05.1999'}, 
{name: 'Рыбакова Алина Семёновна', gender: 'female', birthDate: '01.04.1974'},
{name: 'Молчанов Даниил Ильич', gender: 'male', birthDate: '02.03.1984'}, 
{name: 'Овчинников Платон Александрович', gender: 'male', birthDate: '03.05.1999'}, 
{name: 'Дмитриев Алексей Григорьевич', gender: 'male', birthDate: '12.11.1998'}, 
{name: 'Мартынова Софья Тимуровна', gender: 'female', birthDate: '07.06.1995'}, 
{name: 'Соколов Михаил Адамович', gender: 'male', birthDate: '11.03.1979'}];  // постояльцы}
let names = []; // массив "Имя", в котором будут имена и личные данные постояльцев
let countOfMale = 0; // Переменная мужчин 
let countOfFemale = 0; // Переменная женщин 
let gender; // Буквенная переменая
for(let i = 0; i < users.length; i++) { // Если i меньше кол-ва людей прибавляем +1
let letter = []; // Массив для счета 
let b = 0; // Для счета
if (users[i].gender == 'male') { // Оператор проверки гендера.
countOfMale++; // Кол-во мужчин (Переменная). 24 строка проверяет гендер, 25я строка записывает мужчин (По сути счетчик)
gender = 'М'; // Подписывает мужчин буквой "М" 
} else { // Если гендер-мужчина-счетчик записывает одного мужчину, если женщина-счетчик записывает одну женщину в переменную.
countOfFemale++; // Кол-во женщин (Переменная), 24 строка проверяет гендер, 28я строка записывает женщин (Тоже счетчик)
gender = 'Ж'; // Подписывает женщин буквой "Ж"
};
for (let n = 1; n < users[i].name.length; n++) { // 31,32,33 - Проверяет наличие человека, при наличии сжимает n-новая переменная, 1-Фамилия 2-Имя 3-Отчество {
if (users[i].name[n] == users[i].name[n].toUpperCase()) { // 
letter[b++] = users[i].name[n]; // 
}; // компилятор} (сжимает ФАМИЛИЮ ИМЯ ОТЧЕСТВО ДО ФИО)
};
names[i] = users[i].name.split(" ").splice(0, 1).join(" ") + // Счетчик возраста
' '+ letter[1] + '.'+ letter[3] + '.' + ','
+ gender + ', '
+ 'Возраст: '+ Math.floor((new Date().getTime() - new Date(users[i].birthDate))/ (24 * 3600 * 365.25 * 1000));
}; // 
console.log(`Всего гостей: ${users.length}`); // {
console.log(`Мужчин: ${countOfMale}`);
console.log(`Женщин: ${countOfFemale}`);
console.log('Список гостей:');
for(let j = 0; j < names.length; j++) {
console.log(names[j]); // Вывод всей имеющейся информации о постояльцах}
}; 
