import React from 'react';
import { useState } from "react";
import postRequest, { getRequest, url } from "./arr_combiner";

let idValue;
let contentValue;

const NewCard = () => {
  const [form, setForm] = useState({ // перечисляем все изменяемые параметры внутри формы
    id_input: '',
    content_textarea: '',
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('input').focus();
  });
  
  const handleIdChange = evt => { // функция обработки набора символов внутри input-а "ID"
    
    setForm(prevForm => ({...prevForm, id_input: evt.target.value}));
    idValue = evt.target.value;
  };

  const handleContentChange = evt => { // функция обработки набора символов внутри textarea "Content"

    setForm(prevForm => ({...prevForm, content_textarea: evt.target.value}));
    contentValue = evt.target.value;
  };
  
  const handleClick= /*async*/ evt => {  // ОБРАБОТКА НАЖАТИЯ КНОПКИ "Опубликовать"
    
    if ((contentValue) && (idValue)) {
      const updatedItemArray = { id: idValue, content: contentValue }; // формируем из входящего параметра новый/обновлённый элемент списка
      fetch(`${url}/posts`, {    // отправка новой заметки на сервер
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedItemArray)
    });
    console.log('data has pushed!', JSON.stringify(updatedItemArray)); // КОНТРОЛЬНАЯ ТОЧКА
      idValue = '';
      contentValue = '';
    } 
  };

  return (
  <form>
    <div>
      <input 
        type="text" 
        name="id_input" 
        value={form.id_input}
        onChange={handleIdChange}
        placeholder='введи цифровой ID'/>
    </div>
    <div>
      <textarea 
        name="content_texarea" 
        value={form.content_textarea}
        onChange={handleContentChange}
        placeholder='введи текст поста'/>
    </div>
    <button className="btn" onClick={handleClick} id="btn_publish">
          Опубликовать
    </button>
  </form>
)
}

export default NewCard;
