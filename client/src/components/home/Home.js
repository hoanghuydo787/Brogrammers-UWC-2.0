import React from 'react';
import Navbar from "../navbar/Navbar";
import './home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className = 'home-container text-white'>
        <h1 className='home-title text-white'>Urban waste collection aid - UWC 2.0</h1>
        <h3>Member</h3>
        <main className="member-list text-white">
          <ol>
            <li>Đỗ Huy Hoàng - 2013219</li>
            <li>Lê Nguyên Hùng - 2013360</li>
            <li>Lê Anh Huy - 2013293</li>
            <li>Nguyễn Đức Huy - 2013307</li>
            <li>Nguyễn Lương Gia Huy - 2013314</li>
            <li>Lê Duy Khang - 2013425</li>
            <li>Đặng Nguyên Phúc - 2014155</li>
          </ol>
        </main>
      </div>
      <div className='background-1'>
      <img width={'100%'} height={'100%'} src="/homeBackground.jpg"/>
      </div>
    </>
  )
}

export default Home
