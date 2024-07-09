import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import MovieData from '../MovieData';

const MoviDetails = () => {

    const { name } = useParams();
    const [movie, setMovie] = useState({});

    const getMovies = () => {
        const movieData = MovieData.filter((val) => {
            return val.movieName === name;
        });

        if (movieData) {
            setMovie(movieData[0])
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <section className='py-5'>
                <div className='container'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h1 className='overflow-hidden text-2xl font-medium'>{name}</h1>
                        <p><NavLink to={"/"} className='text-pink-500'>Home</NavLink> / <NavLink to={"/movies"} className='text-pink-500'>Movies</NavLink> / {name}</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='flex flex-wrap justify-start'>
                        <div className='w-full sm:w-[80%] md:w-[50%] lg:w-[400px] h-[500px] rounded-xl mr-0 md:mr-5'>
                            <img src={movie.moviePath} alt="" className='w-full h-full' />
                        </div>
                        <div className='flex flex-col justify-center h-[500px]'>
                            <div>
                                <span className='font-semibold text-lg'>Name</span> : <span>{movie.movieName}</span>
                            </div>
                            <div className='my-4'>
                                <span className='font-semibold text-lg'>Lic</span> : <span>UA</span>
                            </div>
                            <div>
                                <span className='font-semibold text-lg'>Language</span> : <span>{movie.language}</span>
                            </div>
                            <div className='my-4'>
                                <span className='font-semibold text-lg'>2D / 3D</span> : <span>2D / 3D</span>
                            </div>
                            <div>
                                <span className='font-semibold text-lg'>Time</span> : <span>2 Hr 30 Min</span>
                            </div>
                            <div className='my-4'>
                                <span className='font-semibold text-lg'>Release Date</span> : <span>1st May 2000</span>
                            </div>
                            <div>
                                <span className='font-semibold text-lg'>Type</span> : <span>General</span>
                            </div>
                            <div className='mt-4 flex justify-between gap-x-2'>
                                <NavLink to={`/movies/bookTicket/${name}`} className='bg-pink-500 hover:bg-pink-600 text-white font-bold uppercase border border-pink-500 px-4 py-2 rounded-full'>Book Now</NavLink>
                                <NavLink to={`${movie.trailer}`} target='_blank' className='bg-pink-50 hover:bg-pink-500 text-pink-500 hover:text-white border-2 border-pink-500 font-bold uppercase px-4 py-2 rounded-full'>Watch Trailer</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoviDetails
