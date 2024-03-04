function firstTask()
{
  let tree = document.getElementById('tree');
  let elements = tree.querySelectorAll('.element');

  elements.forEach(function (element) {
    let text = element.querySelector('.text');

    text.addEventListener('click', function() {
      let innerList = element.querySelector('.inner');
      if (innerList) {
        innerList.classList.toggle('show');
      }
    });
  });

}