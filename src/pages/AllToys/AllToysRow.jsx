import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {
    const { name, photo, category, sellerName, price, quantity, _id } = toy;
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                <div className="avatar">
                    <div className="rounded w-28 h-28">
                        {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
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