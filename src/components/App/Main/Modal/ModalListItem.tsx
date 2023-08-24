import { nanoid } from 'nanoid';

import { ModalListItemProps } from '../../../../@types';

export default function ModalListItem({ stat }: ModalListItemProps) {
  const width = `${(stat[1] / 255) * 100}%`;
  return (
    <li key={nanoid(8)} className="flex justify-center">
      <span className="w-3/12">{stat[0]}</span>
      <span className="w-3/12">{stat[1]}</span>
      <div className="w-[255px] h-[25px] rounded-md bg-v-red-200 overflow-hidden relative border-[3px] border-solid border-v-red-200">
        <div
          className="absolute left-0 top-0 h-full bg-slate-100 grow"
          style={{ width }}
        />
      </div>
    </li>
  );
}
