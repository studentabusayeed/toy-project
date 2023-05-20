import React, { useContext } from 'react';
import './SubCategory.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SubCategory = ({ data }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const { photo, _id, description, rating, price, sellerName } = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl category-img">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className='text-2xl font-bold text-start'>Name: {sellerName}</h2>
                <p className='text-1xl font-semibold text-start'>Price: {price}</p>
                <p className='text-1xl font-semibold text-start'>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={user && `/toy/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;