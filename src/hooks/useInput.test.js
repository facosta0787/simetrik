import { renderHook, act } from '@testing-library/react-hooks'
import useInput from './useInput'

describe('useInput Hoook', () => {
  it('return updated value', () => {
    const initialValue = ''
    const { result } = renderHook(() => useInput(initialValue))

    expect(result.current[0]).toEqual('')

    act(() => {
      result.current[3]('awesome')
    })

    expect(result.current[0]).toEqual('awesome')

    act(() => {
      result.current[2]()
    })

    expect(result.current[0]).toEqual('')
  })
})
