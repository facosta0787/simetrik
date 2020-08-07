import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Results from './Results'

describe('Restuls Component', () => {
  afterEach(cleanup)

  it('Should match to snapshot', () => {
    const testProps = {
      title: 'this is a title',
      headers: ['id', 'name', 'address'],
      fields: ['id', 'name', 'address'],
      data: [
        {
          id: 1,
          name: 'Tony Stark',
          address: 'Stark Tower',
        },
      ],
    }

    const { container } = render(<Results {...testProps} />)
    expect(container).toMatchSnapshot()
  })
})
