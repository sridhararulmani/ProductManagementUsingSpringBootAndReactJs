package com.project.productmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.productmanagement.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	
}