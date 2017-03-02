<div id="editUserDialog" class="form-horizontal">

</div>
<div id="editUserTpl" style="display: none;" >
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="txtName" value="{{name}}">
            <span style="font-size: 11px;color: red" id="errorEditTxtName"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Account</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="txtAccount" value="{{account}}">
            <span style="font-size: 11px;color: red" id="errorEditTxtAccount"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="txtPassword" value="{{password}}">
            <span style="font-size: 11px;color: red" id="errorEditTxtPassword"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Rule</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="txtRule" value="{{rule}}">
            <span style="font-size: 11px;color: red" id="errorEditTxtRule"></span>
        </div>
    </div>
</div>