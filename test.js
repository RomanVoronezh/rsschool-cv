
/* function dataReverse(data) {
  let x = { '11111111': 1, '00000000': 2, '00001111': 3, '10101010': 4, '1': '11111111', '2': '00000000', '3': '00001111', '4': '10101010', };
  let y = [];
  data = data.join('').match(/\d{8}/g);
  data.forEach(a => y.push(x[a]));
  y = y.sort((a, b) => b - a).map(a=> x[a]).join('').split('');
  console.log(y.map(a => +a)); 
}

dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]);

 */

function dataReverse(data) {

  console.log(data.splice(0 ,8))
  
}

dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]);
