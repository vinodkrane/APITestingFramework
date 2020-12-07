package AutomationTest.BrightTalkTest;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.testng.Assert;

public class StepDefinition extends BasePage{
	
	//Declaring a response object 
	Response response;
	
	//Loading an API URI from properties file
	String uri = LoadProp.getproperty("apiUrl");
	
	/*************************************************************************************
	 * Scenario 001
	 * Should see LIST USERS of all existing users
	 *************************************************************************************/
	@Given("^I get the default list of users for on (\\d+)st page$")
	public void i_get_the_default_list_of_users_for_on_page(String pageNum) throws Throwable {
		// Building URL from URI
		String url = uri + "/api/users?page=" + pageNum;

		// Send the request and collect the response
		response = RestAssured.get(url);
	}

	@When("^I get the list of all users$")
	public void i_get_the_list_of_all_users() throws Throwable {
		// Assert HTTP status code
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
	}

	@Then("^I should see total users count equals to number of user ids$")
	public void i_should_see_total_users_count_equals_to_number_of_user_ids() throws Throwable {
		// Validate total users count
		int total = response.jsonPath().get("total");
		Assert.assertEquals(total, 12);
	}
	
	/*************************************************************************************
	 * Scenario 002
	 * Should see SINGLE USER data
	 *************************************************************************************/
	@Given("^I make a search for user (\\d+)$")
	public void i_make_a_search_for_user1(int arg1) throws Throwable {
		// Building URL from URI
		String url = uri + "/api/users/" + arg1;

		// Send the request and collect the response
		response = RestAssured.get(url);
	}

	@Then("^I should see following user data$")
	public void i_should_see_following_user_data(DataTable dt) throws Throwable {
		
		// Assert HTTP status code
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
		
		// Read data from data table
		List<Map<String, String>> dtData = dt.asMaps(String.class, String.class);
		
		String dtName = dtData.get(0).get("first_name");
		String dtEmail = dtData.get(0).get("email");

		// Read data from JSON response
		Map<String, String> responseData = response.jsonPath().getMap("data");
		String responseName = responseData.get("first_name");
		String responseEmail = responseData.get("email");
		
		// Assert the results
		Assert.assertEquals(dtName, responseName);
		Assert.assertEquals(dtEmail, responseEmail);	
	}
	
	/*************************************************************************************
	 * Scenario 003
	 * Should see SINGLE USER NOT FOUND error code
	 *************************************************************************************/
	@Given("^I make a search for invalid user (\\d+)$")
	public void i_make_a_search_for_invalid_user(int userId) throws Throwable {
		// Building URL from URI
		String url = uri + "/api/users/" + userId;

		// Send the request and collect the response
		response = RestAssured.get(url);
	}

	@Then("^I receive error code (\\d+) in response$")
	public void i_receive_error_code_in_response(int errorCode) throws Throwable {
		// Assert HTTP status code
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, errorCode);
	}
	
	
	/*************************************************************************************
	 * Scenario 004
	 * CREATE a user
	 *************************************************************************************/
	
	@Given("^I create user with following \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_create_user_with_following(String name, String job) throws Throwable {
		// Create a payload
		Map<String, String> request = new HashMap<>();
	    request.put("name", name);
	    request.put("job", job);
	    
	    // Send the POST request and collect the response
		response = given()
				.contentType(ContentType.JSON)
				.accept(ContentType.JSON)
				.body(request)
				.when()
				.post(uri + "/api/users");
	}

	@Then("^response should contain folowing data$")
	public void response_should_contain_folowing_data(DataTable dt) throws Throwable {
		// Assert HTTP status code
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 201);
		
		// Assert the response data
		List<String> dtValues = dt.asList(String.class);
		String resultString = response.asString();
		for (String s : dtValues) {
			Assert.assertTrue(resultString.contains(s));
		}
	}
	
	/*************************************************************************************
	 * Scenario 005
	 * LOGIN - SUCCESSFUL by a user
	 *************************************************************************************/
	@Given("^I login succesfully with following data$")
	public void i_login_succesfully_with_following_data(DataTable dt) throws Throwable {
		// Read data from data table
		List<Map<String, String>> dtData = dt.asMaps(String.class, String.class);
		
		String dtEmail = dtData.get(0).get("Email");
		String dtPassword = dtData.get(0).get("Password");
		
		// Create a payload
		Map<String, String> request = new HashMap<>();
	    request.put("email", dtEmail);
	    request.put("password", dtPassword);
	    
	    //Send POST request and collect the response
		response = given()
				.contentType(ContentType.JSON)
				.accept(ContentType.JSON)
				.body(request)
				.when()
				.post(uri + "/api/login");
		
		// Assert the HTTP status code
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
		
		// Assert the response data
		String responseToken = response.jsonPath().get("token");
		Assert.assertEquals(responseToken, "QpwL5tke4Pnpja7X4");

	}

	/*************************************************************************************
	 * Scenario 006
	 * LOGIN - UNSUCCESSFUL by a user
	 *************************************************************************************/
	@Given("^I login unsuccesfully with following data$")
	public void i_login_unsuccesfully_with_following_data(DataTable dt) throws Throwable {
		// Read values from data table
		List<Map<String, String>> dtData = dt.asMaps(String.class, String.class);
		
		String dtEmail = dtData.get(0).get("Email");
		String dtPassword = dtData.get(0).get("Password");
		
		// Create a payload
		Map<String, String> request = new HashMap<>();
	    request.put("email", dtEmail);
	    request.put("password", dtPassword);
	    
	    // Send POST request and collect the response
		response = given()
				.contentType(ContentType.JSON)
				.accept(ContentType.JSON)
				.body(request)
				.when()
				.post(uri + "/api/login");
		
		// Assert HTTP status code
		int statusCode = response.getStatusCode();
		Assert.assertNotEquals(statusCode, 200);
	}
	
	/*************************************************************************************
	 * Scenario 007
	 * Should see list of users with DELAYED RESPONSE
	 *************************************************************************************/
	@Given("^I wait for user list to load$")
	public void i_wait_for_user_list_to_load() throws Throwable {
		// Building URL from URI. Add the delay setting to url
		String url = uri + "/api/users?delay=3";

		// Send the request and collect the response
		response = RestAssured.get(url);
	}

	@Then("^I should see that every user has a unique id$")
	public void i_should_see_that_every_user_has_a_unique_id() throws Throwable {
		// Validate the list of users are displayed
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
		
		// Validate all users have unique ids
		List<Map<String, Integer>> companies = response.jsonPath().getList("data");
		ArrayList<Integer> idlist = new ArrayList<Integer>();
		
		for (int i = 0; i < companies.size(); i++) {
			int id = companies.get(i).get("id");
			if(idlist.contains(id))
				Assert.assertTrue(false);
		}
	}
	
	/*************************************************************************************
	 * Scenario 008
	 * Sample
	 *************************************************************************************/
	@Given("^I am on the home page$")
	public void i_am_on_the_home_page() throws Throwable {
		// Open an URL
		driver.get(LoadProp.getproperty("url"));
		
		// Validate the page is opened correctly
		Assert.assertEquals(iniClass.samplePage.iAmOnHomePage("Stack Overflow"),"Stack Overflow - Where Developers Learn, Share, & Build Careers");
	}
}
