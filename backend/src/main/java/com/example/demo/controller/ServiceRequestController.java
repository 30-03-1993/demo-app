package com.example.demo.controller;

import com.example.demo.model.Customer;
import com.example.demo.model.Company;
import com.example.demo.model.CompanyType;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ServiceRequestController {
  
  @Autowired
  private CustomerRepository customerRepo;
  
  @Autowired
  private CompanyRepository companyRepo;

  @PostMapping("/service-request")
  public Map<String, Object> handleRequest(@RequestBody Map<String, String> payload) {
    String dni     = payload.get("dni");
    String phone   = payload.get("phone");
    String address = payload.get("address");

    // 1) Buscar cliente; si no existe, error 404
    Customer customer = customerRepo.findByDni(dni)
      .orElseThrow(() ->
        new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente no registrado"));

    // 2) Extraer ciudad de la dirección (texto tras la última coma)
    String city = address.contains(",")
      ? address.substring(address.lastIndexOf(",") + 1).trim()
      : address.trim();

    // 3) Filtrar empresas según ciudad
    List<Company> tow  = companyRepo.findByTypeAndCity(CompanyType.TOW,  city);
    List<Company> taxi = companyRepo.findByTypeAndCity(CompanyType.TAXI, city);

    Map<String, Object> resp = new HashMap<>();
    resp.put("customer",      customer);
    resp.put("towCompanies",  tow);
    resp.put("taxiCompanies", taxi);
    return resp;
  }
}
