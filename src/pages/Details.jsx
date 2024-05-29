import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/details.css';

const SpecificDrinkURL =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const Details = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);

  const fetchSpecificDrink = async () => {
    try {
      const response = await fetch(`${SpecificDrinkURL}${id}`);
      const data = await response.json();
      const specificDrink = data.drinks[0];
      if (specificDrink) {
        const {
          strDrinkThumb: image,
          strDrink: name,
          strCategory: category,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: desc,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = specificDrink;
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newDrink = {
          name,
          image,
          info,
          category,
          glass,
          desc,
          ingredients,
        };
        setDrink(newDrink);
      } else {
        setDrink(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSpecificDrink();
  }, []);

  if (!drink) {
    return <h2 className='detail-err'>nothing to display</h2>;
  } else {
    const { name, image, info, category, desc, glass, ingredients } = drink;
    return (
      <section className='detail-wrapper'>
        <h1 className='detail-title'>{name}</h1>
        <div className='detail-center'>
          <div className='detail-img detail-block'>
            <img src={image} />
          </div>
          <div className='detail-container detail-block'>
            <p>
              <span className='detail-span'>Name :</span>
              <span className='detail-value'> {name}</span>
            </p>
            <p>
              <span className='detail-span'>Category :</span>
              <span className='detail-value'> {category}</span>
            </p>
            <p>
              <span className='detail-span'>Type :</span>
              <span className='detail-value'> {info}</span>
            </p>
            <p>
              <span className='detail-span'>Glass :</span>
              <span className='detail-value'> {glass}</span>
            </p>
            <p>
              <span className='detail-span'>Ingredients :</span>
              <span className='detail-value'>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item},</span> : null;
                })}
              </span>
            </p>
            <p>
              <span className='detail-span'>Instructions :</span>
              <span className='detail-value'> {desc}</span>
            </p>
          </div>
        </div>
        <div className='detail-back-btn'>
          <Link className='go-back' to='/'>
            Go Back
          </Link>
        </div>
      </section>
    );
  }
};
export default Details;
