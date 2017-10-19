// Code your solution in this file

function findMatching(drivers, string){
  const matchingDrivers = drivers.filter(function(driver){ debugger 
    return driver.toLowerCase().indexOf(string.toLowerCase()) > -1;
  })
}
