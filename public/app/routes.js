var app = angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'app/views/pages/home.html'
    })

    .when('/about',{
        templateUrl : 'app/views/pages/about.html'
    })

    .when('/register',{
        templateUrl : 'app/views/pages/users/register.html',
        controller : 'regCtrl',
        controllerAs: 'register' 
    })
    

    .when('/login',{
        templateUrl : 'app/views/pages/users/login.html',

    })


    .when('/logout',{
        templateUrl : 'app/views/pages/users/logout.html',

    })

    .when('/profile',{
        templateUrl : 'app/views/pages/users/profile.html',

    })

    .when('/create',{
        templateUrl : 'app/views/pages/manageRequestForm/create.html',
        controller : 'crudCtrl',
        controllerAs : /*ข้าขอตั้งชื่อเจ้าสิ่งนี้ว่า*/ 'createForm1' 
    })

    .when('/manageRequestForm',{
        templateUrl : 'app/views/pages/manageRequestForm/manageRequestForm.html',
        controller : 'crudCtrl',
        controllerAs : /*ข้าขอตั้งชื่อเจ้าสิ่งนี้ว่า*/ 'management' 
    })

    .when('/user_data',{
        templateUrl : 'app/views/pages/users/user_data.html',
        controller : 'mainCtrl',
        controllerAs : /*ข้าขอตั้งชื่อเจ้าสิ่งนี้ว่า*/ 'management',
        authenticated : true,
        permission : [ 'advisor','executive']
    })

    .otherwise({ redirectTo: '/'})

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

})
app.run(['$rootScope','Auth','$location','User',function($rootScope,Auth,$location,User){

    $rootScope.$on('$routeChangStart',function(event,next,current){

        if(next.$$route !== undefined){
            if(next.$$route.authenticated === true){
                if(!Auth.isLoggedIn()){
                    event.preventDefault();
                    $location.path('/');
                }else if(next.$$route.permission){
                    User.getPermission().then(function(data){
                        console.log(data);
                    })



                }
            }
        }else if(next.$$route.authenticated === false){

            if(Auth.isLoggedIn()){
                event.preventDefault();
                $location.path('/profile');
            }

        }    
    });
}]);

