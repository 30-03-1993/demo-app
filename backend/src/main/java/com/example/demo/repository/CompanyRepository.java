package com.example.demo.repository;

import com.example.demo.model.Company;
import com.example.demo.model.CompanyType;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {
  List<Company> findByTypeAndCity(CompanyType type, String city);
}