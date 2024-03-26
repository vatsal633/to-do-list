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

        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }

    input_box.value = ""
    savedata();
}   


ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        savedata();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        n--;
        if(n==0){
            document.getElementsByClassName("container2")[0].style.display = 'none'
        }
        document.getElementById('counter').innerHTML = n
        
        savedata();
    }
},false)


function savedata(){
    localStorage.setItem("data",ListContainer.innerHTML)
}

function showTask(){  
    ListContainer.innerHTML = localStorage.getItem("data")
}

showTask();
