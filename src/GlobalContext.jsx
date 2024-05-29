import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = createContext();

const AppContextSetup = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [fetchByInput, SetFetchByInput] = useState('t');

  const fetchDrinks = async () => {
    try {
      const response = await fetch(`${URL}${fetchByInput}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            type: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [fetchByInput]);

  return (
    <AppContext.Provider value={{ cocktails, SetFetchByInput }}>
      {children}
    </AppContext.Provider>
  );
};

// hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextSetup };
