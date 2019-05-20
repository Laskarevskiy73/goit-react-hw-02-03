import { Component } from 'react';
import { NotificationManager } from 'react-notifications';

export default class Notification extends Component {
  createNotification = type => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Введите сумму для проведения операции!');
          break;

        case 'success':
          NotificationManager.success('Cпасибо за проведеную операцию!');
          break;

        case 'error':
          NotificationManager.error(
            'На счету недостаточно средств для проведения операции!',
          );
          break;

        case 'warning':
          NotificationManager.warning('warning');
          break;

        default:
          break;
      }
    };
  };
}
