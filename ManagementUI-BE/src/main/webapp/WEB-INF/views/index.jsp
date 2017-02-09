<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<c:import url="header1.jsp" />
    <meta charset="UTF-8">
    <title>Simple jQuery Form Builder - Demo</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>

    <!-- CSS -->
    <link href="<c:url value="/resources/mytheme/css/style.css" />"
	rel="stylesheet">

    <!-- Jquery JS -->
    <script src="/resources/mytheme/js/jquery-2.1.4.min.js" type="text/javascript"></script> <!-- jQuery v1 should also work fine -->
    <script src="/resources/mytheme/js/jquery-ui.min.js" type="text/javascript" ></script> <!-- for sortable -->

    <!-- SJFB JS -->
    <script src="/resources/mytheme/js/sjfb-builder.js" type="text/javascript" ></script> <!-- form builder -->
    <script src="/resources/mytheme/js/sjfb-html-generator.js" type="text/javascript" ></script> <!-- form generator -->
</head>
<body id="sjfb-body">


<div id="sjfb-wrap">

    <h1>Form Buider</h1>

    <p>Product by ThaoVH1<br>
        <a href="form.html">View form (rendered from the demo json string) here</a>.
    </p>

    <div class="alert hide">
        <h2>Success! Form saved.</h2>
        <p>Here is what your saved form will look like in your database:</p>
        <textarea></textarea>
    </div>

    <div class="add-wrap">
        <h3>Add Field:</h3>
        <ul id="add-field">
            <li><button type="button" class="btn btn-info btn-block" id="add-text" data-type="text">Single Line Text</button></li>
            <li><button type="button" class="btn btn-info btn-block" id="add-textarea" data-type="textarea">Multi Line Text</button></li>
            <li><button type="button" class="btn btn-info btn-block" id="add-select" data-type="select">Select Box (Drop down list)</button></li>
            <li><button type="button" class="btn btn-info btn-block" id="add-radio" data-type="radio">Radio Buttons</button></li>
            <li><button type="button" class="btn btn-info btn-block" id="add-checkbox" data-type="checkbox">Checkboxes</button></li>
            <li><button type="button" class="btn btn-info btn-block" id="add-agree" data-type="agree">Agree Box</button></li>
            <!-- <li><button type="button" class="btn btn-info btn-block"><a id="add-agree" data-type="agree">Agree Box</a></button></li> -->
        </ul>
    </div>

    <form id="sjfb" novalidate>
        <div id="form-fields">
        </div>
        <button type="submit" class="submit">Save Form</button>
    </form>

</div>

</body>
</html>