/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  let n = position.length
  let cars = []

  for(let i=0; i<n; i++){
    let time = (target - position[i]) / speed[i]
    cars.push([position[i], time]) 
  }  

  cars.sort((a,b)=> b[0] - a[0])

  let count = 0
  let prevTime = 0

  for(let car of cars){
  let currTime = car[1]

    if(currTime > prevTime){
        count++
        prevTime = currTime
    }
  }

  return count
};