/**
  * helper function
  * input: (object) - {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
  * output: (string) - ?a=1&b=2&c=[object Object]&k=1,2,3
*/
function queryStringify (data: object): string {
  let res = ''
  Object.entries(data).forEach(([key, val]) => { res += `${key}=${val}&` })
  return '?' + res.slice(0, -1)
}

// -------------------------------
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
}

class HTTPTransport {
  get = async (url: string, options = {}): Promise<unknown> => {
    return await this.request(url, { ...options, method: METHODS.GET })
  }

  post = async (url: string, options = {}): Promise<unknown> => {
    return await this.request(url, { ...options, method: METHODS.POST })
  }

  put = async (url: string, options = {}): Promise<unknown> => {
    return await this.request(url, { ...options, method: METHODS.PUT })
  }

  delete = async (url: string, options = {}): Promise<unknown> => {
    return await this.request(url, { ...options, method: METHODS.DELETE })
  }

  request = async (url: string, options: IRequestOptions = {}): Promise<unknown> => {
    const {
      headers = {},
      method = METHODS.GET,
      data,
      timeout = 3000
    } = options

    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      const isGet = method === METHODS.GET

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url)

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}

export default HTTPTransport
