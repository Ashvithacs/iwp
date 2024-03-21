document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to the search button
  document.getElementById("search-button").addEventListener("click", function() {
      // Get the search term entered by the user
      const searchTerm = document.getElementById("search").value.trim();
      if (searchTerm !== "") {
          // Perform search or display a message
          alert("Performing search for: " + searchTerm);
          // You can implement search logic here, such as querying a database or an external API
      } else {
          alert("Please enter a search term.");
      }
  });

  // Add event listener to the login button for redirection
  document.getElementById("login-button").addEventListener("click", function() {
      window.location.href = "l.html"; // Replace "l.html" with your login page URL
  });

  // Add event listener to the opinion button for redirection
  document.getElementById("opinion-button").addEventListener("click", function() {
      window.open("opinion_page.html", "_blank"); // Replace "opinion_page.html" with your opinion page URL
  });
});
