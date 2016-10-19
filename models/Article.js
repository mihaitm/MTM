/*global $*/
function Article(options){
    this.title = options.title;
    this.content = options.content;
    this.id = options.id;
}

Article.prototype.update = function(){
    // changes were made here
    //Do an AJAX request to https://mihaitm-mihaitm.c9users.io/Personal/C22&C23&C24_app/articles/update
};