import React from 'react';
import styles from './OrderForm.module.scss';

const OrderForm = () => {
  return (
    <div className={styles.OrderForm}>
      <form>
        <input type="text" placeholder="service address" />
        <button type="submit">order now</button>
      </form>
      <span>check aviailibility</span>
      <p>By clicking order now, you agree to our Privacy Policy</p>
    </div>
  );
};

export default OrderForm;
