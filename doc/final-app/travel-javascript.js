const form = document.querySelector('form');
        const travelList = document.getElementById("travel-list");
        const button = document.querySelector('button');
        const listInput = document.getElementById('item');
        let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        localStorage.setItem('items', JSON.stringify(itemsArray));
        const data = JSON.parse(localStorage.getItem('items'));

        const liMaker = (text) => {
              const div = document.createElement('div');
              const li = document.createElement('li');
              li.textContent = text + "\n";
              div.appendChild(li); 
              travelList.appendChild(div);
        }
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          itemsArray.push(listInput.value);
          localStorage.setItem('items', JSON.stringify(itemsArray));
          liMaker(listInput.value);
          listInput.value = "";
        });
        data.forEach(item => {
          liMaker(item);
        });
        button.addEventListener('click', function () {
          localStorage.clear();
          while (travelList.firstChild) {
            travelList.removeChild(travelList.firstChild);
          }
        });

//**************************End of Local Storage**********************************

      
      function myFunction(x) {
        x.classList.toggle("change");
      }