import React from 'react';

// @ts-ignore
let pagePath = require.context('../pages', true, /\.tsx$/);
let routerLnks = [
  {
    path: '/',
    element: React.lazy(() => import('../pages/home/home')),
  },
];

pagePath.keys().forEach((item: any) => {
  if (!item.includes('/components/')) {
    let pathFile = item.replace('./', '').replace(/\.tsx$/, '');
    let path = pathFile.replace(/\/[^/]+$/, '');
    routerLnks.push({
      path: path.toLowerCase(),
      element: React.lazy(() => {
        return import('../pages/' + pathFile + '.tsx');
      }),
    });
  }
});


routerLnks.forEach((item: any) => {
  let path = item.path;
  if (location.pathname === '/' + path || path === '/') {
    if (path === '/') {
      path = 'home';
    }
    import('../pages/' + path + '/pageConfig.json').then((res) => {
      setPageConfig(res);
    });
  }
});


const setPageConfig = (obj: any) => {
  document.title = obj.title;
  let keyDom = document.querySelector('[name="keywords"]') as HTMLMetaElement;
  if (keyDom && obj.keywords) {
    keyDom.content = obj.keywords;
  }
  let desDom = document.querySelector('[name="description"]') as HTMLMetaElement;
  if (desDom && obj.description) {
    desDom.content = obj.description;
  }
}

export { routerLnks };
