const form = document.querySelector("form");
const modal = document.querySelector(".modal");
const messageP = document.querySelector(".modal > p"); 
const close = document.querySelector(".close");


form.addEventListener(
    "submit",
    (e)=>{
        e.preventDefault();
        const data = new FormData(form);
        const dataObj = Object.fromEntries(data);
        console.log(dataObj)
        postForm(dataObj);

        form.reset();
    }
)

//HELPER FUNCTIONS
async function postForm(data) {
    try {
        const sent = await fetch(
            "https://httpbin.org/post", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(data)
            }     
        )
        const response = await sent.json();
        console.log("Success Response: ", response)
        showModal("Your response has been recorded.") 
    } catch (error) {
        console.log("Error: ", error)
        showModal("Oops! Something went wrong.")
    }

}

function showModal(message){
    messageP.textContent = message;
    modal.style.display = "block";
}

close.addEventListener(
    "click",
    ()=>{
        modal.style.display = "none";
    }
)