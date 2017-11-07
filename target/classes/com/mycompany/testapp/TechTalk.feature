Feature: Test Edit Profile features
As a user of BrightTalk web app, I want to edit last name so that it appears in the profile page correctly.

Scenario Outline: Test edit last name feature
Given the new user is registered to the website and logged in
When user selects the Edit Profile 
And changes the last name <last name> on the Profile page
And re-logs into the site
Then the new last name <last name> is shown

Examples:

| last name		|
| Voldemort		|
