package com.fsoft.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {

	@RequestMapping(value = "/loginpage")
	public ModelAndView loginPage() {
		return new ModelAndView("login");
	}
}
