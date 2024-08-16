function addContent(){
     var box = document.getElementById("forms")
     box.style.display="flex";
     
}
function deleteContent(){
     var box = document.getElementById("contents");
     box.innerText="";
}
function modifyContent(){

}

function createCard() {
     var title = document.getElementById("title").value;
     var author = document.getElementById("author").value;
     var abstract = document.getElementById("abstract").value;
 
     // Validate inputs
     if (title === "" || author === "" || abstract === "") {
         alert("Please fill in all fields.");
         return;
     }
 
     var contents = document.getElementById("contents");
 
     // Create card element
     var card = document.createElement("div");
     card.className = "card"; // Assuming you have a CSS class for styling cards
 
     // Add content to the card
     card.innerHTML = `
         <h2>${title}</h2>
         <p><strong>Author:</strong> ${author}</p>
         <p><strong>Abstract:</strong> ${abstract}</p>
     `;
 
     // Append card to contents
     contents.appendChild(card);
 
     // Clear the form
     document.getElementById("title").value = "";
     document.getElementById("author").value = "";
     document.getElementById("abstract").value = "";
 
     // Hide the form
    
 }
function invisible(){
     var box = document.getElementById("forms");
     box.style.display="none";
}
