/**
  * helper function
  * input: (object) - {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
  * output: (string) - ?a=1&b=2&c=[object Object]&k=1,2,3
*/
function queryStringify (data: object): string {
  if (!data) return ''

  let res = ''
  Object.entries(data).forEach(([key, val]: [string, any]) => { res += `${key}=${val}&` })
  return '?' + res.slice(0, -1)
}

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

interface IRequestOptions {
  method?: METHODS
  headers?: Record<string, string>
  timeout?: number
  data?: unknown
  withCredentials?: boolean
}

interface IRequestData {
  [key: string]: string | number
}

class HTTPTransport {
  get = async (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.GET })
  }

  post = async (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.POST })
  }

  put = async (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.PUT })
  }

  delete = async (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.DELETE })
  }

  request = async (url: string, options: IRequestOptions = {}): Promise<XMLHttpRequest> => {
    const {
      headers = {},
      method = METHODS.GET,
      data,
      timeout = 3000,
      withCredentials = false
    } = options

    const query: string = method === METHODS.GET ? queryStringify(data as IRequestData) : ''

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.open(method, url + query)

      if (withCredentials) {
        xhr.withCredentials = true
      }

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = () => xhr.status >= 300 ? reject(xhr) : resolve(xhr)
      xhr.onabort = () => reject(xhr)
      xhr.onerror = () => reject(xhr)
      xhr.timeout = timeout
      xhr.ontimeout = () => reject(xhr)

      if (method === METHODS.GET || data === undefined) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}

export default new HTTPTransport()
