<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
<title>Upload File Request Page</title>
</head>
<body>
    <form method="POST" action="uploadFile" enctype="multipart/form-data">
        File to upload: <input type="file" name="file"><br />
        Name: <input type="text" name="name"><br /> <br />
        <input id = "btnAddFile" type="submit" value="Upload"> Press here to upload the file!
    </form>
    <input type = "text" value="${file}">
    <center>
    <h1>${startus}</h1>
     
</body>
</html>