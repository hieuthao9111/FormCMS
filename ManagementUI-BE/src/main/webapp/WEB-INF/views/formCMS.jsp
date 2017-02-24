<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<c:import url="header1.jsp" />
<script src="<c:url value="../resources/mytheme/js/formcms.js" />"></script>
</head>
<body>
	<div class="row">
	<h1>FORM CMS</h1><br>
	<div class="col-xs-4 col-md-3"><h2>List Form</h2><div id="listForm"></div></div>
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
                            <button type="button" class="btn btn-primary btn-xs btnDeleteForm" data-id="{{id}}" data-toggle="modal" data-target="#myModalDelete">Delete</button>
                            <button type="button" class="btn btn-primary btn-xs btnEditForm" data-id="{{id}}">Edit</button>
                            <button type="button" class="btn btn-primary btn-xs btnDetailForm" data-id="{{id}}">View</button>
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
        
        <div class="col-xs-6 col-md-3"><h2>Content</h2><div id="detailDataFormDialog" class="form-horizontal"></div></div>
<div id="detailDataFormTpl" style="display: none;">
    <div class="panel panel-info">
        <!--                    <div class="panel-heading">
                                <h3 class="panel-title">Sheena Kristin A.Eschor</h3>
                            </div>-->
        <div class="panel-body">
            <div class="row">
                <div class=" col-md-9 col-lg-12 "> 
                    <table class="table table-user-information">
                            <ul>
                                <li>Data</li>
                                <li><input type="text" class="form-control" value={{textInput}}></input></li>
                                <li><input type="password" class="form-control" value={{password}}></input></li>
                                <li><input type="text" class="form-control" value={{arrValue}}></input></li>
                            </ul>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>
		<div class="mn-items col-xs-6 col-md-3">
			<h2>Form</h2>
			<div id="catalog">
				<ul class="rp-draggable">
					<li class="list-group-item list-group-item-success"><label>Text:<input id="txtText" value=""
							type="text" class="form-control"></label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Text
							area<textarea  id="txtTextArea" class="form-control"></textarea>
					</label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Password<input id="txtPassword"
							type="password" class="form-control"></input></label><i
						class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success" id="txtFile"><label>File<input id="txtFile"
							type="file" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Check
							box<input  id="txtCheckBox" type="checkbox" class="form-control">
					</label><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Button<input id="txtButton"
							type="button" class="form-control"></input></label><i
						class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label>Radio<input id="txtRadio"
							type="radio" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
				</ul>
			</div>
		</div>
		<div class="header-favorites col-xs-6 col-md-3">
			<h2>Drop Form Here...</h2>
			<ul class="h-droped-list">
				<li class="placeholder"><br> Add your items here</li>
			</ul>
			<div class="row">
				<div class="col-md-12"><label for="nameform">Form Name</label></div>
				<div class="col-md-12"><input type="text" class="form-control col-md-6" id="nameform"></input></div>
				<div class="col-md-12" style="margin: 2px;"><button id="btnAddForm" class="btn btn-info" type="submit">Save</button></div>
			</div>
		</div>

	</div>
	<c:import url="editForm.jsp" />
	<c:import url="modalDialog.jsp" />
</body>
</html>
