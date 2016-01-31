/**
 * Created by RobbyKrlos on 30.01.2016.
 */
var objectModule = angular.module('objects-app',[]);

objectModule.controller('ObjectsCtrl', function(objRepository){
    var objectCtrl = this;
    //objectCtrl.objects = [objRepository.getAllObjects()];
    objectCtrl.objects = objRepository.getAllObjects();
    
    objRepository.getAllObjects().success(function(result) {
        objectCtrl.objects = {rows: result, cols: Object.keys(result[0])};
        console.log(objectCtrl.objects.cols);
        console.log(objectCtrl.objects.rows);
    });
    
    objectCtrl.getObjectList = function(){
        return objectCtrl.objects;
    };
});

objectModule.factory('objRepository', function($http) {
    return {
        getAllObjects: function() {
            var url = "http://localhost/objects/lst";
            return $http.get(url);
        }
    };
});