import React from 'react';
import PropTypes from 'prop-types';
import style from './css/Controls.module.css';

const Controls = ({ addingMoney, state, onDeposit, onWithdrawal }) => (
  <section className={style.controls}>
    <input
      className={style.input}
      onChange={addingMoney}
      value={state}
      type="number"
    />
    <button className={style.btn} onClick={onDeposit} type="button">
      Deposit
    </button>
    <button className={style.btn} onClick={onWithdrawal} type="button">
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  addingMoney: PropTypes.func.isRequired,
  onDeposit: PropTypes.func.isRequired,
  onWithdrawal: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default Controls;
