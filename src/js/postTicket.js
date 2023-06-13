import closeModalWindow from './closeModalWindow';

export default function postTicket() {
    const modal = document.querySelector('.modal');

    closeModalWindow();

    modal.addEventListener('submit', (e) => {
        e.preventDefault();

        const body = Array.from(modal.elements)
        .filter(({ name }) => name)
        .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
        .join('&');

        console.log(body);
    
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        
        console.log(xhr.responseText);
        console.log(typeof(JSON.parse(xhr.responseText)));
        console.log(xhr.responseText.length);
        }
        
        xhr.open('POST', 'http://localhost:7070');

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        if (body.length > 0) {
            xhr.send(body);
        }
        
        document.querySelector('.modal__short-description__input').value = '';
        document.querySelector('.modal__detailed-description__input').value = '';
    });    
}