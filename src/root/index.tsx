//首页的开发

import React from 'react';
import style from './index.module.less';
import Logo from '@/assets/logo.png';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@/common/constants/router';
import { isHttpOrHttpsUrl } from '@/utils/router';
import { useSelector ,useDispatch} from 'react-redux';
import { RootState ,actions} from '@/store';

function Root() {
  const history = useHistory();
  const appName = useSelector((state:RootState)=>state.global.appName);

  const actionToPage = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  return (
    <div className={style['root']}>
      <div className={style['container']}>
        <img src={Logo} alt="" />
        <div className={style['title']}>xpVisResumeEditor</div>
        <div className={style['tips']}>一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className={style['action']}>
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} className={style['action']} onClick={() => actionToPage(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className={style['footer']}>
        <p> Copyright © 2018-{new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Root;
