let floor = prompt('Введите колличество этажей в доме');
let flatOnFloor = prompt('Введите колличество квартир на этаже')
let flatNumber = prompt('Введите номер квартиры');
let flatOnEntrance = flatOnFloor * floor;
let entrance = Math.ceil(flatNumber / flatOnEntrance);
let floorNumber = Math.ceil((flatNumber - (entrance - 1) * flatOnEntrance)/flatOnFloor);
alert ('Квартира №' + flatNumber + ', Подъезд - ' + entrance + ', этаж - ' + floorNumber);