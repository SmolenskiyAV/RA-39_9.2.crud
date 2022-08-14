import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";
import NewCard from './components/NewCard';
import List from './components/List';
import './App.css';
import ViewCard from './components/ViewCard';

const App = () => {
  
  return (
    <>
      <div>
        <NavLink to="/">Главная</NavLink>
        {' | '}
        <NavLink to="/recipe/new">Создать пост</NavLink>
      </div>
  <br /><br />
      <Routes>
        <Route path='/recipe/new' element={<NewCard />} />
        <Route path='/recipe/:id' element={<ViewCard />} />
        <Route path='/' element={<List />} />

        {/*<Route path='*' element={<div>404</div>} />*/}

        {/*<Route path="recipe.php" element={
          <>
            <Navigate to={`/recipe/${id}`} replace />
          </>
          }
        />*/}
      </Routes>
    </>
  )
};

export default App;
