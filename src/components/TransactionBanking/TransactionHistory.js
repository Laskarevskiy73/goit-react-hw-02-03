import React from 'react';
import PropTypes from 'prop-types';
import style from './css/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={style.history}>
    <thead>
      <tr className={style.bgcHead}>
        <th className={style.headList}>Transaction</th>
        <th className={style.headList}>Amount</th>
        <th className={style.headList}>Date</th>
      </tr>
    </thead>
    {items.length !== 0 &&
      items.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className={style.listItem}>{item.type}</td>
            <td className={style.listItem}>{item.amount}$</td>
            <td className={style.listItem}>{item.date}</td>
          </tr>
        </tbody>
      ))}
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
