import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const List = () => {

  const list = JSON.parse(localStorage.getItem('movieList'));

  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <div className='flex justify-between items-center flex-wrap'>
            <h1 className='overflow-hidden text-2xl font-medium'>Booking List</h1>
            <p><NavLink to={"/"} className='text-pink-500'>Home</NavLink> / List</p>
          </div>
        </div>
      </section>
      <div className='m-auto flex flex-col col-12 col-sm-12 col-md-10 shadow-lg rounded-md p-2'>
        <div className="table-responsive">
          <table className="table">
            <caption>Click On Movie Name To See Seatmap</caption>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Movie</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Seat</th>
              </tr>
            </thead>
            <tbody>
              {
                list?.map((val, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{ind + 1}</td>
                      <td><NavLink to={`/movies/bookTicket/${val.movie}`} className="underline">{val.movie}</NavLink></td>
                      <td>{val.name}</td>
                      <td>{val.mobile}</td>
                      <td>{val.seat.join(",")}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default List
