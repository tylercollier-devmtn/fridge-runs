import React from 'react'

export default function InCirculation(props) {
  const { name, runs } = props
  const total = runs.reduce((a, v) => a + v.count, 0)

  return (
    <div>
      <h1>{name} Runs in Circulation</h1>
      <h2>Total: {total}</h2>
      <table>
        <thead>
          <tr>
            <th>Owner</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {runs.map(x => (
            <tr key={x.ownerId}>
              <td>{x.displayName}</td>
              <td>{x.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
