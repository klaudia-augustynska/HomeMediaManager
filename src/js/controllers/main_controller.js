var app = angular.module('HomeMediaManager.controllers.Main', []);
var moviedetails = angular.module('movies', []);
var moviedetailsWinner = angular.module('movies', []);

app.controller('MainController', function($scope){

	// Initialization
	$scope.mediaSaved = localStorage.getItem('mediaAll');
	$scope.mediaAll = ($scope.mediaSaved != null) ? JSON.parse($scope.mediaSaved) : [ 
		{
			id:	1,
			title: 'Frozen',
			type:	1,
			lentTo:	0,
            isChecked: true
		}, 
		{
			id: 2,
			title: 'Toy Story',
			type:	2,
			lentTo: 1,
            isChecked: false
		}
	];
	localStorage.setItem('mediaAll', JSON.stringify($scope.mediaAll));
	$scope.mediaLastIndexSaved = localStorage.getItem('mediaLastIndex');
	$scope.mediaLastIndex = ($scope.mediaLastIndexSaved != null) ? JSON.parse($scope.mediaLastIndexSaved) : 2;
	localStorage.setItem('mediaLastIndex', JSON.stringify($scope.mediaLastIndex));
	
	//
	
	$scope.typesSaved = localStorage.getItem('typesAll');
	$scope.typesAll = ($scope.typesSaved != null) ? JSON.parse($scope.typesSaved) : [ 
		{
			id: 1,
			name:	'Movie'
		}, 
		{
			id: 2,
			name:	'Album'
		}
	];
	localStorage.setItem('typesAll', JSON.stringify($scope.typesAll));
	$scope.typesLastIndexSaved = localStorage.getItem('typesLastIndex');
	$scope.typesLastIndex = ($scope.typesLastIndexSaved != null) ? JSON.parse($scope.typesLastIndexSaved) : 2;
	localStorage.setItem('typesLastIndex', JSON.stringify($scope.typesLastIndex));
	
		
	$scope.friendsSaved = localStorage.getItem('friendsAll');
	$scope.friendsAll = ($scope.friendsSaved != null) ? JSON.parse($scope.friendsSaved) : [ 
		{
			id: 1,
			name:	'Klaudia'
		}
	];
	localStorage.setItem('friendsAll', JSON.stringify($scope.friendsAll));
	$scope.friendsLastIndexSaved = localStorage.getItem('friendsLastIndex');
	$scope.friendsLastIndex = ($scope.friendsLastIndexSaved != null) ? JSON.parse($scope.friendsLastIndexSaved) : 1;
	localStorage.setItem('friendsLastIndex', JSON.stringify($scope.friendsLastIndex));
  
});

app.controller('MediaList', function($scope) {
	// join "friends" and "types" with "medias"
	for (var i = 0; i < $scope.mediaAll.length; ++i) {
		for (var j = 0; j < $scope.typesAll.length; ++j) {
			if ($scope.mediaAll[i].type == $scope.typesAll[j].id) {
				$scope.mediaAll[i].typeName = $scope.typesAll[j].name;
				break;
			}
		}
		for (var j = 0; j < $scope.friendsAll.length; ++j) {
			if ($scope.mediaAll[i].lentTo == $scope.friendsAll[j].id) {
				$scope.mediaAll[i].lentToName = $scope.friendsAll[j].name;
				break;
			}
			$scope.mediaAll[i].lentToName = "---";
		}
	}
	
	$scope.Delete = function(id) {
		for (var i = 0; i < $scope.mediaAll.length; ++i) {
			if ($scope.mediaAll[i].id == id) {
				$scope.mediaAll.splice(i,1);
				break;
			}
		}
		
		localStorage.setItem('mediaAll', JSON.stringify($scope.mediaAll));
	};

});

app.controller('AddMediaForm', function($scope) {

	$scope.AddMedia = function() {
		var media = {
			id:		++$scope.mediaLastIndex,
			title:	$scope.title,
			type:	$scope.type,
			lentTo: $scope.lentTo,
            isChecked: true
		};
		$scope.mediaAll.push(media);
		localStorage.setItem('mediaAll', JSON.stringify($scope.mediaAll));
		localStorage.setItem('mediaLastIndex', JSON.stringify($scope.mediaLastIndex));
	};
	
});



app.controller('EditMediaForm', function($scope) {

	var path = location.href;
	var editMediaId = path.substr(path.indexOf('=')+1);
	
	var i;
	for (i = 0; i < $scope.mediaAll.length; ++i) {
		if ($scope.mediaAll[i].id == editMediaId) {
			$scope.media = $scope.mediaAll[i];
			break;
		}
	}
	
	$scope.EditMedia = function() {
		$scope.mediaAll[i] = $scope.media;
		localStorage.setItem('mediaAll', JSON.stringify($scope.mediaAll));
	};
	
});


app.controller('TypesList', function($scope) {

	
	$scope.Delete = function(id) {
		for (var i = 0; i < $scope.typesAll.length; ++i) {
			if ($scope.typesAll[i].id == id) {
				$scope.typesAll.splice(i,1);
				break;
			}
		}
		
		localStorage.setItem('typesAll', JSON.stringify($scope.typesAll));
	};
});

app.controller('AddTypeForm', function($scope) {

	$scope.AddType = function() {
		var type = {
			id:		++$scope.typesLastIndex,
			name:	$scope.name
		};
		$scope.typesAll.push(type);
		localStorage.setItem('typesAll', JSON.stringify($scope.typesAll));
		localStorage.setItem('typesLastIndex', JSON.stringify($scope.typesLastIndex));
	};
	
});

app.controller('EditTypeForm', function($scope) {

	var path = location.href;
	var editTypeId = path.substr(path.indexOf('=')+1);
	
	var i;
	for (i = 0; i < $scope.typesAll.length; ++i) {
		if ($scope.typesAll[i].id == editTypeId) {
			$scope.type = $scope.typesAll[i];
			break;
		}
	}
	
	$scope.EditType = function() {
		$scope.typesAll[i] = $scope.type;
		localStorage.setItem('typesAll', JSON.stringify($scope.typesAll));
	};
	
});


app.controller('FriendsList', function($scope) {

	$scope.Delete = function(id) {
		for (var i = 0; i < $scope.friendsAll.length; ++i) {
			if ($scope.friendsAll[i].id == id) {
				$scope.friendsAll.splice(i,1);
				break;
			}
		}
		localStorage.setItem('friendsAll', JSON.stringify($scope.friendsAll));
	};
});

app.controller('AddFriendForm', function($scope) {
	$scope.AddFriend = function() {
		var friend = {
			id:		++$scope.friendsLastIndex,
			name:	$scope.name
		};
		$scope.friendsAll.push(friend);
		localStorage.setItem('friendsAll', JSON.stringify($scope.friendsAll));
		localStorage.setItem('friendsLastIndex', JSON.stringify($scope.friendsLastIndex));
	};
	
});

app.controller('EditFriendForm', function($scope) {


	var path = location.href;
	var editFriendId = path.substr(path.indexOf('=')+1);
	
	var i;
	for (i = 0; i < $scope.friendsAll.length; ++i) {
		if ($scope.friendsAll[i].id == editFriendId) {
			$scope.friend = $scope.friendsAll[i];
			break;
		}
	}
	
	$scope.EditFriend = function() {
		$scope.friendsAll[i] = $scope.friend;
		localStorage.setItem('friendsAll', JSON.stringify($scope.friendsAll));
	};
	
});

app.controller('movieDetails', function($scope, $http) {

    var path = location.href;
    var editMediaId = path.substr(path.indexOf('=') + 1);

    var i;
    for (i = 0; i < $scope.mediaAll.length; ++i) {
        if ($scope.mediaAll[i].id == editMediaId) {
            $scope.media = $scope.mediaAll[i];
            break;
        }
    }

    $scope.search = function () {
            $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json', {
                params: {
                    apikey: 'm7jg2udfay5fpxnryaw8sz5a',
                    callback: 'JSON_CALLBACK',
                    q: $scope.media.title, //Pobierz nazwe filmu z media ID
                    page_limit: '1'
                }
            })
            .success(function (data) {
                $scope.total = data.total;
                $scope.moviedetails = data.movies;
            });
        };

	
});

app.controller('FightGame', function ($scope, $http) {
    $scope.fightType = "Movie";


    //var path = location.href;
    //var editMediaId = path.substr(path.indexOf('=') + 1);

    //var i;
    //for (i = 0; i < $scope.mediaAll.length; ++i) {
    //    if ($scope.mediaAll[i].id == editMediaId) {
    //        $scope.media = $scope.mediaAll[i];
    //        break;
    //    }
    //}

    //$scope.EditMedia = function () {
    //    $scope.mediaAll[i] = $scope.media;
    //    localStorage.setItem('mediaAll', JSON.stringify($scope.mediaAll));
    //};


});

app.controller('FightResult', function ($scope, $http) {
    $scope.fightType = "Movie";
    $scope.fight = function () {
        $scope.critics = 0;
        $scope.critics2 = 0;
        $scope.winnerId = 0;
        //console.log("Movie no: " + movieno);
        var i =0 , movieFound = 0;
        //console.log("Media all length " + $scope.mediaAll.length);
        for (i = 0, movieFound = 0; i < $scope.mediaAll.length; ++i) {
            //console.log($scope.mediaAll[i].title + " " + $scope.mediaAll[i].type);
            if ($scope.mediaAll[i].type == 1 && $scope.mediaAll[i].isChecked == true) {
                $scope.tempMedia = $scope.mediaAll[i];
                //alert($scope.tempMedia.title);
                //console.log("Film checked: " + i);
                    //console.log("isChecked: " + $scope.mediaAll[i].id);
                    //Mamy film zaznaczony, teraz sprawdzamy go w bazie, w zmiennej zapisujemy wynik 
                    //jeśli jest to drugi film to przerywamy, porównujemy go z pierwszym i wyświetlamy widzowi.
                    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json', {
                            params: {
                                apikey: 'm7jg2udfay5fpxnryaw8sz5a',
                                callback: 'JSON_CALLBACK',
                                q: $scope.mediaAll[i].title,
                                page_limit: '1'
                            }
                    })
                        .success(function(data) {
                            $scope.total = data.total;
                            //alert("What do I got here? " + JSON.parse(data.movies[0].ratings.critics_score));
                            if ($scope.critics < JSON.parse(data.movies[0].ratings.critics_score)) {
                                $scope.critics = JSON.parse(data.movies[0].ratings.critics_score);
                                $scope.winnerId = $scope.tempMedia.id;
                        }
                            ++$scope.movieFound;
                        //console.log("movie found: " + $scope.movieFound);
                        });
                //console.log("TITLE" + $scope.mediaAll[i].title);
            }

            //console.log("Movie number:" + $scope.movieFound);
            //if ($scope.movieFound == 2) {
            //    console.log("We are going to break here!");
            //    break;
            //}
        }
        //console.log("highest critics score" + $scope.critics);
    };

});