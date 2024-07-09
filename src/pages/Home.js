import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MovieData from '../MovieData';

const Home = () => {

    const [trending, setTrending] = useState([]);
    const [hindi, setHindi] = useState([]);
    const [english, setEnglish] = useState([]);
    const [gujarati, setGujarati] = useState([]);

    const trendingMovie = MovieData.filter((val) => {
        return val.tags === "trending"
    });

    const hindiMovies = MovieData.filter((val) => {
        return val.language === "Hindi"
    }).slice(0, 5);

    const englishMovies = MovieData.filter((val) => {
        return val.language === "English"
    }).slice(0,5)

    const gujaratiMovies = MovieData.filter((val) => {
        return val.language === "Gujarati"
    }).slice(0, 5)

    useEffect(() => {
        setTrending(trendingMovie);
        setHindi(hindiMovies);
        setEnglish(englishMovies);
        setGujarati(gujaratiMovies)
    }, [MovieData]);


    return (
        <>
            <section className='pt-4'>
                <div className='container'>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl overflow-hidden'>Movie List</h1>
                        <p>This is the movie list page for Surat</p>
                    </div>
                </div>
            </section>
            <section className='py-3'>
                <div className='container'>
                    <div className='relative'>
                        <img src={require('../assets/offerBackground.jpeg')} className='w-full h-80 object-cover' alt="" />
                        <div className='flex flex-col justify-between h-[50%] absolute top-[70px] left-4'>
                            <h2 className='text-white text-xl sm:text-2xl md:text-4xl font-bold overflow-hidden'>BlockBuster savings on movies</h2>
                            <h3 className='text-white text-base sm:text-lg md:text-xl font-semibold'>Get Rs 75 Off* at Rajhans Flemingo : Katargam</h3>
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" className="bg-black text-white border-white px-2 py-2">Use Code</button>
                                    <button type="button" className="bg-white text-black font-semibold px-2 py-2">CHERISH75</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='flex justify-between items-center my-2'>
                        <h1 className='overflow-hidden text-2xl'>Trending 🔥</h1>
                        <NavLink to={"/movies"} className="flex items-center text-pink-400">View All&nbsp;<i className="fa-solid fa-chevron-right"></i></NavLink>
                    </div>
                    <div className='grid gap-x-5 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5'>
                        {
                            trending.map((val, ind) => {
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
                    <div className='flex justify-between items-center my-2'>
                        <h1 className='overflow-hidden text-2xl'>Hindi Movies</h1>
                        <NavLink to={"/movies"} className="flex items-center text-pink-400">View All&nbsp;<i className="fa-solid fa-chevron-right"></i></NavLink>
                    </div>
                    <div className='grid gap-x-5 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5'>
                        {
                            hindi.map((val, ind) => {
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
                    <div className='flex justify-between items-center my-2'>
                        <h1 className='overflow-hidden text-2xl'>Gujarati Movies</h1>
                        <NavLink to={"/movies"} className="flex items-center text-pink-400">View All&nbsp;<i className="fa-solid fa-chevron-right"></i></NavLink>
                    </div>
                    <div className='grid gap-x-5 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5'>
                        {
                            gujarati.map((val, ind) => {
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
                    <div className='flex justify-between items-center my-2'>
                        <h1 className='overflow-hidden text-2xl'>English Movies</h1>
                        <NavLink to={"/movies"} className="flex items-center text-pink-400">View All&nbsp;<i className="fa-solid fa-chevron-right"></i></NavLink>
                    </div>
                    <div className='grid gap-x-5 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5'>
                        {
                            english.map((val, ind) => {
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
            </section>
        </>
    )
}

export default Home
