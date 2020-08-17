
function fetching(event){

event.preventDefault();

let input = $('#dogBreed').val();
let breed = "";

if (!input){
    breed = 'hound';
}/*else if (input.contains(' ')){
    let arr = input.split(" ");
    breed = arr[0];
}*/else{
    breed = input;
}

let url  = `https://dog.ceo/api/breed/${breed}/images/random`;

fetch(url)
.then(response => response.json())
.then(JSON => {
let msg = JSON.message;
   let image = `<img src='${msg}' alt = 'one cute ${breed}' width="500">`;

    render(image);
    });

}



function render(str){
    $('div').html(str);
}




function main(){

}

$('#submit').on('click', fetching);

$(main);
