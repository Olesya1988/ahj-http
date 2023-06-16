import createTicket from './createTicket';

export default function getTickets() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
  };

  xhr.open('GET', 'http://localhost:7070');

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);

    data = data.filter((el) => (el.name !== '' && el.name !== undefined));

    for (let i = 0; i < data.length; i++) {
      createTicket(data[i].name, data[i].description, data[i].created, data[i].id);
    }
  };

  xhr.send();
}
