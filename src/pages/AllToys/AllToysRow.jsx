import React from 'react';

const AllToysRow = ({ toy }) => {
    const { name, category, sellerName, price, quantity } = toy;
    return (
        <tr>
            <th>
                <button className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                {name}
            </td>
            <td>
                {category}
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                {price}
            </td>
            <td>
                {quantity}
            </td>
            <th>
                <button className='btn btn-outline'>Details</button>
            </th>
        </tr>
    );
};

export default AllToysRow;