export default function objectSearch(source, query) {
  if (typeof source === 'string')
    return source.toLowerCase().includes(query.toLowerCase())

  if (Array.isArray(source)) {
    return source.some(item => objectSearch(item, query))
  }

  if (typeof source === 'object') {
    return Object.keys(source).some(item => objectSearch(source[item], query))
  }

  return false
}
