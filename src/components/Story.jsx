import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Story = () => {
    useEffect(()=>{
        AOS.init({duration: 2500})
    },[])
    return (
        <div className='d-flex container justify-content-center mt-5' data-aos='fade-right'>
            <div className='w-50'>
                <h2 className='text-center'><span className='text-warning'>Our story</span></h2>
                <p className='text-secondary'>To help the business grow, Veaceslav participated in the 2021 grants competition announced by the “EU4Moldova: Focal Region” programme, funded by the EU and implemented by UNDP and UNICEF. As a result, he received approximately €25,000 for the purchase of various equipment installed in the restaurant, warehouse, bakery, and semi-finished products production point.

                    Currently, “Augusto” is endowed with high-performance equipment: electric ovens, fryers, refrigerated display cabinets, sinks, etc.

                    The popularity of the place is on the rise, thanks to the special Italian-style pizza-making technology. Augusto’s pizza dough is made using a unique technology and the cheese and filling are provided by local producers.

                   

                     </p>
            </div>
            <div>
                <img style={{ width: '500px' }} className='rounded ms-2' src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" alt="" />
            </div>
        </div>
    );
};

export default Story;