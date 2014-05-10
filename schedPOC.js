var scheduler = angular.module('scheduler', []);

scheduler.factory('productData', function() {
	
	// AJAX call to API to get actual product Data
	// Instead we just return hardcoded data
	return [
		{product: "Air Conditioners", types: [
				{product_type: "window (installed)", brands: [] },
				{product_type: "window (not installed)", brands: [] } 
			]
		},
		{product: "Central Heating", types: [
				{product_type: "boiler", brands: [] }, 
				{product_type: "central air", brands: [] },
				{product_type: "furnace", brands: [] },
				{product_type: "heat pump", brands: [] }
			]
		},
		{product: "Dryer", types: [ 
				{product_type: "electric", 
					brands: ["Amana", "GE", "Frigidaire"],
					nature_of_problem: ["Clothes don't dry", "Heat: Runs but doesn't heat up"]
				},
				{product_type: "gas", 
					brands: ["Gibson", "Kelvinator", "Kenmore"],
					nature_of_problem: ["Doesn't run", "Runs with door open"] 
				},
				{product_type: "stacked laundry unit", 
					brands: ["WCI", "Whirlpool", "Other"],
					nature_of_problem: ["Cleaning: excessive lint", "Draining: continue to fill", "Noise: strange noise"] 
				}
			]
		}
	]
});


function stepOneCtrl($scope, productData) {
	$scope.productData = productData;

	$scope.selectedProduct;
	$scope.selectedType;
	$scope.selectedBrand;
	$scope.natureOfProblem;
	$scope.warrantyStatus;
	$scope.warrantyStatusOptions = ["Sears Protection Agreement", "Warranty", "No Coverage", "Don't Know"];

	$scope.displayProductData = function() {
		return $scope.productData;
	}

	$scope.$watch('selectedType', function(value) {
       $scope.selectedBrand = undefined;
       $scope.natureOfProblem = undefined;
 	});

 	$scope.$watch('selectedProduct', function(value) {
       $scope.selectedType = undefined;
       $scope.selectedBrand = undefined;
       $scope.natureOfProblem = undefined;
 	});

}


scheduler.directive('myFirstDirective', function() {
	return function(scope, element, attrs) {
		element.text(scope.productData + attrs.message);
	}
});


