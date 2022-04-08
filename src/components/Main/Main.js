import React, { useEffect, useState } from 'react';
import useVolenter from '../../Hooks/useVolenter';
import Activity from '../Activity/Activity';
import './Main.css'



const Main = () => {
    const [volenters, setVolenters]=useVolenter();
    return (
        <div className='activity-container'>            
            {
                volenters.map(activity=><Activity
                key={activity.id}
                activity={activity}
                ></Activity>)
            }
        </div>
    );
};

export default Main;