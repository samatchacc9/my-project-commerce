import React from 'react';
import FormSearch from '../components/Form/FormSearch';
import TableOrderSeller from '../components/Table/TableOrderSeller';
import Topic from '../components/Topic/Topic';

function SellerManageOrder() {
  return (
    <>
      <Topic title='orders' />

      <div className='container-content'>
        <FormSearch />
        <TableOrderSeller />
      </div>
    </>
  );
}

export default SellerManageOrder;
