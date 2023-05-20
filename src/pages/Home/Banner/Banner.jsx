import { FaBeer, FaCarAlt, FaArrowRight } from 'react-icons/fa';
import React from 'react';
import './Banner.css';
import banner from '../../../assets/banner.jpg';
const Banner = () => {
    return (
        <div>
            <div className='flex hello'>
                <div className='banner-container w-3/4 relative'>
                    <img className='' src={banner} alt="" />
                    <div className="absolute flex items-center h-full left-0 bottom-0 top-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    </div>
                </div>
                <div className='banner p-2 w-1/3 flex justify-center'>
                    <div className='ms-4 mt-8'>
                        <h3 className='text-3xl font-bold mb-2'>Toy Car</h3>
                        <button className='bg-blue-600 text-slate-200 rounded font-bold mt-2 mb-5 px-4 py-3'>A model car</button>
                        <p className='text-1xl font-semibold mb-4'>A toy car is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.</p>
                        <FaCarAlt  className='social-icon inline'/>
                        <FaArrowRight className=' ml-2 inline'/>
                        <span className='text-1xl font-semibold ml-4'>Toy Car Design</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;