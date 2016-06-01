angular.module("assom.controllers", [])



.controller("indexCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("side_menusCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("aboutCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("accueilCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("aprassomCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("assom_art_festivalCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("assom_chefCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("assom_rushCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("assomiadesCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("soire_interassoCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","closebuttoncaption=Done");
	};
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})
