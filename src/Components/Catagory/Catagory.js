import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';
import Faq from '../Faq/Faq';
import Items from '../Items/Items';
import './Catagory.css';



const Catagory = () => {

    const [items, setItems] = useState([])
    const [cart, setCart] = useState([0])


    useEffect(() => {
        fetch('types.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])




    return (
        <div className='items'>
            <div className='item'>
                {
                    items.map(item => <Items key={item.id} item={item} cart={cart} setCart={setCart} ></Items>)
                }
            </div>
            <div>
                <Activity cart={cart} ></Activity>
            </div>

        </div>



    );
};

export default Catagory;