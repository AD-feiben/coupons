import axios from 'axios';
import qs from 'qs';

export const getType = (data: any): string => {
  const match = Object.prototype.toString.call(data).match(/ (\w+)/);
  return match ? match[1] : 'unknown';
};

export const isObj = (data: any) => getType(data) === 'Object';

export const setLocal = (key: string, val: any) => {
  let str = val;
  if (isObj(val)) {
    str = JSON.stringify(val);
  }
  return localStorage.setItem(key, str);
};

export const getLocal = (key: string): any => {
  let res = localStorage.getItem(key);
  if (!res) return '';
  try {
    res = JSON.parse(res);
  } catch (error) {
  } finally {
    return res;
  }
};

export const isWeixin = /micromessenger/i.test(navigator.userAgent);

export const wait = async (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export const post = (url: string, data: any, isQs?: boolean) => {
  return axios.post(url, isQs ? qs.stringify(data) : data).then((res) => res.data);
};

interface IDateFormatMap {
  'M+': number;
  'd+': number;
  'H+': number;
  'm+': number;
  's+': number;
  'q+': number;
  S: number;
}

export const dateFormat = (time: number, fmt: string) => {
  const date = new Date(time);
  const o: IDateFormatMap = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  for (let k in o) {
    const key = k as keyof IDateFormatMap;
    if (new RegExp('(' + key + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1 ? o[key] : '00' + o[key]) + ''.substr(('' + o[key]).length));
  }
  return fmt;
};
