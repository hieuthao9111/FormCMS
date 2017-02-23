<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<!-- Bootstrap -->
<link href="<c:url value="/resources/mytheme/css/bootstrap.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/bootstrap-theme.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/jquery-ui.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/style-formcms.css" />"
	rel="stylesheet">	
	
<script src="<c:url value="/resources/mytheme/js/jquery-1.11.3.min.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/mustache.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/jquery-ui.min.js" />"></script>
<script src="<c:url value="../resources/mytheme/js/project.js" />"></script>
<script src="<c:url value="../resources/mytheme/js/formcms.js" />"></script>
</head>
<body>
<div id="editFormDialog" class="form-horizontal"></div>
<div id="editFormTpl" style="display: none;">
    <div class="panel panel-info">
        <!--                    <div class="panel-heading">
                                <h3 class="panel-title">Sheena Kristin A.Eschor</h3>
                            </div>-->
        <div class="panel-body">
            <div class="row">
                <div class=" col-md-9 col-lg-12 "> 
                    <table class="table table-user-information">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Content</td>
                            </tr>
                            <tr>
                                <td>{{nameForm}}</td>
                                <td style = "display: none"><input id = "txtIdForm" value = {{id}} ></input></td>
                                <td id="noidung1">{{content}}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>