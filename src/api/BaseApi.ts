import http from '../classes/HttpTransport'
// import env from '../utils/env'
import { convertKeysToCamelCase } from '../helpers/formatStrings'

const defaultHeaders = {
  'Content-type': 'application/json; charset=UTF-8'
}

interface IBaseApi {
  baseUrl?: string
  path?: `/${string}`
  headers?: Record<string, string>
}

class BaseApi {
  /* class properties */
  readonly _http: typeof http
  readonly _baseUrl: string
  readonly _path: string
  readonly _headers: Record<string, string>

  constructor (config: IBaseApi = {}) {
    this._http = http
    this._baseUrl = config.baseUrl ?? process.env.HOST_API
    this._path = config.path ?? ''
    this._headers = config.headers ?? defaultHeaders
    console.log('-----base url=', this._baseUrl)
  }

  /* getters */
  get headers (): Record<string, string> {
    return this._headers
  }

  private getPath (): string {
    return `${this._baseUrl}${this._path}`
  }

  private handleOptions (newOptions?: Record<any, any>): Record<any, any> {
    const options = newOptions ?? {}
    options.headers = newOptions?.headers || this._headers
    return options
  }

  /* private methods */
  private handleResponse (res: XMLHttpRequest): Record<string, any> {
    if (res.response === 'OK') {
      return { ok: true }
    }

    const response = JSON.parse(res.response)

    if (response && Array.isArray(response)) {
      return response.map((item) => convertKeysToCamelCase(item))
    }

    if (response && typeof response === 'object') {
      return convertKeysToCamelCase(response)
    }

    return response
  }

  /* public methods */
  public get (endpoint: `/${string}`, options?: {}): Record<any, any> {
    return this._http.get(this.getPath() + endpoint, this.handleOptions(options))
      .then(this.handleResponse)
  }

  public async post (endpoint: `/${string}`, options?: {}): Promise<Record<string, any>> {
    // return this._http.post(this.getPath() + endpoint, this.handleOptions(options))
    //   .then(this.handleResponse)

    const resp = await this._http.post(this.getPath() + endpoint, this.handleOptions(options))
    return this.handleResponse(resp)
  }

  public put (endpoint: `/${string}`, options?: {}): Record<any, any> {
    return this._http.put(this.getPath() + endpoint, this.handleOptions(options))
      .then(this.handleResponse)
  }

  public delete (endpoint: `/${string}`, options?: {}): Record<any, any> {
    return this._http.delete(this.getPath() + endpoint, this.handleOptions(options))
      .then(this.handleResponse)
  }
}

export default BaseApi
