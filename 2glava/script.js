$(document).ready(function() {
	$("#accordion").accordion();
	$("#accordion1").accordion(); 
	$("#el1,#el2,#el3").button();
	
	$("#auto1").autocomplete({minLength: 3, source:['Австралия', 'Австрия', 'Азербайджан', 
'Аргентина', 'Афганистан', 'Бангладеш','Беларусь',
'Бразилия', 'Великобритания',  'Вьетнам', 'Германия','Греция', 'Грузия','Дания', 
'Египет', 'Израиль', 'Ирак','Иран', 'Испания', 'Италия', 'Канада','Киргизия', 
'КНР', 'Куба', 'Латвия', 'Литва', 'Мексика',
'Молдавия', 'Монголия', 'Нигерия', 'Нидерланды', 'Пакистан', 'Польша', 'Португалия', 
'Россия', 'Румыния', 'Сербия', 'Словакия', 'Словения', 'США', 'Таджикистан', 'Таиланд', 
'Тунис', 'Турция', 'Узбекистан', 'Украина', 'Филиппины', 'Финляндия', 'Франция',  
'Хорватия', 'Черногория', 'Чехия', 'Швейцария', 'Швеция', 'Эстония', 'ЮАР', 'Япония']})
}); 