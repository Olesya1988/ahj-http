export default function drawUi() {
  const widget = document.querySelector('.widget');
  const button = document.createElement('button');
  button.classList.add('add-tiket-button');
  button.textContent = 'Добавить тикет';
  widget.appendChild(button);

  const ticketsList = document.createElement('ul');
  ticketsList.classList.add('tickets__list');
  widget.appendChild(ticketsList);
}
