import styles from './index.module.less';
import React from 'react';
import ResumeAction from './ResumeAction/ResumeAction';
import ResumeContent from './ResumeContent/ResumeContent';
import ResumeToolBar from './ResumeToolBar/ResumeToolBar';

function Resume() {
  return <div className={styles['container']}>
    <div className={styles['header']}>
      <ResumeAction></ResumeAction>
    </div>
    <div className={styles['content']}>
      <ResumeContent></ResumeContent>
    </div>
    <div className={styles['toolbar']}>
      <ResumeToolBar></ResumeToolBar>
    </div>
  </div>;
}

export default Resume;
