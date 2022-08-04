const $ = Object.freeze({
  addClass(node, className) {
    console.log('add');

    node.classList.add(className);

    return this;
  },

  removeClass() {
    console.log('remove');
    return this;
  },

  hasClass(node,className) {

    return node.classList.contains(className);
  },

  css() {
    console.log('css');
    return this;
  },

  getNode(node){
    if(typeof node === 'string'){
      node = document.querySelector(node);
    }

    return node;
  },

  show(node){
   
    
    $.getNode(node).style.display = 'block';
  },

  hide(node){
   
    $.getNode(node).style.display = 'none';
  },
});







const gsap = {
  
}


