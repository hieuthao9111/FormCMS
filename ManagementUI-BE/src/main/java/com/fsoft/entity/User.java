package com.fsoft.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	private Long id;
	private String account;
	private String name;
	private String password;
	private int rule;

	public User() {
		super();
	}

	@Column(name = "password")
	public String getPassword() {
		return password;
	}

	public User(Long id, String account, String name, String password, int rule) {
		super();
		this.id = id;
		this.account = account;
		this.name = name;
		this.password = password;
		this.rule = rule;
	}

	@Column(name = "account")
	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	@Column(name = "rule")
	public int getRule() {
		return rule;
	}

	public void setRule(int rule) {
		this.rule = rule;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
