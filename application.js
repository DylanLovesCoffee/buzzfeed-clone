$(document).ready(function(){
  $('.clickable-img').hover(function(){
    $(this).css({"transform": "scale(1.1)"});
  }, function(){
    $(this).css({"transform": "scale(1)"});
  });
});

// apply opacity to everything but the chosen option
function selectOption(option){
  findSiblings(option.parentNode.parentNode.children, option.parentNode)
}

// check if there are sibling nodes, and then return the option index
function findSiblings(nodeSiblings, node) {
  var nodes = Array.prototype.slice.call(nodeSiblings);
  i = 0;
  while (nodes[i] != null) {
    if (nodes[i] == node) {
      var nodeIndex = i;
      nodes[i].style.opacity = "1";
    } else {
      nodes[i].style.opacity = "0.5";
    }
    i++;
  }
  return nodeIndex
}
