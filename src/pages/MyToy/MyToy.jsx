import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyAllToy from './MyAllToy';
import Swal from 'sweetalert2';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [asc, setAsc] = useState(true);
    const [toys, setToys] = useState([]);
    const url = `https://toy-project-server.vercel.app/myToys?email=${user?.email}&sort=${asc ? 'asc' : 'desc'}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [url, asc]);


    const handleDelete = id => {
        // const proceed = confirm('Are you sure you want to delete');
        // if (proceed) {
        fetch(`https://toy-project-server.vercel.app/toys/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Deleted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    const remaining = toys.filter(toy => toy._id !== id);
                    setToys(remaining);
                }
            })
        // }
    }

    return (
        <div className='my-5'>
            <div className='text-center mb-5'>
                <button
                    className="btn btn-secondary"
                    onClick={() => setAsc(!asc)}
                >{asc ? 'Short Price: High to Low' : 'Short Price: Low to High'}</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyAllToy
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyAllToy>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;