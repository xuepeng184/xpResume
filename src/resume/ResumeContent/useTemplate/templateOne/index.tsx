import React from 'react';
import styles from './index.module.less';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/index';
import { RESUME_TOOLBAR_MAPS } from '../../../../common/constants/resume';

function TemplateOne() {
  const base: TSResume.Base = useSelector((state: RootState) => state.resume.base);
  const resumeToolbarKeys: string[] = useSelector((state: RootState) => state.template.resumeToolbarKeys);
  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div className={styles['a4-box']}>
      <div className={`${styles['flex']} ${styles['container']}`} id="visPdf">
        {/* 左侧 */}
        <div className={styles['left']}>
          <div className={styles['avatar']}>
            <Avatar />
          </div>
          <div className={styles['fillColor']} />
          <div className={styles['baseData']}>
            <BaseInfo />
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact></Contact>}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job></Job>}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate></Certificate>}
          </div>
        </div>
        {/* 内容 */}
        <div className={styles['center']}>
          {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) || base?.username) && <Synopsis />}
          <div className={styles['listData']}>
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
