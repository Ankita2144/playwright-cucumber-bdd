Feature: Add item to cart and checkout

  Background:
    Given I navigate to the login page
    When I login as "standard"
    Then I should see the products page

  Scenario: Add item to cart and checkout
    When I add "Sauce Labs Backpack" to the cart
    And I click on cart icon and go to the cart
    Then I should see "1" item in the cart
    When I proceed to checkout with first name "John", last name "Doe", and postal code "12345"
    Then I should see the order confirmation page
    When I finish the checkout
    Then I should see the order complete page
