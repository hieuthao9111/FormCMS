<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<c:import url="header1.jsp" />
</head>
<body>
<div>
<img alt="" src="../resources/mytheme/css/images/test.jpg">
    <center>
    <input id = "URLFile" type = "text" value="${file}">
    <input id = "btnShowPicture" type="submit" value="Show picture"> Press here to upload the file!
    <div id = "loadPicture"></div>
    
    <div id = "uploadFileTpl" style = "display: none">
    <!--{{#fileUpload}}-->
    	<img alt="" src="D:\Work\FormCMS\ManagementUI-BE\src\main\webapp\resources\mytheme\css\images\test.jpg">
    <!--{{/fileUpload}}-->	
    </div>
    
    <div id="gallery">
    Iamge
    </div>
    
    </center>
</div>    
</body>
</html>