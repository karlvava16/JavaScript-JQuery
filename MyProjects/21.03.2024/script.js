$(document).ready(function () {
  // Step 1: Fetch users data
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    success: function (users) {
      // Step 2: Display users
      users.forEach(function (user) {
        $("#userList").append(
          '<div class="user" data-user-id="' +
            user.id +
            '">' +
            user.name +
            "</div>"
        );
      });

      // Step 3: Handle user selection
      $(".user").click(function () {
        var userId = $(this).data("user-id");

        // Step 4: Fetch detailed user info
        $.ajax({
          url: "https://jsonplaceholder.typicode.com/users/" + userId,
          method: "GET",
          success: function (user) {
            $("#userInfo").html(
              "<h2>" +
                user.name +
                "</h2><p>Email: " +
                user.email +
                "</p><p>Address: " +
                user.address.street +
                ", " +
                user.address.city +
                "</p>"
            );

            // Step 5: Handle "Show posts" button
            $("#userPosts").empty(); // Clear previous posts
            $("#userInfo").append('<button id="showPosts">Show posts</button>');
            $("#showPosts").click(function () {
              // Step 6: Fetch user posts
              $.ajax({
                url:
                  "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
                method: "GET",
                success: function (posts) {
                  posts.forEach(function (post) {
                    $("#userPosts").append(
                      "<div><h3>" +
                        post.title +
                        "</h3><p>" +
                        post.body +
                        "</p></div>"
                    );
                  });
                },
              });
            });
          },
        });
      });
    },
  });
});
