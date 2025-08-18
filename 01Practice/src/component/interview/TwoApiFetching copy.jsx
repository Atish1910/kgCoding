import axios from "axios";
import { useEffect, useState } from "react";


const API_URL = "https://jsonplaceholder.typicode.com/users";
const TwoApiFetching = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [debouncing, setDebouncing] = useState("");
    
    const fetchApiData = async () => {
        try {
            const res = await axios.get(API_URL);
            setUsers(res.data);
        } catch (error) {
            console.log("Error while Fetching data : ", error)
        }finally{
            setLoading(false);
            console.log("Api Fetch Successfully");
        }
        
    }

    useEffect(() => {
        fetchApiData();
        
        const handler = setTimeout(() => {
            setDebouncing(search)
        }, 500);

        return () => clearTimeout(handler);

    }, [search]);



    if(loading){
        return(
            <p className="text-center text-danger">Wait for min....</p>
        )
    }

    const filteredData = users.filter((user) =>
        user.name.toLowerCase().includes(debouncing.toLowerCase())
    );
    const handleOnSearch = (e) => {
            setSearch(e.target.value)
    }
    
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h6 className='text-center'>Api Fetch data</h6>
                    <input type="text" placeholder="Search On Name" className="form-control"onChange={handleOnSearch}/>
                    <label htmlFor="" className=" mb-3 text-success">Once You DOne with search please Enter</label>
                    {
                        filteredData.length == 0 && 
                        <p className="text-danger">No Data Found</p>
                    }
                    <ul>
                        {
                            filteredData.map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TwoApiFetching;