//myEach
function myEach(collection, callback){
    if(Array.isArray(collection === true)){
        collection.forEach(element => callback(element))
    }
    else{
        for(const element in collection){
            callback(collection[element])
        }
    }
    return collection
}

//myMap
function myMap(collection, callback){
    if(Array.isArray(collection === true)){
        mapArray = collection.map(element => callback(element))
        return mapArray
    }
    else{
        let objectArray = []
        for(const element in collection){
            objectArray.push(callback(collection[element]))
        }
        return objectArray
    }
}

//myReduce
function myReduce(collection, callbackFunction, acc){
    if(Array.isArray(collection) === true){
        if(acc !== undefined){
            return collection.reduce(callbackFunction, acc)
        }
        else{ 
            return collection.reduce(callbackFunction)
        }
    }   
    else{
        let objectNumbers = Object.values(collection) 
        if(acc !== undefined){
            return objectNumbers.reduce(callbackFunction, acc)
        }
        else{ 
            return objectNumbers.reduce(callbackFunction)
        }
        
    }
}

//myFind
function myFind(collection, predicate){
    return collection.find(predicate)
}

//myFilter
function myFilter(collection, predicate){
    if(Array.isArray(collection) === true){
    return collection.filter(predicate)
    }
    else{
        return Object.values(collection).filter(predicate)
    }
}

//mySize
function mySize(collection){
    if(Array.isArray(collection) === true){
        return collection.length
    }
    else{
        return Object.keys(collection).length
    }
    
}

//myFirst
function myFirst(array, integer){
    if(integer === undefined){
        return array[0]
    }
    else{
        return array.slice(0, integer)
    }
}

//myLast
function myLast(array, integer){
    if(integer === undefined){
        return array[array.length-1]
    }
    else{
        return array.slice(-integer)
    }
}

//myKeys
function myKeys(object){
    return Object.getOwnPropertyNames(object)
}

//myValues
function myValues(object){
    return Object.values(object)
}
