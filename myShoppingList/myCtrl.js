var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope){
    $scope.products = ["Apple", "Pie", "Foo", "Bar"];
    $scope.clickAdd = function() {
        $scope.errorText = "";
        if (!$scope.addItem) {return;}
        if ($scope.products.indexOf($scope.addItem) == -1) {
        $scope.products.push($scope.addItem);
        } else {
        $scope.errortext = "The item is already in your shopping list.";
        }
    };
    $scope.removeItem = function(itemIndex){
        $scope.products.splice(itemIndex,1);
    };
});