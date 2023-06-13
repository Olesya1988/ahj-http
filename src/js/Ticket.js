export default class Ticket {
    constructor(id, name, status, description, created) {
        this.id = id; // идентификатор (уникальный в пределах системы)
        this.name = name; // краткое описание
        this.status = status; // boolean - сделано или нет
        this.description = description; // полное описание
        this.created = created; // дата создания (timestamp)
    }

    init() {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const data = JSON.parse(xhr.responseText);
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }    


}