export default function addModalWindow(title) {
    const widget = document.querySelector('.widget');
    const modal = document.createElement('form');
    modal.classList.add('modal', 'invisible');
    modal.method = 'POST';
    modal.action = 'http://localhost:7070';
    widget.appendChild(modal);

    const modalTitle = document.createElement('div');
    modalTitle.classList.add('modal__title');
    modalTitle.textContent = title;    
    modal.appendChild(modalTitle);

    const modalShortDescriptionText = document.createElement('div');
    modalShortDescriptionText.classList.add('modal__short-description__text');
    modalShortDescriptionText.textContent = 'Краткое описание';
    modal.appendChild(modalShortDescriptionText);

    const modalShortDescriptionInput = document.createElement('input');
    modalShortDescriptionInput.classList.add('modal__short-description__input', 'input');
    modalShortDescriptionInput.name = 'name';
    modalShortDescriptionInput.required = true;
    modal.appendChild(modalShortDescriptionInput);

    const modalDetailedDescriptionText = document.createElement('div');
    modalDetailedDescriptionText.classList.add('modal__detailed-description__text');
    modalDetailedDescriptionText.textContent = 'Подробное описание';
    modal.appendChild(modalDetailedDescriptionText);

    const modalDetailedDescriptionInput = document.createElement('input');
    modalDetailedDescriptionInput.classList.add('modal__detailed-description__input', 'input');
    modalDetailedDescriptionInput.name = 'description';
    modalDetailedDescriptionInput.required = true;
    modal.appendChild(modalDetailedDescriptionInput);

    const modalCancelButton = document.createElement('button');
    modalCancelButton.classList.add('modal__cancel-button', 'modal-button');
    modalCancelButton.textContent = 'Отмена';
    modal.appendChild(modalCancelButton);

    const modalSubmitButton = document.createElement('button');
    modalSubmitButton.classList.add('modal__submit-button', 'modal-button');
    modalSubmitButton.textContent = 'Ок';
    modal.appendChild(modalSubmitButton);
}