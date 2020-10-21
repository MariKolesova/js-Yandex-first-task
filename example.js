'use strict'
 
/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
  if (String(typeof a) === 'number' & String(typeof b) === 'number') {
    return a + b;
  } else {
    throw new TypeError("неправильные типы данных");
  }
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
  if (Number.isFinite(year)) {
    if (year < 0) {
      return new RangeError('отрицательный год!');
    } else {
      let century = Math.trunc(year / 100);
      return (year % 100) ? century + 1 : century; 
    }
  } else {
    return new TypeError('неверные параметры');
  }
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
  if (/#\d{6}/.test(hexColor) || /#[A-F]{6}/.test(hexColor)) {
    let parts = [hexColor.substr(1, 2), hexColor.substr(3, 2), hexColor.substr(5, 6)];
    for (let i = 0; i < 3; i++) {
      let res = parseInt(parts[i], 16);
      if (res > 255) {
        throw new RangeError('выход за пределы допустимых значений')
      }
      parts[i] = String(res);
    }
    return `(${parts[0]}, ${parts[1]}, ${parts[2]})`;
  }
}
 
/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError('передали не число');
  } else if (!Number.isInteger(n) || n < 1) {
    throw new RangeError('положение в ряде некорректно');
  } else {
    let a = 1, b = 1, c;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return (n === 1 || n === 2) ? a : c;
  }
}
 
/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
  if (!Array.isArray(matrix[0])) throw new TypeError('не двумерный массив');
  let result = [];
  for (let i = 0; i < Math.max(matrix.length, matrix[0].length); i++){
      result.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          result[j][i] = matrix[i][j];
      }
  }
  return result;
}


/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
  if (!Number.isInteger(n) || !Number.isInteger(targetNs)) throw new TypeError('неверный тип');
  if (n > 36 || 2 > n || targetNs > 36 || 2 > targetNs) {
    throw new RangeError('выход за пределы [2, 36]');
  }
  return n.toString(targetNs);
}

 
/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    throw new TypeError('вы передали не строку')
  }
  if (phoneNumber.match(/8-800-\d{3}-\d{2}-\d{2}/)) {
    return true;
  } else {
    return false;
  }    
}
 
/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
  if (typeof text !== 'string') throw new TypeError('не строка');
  let target = ":-)";
  let target2 = "(-:";
  let count = 0;
  if (text != '' && (text.includes(target) || text.includes(target2))) {
      for (let i = 0; i < text.length; i++) {
          if ((text.slice(i, i + 3).includes(target)) || (text.slice(i, i + 3).includes(target2))) {
              count += 1;
              i += 2;
          }
      }
  }
  return count;
}
 
/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
  if (field[0][0] === field[1][1]  && field[1][1] === field[2][2]) {
      return field[0][0];
  } else if (field[0][0] === field[1][0] && field[0][0] === field[2][0]) {
      return field[0][0];
  } else if  (field[0][0] == field[0][1] && field[0][0] == field[0][2]) {
      return field[0][0];
  } else if (field[0][2] === field[1][1] && field[0][2] === field[2][0]) {
      return field [0][2];
  } else if (field[1][0] === field[1][1] && field [1][1] === field[1][2]) {
    return field[1][0];
  } else if (field[2][0] == field[2][1] && field[2][1] === field[2][2]) {
      return field[2][2];
  } else if (field[0][2] === field[1][2] && field[1][2] === field[2][2]) {
    return field[2][2];
  } else {
    return 'draw';
  }
}
 
module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
