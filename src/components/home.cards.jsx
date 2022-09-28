import React from 'react';
import Cards from './common/cards';
import couchCover from '../assets/couch.jpg'
import bedCover from '../assets/bed.jpg'
import tableCover from '../assets/table.jpg'
import cupboardCover from '../assets/cupboard.jpg'
import chairCover from '../assets/chair.jpg'

const HomeCards = () => {
    return (<div className='cardDiv col-12 col-md-12 col-lg-10 col-xxl-8 mx-auto my-5'>
        <div className='row justify-content-center'>
            <div className='col-10 col-sm-6 col-md-4 col-lg-4'>
                <Cards web={couchCover}
                    title="Couch" />
            </div>
            <div className='col-10 col-sm-6 col-md-4 col-lg-4'>
                <Cards web={cupboardCover}
                    title="Cupboards" />
            </div>
            <div className='col-10 col-sm-6 col-md-4 col-lg-4'>
                <Cards web={tableCover}
                    title="Tables" />
            </div>

            <div className='col-10 col-sm-6 col-md-4 col-lg-4'>
                <Cards web={bedCover}
                    title="Beds" />
            </div>
            <div className='col-10 col-sm-6 col-md-4 col-lg-4'>
                <Cards web={chairCover}
                    title="Chairs" />
            </div>
        </div>
    </div >
    );
}

export default HomeCards;