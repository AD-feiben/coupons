export const getType = (data: any): string => {
  const match = Object.prototype.toString.call(data).match(/ (\w+)/)
  return match ? match[1] : 'unknown'
}

export const isObj = (data: any) => getType(data) === 'Object'

export const clipboard = (str: string) => {
  return new Promise((resolve) => {
    const el = document.createElement('textarea')
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand('Copy')
    el.remove()
    resolve('success')
  })
}

export const setLocal = (key: string, val: any) => {
  let str = val
  if (isObj(val)) {
    str = JSON.stringify(val)
  }
  return localStorage.setItem(key, str)
}

export const getLocal = (key: string): any => {
  let res = localStorage.getItem(key)
  if (!res) return ''
  try {
    res = JSON.parse(res)
  } catch (error) {
  } finally {
    return res
  }
}

export const isWeixin = /micromessenger/i.test(navigator.userAgent)
