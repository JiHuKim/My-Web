package com.company.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MyController {
	
	
	@RequestMapping(value="/main.do" , method = RequestMethod.GET)
	public String main() {
		return "views/MywebMainView";
	}
	
	@RequestMapping(value = "/about.do" , method = RequestMethod.POST)
	public String about() {
		return "views/MywebAbout";
	}
	
	@RequestMapping(value="/history.do" , method = RequestMethod.POST)
	public String history() {
		return "views/MywebHistory";
	}
	
	@RequestMapping(value = "/service.do" , method = RequestMethod.POST)
	public String service() {
		return "views/MywebService";
	}
	
	
}
