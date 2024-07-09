import React from 'react'
import { NavLink } from 'react-router-dom'

const Navi = () => {
    return (
        <>
            <nav className='w-screen h-16 shadow-md'>
                <div className='container'>
                    <div className='flex justify-between items-center'>
                        <NavLink to={"/"} className={`w-32 h-16 py-[9px]`}>
                            <img src={require('../assets/logo.png')} alt="" />
                        </NavLink>
                        <div className='flex gap-x-3'>
                            <NavLink to={"/list"}>List</NavLink>
                            <NavLink to={"/movies"}>Movies</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {/*<nav className="w-screen h-16 border-b shadow-md overflow-hidden">
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <NavLink to={"/"} className="w-32 h-16 py-2">
                            <img src={require("../assets/logo.png")} alt="logo" />
                        </NavLink>
                        <div>
                            <NavLink to={"/list"}>List</NavLink>
                            <NavLink to={"/movies"} className="pl-3">Movies</NavLink>
                        </div>
                    </div>
                </div>
            </nav>*/}
        </>
    )
}

export default Navi
