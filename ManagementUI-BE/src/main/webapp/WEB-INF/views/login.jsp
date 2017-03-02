<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login page</title>
<!-- Bootstrap -->
<link href="<c:url value="/resources/mytheme/css/bootstrap.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/bootstrap-theme.min.css" />"
	rel="stylesheet">
</head>
<link href="<c:url value="/resources/mytheme/css/login.css" />"
	rel="stylesheet">
</head>
<body>
<div>
<div class="container">
    <div class="row">
    
        <div class="col-md-6 col-md-offset-3" style="margin-top: 300px;">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <span class="glyphicon glyphicon-lock"></span> Login</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" action="login" method="post">
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-3 control-label">
                            User Name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="txtUsername" name="txtUsername" placeholder="User Name" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-3 control-label">
                            Password</label>
                        <div class="col-sm-9">
                            <input type="password" class="form-control" id="txtPassword" name="txtPassword" placeholder="Password" required>
                        </div>
                    </div>
                    <div class="form-group last">
                        <div class="col-sm-offset-3 col-sm-9">
                            <button class="btn btn-success btn-sm">
                                Login</button>
                                 <button type="reset" class="btn btn-default btn-sm">
                                Reset</button>
                        </div>
                    </div>
                    </form>
                </div>
                <!-- <div class="panel-footer">
                    Not Registred? <a href="http://www.jquery2dotnet.com">Register here</a></div> -->
            </div>
        </div>
    </div>
</div>



</div>

</body>
</html>