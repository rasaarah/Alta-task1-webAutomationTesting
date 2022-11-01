package com.taskone;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class InventoryPage {
    private static WebDriver driver;

    public InventoryPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

//    //Buying Flow
//
//    public static void pilihItem(String namaProduk) {
//        String xpath = "//div[.="+ namaProduk+"]";
//        driver.findElement(By.xpath(xpath)).click();
//    }
//
//    public static void clickAddToChart() {
//        String xpath = "//*[contains(text(),'Add to cart')]";
//        driver.findElement(By.xpath(xpath)).click();
//    }
//
//    public static void clickBackToProduct() {
//        String xpath = "//button[@id='back-to-products']";
//        driver.findElement(By.xpath(xpath)).click();
//    }
//
//    public static void clickIconCart(){
//        String xpath = "//a[@class='shopping_cart_link']";
//        driver.findElement(By.xpath(xpath)).click();
//    }
//
//    public static void clickButtonCheckOut(){
//        String xpath = "//*[contains(text(),'Checkout')]";
//        driver.findElement(By.xpath(xpath)).click();
//
//    }
////
////
//    public static void inputCheckOutInformation(String firstName, String lastName, String postalCode ){
//        String xpath = "//input[@id='first-name']";
//        String xpath2 = "//input[@id='last-name']";
//        String xpath3 = "//input[@id='postal-code']";
//        String xpath4 = "//input[@id='continue']";
//        driver.findElement(By.xpath(xpath)).sendKeys(firstName);
//        driver.findElement(By.xpath(xpath2)).sendKeys(firstName);
//        driver.findElement(By.xpath(xpath3)).sendKeys(postalCode);
//        driver.findElement(By.xpath(xpath4)).click();
//    }
////
//    public static void getPaymentInformation(){
//        String xpath = "//div[@class='summary_value_label'][1]";
//        String xpath2 = "//div[@class='summary_value_label'][2]";
//        String xpath3 = "//div[@class='summary_subtotal_label']";
//        String xpath4 = "//div[@class='summary_tax_label']";
//        String xpath5 = "//div[@class='summary_total_label']";
//        String xpath6 = "//button[@id='finish']";
////
//        String a = driver.findElement(By.xpath(xpath)).getText();
//        String b = driver.findElement(By.xpath(xpath2)).getText();
//        String c = driver.findElement(By.xpath(xpath3)).getText();
//        String d = driver.findElement(By.xpath(xpath4)).getText();
//        String e = driver.findElement(By.xpath(xpath5)).getText();
//        System.out.println(a + b+ c +d +e);
//        driver.findElement(By.xpath(xpath6)).click();
//    }
////
//    public static void paymentSuccess(){
//        String xpath = "//*[@class='complete-header']";
//        String xpath2 = "//*[@class='complete-text']";
//        String xpath3 = "//*[contains(text(),'Back Home')]";
//
//        String a = driver.findElement(By.xpath(xpath)).getText();
//        String b = driver.findElement(By.xpath(xpath2)).getText();
//        System.out.println(a + b);
//        driver.findElement(By.xpath(xpath3)).click();
//    }

//cek login, sort item
//    @FindBy(xpath = "//div[@class='app_logo']")
//    private WebElement logo;
//
//    @FindBy(xpath = "//div[@class='inventory_item_name']")
//    private List<WebElement> itemsName;
//
//    @FindBy(xpath = "//select[@class='product_sort_container']")
//    private WebElement productSort;

    @FindBy(xpath = "//input[@id='user-name']")
    public WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement password;

    @FindBy(xpath = "//h3")
    public WebElement errorMessage;

    @FindBy(id = "login-button")
    public WebElement loginButton;

    @FindBy(xpath = "//div[@class='app_logo']")
    public WebElement logo;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    public WebElement productSort;

    @FindBy(xpath = "//input[@id='first-name']")
    public WebElement firstName;

    @FindBy(xpath = "//input[@id='last-name']")
    public WebElement lastName;

    @FindBy(xpath = "//input[@id='postal-code']")
    public WebElement postalCode;

    @FindBy(xpath = "//div[@class='summary_subtotal_label']")
    public WebElement itemTotal;

    @FindBy(xpath = "//div[@class='summary_tax_label']")
    public WebElement tax;

    @FindBy(xpath = "//div[@class='summary_total_label']")
    public WebElement total;

    public InventoryPage() {
    }

    public boolean isDisplayed(){
        logo.isDisplayed();
        return true;
    }
//
//    public void sortProduct(String label){
//        Select a = new Select(productSort);
//        a.selectByVisibleText(label);
//    }
//
//    public void selectDropdownProductByLabel(String label){
//        productSort.click();
//        Select selectDropdownProduct = new Select(productSort);
//        selectDropdownProduct.selectByVisibleText(label);
//    }
}
