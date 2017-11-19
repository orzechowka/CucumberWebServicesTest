$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fruit_list.feature");
formatter.feature({
  "line": 1,
  "name": "Fruit list",
  "description": "To make a great smoothie, I need some fruit",
  "id": "fruit-list",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11774086,
  "status": "passed"
});
formatter.before({
  "duration": 389113670,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "List fruit",
  "description": "",
  "id": "fruit-list;list-fruit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the system knows about the following fruit:",
  "rows": [
    {
      "cells": [
        "name",
        "color"
      ],
      "line": 5
    },
    {
      "cells": [
        "banana",
        "yellow"
      ],
      "line": 6
    },
    {
      "cells": [
        "strawberry",
        "red"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the client requests GET /fruits",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the response should be JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "[ {\"name\": \"banana\",     \"color\": \"yellow\"},\n  {\"name\": \"strawberry\", \"color\": \"red\"}    ]"
  }
});
formatter.match({
  "location": "FruitSteps.theSystemKnowsAboutTheFollowingFruit(Fruit\u003e)"
});
formatter.result({
  "duration": 117471305,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.theClientRequestsGETFruits()"
});
formatter.result({
  "duration": 1745713014,
  "status": "passed"
});
formatter.match({
  "location": "RestSteps.theResponseShouldBeJSON(String)"
});
formatter.result({
  "duration": 13793334,
  "status": "passed"
});
formatter.after({
  "duration": 13114310,
  "status": "passed"
});
});