var random = require("../utils/util.js").random
var app_key = "brgmcdko4zy0z053955xnyb7cktrm388"
var app_secret = "sxka6bomi564j8l6zou4z33el53dj9rt2dfjpu5ye7kg4jtvt8lfwgxrs9mzbtrx"
var MD5 = require("../utils/md5.js")
// 序列化编码
function serializeParams(t = {}) {
  let keys = Object.keys(t)
  let sortKeys = keys.sort(($1, $2) => { return $1 > $2 })
  let result = ''
 
  sortKeys.map(key => {
    let value = t[key]
    if (value instanceof Array) {
      value = value.join(',')
    }
    
    result += `${key}${value}`
  })
  return result.toLocaleLowerCase()
}

function generateSign(params, timestamp, nonce) {

  let paramsSerializeString = serializeParams(params)
  return MD5(app_key + app_secret + timestamp + nonce + paramsSerializeString)
}

function createHeader(params, token = '') {
  let timestamp = parseInt((new Date()).valueOf() / 1000)
  let nonce = random(32)
  let sign = generateSign(params, timestamp, nonce)
  let header = {
    client_type: "4",
    signature: sign,
    timestamp: timestamp,//10位
    "Content-type": "application/json",
    Authorization: "Bearer " + token,
    app_key: app_key,
    nonce: nonce
  }
  return header
}

module.exports = createHeader