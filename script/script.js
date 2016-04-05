var app = angular.module('todoApp',[]);

app.controller('todoController',['$scope',function($scope){

  // Sample todo data
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

  $scope.viewTodo = function(id){
    $scope.selectedTodo = id;
    // console.log('List item with id ' + $scope.selectedTodo + ' has been clicked');
    // console.log($scope.todos);
  };

  // To add new todo item
  $scope.addNewTodo = function(){
    var newId = ($scope.todos.length != 0)? ($scope.todos[$scope.todos.length -1].id + 1) : 0;
    $scope.todos.push({
      id: newId,
      title : "",
      content: "",
      checked: false
    });
    $scope.selectedTodo = newId;
    // document.getElementById('todoTitle').focus();
  }


  // For changing the string the filter the todo items
  $scope.hideCompleted = function(){
    $scope.hideFilter = ($scope.todoHide === true)?"false":"";
  }

  // Todo delete function
  $scope.deleteTodo = function(){


    for (var i = 0; i < $scope.todos.length; i++) {
      if($scope.todos[i].id==$scope.selectedTodo){
        index = i;
        break;
      }
    }

    $scope.todos.splice(index, 1);

  }

}]);
