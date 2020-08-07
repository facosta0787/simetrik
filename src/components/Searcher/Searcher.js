import React from 'react'
import cs from 'classnames'

import './Searcher.scss'

function Searcher({ onSubmit, results, ...rest }) {
  return (
    <form
      className={cs('searcher', { 'searcher-results': results })}
      onSubmit={onSubmit}
      data-testid="searcher-form"
    >
      <span className="search-icon" />
      <input className="search-input" type="text" {...rest} />
      <div className="button-wrapper">
        <button data-testid="submit-button" className="button" type="submit">
          Search
        </button>
      </div>
    </form>
  )
}

export default Searcher
