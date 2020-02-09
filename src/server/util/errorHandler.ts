export function throwError(error) {
  return new Error(error)
}

export function handleError(error: Error, throwError?: boolean) {
  console.error(error)
  if (throwError) throw error
  return error
}

export function objectLogger(obj: object, message?: string) {
  if (message) console.log(message)
  Object.keys(obj).map(key => console.log(key + ': ' + JSON.stringify(obj[key], null, 2)))
}
