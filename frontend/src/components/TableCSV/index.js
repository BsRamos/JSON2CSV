import React from 'react';
import { Table } from 'react-bootstrap';
import './index.css';

function TableCSV({ csvText }) {
  const rows = csvText.split('\n');
  const keys = rows[0].split(',');
  const itens = [];
  console.log(rows);
  rows.forEach(element => {
    itens.push(element.split(/,[^\s]/));
  });
  itens.splice(itens.length - 1, 1);
  itens.splice(0, 1);

  return (
    <div className="tableFormat">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {keys.map(element => {
              return <th key={element}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {itens.map(item => {
            return (
              <tr key={item}>
                {item.map(element => {
                  return <td key={element}>{element}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TableCSV;
