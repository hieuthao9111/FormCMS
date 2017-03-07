package com.fsoft.dao;

import java.util.List;

import javax.transaction.Transactional;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.entity.Form;

@Transactional
public interface FormCMSDao extends JpaRepository<Form, Long>{
	@Query("from Form where userUseForm=:userName")
	List<Form> getAllFormByUserForm(@Param("userName")String userName);
}
