<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

    <c:import url="header1.jsp" />
 
    <body>
    <div class="form-group">
    	<form class="col-SM-3 col-md-offset-10" action="logout" style="width: 200px;">
    	<label>Wellcome User :</label>
    		<input class="form-control" type="text" id="inputSuccess2" value="<%=session.getAttribute("userName") %>" disabled><br>
    		<input class="btn btn-primary" type="submit" value="Logout" />
		</form>
		
	</div>
    
        <%-- <c:import url="topmenu.jsp" /> --%>
        <div class="panel panel-info">
            <div class="panel-body">
                <div class="form-group pull-left">
                    <button id="btnAddUser" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-plus-sign"></span> Add User</button>
                </div>
            </div>
        </div>
        <div id="listProject"></div>
        <div id="tplList" style="display: none;">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th style="display:none;">ID</th>
                        <th>Name</th>
                        <th>Account</th>
                        <th>Rule</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!--{{#list}}-->
                    <tr>
                    	<td>{{index}}</td>
                        <td style="display:none;">{{id}}</td>
                        <td style="display:none;">{{password}}</td>
                        <td>{{name}}</td>
                        <td>{{account}}</td>
                        <td>{{rule}}</td>
                        <td>
                            <button type="button" class="btn btn-primary btnDelete" data-id="{{id}}">Delete</button>
                            <button type="button" class="btn btn-primary btnEditUser" data-id="{{id}}">Edit</button>
                            <button type="button" class="btn btn-primary btnDetail" data-id="{{id}}">View</button>
                        </td>


                    </tr>
                    <!--{{/list}}-->
                    <!--{{^list}}-->
                    <tr>
                        <td colspan="10" style="text-align: center;"> No Record Found</td>
                    </tr>
                    <!--{{/list}}-->

                </tbody>
            </table>
			
        </div>
        <c:import url="editUser.jsp" />
        <c:import url="detailUser.jsp" />
        <c:import url="addUser.jsp" />
    </body>
</html>

