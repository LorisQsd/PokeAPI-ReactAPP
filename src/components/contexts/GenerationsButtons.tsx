import { ReactElement, createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Generation } from '../../@types';

const GenerationsButtonsContext = createContext<Generation[]>([]);

function GenerationsButtonsProvider({ children }: { children: ReactElement }) {
  const [generationBtns, setGenerationBtns] = useState<Generation[]>([]);

  useEffect(() => {
    async function fetchGenerationsButtons() {
      try {
        const { data } = await axios.get(
          'https://api-pokemon-fr.vercel.app/api/v1/gen'
        );

        // eslint-disable-next-line no-console
        console.log('Appel API - Boutons Generations');
        setGenerationBtns(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    fetchGenerationsButtons();
  }, []);

  return (
    <GenerationsButtonsContext.Provider value={generationBtns}>
      {children}
    </GenerationsButtonsContext.Provider>
  );
}

export { GenerationsButtonsContext, GenerationsButtonsProvider };
