import React from 'react';
import TableOrder from '../components/TableCustomer/TableOrder';
import Topic from '../components/Topic/Topic';
import '../components/Container/Container.css';

function CustomerOrder() {
  return (
    <>
      <Topic title='orders' />
      <div className='container-content'>
        <TableOrder />
      </div>
    </>
  );
}

export default CustomerOrder;
