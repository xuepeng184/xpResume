import React, { useEffect, useState } from 'react';
import styles from './ResumeToolBar.module.less';
import MyScrollBox from '@/common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@/common/constants/resume';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/actions';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@/common/messager/messager';

export default function ResumeToolBar() {
  const height = document.body.clientHeight;

  const [hasAddItem, setHasAddItem] = useState<TSResume.SliderItem[]>([]);
  const [unAddItem, setUnAddItem] = useState<TSResume.SliderItem[]>([]);

  const dispatch = useDispatch();

  //点击进行添加选项的回调
  const handleAddItem = (willAddItem: TSResume.SliderItem) => {
    setHasAddItem((preList) => {
      let cloneList = [...preList];
      cloneList = cloneList.concat(willAddItem);
      changeKeys(cloneList.map((item) => item.key));
      return cloneList;
    });
    setUnAddItem((preList) => {
      const _preList = preList.filter((item) => item.key !== willAddItem.key);
      return [..._preList];
    });
  };

  //点击进行删除模块的回调
  const handleDeleteItem = (willDeleteItem: TSResume.SliderItem) => {
    setHasAddItem((preList) => {
      const _preList = preList.filter((item) => item.key !== willDeleteItem.key);
      changeKeys(_preList.map((item) => item.key));
      return [..._preList];
    });
    setUnAddItem((preList) => {
      let cloneList = [...preList];
      cloneList = cloneList.concat(willDeleteItem);
      return cloneList;
    });
  };

  //修改redux中的值
  const changeKeys = (keys: string[]) => {
    if (keys.length > 0) {
      dispatch(actions.templateSetting.setToolbarKeys(keys));
    }
  };

  //生成选择项和未选择项
  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      const _necssary: TSResume.SliderItem[] = [];
      const _unNecssary: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.map((item) => {
        if (item.require) _necssary.push(item);
        if (!item.require) _unNecssary.push(item);
      });
      setHasAddItem(_necssary);
      setUnAddItem(_unNecssary);
      changeKeys(_necssary.map((item) => item.key));
    }
  }, []);

  return (
    <div className={styles['slider']}>
      <MyScrollBox maxHeight={height - 180}>
        {!!hasAddItem.length && (
          <div className={styles['module']}>
            <div className={styles['title']}>
              <span className={styles['line']}></span>
              已添加模块
            </div>
            <div className={styles['content']}>
              {hasAddItem.map((item: TSResume.SliderItem, index) => {
                return (
                  <div
                    className={styles['box']}
                    key={item.key}
                    onClick={() => {
                      Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                        form_name: item.key
                      });
                    }}
                  >
                    <div className={styles['info']}>
                      <i className={styles['icon']}></i>
                      <div className={styles['text']}>
                        <div className={styles['name']}>{item.name}</div>
                        <div className={styles['summary']}>{item.summary}</div>
                      </div>
                      {item.require && <div className={styles['tips']}>必选项</div>}
                      {!item.require && (
                        <div className={styles['action']}>
                          <i className={styles['edit']}></i>
                          <i
                            className={styles['delete']}
                            onClick={(e) => {
                              e.stopPropagation && e.stopPropagation();
                              handleDeleteItem(item);
                            }}
                          ></i>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!!unAddItem.length && (
          <div className={styles['module']}>
            <div className={styles['title']}>
              <span className={styles['line']}></span>
              未添加模块
            </div>
            <div className={styles['content']}>
              {unAddItem.map((item: TSResume.SliderItem, index) => {
                return (
                  <div className={styles['box']} key={item.key} onClick={() => handleAddItem(item)}>
                    <div className={styles['info']}>
                      <i className={styles['icon']}></i>
                      <div className={styles['text']}>
                        <div className={styles['name']}>{item.name}</div>
                        <div className={styles['summary']}>{item.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </MyScrollBox>
    </div>
  );
}
