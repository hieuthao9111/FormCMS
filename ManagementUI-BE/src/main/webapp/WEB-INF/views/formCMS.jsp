<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<c:import url="header1.jsp" />
</head>
<body>
<div>
<div class="mn-items">
  <h2>Form</h2>
  <div id="catalog">
      <ul class="rp-draggable">
        <li class="list-group-item list-group-item-success"><label>Text:<input type="text" class="form-control"></label><i class="fa fa-star-o"></i></li>
        <li class="list-group-item list-group-item-success"><label>Text area<textarea class="form-control"></textarea></label><i class="fa fa-star-o"></i></li>
        <li class="list-group-item list-group-item-success"><label>Password<input type="password" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
        <li class="list-group-item list-group-item-success"><label>File<input type="file" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
        <li class="list-group-item list-group-item-success"><label>Check box<input type="checkbox" class="form-control"></label><i class="fa fa-star-o"></i></li>
        <li class="list-group-item list-group-item-success"><label>Button<input type="button" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
        <li class="list-group-item list-group-item-success"><label>Radio<input type="radio" class="form-control"></input></label><i class="fa fa-star-o"></i></li>
      </ul>
  </div>
</div>
 
<div class="header-favorites">
  <h2>Drop Form Here...</h2>
    <ul class="h-droped-list">
      <li class="placeholder">
      <br>
      
      Add your items here</li>
    </ul>
    </div>
</div>
<div style="margin: 600px;"></div>
<div >
<label>Form Name</label>
<input id="nameform" type="text" required></input><br>
</div>
<button>Result</button>
<button id="save" class="btn btn-info" type="submit">Save</button>
<!-- <div class="result"></div> -->
<div id="123"></div>
<button id="234">Render</button>
</body>
</html>
