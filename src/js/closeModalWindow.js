export default function closeModalWindow() {
  document.querySelector('.modal__cancel-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.modal').classList.add('invisible');
    document.querySelector('.modal__short-description__input').value = '';
    document.querySelector('.modal__detailed-description__input').value = '';
  });
}
