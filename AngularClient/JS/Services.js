
app.service("RESTClientService", function ($http) {
    this.baseURL = "http://localhost:81/"
    this.getBaseUrl = function () {
        return this.baseURL;
    }
    this.get = function (radius, delayInSeconds, operation_id) {
        var url = `${this.baseURL}TimeoutFrontEndWCFService/FrontEndService.svc/areaOf/${radius}/delay/${delayInSeconds}`;
        var guid = operation_id;
        //The RequestId header passed from here is taken as operation id at webhttp WCF side to correlate.
        return $http.get(url, {
            headers: {
                'Request-Id': guid,
                'x-ms-request-id': guid,
                'x-ms-request-root-id': operation_id
            }
        }
        );
    };
    this.getCircle = function (radius, operation_id) {
        var url = this.baseURL + 'FrontEndWebAPI/api/shapes/circle/' + radius;
        return $http.get(url, {
            headers: {
                'Request-Id': operation_id,
                'x-ms-request-id': operation_id,
                'x-ms-request-root-id': operation_id
            }
        }
        );
    }
    this.EchoHeaders = function () {
        var url = "AngularClient/MVCWCFClient/EchoHeaders";
        var guid = "operation_id";
        //The RequestId header passed from here is taken as operation id at webhttp WCF side to correlate.
        return $http.get(url, {
            headers: {
                'Request-Id': guid,
                'joys-header': 'joys header value',
            }
        }
        );
    }
});
