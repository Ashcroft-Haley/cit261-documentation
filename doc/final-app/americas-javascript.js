const app = document.getElementById('root');

        const logo = document.createElement('img');
        logo.src = 'logo.png';

        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        container.setAttribute('id', 'container');

        //app.appendChild(logo);
        app.appendChild(container);
      
        // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();
        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://restcountries.eu/rest/v2/region/americas', true);
        request.onload = function () {
            // Begin accessing JSON data here
              var data = JSON.parse(this.response);
              if (request.status >= 200 && request.status < 400) {
                data.forEach(region => {
                    const card = document.createElement('div');
                    card.setAttribute('class', 'card');

                    const h1 = document.createElement('h1');
                    h1.textContent = region.name;

                    const p = document.createElement('p');
                    region.capital = region.capital.substring(0, 300);
                    p.textContent = `Capital: ${region.capital}`;
                    
                    const p2 = document.createElement('p');
                    p2.textContent = `Main Language: ${region.languages[0].name}`;
                    
                    const p3 = document.createElement('p');
                    p3.textContent = `Main Currency: ${region.currencies[0].name} (${region.currencies[0].symbol})`;
                    
                    const p4 = document.createElement('p');
                    console.log(region.population);
                    p4.textContent = `Total Population: ${region.population}`;

                    container.appendChild(card);
                    card.appendChild(h1);
                    card.appendChild(p);
                    card.appendChild(p2);
                    card.appendChild(p3);
                    card.appendChild(p4);
                    
                });
              } else {
                const errorMessage = document.createElement('marquee');
                errorMessage.textContent = `Gah, it's not working!`;
                app.appendChild(errorMessage);
              }
        }

        // Send request
        request.send();
      
      
      
      function filterFunction() {
          var input, filter, container, card, heading, i, txtValue;
          input = document.getElementById('myInput');
          filter = input.value.toUpperCase();
          container = document.getElementById('container');
          card = document.getElementsByClassName('card');
          
          for (i = 0; i < card.length; i++) {
              heading = card[i].getElementsByTagName('h1')[0];
              txtValue = heading.textContent || heading.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  card[i].style.display = "";
              } else {
                  card[i].style.display = "none";
              }
          }
      }
      
      
      
      
      function myFunction(x) {
        x.classList.toggle("change");
      }
      
      var sheet = document.createElement('style')
        sheet.innerHTML = "* {box-sizing: border-box;}"
            + "html {background-color: #ebebe0;}"
            + "#root {max-width: 1200px; margin: 0 auto;}"
            + "h1 {text-align: center; padding: 1.5rem 2.5rem; background-image: linear-gradient(120deg, #336699 0%, #a6c1ee 100%); margin: 0 0 2rem 0; font-size: 2rem; color: white; font-family: 'Amatic SC', cursive;}"
            + "h2 {text-align: center; padding: 5rem 2.5rem 1.5rem 2.5rem; margin: 0 0 2rem 0; font-size: 4rem; color: #204060; font-family: 'Amatic SC', cursive;}"
            + "p {padding: 0 2.5rem 2.5rem; margin: 0; font-family: 'Montserrat', sans-serif;}"
            + ".container {display: flex; flex-wrap: wrap;}"
            + ".card { margin: 1rem; background: white; box-shadow: 2px 4px 25px rgba(0, 0, 0, .1); border-radius: 12px; overflow: hidden; transition: all .2s linear;}"
            + ".card:hover { box-shadow: 2px 8px 45px rgba(0, 0, 0, .15); transform: translate3D(0, -2px, 0);}"
            + "@media screen and (min-width: 600px) {.card {flex: 1 1 calc(50% - 2rem);}}"
            + "@media screen and (min-width: 900px) {.card {flex: 1 1 calc(33% - 2rem);}}"
            + "@media screen and (max-width: 600px) {.card {flex: 1 calc(100% - 2rem);}}"
            + ".card:nth-child(2n) h1 {background-image: linear-gradient(120deg, #008080 0%, #8fd3f4 100%);}"
            + ".card:nth-child(4n) h1 {background-image: linear-gradient(120deg, #e6ac00 0%, #ffe680 100%);}"
            + ".card:nth-child(5n) h1 {background-image: linear-gradient(120deg, #e63900 0%, #ffafbd 100%);}"      
            + "ul {list-style-type: none; margin: 0; padding: 0; overflow: hidden;}"     
            + "li {display:inline; margin: 0 auto; padding: 10px 0;}"
            + "li a {display:inline-block; color: #204060; text-align: center; padding: 14px 16px; text-decoration: none; font-family: 'Montserrat', sans-serif;}"       
            + "li a:hover:not(.active) {color: #8cb3d9;}"        
            + "li a:hover {background-color: white;}"       
            + ".active {color: #e63900;}"
            + "audio {margin: 0 auto; width: 100%;}"
            + "#audioContainer {margin-right: 18px; margin-left: 18px;}"
            + "#filterContainer {margin-right: 18px; margin-left: 18px;}"
            + "#myInput {width: 100%; font-size: 16px; padding: 12px 20px 12px 20px; border: 1px solid #ddd; margin-bottom: 12px; margin-top: 12px;}";
        document.body.appendChild(sheet);