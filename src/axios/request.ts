import axios from "axios";
import { Toast } from "vant";

//请求加载动画
let loading: any;
const startLoading = () => {
  interface Ioptions {
    message: string;
    forbidClick: boolean;
    duration: number;
  }
  const options: Ioptions = {
    message: "加载中…",
    forbidClick: true, //是否禁止背景点击
    duration: 0, // 值为0时，toast不会消失
  };
  loading = Toast.loading(options); //弹框
};
//关闭加载
const endLoading = () => {
  loading.clear();
};

const http = axios.create({
  baseURL: import.meta.env.BASE_URL_API,
  timeout: 5000,
});

// 添加请求拦截器
http.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么
    startLoading(); //加载提示框
    const token = window.localStorage.getItem("token");
    if (token) {
      // config.headers["authentication"]=token
      config.headers = {
        ...config.headers,
        authentication: token,
      };
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  (response: any) => {
    // 对响应数据做点什么
    endLoading(); //关闭加载提示框
    //判断code码
    if (response.data.code != 0) { // 接口返回错误
      Toast.fail(response.data.message);
    } else {  // 接口返回成功
      console.log("response", response);
      return response.data;
    }
  },
  (error) => {
    console.log("error", error);
    endLoading(); //关闭加载提示框
    // 对响应错误做点什么
    Toast.fail(error.response.data.message);
    return Promise.reject(error.response.data.message);
  }
);

export default http;
