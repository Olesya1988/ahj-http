import createTicket from './createTicket';

export default function getTickets() {
    
    
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
    }
    xhr.open("GET", 'http://localhost:7070');
    xhr.onprogress = function () {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            createTicket(data[i].name, data[i].description);        
        }        
    }
    xhr.send();

    
    // document.querySelector('body').addEventListener('load', () => {
        

    //     // const body = Array.from(modal.elements)
    //     // .filter(({ name }) => name)
    //     // .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
    //     // .join('&'); 
    
    //     const xhr = new XMLHttpRequest();
        
    //     xhr.onreadystatechange = function() {
    //     if (xhr.readyState !== 4) return;
        
    //     console.log(xhr.responseText);
    //     }
        
    //     xhr.open('GET', 'http://localhost:7070');

    //     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
    //     xhr.send();
    // });
}