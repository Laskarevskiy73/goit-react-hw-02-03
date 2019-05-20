import React from 'react';
import PropTypes from 'prop-types';
import style from './css/Balance.module.css';

const Balance = ({ balance, balanceCalculation }) => (
  <section className={style.balance}>
    <p className={style.amount}>
      <span className={style.deposit}>⬆</span>
      {balanceCalculation().toLocaleString()}$
    </p>
    <p className={style.amount}>
      <span className={style.withdrawal}>⬇</span>
      {balanceCalculation().toLocaleString()}$
    </p>
    <p className={style.amount}>Balance: {balance.toLocaleString()}$</p>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  balanceCalculation: PropTypes.func.isRequired,
};

export default Balance;
