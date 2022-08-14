//import { nanoid } from 'nanoid'


export const url = 'http://localhost:7777';


export function isArray(value) {   // проверка переменной как массива
    return Object.prototype.toString.call(value) === '[object Array]';
  };

export default async function postRequest(idValue, contentValue) { // POST-запрос на сервер

    const updatedItemArray = { id: idValue, content: contentValue }; // формируем из входящего параметра новый/обновлённый элемент списка

    await fetch(`${url}/posts`, {    // отправка новой заметки на сервер
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedItemArray)
    });
    console.log('data has pushed!', JSON.stringify(updatedItemArray)); // КОНТРОЛЬНАЯ ТОЧКА
};

export async function getRequest() { // GET-ответ с сервера (для передачи в компонент <List>)

    let response = await fetch(`${url}/posts`);    // получение обновлённых данных (всех заметок) с сервера

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
  
        const listArray = await response.json();
               
        console.dir('data has catched!', listArray); // КОНТРОЛЬНАЯ ТОЧКА

        return listArray;
        
    } else {
        throw new Error("Ошибка HTTP: " + response.status);
    };
};

export async function delRequest(idValue) { // DELET-запрос на сервер

    await fetch(`${url}/posts/${idValue}`, {    // отправка DELET-запроса на сервер
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
      });
};
