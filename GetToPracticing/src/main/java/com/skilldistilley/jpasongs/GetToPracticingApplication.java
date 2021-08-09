package com.skilldistilley.jpasongs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class GetToPracticingApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(GetToPracticingApplication.class);
	  } 

	public static void main(String[] args) {
		SpringApplication.run(GetToPracticingApplication.class, args);
	}

}
