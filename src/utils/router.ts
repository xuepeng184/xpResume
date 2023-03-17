export function isHttpOrHttpsUrl(url: string): boolean {
  const reg = /(http|https):\/\/([\w.]+\/?)\S*/;
  return reg.test(url.toLowerCase());
}
