package com.fsoft.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsoft.dao.UserDao;
import com.fsoft.entity.User;

@Service
public class UserService {
	@Autowired
	private UserDao userdao;

	public List<User> getAllUser() {
		return userdao.findAll();
	}

	public User addUser(User user) {
		return userdao.save(user);
	}

	public void deleteUser(User user) {
		userdao.delete(user);
	}

	public boolean deleteById(Long id) {
		userdao.delete(id);
		return true;
	}

	/*public boolean editUser(Long id, User userNew){
		User userOld = userdao.getOne(id);
		userOld.setName(userNew.getName());
		userOld.setAccount(userNew.getAccount());
		userOld.setPassword(userNew.getPassword());
		userOld.setRule(userNew.getRule());
		userdao.save(userOld);
		return true;
	}*/
	
	public User getUserById(Long id){
		return userdao.findOne(id);
	}
	
	@Transactional
	public User getUserByName(String name){
		return userdao.getUserByName(name);
	}
}