<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<c:import url="header1.jsp" />
<script src="<c:url value="../resources/mytheme/js/formcms.js" />"></script>
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
                            <button class="btn btn-primary btn-xs btnDeleteForm" data-id="{{id}}">Delete</button>
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

		<div class="col-xs-6 col-md-3">
			<h2>Content</h2>
			<div id="detailDataFormDialog" class="form-horizontal">
			</div>
		</div>
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
                                <li>{{id}}</li>
                                <li>{{textInput}}</li>
                                <li>{{password}}</li>
                                <li><input type="text" class="form-control" value={{textArea}}></input></li>
                            </ul>
                    </table>

                </div>
            </div>
        </div>
    </div>
</div>
		<div class="mn-items col-xs-6 col-md-3">
			<h2>Form</h2>
			<div id="catalog" ng-app="myApp">
				<ul class="rp-draggable">
					<li class="list-group-item list-group-item-success"><label class="pull-left" id = "txtLable">Text(Click edit)</label><input class="clickedit" type="text" id= "txtLable" /><input ng-model="text" id="txtText" value=""
							type="text" class="form-control"><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label class="pull-left" id = "txtLable">Text Area(Click edit)</label><input class="clickedit" type="text" id= "txtLable"/><textarea id="txtTextArea" class="form-control"></textarea><i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label class="pull-left" id = "txtLable">Password(Click edit)</label><input class="clickedit" type="text" id= "txtLable"/><input id="txtPassword"
							type="password" class="form-control"></input><i
						class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label class="pull-left" id = "txtLable">CheckBox(Click edit)</label><input class="clickedit" type="text" id= "txtLable"/><input  id="txtCheckBox" type="checkbox" class="form-control" value="">
					<i class="fa fa-star-o"></i></li>
					<li class="list-group-item list-group-item-success"><label class="pull-left" id = "txtLable">Radio(Click edit)</label><input class="clickedit" type="text" id= "txtLable"/><input id="txtRadio"
							type="radio" class="form-control"></input><i class="fa fa-star-o"></i></li>
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
	<div class='printchatbox' id='printchatbox'></div>
	<input type='text' name='fname' class='chatinput' id='chatinput' value = "">
	<input id="check1" type="checkbox" value="true" name="copyNewAddrToBilling">
	
	<div ng-app="myApp" ng-controller="myCtrl">
<script type="text/javascript">
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.url = '/ManagementUI-BE/list';
	$http.get($scope.url,{header : {'Content-Type' : 'application/json; charset=UTF-8'}}).then(function(response) {
        $scope.names= response.data;
        console.log($scope.names);
     }); 
});
</script>
<p>Select a car:</p>

<select ng-model="userName" ng-options="x for x in names"></select>

<h1>You selected: {{userName}}</h1>

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
