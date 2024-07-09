import React from 'react';
import { NavLink } from 'react-router-dom';
import MovieData from '../MovieData';

const Movies = () => {

    return (
        <>
            <section className='py-3'>
                <div className='container'>
                    <div className='flex'>
                        <div className='grid gap-x-5 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                            {
                                MovieData.map((val, ind) => {
                                    return (
                                        <div key={ind}>
                                            <NavLink className="hover:text-black" to={`/movies/${val.movieName}`}>
                                                <img src={`${val.moviePath}`} className="card-img-top h-[357.14px] object-cover rounded-lg" alt={val.movieName} />
                                                <div className="card-body">
                                                    <h5 className="card-title overflow-hidden text-lg font-semibold">{val.movieName}</h5>
                                                    <div className='flex justify-between mb-3'>
                                                        <p className="card-text">UA</p>
                                                        <p>{val.language}</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movies
