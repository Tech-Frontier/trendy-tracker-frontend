import { css } from '@/../styled-system/css';
import { ReactNode } from 'react';

export function RecruitSectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className={listTitleCss}>
      {children}
    </div>
  );
}

const listTitleCss = css({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridGap: '20px',
  marginBottom: '10px',
});
