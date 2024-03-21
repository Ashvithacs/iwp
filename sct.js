body {
    font-family: 'Poppins', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url("/assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #333;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  header {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    text-align: center;
    padding: 20px;
    margin-bottom: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  
  header h1 {
    margin: 0;
    font-size: 32px;
    color: #333;
  }
  
  header p {
    margin: 5px 0 0;
    font-size: 18px;
    color: #666;
  }
  
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  #movie-preferences {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  
  #movie-preferences label {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    color: #333;
  }
  
  #recommendation-container {
    margin-left: 20px;
  }
  
  #recommendation-container h2 {
    margin-top: 0;
  }
  
  #recommendation-container ul {
    list-style: none;
    padding: 0;
  }
  
  #recommendation-container li {
    margin-bottom: 10px;
  }
  
  form input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 25px;
  }
  
  .dropdown {
  width: 300px;
  display: inline-block;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgb(204, 204, 204);
  transition: all .5s ease;
  position: relative;
  font-size: 14px;
  color: #474747;
  height: 100%;
  text-align: left
  }
  .dropdown .select {
    cursor: pointer;
    display: block;
    padding: 10px
  }
  .dropdown .select > i {
    font-size: 13px;
    color: #888;
    cursor: pointer;
    transition: all .3s ease-in-out;
    float: right;
    line-height: 20px
  }
  .dropdown:hover {
    box-shadow: 0 0 4px rgb(204, 204, 204)
  }
  .dropdown:active {
    background-color: #f8f8f8
  }
  .dropdown.active:hover,
  .dropdown.active {
    box-shadow: 0 0 4px rgb(204, 204, 204);
    border-radius: 2px 2px 0 0;
    background-color: #f8f8f8
  }
  .dropdown.active .select > i {
    transform: rotate(-90deg)
  }
  
  #get-recommendation-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  #get-recommendation-button:hover {
    background-color: #0056b3;
  }
  /* Add the existing styles from your previous CSS here */
  
  .hidden {
    display: none;
  }
  
  .dropdown-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 1;
  }
  
  .dropdown-menu li {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-menu li:hover {
    background-color: #f2f2f2;
  }
  
  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    background-color: #0056b3;
  }