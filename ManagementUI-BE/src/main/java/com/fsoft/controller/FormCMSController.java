package com.fsoft.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.entity.Form;
import com.fsoft.service.FormCMSService;


@Controller
public class FormCMSController {
	
	@Autowired
	FormCMSService formCMSService;
	
	@RequestMapping(value = "/index2")
	public ModelAndView form() {
		return new ModelAndView("formCMS");
	}
	@RequestMapping(value= "/addForm", method = RequestMethod.POST, produces = "application/json")
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
		result.put("form", formCMSService.getAllForm());
		return result;
	} 


}
