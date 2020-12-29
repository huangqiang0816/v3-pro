import { ParamsInterface } from '@/types'

/**
 * 获取url参数 返回对象
 * @param url
 */
export const getUrlparmas = (url: string): ParamsInterface => {
  const result = {} as ParamsInterface
  if (!url.includes('?')) return result
  const index = url.indexOf('?')
  const parmas = url.substr(index + 1).split('&')
  parmas.forEach(item => {
    const [key, value] = item.split('=')
    result[key] = decodeURIComponent(value)
  })
  return result
}
