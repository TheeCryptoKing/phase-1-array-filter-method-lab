// Code your solution here
//1. string needs to match arrayofDrivers and return the matching list
function findMatching(arrayofDrivers, string) {
    let filterDrivers = arrayofDrivers.filter(driver => driver.toLowerCase() == string.toLowerCase())//toLowerCase to convert all strings nad make case insesnitive
    return filterDrivers
}

//2.
   function fuzzyMatch(driversArray, string) {
        //need to query array return drivers provided throught the string 
        return driversArray.filter(function(driver) {
            if(driver[0] === string[0]) {
                return string
            }
        })
    }


//3.should return each element whose name property matches the provided string argument 
function matchName(arrOfDrivers, string) {
    let nameMatches  = arrOfDrivers.filter(drivers => drivers.name === string )
    return nameMatches
}