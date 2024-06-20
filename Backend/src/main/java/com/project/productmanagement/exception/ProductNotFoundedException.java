package com.project.productmanagement.exception;

public class ProductNotFoundedException extends RuntimeException {
	public ProductNotFoundedException(int productId) {
		super("Product not founded in ID :" + productId);
	}
}
