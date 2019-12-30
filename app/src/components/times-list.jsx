import React from 'react';

const TimesList = () => {

    return (
        <div>
            <h2> Times List</h2>
            <div>
                <label> Sort By: </label> {' '}
                <select>
                    <option> Time [fastes first]</option>
                    <option> Time [slowest first]</option>
                    <option disabled > --- </option>
                    <option> Title [a-z]</option>
                    <option> Title [z-a]</option>                
                </select>            
            </div>
            <ol>
            
            </ol>
        
        </div>
    )
}

export default TimesList;