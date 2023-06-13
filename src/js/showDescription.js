export default function showDescription() {
    const items = Array.from(document.querySelectorAll('.ticket__item'));
    items.forEach(el => el.addEventListener('click', (e) => {
        if (!e.target.classList.contains('status') && !e.target.classList.contains('edit__button') && !e.target.classList.contains('delete__button')) {
            el.querySelector('.text__description').classList.toggle('invisible');
        }        
    }))
}