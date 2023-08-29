import { useContext } from 'react';
import { PokemonByGenContext } from '../../contexts/PokemonsByGenContext';

import Loader from '../Loader';

export default function Message({ content }: { content: string }) {
  const { loading } = useContext(PokemonByGenContext);

  let message;

  if (loading) {
    message = <Loader />;
  } else {
    message = <p className="m-px text-center">{content}</p>;
  }

  return message;
}
