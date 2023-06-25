import React from 'react';

import Link from 'next/link';

import { STEPS } from '../constants';
import StepMenuItem from './StepMenuItem';

// FIXME: props로 status 받기
const StepMenu = () => {
  const status = ['미작성', '미작성', '작성중', '작성완료'] as const;
  return (
    <>
      <div className="bg-gray-50 w-[100%] h-[2px] rounded-[8px] my-[24px]" />
      <span className="subhead2 w-[100%] mb-[24px]">작성 페이지</span>
      <ul className="flex flex-col w-[100%] [&>a:not(:last-child)]:mb-[8px]">
        {STEPS.map(({ id, title, route }, index) => (
          <Link key={id} href={route}>
            <StepMenuItem title={title} status={status[index]} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default StepMenu;
