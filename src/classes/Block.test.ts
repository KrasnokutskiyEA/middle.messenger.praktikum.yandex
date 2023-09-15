import { Block, type IProps } from './Block'

describe('Block test', () => {
  const mockCDM = jest.fn()
  const mockCDU = jest.fn()
  const mockRND = jest.fn()

  class PrimaryBtn extends Block {
    constructor (props: IProps) {
      super('button', props)
    }

    componentDidMount (): void {
      mockCDM()
    }

    componentDidUpdate (): boolean {
      mockCDU()
      return true
    }

    render (): void {
      mockRND()
    }
  }

  const block = new PrimaryBtn({ label: 'Sign In' })

  it('componentDidMount hook have been called', () => {
    expect(mockCDM).toHaveBeenCalledTimes(1)
  })

  it('prop is updated correctly', () => {
    const oldPropValue = block.props.label
    block.setProps({ label: 'Sign Out' })
    const newPropValue = block.props.label

    expect([oldPropValue, newPropValue]).toStrictEqual(['Sign In', 'Sign Out'])
  })

  it('render hook have been called twice - after mount and after update', () => {
    expect(mockRND).toHaveBeenCalledTimes(2)
  })

  it('componentDidUpdate hook have been called', () => {
    expect(mockCDU).toHaveBeenCalledTimes(1)
  })

  it('root element is assigned correctly', () => {
    expect(block.getContent().tagName).toBe('BUTTON')
  })
})
