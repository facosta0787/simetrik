import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App, { mapDataToRender } from './App'

import dataMock from './utils/testUtils/test.moks.json'

describe('App Component', () => {
  test('Renders without crashes', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('app')).toBeInTheDocument()
  })

  test('Should to perform the search and show the results', async () => {
    const { getByTestId, queryByTestId, queryAllByTestId } = render(<App />)

    expect(queryByTestId('results-section')).not.toBeInTheDocument()

    fireEvent.click(getByTestId('submit-button'))

    expect(getByTestId('results-section')).toBeInTheDocument()
    expect(queryAllByTestId('resutls-article').length).toBe(4)
  })

  describe('mapDataToRender', () => {
    it('Should return correct mapped data', () => {
      const expectedResult = [
        {
          id: '5f0bac253c7a916bf2afb425',
          conciliationName: 'ad',
          balance: '$2,762.87',
          description: 'Consectetur laboris consequat Lorem dolore officia',
          tags: 'ipsum, pariatur, velit, laborum, in, esse, eiusmod',
        },
      ]

      const fields = ['conciliationName', 'description', 'balance', 'tags']

      const { conciliaciones } = dataMock

      const mappedData = mapDataToRender(conciliaciones, fields)

      expect(mappedData).toEqual(expectedResult)
    })
  })
})
