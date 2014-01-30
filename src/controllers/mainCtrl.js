function mainCtrl($scope, $routeParams, $rootScope, $http, $location){

	$scope.images = [{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/VelazquezHilanderas110.jpg","artist":"Velazquez","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/TitianEuropa110.jpg","artist":"Titian","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/TitianActaeon2110.jpg","artist":"Titian","myth":"Actaeon-confirm","name":"strong like a titan-titian\nname:Diana and Actaeon","narativeGain1":"Strives to give the story as Avid tells us with words. - Professor\nArtemis(Diana) has a crecent moon on her head. She controls a woman's menstral cycle.\nShe(Artemis) is aggressive in defending modesty.-Professor","narativeGain2":"Resort to the statement on titian thinking - telling the story as avid would tell it.-Professor"},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/MoreauPrometheus110.jpg","artist":"Moreau","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/MinotaurWatts110.jpg","artist":"Watts","myth":"","name":"made of rats-watts","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/ManshipPrometheus110.jpg","artist":"Manship","myth":"","name":"man flying like a ship","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/IngresThetis110.jpg","artist":"Ingres","myth":"","name":"She't not making progress-ingress","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/HogarthToilette110.jpg","artist":"Hogarth","myth":"Actaeon","name":"Name: The Toilette","narativeGain1":"Middle of the painting: io in the painting above is being seducted while the woman sitting below the painting is being seduced by the old man","narativeGain2":"The boy in the corner playing with a statue of Actaeon, pointing at his antlers. Cuckolds the lusts of men."},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/GreenoughWashington110.jpg","artist":"Greenough","myth":"","name":"George Washington-Dollar-Green-Greenough","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/GoyaCronus110.jpg","artist":"Goya","myth":"","name":"Goya ate his boya","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/FarneseHercules110.jpg","artist":"Farnese Hercules","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/EwoutszJudgment110.jpg","artist":"Ewoutsz","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/ColonusGospel110.jpg","artist":"","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/ClackArtemis110.jpg","artist":"Clack","myth":"Actaeon","name":"Sculpture is black-clack\nName:Diana","narativeGain1":"Artemis is releasing the dog to get Actaeon","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/CaracciHercules110.jpg","artist":"Caracci","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/BrueghelIcarus110.jpg","artist":"Brueghel","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/BotticelliVenusMars110.jpg","artist":"Botticelli","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/BotticelliVenus110.jpg","artist":"Botticelli","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/BerniniDaphne110.jpg","artist":"Bernini","myth":"","name":"","narativeGain1":"","narativeGain2":""},
	{'howToRemember':"", "mainUrl":"","url":"http://hccl.byu.edu/macfarlane/MasteryImagephotos/BelvedereApollo110.jpg","artist":"Apollo Belvedere","myth":"","name":"","narativeGain1":"","narativeGain2":""}];

	$scope.printImages = function(){
		console.log(angular.toJson($scope.images));
	}

}