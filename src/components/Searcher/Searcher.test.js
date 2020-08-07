import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Searcher from './Searcher'

describe('Searcher Component', () => {
  it('Renders the form', () => {
    const { getByTestId } = render(<Searcher />)
    expect(getByTestId('searcher-form')).toBeInTheDocument()
  })

  it('Should to perform the search', () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(<Searcher onSubmit={onSubmit} />)

    fireEvent.submit(getByTestId('searcher-form'))

    expect(onSubmit).toHaveBeenCalled()
  })

  it('Should apply the class searcher-results if there are results', () => {
    const { getByTestId } = render(<Searcher results={[1, 2, 3]} />)
    const form = getByTestId('searcher-form')
    expect(form).toBeInTheDocument()
    expect(form).toHaveClass('searcher searcher-results')
  })
})
