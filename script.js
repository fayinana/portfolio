fetch('http://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/competitions/WC/matches', {
  headers: {
    'X-Auth-Token': '8c4f5ed887a74b7ea66331729dab7d1e'
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });