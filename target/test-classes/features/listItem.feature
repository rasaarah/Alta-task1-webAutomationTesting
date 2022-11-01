@listItem
Feature: Item List on page it must be clickable
  As a User i want to click the product to check full description
  Scenario: Click on item who showed on the list
    Given user open the web page
    When User input "standard_user" as username and "secret_sauce" as password
    And User is already on the landing page
    Then User click on "Sauce Labs Backpack" to see detail of product
    And User click on "Sauce Labs Bike Light" to see detail of product
    And User click on "Sauce Labs Bolt T-Shirt" to see detail of product
    And User click on "Sauce Labs Fleece Jacket" to see detail of product
    And User click on "Sauce Labs Onesie" to see detail of product
    And User click on "Test.allTheThings() T-Shirt (Red)" to see detail of product