import Store from './Store'

describe('Store test', () => {
  it('should set state', () => {
    const store = new Store({ user: { id: '11' } })
    store.setState('user', { id: '22' })

    expect(store.getState().user.id).toEqual('22')
  })

  it('should emit event after store updated', () => {
    const store = new Store({ user: { id: '11' } })
    const mock = jest.fn()
    store.on('flow:store-did-update', mock)
    store.setState('user', { id: '22' })

    expect(mock).toHaveBeenCalled()
  })
})
