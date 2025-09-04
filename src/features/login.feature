@login
Feature: Login functionality

  Background:
    Given I navigate to the login page

  @happy @smoke
  Scenario: Successful login with valid credentials
    When I login with username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should see the products page

  @negative
  Scenario Outline: Unsuccessful login variations
    When I login with username "<username>" and password "<password>"
    And I click the login button
    Then I should see an error message

    Examples:
      | username      | password      |
      | invalid_user  | wrong_pass    |
      | standard_user | wrong_pass    |
      | locked_out_user | secret_sauce |
