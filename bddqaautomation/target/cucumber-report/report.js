$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Practice.feature");
formatter.feature({
  "line": 2,
  "name": "Practice test",
  "description": "",
  "id": "practice-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@practice"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "My test 1",
  "description": "",
  "id": "practice-test;my-test-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test_practice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on flipkart login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cUSER_NAME\u003e\" and \"\u003cPASSWORD\u003e\", click on login btn and verifies login staus",
  "keyword": "When "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "practice-test;my-test-1;",
  "rows": [
    {
      "cells": [
        "USER_NAME",
        "PASSWORD",
        "STATUS"
      ],
      "line": 10,
      "id": "practice-test;my-test-1;;1"
    },
    {
      "cells": [
        "krsaurav2512@gmail.com",
        "Saurav@123",
        "true"
      ],
      "line": 11,
      "id": "practice-test;my-test-1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7623179547,
  "status": "passed"
});
formatter.before({
  "duration": 328848063,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "My test 1",
  "description": "",
  "id": "practice-test;my-test-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test_practice"
    },
    {
      "line": 1,
      "name": "@practice"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on flipkart login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"krsaurav2512@gmail.com\" and \"Saurav@123\", click on login btn and verifies login staus",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Practice_StepDefinition.user_is_on_flipkart_login_page()"
});
formatter.result({
  "duration": 7533306330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krsaurav2512@gmail.com",
      "offset": 13
    },
    {
      "val": "Saurav@123",
      "offset": 42
    }
  ],
  "location": "Practice_StepDefinition.user_enters_and_click_on_login_btn_and_verifies_login_staus(String,String)"
});
formatter.result({
  "duration": 3553542,
  "status": "passed"
});
formatter.after({
  "duration": 1748569793,
  "status": "passed"
});
formatter.after({
  "duration": 27374,
  "status": "passed"
});
});