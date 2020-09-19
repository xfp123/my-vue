import axios from 'axios';
import {
  Message,
  Loading
} from 'element-ui';

//创建axios实例
let service = axios.create({

  //配置接口地址--将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  baseURL: '',

  //响应时间--如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 30000
});

let loadingInstance;
//请求拦截响应
service.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      lock: true,
      text: '数据加载中，请稍后...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    //在此处设置 请求参数 格式化问题  等问题 。。。
  },
  err => {
    loadingInstance.close()
    Message.error('请求错误')
    return Promise.reject(err)
  }
)

//响应拦截器（返回状态判断）
service.interceptors.response.use(
  res => {
    //接口请求成功
    if (res.data.code == 200) {
      loadingInstance.close()
      return res
    }
    //接口没有请求成功 输出响应错误的原因
    else {
      loadingInstance.close()
      Message.error(res.data.msg)
    }
  },
  err => {
    loadingInstance.close()
    Message.error('请求失败，请稍后再试')
    return Promise.reject(err)
  }
)

export default service;
