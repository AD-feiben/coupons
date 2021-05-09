import axios from 'axios'
import { Toast } from 'vant'

const get = (url: string, params: any) => {
  const loading = Toast.loading({
    duration: 0,
    message: '加载中...',
    loadingType: 'spinner'
  })
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('https://coupons-server.vercel.app/api' + url, { params })
      const { code, msg } = res.data
      if (code === '1000') {
        resolve(res.data)
        return
      }
      Toast.fail(msg)
      reject(res.data)
    } catch (error) {
      Toast.fail('请求发生错误')
      console.log(error)
      reject(error)
    } finally {
      loading.clear()
    }
  })
}

export const getCoupon = (words: string) => {
  return get('/getCoupon', { words })
}
