import React from "react";
import "./Results.scss";

function Results({ title, headers, fields, data }) {
  console.log(data);
  return (
    <article className="results">
      <h3 className="results-title">{title}</h3>
      <table className="results-table">
        <thead className="table-head">
          <tr className="table-row">
            {headers.map((header) => (
              <th className="table-header">{header}</th>
            ))}
          </tr>
        </thead>

        <tbody className="table-body">
          {data.map((row) => (
            <tr className="table-row">
              {fields.map((item, idx) => (
                <td data-label={headers[idx]} className="table-cell">
                  {row[item]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Results;
