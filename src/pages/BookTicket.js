import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import SeatMap from './SeatMap';
import { Modal } from 'react-bootstrap';

const BookTicket = () => {

    const { name } = useParams();
    const seat = JSON.parse(localStorage.getItem(`${name}`));
    let movie = JSON.parse(localStorage.getItem('movieList')) || [];
    // const [movieList, setMovieList] = useState(movie);
    const [userName, setUserName] = useState("");
    const [userMobile, setUserMobile] = useState("");
    const [firstCategorySeat, setFirstCategorySeat] = useState([]);
    const [secondCategorySeat, setSecondCategorySeat] = useState([]);
    const [thirdCategorySeat, setThirdCategorySeat] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [total, setTotal] = useState(0);
    var select = [];
    var price = [];
    const navigate = useNavigate();
    const [show, setShow] = useState(false)

    const [state, setState] = useState(seat || SeatMap);

    const firstCat = state.filter((val) => val.price === 350);
    const secondCat = state.filter((val) => val.price === 250);
    const thirdCat = state.filter((val) => val.price === 150);

    useEffect(() => {
        setFirstCategorySeat(firstCat)
        setSecondCategorySeat(secondCat)
        setThirdCategorySeat(thirdCat)
    }, []);


    const handleChange = (id) => {
        const temp = [...state];
        temp[id - 1].isSelected === false ? temp[id - 1].isSelected = true : temp[id - 1].isSelected = false;
        setState(temp);
    };

    const reset = () => {
        for (var i = 0; i < state.length; i++) {
            state[i].isSelected = false;
        }
        setSelectedSeat([]);
        setSelectedPrice([]);
    };

    const totalFun = () => {
        const sumOfArray = price.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setTotal(sumOfArray)
    }

    const bookNow = () => {
        const temp = [...state];
        for (let i = 0; i < SeatMap.length; i++) {
            for (let j = 0; j < selectedSeat.length; j++) {
                if (temp[i].seat === selectedSeat[j]) {
                    temp[i].booked = true;
                }
            }
        }
        setState(temp);
        localStorage.setItem(`${name}`, JSON.stringify(state));
        let list = {
            movie: name,
            name: userName,
            mobile: userMobile,
            seat: selectedSeat
        };
        navigate("/");
        movie.push(list)
        localStorage.setItem('movieList', JSON.stringify(movie));
        setShow(false);
        window.alert(`Ticket Booked Successfully for ${name}`);
    }

    useEffect(() => {
        for (var st of state) {
            if (st.isSelected === true) {
                select.push(st.seat);
                price.push(st.price);
            } else {
                select.push();
                price.push();
            }
        }
        setSelectedSeat([...select]);
        setSelectedPrice([...price]);
        totalFun();
    }, [state]);

    //this function reset all variables and states jyare farivar booking karo tyare seat block hoi ane total , selectedseat evu badhu zero hoi
    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <section className='py-5'>
                <div className='container'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <h1 className='overflow-hidden text-2xl font-medium'>Book Tickets For {name}</h1>
                        <p><NavLink to={"/"} className='text-pink-500'>Home</NavLink> / <NavLink to={"/movies"} className='text-pink-500'>Movies</NavLink> / {name}</p>
                    </div>
                </div>
            </section>
            <section className='py-2 mb-16 overflow-x-auto'>
                <div className='container'>
                    <div className='flex flex-col justify-between items-stretch m-auto overflow-y-auto'>
                        <div className='flex flex-wrap gap-x-3 gap-y-2'>
                            <div className='flex gap-x-2'>
                                <p className='w-[24px] h-[24px] bg-gray-500 rounded-full'></p><span>Booked</span>
                            </div>
                            <div className='flex gap-x-2'>
                                <p className='w-[24px] h-[24px] bg-blue-500 rounded-full'></p><span>Selected</span>
                            </div>
                            <div className='flex gap-x-2'>
                                <p className='w-[24px] h-[24px] bg-yellow-800 rounded-full'></p><span>Available</span>
                            </div>
                        </div>
                        <h3 className='font-bold text-center my-2 overflow-hidden'>Price : 350 Rs.</h3>
                        <div className='grid place-items-center grid-cols-10 gap-x-[8px] gap-y-4 my-3'>
                            {
                                firstCategorySeat.map((val, ind) => {
                                    return (
                                        <>
                                            <label key={val.id} className={`w-[64px] h-[68px] overflow-hidden p-[12px] ${val.booked ? "bg-gray-500 cursor-not-allowed" : val.isSelected ? "bg-blue-500" : "bg-yellow-800"} cursor-pointer`}>
                                                <input disabled={val.booked} checked={val.isSelected} value={val.seat} id={val.id} onChange={() => handleChange(val.id)} type="checkbox" hidden />
                                                <img src={require('../assets/chair.png')} className='w-[48px] h-[48px] text-yellow-800' alt="" />
                                            </label>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <h3 className='font-bold text-center my-2 overflow-hidden'>Price : 250 Rs.</h3>
                        <div className='grid place-items-center grid-cols-10 gap-x-[8px] gap-y-4 my-3'>
                            {
                                secondCategorySeat.map((val, ind) => {
                                    return (
                                        <>
                                            <label key={val.id} className={`w-[64px] h-[68px] overflow-hidden p-[12px] ${val.booked ? "bg-gray-500 cursor-not-allowed" : val.isSelected ? "bg-blue-500" : "bg-yellow-800"} cursor-pointer`}>
                                                <input checked={val.isSelected} value={val.seat} id={val.id} onChange={() => handleChange(val.id)} type="checkbox" hidden />
                                                <img src={require('../assets/chair.png')} className='w-[48px] h-[48px] text-yellow-800' alt="" />
                                            </label>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <h3 className='font-bold text-center my-2 overflow-hidden'>Price : 150 Rs.</h3>
                        <div className='grid place-items-center grid-cols-10 gap-x-[8px] gap-y-4 my-3'>
                            {
                                thirdCategorySeat.map((val, ind) => {
                                    return (
                                        <>
                                            <label key={val.id} className={`w-[64px] h-[68px] overflow-hidden p-[12px] ${val.booked ? "bg-gray-500 cursor-not-allowed" : val.isSelected ? "bg-blue-500" : "bg-yellow-800"} cursor-pointer`}>
                                                <input checked={val.isSelected} value={val.seat} id={val.id} onChange={() => handleChange(val.id)} type="checkbox" hidden />
                                                <img src={require('../assets/chair.png')} className='w-[48px] h-[48px] text-yellow-800' alt="" />
                                            </label>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full bg-blue-300 text-black py-3 fixed bottom-0 right-0'>
                <div className='container'>
                    {
                        selectedSeat.length > 0 ?
                            <>
                                <div className='flex justify-between items-center'>
                                    <h3 className='overflow-hidden'>Seat : {selectedSeat.join(",")}</h3>
                                    <div className='flex gap-x-2 items-center'>
                                        <p>Total : {total}</p>
                                        <button to={`/bookTicket/${name}`} className='flex items-center gap-x-1 bg-pink-500 text-white px-4 py-2 hover:rounded-full' onClick={reset}>Reset</button>
                                        <button to={`/bookTicket/${name}`} className='flex items-center gap-x-1 bg-pink-500 text-white px-4 py-2 hover:rounded-full' data-toggle="modal" data-target="#exampleModalCenter" onClick={() => setShow(true)}>Book Now <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </> :
                            <h3 className='overflow-hidden text-center'>Screen This Way</h3>
                    }
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='flex'>
                        <p className='font-semibold'>Movie : </p>&nbsp;<span>{name}</span>
                    </div>
                    <div className='flex my-2'>
                        <p className='font-semibold'>Seat : </p>&nbsp;<span>{selectedSeat.join(",")}</span>
                    </div>
                    <div className='flex'>
                        <p className='font-semibold'>Total : </p>&nbsp;<span>{total}</span>
                    </div>
                    <div className='flex my-2'>
                        <p className='font-semibold'>Name : </p>&nbsp;
                        <span>
                            <input type="text" autoFocus value={userName} onChange={(e) => setUserName(e.target.value)} className='outline-none px-1 border-[1px] border-black rounded-md' />
                        </span>
                    </div>
                    <div className='flex'>
                        <p className='font-semibold'>Mobile No : </p>&nbsp;
                        <span>
                            <input type="text" value={userMobile} onChange={(e) => setUserMobile(e.target.value)} className='outline-none px-1 border-[1px] border-black rounded-md' />
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='bg-pink-500 text-white px-2 py-1 rounded-md' onClick={bookNow}>Book Now</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default BookTicket
