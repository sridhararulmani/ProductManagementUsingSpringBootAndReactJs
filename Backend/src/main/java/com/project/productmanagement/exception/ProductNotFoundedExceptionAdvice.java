package com.project.productmanagement.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ProductNotFoundedExceptionAdvice {
	
	@ResponseBody
	@ExceptionHandler(ProductNotFoundedException.class)
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	public Map<String, String> exceptionHandler(ProductNotFoundedException productNotFoundedException) {
		Map<String, String> errorMap = new HashMap<>();
		errorMap.put("errorMessage", productNotFoundedException.getMessage());
		return errorMap;
	}
}
