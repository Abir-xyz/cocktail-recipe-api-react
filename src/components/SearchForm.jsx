import '../css/home.css';
import { useRef, useState } from 'react';
import { useGlobalContext } from '../GlobalContext';

const SearchForm = () => {
  const { SetFetchByInput } = useGlobalContext();
  const searchValue = useRef();

  const searchDrink = () => {
    SetFetchByInput(searchValue.current.value);
  };

  return (
    <section className='form-wrapper'>
      <form className='form'>
        <input
          type='text'
          placeholder='Search your cocktail'
          className='form-input'
          ref={searchValue}
          onChange={searchDrink}
        />
      </form>
    </section>
  );
};
export default SearchForm;
