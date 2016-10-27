import angular from 'angular';
import 'angular-route';
import './pageone/page1';
import './next/next';
angular.module("myApp", ['ngRoute', 'myApp.pageone', 'myApp.next'])
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                template: require("./pageone/page1.pug"),
                controller: "PageOneCtrl"
            })
            .when("/next", {
                template: require("./next/next.pug"),
                controller: "NextCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
    });

