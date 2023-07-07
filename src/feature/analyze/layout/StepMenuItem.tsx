import React, { HTMLAttributes } from 'react';

import cn from 'classnames';

import Badge from '@/components/Badge/Badge';

import { WriteStatusType } from '../types';
import styles from './StepMenuItem.module.scss';

interface StepMenuItemProps extends Pick<HTMLAttributes<HTMLLIElement>, 'className'> {
  title: string;
  status: WriteStatusType;
}

const StepMenuItem = ({ title, status, className }: StepMenuItemProps) => {
  const classNames = cn(styles.root, styles[status], className);

  const getVariant = () => {
    switch (status) {
      case '미작성':
        return 'gray100-outline';
      case '작성중':
        return 'primary200-outline';
      case '작성완료':
        return 'primary50-outline';
      default:
        return 'gray100-outline';
    }
  };
  return (
    <li className={classNames}>
      <span className="b1">{title}</span>
      <Badge size="S" variant={getVariant()}>
        {status}
      </Badge>
    </li>
  );
};

export default StepMenuItem;