import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import numbro from 'numbro';
//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
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

let Balance = () => {
  const { transactions } = useContext(GlobalContext);


  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  let formattedValue;
  if ( total<= 1000) {
    formattedValue = numbro(total).format({
      average: true,
      mantissa: 2,
    }); // Value 1000 se kam hai, toh waise hi format karein
  } else {
    formattedValue = numbro(total).format({
      average: true,
      mantissa: 2,
    }); // Directly format in 'k' format
  }

  return (
    <>
      <p className=' text-[1rem] font-bold text-white'>Your Balance</p>
    <p className='text-[1.5rem] text-[white] font-bold'>$&nbsp;{formattedValue}</p>
    </>
  )
}
export default Balance;