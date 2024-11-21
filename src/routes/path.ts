export enum PathType {
  webview = 'webview',
  external = 'external',
}

export type Path = {
  path: string;
  type: PathType;
}

export const PATH = {
  root: {
    path: '/',
    type: PathType.webview,
  },
  HOME: {
    path: '/home',
    type: PathType.webview,
  },
  //notion
  NOTION_TERMS:{
    path: 'https://www.notion.so/been2spring/f17c3687e1f24279a76e9797a51677f6',
    type: PathType.external,
  },
};
