Feature : Login functionality 

Scenario : Successful Login with valid credential
Given I am on login page
When I login with username and password or phone number
Then I should be logged in Successfully and see my username or phone number in profile

Scenario : Unsuccessful login with invalid credentials
Given I am on login page
When I login with incorrect username and password or phone number
Then I should see and error message