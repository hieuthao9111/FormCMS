<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<c:import url="header1.jsp" />
<script src="<c:url value="../resources/mytheme/js/formcms.js" />"></script>
</head>
<body>
	<div>
	<div id="listForm" class="col-xs-5 col-sm-3"></div>
        <div id="tplList" style="display: none;">
            <table class="table table-striped">
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
                            <button type="button" class="btn btn-primary btnDeleteForm" data-id="{{id}}">Delete</button>
                            <button type="button" class="btn btn-primary btnEditUser" data-id="{{id}}">Edit</button>
                            <button type="button" class="btn btn-primary btnDetailForm" data-id="{{id}}">View</button>
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
        <div id="detailFormDialog" class="form-horizontal col-xs-5 col-sm-3">

</div>
<div id="detailFormTpl" style="display: none;">
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
                                <td>{{nameForm}}</td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td id="noidung">{{content}}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>
        <div class="col-xs-6 col-sm-6">
		<div class="header-favorites">
			<h2>Drop Form Here...</h2>
			<ul class="h-droped-list">
				<li class="placeholder"><br> Add your items here</li>
			</ul>
			<div class="row">
			<div class="col-md-12"><label for="nameform">Form Name</label></div>
			<div class="col-md-12"><input type="text" class="form-control col-md-6" id="nameform"></input></div>
			<div class="col-md-12" style="margin: 2px;"><button id="addForm" class="btn btn-info" type="submit">Save</button></div>
		</div>
		</div>
		
		<div class="mn-items">
			<h2>Form</h2>
			<div id="catalog">
				<ul class="rp-draggable">
					<li class="list-group-item list-group-item-success"><label id="item">Text:<input
							type="text" class="form-control"></label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label id="item">Text
							area<textarea class="form-control"></textarea>
					</label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Password<input
							type="password" class="form-control"></input></label><i
						class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>File<input
							type="file" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Check
							box<input type="checkbox" class="form-control">
					</label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Button<input
							type="button" class="form-control"></input></label><i
						class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Radio<input
							type="radio" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		</div>

	</div>
	<!-- <div style="margin: 600px;"></div> -->
	
	<div class="result"></div>
	<div id="123"></div>
	<button id="234">Render</button>

	<!-- dialog -->
	<!-- Modal -->
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
	<c:import url="detailForm.jsp" />
</body>
</html>
