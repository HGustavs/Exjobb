
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
      //{ text: ''} för enkel utökning
    ]
  }
});

var news1 = new Vue ({
  el: '#news1',
  data:{
    headline:'Headline #1',
    text:'lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här '
  }
});

var news2 = new Vue ({
  el: '#news2',
  data:{
    headline:'Headline #2',
    text:'lorem ipsum här'
  }
});

var news3 = new Vue ({
  el: '#news3',
  data:{
    headline:'Headline #3',
    text:'lorem ipsum här'
  }
});

var footer = new Vue({
  el: '#footer',
  data:{
    todos:[
      { text: 'Kontakt'},
      { text: 'Examensarbete'},
      { text: 'Terms of Service'},
      //{ text: ''}
    ]
  }
});
