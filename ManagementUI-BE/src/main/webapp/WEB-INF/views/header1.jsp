<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Form management</title>
<!-- Bootstrap -->
<link href="<c:url value="/resources/mytheme/css/bootstrap.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/bootstrap-theme.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/jquery-ui.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/style-formcms.css" />"
	rel="stylesheet">	

<script src="<c:url value="/resources/mytheme/js/angular-1.0.6.min.js" />"></script>	
<script src="<c:url value="/resources/mytheme/js/jquery-1.11.3.min.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/mustache.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/jquery-ui.min.js" />"></script>
<script src="<c:url value="../resources/mytheme/js/project.js" />"></script>
<script src="<c:url value="../resources/mytheme/js/formcmsangular.js" />"></script>
<script src="<c:url value="../resources/mytheme/js/formcms.js" />"></script>


<body>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/ManagementUI-BE/loginpage">Form management</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="/ManagementUI-BE/listUser">List User<span class="sr-only">(current)</span></a></li>
        <li><a href="/ManagementUI-BE/Form">Form<span class="sr-only">(current)</span></a></li>
        
      </ul>
      <form action="logout">
      <ul class="nav navbar-nav navbar-right">
            <li><a><input class="form-control" id = "user" value="<%=session.getAttribute("userName") %>" disabled></a></li>
            <li style = "display: none"><a><input class="form-control" type="text" id = "idUser" value="<%=session.getAttribute("userId") %>" disabled></a></li>
            <li style = "display: none"><a><input class="form-control" type="text" id = "userRole" value="<%=session.getAttribute("userRole") %>" disabled></a></li>
            <li><a><input class="btn btn-primary" type="submit" value="Logout" /></a></li>
          </ul>
      </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</body>
</html>