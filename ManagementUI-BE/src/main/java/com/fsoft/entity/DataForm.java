package com.fsoft.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dataForm")
public class DataForm {
	private Long id;
	private String textInput;
	private String textArea;
	private String password;
	private String file;
	private String checkBox;
	private String radio;
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@Column(name = "textInput")
	public String getTextInput() {
		return textInput;
	}
	public void setTextInput(String textInput) {
		this.textInput = textInput;
	}
	@Column(name = "textArea")
	public String getTextArea() {
		return textArea;
	}
	public void setTextArea(String textArea) {
		this.textArea = textArea;
	}
	@Column(name = "password")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name = "file")
	public String getFile() {
		return file;
	}
	public void setFile(String file) {
		this.file = file;
	}
	@Column(name = "checkBox")
	public String getCheckBox() {
		return checkBox;
	}
	public void setCheckBox(String checkBox) {
		this.checkBox = checkBox;
	}
	@Column(name = "radio")
	public String getRadio() {
		return radio;
	}
	public void setRadio(String radio) {
		this.radio = radio;
	}
	public DataForm(Long id, String textInput, String textArea,
			String password, String file, String checkBox, String radio) {
		super();
		this.id = id;
		this.textInput = textInput;
		this.textArea = textArea;
		this.password = password;
		this.file = file;
		this.checkBox = checkBox;
		this.radio = radio;
	}
	public DataForm() {
		super();
	}
	
	

}
