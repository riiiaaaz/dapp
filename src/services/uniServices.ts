import { faker } from "@faker-js/faker";
import { storeUniData } from "../helpers/helper.js";

export const generateUelData = (): UniversityData => {
  const generatedUniversityData: UniversityData = {
    name: "University of East London",
    ranking: faker.number.int({ min: 600, max: 800 }),
    totalStudents: faker.number.int({ min: 10000, max: 30000 }),
    coursesTaught: faker.number.int({ min: 50, max: 200 }),
    totalLecturers: faker.number.int({ min: 50, max: 200 }),
    location: "london",
    foundationYear: 1898,
    website: faker.internet.url(), // a random website URL
    contactEmail: faker.internet.email(), // a random email address
  };
  storeUniData(generatedUniversityData).catch(console.error);
  return generatedUniversityData;
};

export const generateHarvardData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "Harvard University",
      ranking: faker.number.int({ min: 1, max: 50 }),
      totalStudents: faker.number.int({ min: 5000, max: 30000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Cambridge",
      foundationYear: 1636, 
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
    storeUniData(generatedUniversityData).catch(console.error);
    return generatedUniversityData;
  };
  
  export const generateOxfordData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "University of Oxford",
      ranking: faker.number.int({ min: 1, max: 20 }),
      totalStudents: faker.number.int({ min: 10000, max: 50000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Oxford",
      foundationYear: 1096, 
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
    storeUniData(generatedUniversityData).catch(console.error);
    return generatedUniversityData;
  };
  
  export const generateMITData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "Massachusetts Institute of Technology",
      ranking: faker.number.int({ min: 1, max: 8 }),
      totalStudents: faker.number.int({ min: 10000, max: 25000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Cambridge",
      foundationYear: 1861, 
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
    storeUniData(generatedUniversityData).catch(console.error);
    return generatedUniversityData;
  };

  export const generateStanfordData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "Stanford University",
      ranking: faker.number.int({ min: 1, max: 60 }),
      totalStudents: faker.number.int({ min: 10000, max: 40000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Stanford",
      foundationYear: 1885,
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
    storeUniData(generatedUniversityData).catch(console.error);
    return generatedUniversityData;
  };

  export const generateCambridgeData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "University of Cambridge",
      ranking: faker.number.int({ min: 1, max: 10 }),
      totalStudents: faker.number.int({ min: 10000, max: 70000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Cambridge",
      foundationYear: 1209,
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
    storeUniData(generatedUniversityData).catch(console.error);
    return generatedUniversityData;
  };