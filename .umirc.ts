// Config for dumi
import { defineConfig } from 'dumi';

function getMenus(opts: { lang?: string; base: '/docs' | '/plugins' }) {
  const menus = {
    '/plugins': [
      {
        title: '插件开发',
        children: ['/plugins/api', '/plugins/best-practice'],
      },
    ],
    '/docs': [
      {
        title: 'VERSION 3.X',
        children: [],
      },
      {
        title: '介绍',
        children: [
          '/docs/README',
          '/docs/how-umi-works',
          '/docs/getting-started',
        ],
      },
      {
        title: 'Umi 基',
        children: [
          '/docs/directory-structure',
          '/docs/config',
          '/docs/runtime-config',
          '/docs/routing',
          '/docs/convention-routing',
          '/docs/plugin',
          '/docs/navigate-between-pages',
          '/docs/html-template',
          '/docs/mock',
          '/docs/env-variables',
          '/docs/cli',
        ],
      },
      {
        title: '样式和资源文件',
        children: ['/docs/assets-css', '/docs/assets-image'],
      },
      {
        title: 'Umi 进阶',
        children: [
          '/docs/load-on-demand',
          '/docs/fast-refresh',
          '/docs/deployment',
          '/docs/use-umi-ui',
          '/docs/ssr',
          '/docs/mfsu',
        ],
      },
      {
        title: '贡献',
        path: '/docs/contributing',
      },
      {
        title: 'FAQ',
        path: '/docs/faq',
      },
    ],
  };
  return (menus[opts.base] as []).map((menu: any) => {
    if (!opts.lang) return menu;
    return {
      ...menu,
      title: menu[`title_${opts.lang}`] || menu.title,
    };
  });
}

const isDev = process.env.NODE_ENV === 'development';

const menusDocs = getMenus({ lang: '', base: '/docs' })
const menuPlugins = getMenus({ lang: '', base: '/plugins' })


export default defineConfig({
  ...(isDev
    ? {
        dynamicImport: {},
      }
    : {
        ssr: {},
      }),
  // base:'/vmi-docs',
  publicPath:"/vmi-docs/",
  favicon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  mode: 'site',
  title: 'Winex',
  locales:[['zh-CN', '中文']],
  resolve: {
    includes: ['./docs'],
    previewLangs: [],
  },
  menus: {
    '/docs': menusDocs,
    '/plugins': menuPlugins,
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/umi',
    },
  ],
  polyfill: false,
  nodeModulesTransform: {
    type: 'none',
  },
  exportStatic: {},
  analytics: isDev
    ? false
    : {
        ga: 'UA-149864185-1',
      },
});