/*global $*/
$(window).ready(function(){
    function checkSession(){
        $.ajax({
            url:"https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/session",
            type:"GET",
            success:function(resp) {
                if (resp.logged === false){
                    window.location.href = "https://mihaitm-mihaitm.c9users.io/Personal/C27_blog/index.html";
                } else {
                    $('#user').text(resp.user.email);
                    console.log("user is admin");
                }
            }
        });
    }
    checkSession();
        
    var articlesContainer = $(".js-articles");
    var articles = new Articles();
    
    var articlesDef = articles.getArticles();
    articlesDef.done(listComments);

function listComments(){
        var articleModels = articles.models;
        for (var i=0; i<articleModels.length; i++){
            var articleHtml = "<li data-article-id="+articleModels[i].id+"><h3>"+articleModels[i].title+"</h3>"+
                "<div>"+articleModels[i].content+"</div>"+
                "<div class=js-article-comments></div>"+
                "<textarea class='comment-text'></textarea>"+
                "<button class=js-add-comment>Add Comment</button>" +
                "</li>";
            articlesContainer.append(articleHtml);
        }
    }
});