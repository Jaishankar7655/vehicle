    import React, { useEffect, useState } from 'react'

    function Searchitem( {query , setquery} ) {
        const [sticky , setsticky] =useState(false)
        useEffect(()=>{

            const handlescroll = ()=>{
                setsticky(window.scrollY > 100 )
            }
            window.addEventListener("scroll" , handlescroll )

            return ()=>{
                window.removeEventListener("scroll" , handlescroll )   
            }
        } , [])


    return (
        <>
        <div className={`w-full py-4 transition-all duration-300 ${ sticky ? "fixed top-0 left-0 bg-white shadow-md z-50" :"relative" }`} >
            <div className='max-w-[500px] flex m-auto border border-red-400' >
                    <div className='w-full border' ><input onChange={(e)=>setquery(e.target.value)} className='w-full p-3 outline-0  rounded-sm' type="text" placeholder="Search for the services" /> </div>
                    <div ><button className='bg-red-500 h-full px-2 rounded-sm' >Search</button></div>
            </div>
        </div>
        </>
    )
    }

    export default Searchitem