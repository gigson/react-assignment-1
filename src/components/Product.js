import React from 'react';
import PropTypes from 'prop-types'

function Product({productItem, removeItem}) {
    return (
        <div className="item">
            <div>
                <img src={productItem.image} />
            </div>
            <div>
                {productItem.title}
            </div>
            <div>
                {productItem.price}
            </div>
            <button onClick = {() => removeItem(productItem)}>Delete</button>
        </div>
    );
}

Product.propTypes = {
    productItem: PropTypes.object.isRequired,
    removeItem: PropTypes.func
}


export default Product;