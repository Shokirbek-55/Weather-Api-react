import React, { useState } from 'react';

import { Input } from 'antd';

import search_icon from './img/search.png';
import clear_icon from './img/clear.png';
import cloud_icon from './img/cloud.png';
import drizzle_icon from './img/drizzle.png';
import rain_icon from './img/rain.png';
import snow_icon from './img/snow.png';
import wind_icon from './img/wind.png';
import humidity_icon from './img/humidity.png';

let api_key = '5f53066e06548b28d6954baa4a1d8dc0';

const Navbar: React.FC = () => {
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName('cityInput') as unknown as HTMLInputElement[];
    if (element[0].value === '') {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);

    let data = await response.json();
    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('wind-rate');
    const temperature = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity + '%';
    wind[0].innerHTML = Math.floor(data.wind.speed) + 'km/h';
    temperature[0].innerHTML = Math.floor(data.main.temp) + '°C';
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
      setWicon(clear_icon);
    } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
      setWicon(cloud_icon);
    } else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };

  return (
    <div className="container m-auto h-[704px]  w-[530px] rounded-[12px] font-[Poppins] ">
      <div className="top-bar flex justify-center gap-[14px] border-none pt-[30px] outline-none  ">
        <Input
          className="cityInput flex h-[78px] w-[362px] rounded-[40px] bg-[#ebfffc] pl-[40px] text-[20px] font-[400] text-[#626262] "
          type="text"
          placeholder="Search"
        />
        <div
          onClick={() => {
            search();
          }}
          className="search-icon flex  h-[78px] w-[78px] cursor-pointer items-center justify-center rounded-[40px] bg-[#ebfffc] hover:bg-green-300  "
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image mt-[0px] flex justify-center ">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp flex justify-center text-[100px] font-[400] text-[white] ">24°C</div>
      <div className="weather-location flex justify-center text-[50px] font-[400] text-[white] ">London</div>
      <div className="data-container mt-[26px] flex justify-center  text-[white] ">
        <div className="element  m-auto flex items-start  gap-[12px]">
          <img src={humidity_icon} alt="" className="icon mt-[10px]" />
          <div className="data text-[34px] font-[400] ">
            <div className="humidity-percent">64%</div>
            <div className="text text-[20px] font-[400]">Humidity</div>
          </div>
        </div>
        <div className="element m-auto flex items-start  gap-[12px]">
          <img src={wind_icon} alt="" className="icon mt-[10px] " />
          <div className="data text-[34px] font-[400]">
            <div className="wind-rate">18km/h</div>
            <div className="text text-[20px] font-[400]">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
