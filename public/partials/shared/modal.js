angular.module('shared', ['ui.bootstrap', 'ui.bootstrap.tpls', 'ngAnimate'])
.factory("dialogService", ["$q", "$uibModal", function ($q, $modal)
{
    var obj = {} 
	obj.showConfirmDialog = function (title, message)
    {
        var defer = $q.defer();
		
        var modalInstance = $modal.open({
            animation: true,
			backdrop: true,
            
            templateUrl: '/partials/shared/confirmationBox.html',
            controller: function ($scope)
            {
                $scope.title = title;
				$scope.message = message;

                $scope.ok = function ()
                {
                    modalInstance.close();
                    defer.resolve();
                };

                $scope.cancel = function ()
                {
                    modalInstance.dismiss();
                    defer.reject();
                };
                
            }
        });
		
		return defer.promise;
    }
    obj.tutorialDialog = function (title, message) {
    
        var defer = $q.defer();
		$modal.message = undefined;
        var modalInstance = $modal.open({
            animation: true,
			backdrop: true,
            
            templateUrl: 'partials/hints/hintmodal.html',
            controller: function ($scope)
            {
                $scope.modal = {};
                $scope.modal.title = title;
                $scope.modal.message = message;
                
                $scope.ok = function ()
                {
                    modalInstance.close();
                    $modal.message= 1;
                    defer.resolve( $modal.message);
                    
                };

                $scope.cancel = function ()
                {
                    modalInstance.dismiss();
                    defer.reject();
                };
                
            }
        });
		
		return defer.promise;
    }

    return obj;
}])

function getNext(){
	return new Date().getTime()
}