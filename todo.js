const addButton = document.getElementById("add-todo");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  // YOUR CODE HERE
  const newitem= document.createElement("li");
  const text= todoInput.value;
  if(text.trim()==="")
    {
      return
    }else{
  newitem.innerText=text;
    }
  todoList.appendChild(newitem);
  todoInput.value="";
  /* The delete button */
 
 del();

});

const del=()=>{
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  
 const buttons=document.querySelectorAll("button");
 let exists=false;
 
 for(let names of buttons)
  {
    if(names.textContent===deleteButton.textContent)
      {
        exists=true;
       break;
      }
  } 
  if(!exists)
    {
        const parent=addButton.parentElement;
        parent.appendChild(deleteButton); 
    }

    deleteButton.addEventListener("click", () => {
      // YOUR CODE HERE
      const items=todoList.children;
      const removed=todoInput.value;
      
      for(let item of items)
        {
    if(item.innerText==removed)
      {
        item.remove();
      }else{
        alert("Item not within list and cannot be removed");
      }
        } 
        todoInput.value="";  
    });
};
/* the user can add an entry by pressing Enter */
todoInput.addEventListener("keypress", (e) => {
  // YOUR CODE HERE
  if(e.key==="Enter"){
    if(!e.target.value.trim()) {
        return;
      }
  const nitem= document.createElement("li");
  const text= todoInput.value;
  nitem.innerText=text;

  todoList.appendChild(nitem);
  todoInput.value="";
del();
  
}
});
