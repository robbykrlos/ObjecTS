/**
 * Created by RobbyKrlos on 30.01.2016.
 */
var objectModule = angular.module('objects-app',[]);
objectModule.controller('ObjectsCtrl', function(){
    var objectCtrl = this;
    objectCtrl.objects = [{id:'1',type:'2',name:'apple'}, {id:'2',type:'2',name:'peach'}];
    
    objectCtrl.getObjectList = function(){
        return objectCtrl.objects;
    };
    
});