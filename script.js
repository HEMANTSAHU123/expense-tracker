function handle(event){
    event.preventDefault();

const amount=event.target.expense.value;
const description=event.target.description.value;
const category=event.target.category.value
let id=Date.now();

const expense={
    amount:amount,
    description:description,
    category:category,
    id:id

}
const local=JSON.stringify(expense);
localStorage.setItem(id,local);


event.target.reset();

display(expense);
// deletebtn.addEventListner('click', function(){
//     deleteuser(expense.id)
// })

}

function display(expense) {
    const editbtn=document.createElement('button')
   // editbtn.style.backgroundColor='red'
   // editbtn.style.padding='10px'
    editbtn.textContent='edit-expense';
    console.log(editbtn);
    const deletebtn=document.createElement('button')
    deletebtn.textContent='delete-expense'

    const ul = document.querySelector('ul');
    const creatnewli = document.createElement('li');
    creatnewli.style.backgroundColor='red'
    // creatnewli.style.padding='20px';
    // creatnewli.style.margin='10px'
    creatnewli.textContent = expense.amount + expense.description + expense.category;
    creatnewli.id=expense.id;
    ul.appendChild(creatnewli);
    creatnewli.appendChild(editbtn);
    creatnewli.appendChild(deletebtn);
    deletebtn.addEventListener('click', function(){
        deleteExpense(expense.id)
        
    })
    editbtn.addEventListener('click',function(){
        editExpense(expense.id)
    })

}
function deleteExpense(id){
   localStorage.removeItem(id)
  let li=document.getElementById(id);
  li.remove();
   
}
function editExpense(id){
   
   const exp= JSON.parse(localStorage.getItem(id));
 console.log(exp);
 const expense=document.getElementById('expense');
 expense.value=exp.amount;
 const description=document.getElementById('description');
 description.value=exp.description;
 const category=document.getElementById('category');
 category.value=exp.category
deleteExpense(id);

}

