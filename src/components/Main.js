import Axios from "axios";
import { useState, useEffect } from "react";
import Tables from "./table";

export function Home()
{
    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status === 200)
            {
                setData(res.data.users);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err);})
    },[])
    const listtables = () => {
        return data.map((val)=>{
            return <Tables obj={val} />
        })
    }
    return (
    <div>
        <div class="row">
        <thead>
          <th><u>Sno</u></th>
          <th><u>Profile Pic</u></th>
          <th><u>First Name</u></th>
          <th><u>Last Name</u></th>
          <th><u>Gender</u></th>
          <th><u>E-mail</u></th>
          <th><u>Username</u></th>
          <th><u>Domain</u></th>
          <th><u>IP</u></th>
          <th><u>University</u></th>
        </thead>
            {listtables()}
        </div>
        {console.log(data)}
    </div>
    );
}

