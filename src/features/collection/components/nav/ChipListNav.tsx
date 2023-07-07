import { Dispatch, ReactNode, SetStateAction } from 'react';

import Badge from '@/components/Badge/Badge';
import Chip from '@/components/Chip/Chip';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';

type Props<T> = {
  items: T[];
  selectedItem: string | undefined;
  changeItem?: Dispatch<SetStateAction<T | undefined>>;
  Right?: ReactNode;
};

type Item = {
  id: number;
  count?: number;
  keyword?: string;
  title?: string;
};

const ChipListNav = <T extends Item>({ items, selectedItem, changeItem, Right }: Props<T>) => {
  return (
    <section className="flex flex-row justify-between items-center my-[24px]">
      <nav className="flex flex-row gap-[8px]">
        {items.map((item: T) => {
          const { id, count, keyword, title } = item;
          const chipContents = keyword || title || '';
          return (
            <li key={id} className="list-none">
              <Chip
                size="M"
                variant={selectedItem === chipContents ? 'secondary-pressed' : 'secondary'}
                badge={
                  count ? (
                    <Badge variant="gray100-outline" size="S">
                      {addPlusMarkOver99(count)}
                    </Badge>
                  ) : undefined
                }
                onClick={changeItem ? () => changeItem(item) : undefined}>
                {chipContents}
              </Chip>
            </li>
          );
        })}
      </nav>
      {Right}
    </section>
  );
};

export default ChipListNav;
