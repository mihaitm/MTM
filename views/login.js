/*global $*/
$(window).ready(function(){
   $(".login-btn").on("click", function(){
       
   
    var users = new Users();
    var email = $("[name='email-value']").val();
    var password = $("[name='password']").val();
    var usersDef = users.login(email, password);
    usersDef.done(listUser);
   });
    function listUser(){
        window.location.href = "https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/pages/articles.html";
    }
});


// $(window).ready(function(){
//     var usersContainer = $(".js-login");
//     var user = new User();
    
//     loginUser();
//     loginUser().done(window.location.assign("https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/pages/articles.html"));

// function loginUser(){
//         var userModels = user.models;
//         for (var i=0; i<userModels.length; i++){
//             var loginHtml = "<li data-user-id="+userModels[i].id+"><h3>"+userModels[i].email+"</h3>"+
//                 "<div>"+userModels[i].email+"</div>"+
//                 "<div class=js-article-comments></div>"+
//                 "<textarea class='comment-text'></textarea>"+
//                 "<button class=js-add-comment>Add Comment</button>" +
//                 "</li>";
//             usersContainer.append(loginHtml);
//         }
//     }
});