


//get url them 
function fetching(event){
event.preventDefault();
//if num > 50 throw Error ('That's too many dogs! Please input an number below 50')
let num = $('#dogNumber').val();
    if (num > 50){
        alert("That's too many dogs! Please input an number below 50")
        return;
    }
    
    if(!num){
        num = 1;
    }

let url  = `https://dog.ceo/api/breeds/image/random/${num}`;

fetch(url)
.then(response => response.json())
.then(JSON => {
    
    let dogs = JSON.message.map(dog =>`<img src='${dog}' alt = 'one cute puppy' width="500">`);
    
    let dogStr = dogs.join('');

    render(dogStr);
    });

}



function render(str){
    $('div').html(str);
}




function main(){

}

$('#submit').on('click', fetching);

$(main);
