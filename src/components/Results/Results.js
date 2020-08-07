import React from 'react'
import './Results.scss'

function Results({ title, headers, fields, data }) {
  return (
    <article data-testid="resutls-article" className="results">
      <h3 className="results-title">{title}</h3>
      <table className="results-table">
        <thead className="table-head">
          <tr className="table-row">
            {headers.map((header, idx) => (
              <th key={`${header}-${idx}`} className="table-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="table-body">
          {data.map(row => (
            <tr key={row.id} className="table-row">
              {fields.map((item, idx) => (
                <td
                  key={`${row.id}-${idx}`}
                  data-label={headers[idx]}
                  className="table-cell"
                >
                  {row[item]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}

export default Results
