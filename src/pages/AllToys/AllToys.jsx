import React, { useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    fetch('https://toy-project-server.vercel.app/toys')
        .then(res => res.json())
        .then(data => setToys(data));

    const handleSearch = () => {
        fetch(`https://toy-project-server.vercel.app/getByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    };

    return (
        <div className='my-5'>
            <dir className="bg-slate-200 p-5 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="px-2 py-1"
                />{" "}
                <button onClick={handleSearch} className='btn btn-secondary ml-2'>Search</button>
            </dir>
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