angular.module('restacular', [])

.provider('restacular', function() {
    var defaults = config;
    
    function addDefaults(obj) {
        var o = obj || {}
          , d = defaults
          , x
          , y;
            
        for(x in o) {
            if(o.hasOwnProperty(x)) {
                for(y in d) {
                    if(.hasOwnProperty(y)) {
                        if(!o.hasOwnProperty(y)) {
                            o[y] = d[y];
                        }
                    }
                }
            }
        }
        return o;
    }
    
    function request(obj) {
        $http(addDefaults(obj));
    }
    
    //Base Object
    function Base() {}
    Base.prototype.getList = function(params, headers) {
        request({method: 'GET', params: params, headers: headers});
    };
    Base.prototype.get     = function() {
        request({method: 'GET', params: params, headers: headers});
    };
    Base.prototype.put     = function() {
        request({method: 'PUT', params: params, headers: headers});
    };
    Base.prototype.post    = function() {
        request({method: 'POST', params: params, headers: headers});
    };
    Base.prototype.patch   = function() {
        request({method: 'PATCH', params: params, headers: headers});
    };
    Base.prototype.remove  = function() {
        request({method: 'DELETE', params: params, headers: headers});
    };
    Base.prototype.head    = function() {
        request({method: 'HEAD', params: params, headers: headers});
    };
    Base.prototype.trace   = function() {
        request({method: 'TRACE', params: params, headers: headers});
    };
    Base.prototype.options = function() {
        request({method: 'OPTIONS', params: params, headers: headers});
    };

    this.$get['$http', '$q', function($http, $q) {
        
    }];
        
});