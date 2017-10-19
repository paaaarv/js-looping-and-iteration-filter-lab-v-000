// Code your solution in this file

function findMatching(drivers, string){
  let matchingDrivers = drivers.filter(function(driver){
    return driver.toLowerCase().indexOf(string.toLowerCase())) > -1;
}
}
