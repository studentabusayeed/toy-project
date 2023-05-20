import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from '../SubCategory/SubCategory';

const Category = () => {
    const [datas, setDatas] = useState([]);
    const [activeTab, setActiveTab] = useState("");
    console.log(datas);

    useEffect(() => {
        fetch(`http://localhost:5000/allCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setDatas(result);
            });
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-8 text-cyan-600'>Shop by category</h2>
            <div className='flex justify-center'>
                <div className="divider w-1/2"></div>
            </div>
            <Tabs className="text-center">
                <TabList className="font-bold py-4 pt-2 bg-cyan-400 text-white">
                    <Tab onClick={() => handleTabClick('car')}>Car</Tab>
                    <Tab onClick={() => handleTabClick('truck')}>Truck</Tab>
                    <Tab onClick={() => handleTabClick('police')}>Police Car</Tab>
                </TabList>

                <TabPanel>
                    <div className='md:flex gap-6 justify-center bg-slate-200 px-20 py-10'>
                        {
                            datas.map(data => <SubCategory
                                key={data._id}
                                data={data}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:flex gap-6 justify-center bg-slate-200 px-20 py-10'>
                        {
                            datas.map(data => <SubCategory
                                key={data._id}
                                data={data}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:flex gap-6 justify-center bg-slate-200 px-20 py-10'>
                        {
                            datas.map(data => <SubCategory
                                key={data._id}
                                data={data}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;