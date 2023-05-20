import React from 'react';
import './SubCategory.css';

const SubCategory = ({ data }) => {
    const { photo, _id, description, rating, price, sellerName } = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl category-img">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className='text-2xl font-bold text-start'>Name: {sellerName}</h2>
                <p className='text-1xl font-semibold text-start'>Price: {price}</p>
                <p className='text-1xl font-semibold text-start'>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;