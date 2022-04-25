declare module '*.svg'
declare module '*.pug'
declare module 'uuid'
declare module 'pug'

declare let process: {
  env: {
    HOST_API: string
    HOST_RESOURCES: string
    HOST_WS: string
  }
}
