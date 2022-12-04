let dateHours = document.querySelector('.dateHours')
let myFirstBox = document.querySelector('.myFirstBox')
let dateMin = document.querySelector('.dateMin')
let dateSec = document.querySelector('.dateSec')
let btnStart = document.querySelector('.btnStart')
let setTitleInput = document.querySelector('.setTitleInput')
let addBtn = document.querySelector('.addBtn')
let removeBtn = document.querySelector('.removeBtn')
let mySpanColor =document.querySelectorAll('.mySpanColor')
let newContainer = document.querySelector('.newContainer')

function focusHandler(){
    setTitleInput.style.borderColor='blue'
}

mySpanColor.forEach(function(item){
  console.log(item);
  item.addEventListener('click',function(event){

  setTitleInput.style.backgroundColor= event.target.style.backgroundColor
})

})

setTitleInput.addEventListener('keyup',function(event){
    if(event.code==='Enter'){

        let newTitleBox = document.createElement('div')
        let textBox = document.createElement('h4')
        newTitleBox.classList ='newTitleBox'
        textBox.classList='h4'
        newContainer.append(newTitleBox)
        newTitleBox.append(textBox)
        textBox.innerHTML= setTitleInput.value
        newTitleBox.style.backgroundColor=setTitleInput.style.backgroundColor
        setTitleInput.value=" "
        
        newTitleBox.addEventListener('click',function(){
           newTitleBox.remove()
        })
    }
   })

addBtn.addEventListener('click',function(){
 let newTitleBox = document.createElement('div')
 let textBox = document.createElement('h4')
 newTitleBox.classList ='newTitleBox'
 textBox.classList='h4'
 newContainer.append(newTitleBox)
 newTitleBox.append(textBox)
 textBox.innerHTML= setTitleInput.value
 newTitleBox.style.backgroundColor=setTitleInput.style.backgroundColor
 setTitleInput.value=" "
 
 newTitleBox.addEventListener('click',function(){
    newTitleBox.remove()
 })

}) 

removeBtn.addEventListener('click',function(){
   setTitleInput.value=" "
   setTitleInput.style.backgroundColor='white'
})



btnStart.addEventListener('click',function(){

    if(dateHours.value=="14" && dateMin.value=="15" && dateSec.value=="16"){
        document.body.style.background="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhO55dnQb8wVmdtcFvtFRucO0hidPAmTY1v9ObztlpWe0PprLtODMtX13xLfYlFXfZg94&usqp=CAU')"
        myFirstBox.style.display = 'none'
    }else{
        alert('just set your time in => 14 hours : 15 min : 16 sec ')
    }
})
