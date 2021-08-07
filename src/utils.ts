export const formatTimeStamp = (ts_ms: number) => {
  const date = new Date(Number(ts_ms))
  return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}`
}
export const formatTime = (time: string) =>
  `${time.slice(0, 4)}/${time.slice(4)}`

const localeMap = {
  前端构建工具: 'Builder',
  微信小程序: 'Wechat',
  数据库: 'Database',
  数据结构算法: 'Algorithm',
  正则表达式: 'Regular',
  浏览器API: 'BrowserAPI',
  浏览器基础: 'Browser',
  网络基础: 'Net'
}

export const transformLabel = (label: string) => {
  if (label) {
    if (label in localeMap) return localeMap[label]
    return label.match(/[a-zA-Z\s]+/)[0]
  }
}