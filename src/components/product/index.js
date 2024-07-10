import React from 'react'
import wine from '../../assets/images/product-cat/prod1.png'
import './product.css'

const ProductList = ({ cat, data, catName, description }) => {
    return (
        <div className='product-container'>
            <h1 className='category-title'>{catName}</h1>
            {description && <p className='description'>{description}</p>}
            <div className='cat-list'>
                {data?.map((product) => (
                    <div className='cat-item' key={product.id}>
                        <img src={product.img} className='wine-img' alt='wine' />
                        {cat ?
                            <p className='cat-product-name'>{product.name}</p>
                            :
                            <div className='prod-info-con'>
                                <p className='product-name'>{product.name}</p>
                                <div className='price-container'>
                                    <p className='price'>N {product.price}</p>
                                    {product?.previousPrice && <p className='price-hash'>N {product.previousPrice}</p>}
                                </div>
                            </div>
                        }
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ProductList;
