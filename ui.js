class UI {
  constructor(){
  }

  //UI user profile
  showProfile(user){
    
    document.querySelector('#profile').innerHTML= `
    <div class="card card-body mb-3">
    <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br></br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      </div>`; 

  }


    //UI user repos
    showRepo(repos){
      let output;

      repos.forEach(function(repo){
        output += `
        <div class="card card-body mb-2">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
          </div>
        </div>`;
      });
      //display in UI
    document.querySelector('#repo').innerHTML = output;
    }



  //Show alert
  showAlert(message, classname){
    //Clear alert
    this.clearAlert();

    //Create element
    const div = document.createElement('div');
    //Add class
    div.className = classname;
    //Add text node
    div.appendChild(document.createTextNode(message));
    //Target parent
    const container = document.querySelector('.searchContainer');
    //Target child
    const search = document.querySelector('.search');
    //Insert
    container.insertBefore(div, search);



    // Set timeout
    setTimeout(() => {
      document.querySelector('.alert').remove();
    },2000)
  }



  //Clear alerts
  clearAlert(){
    const alert = document.querySelector('.alert');
    if(alert){
      alert.remove();
    }
  }




  // Clear profile and repo input
  clearInput(){
    document.querySelector('#profile').innerHTML = '';
    document.querySelector('#repo').innerHTML = '';
  }
}