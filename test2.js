const info = function getInfo() {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        return response.json();
      });
  };
  let sample = document.getElementById('sample');
  let img, h2, link;
  let users =  [];
  let app = document.getElementById('app');
  info().then(res => {
     users = res.results;
     for (let i=0; (i < users.length) && (i < 4); i++){
       let tarjeta = sample.cloneNode(true);
       tarjeta.id = 's'+i;
       app.appendChild(tarjeta);
 
       img = document.querySelector('#s'+i+ ' img');
       img.src = users[i].image;
 
       h2 = document.querySelector('#s'+i+ ' h2');
       h2.textContent=users[i].name;
 

       tarjeta.style = 'visibility:visible;';
 
     }
 });
  