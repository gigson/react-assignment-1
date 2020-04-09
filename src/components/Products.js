import React from 'react';
import Product from './Product';
import Categories from './Categories';
import { isCategoryValid } from './Categories';
import { useEffect, useState } from 'react';

let id = 1;
let productList = [
    { category: "Computers", title: "PC", image: "https://www.cyberpowerpc.com/images/cs/PCO11/cs-193-102_400.png", price: "10 GEL", id: id++ },
    { category: "Computers", title: "PC", image: "https://www.cyberpowerpc.com/images/cs/PCO11/cs-193-102_400.png", price: "10 GEL", id: id++ },
    { category: "Computers", title: "PC", image: "https://www.cyberpowerpc.com/images/cs/PCO11/cs-193-102_400.png", price: "10 GEL", id: id++ },

    { category: "Notebooks", title: "Laptop", image: "https://www.adorama.com/images/Large/mivfl00001.jpg", price: "20 GEL", id: id++ },
    { category: "Notebooks", title: "Laptop", image: "https://www.adorama.com/images/Large/mivfl00001.jpg", price: "20 GEL", id: id++ }
];


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setProducts([...productList]);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, []);


    function addItem(event) {
        if (isCategoryValid(event.target.category.value)) {
            let category = event.target.category.value
            let title = event.target.title.value
            let image = event.target.image.value
            let price = event.target.price.value

            let newProduct = { category: category, title: title, image: image, price: price, id: id++ }
            setProducts([...products, newProduct])
        }
        event.preventDefault();
    }

    function removeItem(productItem) {
        const index = products.findIndex(products => products.id == productItem.id);
        products.splice(index, 1);
        setProducts([...products])
    }

    return (
        <div>
            <div className="addNewItem">
                <form onSubmit={addItem}>
                    <label>
                        title:
                    <input type="text" name="title" />
                    </label><br></br>
                    <label>
                        image url:
                    <input type="text" name="image" />
                    </label><br></br>
                    <label>
                        price:
                    <input type="text" name="price" />
                    </label><br></br>
                    <Categories />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="category">Computers:</div>
            <div className="items">
                {
                    products.map(item => (
                        item.category == "Computers" ?
                            <Product productItem={item} removeItem={removeItem} />
                            : null
                    ))
                }
            </div>
            <div className="category">Notebooks:</div>
            <div className="items">
                {
                    products.map(item => (
                        item.category == "Notebooks" ?
                            <Product productItem={item} removeItem={removeItem} />
                            : null
                    ))
                }
            </div>

        </div>
    );
}


export default Products;