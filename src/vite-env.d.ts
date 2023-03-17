/// <reference types="vite/client" />

declare module '*.sass' {
  const classes: { [className: string]: string };
  export default classes;
}