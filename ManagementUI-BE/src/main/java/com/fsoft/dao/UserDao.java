package com.fsoft.dao;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fsoft.entity.User;

@Transactional
public interface  UserDao extends JpaRepository<User, Long> {
	@Query("from User where name=:name")
	User getUserByName(@Param("name")String username);
	@Query("select name from User")
	List<String> getAllUserByName();
}
