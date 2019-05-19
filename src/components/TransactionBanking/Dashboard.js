import React, { Component } from 'react';
import shortid from 'shortid';
import Controls from './Controls';
import Balance from './Balance';
import TransactionHistory from './TransactionHistory';
import style from './Dashboard.module.css';

const DEPOSIT = 'Deposit';
const WITHDRAWAL = 'Withdrawal';

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    amount: '',
  };

  componentDidMount() {
    const historyItems = localStorage.getItem('items');
    const balanceHistory = localStorage.getItem('balance');

    if (historyItems) {
      const history = JSON.parse(historyItems);
      const balance = JSON.parse(balanceHistory);

      this.setState({ history, balance });
    }
  }

  componentDidUpdate(prevState) {
    const { history, balance } = this.state;

    if (prevState.history !== history) {
      localStorage.setItem('items', JSON.stringify(history));
      localStorage.setItem('balance', JSON.stringify(balance));
    }
  }

  newTransaction = transaction => {
    const { amount } = this.state;
    return {
      id: shortid.generate(),
      type: transaction,
      amount: Number(amount),
      date: new Date().toLocaleString(),
    };
  };

  handleAddingMoney = ({ target }) => {
    this.setState({
      amount: target.value,
    });
  };

  handleDeposit = () => {
    const { amount } = this.state;

    if (amount === '0' || amount === '') {
      alert('Введите сумму для проведения операции!');
      this.resetField();
      return;
    }

    this.setState(prevState => ({
      history: [...prevState.history, this.newTransaction(DEPOSIT)],
      balance: prevState.balance + Number(amount),
    }));
    this.resetField();
  };

  handleWithdrawal = () => {
    const { balance, amount } = this.state;

    if (balance < amount) {
      alert('На счету недостаточно средств для проведения операции!');
      this.resetField();
      return;
    }

    if (amount === '0' || amount === '') {
      alert('Введите сумму для проведения операции!');
      this.resetField();
      return;
    }

    this.setState(prevState => ({
      history: [...prevState.history, this.newTransaction(WITHDRAWAL)],
      balance: prevState.balance - Number(amount),
    }));
    this.resetField();
  };

  resetField = () => {
    this.setState({ amount: '' });
  };

  amountDeposit = () => {
    const { history } = this.state;

    return history.reduce(
      (acc, item) => (item.type === DEPOSIT ? acc + item.amount : acc),
      0,
    );
  };

  amountWithdraval = () => {
    const { history } = this.state;

    return history.reduce(
      (acc, item) => (item.type === WITHDRAWAL ? acc + item.amount : acc),
      0,
    );
  };

  render() {
    const { history, amount, balance } = this.state;

    return (
      <div className={style.dashboard}>
        <Controls
          state={amount}
          addingMoney={this.handleAddingMoney}
          onDeposit={this.handleDeposit}
          onWithdrawal={this.handleWithdrawal}
        />
        <Balance
          balance={balance}
          amountDeposit={this.amountDeposit}
          amountWithdraval={this.amountWithdraval}
        />
        <TransactionHistory items={history} />
      </div>
    );
  }
}
