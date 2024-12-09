const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    gridItems.forEach(otherItem => {
      otherItem.classList.remove('zoomed');
    });
    item.classList.toggle('zoomed');
  });
});