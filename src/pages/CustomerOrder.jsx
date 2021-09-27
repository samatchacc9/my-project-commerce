import React from 'react';
import TableOrderCustomer from '../components/Table/TableOrderCustomer';
import Topic from '../components/Topic/Topic';
import '../components/Container/Container.css';

function CustomerOrder() {
  return (
    <>
      <Topic title='orders' />
      <div className='container-content'>
        <TableOrderCustomer />
      </div>
    </>
  );
}

export default CustomerOrder;
