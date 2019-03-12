
var header = new Vue({
  el: '#header',
  data:{
    message:'Exjobs-Extra'
  }
});

var menu = new Vue({
  el: '#menu',
  data:{
    todos:[
      { text: 'Inrikes'},
      { text: 'Utrikes'},
      { text: 'Sport'},
      //{ text: 'för enkel utökning'}
    ]
  }
});

var news1 = new Vue ({
  el: '#news1',
  data:{
    message:'Nyheter kommer vara här'
  }
});

var news2 = new Vue ({
  el: '#news2',
  data:{
    message:'Mer nyheter'
  }
});

var news3 = new Vue ({
  el: '#news3',
  data:{
    message:'Ännu mer nyheter'
  }
});

var footer = new Vue({
  el: '#footer',
  data:{
    todos:[
      { text: 'Kontakt'},
      { text: 'Examensarbete'},
      { text: 'Terms of Service'},
      //{ text: 'för enkel utökning'}
    ]
  }
});
