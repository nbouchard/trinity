var app = angular.module('supplier', []);

app.controller("loginController", function ($scope) {
    $scope.name = "Alex";
    $scope.menu = ["Change Password", "Contact Us", "Log Out"];
});

app.controller("filterController", function ($scope) {
    $scope.suppliers = ["Direct Energy", "Constellation"];
    $scope.states = ["UT", "CA", "TX", "NY", "CT", "OR", "WA", "CO", "DC", "HI", "MT"];
    $scope.products = ["Residential", "Small Business", "Commercial"];
    $scope.services = ["Natural Gas", "Electric", "Oil", "Candles"];
    $scope.status = ["Inactive", "Active"];
    $scope.state = "UT";
    $scope.product = "Residential";
    $scope.service = "Natural Gas";
    $scope.statusSet = "Active";

    $scope.activeFilter = 0;
    $scope.selectFilter = function (setFilter) {
        if (setFilter === $scope.activeFilter && $scope.filter !== 0) {
            $scope.filter = 0;
        } else {
            $scope.activeFilter = setFilter;
            $scope.filter = 1;
        }
    };
    $scope.isSelectedFilter = function (selectedFilter) {
        return $scope.activeFilter === selectedFilter;
    };
});

app.controller("supplierDashboardController", function ($scope) {
    $scope.dashboard =
        [{
            "stateName": "UT",
            "plans": [{
                "active": "Active",
                "name": "Residential Electicity",
                "customers": "6"
            }, {
                "active": "Inactive",
                "name": "Residential Electicity",
                "customers": "2"
            }]
        }, {
            "stateName": "CA",
            "plans": [{
                "active": "Active",
                "name": "Residential Electicity",
                "customers": "7"
            }, {
                "active": "Inactive",
                "name": "Residential Natural Gas",
                "customers": "15"
            } ]
        }];
});

app.directive('headerNav', function () {
    return {
        restrict: "E",
        templateUrl: "partials/header.html"
    };
});
app.directive('filterBox', function () {
    return {
        restrict: "E",
        templateUrl: "partials/filter-box.html"
    };
});
app.directive('tabs', function () {
    return {
        restrict: "E",
        templateUrl: "partials/tabs.html"
    };
});
app.directive('footerNav', function () {
    return {
        restrict: "E",
        templateUrl: "partials/footer.html"
    };
});
app.directive('sideNav', function () {
    return {
        restrict: "E",
        templateUrl: "partials/side-nav.html"
    };
});

app.controller("tabSupplierController", function ($scope) {
    $scope.init = function () {
        $scope.plans[0] = null;
        $scope.activeTab = 1;
    };

    $scope.tabs = [
        {
            "title": "Customers",
        },
        {
            "title": "Plans",
        }];
    $scope.selectTab = function (setTab) {
        $scope.activeTab = setTab;
    };
    $scope.isSelected = function (selectedTab) {
        return $scope.activeTab === selectedTab;
    };
    $scope.customers = [{
        "dateSubmitted": "09/10/2014",
        "status": "Deposit Required",
        "firstName": "Alex",
        "lastName": "Stillwell",
        "email": "astillwell@chooseenergy.com",
        "planName": "10 month fixed",
        "price": "$0.0789",
        "address": "1943 15th Street.",
        "address2": "Apartment A1",
        "city": "San Francisco",
        "state": "CA",
        "zipcode": "94114",
        "phone": "4159207881",
        "socialSecurityNumber": "",
        "dateOfBirth": "11/06/1987",
        "scheduledDate": "12/22/2014",
        "endDate": "12/22/2015",
        "plan": {
            "name": "Free Sundays",
            "term": "10 months",
            "type": "Fixed",
            "renewable": "27%",
            "status": "Active",
            "progress": "Complete",
            "activation": "1/10/2014",
            "deactivation": "-",
            "endDate": "7/10/2017",
            "scheduled": "1/10/2014",
            "customers": "4",
            "description": "Only available to new Direct Energy customers. 12 month fixed rate.",
            "terminationFee": "100",
            "terminationFeeDescription": "This is the Early Termination Fee description.",
            "offerAmount": "100",
            "offerDescription": "This is the offer description.",
            "feeName": "Monthly Fee",
            "feeAmount": "$4.95",
            "feeDescription": "There is a $4.95 monthly fee for this plan.",
            "planID": "12345",
            "planDocs": "toc.pdf"
        }
    }, {
        "dateSubmitted": "11/06/2014",
        "status": "Delivered Successfully",
        "firstName": "Tamara",
        "lastName": "Hudgins",
        "email": "tamtam1122@gmail.com",
        "planName": "Base Rate E1",
        "price": "$0.0822"
    }, {
        "dateSubmitted": "11/22/2014",
        "status": "Deposit Required",
        "firstName": "Michala",
        "lastName": "Rackham",
        "email": "macattack@gmail.com",
        "planName": "Price Advantage",
        "price": "$0.0780"
    }, {
        "dateSubmitted": "4/12/2015",
        "status": "Delivered with Exception",
        "firstName": "Robert",
        "lastName": "Holmes",
        "email": "robstillholmes@gmail.com",
        "planName": "Free Sundays",
        "price": "$0.0768"
    }];
    $scope.plans = [{
        "edit": 1,
        "name": "Free Sundays",
        "term": "10 months",
        "type": "Fixed",
        "renewable": "27%",
        "status": "Active",
        "progress": "Complete",
        "activation": "1/10/2014",
        "deactivation": "-",
        "endDate": "7/10/2017",
        "scheduled": "1/10/2014",
        "customers": "4",
        "description": "Only available to new Direct Energy customers. 12 month fixed rate.",
        "terminationFee": "100",
        "terminationFeeDescription": "This is the Early Termination Fee description.",
        "offerAmount": "100",
        "offerDescription": "This is the offer description.",
        "feeName": "Monthly Fee",
        "feeAmount": "$4.95",
        "feeDescription": "There is a $4.95 monthly fee for this plan.",
        "planID": "12345",
        "planDocs": "toc.pdf"
    }, {
        "edit": 0,
        "name": "Price Advantage 12 Month",
        "term": "14 months",
        "type": "Fixed",
        "renewable": "87%",
        "status": "Inactive",
        "progress": "Complete",
        "activation": "1/1/2013",
        "deactivation": "1/1/2014",
        "endDate": "2/28/2014",
        "scheduled": "1/1/2013",
        "customers": "2",
        "description": "Only available to new Direct Energy customers. 12 month fixed rate.",
        "terminationFee": "100",
        "terminationFeeDescription": "This is the Early Termination Fee description.",
        "offerAmount": "100",
        "offerDescription": "This is the offer description.",
        "feeName": "Monthly Fee",
        "feeAmount": "$4.95",
        "feeDescription": "There is a $4.95 monthly fee for this plan.",
        "planID": "12345",
        "planDocs": "toc.pdf"
    }, {
        "edit": 0,
        "name": "Base Rate E1",
        "term": "60 months",
        "type": "Fixed",
        "renewable": "100%",
        "status": "Active",
        "progress": "Complete",
        "activation": "1/11/2014",
        "deactivation": "-",
        "endDate": "1/9/2019",
        "scheduled": "-",
        "customers": "5",
        "description": "Only available to new Direct Energy customers. 12 month fixed rate.",
        "terminationFee": "100",
        "terminationFeeDescription": "This is the Early Termination Fee description.",
        "offerAmount": "100",
        "offerDescription": "This is the offer description.",
        "feeName": "Monthly Fee",
        "feeAmount": "$4.95",
        "feeDescription": "There is a $4.95 monthly fee for this plan.",
        "planID": "12345",
        "planDocs": "toc.pdf"
    }];
});