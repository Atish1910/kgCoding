// step 1 : fetch api in console //Done
// step 2 : console on ui via map  //Done
// step 1 : add search input , loading & waiting  
// step 1 : Add debpuncing

import axios from 'axios';
import React, { useEffect, useState } from 'react';
const API_URL = "https://jsonplaceholder.typicode.com/users";
const TwoApiFetching = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [debpuncing, setDebouncing] = useState("");

    const fetchApiData = async () =>{
        try{
            const res = await axios.get(API_URL);
            setUsers(res.data);
            // console.log(res.data);
        }catch(error){
            console.log("Error To Fetch Data", error)
        }finally{
            console.log("Code Working Properly");
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApiData();
        const handler = setTimeout(() => {
            setDebouncing(search)
        }, 500);

        return () => clearTimeout(handler);

    },[search]);

    const filteredData = users.filter((user) => 
        user.name.toLowerCase().includes(debpuncing.toLowerCase())
    );

    const handleOnSearch = (e) => {
        setSearch(e.target.value);
    }

    if(loading){
        return(
            <p>Wait....</p>
        )
    }

    return (
        <div>
            <input type="text"placeholder='Search Name' onChange={handleOnSearch} className='form-control mb-3' />
            {
                filteredData.length == 0 && 
                <p>No Data Found</p>
            }
            <ul>
                {
                    filteredData.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TwoApiFetching;