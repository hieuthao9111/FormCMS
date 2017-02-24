<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Human Res Management</title>
<!-- Bootstrap -->
<link href="<c:url value="/resources/mytheme/css/bootstrap.min.css" />"
	rel="stylesheet">

<link href="<c:url value="/resources/mytheme/css/bootstrap-theme.min.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/mytheme/css/jquery-ui.min.css" />"
	rel="stylesheet">

<script src="<c:url value="/resources/mytheme/js/jquery-1.11.3.min.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/mustache.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/bootstrap.min.js" />"></script>
<script src="<c:url value="/resources/mytheme/js/jquery-ui.min.js" />"></script>
<script src="<c:url value="../resources/mytheme/js/project.js" />"></script>
</head>

<!-- dialog -->
	<!-- Modal Add-->
	<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Form alert</h4>
				</div>
				<div class="modal-body">
					<p>Add form success</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>
	
	<!-- Modal Input Name-->
	<div class="modal fade" id="myModal1" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Form alert</h4>
				</div>
				<div class="modal-body">
					<p>Input Name Form</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>
	<!-- Modal Delete-->
	<div class="modal fade" id="myModalDelete" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Form alert</h4>
				</div>
				<div class="modal-body">
					<p>Are you delete?</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default btnDeleteForm" id="deletebtn" data-dismiss="modal" data-id="{{id}}">Delete</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>