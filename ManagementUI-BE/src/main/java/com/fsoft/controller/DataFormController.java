package com.fsoft.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import scala.annotation.meta.field;

import com.fsoft.entity.DataForm;
import com.fsoft.service.DataFormService;

@Controller
public class DataFormController {
	
	@Autowired
	private DataFormService dataFormService;
	
	@RequestMapping(value = "/saveData" , method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Object saveData(@RequestBody DataForm dataForm){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("status", "ok");
		result.put("listForm", dataFormService.saveData(dataForm));
		return result;
	}
	
	@RequestMapping(value= "/listData", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Map<String, Object> getAllData(){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("listData", dataFormService.getAllData());
		return result;
	}

}
