// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  let ip2 = "42";
  fetchCoordsByIP(ip2, (error, data) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    } else {
      console.log('It worked! Returned coordinates:' , data);
    }
  });
});