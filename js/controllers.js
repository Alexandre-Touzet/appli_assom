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
	
	var popover_template = "";
	popover_template += "<ion-popover-view class=\"fit\">";
	popover_template += "	<ion-header-bar>";
	popover_template += "		<h1 class=\"title\">Aide</h1>";
	popover_template += "	</ion-header-bar>";
	popover_template += "	<ion-content>";
	popover_template += "		<ion-list>";
	popover_template += "			<a class=\"item dark-ink\" ng-href=\"#/assom/faq\" ng-click=\"popover.hide()\">";
	popover_template += "			FAQ";
	popover_template += "			</a>";
	popover_template += "		</ion-list>";
	popover_template += "	</ion-content>";
	popover_template += "</ion-popover-view>";
	
	
	$scope.popover = $ionicPopover.fromTemplate(popover_template,{
		scope: $scope
	});
	
	$scope.closePopover = function(){
		$scope.popover.hide();
	};
	
	$scope.$on("$destroy", function(){
		$scope.popover.remove();
	});

	
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
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	
	var fetch_per_scroll = 5;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_evenements = [];
	
	if(window.localStorage.getItem("data_evenements") !== "undefined"){
		data_evenements = JSON.parse(window.localStorage.getItem("data_evenements"));
			if (data_evenements !== null){
			$scope.evenements = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_evenements[lastPush])){
					$scope.evenements.push(data_evenements[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
			}, 100);
		}
	}
	if(!angular.isObject(data_evenements)){
		$timeout(function() {
		// retry retrieving data
		$http.get("http://assom.fr/wp-json/assom/v2/app_evenement".replace(targetQuery,raplaceWithQuery)).then(function(response) {
			data_evenements = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					window.localStorage.setItem("data_evenements",JSON.stringify(data_evenements));
				} catch(e) {
					window.localStorage.clear();
					window.localStorage.setItem("data_evenements",JSON.stringify(data_evenements));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.evenements = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_evenements[lastPush])){
					$scope.evenements.push(data_evenements[lastPush]);
				};
			}
		},function(response) {
			// error message
			var alertPopup = $ionicPopup.alert({
				title: "Error " + response.status,
				template: "There was a problem with the network response. (" + response.statusText + ")",
			});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
			}, 1000);
		});
	
		}, 1000);
	}
	$scope.doRefresh = function(){
		// retry retrieving data
		window.localStorage.clear();
		$http.get( "http://assom.fr/wp-json/assom/v2/app_evenement".replace(targetQuery,raplaceWithQuery)).then(function(response) {
			data_evenements = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					window.localStorage.setItem("data_evenements",JSON.stringify(data_evenements));
				} catch(e) {
					window.localStorage.clear();
					window.localStorage.setItem("data_evenements",JSON.stringify(data_evenements));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.evenements = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_evenements[lastPush])){
					$scope.evenements.push(data_evenements[lastPush]);
				};
			}
		},function(response) {
			// error message
			var alertPopup = $ionicPopup.alert({
				title: "Error " + response.status,
				template: "There was a problem with the network response. (" + response.statusText + ")",
			});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
			}, 100);
		});
	
	};
	if (data_evenements === null){
		data_evenements = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_evenements[lastPush])){
				$scope.evenements.push(data_evenements[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
	ionicMaterialInk.displayEffect();
	};

	
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

.controller("en_ce_moment_singlesCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
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

.controller("evenement_singlesCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
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
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	// Retrieving data
	var itemID = $stateParams.id;
	var current_item = [];
	if(window.localStorage.getItem("data_evenements") !== "undefined"){
		var datas = JSON.parse(window.localStorage.getItem("data_evenements"));
		for (var i = 0; i < datas.length; i++) {
			if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
				current_item = datas[i] ;
			}
		}
		// event done, hidden animation loading
		$timeout(function() {
			$ionicLoading.hide();
		$scope.evenement = current_item ;
		}, 500);
	};
	if(!angular.isObject(current_item)){
		var itemID = $stateParams.id;
		var current_item = [];
		$http.get("http://assom.fr/wp-json/assom/v2/app_evenement").then(function(response) {
			// Get data single
			var datas = response.data;
			try {
				window.localStorage.setItem("data_evenements",JSON.stringify(datas));
			} catch(e) {
				window.localStorage.clear();
				window.localStorage.setItem("data_evenements",JSON.stringify(datas));
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				$state.reload();
				$scope.$state = $state;
			}
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(response) {
			// Error message
			var alertPopup = $ionicPopup.alert({
				title: "Error " + response.status,
				template: "There was a problem with the network response. (" + response.statusText + ")",
			});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
			$scope.evenement = current_item ;
			}, 500);
		});
	}
	$scope.doRefresh = function(){
		// Retrieving data
		window.localStorage.clear();
		var itemID = $stateParams.id;
		var current_item = [];
		$http.get("http://assom.fr/wp-json/assom/v2/app_evenement").then(function(response) {
			// Get data single
			var datas = response.data;
			window.localStorage.setItem("data_evenements",JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(response) {
			// Error message
			var alertPopup = $ionicPopup.alert({
				title: "Error " + response.status,
				template: "There was a problem with the network response. (" + response.statusText + ")",
			});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
			$scope.evenement = current_item ;
			}, 500);
		});
	};

	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	$scope.rating = {};
	$scope.rating.max = 5;
})

.controller("faqCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
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

.controller("post_singlesCtrl", function($scope,$state,$ionicScrollDelegate,$http,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion){
	
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
