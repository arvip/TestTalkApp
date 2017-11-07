package com.mycompany.testapp;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.containsString;

public class TechTalkStep 
{
	protected WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "/Users/lprakash/Downloads/chromedriver 2");
		driver = new ChromeDriver();
	}
	
	@Given("^the new user is registered to the website and logged in$")
	public void launchTalk() {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get("https://www.brighttalk.com");
		driver.findElement(By.linkText("Log in")).click();
		driver.findElement(By.id("user_login_email")).sendKeys("arv217@gmail.com");
		driver.findElement(By.id("user_login_password")).sendKeys("common123");
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@When("^user selects the Edit Profile$")
	public void selectEditProfile() {
		driver.findElement(By.linkText("Edit profile")).click();
	}
	
	@And("^changes the ([^\"]*) on the Profile page$")
	public void changeLastName(String lastName) {
		driver.findElement(By.id("edit-field2")).clear();
		driver.findElement(By.id("edit-field2")).sendKeys(lastName);
		driver.findElement(By.id("edit-submit-editprofile")).click();
		
		try {
			Thread.sleep(5000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		WebDriverWait wait = new WebDriverWait(driver,10);
		driver.findElement(By.xpath("//img[@class='profile-menu-user-image profile-menu-user-image-link-loaded']")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#userAuthenticationDetails>div>ul>li:nth-child(9)>a")));
		driver.findElement(By.cssSelector("#userAuthenticationDetails>div>ul>li:nth-child(9)>a")).click();
	}
	
	@And("^re-logs into the site$")
	public void reLogsIn() {
		driver.findElement(By.linkText("Log in")).click();
		driver.findElement(By.id("user_login_email")).sendKeys("arv217@gmail.com");
		driver.findElement(By.id("user_login_password")).sendKeys("common123");
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	
	@Then("^the new last name ([^\"]*) is shown$")
	public void lastNameShown(String expectedName) {
		String name = driver.findElement(By.xpath("//ul[@class='profile-card-details']/li[1]")).getText();
		assertThat(name, containsString(expectedName));
	}
	
	@After
	public void closeBrowser() {
		driver.close();
		driver.quit();
	}

}
