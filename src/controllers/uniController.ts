import { Request, Response } from "express";

import { generateUelData,
    generateCambridgeData,
    generateHarvardData,
    generateMITData,
    generateOxfordData,
    generateStanfordData
 } from "../services/uniServices.js";
 import { validationResult } from "express-validator";


 export const getUniversityData = async (req: Request, res: Response) => {

    const errors = validationResult(req);
  
    // If there are validation errors, we will log them and send a 400 status code
    if (!errors.isEmpty()) {
      console.error("Validation error", errors.mapped());
      res.status(400).json({ errors: errors.array() });
      return;
    }
  
    // We will use a try catch block to catch any errors
    try {
      // Get the city param from the request
      const { uni } = req.params;
      console.log(uni);
  
      // We will create a variable with a type of WeatherData
      let finaluniData: UniversityData;
  
      // We will use an if statement to check which city was passed in
      if (uni === "uel") {
        console.log(generateUelData());
        finaluniData = generateUelData();
      } else if (uni === "oxford") {
        console.log(generateOxfordData());
        finaluniData = generateOxfordData();
      }
      else if (uni === "cambridge") {
        console.log(generateOxfordData());
        finaluniData = generateCambridgeData();
      }
      else if (uni === "mit") {
        console.log(generateMITData());
        finaluniData = generateMITData();
      }
      else if (uni === "stanford") {
        console.log(generateMITData());
        finaluniData = generateStanfordData();
      } 
      else if (uni === "harvard") {
        console.log(generateHarvardData());
        finaluniData = generateHarvardData();
      }else {
        // If the city is not london or dublin, we will throw an error
        res.status(404).send("City not found");
      }
  
      // We will return the weather data as JSON
      res.status(200).json(finaluniData);
    } catch (error) {
      // If there is an error, we will log it and send a 500 status code
      res.status(500).send("Error in fetching weather data");
    }
  }; 