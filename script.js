let maindiv = document.getElementById("main-container");

//using function to fetch data from api

        //using function to fetch data from api
        let DigimonData=async ()=>{
            try{
                const data = await fetch("https://digimon-api.vercel.app/api/digimon");
                //convert the data into json format
                const digimons = await data.json();
                digimons.forEach((mon) => {
                    Displaymons(mon);
                });
            } catch(error){
                console.log(`error`)
            }
        }
        
        DigimonData();
        
        const Displaymons=(mon) =>{
            maindiv.innerHTML +=`
            <div class="card " style="width: 18rem;" id="carda">
          <img src=${mon.img} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="}">Name: ${mon.name}</h5>
            <p class="card-text">Species: ${mon.level}</p>
          </div>
        </div>
            `
        }
        
        

