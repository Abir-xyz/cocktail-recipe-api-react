import { Link } from 'react-router-dom';

const Drink = ({ image, name, type, glass, id }) => {
  return (
    <div className='cocktail'>
      <div className='cocktail-container'>
        <img className='drink-img' src={image} />
        <div className='cocktail-txt-wrapper'>
          <h1 className='drink-title'>{name}</h1>
          <h3 className='drink-glass'>{glass}</h3>
          <p className='drink-type'>{type}</p>
          <Link to={`/details/${id}`} className='details-btn'>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Drink;
