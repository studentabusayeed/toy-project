import React, { useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data));
    return (
        <div className='my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysRow
                            key={toy._id}
                            toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;