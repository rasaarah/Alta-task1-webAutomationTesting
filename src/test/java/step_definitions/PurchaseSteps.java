package step_definitions;

import com.taskone.itemListPage;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Then("User sort \"(.*)\" and will see item sorting as expected")
    public void clickDropDownSort(String sort) {
        itemListPage itemListPage = new itemListPage(webDriver);
        itemListPage.dropDownSort(sort);
    }
    @And("User pick \"(.*)\" and \"(.*)\" to chart")
    public void putChooseItem(String addItem1, String addItem2){
        itemListPage itemListPage = new itemListPage(webDriver);
        itemListPage.chooseItem(addItem1);
        itemListPage.addItem1(addItem1);
        itemListPage.backButton();
        itemListPage.chooseItem(addItem2);
        itemListPage.addItem2(addItem2);
        itemListPage.backButton();
    }

    @Then("User will see basket has been filled with item have been choose")
    public void seeChartItem(){
        itemListPage itemListPage = new itemListPage(webDriver);
        itemListPage.chartItem();
    }

    @And("User want to remove the last stuff have been added")
    public void removeItem(){
        itemListPage itemListPage = new itemListPage(webDriver);
        itemListPage.removeItem();
    }

    @And("User want to checkout then input \"(.*)\" as first name, \"(.*)\" as lastname and \"(.*)\" as postal code")
    public void checkoutStuffs(String firstName, String lastName, String postalCOde){
        itemListPage itemListPage = new itemListPage(webDriver);
        itemListPage.checkoutButton();
        itemListPage.inputFirstName(firstName);
        itemListPage.inputLastName(lastName);
        itemListPage.inputPostalCode(postalCOde);
        itemListPage.continueButton();
    }

    @Then("User will see checkout information payment \"(.*)\" with \"(.*)\" and \"(.*)\"")
    public void verifyPriceCheckOut(String expectedItemTotal, String expectedTax, String expectedTotal){
        itemListPage itemListPage = new itemListPage(webDriver);
        itemListPage.verifyPriceITotal();
        itemListPage.verifyPriceTax();
        itemListPage.verifyPriceTotal();
        Assert.assertEquals(expectedItemTotal, itemListPage.verifyPriceITotal());
        Assert.assertEquals(expectedTax, itemListPage.verifyPriceTax());
        Assert.assertEquals(expectedTotal, itemListPage.verifyPriceTotal());
        itemListPage.finishButton();
    }

    @Then("User complete the transaction while see the \"(.*)\" image")
    public void successPageTransaction(String imagePoni){
        itemListPage itemListPage = new itemListPage(webDriver);
        itemListPage.transactionSuccess(imagePoni);
    }
}
