import Route from './Route'
import { Block } from './Block'
import store from '../store'

export default class Router {
  /* class properties */
  static _instance: Router
  readonly _pathnames: string[]
  private _currentRoute: Route | null
  private _unprotectedPaths: string[]
  readonly _rootQuery: string
  private _onRouteCallback: () => Promise<void>
  public routes: Route[]
  public history: History

  /* constructor */
  constructor (rootQuery: string) {
    if (Router._instance) {
      return Router._instance
    }

    this._currentRoute = null
    this._rootQuery = rootQuery
    this._pathnames = []
    this._unprotectedPaths = []
    this._onRouteCallback = async () => {}
    this.history = window.history
    this.routes = []

    Router._instance = this
  }

  /* getters */
  get currentRoute (): Route | null {
    return this._currentRoute
  }

  /* private methods */
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

  private _hasRoute (pathname: string): string {
    if (!this._pathnames.includes(pathname)) {
      return '*'
    }
    return pathname
  }

  /* public methods */
  public use (pathname: string, block: typeof Block): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })

    this.routes.push(route)
    this._pathnames.push(pathname)
    return this
  }

  public start (): void {
    window.onpopstate = async () => {
      const pathname = this._hasRoute(window.location.pathname)
      void this._onRoute(pathname)
    }

    const pathname = this._hasRoute(window.location.pathname)
    void this._onRoute(pathname)
  }

  public setUnprotectedPaths (paths: string[]): Router {
    this._unprotectedPaths = paths
    return this
  }

  public onRoute (callback: () => Promise<void>): Router {
    this._onRouteCallback = callback
    return this
  }

  public forward (): void {
    this.history.forward()
  }

  public back (): void {
    this.history.back()
  }

  public go (pathname: string): void {
    this.history.pushState({}, '', pathname)
    void this._onRoute(pathname)
  }

  public getLocationPathname (): string {
    return window.location.pathname
  }

  public getRoute (pathname: string): Route | undefined {
    return this.routes.find(route => route.match(pathname))
  }
}
