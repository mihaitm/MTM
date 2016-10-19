// https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/
/*global $*/
$(window).ready(function(){
    console.log("here");
$(".login-btn").on("click",login);
    
    function login(){
        var email = $("[name='email-value']").val();
        var password = $("[name='password']").val();
        
        var ajaxOptions = {
            url:"https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/login",
            type:"POST",
            dataType:"json",
            data:{
                email:email,
                password:password
            },
            success:function(resp){
                window.currentUser = resp;
                // getArticles();
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            },
            complete:function(){
                console.log("AJAX Req has completed");
            }
        };
        return $.ajax(ajaxOptions);
    }
});