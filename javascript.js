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
var articles = new Vue({
  el: '#data',
  data: data,
  computed:{
    showArticles: function(){
      return this.articles
    }
}
});
