//Init Github
const github = new Github;
//Init UI
const ui = new UI;


// Search input
const searchUser = document.querySelector('#searchUser');

//Listen to keyup event
searchUser.addEventListener('keyup', function(e){

  //Get search input value
 const searchInputValue = searchUser.value;

 //Validating
 if(searchInputValue !== ''){
  // http call to github
  github.getUser(searchInputValue)
  .then(data => {
    if(data.profile.message === 'Not Found'){
      ui.showAlert('User Not Found', 'alert alert-danger');
      throw new Error('User not found');

    }else{

     //Display user profile & repo
      // console.log(data);
      ui.showProfile(data.profile);
      ui.showRepo(data.repo);

    }
  });

  
  }else{
   //Clear profile & repo input field
   ui.clearInput();

 }


  e.preventDefault();
});