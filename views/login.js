/*global $*/
$(window).ready(function(){
    var usersContainer = $(".js-login");
    var user = new User();
    
    loginUser();
    loginUser().done(window.location.assign("https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/pages/articles.html"));

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