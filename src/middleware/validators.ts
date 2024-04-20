import { param } from "express-validator";

/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:city",
 * validateCityName,
 * getWeatherData
 * );
 */
export const validateCityName = param("city")
  // We will use the isString method to check if the city param is a string
  .isString()
  // We will use the isIn method to check if the city param is either london or dublin
  .isIn(["london", "dublin", "rome","dhaka"])
  // We will use the withMessage method to set a custom error message
  .withMessage("City name must be either london or dublin");

  export const validateUni = param("uni")
  // We will use the isString method to check if the city param is a string
  .isString()
  // We will use the isIn method to check if the city param is either london or dublin
  .isIn(["uel", "oxford", "cambridge","mit","stanford","harvard"])
  // We will use the withMessage method to set a custom error message
  .withMessage("has to be any of 'uel, oxford, cambridge,mit,stanford,harvard'");
