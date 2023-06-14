// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }

   function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet <= 2000) {
      const fare = (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
      return fare;
    } else if (distanceInFeet <= 2500) {
      return 25; // Flat fare for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
