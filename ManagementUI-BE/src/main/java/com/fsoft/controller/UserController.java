package com.fsoft.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.entity.User;
import com.fsoft.service.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService userservice;

	/*@RequestMapping(value = "/home")
	public ModelAndView home(HttpServletRequest req) {
		HttpSession session = req.getSession(true);
		User user=(User) session.getAttribute("user");
		int rule = user.getRule();
		if(rule == 1 ){
			  return new ModelAndView("index");
			}else return new ModelAndView("login");
			   
		 
	}*/

	@RequestMapping(value = "/listUser")
	public ModelAndView listUser(HttpServletRequest req) {
		HttpSession session = req.getSession(true);
		User user = (User) session.getAttribute("user");
		int rule = user.getRule();
		if(rule == 1 ){
			  return new ModelAndView("listUser");
			}else return new ModelAndView("redirect:Form");
			   
		 
	}

	@RequestMapping(value = "/addUser")
	public ModelAndView addUser() {
		return new ModelAndView("addtest");
	}
	@RequestMapping(value = "/logout")
	public ModelAndView logout(HttpServletRequest req ,HttpServletResponse resp) {
		HttpSession session = req.getSession(true);
		session.invalidate();
		resp.setHeader("Cache-Control","no-cache"); //Forces caches to obtain a new copy of the page from the origin server
		resp.setHeader("Cache-Control","no-store"); //Directs caches not to store the page under any circumstance
		resp.setDateHeader("Expires", 0); //Causes the proxy cache to see the page as "stale"
		resp.setHeader("Pragma","no-cache"); //HTTP 1.0 backward compatibility
		return new ModelAndView("redirect:loginpage");
	}
	@RequestMapping(value = "/list", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> getAllUser() {
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("startus", "ok");
		result.put("list", userservice.getAllUser());
		return result;
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Object addUser(@RequestBody User user) {
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "ok");
		result.put("user", userservice.addUser(user));
		return result;
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public boolean deleteUser(@PathVariable("id") Long id) {
		return userservice.deleteById(id);
	}

	@RequestMapping(value = "/edit", method = RequestMethod.PUT, produces = "application/json")
	@ResponseBody
	public  User editUser(@RequestBody User user) {
		return userservice.addUser(user);
	}

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	@ResponseBody
	public User getUserById(@PathVariable("id") Long id) {
		return userservice.getUserById(id);
	}
	
	
	@RequestMapping(value = "/loginpage")
	public ModelAndView loginPage() {
		return new ModelAndView("login");
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@ResponseBody
	public ModelAndView login(HttpServletRequest req,HttpServletResponse resp) {
		HttpSession session = req.getSession(true);
		String userName = req.getParameter("txtUsername");
		String password = req.getParameter("txtPassword");
		User user =(User) userservice.getUserByName(userName);
		if (user==null && !session.isNew()) {
			return new ModelAndView("redirect:loginpage"); }
		else  {
			String passworduser = user.getPassword();
			if( passworduser.equals(password) ) {
				
				session.setAttribute("user", user);
				session.setAttribute("userName", user.getName());
				session.setAttribute("userId", user.getId());
				session.setAttribute("userRole", user.getRule());
				return new ModelAndView("redirect:listUser");
			}
		}
		return new ModelAndView("login");
	
	}
	@RequestMapping(value = "/index")
	public ModelAndView headerPage() {
		return new ModelAndView("index");
	}
	/*@RequestMapping(value = "/index2")
	public ModelAndView form() {
		return new ModelAndView("formCMS");
	}*/
}
