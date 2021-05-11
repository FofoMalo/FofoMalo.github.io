/*
*******************************************
let myImag = document.querySelector('img');

myImag.addEventListener('click',()=>{
  let mySrc = myImag.getAttribute('src');
  if (mySrc === 'jeunes-inter.jpg') {
    myImag.setAttribute('src','Comment-relifter-mon-vieux-PC_ok')
    }
    else {
      myImag.setAttribute('src', 'jeunes-inter.jpg');
    };
  }
})
erreur lors de la premiere fois de l'écriture du code corrigé le 24/04/2021, je commence à mieux comprendre un peu l'arborescence du code en js.
je suis plus à l'aise dans la lecture et l'écriture du code, c'est plus intéréssant :);
************************************************
*/
let myImag = document.querySelector('img');
myImag.addEventListener('click',()=>{
  let mySrc = myImag.getAttribute('src');
  if (mySrc==='jeunes-inter.jpg'){
    myImag.setAttribute('src', 'Comment-relifter-mon-vieux-PC_ok.jpg')
  } else {
    myImag.setAttribute('src', 'jeunes-inter.jpg');
  }
});