package com.fsoft.controller;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.Map;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fsoft.entity.FileUpload;
import com.fsoft.service.FileUploadService;

@Controller
public class UploadController {
	@Autowired
	private FileUploadService fileUploadService;
	
	private static final Logger logger = LoggerFactory
            .getLogger(UploadController.class);
    /**
     * Upload single file using Spring Controller
     */
    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    public @ResponseBody
    ModelAndView uploadFileHandler(
            @RequestParam("file") MultipartFile file, Model model) {
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();
                // Creating the directory to store file
                String rootPath = System.getProperty("user.dir");
                File dir = new File(rootPath + File.separator + "src\\main\\webapp\\resources\\upload");
                if (!dir.exists())
                    dir.mkdirs();
                // Create the file on server
                File serverFile = new File(dir.getAbsolutePath()
                        + File.separator + file.getOriginalFilename());
                BufferedOutputStream stream = new BufferedOutputStream(
                        new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();
                logger.info("Server File Location="
                        + serverFile.getAbsolutePath());
                model.addAttribute("file", serverFile.getAbsolutePath());
                model.addAttribute("startus",file.getOriginalFilename());
            } catch (Exception e) {
               
            }
        }
        return new ModelAndView("loadPicture");
    }
    /**
     * Upload multiple file using Spring Controller
     */
    @RequestMapping(value = "/uploadMultipleFile", method = RequestMethod.POST)
    public @ResponseBody
    String uploadMultipleFileHandler(@RequestParam("name") String[] names,
            @RequestParam("file") MultipartFile[] files) {
        if (files.length != names.length)
            return "Mandatory information missing";
        String message = "";
        for (int i = 0; i < files.length; i++) {
            MultipartFile file = files[i];
            String name = names[i];
            try {
                byte[] bytes = file.getBytes();
                // Creating the directory to store file
                String rootPath = System.getProperty("user.dir");
                File dir = new File(rootPath + File.separator + "tmpFiles");
                if (!dir.exists())
                    dir.mkdirs();
                // Create the file on server
                File serverFile = new File(dir.getAbsolutePath()
                        + File.separator + name);
                BufferedOutputStream stream = new BufferedOutputStream(
                        new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();
                logger.info("Server File Location="
                        + serverFile.getAbsolutePath());
                message = message + "You successfully uploaded file=" + name
                        + "<br />";
            } catch (Exception e) {
                return "You failed to upload " + name + " => " + e.getMessage();
            }
        }
        return message;
    }
    @RequestMapping(value = "/upload")
	public ModelAndView upload() {
		return new ModelAndView("uploadFile");
	}
    @RequestMapping(value = "/addFile" , method = RequestMethod.POST , produces = "application/json")
    @ResponseBody
    public Object addFile(@RequestBody FileUpload fileUpload){
    	Map<String, Object> result = new HashMap<String, Object>();
    		result.put("startus", "ok");
    		result.put("fileUpload", fileUploadService.addUrl(fileUpload));
    	return result;
    }
    @RequestMapping(value = "/showFile", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> getAllPicture(){
    	Map<String, Object> result = new HashMap<>();
    	result.put("fileUpload", fileUploadService.getAllPicture());
		return result;
    	
    }

}
