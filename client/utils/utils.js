const $ = Object.freeze({
  getNode(node) {
    if (typeof node === 'string') {
      node = document.querySelector(node);
    }
    return node;
  },

  addClass(node, className) {
    this.getNode(node).classList.add(className);
  },

  removeClass(node, className) {
    this.getNode(node).classList.remove(className);
  },

  toggleClass(node, className) {
    this.getNode(node).classList.toggle(className);
  },

  hasClass(node, className) {
    return this.getNode(node).classList.contains(className);
  },

  show(node) {
    this.getNode(node).style.display = 'block';
  },

  hide(node) {
    this.getNode(node).style.display = 'none';
  },

  fadeOut(node, duration = 100) {
    let opacity = 1;

    const timer = setInterval(() => {
      opacity -= 0.1;
      this.getNode(node).style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(timer);
        this.getNode(node).style.opacity = 0;
        this.hide(node);
      }
    }, duration);
  },

  fadeIn(node, duration = 100) {
    let opacity = 0;
    this.show(node);

    const timer = setInterval(() => {
      opacity += 0.1;
      this.getNode(node).style.opacity = opacity;

      if (opacity >= 1) {
        clearInterval(timer);
        this.getNode(node).style.opacity = 1;
        console.log(opacity);
      }
    }, duration);
  },

  inNumericString(data){
    data = Number(data);
    if(!isNaN(data) && typeof data === 'number') {
      return true;
    }else{
      return false;
    }
  }
});


// console.log($.fadeOut('h1'));

/* 
getNode('.hamburger').addEventListener('click',()=>{
  show('.menu');
})
 */

// 기대값 → <body class="active"></body>
