package com.project.productmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.productmanagement.entity.Product;
import com.project.productmanagement.exception.ProductNotFoundedException;
import com.project.productmanagement.repository.ProductRepository;

@RestController
@EnableCaching
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	@GetMapping("/addNewProduct")
	public Product addNewProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}

	@GetMapping("/findById/{productId}")
	public Product findProductById(@PathVariable int productId) {
		return productRepository.findById(productId).orElseThrow(() -> new ProductNotFoundedException(productId));
	}

	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@PutMapping("/updateProductById/{productId}")
	public Product updateProductById(@PathVariable int productId, @RequestBody Product productSendedByClient) {
		return productRepository.findById(productId).map(product -> {
			product.setProductCategory(productSendedByClient.getProductCategory());
			product.setProductPice(productSendedByClient.getProductPice());
			product.setProductStatus(productSendedByClient.getProductStatus());
			return productRepository.save(product);
		}).orElseThrow(() -> new ProductNotFoundedException(productId));
	}

	@DeleteMapping("/deleteProductById/{productId}")
	public String deleteProductById(@PathVariable int productId) {
		if (!productRepository.existsById(productId)) {
			throw new ProductNotFoundedException(productId);
		} else {
			productRepository.deleteById(productId);
			return "Product Deleted by Id :" + productId;
		}
	}

}
