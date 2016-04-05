var app = angular.module('todoApp',[]);

app.controller('todoController',['$scope',function($scope){
  $scope.todos = [
    {
      id: 0,
      title: 'Buy Milk',
      content: 'Buy Almarai Milk, it is the best one available.',
      checked: true
    },
    {
      id: 1,
      title: 'Read Book',
      content: 'Read Art of War, a chinese book, seems it is concetrated on the strategy development used in wars',
      checked: false
    }
  ];
  $scope.selectedTodo = 0;
  $scope.count = 0;
  $scope.viewTodo = function(id){
    $scope.selectedTodo = id;
    // console.log('List item with id ' + id + ' has been clicked');
  };
  $scope.addNewTodo = function(){
    var newId = $scope.todos.length;
    $scope.todos.push({
      id: newId,
      title : "",
      content: "",
      checked: false
    });
    $scope.selectedTodo = newId;
  }
}]);
