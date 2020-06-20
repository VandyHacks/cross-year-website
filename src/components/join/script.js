let input = document.querySelector('input')
console.log('In Script')
input.addEventListener('keyup', (e) =>{
    if(e.keyCode == 13){
        console.log(e.target.value);
    }
})