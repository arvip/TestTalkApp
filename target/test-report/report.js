$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TechTalk.feature");
formatter.feature({
  "line": 1,
  "name": "Test Edit Profile features",
  "description": "As a user of BrightTalk web app, I want to edit last name so that it appears in the profile page correctly.",
  "id": "test-edit-profile-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test edit last name feature",
  "description": "",
  "id": "test-edit-profile-features;test-edit-last-name-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the new user is registered to the website and logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects the Edit Profile",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "changes the last name \u003clast name\u003e on the Profile page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "re-logs into the site",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the new last name \u003clast name\u003e is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-edit-profile-features;test-edit-last-name-feature;",
  "rows": [
    {
      "cells": [
        "last name"
      ],
      "line": 13,
      "id": "test-edit-profile-features;test-edit-last-name-feature;;1"
    },
    {
      "cells": [
        "Voldemort"
      ],
      "line": 14,
      "id": "test-edit-profile-features;test-edit-last-name-feature;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 877117722,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test edit last name feature",
  "description": "",
  "id": "test-edit-profile-features;test-edit-last-name-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the new user is registered to the website and logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user selects the Edit Profile",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "changes the last name Voldemort on the Profile page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "re-logs into the site",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the new last name Voldemort is shown",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TechTalkStepDefinitions.launchTalk()"
});
formatter.result({
  "duration": 3610560568,
  "status": "passed"
});
formatter.match({
  "location": "TechTalkStepDefinitions.selectEditProfile()"
});
formatter.result({
  "duration": 497356184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "last name Voldemort",
      "offset": 12
    }
  ],
  "location": "TechTalkStepDefinitions.changeLastName(String)"
});
formatter.result({
  "duration": 5914727704,
  "status": "passed"
});
formatter.match({
  "location": "TechTalkStepDefinitions.reLogsIn()"
});
formatter.result({
  "duration": 2389951012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Voldemort",
      "offset": 18
    }
  ],
  "location": "TechTalkStepDefinitions.lastNameShown(String)"
});
formatter.result({
  "duration": 206236223,
  "status": "passed"
});
formatter.after({
  "duration": 131775285,
  "status": "passed"
});
});