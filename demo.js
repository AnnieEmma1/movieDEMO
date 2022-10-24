document.addEventListener('DOMContentLoaded', function() {
    
    const list =document.querySelector("#movie-list ul");
    const forms =document.forms;
    

    //delete movie
    list.addEventListener('click', (e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement; 
            li.parentNode.removeChild(li);
        }

    }); 

    //add movie
    const addForms = forms["add-movie"];
    addForms.addEventListener('submit',function(e){
    e.preventDefault();
    
    
    //creating element 
    const value = addForms.querySelector('input[type="text"]').value; 
    const li = document.createElement('li');
    const movieName = document.createElement('spam');
    const deleteBtn =document.createElement('spam');

    //add text content 
    movieName.textContent = value;
    deleteBtn.textContent = 'delete';

    //add class 
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');
     
     //appen to DOM
     li.appendChild(movieName);
     li.appendChild(deleteBtn);
     list.appendChild(li);

    })

})
       


 



    
