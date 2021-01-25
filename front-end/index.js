function defineColor(element){
    const theNumber = element.value;
    const theUls = document.getElementsByTagName("ul");
    for(let ul of theUls){
        applyColor(ul, Math.abs(theNumber));
    }
}

function applyColor(ulElement, number) {
    const liItems = ulElement.getElementsByTagName("li");
    number = number % liItems.length;
    
    const currentSelection = ulElement.getAttribute("selected");
    if(currentSelection != null){
        ulElement.setAttribute("last-selected", currentSelection);
    }
    ulElement.setAttribute("selected", number);

    for(let i=0; i<liItems.length; i++){
        if(i == number){
            liItems[i].classList.add("selected");
        } else if (i == ulElement.getAttribute("last-selected")){
            liItems[i].classList = [];
            liItems[i].classList.add("last-selected");
        }else{
            liItems[i].classList = [];
        }
    }
}