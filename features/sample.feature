Feature: Example feature
  
@test
  Scenario: Test GET API
    Given User try to test API
    When User call "https://reqres.in/api/users?page=2" for test
    Then User got author: from server "https://reqres.in/api/users?page=2"  = "8"



  Scenario: Test POST API
    Given User try to test API
    When User call "https://reqres.in/api/users" for test and data is
     """
    {
    "name": "morpheus",
    "job": "zion resident"
     }
    """
    Then User got name: from server "https://reqres.in/api/users"  name  "morpheus"


