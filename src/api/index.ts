import axios from 'axios';
import { Toast } from 'vant';
import * as tk from './tk';
import * as vip from './vip';

const get = <T>(url: string, params: any) => {
  const loading = Toast.loading({
    duration: 0,
    message: '加载中...',
    loadingType: 'spinner'
  });
  return new Promise<T>(async (resolve, reject) => {
    try {
      const res = await axios.get('https://coupons-server.vercel.app/api' + url, { params });
      const { code, msg } = res.data;
      if (code === '1000') {
        resolve(res.data);
        return;
      }
      Toast.fail(msg);
      reject(res.data);
    } catch (error) {
      Toast.fail('请求发生错误');
      console.log(error);
      reject(error);
    } finally {
      loading.clear();
    }
  });
};

/** 是否为淘口令 */
const isTpwd = (keyword: string) => /[\da-z]{11}/i.test(keyword);

/** 是否为唯品会链接 */
const isVipLink = (keyword: string) => /http(s)?:\/\/(\w+\.)?vip\.com/g.test(keyword);

interface IGetCouponRes {
  code: string;
  msg: string;
  data: {
    id: string;
    plat: string;
    couponUrl: string;
    couponTpwd: string;
    couponInfo: {
      name: string;
      couponStartTime: string;
      couponEndTime: string;
    };
  };
}

export const getCoupon = (words: string): Promise<IGetCouponRes> => {
  const loading = Toast.loading({
    duration: 0,
    message: '加载中...',
    loadingType: 'spinner'
  });
  return new Promise(async (resolve, reject) => {
    try {
      let res: IGetCouponRes | null = null;
      let code = '';
      let msg = '';

      if (isVipLink(words)) {
        const result = await vip.convert(words);
        res = result;
        code = result.code;
        msg = result.msg;
      } else if (isTpwd(words)) {
        const result = await tk.convert(words);
        res = result;
        code = result.code;
        msg = result.msg;
      }

      if (code === '1000') {
        loading.clear();
        resolve(res as IGetCouponRes);
        return;
      }
      code = code || '1001';
      msg = msg || '输入的口令或链接不正确';
      throw { code, msg };
    } catch (error) {
      error.msg && Toast.fail(error.msg);
      return reject(error);
    } finally {
      loading.clear();
    }
  });
};
