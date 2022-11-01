$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginSauce.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As user i want to login to the sauce",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 7516247700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal Login",
  "description": "",
  "id": "login;normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as username and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User is already on the landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 197499600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCredentials(String,String)"
});
formatter.result({
  "duration": 380264000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 68504400,
  "status": "passed"
});
formatter.after({
  "duration": 739725300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\u003cusername\u003e\" as username and \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"\u003cerrorMassage\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMassage"
      ],
      "line": 15,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "asd",
        "password",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 16,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "password",
        "Epic sadface: Username is required"
      ],
      "line": 18,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7270594200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"asd\" as username and \"password\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 40143000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asd",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 34
    }
  ],
  "location": "LoginSteps.inputCredentials(String,String)"
});
formatter.result({
  "duration": 268305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorMassage(String)"
});
formatter.result({
  "duration": 37671300,
  "status": "passed"
});
formatter.after({
  "duration": 707678800,
  "status": "passed"
});
formatter.before({
  "duration": 6067464100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"standard_user\" as username and \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Password is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 45545000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCredentials(String,String)"
});
formatter.result({
  "duration": 297891800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Password is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorMassage(String)"
});
formatter.result({
  "duration": 42898300,
  "status": "passed"
});
formatter.after({
  "duration": 716692300,
  "status": "passed"
});
formatter.before({
  "duration": 13894533800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid Login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\" as username and \"password\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 54669600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 31
    }
  ],
  "location": "LoginSteps.inputCredentials(String,String)"
});
formatter.result({
  "duration": 316053800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.verifyErrorMassage(String)"
});
formatter.result({
  "duration": 36043600,
  "status": "passed"
});
formatter.after({
  "duration": 738329500,
  "status": "passed"
});
formatter.uri("features/PurchaseFlow.feature");
formatter.feature({
  "line": 3,
  "name": "Add To Chart And Checkout",
  "description": "As user I want to add some stuffs to chart and checkout",
  "id": "add-to-chart-and-checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PurchaseFlow"
    }
  ]
});
formatter.before({
  "duration": 15125043800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User",
  "description": "",
  "id": "add-to-chart-and-checkout;user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as username and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User is already on the landing page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User sort \"Name (Z to A)\" and will see item sorting as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User pick \"Sauce Labs Onesie\" and \"Test.allTheThings() T-Shirt (Red)\" to chart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User will see basket has been filled with item have been choose",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User want to remove the last stuff have been added",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User want to checkout then input \"Sarah\" as first name, \"Kamilah\" as lastname and \"1111\" as postal code",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User will see checkout information payment \"Item total: $7.99\" with \"Tax: $0.64\" and \"Total: $8.63\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User complete the transaction while see the \"Pony Express\" image",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 41320700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCredentials(String,String)"
});
formatter.result({
  "duration": 375411400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 47676400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 11
    }
  ],
  "location": "PurchaseSteps.clickDropDownSort(String)"
});
formatter.result({
  "duration": 124541700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 11
    },
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 35
    }
  ],
  "location": "PurchaseSteps.putChooseItem(String,String)"
});
formatter.result({
  "duration": 443738700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.seeChartItem()"
});
formatter.result({
  "duration": 73495300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.removeItem()"
});
formatter.result({
  "duration": 56906900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sarah",
      "offset": 34
    },
    {
      "val": "Kamilah",
      "offset": 57
    },
    {
      "val": "1111",
      "offset": 83
    }
  ],
  "location": "PurchaseSteps.checkoutStuffs(String,String,String)"
});
formatter.result({
  "duration": 517492900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item total: $7.99",
      "offset": 44
    },
    {
      "val": "Tax: $0.64",
      "offset": 69
    },
    {
      "val": "Total: $8.63",
      "offset": 86
    }
  ],
  "location": "PurchaseSteps.verifyPriceCheckOut(String,String,String)"
});
formatter.result({
  "duration": 270837000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pony Express",
      "offset": 45
    }
  ],
  "location": "PurchaseSteps.successPageTransaction(String)"
});
formatter.result({
  "duration": 35845800,
  "status": "passed"
});
formatter.after({
  "duration": 716271200,
  "status": "passed"
});
formatter.uri("features/listItem.feature");
formatter.feature({
  "line": 2,
  "name": "Item List on page it must be clickable",
  "description": "As a User i want to click the product to check full description",
  "id": "item-list-on-page-it-must-be-clickable",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@listItem"
    }
  ]
});
formatter.before({
  "duration": 8974216500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Click on item who showed on the list",
  "description": "",
  "id": "item-list-on-page-it-must-be-clickable;click-on-item-who-showed-on-the-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"standard_user\" as username and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is already on the landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on \"Sauce Labs Backpack\" to see detail of product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on \"Sauce Labs Bike Light\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on \"Sauce Labs Bolt T-Shirt\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on \"Sauce Labs Fleece Jacket\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on \"Sauce Labs Onesie\" to see detail of product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on \"Test.allTheThings() T-Shirt (Red)\" to see detail of product",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPageIsDisplayed()"
});
formatter.result({
  "duration": 41497000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCredentials(String,String)"
});
formatter.result({
  "duration": 375295000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.isDashboardIsDisplayed()"
});
formatter.result({
  "duration": 53453300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 267171200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Bike Light",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 172589600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Bolt T-Shirt",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 201333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Fleece Jacket",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 148757500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 147983400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 15
    }
  ],
  "location": "itemPage.verifyClickOnLandingPage(String)"
});
formatter.result({
  "duration": 146838900,
  "status": "passed"
});
formatter.after({
  "duration": 733763600,
  "status": "passed"
});
});