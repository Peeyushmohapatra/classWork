fetch('https://api.github.com/search/users?q=peeyush').then((response) => {
    return response.text();
}).then((responseString) => {
    console.log(JSON.parse(responseString))
})