// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  const ip2 = "207.164.187.99";
  fetchCoordsByIP(ip2, (error, data) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    } else {
      console.log('It worked! Returned coordinates:' , data);
    }
  });

  const coords = { latitude: '49.27670', longitude: '-123.13000' };
  fetchISSFlyOverTimes(coords, (error, data) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    } else {
      console.log('It worked! Returned:', data);
    }
  });
});