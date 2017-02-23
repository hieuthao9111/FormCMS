package com.fsoft.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonIgnore;

@Entity
@Table(name = "form")
public class Form {
	private Long id;
	private String nameForm;
	private String content;
	private Long userId;
	private User user;
	private Set<DataForm> dataFormId;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user", nullable = true)
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Column(name = "nameForm")
	public String getNameForm() {
		return nameForm;
	}

	public void setNameForm(String nameForm) {
		this.nameForm = nameForm;
	}

	@Column(name = "content")
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	@Column(name = "userId")
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
	

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "form")
	public Set<DataForm> getDataFormId() {
		return dataFormId;
	}

	public void setDataFormId(Set<DataForm> dataFormId) {
		this.dataFormId = dataFormId;
	}

	public Form(Long id, String nameForm, String content, Long userId,
			User user, Set<DataForm> dataFormId) {
		super();
		this.id = id;
		this.nameForm = nameForm;
		this.content = content;
		this.userId = userId;
		this.user = user;
		this.dataFormId = dataFormId;
	}

	public Form() {
		super();
	}

}
