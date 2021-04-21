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
    $("#subscribeButton").click(function(){
        document.querySelector("#emailInput").value = "Thank you!";
    });
    $("#submitBookButton").click(function(){
        let checkIn = document.querySelector("#checkIn").value;
        console.log(checkIn);
        let checkOut = document.querySelector("#checkOut").value;
        let guestName = document.querySelector("#guestName").value;
        let siteSelection =document.querySelector("#siteSelection").value;
        $("#exampleModal").modal("toggle");
        alert("Thank you " + guestName + " for booking " + siteSelection + " Checking in on " + checkIn + " Checking out on " + checkOut + " You will receive a confirmation email shortly");
    });
    
    
});


    
    




