/* eslint-disable jsx-a11y/anchor-is-valid */

// ###
import "./card.css";

export default function Card(props) {   // компонент-карточка
  
  const { id, content, created } = props;

  return (
    <div className="card" id={id}>
      <svg className="bd-placeholder-img card-img-top">
        <rect width="96%" height="100%" fill="#868e96"></rect>
        <text x="28%" y="50%" fill="#dee2e6">
          Изображение
        </text>
      </svg>

      <div className="card-body">
        <h3 className="card-title">Карточка №{id}</h3>
        <p className="card-text">
          {content}.
        </p>
        <p className="card-text">
          Создано:{' '}{created}.
        </p>
        
      </div>
    </div>
  );
}
