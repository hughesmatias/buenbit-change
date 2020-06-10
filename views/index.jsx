import React from 'react'

const index = (props) => {
  return (
    <div>
      <h1>BuenBit 100 dolares equivalen a</h1>
      <table>
        <tr>
          <th>Fecha</th>
          <th>Dais por dolares</th>
          <th>Pesos por Dais</th>
        </tr>
        {props.data.map((row, key) => 
          (<tr key={key}>
            <td>{row.date}</td>
            <td>{row.dollarToDai}</td>
            <td>{row.daisToArs}</td>
          </tr>)
        )}
      </table>
    </div>
  )
}

export default index;
