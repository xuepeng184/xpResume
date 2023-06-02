import React from 'react';
import styles from './index.module.less';
import AvatarImage from '@/assets/avatar.jpg';

function Avatar() {
  return (
    <div className={styles['box']}>
      <div className={styles['avatar']}>
        <img src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;
