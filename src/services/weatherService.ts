import { faker } from "@faker-js/faker";
import { storeWeatherData } from "../helpers/helper.js";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city:"London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };
 
  storeWeatherData(generatedWeatherData).catch(console.error);
  // Return weather data
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    city:"Dublin",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };
  storeWeatherData(generatedWeatherData).catch(console.error);
  // Return weather data
  return generatedWeatherData;
};

export const generateDhakaWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    city:"Dhaka",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };
  storeWeatherData(generatedWeatherData).catch(console.error);
  // Return weather data
  return generatedWeatherData;
};

export const generateRomeWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    city:"Rome",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };
  storeWeatherData(generatedWeatherData).catch(console.error);
  // Return weather data
  return generatedWeatherData;
};

export const londonforecast = (): forecast =>{

  const forecastData:forecast ={
  
    dayOne : 13,
    dayTwo : 14,
    dayThree:15
  };
  return forecastData;
};
  export const dublinforecast = (): forecast =>{

    const forecastData:forecast ={
    
      dayOne : 13,
      dayTwo : 14,
      dayThree:15
    };
    return forecastData;
};

export const dhakaforecast = (): forecast =>{

  const forecastData:forecast ={
  
    dayOne : 13,
    dayTwo : 14,
    dayThree:15
  };
  return forecastData;
};

export const romeforecast = (): forecast =>{

  const forecastData:forecast ={
  
    dayOne : 13,
    dayTwo : 14,
    dayThree:15
  };
  return forecastData;
};
