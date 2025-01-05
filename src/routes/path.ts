export enum PathType {
  webview = 'webview',
  external = 'external',
}

export type Path = {
  path: string;
  type: PathType;
};

export const webviewPATH = {
  root: {
    path: '/',
    type: PathType.webview,
  },
  HOME: {
    path: '/home',
    type: PathType.webview,
  },
  //notion
  NOTION_TERMS: {
    path: 'https://www.notion.so/been2spring/f17c3687e1f24279a76e9797a51677f6',
    type: PathType.external,
  },
};

export const PATH = {
  root: '/',
  HOME: '/home',
  login: '/login',
  login_term: '/login-terms',
  login_type: '/login-type',
  invite: '/invite',
  invite_confirm: '/invite-check',
  info: '/info',
  welcome: '/welcome',
  nickname: '/nickname',
};
