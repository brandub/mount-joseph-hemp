$(function(){
    $("#buttonBlog").click(function(){
        let blogTitle = document.querySelector("#blogTitleThree").innerHTML;
        document.querySelector("#exampleModalLongTitle").innerHTML = blogTitle;
        document.querySelector("#hiddenSpanThree").style.visibility = "visible";
        let blogText = document.querySelector("#textThree").innerHTML;
        document.querySelector("#bodyThree").removeClass = "style";
        $("#exampleModalLong").modal("show"); 
    });
});


    
    




