// number = (busStops) => {
//   let people = 0;
//
//   for (var i = 0; i < busStops.length; i++) {
//     people = people + busStops[i][0]-busStops[i][1]
//   }
//
//   console.log(people);
// }
//
// number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);


longest = (s1, s2) => {
  let joinString = s1+s2;
  let charCodeArray = [];

  for (var i = 0; i < joinString.length; i++) {
    charCodeArray.push(joinString.charCodeAt(i));
  }

  const distinctCharCodeArray = [...new Set(charCodeArray)];

  // console.log(joinString);
  // console.log(charCodeArray);
  // console.log(distinctCharCodeArray);

  let finalCharCodeArray = distinctCharCodeArray.map(x => String.fromCharCode(x)).sort();
  console.log(finalCharCodeArray.join(""));



}

longest("loopingisfunbutdangerous", "lessdangerousthancoding");
