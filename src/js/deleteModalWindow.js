export default function deleteModalWindow(number) {
  const widget = document.querySelector('.widget');
  const deleteModal = document.createElement('form');
  deleteModal.classList.add('delete-modal', 'invisible');
  deleteModal.method = 'PUT';
  deleteModal.action = 'http://localhost:7070';
  widget.appendChild(deleteModal);

  const deleteModalTitle = document.createElement('h2');
  deleteModalTitle.classList.add('delete-modal__title');
  deleteModalTitle.textContent = 'Удалить тикет';
  deleteModal.appendChild(deleteModalTitle);

  const deleteModalText = document.createElement('div');
  deleteModalText.classList.add('delete-modal__text');
  deleteModalText.textContent = 'Вы уверены, что хотите удалить тикет? Это действие необратимо.';
  deleteModal.appendChild(deleteModalText);

  const deleteModalCancelButton = document.createElement('button');
  deleteModalCancelButton.classList.add('delete-modal__cancel-button', 'modal-button');
  deleteModalCancelButton.textContent = 'Отмена';
  deleteModal.appendChild(deleteModalCancelButton);

  const deleteModalSubmitButton = document.createElement('button');
  deleteModalSubmitButton.classList.add('delete-modal__submit-button', 'modal-button');
  deleteModalSubmitButton.textContent = 'Ок';
  deleteModal.appendChild(deleteModalSubmitButton);

  deleteModalCancelButton.addEventListener('click', () => {
    deleteModal.classList.add('invisible');
  });

  deleteModal.addEventListener('submit', (e) => {
    e.preventDefault();

    let body = number;

    body = `id=${encodeURIComponent(body)}`;

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
    };

    xhr.open('PUT', 'http://localhost:7070');

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send(body);
    location.reload();
  });
}
