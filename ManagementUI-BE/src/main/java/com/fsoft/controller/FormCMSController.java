package com.fsoft.controller;

import java.util.HashMap;
import java.util.Map;








import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.entity.Form;
import com.fsoft.entity.User;
import com.fsoft.service.FormCMSService;


@Controller
public class FormCMSController {
	
	@Autowired
	FormCMSService formCMSService;
	
	@RequestMapping(value = "/Form")
	public ModelAndView form(HttpServletRequest req) {
		HttpSession session = req.getSession(true);
		User user = (User) session.getAttribute("user");
		int role = user.getRule();
		if(role != 1 && role != 0 ){
			return new ModelAndView("loginpage");
		}else{
		return new ModelAndView("formCMS");
		}
	}
	
	@RequestMapping(value= "/addForm", method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Object addForm(@RequestBody Form form){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "ok");
		result.put("form", formCMSService.addForm(form));
		return result;
	}
	
	@RequestMapping(value= "/listForm", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> getAllForm(){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "ok");
		result.put("listForm", formCMSService.getAllForm());
		return result;
	}
	@RequestMapping(value = "/deleteForm/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public boolean deleteForm(@PathVariable("id") Long id) {
		return formCMSService.deleteFormById(id);
	}
	@RequestMapping(value = "/detailForm/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Form getFormById(@PathVariable("id") Long id) {
		return formCMSService.getFormById(id);
	}

	/*@RequestMapping(value = "/editForm", method = RequestMethod.PUT, produces = "application/json")
	@ResponseBody
	public  Form editForm(@RequestBody Form form) {
		return formCMSService.addForm(form);
	}*/
	
}
