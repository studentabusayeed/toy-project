import React from 'react';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div>
            <section className="testimonial-section">
                <h3 className="testimonial-title">Our testimonials</h3>
                <div className="testimonial-container px-20">
                    <div className="testimonial">
                        <p className="w-50 text-1xl font-semibold p-5">I'm always impressed by the wide  range of toys this store has to offer. It's my go-to for all things playtime! The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.</p>
                            <div className="tests">
                                <img src="images/Layer.png" alt=""/>
                                    <div className="test">
                                        <h4 className="font-bold text-2xl">Smith</h4>
                                        <p className="text-1xl font-semibold">Designer</p>
                                    </div>
                            </div>
                        </div>
                            <div className="testimonial">
                                <p className="w-50 text-1xl font-semibold p-5">The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy. appreciate
                                the focus on sustainable and eco-friendly toys at this shop It's so important for our kid </p>
                                    <div className="tests">
                                        <img src="images/Layer-1.png" alt=""/>
                                            <div className="test">
                                                <h4 className="font-bold text-2xl">Sayeed</h4>
                                                <p className="text-1xl font-semibold">Designer</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    );
};

                    export default Testimonial;