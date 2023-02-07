function fTabs(event){
    if(event.target.className == 'tab-h'){
        var dataTab = event.target.getAttribute('data-tab');
        var  tabH = document.getElementsByClassName('tab-h');
        for(let i = 0; i < tabH.length; i++){
            tabH[i].classList.remove('active');
        }
        event.target.classList.add('active');
        var tabBody = document.getElementsByClassName('tab-b');
        for(var  i = 0; i < tabBody.length; i++){
            if(dataTab==i){
                tabBody[i].style.display = 'block';
            } else{
                tabBody[i].style.display = 'none';
            }   
        }
    }
}

var currentTab = 0;

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  let btn = document.getElementById("nextBtn")
  if (n == (x.length - 2)) {
    btn.innerHTML = "հաստատել"
    btn.classList.add('submit_btn')
  } else {
    document.getElementById("nextBtn").innerHTML = "հաջորդը";
    btn.classList.remove('submit_btn')
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;

  if (currentTab >= x.length-1) {
    
    document.getElementById("regForm").submit();
    document.location.href = "./thanks.html"

    return false;
  }
  showTab(currentTab);
}


function validateForm() {
  var valid = true;

  return valid;
}


function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}



function block_fun(event, num) {
  if(num == 1){
    let tariq_block = document.querySelector('.tariq_block')
    event.target.checked 
    ? tariq_block.removeAttribute("disabled", "true")
    : tariq_block.setAttribute("disabled", "true")
  } else if(num == 2){
    let persCount_block = document.querySelector('.persCount_block')
    event.target.checked 
    ? persCount_block.removeAttribute("disabled", "true")
    : persCount_block.setAttribute("disabled", "true")
  } 
}



function hide(event){
  let input = event.target
  let parent = input.parentNode.parentNode
  let hidden_block = parent.querySelector('.hidden_block')

  if(input.checked){
    hidden_block.style.display = 'block'
  } else if(!input.checked){
    hidden_block.style.display = 'none'
  }
}