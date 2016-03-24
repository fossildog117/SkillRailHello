angular.module('app.services', ['ngResource'])

  .factory('Post', function ($resource) {
    return $resource('https://data.skillrail.com/Token');
  })

  .factory('GetProfile', function ($resource) {
    return $resource('https://data.skillrail.com/api/MyProfile');
  })

  .factory('SuggestedJobsServ', function ($resource) {
    return $resource('https://data.skillrail.com/Products');
  })

  .service('Token', function () {

    var Token = 'Token';

    return {
      getProperty: function () {
        return Token;
      },
      setProperty: function (value) {
        Token = value;
      }
    };
  });
