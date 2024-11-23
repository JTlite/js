//Flatten Object

function flattenObj(obj){
    const result={};
    for(let i in obj){
      if(typeof obj[i] !== 'object'){
        result[i] = obj[i];
      }else{
        const temp =flattenObj(obj[i]);
        for(let j in temp){
          result[i+"_"+j] = temp[j];
        }
      }
    }
    
    return result;
  }
  
  const obj = {
                name: "Jahnavi",
                place: {
                  pincode: "530106",
                  area: "bellandur"
                }
              };
  
  console.log(flattenObj(obj));

//-------------------------------
//Flatten array

  function flattenArray(arr){
    const result = [];
    for(i in arr){
      if(!Array.isArray(arr[i])){
        result.push(arr[i])
      }else{
        result.push(...flattenArray(arr[i]));
      }
    }
    return result;
    
  }
  
  const arr = [1,[2,3,4],5]
  console.log(flattenArray(arr));

//---------------------------
//polyfill for call,apply,bind

const obj1={
    name:"Jahnavi"
  }
  
  function Intro(area,city){
    console.log(`I am ${this.name} from ${area},${city}`);
  }
  
  function myCall(context, ...args){
    context.fn = this;
    context.fn(...args);
  }
  
  function myApply(context, args){
    context.fn =this;
    context.fn(...args);
  }
  
  function myBind(context, args){
    context.fn=this;
    return function(...nextArgs){
      context.fn(...args,...nextArgs);
    }
  }
  
  Intro.myCall(obj1,"bellandur","banglore")
  Intro.apply(obj1,["bellandur","banglore"])

  //Array polyfills
  //forEach

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback, thisContext){
     
      const array = this;
      const length = array.length;
      for(let i=0;i<length;i++){
        callback(thisContext, array[i],i, array);
      }
    }
  }
  
  const arr2 =[1,2,3,4];
  arr2.myForEach((el)=>console.log(el*4));

//Map

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback, thisContext){
           
      const array = this;
      const length = array.length;
      const result=[];
      for(let i=0;i<length;i++){
        if(i in array){
          result[i] = callback(thisContext, array[i],i, array);
        }
        
      }
      
      return result;
    }
  }
  
  const arr3 =[1,2,3,4];
  const results = arr3.myMap((el)=>el*2);
  console.log(results);


//filter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback, thisContext){
           
      const array = this;
      const length = array.length;
      let result = [];
      for(let i=0;i<length;i++){
        if(i in array){
          if(callback(thisContext, array[i],i, array)){
            result.push(array[i]);
          }
        }
        
      }
      return result;
    }
  }
  
  const arr4 =[1,2,3,4];
  const res =arr4.myFilter((el)=> el>2);
  console.log(res);


//every
//forEach

if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(callback, thisContext){
           
      const array = this;
      const length = array.length;
  
      for(let i=0;i<length;i++){
        if(i in array){
          if(!callback(thisContext, array[i],i, array)){
           return  false;
          }
        }
        
      }
      return true;
    }
  }
  
  const arrr =[1,2,3,4];
  const answer =arrr.myEvery((el)=> el>2);
  console.log(answer);


  //reduce
  if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback, initialValue){
           
      let accumulator;
      let startIndex;
      if(length >0 && initialValue === undefined){
        accumulator = array[0];
        startIndex=1;
      }else{
        accumulator =initialValue;
        startIndex=0
      }
  
      for(let i=startIndex;i<length;i++){
        if(i in array){
          accumulator = callback(accumulator,array[i],i,array);
        }
        
      }
      return accumulator;
    }
  }
  
  const myArr =[1,2,3,4];
  const r =myArr.myReduce((acc,cur)=> acc+cur,0);
  
  console.log(r);

  //String - find Vowels

  if(!String.prototype.myFindVowels){
    String.prototype.myFindVowels=function(){
      let results = [];
      let vowels =['a','e','i','o','u'];
      for(let i=0;i<this.length;i++){
        const char = this[i].toLowerCase();
        if(vowels.includes(char)){
          results.push(char);
        }
      }
      
      return results;
      
    }
  }
  
  const example="jahnavi";
  const volwes = example.myFindVowels();
  console.log(volwes);


  //String - repeat
  if(!String.prototype.myRepeat){
    String.prototype.myRepeat=function(count){
   
      let results = '';
      
      for(let i=0;i<count;i++){
        results = results+this;
      }
      
      return results;
      
    }
  }
  
  const str="jahnavi";
  const result = str.myRepeat(3);
  console.log(result);


