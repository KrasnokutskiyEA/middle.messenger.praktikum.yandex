import Route from './Route'
import { Block } from './Block'
import store from '../store'

export default class Router {
  public routes: Route[]
  public history: History
  private _currentRoute: Route | null
  readonly _rootQuery: string
  readonly _pathnames: string[]
  private _onRouteCallback: () => Promise<void>
  private _unprotectedPaths: string[]
  static __instance: Router

  constructor (rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this._pathnames = []
    this._unprotectedPaths = []
    this.history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery
    this._onRouteCallback = async () => {}

    Router.__instance = this
  }

  get currentRoute (): Route | null {
    return this._currentRoute
  }

  public use (pathname: string, block: typeof Block): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })

    this.routes.push(route)
    this._pathnames.push(pathname)
    return this
  }

  private _hasRoute (pathname: string): string {
    if (!this._pathnames.includes(pathname)) {
      return '*'
    }
    return pathname
  }

  public start (): void {
    window.onpopstate = async () => {
      const pathname = this._hasRoute(window.location.pathname)
      void this._onRoute(pathname)
    }

    const pathname = this._hasRoute(window.location.pathname)
    void this._onRoute(pathname)
  }

  private async _onRoute (pathname: string): Promise<void> {
    store.shift('flow:store-did-update')
    const route = this.getRoute(pathname)

    if (!route) {
      return
    }

    if (this._currentRoute) {
      this._currentRoute.leave()
    }

    this._currentRoute = route

    route.render()

    if (!this._unprotectedPaths.includes(pathname as `/${string}`)) {
      await this._onRouteCallback()
    }

    store.setState('route', { name: pathname })
  }

  public onRoute (callback: () => Promise<void>): Router {
    this._onRouteCallback = callback
    return this
  }

  public setUnprotectedPaths (paths: string[]): Router {
    this._unprotectedPaths = paths
    return this
  }

  public go (pathname: string): void {
    this.history.pushState({}, '', pathname)
    void this._onRoute(pathname)
  }

  public back (): void {
    this.history.back()
  }

  public forward (): void {
    this.history.forward()
  }

  public getRoute (pathname: string): Route | undefined {
    return this.routes.find(route => route.match(pathname))
  }

  public getLocationPathname (): string {
    return window.location.pathname
  }
}
