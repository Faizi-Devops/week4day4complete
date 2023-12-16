import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import numbro from 'numbro';
//Money formatter function
function moneyFormatter(num) {
  let p = num.split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}


export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  let formattedValue;
  let formattedexpense;
  if ( transaction.amount<= 1000) {
    formattedValue = numbro(transaction.amount).format({
      average: true,
      mantissa: 2,
    }); // Value 1000 se kam hai, toh waise hi format karein
  } else {
    formattedValue = numbro(transaction.amount).format({
      average: true,
      mantissa: 2,
    }); // Directly format in 'k' format
  }
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(formattedValue)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
