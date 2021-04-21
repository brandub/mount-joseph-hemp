$(function(){
    $("#buttonBlogOne").click(function(){
        let blogTitleOne = document.querySelector("#blogTitleOne").innerHTML;
        document.querySelector("#exampleModalLongTitle").innerHTML = blogTitleOne;
        document.querySelector("#hiddenSpanOne").style.visibility = "visible";
        let blogTextOne = document.querySelector("#textOne").textContent;
        document.querySelector("#sharedModalBody").innerHTML = blogTextOne;
        $("#exampleModalLong").modal("show"); 
    });
    $("#buttonBlogTwo").click(function(){
        let blogTitleTwo = document.querySelector("#blogTitleTwo").innerHTML;
        document.querySelector("#exampleModalLongTitle").innerHTML = blogTitleTwo;
        document.querySelector("#hiddenSpanTwo").style.visibility = "visible";
        let blogTextTwo = document.querySelector("#textTwo").textContent;
        document.querySelector("#sharedModalBody").innerHTML = blogTextTwo;
        $("#exampleModalLong").modal("show"); 
    });
    $("#buttonBlogThree").click(function(){
        let blogTitle = document.querySelector("#blogTitleThree").innerHTML;
        document.querySelector("#exampleModalLongTitle").innerHTML = blogTitle;
        document.querySelector("#hiddenSpanThree").style.visibility = "visible";
        let blogText = document.querySelector("#textThree").textContent;
        document.querySelector("#sharedModalBody").innerHTML = blogText;
        $("#exampleModalLong").modal("show"); 
    });
    
});


    
    




