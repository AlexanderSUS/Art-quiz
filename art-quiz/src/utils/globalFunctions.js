export default function switchPage(currentPage, nextPage) {
  currentPage.classList.remove('active');
  setTimeout(() => {
    currentPage.parentNode.removeChild(currentPage);
    document.querySelector('main').appendChild(nextPage);
    setTimeout(() => {
      nextPage.classList.add('active');
    }, 300);
  }, 300);
}
