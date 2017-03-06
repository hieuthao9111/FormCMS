package com.fsoft.controller;

import java.util.HashMap;
import java.util.List;
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

import com.fsoft.entity.DataForm;
import com.fsoft.entity.User;
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
	
	@RequestMapping(value= "/detailData/{id}", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<DataForm> getData(@PathVariable("id") Long id){
		return dataFormService.getDataByFormId(id);
	}
	
	@RequestMapping(value= "/detailDataByUser", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<DataForm> getData(HttpServletRequest req){
		HttpSession session = req.getSession(true);
		User user = (User) session.getAttribute("user");
		String userName = user.getName();
		return dataFormService.getDataByUserName(userName);
	}

}

