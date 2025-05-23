package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(unique = true)
  private String dni;
  private String phone;

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getDni() { return dni; }
  public void setDni(String dni) { this.dni = dni; }
  public String getPhone() { return phone; }
  public void setPhone(String phone) { this.phone = phone; }
}