package com.fsoft.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.entity.DataForm;

@Transactional
public interface DataFormDao extends JpaRepository<DataForm, Long>{
	@Query("from DataForm where formId=:id")
	List<DataForm> getDataByFormId(@Param("id")Long id);
	@Query("from DataForm where account=:user")
	List<DataForm> getDataByUserName(@Param("user")String account);
}
