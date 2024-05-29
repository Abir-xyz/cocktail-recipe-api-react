import React from 'react';
import { useGlobalContext } from '../GlobalContext';
import Drink from './Drink';

const DrinksList = () => {
  const { cocktails } = useGlobalContext();

  return (
    <section className='drinks-wrapper'>
      <div className='drinks-center'>
        {cocktails.map((item) => {
          return <Drink {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};
export default DrinksList;
