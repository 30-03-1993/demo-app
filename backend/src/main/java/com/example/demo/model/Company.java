package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Company {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  @Enumerated(EnumType.STRING)
  private CompanyType type;
  private String phone;
  private String city;

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public CompanyType getType() { return type; }
  public void setType(CompanyType type) { this.type = type; }
  public String getPhone() { return phone; }
  public void setPhone(String phone) { this.phone = phone; }
  public String getCity() { return city; }
  public void setCity(String city) { this.city = city; }
}