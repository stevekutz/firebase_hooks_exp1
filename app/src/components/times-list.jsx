import React, {useEffect} from 'react';
import {useState} from 'reinspect';
import {List, Select} from 'antd';

import firebase from '../firebase';

const {Option} = Select;
// use hash for sorting
const SORT_OPTIONS = {
    "TIME_ASC": {column: 'time_seconds', direction: 'asc'},
    "TIME_DESC": {column: 'time_seconds', direction: 'desc'},
    "TITLE_ASC": {column: 'title', direction: 'asc'},
    "TITLE_DESC": {column: 'title', direction: 'desc'}
}


function useTimes(sortBy = 'TIME_ASC'){
    const [times, setTimes] = useState([], 'Times FireStore State');

    useEffect(() => {
        // DON"T FORGET to put in unsubscribe callback

        // firebase
        const unsubscribe = firebase
            .firestore()
            .collection('times')
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot((snapshot) => {
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTimes(newTimes);
            })
        return () => unsubscribe()    
    }, [sortBy])
    return times
}

const TimesList = () => {
    const [sortBy, setSortBy] = useState('TIME_ASC')
    const times = useTimes(sortBy);

    return (
        <div style = {{width: '60%', margin: '0 auto'}}>
            <h2> Times List</h2>
            <div>
                <label> Sort By: </label> {' '}
                <select value = {sortBy} onChange = {e => setSortBy(e.currentTarget.value)}>
                    <option value = "TIME_ASC"> Time [fastest first]</option>
                    <option value = "TIME_DESC"> Time [slowest first]</option>
                    <option disabled > --- </option>
                    <option value = "TITLE_ASC"> Title [a-z]</option>
                    <option value = "TITLE_DESC"> Title [z-a]</option>                
                </select>            
            </div>
            <List gutter = {0}>
                {times.map((time) => 
                <List.Item key = {time.id}>
                <div>
                    {time.title}
                    <code> {time.time_seconds}  seconds</code>
                </div>
                </List.Item>        
                )}
            </List>
        
        </div>
    )
}

export default TimesList;