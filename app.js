let features = document.querySelector(".features")
let features_op = document.querySelector(".features-opt")
let solutions =  document.querySelector(".solutions")
let solution_op = document.querySelector(".solutions-opt")
let resources =  document.querySelector(".resources")
let resources_op = document.querySelector(".resources-opt")
let search_click = document.querySelector("#search-click")
let hide = document.querySelector(".hide")
let input = document.querySelector("input")
let x_mark = document.querySelector("#x-mark")




//features function//
function features_opt() {
   if (features_op.style.opacity == 0) {
      features_op.style.opacity = 100
      solution_op.style.opacity = 0
      resources_op.style.opacity = 0
   } else {
      features_op.style.opacity = 0
   }
}
features.addEventListener("click", () => {
   features_opt()
})

//solutions function//
function solutions_opt(){
   if(solution_op.style.opacity == 0){
      solution_op.style.opacity = 100
      features_op.style.opacity = 0
      resources_op.style.opacity = 0

   }else{
      solution_op.style.opacity = 0 
   }
}
solutions.addEventListener("click",()=>{
   solutions_opt()
})

//resources function//
function resources_opt(){
   if(resources_op.style.opacity == 0){
      resources_op.style.opacity = 100
      features_op.style.opacity = 0
      solution_op.style.opacity = 0 

   }else{
      resources_op.style.opacity = 0
   }
}
resources.addEventListener("click",()=>{
   resources_opt()
})

//search-box function//
// function search_opt(){
//    if(icon.style.opacity == 0){
//       search_box.style.opacity = 100
//    }else{
//       search_box.style.opacity = 0
//    }
// }

// search_box.addEventListener("click",()=>{
//    search_opt()
// })

//search-click function//

function search(){
   hide.style.display="block"
   resources_op.style.opacity = 0
   features_op.style.opacity = 0
   solution_op.style.opacity = 0 
}

search_click.addEventListener("click",()=>{
   search()
})

//x-mark function//

function mark(){
   hide.style.display="none"
} 
x_mark.addEventListener("click",()=>{
   mark()
})