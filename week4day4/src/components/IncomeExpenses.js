import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import numbro from 'numbro';
//Money formatter function
// function moneyFormatter(num) {
  
//   let p = num.toFixed(2).split('.');
//   return (
//     '$ ' +
//     p[0]
//       .split('')
//       .reverse()
//       .reduce(function (acc, num, i, orig) {
//         return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
//       }, '') +
//     '.' +
//     p[1]
//   );
  
// }

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
  let formattedValue;
  let formattedexpense;
  if ( income<= 1000) {
    formattedValue = numbro(income).format({
      average: true,
      mantissa: 2,
    }); // Value 1000 se kam hai, toh waise hi format karein
  } else {
    formattedValue = numbro(income).format({
      average: true,
      mantissa: 2,
    }); // Directly format in 'k' format
  }
  if ( expense<= 1000) {
    formattedexpense = numbro(expense).format({
      average: true,
      mantissa: 2,
    }); // Value 1000 se kam hai, toh waise hi format karein
  } else {
    formattedexpense = numbro(expense).format({
      average: true,
      mantissa: 2,
    }); // Directly format in 'k' format
  }

  return (
    <div className="inc-exp-container">
        <div clas>
          <p className=' text-[0.75rem] font-bold'>INCOME</p>
  <p className="text-[#2ecc71;] font-bold">$&nbsp;{formattedValue}</p>
        </div>
        <div>
        <p className=' text-[0.75rem] font-bold'>EXPENSE</p> 
  <p className="text-[#c0392b] font-bold">$&nbsp;{formattedexpense}</p>
        </div>
      </div>
  )
}
