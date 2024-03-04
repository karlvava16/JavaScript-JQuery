function firstTask()
{
  let tree = document.getElementById('tree');
  let elements = tree.querySelectorAll('.element');

  elements.forEach(function (element) 
  {
    let text = element.querySelector('.text');

    text.addEventListener('click', function() 
    {
      let innerList = element.querySelector('.inner');
      if (innerList) {
        innerList.classList.toggle('show');
      }
    });
  });

}


// Переменная для хранения предыдущего кликнутого элемента
let previousClickedElement = null;
// Переменная для хранения выбранных элементов при зажатой клавише Ctrl
const selectedElements = new Set();

function secondTask()
{ 
    // Получаем список книг
    const bookList = document.getElementById('bookList');
    // Получаем все элементы списка книг
    const books = bookList.getElementsByTagName('li');

    // Добавляем обработчик события щелчка на каждом элементе списка книг
    books.forEach( function(book)
    {
        book.addEventListener('click', function(event) 
        {
            handleClick(event, book);
        });
    });
}

  

  // Функция для изменения цвета текста
  function changeTextColor(element) {
    if (element.classList.contains('selected')) {
      // Если элемент уже выбран, снимаем выделение
      element.classList.remove('selected');
    } else {
      // Иначе добавляем выделение
      element.classList.add('selected');
    }
  }

  // Функция для обработки щелчка на элементе списка книг
  function handleClick(event, element) {
    // Проверяем, была ли зажата клавиша Ctrl
    const isCtrlPressed = event.ctrlKey;
    // Проверяем, была ли зажата клавиша Shift
    const isShiftPressed = event.shiftKey;

    // Если зажата клавиша Ctrl
    if (isCtrlPressed) {
      changeTextColor(element); // Вызываем функцию для изменения цвета текста
      if (selectedElements.has(element)) {
        // Если элемент уже выбран, удаляем его из выбранных
        selectedElements.delete(element);
      } else {
        // Иначе добавляем его в выбранные
        selectedElements.add(element);
      }
    } else if (isShiftPressed && previousClickedElement) {
      // Если зажата клавиша Shift и есть предыдущий кликнутый элемент
      let start = false;
      let end = false;
      // Проходим по всем элементам списка
      for (const book of books) {
        if (book === element || book === previousClickedElement) {
          // Если текущий элемент или предыдущий совпадают с элементами между которыми нужно выбрать
          // начинаем или заканчиваем выбор
          if (!start) {
            start = true;
          } else {
            end = true;
          }
        }
        if (start && !end) {
          // Если начали выбирать, но еще не закончили, добавляем элемент в выбранные
          changeTextColor(book);
          selectedElements.add(book);
        }
      }
    } else {
      // Если ни Ctrl, ни Shift не были зажаты
      // Снимаем выделение со всех элементов
      for (const selectedElement of selectedElements) {
        selectedElement.classList.remove('selected');
      }
      // Очищаем список выбранных элементов
      selectedElements.clear();
      // Вызываем функцию для изменения цвета текста
      changeTextColor(element);
      // Устанавливаем текущий элемент как предыдущий кликнутый
      previousClickedElement = element;
    }
  }

  