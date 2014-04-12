# angular-trackjs
Simple module for [AngularJS](//angularjs.org) with wich you can logging **client side errors** at service [trackjs.com](//trackjs.com)


## Installation:


1. Download angular-trackjs [here](//github.com/Budmore/angular-trackjs/archive/master.zip)


2. Add dependencies to your app `angular.module('yourApp', ['angular-trackjs'])`


````html
<script src="//dl1d2m8ri9v3j.cloudfront.net/releases/1.2.5/tracker.js"
        data-customer="YOUR-PUBLIC-CUSTOMER-KEY"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>

<script src="./path-to/angular-trackjs.js"></script>
<script>
  angular.module('yourApp', [
    ...,
    'angular-trackjs'
  ]);
</script>
````
