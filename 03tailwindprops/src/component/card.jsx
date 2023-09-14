import React from 'react'

function card({username, btnText="Visit me"}) {
    console.log({username})
    return(
        <>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
                <div className="m-auto">
                    <div className="flex flex-col bg-gray-200 max-w-sm shadow-md py-8 px-10 md:px-8 rounded-md">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src="https://randomuser.me/api/portraits/men/78.jpg" alt="" />
                            <div className="flex flex-col text-center md:text-left">
                                <div className="font-medium text-lg text-gray-800">{username}</div>
                                <div className="text-gray-500 mb-3 whitespace-nowrap">Senior Software Developer</div>
                                <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                                    <a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
                                    <a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-facebook-square"></i></a>
                                    <a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-github-square"></i></a>
                                </div>
                                <div className=" text-black  flex justify-center">
                                    <button className='bg-purple-800 capitalize hover:bg-purple-400 '>{btnText}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        
    )
}

export default card
