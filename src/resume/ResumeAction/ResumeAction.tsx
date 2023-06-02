import React from 'react';
import styles from './ResumeAction.module.less';
import { useHistory } from 'react-router';
import ROUTER from '@/common/constants/router';

export default function ResumeAction() {
  const history = useHistory();

  const backToRoot = (): void => {
    history.push(ROUTER.root);
  };

  const exportPdf = (): void => {
    console.log(123);
  };

  return (
    <div className={styles['actions']}>
      <div className={styles['back']} onClick={backToRoot}>
        返回
      </div>
      <div className={styles['exportButton']} onClick={exportPdf}>
        导出PDF
      </div>
    </div>
  );
}
