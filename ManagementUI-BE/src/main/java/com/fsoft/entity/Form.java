package com.fsoft.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="form")
public class Form {
	private int id;
	private String nameForm;
	private String content;
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name="nameForm")
	public String getNameForm() {
		return nameForm;
	}
	public void setNameForm(String nameForm) {
		this.nameForm = nameForm;
	}
	@Column(name="content")
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Form(int id, String nameForm) {
		super();
		this.id = id;
		this.nameForm = nameForm;
	}
	public Form() {
		super();
	}
	
	

}
