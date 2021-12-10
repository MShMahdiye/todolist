let ullist = document.getElementById("ul");
const tasklist = [];
const btn = document.getElementById('btn');
const taskinput = document.getElementById("yourlist");
const ftbtn = document.getElementById('ftbtn');
const filterinput = document.getElementById("ftask");
let fillist = document.getElementById("ful");
const filterlist = [];

function arrowinput()
{
    let taskvalue=taskinput.value
    const obj = {}
    obj.task= taskvalue
    obj.done = false
    if (!taskvalue)
    {
        return alert('please add your new task')
    } 
    tasklist.push(obj);
    updateui();
    taskinput.value=""; 
}
// when click funcntion execute
btn.addEventListener
(
    'click', arrowinput
)
taskinput.addEventListener
(
    'keyup',(event)=>{
        console.log(event)
        if(event.keyCode === 13)
        {
            arrowinput();
            event.preventDefault();
        }

    })
filterinput.addEventListener
(
  'keyup',(event)=>{
    let finvalue = event.target.value
    let value = finvalue.trim().toLowerCase()
    // console.log(fitem);
    let filterresult = tasklist.filter( fitem => fitem.task.includes(value))
   
    updateui(filterresult)
     }   
)


function updateui(parameter=tasklist)
    {
    ullist.innerHTML = ''
    let input = ''
    for (let i = 0; i < parameter.length; i++)
    {
    const item = parameter[i]
    
    input += `
    <div class="Todolist">
    <h4  id="paragraph_${i}" class=" heading ${linethrough(item)}"> ${item.task} </h4>
    <img class="img" src="https://img.icons8.com/color/48/000000/christmas-star.png" alt="star" onclick="done(${i})">
    <img class="img" src="https://img.icons8.com/doodle/48/000000/empty-trash--v1.png" alt="trash!" onclick="deletetask(${i})">
    </div>`

    }
    ullist.innerHTML = input
    }
updateui(tasklist);
function deletetask(i) {

    // remove the task
    tasklist.splice(i, 1)
  
    updateui(tasklist)
  
  }
function linethrough(item) {
    // if (item.done)
    // {
    //   return 'done' 
    // }
    // else
    // {
    //   return ''
    // }
    return (item.done) ? 'done' : '';
  }

  function done(i) {
    tasklist[i].done = !tasklist[i].done
    updateui(tasklist)
  }



