import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import legacy from '@vitejs/plugin-legacy';

const CWD = process.cwd();

export default defineConfig(({ mode }: ConfigEnv) => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    base:VITE_BASE_URL,
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      open: true, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      port: 8008,
    },
    plugins: [
      vue(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'], // 类型： string[] 导入时想要省略的扩展名列表。
    },
    css:{
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/assets/less/var.less')}";`,
          },
          javascriptEnabled: true,
        }
      }
    
    },
    build: {
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
      commonjsOptions: {
        ignoreDynamicRequires: false, // Default: false
        transformMixedEsModules: true,
        sourceMap: false,
      },
    },
  };
});
