import React, { useEffect } from 'react';
import styles from './ResumeContent.module.less';
import * as UseTemplateList from './useTemplate';
import MyScrollBox from '@/common/components/MyScrollBox';
import { MESSAGE_EVENT_NAME_MAPS } from '../../common/messager/messager';
import Messager from '@/common/messager/messager';

export default function ResumeContent() {
  const height = document.body.clientHeight;
  const HEADER_ACTION_HEIGHT = 92;

  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      console.log(data);
    });
  };

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne></UseTemplateList.TemplateOne>
    </MyScrollBox>
  );
}
