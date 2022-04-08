import React, { useEffect, useState } from 'react';
import useVolenter from '../../Hooks/useVolenter';
import Activity from '../Activity/Activity';
import './Main.css'



const Main = () => {
    const [volenters, setVolenters] = useVolenter();
    const [searchText, setSearchText]=useState([]);

    const searchFIlter= event=>{
        const text=event.target.value;
        const match=volenters.filter(v=>v.title.includes(text));
        setSearchText(match);
    }

    return (
        <div>
            <h1>Search From here</h1>
            <input onChange={searchFIlter} type="text" placeholder='Search Here' /><br />
            <br />
            <div className='activity-container'>



                {
                    searchText.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;