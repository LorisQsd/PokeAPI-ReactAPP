import Form from './Form';
import GenerationBtns from './GenerationBtns';

import { MainProps } from '../../../@types';

export default function Main({ generationBtns }: MainProps) {
  return (
    <main className="main">
      <Form />
      {generationBtns.length && (
        <GenerationBtns generationBtns={generationBtns} />
      )}
    </main>
  );
}
