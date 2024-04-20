import { faker } from "@faker-js/faker";

export const generateUelData = (): UniversityData => {
  const generatedUniversityData: UniversityData = {
    name: "University of East London",
    ranking: faker.number.int({ min: 1, max: 1000 }),
    totalStudents: faker.number.int({ min: 1000, max: 20000 }),
    coursesTaught: faker.number.int({ min: 50, max: 200 }),
    totalLecturers: faker.number.int({ min: 50, max: 200 }),
    location: "london",
    foundationYear: 1898,
    website: faker.internet.url(), // a random website URL
    contactEmail: faker.internet.email(), // a random email address
  };

  return generatedUniversityData;
};

export const generateHarvardData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "Harvard University",
      ranking: faker.number.int({ min: 1, max: 1000 }),
      totalStudents: faker.number.int({ min: 1000, max: 20000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Cambridge",
      foundationYear: 1636, 
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
  
    return generatedUniversityData;
  };
  
  export const generateOxfordData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "University of Oxford",
      ranking: faker.number.int({ min: 1, max: 1000 }),
      totalStudents: faker.number.int({ min: 1000, max: 20000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Oxford",
      foundationYear: 1096, 
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
  
    return generatedUniversityData;
  };
  
  export const generateMITData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "Massachusetts Institute of Technology",
      ranking: faker.number.int({ min: 1, max: 1000 }),
      totalStudents: faker.number.int({ min: 1000, max: 20000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Cambridge",
      foundationYear: 1861, 
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
  
    return generatedUniversityData;
  };

  export const generateStanfordData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "Stanford University",
      ranking: faker.number.int({ min: 1, max: 1000 }),
      totalStudents: faker.number.int({ min: 1000, max: 20000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Stanford",
      foundationYear: 1885,
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
  
    return generatedUniversityData;
  };

  export const generateCambridgeData = (): UniversityData => {
    const generatedUniversityData: UniversityData = {
      name: "University of Cambridge",
      ranking: faker.number.int({ min: 1, max: 1000 }),
      totalStudents: faker.number.int({ min: 1000, max: 20000 }),
      coursesTaught: faker.number.int({ min: 50, max: 200 }),
      totalLecturers: faker.number.int({ min: 50, max: 200 }),
      location: "Cambridge",
      foundationYear: 1209,
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
    };
  
    return generatedUniversityData;
  };