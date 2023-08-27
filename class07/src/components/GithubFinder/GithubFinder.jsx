import React, { useEffect, useState } from 'react'
import "./GithubFinder.css"

const GithubFinder = () => {
    const [inputVal,setInputVal] = useState("");
    const [userData,setUserData] = useState({})
    const [githubUser,setGithubUser] = useState("")

    useEffect(()=>{
        fetchapi()
    },[githubUser])
    const fetchapi = async()=>{
        const response = await fetch(`https://api.github.com/users/${githubUser ? githubUser : 'devahtesham'}`)
        const data = await response.json()
        setUserData(data)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(!inputVal){
            alert("invalid Input")
        }else{
            setGithubUser(inputVal)
            console.log(inputVal);
            setInputVal("")
        }
    }

    return (
        <>
            <h1 style={{textAlign:'center'}}>My Githib Finder</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="" id="" placeholder='Enter user name' onChange={(e)=>setInputVal(e.target.value)} value={inputVal} />
            </form>
            <div className="container">
                <div style={{textAlign:'center',marginBottom:30}}>
                    <img src={userData.avatar_url} alt="" style={{width:250, height:250}} />
                </div>
                <div className='box'>
                    <span>User Name</span>
                    <span>{userData.name}</span>
                </div>
                <div className='box'>
                    <span>company</span>
                    <span>{userData.company}</span>
                </div>
            </div>



            {/* <h1>name</h1>
        <h1>company</h1>
        <h1>blog</h1>
        <h1>bio</h1>
        <h1>public repos</h1> */}
        </>
    )
}

export default GithubFinder