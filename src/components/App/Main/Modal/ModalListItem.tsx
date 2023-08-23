import { nanoid } from 'nanoid';

import { ModalListItemProps } from '../../../../@types';

export default function ModalListItem({ stat }: ModalListItemProps) {
  const width = `${(stat[1] / 255) * 100}%`;
  return (
    <li key={nanoid(8)} className="stats__list-item">
      <span>{stat[0]}</span>
      <span>{stat[1]}</span>
      <div className="progress-bar grow">
        <div className="progress-bar--prog" style={{ width }} />
      </div>
    </li>
  );
}
