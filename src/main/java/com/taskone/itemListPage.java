package com.taskone;

import com.taskone.InventoryPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;


public class itemListPage extends InventoryPage {
    private static WebDriver driver;

    public itemListPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    public boolean isDisplayed(){
        logo.isDisplayed();
        return true;
    }

    public void dropDownSort(String sort){
        Select dropDownSort = new Select(productSort);
        dropDownSort.selectByVisibleText(sort);
    }

    public void chooseItem(String nameProduct){
        String xpath = "//div[.='"+ nameProduct+"']";
        driver.findElement(By.xpath(xpath)).click();
    }

    public void addItem1(String addItem1){
        driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-onesie']")).click();
    }

    public void addItem2(String addItem2){
        driver.findElement(By.xpath("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")).click();
    }

    public void backButton(){
        driver.findElement(By.xpath("//button[@id='back-to-products']")).click();
    }

    public void chartItem(){
        driver.findElement(By.cssSelector(".shopping_cart_link")).click();
    }

    public void removeItem(){
        driver.findElement(By.id("remove-test.allthethings()-t-shirt-(red)")).click();
    }

    public void checkoutButton(){
        driver.findElement(By.xpath("//button[@id='checkout']")).click();
    }

    public void inputFirstName(String fName){
        firstName.sendKeys(fName);
    }

    public void inputLastName(String lName){
        lastName.sendKeys(lName);
    }

    public void inputPostalCode(String pCode){
        postalCode.sendKeys(pCode);
    }

    public void continueButton(){
        driver.findElement(By.xpath("//input[@id='continue']")).click();
    }

    public String verifyPriceITotal(){
        return itemTotal.getText();
    }
    public String verifyPriceTax(){
        return tax.getText();
    }
    public String verifyPriceTotal(){
        return total.getText();
    }
    public void finishButton(){
        driver.findElement(By.xpath("//button[@id='finish']")).click();
    }

    public boolean transactionSuccess(String imagePoni){
        String a = "//img[@alt='"+imagePoni+"']";
        driver.findElement(By.xpath(a)).isDisplayed();
        return true;
    }

}