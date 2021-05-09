const axios = require('axios')

const post = (url, data, isQs) => {
  return axios.post(url, isQs ? qs.stringify(data) : data).then(res => res.data)
}

const _postTk = (url, data) => {
  return post(`http://gateway.kouss.com/tbpub${url}`, data)
}

/** 根据口令查询商品id */
const tpwdConvert = (str) => {
  return _postTk('/tpwdConvert', {
    password_content: str
  })
}

/** 根据商品id转链 */
const privilegeGet = (id) => {
  return _postTk('/privilegeGet', {
    adzone_id: '111353500466',
    site_id: '2184050129',
    session: '700001003084d0f3981b144aa253bb0a9d256d3d75af19a2c34538eecff568982665e402210087108790',
    item_id: id
  })
}

/** 生成口令 */
const tpwdCreate = (url) => {
  return _postTk('/tpwdCreate', {
    url
  })
}

/** 是否为淘口令 */
const isTpwd = (keyword) => /[\da-z]{11}/i.test(keyword)

/** 是否为唯品会链接 */
const isVipLink = (keyword) => /http(s)?:\/\/(\w+\.)?vip\.com/g.test(keyword)

module.exports = async (req, res) => {
  const { words } = req.query
  if (isVipLink(words)) {
    res.send(words)
    return
  }

  if (isTpwd(words)) {
    const result = await tpwdConvert(words)
    res.send(result)
    return
  }
}
