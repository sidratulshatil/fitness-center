import React from 'react';
import './Items.css'
import Button from 'react-bootstrap/Button';

const Items = (props) => {

    const { name, img, time } = props.item
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Time Required:{time}</h4>
            <Button className='exercise-btn' variant="success">Add To List</Button>

        </div>
    );
};

export default Items;