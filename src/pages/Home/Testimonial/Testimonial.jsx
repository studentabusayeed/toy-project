import React from 'react';
import './Testimonial.css';
import layer1 from '../../../assets/Layer.png';
import layer2 from '../../../assets/Layer-1.png';
const Testimonial = () => {
    return (
        <div>
            <section className="testimonial-section bg-cyan-100">
                <h3 className="testimonial-title">Customer Testimonials</h3>
                <h5 className='text-2xl font-semibold text-center mb-10 text-slate-500'>What Clients Says</h5>
                <div className="testimonial-container px-20">
                    <div className="testimonial">
                        <p className="w-50 text-1xl font-semibold p-5">I'm always impressed by the wide  range of toys this store has to offer. It's my go-to for all things playtime! The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.</p>
                            <div className="tests">
                                <img src={layer1} alt=""/>
                                    <div className="test">
                                        <h4 className="font-bold text-2xl">Smith</h4>
                                        <p className="text-1xl font-semibold">Programmer</p>
                                    </div>
                            </div>
                        </div>
                            <div className="testimonial">
                                <p className="w-50 text-1xl font-semibold p-5">The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy. appreciate
                                the focus and eco-friendly toys at this shop It's so important for our kid </p>
                                    <div className="tests">
                                        <img src={layer2} alt=""/>
                                            <div className="test">
                                                <h4 className="font-bold text-2xl">Sayeed</h4>
                                                <p className="text-1xl font-semibold">Developer</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    );
};

                    export default Testimonial;