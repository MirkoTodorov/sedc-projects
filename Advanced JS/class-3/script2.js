let baseURL = 'https://swapi.co/api/'
$(document).ready(function(){
    getFilms(); //https://swapi.co/api/films


    function getFilms(){
        {
            $.ajax({
                url : 'https://swapi.co/api/films',
                method: 'GET',
                data: {},
                complete: cbSuccessFilms,
                error: cbErrorFilms
            });
        }
    }

    function mainPrintingFuctionForTableCells(entity){
        let tr = document.createElement('tr');
        for(x in entity){
            // console.log(x);
            // console.log(film[x]);
            let td = document.createElement('td');
            let result = entity[x];
            // console.log(result);
            if(Array.isArray(result)){//Check if variable is an array
                result.forEach(function(value){
                    // console.log(value);
                    // td.innerHTML += `<span><a onclick='getAdditionalInfo(${value.toString()})'>${value}</a></span><br>`;
                    let span = document.createElement('span');
                    let br = document.createElement('br');
                    span.innerHTML = value;
                    span.addEventListener('click', function(){getAdditionalInfo(value)}, false);
                    td.appendChild(span);
                    td.appendChild(br);
                });
            }else{
                // console.log(typeof result);
                if(result != null &&  result.toString().includes('http')){
                    let span = document.createElement('span');
                    let br = document.createElement('br');
                    span.innerHTML = result;
                    span.addEventListener('click', function(){getAdditionalInfo(result)}, false);
                    td.appendChild(span);
                    td.appendChild(br);
                }                
                else
                td.innerHTML = `<span>${result}</span>`;
            }
            tr.appendChild(td);
        }
        return tr;
    }

    function cbSuccessFilms(data){
        console.log(data);
        console.log(data.responseJSON);
        console.log(data.responseJSON.results);
        let response = data.responseJSON.results

        let table = document.querySelector('table');

        response.map(function(film){
            // console.log(film);          
            table.appendChild(mainPrintingFuctionForTableCells(film));
        });
    }

    function cbErrorFilms(error){
        console.log(error);
    }


    function getAdditionalInfo(URL){
        $.ajax({
            url: URL,
            method: 'GET',
            data: {},
            success: cbSuccess2,
            error: cbError2
        })
    }

    function createTableTitles(tableHeads){
        let tr = document.createElement('tr')
        for (head of tableHeads){
            let td = document.createElement('td');
            td.innerHTML = head;
            tr.appendChild(td);
        }
        return tr;
    }

    function cbSuccess2(data){
        // console.log(data);
        // console.log(Object.keys(data));
        let tableHeads = Object.keys(data);
        let div = document.querySelector('.second-table');

        if(div.innerHTML != '')
            div.innerHTML = '';

        let h1 = document.createElement('h1');
        h1.innerHTML = "The Second Table";
        div.appendChild(h1);
        let table = document.createElement('table');
        table.appendChild(createTableTitles(tableHeads));

        
        table.appendChild(mainPrintingFuctionForTableCells(data));
        div.appendChild(table);
    }

    function cbError2(error){
        console.log(error);
    }


});