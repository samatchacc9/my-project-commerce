import React from 'react';
import './TableOrder.css';
// import '../Container/Container.css';
function TableOrder() {
  return (
    <table>
      {/* <caption>Order Detail</caption> */}
      <thead>
        <tr>
          <th scope='col'>No.</th>
          <th scope='col'>Order date</th>
          <th scope='col'>Payment status</th>
          <th scope='col'>Summary</th>
          <th scope='col'>Detail</th>
          <th scope='col'>Cancle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label='No.'>1.</td>
          <td data-label='Order date'>20-10-2021</td>
          <td data-label='Payment status'>
            <font className='pending'> pending </font>
          </td>
          <td data-label='Summary'>800฿</td>
          <td data-label='Detail'>
            <a href='#' class='button-create blue'>
              <i class='fas fa-eye'></i>
            </a>
          </td>
          <td data-label='Cancle'>
            <a href='#' class='button-create red'>
              <i class='fas fa-window-close'></i>
            </a>
          </td>
        </tr>

        <tr>
          <td data-label='No.'>2.</td>
          <td data-label='Order date'>20-10-2021</td>
          <td data-label='Payment status'>
            <font className='complated'>complated</font>
          </td>
          <td data-label='Summary'>650฿</td>
          <td data-label='Detail'>
            <a href='#' class='button-create blue'>
              <i class='fas fa-eye'></i>
            </a>
          </td>
          <td data-label='Cancle'>
            <a href='#' class='button-create red disabled'>
              <i class='fas fa-window-close'></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableOrder;
