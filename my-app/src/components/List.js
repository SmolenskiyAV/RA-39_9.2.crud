/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import postRequest, { getRequest, url } from "./arr_combiner";
import Card from './Card/Card';


const List = () => {
      
  const [array, setArray] = useState([]);
    
  useEffect(() => {
    fetch('http://localhost:7777/posts')
    .then((response) => response.json()) // выгрузка списка с сервера
    .then((json) => setArray(json));
  }, []);

return (
    <ul>
      {array.map((itemOfList) => {
        const {id} = itemOfList;
      return ( 
        <Link key={id} to={`/recipe/${id}`}>
          <Card {...itemOfList} />
        </Link>
      )
      }
      )}
    </ul>
  )
}

export default List;
