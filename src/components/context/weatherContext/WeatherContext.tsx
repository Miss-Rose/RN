import React, {createContext, FC, useContext, useEffect, useState} from 'react';
import {AllWeatherData} from './types';
import API from '../API';
const api = new API();

const WeatherContext = createContext<AllWeatherData>({
  weather: null,
  isData: false,
});

export const ProvideWeather: FC = ({children}) => {
  const {weather, isData}: AllWeatherData = useProvideWeather('Kharkiv');
  return (
    <WeatherContext.Provider value={{weather, isData}}>
      {children}
    </WeatherContext.Provider>
  );
};

const useProvideWeather = (defaultCity: string) => {
  const [weather, setWeather] = useState(null);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    const getAllFilters = async () => {
      const response = await api.getWeather(defaultCity);
      setWeather(response);
      setIsData(true);
    };
    getAllFilters();
  }, [defaultCity]);

  return {weather, isData};
};

export const useWeather = () => {
  return useContext(WeatherContext);
};

