package com.fsoft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.dao.FormCMSDao;
import com.fsoft.entity.Form;

@Service
public class FormCMSService {
	
	@Autowired
	private FormCMSDao formCMSdao;
	
	public Form addForm(Form form){
		return formCMSdao.save(form);
	}
	public List<Form> getAllForm(){
		return formCMSdao.findAll();
		
	}

}
