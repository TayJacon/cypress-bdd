Feature: Validate page load on Appnovation website
  As a user of the Appnovation website
  I want to ensure that pages load successfully
  So that I can access the content and functionality

  Scenario: Check if the page loads successfully
    Given I am on website homepage
    Then the "/" page should load in 5000 ms 
