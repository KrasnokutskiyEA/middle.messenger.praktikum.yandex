import Router from '../classes/Router'
import { Block } from '../classes/Block'

describe('Router test', () => {
  const router = new Router('.app')

  class ChatPage extends Block {}
  class ProfilePage extends Block {}
  class PasswordPage extends Block {}

  const callback = jest.fn()

  router
    .setUnprotectedPaths(['/profile'])
    .onRoute(async () => callback())
    .use('/', ChatPage)
    .use('/profile', ProfilePage)
    .use('/password', PasswordPage)
    .start()

  it('Change route', () => {
    router.go('/')
    router.go('/profile')
    expect(router.history.length).toEqual(3)
  })

  it('Get pathname', () => {
    router.go('/password')
    const { pathname } = router.currentRoute ?? {}
    expect(pathname).toEqual('/password')
  })

  it('Call onRoute', () => {
    expect(callback).toBeCalledTimes(3)
  })
})
