package com.fsoft.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsoft.entity.FileUpload;

public interface FileUploadDao extends JpaRepository<FileUpload, Long>{
	/*@Query("INSERT INTO file_upload (path_url) VALUES (?)")
	void insertURL(@Param("userName")String userName);
*/
}
