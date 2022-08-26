const info = function getInfo() {
    return fetch('https://rickandmortyapi.com/api/character/3')
      .then(response => {
        return response.json();
      });
  };
 let sample = document.getElementById('sample');
 let img, h2, link;
 let users =  [];
 let app = document.getElementById('app');
 info().then(res => {
    users = res;
      i =0;
      let tarjeta = sample.cloneNode(true);
      tarjeta.id = 's'+i;
      app.appendChild(tarjeta);

      img = document.querySelector('#s'+i+ ' img');
      img.src = users .image;

      h2 = document.querySelector('#s'+i+ ' h2');
      h2.textContent=users.name;

      tarjeta.style = 'visibility:visible;';

   
});