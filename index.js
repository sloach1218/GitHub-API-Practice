
function formSubmit(){
    $('form').submit(event => {
        event.preventDefault();
        const username = $('input').val().toLowerCase();
        userRepos(username);
       
      })
}

function userRepos(username){
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(responseJson => displayRepos(responseJson))
      .catch(error => alert('There was an error!'));
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