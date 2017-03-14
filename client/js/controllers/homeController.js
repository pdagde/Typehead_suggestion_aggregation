app.controller('homeController',['$scope',function($scope) {

/*
      API like this

 function APINAME(req,cb) {
 app.models.collection
 .find({'Name':new RegExp(req.body.name, 'i'),"items.1":{$exists: true}})
 .select({'Name':1 ,'_Id':1})
 .exec(function (err, name) {

 cb(null,name);
 });
 }

    */

    $scope.getBusinessUsers = function (name) {
        return Restangular.all('APINAME').post("Search Parameter/*like personname:name*/").then(
            function (result) {
                return result;
            }
        );
    }

}]);