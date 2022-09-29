import React, { useEffect, useState } from 'react';
import './Activity.css'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

const Activity = (props) => {
    const { cart } = props
    const [breakTime, setBreakT] = useState([0])
    useEffect(() => {
        const localStorageData = localStorage.getItem('breakTime')

        setBreakT(localStorageData)
    }, [breakTime])
    const addToLocalStorage = (event, param) => {

        const setBreak = localStorage.setItem('breakTime', JSON.stringify(param))
        setBreakT(setBreak)

    }

    const alert = () => {
        Swal.fire(
            'Good job!',
            'You Have Done Your Exercise!',
            'success'
        )
    }

    return (
        <div className='catagory-details'>
            <div>
                <h4 className='header'>Name:   Sidratul</h4>
                <h4 className='header'>Height: 5.8 inch</h4>
                <h4 className='header'>weight: 70 KG</h4>
            </div>
            <div className='break-part'>
                <h5 className='break-part-header'>Add A Break</h5>
                <button onClick={event => addToLocalStorage(event, 1)} >1 min</button>
                <button onClick={event => addToLocalStorage(event, 2)}>2 min</button><button onClick={event => addToLocalStorage(event, 3)}>3 min</button><button onClick={event => addToLocalStorage(event, 4)}>4 min</button><button onClick={event => addToLocalStorage(event, 5)}>5 min</button>
            </div>
            <div className='exercise-time '>
                <h6 className='exercise-time-header'>Exercise Details</h6>
                <h6 className='mt-3'>Exercise Time:{cart} min</h6>
                <h6 className='mt-3'>Break Time:{breakTime} min</h6>
            </div>
            <div>
                <Button onClick={alert} className='exercise-btn mt-5' variant="success">Activity Completed</Button>
            </div>
        </div>
    );
};

export default Activity;