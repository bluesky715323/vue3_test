import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import postCssPxToRem from "postcss-pxtorem";

//配置别名src=（@）
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", //配置相对路径，因为上传到ngxi上是相对路径，
  plugins: [
    vue(),
    // vant
    Components({
      resolvers: [VantResolver()],
    }),
  ],

  //配置别名@
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), //_dirname表示绝对路径
    },
  },

  css: {
    //rem
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75, // （设计稿/10）1rem的大小
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
        }),
      ],
    },
    // less
    preprocessorOptions: {
      less: {
        // additionalData: `@import "@/assets/base.less";`,
      },
      scss: {
        // additionalData: `@import "@/assets/scss/global.scss";`
        }
    },
  },

  //配置跨越
  server: {
    port: 8888, //端口设置
    host: "0.0.0.0", //开自己电脑ip
    proxy: {
      // 选项写法
      "/api": {
        target: "https://xxxx.com",
        changeOrigin: true,
        rewrite: (path) => path.replace("/^/api/", ""),
      },
    },
  },
});
