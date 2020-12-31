import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenStatic
} from 'axios'
import Message from 'element-plus/lib/el-message'
import qs from 'qs'

class Request {
  protected baseUrl: any = process.env.VUE_APP_BASE_API;
  protected service: any;
  protected pending: Array<{
    url: string;
    cancel: Function;
  }> = [];

  protected CancelToken: CancelTokenStatic = axios.CancelToken;
  protected axosRequsetConfig: AxiosRequestConfig = {};
  protected successCode: Array<number> = [200, 201, 2040];
  private static _instance: Request;

  private constructor () {
    this.requestConfig()
    this.service = axios.create(this.axosRequsetConfig)
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  // 生成创建的实例
  public static getInstance (): Request {
    this._instance || (this._instance = new Request())
    return this._instance
  }

  /**
   * 配置参数
   */
  protected requestConfig (): void {
    this.axosRequsetConfig = {
      // baseURL`将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
      baseURL: this.baseUrl,
      // `headers` 是即将被发送的自定义请求头
      headers: {
        timestamp: new Date().getTime(),
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      // transformRequest` 允许在向服务器发送前，修改请求数据
      transformRequest: [
        function (data: any) {
          // 对data进行任意转换处理
          return data
        }
      ],
      // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
      transformResponse: [
        function (data: AxiosResponse) {
          return data
        }
      ],
      paramsSerializer: function (params: any) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
      timeout: 30 * 1000,
      // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: 'json',
      // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
      xsrfCookieName: 'XSRF-TOKEN',
      // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
      xsrfHeaderName: 'X-XSRF-TOKEN',
      // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
      maxRedirects: 5,
      // `maxContentLength` 定义允许的响应内容的最大尺寸
      maxContentLength: 2000,
      // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
      validateStatus: function (status: number) {
        return status >= 200 && status < 300
      }
    }
  }

  /**
   * 请求参数处理
   */
  protected interceptorsRequest (): void {
    this.service.interceptors.request.use((config: any) => {
      this.removePending(config)
      return config
    }, (error: any) => {
      return Promise.reject(error)
    })
  }

  /**
   * 响应处理
   */
  protected interceptorsResponse (): void {
    this.service.interceptors.response.use(
      (response: any) => {
        this.responseLog(response)
        this.removePending(response.config)
        if (!this.successCode.includes(response.status)) {
          // 登录错误处理
          Message({
            message: response.data.message || 'Error',
            type: 'error',
            duration: 5 * 1000
          })
        } else {
          return response.data
        }
      },
      (error: any) => {
        Message({
          message: error.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(error)
      }
    )
  }

  protected removePending (config: any): void {
    for (const p in this.pending) {
      const item: any = p
      const list: any = this.pending[p]
      if (list.url === `${config.url}/${JSON.stringify(config.data)}&request_type=${config.method}`) {
        list.cancel()
        console.log('=====', this.pending)
        this.pending.splice(item, 1)
        console.log('+++++', this.pending)
      }
    }
  }

  public async post (url: string, data: any = {}, config: object = {}) {
    try {
      const result = await this.service.post(url, qs.stringify(data), config)
      return result.data
    } catch (error) {
      console.error(error)
    }
  }

  public async delete (url: string, config: object = {}) {
    try {
      await this.service.delete(url, config)
    } catch (error) {
      console.error(error)
    }
  }

  public async put (url: string, data: any = {}, config: object = {}) {
    try {
      await this.service.put(url, qs.stringify(data), config)
    } catch (error) {
      console.error(error)
    }
  }

  public async get (url: string, parmas: any = {}, config: object = {}) {
    try {
      await this.service.get(url, parmas, config)
    } catch (error) {
      console.error(error)
    }
  }

  protected requestLog (request: any): void {}

  protected responseLog (response: any): void {
    if (process.env.NODE_ENV === 'development') {
      const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
          Math.random() * 255
        )},${Math.round(Math.random() * 255)})`
      console.log(
        '%c┍------------------------------------------------------------------┑',
          `color:${randomColor};`
      )
      console.log('| 请求地址：', response.config.url)
      console.log('| 请求参数：', qs.parse(response.config.data))
      console.log('| 返回数据：', response.data)
      console.log(
        '%c┕------------------------------------------------------------------┙',
          `color:${randomColor};`
      )
    }
  }
}

export default Request.getInstance()
