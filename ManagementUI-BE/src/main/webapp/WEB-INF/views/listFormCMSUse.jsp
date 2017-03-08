<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<c:import url="header1.jsp" />
<script src="<c:url value="../resources/mytheme/js/formcmsuser.js" />"></script>
<body>
	<div class="row">
	<h1>FORM CMS</h1><br>
	<div class = "col-xs-8 col-md-5"><h2>List Form</h2><div id="listFormUser"></div>
	<div id="pagination"></div>
	</div>
	
        <div id="tplListUser" style="display: none;">
            <table class="table table-striped" id="content">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!--{{#listForm}}-->
                    <tr>
                    	<td>{{index}}</td>
                    	<td style="display:none;">{{id}}</td>
                        <td>{{nameForm}}</td>
                        <td id = "contentForm" style="display:none;">{{content}}</td>
                        <td>
                            <button class="btn btn-primary btn-xs btnEditForm" data-id="{{id}}">Edit</button>
                            <button class="btn btn-primary btn-xs btnDetailForm" data-id="{{id}}">View</button>
                        </td>
                    </tr>
                    <!--{{/listForm}}-->
                    <!--{{^listForm}}-->
                    <tr>
                        <td colspan="10" style="text-align: center;"> No Record Found</td>
                    </tr>
                    <!--{{/listForm}}-->
                </tbody>
            </table>
        </div>
        

		<div class = "col-xs-12 col-md-7">
			<h2>Content</h2>
			<div id="detailDataFormDialog" class="form-horizontal">
			<table id = "listData" class="table table-bordered">
				
			</table>
			</div>
		</div>
	</div>
	
	<c:import url="editForm.jsp" />
	
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
					<p>Add success</p>
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
	<!-- Modal Admin-->
	<div class="modal fade" id="myModalAdmin" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Form alert</h4>
				</div>
				<div class="modal-body">
					<p>You are not Admin!!!</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>	
</body>
</html>
