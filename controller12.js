angular.module('myApp', []).controller("namesCtrl", function($scope){
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'},
        {name:'Ahmad',country:'Peru'},
        {name:'John',country:'United States'},
        {name:'Kennichiro',country:'Japan'},
        {name:'Xi',country:'China'}
    ]
});