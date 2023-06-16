import addModalWindow from './addModalWindow';
import postTicket from './postTicket';

export default function addTicket() {
  document.querySelector('.add-tiket-button').addEventListener('click', () => {
    addModalWindow('Добавить тикет');
    document.querySelector('.modal').classList.remove('invisible');
    postTicket();
  });
}
