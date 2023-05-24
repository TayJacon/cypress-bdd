Feature: Validate menu options on Appnovation website

Scenario: Check the presence of menu options
  Given I am on website homepage
  When I click on menu icon
  Then I should see the following menus and submenus:
    | Menu            | Href                                 |
    | Our Work        |/our-work                             |
    | Services       |/services                            |
    | Industries        |/industries                             |
    | About Us        |/about-us                           |
    | About Us        |/about-us                           |
    | Vision & Values        |/about-us#vision-and-values                            |
    | Purpose & Philosophy        |/about-us#purpose-and-philosophy                             |
    | Awards & Growth        |/about-us#awards                            |
    | Leadership        |/our-management                             |
    | Insights        |/insights                         |
    | Newsroom        |/news                           |
    | Partners        |/partners                             |
    | Careers        |/careers                             |
    | Contact Us        |/contact-us                          |
    | Home        |/                         |

