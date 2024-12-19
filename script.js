var loader = function () {
    setTimeout(function () {
      if ($("#tta-loader").length > 0) {
        $("#tta-loader").removeClass("show");
      }
    }, 2000);
    setTimeout(() => {
      $(".circular_wrap").show();
    }, 500);
  };
  loader();


//  let move = document.querySelectorAll("#move"); 
//  let translate = document.getElementById("translate"); 
//  const questionTitle = document.getElementById("disp-title");
// const questionContent = document.getElementById("disp-desc");
// const TextTitle = document.getElementById("card-title");
// const TextDescription = document.getElementById("card-desc");
const holder = document.querySelector(".holder")



 

for (let i = 0; i < 4; i++) {
  console.log(i);
  
  const element = document.querySelector(`.question-${i + 1}`);
  const translate = document.querySelector(`#translate-${i + 1}`);
  const title = document.querySelector(`#card-title-${i + 1}`);
  const description = document.querySelector(`#card-desc-${i + 1}`);
  const mover = document.querySelector(`#move-${i + 1}`)

  mover.addEventListener("click", ()=>{
    translate.classList.add("translate-y-1")
  
    setTimeout(() => {
      translate.classList.add("hidden")
    }, 200)
  
    // const add = (a, b) => return a + b
    
    // const titles = title.textContent;
    // const descriptions = description.textContent;
     
    //  questionTitle.innerHTML = titles;
    //  questionContent.innerHTML = descriptions;
    const borderedDiv = document.createElement("div")
    const CreatedTitle = document.createElement("h1")
    const CreatedDescription = document.createElement("p")
    
    borderedDiv.className = "display border-2 p-2 border-blue-900 rounded-lg"
    CreatedTitle.className = "text-3xl text-blue-900"
    CreatedDescription.className = "text-xl text-blue-900"
  
    CreatedTitle.innerHTML = title.textContent
    CreatedDescription.innerHTML = description.textContent
  
    borderedDiv.appendChild(CreatedTitle)
    borderedDiv.appendChild(CreatedDescription)
    holder.appendChild(borderedDiv)
  
   });
}