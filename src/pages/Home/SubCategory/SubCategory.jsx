import './SubCategory.css';
import { Link} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const SubCategory = ({ data }) => {

    const { photo, _id, rating, price, sellerName } = data;
    return (
        <div className="card w-80 bg-base-100 shadow-xl category-img mb-4">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body border-t-2">
                <h2 className='text-2xl font-bold text-start'>Name: {sellerName}</h2>
                <p className='text-1xl font-semibold text-start'>Price: ${price}</p>
                <p className='text-1xl font-semibold text-start'>Rating:<FaStar className='text-warning inline ml-2'/><FaStar className='text-warning inline'/> <FaStar className='text-warning inline mr-2'/>  {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/singleDetails/${_id}`}>
                        <button className="btn btn-secondary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;