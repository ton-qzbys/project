angular.module('userServices',[])

    //https://www.geeksforgeeks.org/angularjs-factory-method/ ---> factory method
    .factory('User',function($http){
        userFactory = {}

        //User.create(regData)
        userFactory.create =function(regData){
            return $http.post('/api/users', regData)
        }

        return userFactory;
    })
