// create the main HTML for the page
const templateHTML = function (teamCards) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Here's Your Team</h1>
          <p class="lead">
            See the cards below with key information about your team members!
          </p>
        </div>
      </div>
    </header>
    <!-- Main Section -->
    <main class="container-fluid">
      <div class="row" id="teamCards">
        <!-- Cards of Team Members -->
        ${teamCards}
      </div>
    </main>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};

// create the manager card
const createManagerCard = function (manager) {
  return `
    <div class="col-4 mt-4">
          <div class="card h-100">
            <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4>
            </div>

            <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.office}</p>
            </div>
          </div>
    </div>`;
};

// create the engineer card
const createEngineerCard = function (engineer) {
  return `
    <div class="col-4 mt-4">
          <div class="card h-100">
            <div class="card-header">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4>
            </div>

            <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">GitHub: ${engineer.github}</p>
            </div>
          </div>
    </div>`;
};

// create the intern card
const createInternCard = function (intern) {
  return `
    <div class="col-4 mt-4">
          <div class="card h-100">
            <div class="card-header">
              <h3>${intern.name}</h3>
              <h4>Intern</h4>
            </div>

            <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
            </div>
          </div>
    </div>`;
};

// function to add team member cards based on data passed by the user
const createHTML = function (data) {
  // declare an empty array that we will pass data into for the team member cards the user creates
  let teamArray = [];
  // loop through each of the team members added by the user and create the corresponding card based on the role the user has selected
  for (var i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.role;
    // if Manager, make manager card
    if (role === "Manager") {
      const managerCard = createManagerCard(employee);
      teamArray.push(managerCard);
    }
    // if Engineer, make engineer card
    if (role === "Engineer") {
      const engineerCard = createEngineerCard(employee);
      teamArray.push(engineerCard);
    }
    // if Intern, make intern card
    if (role === "Intern") {
      const internCard = createInternCard(employee);
      teamArray.push(internCard);
    }
  }
  //   Join the teamArray strings together to create a single string of the full set of team cards
  const teamCards = teamArray.join("");
  //   call templateHTML function passing the new string of team cards to create the fully constructed HTML
  return templateHTML(teamCards);
};

module.exports = createHTML;
