import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Items from '../Items/Items';
import './Catagory.css'


const Catagory = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('types.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    return (
        <div className='item'>
            {
                items.map(item => <Items key={item.id} item={item}></Items>)
            }

        </div>
    );
};

export default Catagory;