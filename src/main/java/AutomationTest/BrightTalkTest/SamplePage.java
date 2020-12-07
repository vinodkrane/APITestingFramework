package AutomationTest.BrightTalkTest;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SamplePage extends BasePage {
	
	// Declare elements on stack overflow homepage by @findBy annotation
	 @FindBy(linkText = "Log in")
	 public WebElement btnLogIn;
	 
	 @FindBy(tagName = "title")
	 public WebElement pageTitle;
	
	 /**
	   * Description: Constructor. Page factory will initialize every web element with reference to corresponding element on the actual web page based on locators.
	   * @param: none
	   * return: n/a
	 */	
    public SamplePage() {
        PageFactory.initElements(driver, this);
    }
    
    /**
	   * Description: To confirm if user is landed on homepage.
	   * @param: title
	   * return: Page Title
	 */	
    public String iAmOnHomePage(String title) {
    	//Wait for page load
    	WebDriverWait wait = new WebDriverWait(driver, 15);
    	wait.until(webDriver -> ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete"));
    	
    	return driver.getTitle();
    }
}
