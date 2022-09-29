import React from 'react';
import './Activity.css'
import Button from 'react-bootstrap/Button';
const Activity = () => {
    return (
        <div className='catagory-details'>
            <div>
                <h4 className='header'>Name:   Sidratul</h4>
                <h4 className='header'>Height: 5.8 inch</h4>
                <h4 className='header'>weight: 70 KG</h4>
            </div>
            <div className='break-part'>
                <h5 className='break-part-header'>Add A Break</h5>
                <button >1 min</button><button>2 min</button><button>3 min</button><button>4 min</button><button>5 min</button>
            </div>
            <div className='exercise-time '>
                <h6 className='exercise-time-header'>Exercise Details</h6>
                <h6 className='mt-3'>Exercise Time: </h6>
                <h6 className='mt-3'>Break Time: </h6>
            </div>
            <div>
                <Button className='exercise-btn mt-5' variant="success">Activity Completed</Button>
            </div>
        </div>
    );
};

export default Activity;