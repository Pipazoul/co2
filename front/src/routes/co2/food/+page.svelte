<script>
    import { onMount } from "svelte";
    import {createFood} from "$lib/utils/food";
    

    import Fa from 'svelte-fa/src/fa.svelte'
    import {faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons';
	import { currentFood } from "$lib/store";

    

    let agribaliseCsv;
    let agribalise;

    let searchResults = [];
    let searchTerm = "";

    let selectedFood = [];
    
    onMount(async() =>{
            agribaliseCsv = await fetch("/Agribalyse_Detail ingredient.csv").then(res => res.text())

            agribalise = await csvToJson(agribaliseCsv)

            // add unit to each item
            agribalise.forEach(item => {
                item["unit"] = 0
            })
    })

    function csvToJson(csv) {
        const lines = csv.split("\n");
        const result = [];
        const headers = lines[0].split(",");

        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
            }

            result.push(obj);
        }

        return result;
    }

    function addFood(food) {
        selectedFood = [...selectedFood, food]
        searchTerm = ""
        searchResults = []
    }


    //Nom francais
    function searchFood() {
        // minimum 3 characters
        searchResults = []
        if (searchTerm.length < 3){
            //msg = [{ "Nom Français": "Please enter at least 3 characters" }]
            searchResults = [{ "Nom Français": "Please enter at least 3 characters" }]
            return;
        }
        else {
            if (!agribalise || !searchTerm) return; // check if variables are defined
            
            // search agribalise array for searchTerm remove accents
            //const food = agribalise.filter(item => item["Nom Français"] && item["Nom Français"].toLowerCase().includes(searchTerm.toLowerCase()))
            const food = agribalise.filter(item => item["Nom Français"] && item["Nom Français"].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
            searchResults = [...food]
        }
    }

    function saveFood() {
        const data = {
            "name": "test",
            "date": new Date(),
            "items": selectedFood
        }
        createFood(data)
    }

    function addUnit(item) {
        const index = selectedFood.findIndex(i => i["Nom Français"] === item["Nom Français"])
        selectedFood[index]["unit"] = selectedFood[index]["unit"] + 1
    }

    function removeUnit(item) {
        const index = selectedFood.findIndex(i => i["Nom Français"] === item["Nom Français"])
        selectedFood[index]["unit"] = selectedFood[index]["unit"] - 1
    }


</script>

<section>
    <h1>Food</h1>
    <div>
        <input type="text" placeholder="Search to add food" bind:value={searchTerm} on:input={searchFood}/>
    </div>
    <div class="flex flex-col">
        {#each searchResults as item}
            <button class="btn gap-2">
                {item["Nom Français"]}
                <div class="badge badge-secondary">{item["Ingredients"]}</div>
                <div class="badge badge-secondary hover:bg-secondary-focus" on:click={addFood(item)} ><Fa icon={faCirclePlus}/></div>
            </button>
        {/each}
    </div>
    <div class="flex flex-col">
        <p>Week meals</p>
        {#each selectedFood as item}
            <button class=" gap-2">
                {item["Nom Français"]}
                <div class="badge badge-secondary">{item["Ingredients"]}</div>
                <div class="flex flex-row">
                    <span on:click={() => {removeUnit(item)}}>
                        <Fa icon={faCircleMinus}/>
                    </span> 
                    {item["unit"]} 
                    <span on:click={() => {addUnit(item)}}>
                        <Fa icon={faCirclePlus} />
                    </span>
                </div>
                
            </button>
        {/each}
        <button class="btn gap-2" on:click={saveFood}>
    </div>
    <div>
        <p>Saved Weeks</p>
        {#each $currentFood as food}
                {food.name}
                <div class="badge badge-secondary">{food.date}</div>
                
                <div class="overflow-x-auto">
                    <table class="table w-full">
                      <!-- head -->
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Ingrediens</th>
                          <th>Units</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- row 1 -->
                        {#each food?.items as item}
                        <tr>
                          <td>{item["Nom Français"]}</td>
                          <td>{item["Ingredients"]}</td>
                          <td class="flex flex-row "><Fa icon={faCircleMinus}/> {item["unit"]} <Fa icon={faCirclePlus}/></td>
                        </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
        {/each}
    </div>

</section>