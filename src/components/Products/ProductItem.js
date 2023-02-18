import React from 'react'
import RIGHTARROW from '../../images/icons/right-arrow.png';

function ProductItem({data}) {
    return (
        <div className='d-flex mb-4'>
            <div className='col-6'>
                <img src={data.img__url}
                    width='100%'
                    height='350'
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    alt='image'
                />
            </div>
            <div className='col'>
                <div className='d-flex flex-column justify-content-between h-100 product__desc'>
                    <div></div>
                    <div>
                        <h6>{data.category}</h6>
                        <h5>{data.category__title}</h5>
                        <p className='banner__text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <button>
                        <span className='mr-3'>read more</span>
                        <img src={RIGHTARROW}
                            alt='right arrow'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem