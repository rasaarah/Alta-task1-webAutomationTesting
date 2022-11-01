package step_definitions;

import com.taskone.itemListPage;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;

public class itemPage {
    private WebDriver webDriver;
    public itemPage(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("User click on \"(.*)\" to see detail of product")
    public void verifyClickOnLandingPage(String productName){
        itemListPage aa = new itemListPage(webDriver);
        aa.chooseItem(productName);
        aa.backButton();
    }
}
