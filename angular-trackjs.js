/**
 * Logging Client Side Errors with AngularJS and Track:js.
 * @repo: https://bitbucket.org/Budmore/angular-trackjs
 * @author: Budmore
 * @license: MIT
 * @version: 1.2
 */
angular.module('angular-trackjs', []).factory('$exceptionHandler', ['$window', '$log',
    function ($window, $log) {
        'use strict';
        if ($window.trackJs) {

            // More option at #https://my.trackjs.com/customer/setup
            trackJs.configure({
                // consoleDisplay: false,
                // trackAjaxFail: false
            });

            return function (exception, cause) {
                $log.error.apply($log, arguments);
                trackJs.track(exception);
            };
        } else {
            return function (exception, cause) {
                // Default error handler
                $log.error.apply($log, arguments);
            };
        }
    }
]);
