$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/API-Test.feature");
formatter.feature({
  "line": 1,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2747500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I get the list of all users",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see total users count equals to number of user ids",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_get_the_default_list_of_users_for_on_page(String)"
});
formatter.result({
  "duration": 2394697900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_get_the_list_of_all_users()"
});
formatter.result({
  "duration": 2329200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_total_users_count_equals_to_number_of_user_ids()"
});
formatter.result({
  "duration": 659434400,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 11
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_user1(int)"
});
formatter.result({
  "duration": 101073200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_following_user_data(DataTable)"
});
formatter.result({
  "duration": 16552300,
  "status": "passed"
});
formatter.before({
  "duration": 46000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I make a search for invalid user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 33
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_invalid_user(int)"
});
formatter.result({
  "duration": 374407800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_receive_error_code_in_response(int)"
});
formatter.result({
  "duration": 66800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following \"\u003cName\u003e\" \"\u003cJob\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 24,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 25,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 26,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 93500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following \"Peter\" \"Manager\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 30
    },
    {
      "val": "Manager",
      "offset": 38
    }
  ],
  "location": "StepDefinition.i_create_user_with_following(String,String)"
});
formatter.result({
  "duration": 789278700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.response_should_contain_folowing_data(DataTable)"
});
formatter.result({
  "duration": 322600,
  "status": "passed"
});
formatter.before({
  "duration": 40400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following \"Liza\" \"Sales\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain folowing data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 30
    },
    {
      "val": "Sales",
      "offset": 37
    }
  ],
  "location": "StepDefinition.i_create_user_with_following(String,String)"
});
formatter.result({
  "duration": 357539900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.response_should_contain_folowing_data(DataTable)"
});
formatter.result({
  "duration": 769300,
  "status": "passed"
});
formatter.before({
  "duration": 55500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I login succesfully with following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 30
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_succesfully_with_following_data(DataTable)"
});
formatter.result({
  "duration": 397328400,
  "status": "passed"
});
formatter.before({
  "duration": 50800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I login unsuccesfully with following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 35
    },
    {
      "cells": [
        "test.user@reqres.in",
        "cityslicka"
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_unsuccesfully_with_following_data(DataTable)"
});
formatter.result({
  "duration": 370383600,
  "status": "passed"
});
formatter.before({
  "duration": 35800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Should see list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I wait for user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_wait_for_user_list_to_load()"
});
formatter.result({
  "duration": 3361473800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_that_every_user_has_a_unique_id()"
});
formatter.result({
  "duration": 39333400,
  "status": "passed"
});
formatter.uri("src/test/java/SampleTest.feature");
formatter.feature({
  "line": 1,
  "name": "BrightTalk  Sample Test",
  "description": "",
  "id": "brighttalk--sample-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 59800,
  "status": "passed"
});
formatter.before({
  "duration": 4106413100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Sample",
  "description": "",
  "id": "brighttalk--sample-test;sample",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@UI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 1545328500,
  "status": "passed"
});
formatter.after({
  "duration": 660033000,
  "status": "passed"
});
});