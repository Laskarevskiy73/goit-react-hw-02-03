import React from 'react';
import PropTypes from 'prop-types';
import style from './Balance.module.css';

const Balance = ({ balance, amountDeposit, amountWithdraval }) => (
  <section className={style.balance}>
    <p className={style.amount}>
      <span className={style.deposit}>⬆</span>
      {amountDeposit().toLocaleString()}$
    </p>
    <p className={style.amount}>
      <span className={style.withdrawal}>⬇</span>
      {amountWithdraval().toLocaleString()}$
    </p>
    <p className={style.amount}>Balance: {balance.toLocaleString()}$</p>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  amountDeposit: PropTypes.func.isRequired,
  amountWithdraval: PropTypes.func.isRequired,
};

export default Balance;
