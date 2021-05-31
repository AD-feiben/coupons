import { wait, post } from '@/utils';

const _postTk = (url: string, data: any) => {
  return post(`http://gateway.kouss.com/tbpub${url}`, data);
};

/** 根据口令查询商品id */
const tpwdConvert = (str: string) => {
  return _postTk('/tpwdConvert', {
    password_content: str
  });
};

const session = process.env.TK_SESSION;

/** 根据商品id转链 */
const privilegeGet = (id: string) => {
  return _postTk('/privilegeGet', {
    adzone_id: '111353500466',
    site_id: '2184050129',
    session,
    item_id: id
  });
};

/** 生成口令 */
const tpwdCreate = (url: string) => {
  return _postTk('/tpwdCreate', {
    url
  });
};

export const convert = async (words: string) => {
  const res1 = await tpwdConvert(words);
  if (!res1.data) return Promise.reject({ code: '404', msg: '未查到优惠券或口令不正确' });

  console.log('1 => ', res1);

  const { num_iid: id } = res1.data;

  let data: any = { id, plat: 'tb' };
  await wait(1e3);
  const res2 = await privilegeGet(id);
  console.log('2 => ', res2);

  if (res2.code === 27) return Promise.reject({ code: '500', msg: '淘宝参数过期，请联系作者处理。' });
  if (!res2.result) return Promise.reject({ code: '401', msg: '未查到该商品' });

  const { coupon_click_url, coupon_info, coupon_start_time, coupon_end_time } = res2.result.data;
  await wait(1e3);
  const res3 = await tpwdCreate(coupon_click_url);
  console.log('3 => ', res3);
  if (!res3.data) return Promise.reject({ code: '402', msg: '生成口令失败，请稍后重试' });

  data['couponUrl'] = coupon_click_url;
  data['couponTpwd'] = res3.data.password_simple;

  if (coupon_info) {
    data['couponInfo'] = {
      name: coupon_info,
      couponStartTime: coupon_start_time,
      couponEndTime: coupon_end_time
    };
  }

  return {
    code: '1000',
    msg: 'Success',
    data
  };
};
