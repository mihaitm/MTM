/*global $*/
function Articles(){
    this.models = [];
}

Articles.prototype.getArticles = function(){
    var that = this;
    return $.ajax({
            url:"https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/articles",
            type:"GET",
            dataType:"json",
            success:function(resp){
                for(var i = 0; i<resp.length; i++){
                    var article = new Articles(resp[i]);
                    that.models.push(article);
                }
            },
            error:function(xhr,status,errorMessage){
                console.log("Error status:"+status);
            }
        });
};

Articles.prototype.delete = function(articleId){
    //Do AJAX request to URL: "https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/articles/delete?id=+articleId"
    //Method POST
};

Articles.prototype.add = function(articleId){
    //Do AJAX request to URL: "https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/articles/add"
    //Method POST
};