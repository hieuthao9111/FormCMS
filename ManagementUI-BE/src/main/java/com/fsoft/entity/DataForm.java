package com.fsoft.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonIgnore;


@Entity
@Table(name = "dataForm")
public class DataForm {
	private Long id;
	private String arrValue;
	private String textInput;
	private String textArea;
	private String password;
	private String file;
	private String checkBox;
	private String radio;
	private String type;
	private Long formId;
	private Form form;
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Id
	@Column(name="id")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "dataForm", nullable = false)
	public Form getForm() {
		return form;
	}
	public void setForm(Form form) {
		this.form = form;
	}
	@Column
	public String getArrValue() {
		return arrValue;
	}
	public void setArrValue(String arrValue) {
		this.arrValue = arrValue;
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
	@Column(name = "formId")
	public Long getFormId() {
		return formId;
	}
	public void setFormId(Long formId) {
		this.formId = formId;
	}

	
	public DataForm(Long id, String arrValue, String textInput,
			String textArea, String password, String file, String checkBox,
			String radio, String type, Long formId, Form form) {
		super();
		this.id = id;
		this.arrValue = arrValue;
		this.textInput = textInput;
		this.textArea = textArea;
		this.password = password;
		this.file = file;
		this.checkBox = checkBox;
		this.radio = radio;
		this.type = type;
		this.formId = formId;
		this.form = form;
	}
	public DataForm() {
		super();
	}
	
	

}
