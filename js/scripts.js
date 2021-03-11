document.addEventListener("DOMContentLoaded", function () {

// ФУНКЦИЯ ДОБАВЛЯЕТ КАРТИНКУ img, КОТОРАЯ СТОИТ В БЛОКЕ С КЛАССОМ ibg,
// В ВИДЕ ФОНА background
function ibg(){
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++){
    if (ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  };
}

ibg();

});

















