/*
  //1. add button event handler
  document.getElementById("submit-comment").addEventListener("click", function(){

    //2. get user comment
  const CommentBox = document.getElementById("new-comment");
//   const userComment = CommentBox.value;

  //3. create comment para
  const newComment = document.createElement("p");
  newComment.innerText = CommentBox.value;

  // 4. append the comment
  const commentContainer = document.getElementById("comment-container");

  commentContainer.appendChild(newComment);

  //5. clean the commentBox
  CommentBox.value = "";

});
         */



    document.getElementById("submit-comment").addEventListener('click', function(){
    const commentBox = document.getElementById("new-comment");

    const newComment = document.createElement("p");
    newComment.innerText = commentBox.value;

    const commentContainer = document.getElementById("comment-container");

    commentContainer.appendChild(newComment);

    commentBox.value = '' ;


})