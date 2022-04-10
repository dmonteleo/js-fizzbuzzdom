const container = document.querySelector('.container');
const max = 100;
for (i=1; i<=max; i++){
  //console.log(i);
  const boxEl = document.createElement('div');
  boxEl.className = 'box';
  container.append(boxEl);
  if ((i % 3 === 0) && (i % 5 === 0)){
    console.log('FizzBuzz');
    boxEl.append('FizzBuzz');
    boxEl.classList.add('red');
  }
  else if (i % 3 === 0){
    console.log('Fizz');
    boxEl.append('Fizz');
    boxEl.classList.add('green');
  }
  else if (i % 5 === 0){
    console.log('Buzz');
    boxEl.append('Buzz');
    boxEl.classList.add('yellow');
  }
  else {
    console.log(i);
    boxEl.append(i);
  }
  
  //console.log(boxEl);
}


