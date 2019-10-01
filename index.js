
function formSubmit(){
    $('form').submit(event => {
        event.preventDefault();
        const username = $('input').val().toLowerCase();
        userRepos(username);
       
      })
}

function userRepos(username){
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
          if (response.ok){
              return response.json();
          }
          throw new Error(response.statusText);
      })
      .then(responseJson => displayRepos(responseJson))
      .catch(err => {alert(`There was an error! Something went wrong: ${err.message}`)});
  }

  function displayRepos(responseJson){
    clearCurrent();
    for (let i = 0; i < responseJson.length; i++){
        $('ul').append(
            `<li>
                <a href="${responseJson[i].html_url}">
                <h2>${responseJson[i].name}</h2></a>
            </li>`
        )
    };
};


function clearCurrent(){
    $('ul').empty();
}

$(formSubmit());