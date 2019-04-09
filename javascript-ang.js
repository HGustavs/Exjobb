
angular.module('myApp', [])
.controller('headCtrl', function($scope) {
  $scope.header = [
    {text:'Examensarbete'}
  ];

  $scope.categories = [
    {category:'Inrikes'},
    {category:'Utrikes'},
    {category:'Sport'}
  ];

  $scope.articlesOne = [
    {headline:'Nyhet 1'},
    {text:'lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här '}
  ];

  $scope.articlesTwo = [
    {headline:'Nyhet 2'},
    {text:'lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här '}
  ];
})

.controller('contentThree', function($scope, $http){
  $scope.articleList = [];
  $scope.articleList.articleTitle = '';

  $http({
    method:'GET',
    url:'data.json'
  })
  .then(function showArticles (response) {
      $scope.articleList = response.data;
  });
})
;
//.controller('menuCtrl', function($scope) {
//  $scope.categories = [
//    {category:'Inrikes'},
//    {category:'Utrikes'},
//    {category:'Sport'}
//  ];
//})
//.controller('contentOne', function($scope){
//  $scope.articlesOne = [
//    {headline:'Nyhet 1'},
//    {text:'lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem //ipsum här lorem ipsum här lorem ipsum här lorem ipsum här '}
//  ];
//})
//.controller('contentTwo', function($scope){
//  $scope.articlesTwo = [
//    {headline:'Nyhet 2'},
//    {text:'lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem ipsum här lorem //ipsum här lorem ipsum här lorem ipsum här lorem ipsum här '}
//  ];
//})

//.controller('contentThree', function($scope){
//  $scope.articlesThree = [
//    {test:data}
//  ];
//  return this.test
//})

//var articles = new Vue({
//  el: '#data',
//  data: data,
//  computed:{
//    showArticles: function(){
//      return this.articles
//    }
//}
//});
