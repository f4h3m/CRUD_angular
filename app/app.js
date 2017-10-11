var myApp = angular.module('myApp',[]);

myApp.controller('show',function($scope){


	$scope.add_new_data = function(){
		$scope.names.push(
		{
			name: $scope.newpeople.name,
			age:  parseInt($scope.newpeople.age),
			profession: $scope.newpeople.profession
		}
		);

		$scope.newpeople.name = $scope.newpeople.age = $scope.newpeople.profession = "";	
	};

	$scope.remove_item = function(name){
		var removed_item = $scope.names.indexOf(name);
		$scope.names.splice('name',1);
	};


	$scope.names=[
		{
			name:"fahem",
			age:24,
			profession:"student"
		},
		{
			name:"Shaddam",
			age:25,
			profession:"student"
		},
		{
			name:"Khalek",
			age:29,
			profession:"teacher"
		},
		{
			name:"mofiz",
			age:21,
			profession:"rickshaw puller"
		}						
	];

});