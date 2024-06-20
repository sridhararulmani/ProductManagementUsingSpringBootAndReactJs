package com.project.productmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class ProductManagementUsingSpringBootAndReactJsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductManagementUsingSpringBootAndReactJsApplication.class, args);
	}

}
