import logo from './logo.svg';
import './App.css';

function validate() {
  let validates = true;

  let firstName = document.getElementById("firstName");

  if(!(/[A-Z]+( ([A-Z])*)?/i.test(firstName))) {
      validates = false;
  }

  let lastName = document.getElementById("lastName");

  if(validates && !(/([A-Z]|'|-)+/i.test(lastName))) {
      validates = false;
  }

  let email = document.getElementById("email").value;

  if(validates && !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/.test(email))) {
      validates = false;
  }

  let password = document.getElementById("password").value;

  if(validates && !(/(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[~`! @#$%^&*()\-_+={}\[\]\|;:"<>,\.\/\?]){12,}/.test(password))) {
      validates = false;
  }

  let season = document.getElementById('season').value;

  if(validates) {
      document.getElementById("content").innerHTML = "<h1>Profile</h1>";
      document.getElementById('nameOutput').innerHTML = "Name: " + firstName + " " + lastName;
      document.getElementById('emailOutput').innerHTML = "Email: " + email;
      document.getElementById('seasonOutput').innerHTML = "Season: " + season;
  }
  else {
      alert("There are some errors in your form submission");
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script src="./App.js"></script>

        <div class="content" id="content">
          <form class="registration" id="register" onsubmit="event.preventDefault(); validate()">
            <h3>Registration Form</h3>
            <label for="firstName">First Name</label>
            <span class="format">* Letters only (non-case-sensitive)</span>
            <br></br>
            <input type="text" name="firstName" id="firstName"></input>
            <br></br>
            <label for="lastName">Last Name</label>
            <span class="format">* Letters only (non-case-sensitive)</span>
            <br></br>
            <input type="text" name="lastName" id="lastName"></input>
            <br></br>
            <label for="email">Email</label>
            <span class="format">* Must follow the traditional email format</span>
            <br></br>
            <input type="email" name="email" id="email"></input>
            <br></br>
            <label for="password">Password</label>
            <span class="format">* At least 12 characters, include at least one number, one uppercase letter, one lowercase letter, and one special character.</span>
            <br></br>
            <input type="password" name="password" id="password"></input>
            <br></br>
            <span class="format">Favorite Season</span>
            <select name="season" id="season">
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
            </select>
            <br></br>
            <button type="submit">Submit</button>
          </form>

          <div>
              <span id="nameOutput"></span>
              <br></br>
              <span id="emailOutput"></span>
              <br></br>
              <span id="seasonOutput"></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
