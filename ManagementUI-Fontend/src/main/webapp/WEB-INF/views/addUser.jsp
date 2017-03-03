<div id="addUserDialog" style="display: none;" class="form-horizontal">
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="txtname" placeholder="Name" value="">
            <span style="font-size: 11px;color: red" id="errortxtprojectname"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Account</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="txtaccount" placeholder="Account"value="">
            <span style="font-size: 11px;color: red" id="errortxtstartdate"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="txtpassword" placeholder="Password" value="">
            <span style="font-size: 11px;color: red" id="errortxtdirectmanager"></span>
        </div>
    </div>
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Role</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="txtrule" placeholder="Role" value="">
            <span style="font-size: 11px;color: red" id="errortxtseniormanager"></span>
        </div>
    </div>
</div>
<style>
    /* highlight results */
    .ui-autocomplete span.hl_results {
        background-color: #ffff66;
    }

    /* loading - the AJAX indicator */
    .ui-autocomplete-loading {
        background: white url('../img/ui-anim_basic_16x16.gif') right center no-repeat;
    }

    /* scroll results */
    .ui-autocomplete {
        max-height: 250px;
        overflow-y: auto;
        /* prevent horizontal scrollbar */
        overflow-x: hidden;
        /* add padding for vertical scrollbar */
        padding-right: 5px;
    }

    .ui-autocomplete li {
        font-size: 16px;
    }

    /* IE 6 doesn't support max-height
    * we use height instead, but this forces the menu to always be this tall
    */
    * html .ui-autocomplete {
        height: 250px;
    }

</style>