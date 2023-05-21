import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const info = useLoaderData();
    const { photo, name, category, price, quantity, email, rating, description } = info;
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-3 text-gray-500'>Single toy details</h2>
            <div className='flex justify-center'>
                <div className="divider w-1/2"></div>
            </div>
            <div className="hero min-h-screen bg-base-200 mb-5 rounded-lg">
                <div className="hero-content flex-col lg:flex-row border-4 shadow p-8">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h3 className="text-2xl font-bold ml-8">Seller Name:{name}</h3>
                        <h4 className='text-1xl font-semibold mt-2 ml-8'>Toy Name:{category}</h4>
                        <h4 className='text-1xl font-semibold mt-2 ml-8'>Email: {email}</h4>
                        <p className='text-1xl font-semibold mt-2 ml-8'>Price: {price}</p>
                        <p className='text-1xl font-semibold mt-2 ml-8'>Rating:<FaStar className='text-warning inline ml-2' /><FaStar className='text-warning inline' /> <FaStar className='text-warning inline mr-2' />  {rating}</p>
                        <p className='text-1xl font-semibold mt-2 ml-8'>Available quantity: {quantity}</p>
                        <p className='text-1xl font-semibold mt-2 ml-8'>Description: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;