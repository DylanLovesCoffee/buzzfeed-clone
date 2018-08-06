$(document).ready(function(){
  $('.clickable-img').hover(function(){
    $(this).css({"transform": "scale(1.1)"});
  }, function(){
    $(this).css({"transform": "scale(1)"});
  });
});

function selectOp1 (){
  // add opacity or fade
  console.log('Option 1!')
}

function selectOp2 (){
  console.log('Option 2!')
}
