package com.mycompany.testapp;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty",
		"html:target/test-report"},
		features="src/main/java/com/mycompany/testapp")
public class CukeRunner {

}
