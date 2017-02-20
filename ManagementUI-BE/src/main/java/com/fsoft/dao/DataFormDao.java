package com.fsoft.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsoft.entity.DataForm;

@Transactional
public interface DataFormDao extends JpaRepository<DataForm, Long>{

}
