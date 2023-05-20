import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {
    const { name, category, sellerName, price, quantity, _id } = toy;
    return (
        <tr>
            <th>
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
                <Link to={`/toy/${_id}`}>
                    <button className='btn btn-outline'>Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysRow;