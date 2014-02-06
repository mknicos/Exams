/* exported Person */

var Person = (function(){

  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.foods = [];
  }

  Person.prototype.eat = function(food, servingsAte){
    var calories = food.caloriesPerServing;
    var numServings = servingsAte;
    var totalAte = calories * numServings;
    var weightGained = Math.round(totalAte / 3500);
    this.weight += weightGained;
    this.foods.push(food);
  };

  Person.prototype.exercise = function(exercise, minutes){
    debugger;
    var calBurnMale;
    var calBurnFemale;
    var calBurned;
    if(exercise === 'Swim'){
      calBurnMale = 900;
      calBurnFemale = 700;
    }else{
      calBurnMale = 700;
      calBurnFemale = 500;
    }
    if(this.gender === 'Male'){
      calBurned = calBurnMale;
    }else{
      calBurned = calBurnFemale;
    }
    calBurned = Math.round((calBurned/60) * minutes);
    var weightLoss = Math.round(calBurned / 3500);
    this.weight = this.weight - weightLoss;
  };


  Object.defineProperty(Person.prototype, 'crazyString',{
    get: function(){
      var myArray = this.foods;
      myArray = _.map(myArray, 'name');
      myArray = _.uniq(myArray);
      myArray.reverse();
      myArray = _.map(myArray, function(item){
        if(item.length % 2 === 0){
          return item.toLowerCase();
        }else{
          return item.toUpperCase();
        }
      });
      debugger;
      myArray = myArray.split('--');
      return myArray;
    }
  });
  return Person;
})();
