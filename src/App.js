import React, { useCallback, useState } from 'react'
import cs from 'classnames'
import useInput from './hooks/useInput'
import db from './data'
import objectSearch from './utils/objectSearch'
import Searcher from './components/Searcher'
import Results from './components/Results'

import './App.scss'
import simetrikLogo from './shared/img/simetrik-logo.svg'

function App() {
  const [query, bind] = useInput('')
  const [results, setResults] = useState({})

  const handleSearch = useCallback(
    event => {
      event.preventDefault()
      const searchResults = Object.keys(db).reduce((accum, curr) => {
        const filtered = db[curr].filter(item => objectSearch(item, query))
        if (filtered) return { ...accum, [curr]: filtered }
        return accum
      }, {})
      setResults(searchResults)
    },
    [query]
  )

  const conciliationsConfig = {
    title: 'Conciliations',
    headers: ['Name', 'Description', 'Balance', 'Tags'],
    fields: ['conciliationName', 'description', 'balance', 'tags'],
  }

  const sourcesConfig = {
    title: 'Sources',
    headers: ['Name', 'Description', 'Company', 'Tags'],
    fields: ['name', 'description', 'company', 'tags'],
  }

  const boardsConfig = {
    title: 'Boards',
    headers: ['Name', 'Description', 'Tags'],
    fields: ['dashboardName', 'description', 'tags'],
  }

  const usersConfig = {
    title: 'Usuarios',
    headers: ['Name', 'Email', 'Phone', 'Address', 'Tags'],
    fields: ['company', 'email', 'phone', 'address', 'tags'],
  }

  return (
    <main
      className={cs('app-container', {
        'app-container-results': Object.keys(results).length,
      })}
      data-testid="app"
    >
      <div data-testid="hero-banner" className="hero">
        <img className="logo" src={simetrikLogo} alt="simetrik logo" />
        <Searcher
          onSubmit={handleSearch}
          results={Object.keys(results).length}
          {...bind}
        />
      </div>

      {Object.keys(results).length > 0 && (
        <section data-testid="results-section" className="results-wrapper">
          <Results
            data={mapDataToRender(
              results.conciliaciones,
              conciliationsConfig.fields
            )}
            {...conciliationsConfig}
          />
          <Results
            data={mapDataToRender(results.fuentes, sourcesConfig.fields)}
            {...sourcesConfig}
          />
          <Results
            data={mapDataToRender(results.tableros, boardsConfig.fields)}
            {...boardsConfig}
          />
          <Results
            data={mapDataToRender(results.usuarios, usersConfig.fields)}
            {...usersConfig}
          />
        </section>
      )}
    </main>
  )
}

export function mapDataToRender(data, fields) {
  return data.map(item => {
    const newItem = { id: item._id }
    fields.forEach(field => {
      newItem[field] = field === 'tags' ? item[field].join(', ') : item[field]
    })
    return newItem
  })
}

export default App
