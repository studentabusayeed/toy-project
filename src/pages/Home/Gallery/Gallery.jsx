import React, { useState } from 'react';
import Galleryimg from './Galleryimg';

const Gallery = () => {
    const [users, setUsers] = useState([]);
    fetch('data.json')
    .then(res => res.json())
    .then(data => setUsers(data));
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-8 text-cyan-600'>Gallery Toy Car</h2>
            <div className='flex justify-center'>
                <div className="divider w-1/2"></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center my-5'>
                {
                    users.map(user => <Galleryimg
                    key={user.id}
                    user={user}
                    ></Galleryimg>)
                }
            </div>
        </div>
    );
};

export default Gallery;