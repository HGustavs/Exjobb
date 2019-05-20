
angular.module('myApp', [])
.controller('mainCtrl', function($scope) {
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
});
