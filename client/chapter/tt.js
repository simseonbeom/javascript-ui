const $ = Object.freeze({
  height(node) {
    return node.getBoundingClientRect().height;
  },

  addClass(node, className) {
    console.log('add');

    node.classList.add(className);

    return $;
  },

  removeClass() {
    console.log('remove');
    return $;
  },

  hasClass(node, className) {
    return node.classList.contains(className);
  },

  css() {
    console.log('css');
    return $;
  },

  getNode(node) {
    if (typeof node === 'string') {
      node = document.querySelector(node);
    }

    return node;
  },

  show(node) {
    $.getNode(node).style.display = 'block';
  },

  hide(node) {
    $.getNode(node).style.display = 'none';
  },
});

const h1 = document.querySelector('h1');


function attr(node, attributeName){
  
}


console.log(h1.setAttribute('class','foo'));



