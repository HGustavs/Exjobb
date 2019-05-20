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
    text:'lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här '
  }
});
var articles = new Vue({
  el: '#data',
  data: data,
  computed:{
    showArticles: function(){
      return this.articles
    }
}
});
