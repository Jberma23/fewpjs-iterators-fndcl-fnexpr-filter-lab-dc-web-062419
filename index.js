function findMatching(arr, query){
        return arr.filter(function(driver){
            return driver.toLowerCase() === (query.toLowerCase()) 
        })
        
    }
  

function fuzzyMatch(arr, query){
    return arr.filter(function(driver){
        return driver.toLowerCase().indexOf(query.toLowerCase()) == 0 
    })
};

function matchName(arr, query){
    return arr.filter(function(driver){
        return driver.name.toLowerCase() === query.toLowerCase()
    })
}