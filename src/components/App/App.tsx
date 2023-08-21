import { useEffect, useState } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import GenerationBtns from './Main/GenerationBtns';

// Import Interfaces TypeScript
import { Generation } from '../../@types';

import '../../styles/index.scss';

function App() {
  const [generationBtns, setGenerationBtns] = useState<Generation[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api-pokemon-fr.vercel.app/api/v1/gen`
        );

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const data = await response.json();

        // Amélioration à faire concernant le typage
        const typedData: Generation[] = Object.values(data);

        console.log('Data des boutons de génération récupérée !');

        setGenerationBtns(typedData);
        console.log(generationBtns);
      } catch (error) {
        console.trace(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main generationBtns={generationBtns} />
    </div>
  );
}

export default App;
