import { ipcRenderer } from 'electron';

//获取项目绝对路径
export function getAppPath() {
  return new Promise((resolve: (value: string) => void, reject) => {
    ipcRenderer.send('getRootPath', '');
    ipcRenderer.on('replyRootPath', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('项目目录错误'));
      }
    });
  });
}
