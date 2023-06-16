import deleteModalWindow from './deleteModalWindow';
import addModalWindow from './addModalWindow';
import editTicket from './editTicket';

export default function createTicket(name, description, data, number) {
  const ticketsList = document.querySelector('.tickets__list');
  const ticketItem = document.createElement('li');
  ticketItem.classList.add('ticket__item');
  ticketsList.appendChild(ticketItem);

  const status = document.createElement('input');
  status.classList.add('status');
  status.type = 'checkbox';
  ticketItem.appendChild(status);

  const textList = document.createElement('div');
  textList.classList.add('text__list');
  ticketItem.appendChild(textList);

  const textName = document.createElement('div');
  textName.classList.add('text__name');
  textName.textContent = `${name}`;
  textList.appendChild(textName);

  const textDescription = document.createElement('div');
  textDescription.classList.add('text__description', 'invisible');
  textDescription.textContent = `${description}`;
  textList.appendChild(textDescription);

  const created = document.createElement('div');
  created.classList.add('created');
  created.textContent = `${data}`;
  ticketItem.appendChild(created);

  const editButton = document.createElement('button');
  editButton.classList.add('edit__button');
  ticketItem.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete__button');
  ticketItem.appendChild(deleteButton);

  const identifier = document.createElement('div');
  identifier.classList.add('identifier', 'invisible');
  identifier.textContent = `${number}`;
  ticketItem.appendChild(identifier);

  ticketItem.addEventListener('click', (e) => {
    if (!e.target.classList.contains('status') && !e.target.classList.contains('edit__button') && !e.target.classList.contains('delete__button')) {
      ticketItem.querySelector('.text__description').classList.toggle('invisible');
    }
  });

  const searchId = number;

  deleteButton.addEventListener('click', () => {
    deleteModalWindow(searchId);
    document.querySelector('.delete-modal').classList.remove('invisible');
  });

  editButton.addEventListener('click', () => {
    addModalWindow('Изменить тикет', searchId);
    document.querySelector('.modal').classList.remove('invisible');
    editTicket();
  });
}
