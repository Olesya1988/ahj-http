export default function postTicket() {
  const modal = document.querySelector('.modal');

  modal.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = Array.from(modal.elements)
      .filter(({ name }) => name)
      .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
      .join('&');

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
    };

    xhr.open('POST', 'http://localhost:7070');

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(body);

    document.querySelector('.modal__short-description__input').value = '';
    document.querySelector('.modal__detailed-description__input').value = '';
    location.reload();
  });
}
