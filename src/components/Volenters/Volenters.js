import React, { useState } from 'react';
import useVolenter from '../../Hooks/useVolenter';
import Activity from '../Activity/Activity';

const Volenters = () => {
const [volenters, setVolenters]=useVolenter();

    return (
        <div>
            <h1>All Volenters</h1>
            {
                volenters.map(activity=><Activity
               key={activity.id}
               activity={activity}
                    ></Activity>)
            }
        </div>
    );
};

export default Volenters;