var app = angular.module("testModule", []);
app.factory("displayFactory", function ($http) {
    return {
        getPeopleList: function () {
            return $http.get("display.json").then(function (response) {
                return response.data;
            });
        }
    }
});
app.controller("testController", function ($scope, displayFactory) {
    $scope.peopleList = [];
    $scope.currentUser = {}


    $scope.getPeopleListJson = function () {
        displayFactory.getPeopleList().then(function (response) {
            $scope.peopleList = response.People;
            $scope.currentUser = $scope.peopleList[0];
        });

    }
    $scope.getPeopleListJson();
    $scope.seletedUser = function (index) {
        console.log(index);
        $scope.currentUser = $scope.peopleList[index];
    }
});