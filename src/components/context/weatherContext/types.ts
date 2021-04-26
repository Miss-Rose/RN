export interface Weather {
  city: {
    name: string;
    sunset: number;
    sunrise: number;
  };
  list: Array<WeatherByHour>;
}

export interface WeatherByHour {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
}

export interface AllWeatherData {
  weather: Weather|null;
  isData: boolean;
}

