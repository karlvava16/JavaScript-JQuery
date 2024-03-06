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



let previousClickedElement = null;
let selectedElements = new Set();

function secondTask()
{ 
    let bookList = document.getElementById('bookList');
    let books = Array.from(bookList.getElementsByTagName('li'));

    books.forEach( function(book)
    {
        book.addEventListener('click', function(event) 
        {
            handleClick(event, book, books);
        });
    });
}


  function changeTextColor(element) 
  {
    if (element.classList.contains('selected')) 
    {
      element.classList.remove('selected');
    } 
    else 
    {
      element.classList.add('selected');
    }
  }

  function handleClick(event, element, books) {
    const isCtrlPressed = event.ctrlKey;
    const isShiftPressed = event.shiftKey;


    // check for ctr;
    if (isCtrlPressed === true) {
      console.log("ctrl")

      changeTextColor(element);

      if (selectedElements.has(element)) 
      {
        selectedElements.delete(element);
      }
      else 
      {
        selectedElements.add(element);
      }
    }
    else if (isShiftPressed === true && previousClickedElement !== null)
    {
      console.log("shift")
      let start = false;
      let end = false;
      for (const book of books) {
        if (book === element || book === previousClickedElement) {
          if (!start) {
            start = true;
          } else {
            end = true;
          }
        }
        if (start && !end) {
          changeTextColor(book);
          selectedElements.add(book);
        }
      }
    } 
    else 
    {
      console.log("default click")

      selectedElements.forEach(function(el) {
        changeTextColor(el);
      });

      selectedElements.clear();
      changeTextColor(element);
      previousClickedElement = element;
    }
  }

  