/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import postRequest, { getRequest, url } from "./arr_combiner";



const ViewCard = () => {
  const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    fetch('http://localhost:7777/posts')
    .then((response) => response.json()) // выгрузка списка с сервера
    .then((json) => setRecipes(json));
    const post = recipes.find(o => o.id === id);
    setRecipe(post);
  }, []);
 
  useEffect(() => {
    fetch('http://localhost:7777/posts')
    .then((response) => response.json()) // выгрузка списка с сервера
    .then((json) => setRecipes(json));
    const post = recipes.find(o => o.id === id);
    setRecipe(post);
    console.log('ID = ', id); //КОНТРОЛЬНАЯ ТОЧКА
    console.log('arrRecipes is', recipes);  //КОНТРОЛЬНАЯ ТОЧКА
    console.log('post', post);  //КОНТРОЛЬНАЯ ТОЧКА
  }, [id]);

  if (!recipe) {
    return (
      <div>Не найдено, перейти к <Link to='/'>на главную</Link></div>
    )
  };

  const handleClick= evt => {  // ОБРАБОТКА НАЖАТИЯ КНОПКИ "DELET"
    
    fetch(`${url}/posts/${id}`, {    // отправка DELET-запроса на сервер
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      }
    });
  
  };

  return (
    <div className="card">
      <svg className="bd-placeholder-img card-img-top">
        <rect width="96%" height="100%" fill="#868e96"></rect>
        <text x="28%" y="50%" fill="#dee2e6">
          Изображение
        </text>
      </svg>

      <div className="card-body">
        <h3 className="card-title">Карточка Просмотра №{id}</h3>
        <p className="card-text">
          {recipe.content}.
        </p>
        <p className="card-text">
          Создано:{' '}{recipe.created}.
        </p>
        <Link to='/'>
          <button onClick={handleClick} className="btn">
            Удалить
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ViewCard;