const _ = {
  clamp(number, lower, upper) {
  let lowerClampedValue = Math.max(number, lower);
  let clampedValue = Math.min(lowerClampedValue, upper); 
  return clampedValue;
  }, 
  inRange(number, start, end) {
    if (end === undefined) {
      end = start
      start = 0
    } if (start > end) {
      let temp = start
      start = end
      end = temp
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  } ,
  words(sentence) {
    let words = sentence.split(" ");
    return words;
  }, 
  pad(sentence, wantedLength) {
    if (sentence.length >= wantedLength) {
      return sentence;
    }; 
    let padFront =  Math.floor((wantedLength - sentence.length) / 2);
    let padEnd = wantedLength -  (padFront + sentence.length);
    let paddedSentence = ' '.repeat(padFront) + sentence + ' '.repeat(padEnd);
    return paddedSentence;
  },
  has(object, key) {
    let checkValue = object[key];
    if (checkValue === undefined) {
      return false;
    } else {
      return true;
    };
  },
  invert (object) {
    let invertedObject = {};
    for (let key in object){
      const originalValue = object[key];
      invertedObject[originalValue] = key // look through
    }
    return invertedObject;
  }, 
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      }
    }
    return undefined;
  },
  drop(array, number){
    if(number === undefined) {
      number = 1;
    };
    let droppedArray = array.slice(number, array.length);
    return droppedArray; 
  }, 
  dropWhile(array, predicate) {
    let callBack = (element, index) => {
       return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(callBack); 
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  }, 
  chunk(array, size) {
    if (size === undefined) {
      return size = 1;
    };
    let chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      chunkedArray.push(arrayChunk);
    };
    return chunkedArray;
  }
};



// Do not write or modify code below this line.
module.exports = _;
