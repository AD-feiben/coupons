import { post, dateFormat } from '@/utils';

const apikey = 'GtUMY3m4IZLukzrhR0VTNWIVzE3C9rsQ';

const _postVip = (url: string, data: any) => {
  return post('https://api.tbk.dingdanxia.com/vip' + url, { apikey, ...data }, true);
};

/** 解析唯品会商品ID */
export const vipLinkCheck = (url: string) => {
  return _postVip('/viplink_check', { url });
};

/** 唯品会高佣转链(商品ID版) */
export const idPrivilege = (id: string) => {
  return _postVip('/id_privilege', {
    id,
    itemInfo: true
  });
};

const urlPrivilege = (url: string) => {
  return _postVip('/url_privilege', {
    url,
    itemInfo: true
  });
};

/** 合并处理 */
export const convert = async (words: string) => {
  const res1 = await urlPrivilege(words);
  if (res1.code !== 200) return Promise.reject(res1);
  const { itemInfo, url } = res1.data;
  const { couponInfo } = itemInfo;
  let data: any = {
    id: itemInfo.goodsId,
    plat: 'vip',
    couponUrl: url
  };

  if (couponInfo) {
    const { couponName, useBeginTime, useEndTime } = couponInfo;
    data['couponInfo'] = {
      name: couponName,
      couponStartTime: dateFormat(useBeginTime, 'yyyy-MM-dd'),
      couponEndTime: dateFormat(useEndTime, 'yyyy-MM-dd')
    };
  }

  return {
    code: '1000',
    msg: 'Success',
    data
  };
};
