package com.fsoft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class ManagementUiBeApplication {
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ManagementUiBeApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ManagementUiBeApplication.class, args);
	}
}
