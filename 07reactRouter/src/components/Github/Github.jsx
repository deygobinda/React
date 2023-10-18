import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data ,setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/deygobinda`)
    //     .then(response => response.json() )
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center lg:m-4 m-2 bg-gray-600 text-black p-4 text-3xl flex flex-col gap-5 items-center justify-center'>
        <h1>{data.name}</h1>
        <div className="flex lg:p-5  lg:gap-8 gap-4 items-center justify-center flex-col md:flex-row ">
            <img src={data.avatar_url} alt="user image"  className='m-1 lg:w-32 w-24 '/>
            <div className=' flex flex-col gap-2 text-start text-xs lg:text-xl'>
                <h3>User Name : {data.login}</h3>
                <p>following : {data.following}</p>
                <p>followers : {data.followers}</p>
            </div>
        </div>
     </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/deygobinda')
    return response.json()
}
