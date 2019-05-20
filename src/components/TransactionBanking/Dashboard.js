import React, { Component } from 'react';
import shortid from 'shortid';
import { NotificationContainer } from 'react-notifications';
import Notification from './Notyfication';
import Controls from './Controls';
import Balance from './Balance';
import TransactionHistory from './TransactionHistory';
import style from './css/Dashboard.module.css';
import 'react-notifications/lib/notifications.css';

const notyfication = new Notification();
const DEPOSIT = 'Deposit';
const WITHDRAWAL = 'Withdrawal';

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    amount: '',
    type: '',
  };

  componentDidMount() {
    const historyItems = localStorage.getItem('items');
    const balanceHistory = localStorage.getItem('balance');
    const transaction = localStorage.getItem('type');

    if (historyItems) {
      const history = JSON.parse(historyItems);
      const balance = JSON.parse(balanceHistory);
      const type = JSON.parse(transaction);

      this.setState({ history, balance, type });
    }
  }

  componentDidUpdate(prevState) {
    const { history, balance, type } = this.state;

    if (prevState.history !== history) {
      localStorage.setItem('items', JSON.stringify(history));
      localStorage.setItem('balance', JSON.stringify(balance));
      localStorage.setItem('type', JSON.stringify(type));
    }
  }

  newTransaction = transaction => {
    const { amount } = this.state;

    this.setState({ type: transaction });

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
      notyfication.createNotification('info')();
      this.resetField();
      return;
    }

    this.setState(prevState => ({
      history: [...prevState.history, this.newTransaction(DEPOSIT)],
      balance: prevState.balance + Number(amount),
    }));
    notyfication.createNotification('success')();
    this.resetField();
  };

  handleWithdrawal = () => {
    const { balance, amount } = this.state;

    if (balance < amount) {
      notyfication.createNotification('error')();
      this.resetField();
      return;
    }

    if (amount === '0' || amount === '') {
      notyfication.createNotification('info')();
      this.resetField();
      return;
    }

    this.setState(prevState => ({
      history: [...prevState.history, this.newTransaction(WITHDRAWAL)],
      balance: prevState.balance - Number(amount),
    }));
    notyfication.createNotification('success')();
    this.resetField();
  };

  resetField = () => {
    this.setState({ amount: '' });
  };

  balanceCalculation = () => {
    const { history, type } = this.state;

    return history.reduce(
      (acc, item) => (item.type === type ? acc + item.amount : acc),
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
          balanceCalculation={this.balanceCalculation}
        />
        <TransactionHistory items={history} />
        <NotificationContainer />
      </div>
    );
  }
}
