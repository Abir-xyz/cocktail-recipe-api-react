import '../css/home.css';

import { useState } from 'react';

const SearchForm = () => {
  return (
    <section className='form-wrapper'>
      <form className='form'>
        <input
          type='text'
          placeholder='Search your cocktail'
          className='form-input'
        />
      </form>
    </section>
  );
};
export default SearchForm;
