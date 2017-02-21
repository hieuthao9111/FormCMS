package com.fsoft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.dao.DataFormDao;
import com.fsoft.entity.DataForm;

@Service
public class DataFormService {
	
	@Autowired
	private DataFormDao dataFormDao;
	
	public DataForm saveData(DataForm dataForm){
		return dataFormDao.save(dataForm);
	} 
	
	public List<DataForm> getAllData(){
		return dataFormDao.findAll();
	}

}
