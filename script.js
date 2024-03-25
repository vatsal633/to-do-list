let n=0;
const input_box = document.getElementById('inp')
const ListContainer = document.getElementsByClassName('list-container')[0]

document.getElementsByClassName('container2')[0].style.display = 'none'

function addTask(){
    

    if(input_box.value==''){
        alert("you have to write something")
    }

    else{
        document.getElementsByClassName('container2')[0].style.display = 'block'
        let li = document.createElement('li')
        li.innerHTML = input_box.value
        ListContainer.appendChild(li)
        n++;
        document.getElementById('counter').innerHTML = n
    }
}   






document.getElementsByTagName('li')[0].mx = function check(){
    console.log("dsgfhdf")
}

function RemoveTask(){

}