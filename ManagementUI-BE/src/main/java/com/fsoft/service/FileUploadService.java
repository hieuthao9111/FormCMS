package com.fsoft.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.dao.FileUploadDao;
import com.fsoft.entity.FileUpload;

@Service
public class FileUploadService {
	@Autowired
	private FileUploadDao fileUploadDao;
	
	public FileUpload addUrl(FileUpload fileUpload){
		return fileUploadDao.save(fileUpload);
	}

}
