import React from 'react';
import './Items.css'
import Button from 'react-bootstrap/Button';


const Items = (props) => {

    const { name, img, time } = props.item
    const { setCart, cart } = props

    const handleAddToDetails = () => {
        if (cart) {

            const newExcersieTime = parseInt(cart) + time

            setCart(newExcersieTime)
        }
        else (

            setCart(time)
        )

    }
    return (
        <div className='exercise'>

            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Time Required:{time} min</h4>
            <Button onClick={handleAddToDetails} className='exercise-btn' variant="success">Add To List</Button>

        </div>


    );
};

export default Items;