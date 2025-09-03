Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page

  Scenario: Unsuccessful login with invalid credentials
    Given I navigate to the login page
    When I login with username "invalid_user" and password "wrong_pass"
    Then I should see an error message
