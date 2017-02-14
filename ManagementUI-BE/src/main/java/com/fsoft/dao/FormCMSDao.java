package com.fsoft.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsoft.entity.Form;

@Transactional
public interface FormCMSDao extends JpaRepository<Form, Long>{

}
