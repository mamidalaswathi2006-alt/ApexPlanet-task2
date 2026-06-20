// Navigation

function showSection(sectionId){

    let sections =
    document.querySelectorAll(".section");

    sections.forEach(section=>{
        section.classList.remove("active");
    });

    document
    .getElementById(sectionId)
    .classList.add("active");
}


// Contact Form Validation

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message").value.trim();

    let result =
    document.getElementById("formMessage");

    if(
        name === "" ||
        email === "" ||
        message === ""
    ){
        result.style.color="red";
        result.textContent=
        "Please fill all fields.";
        return;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        result.style.color="red";
        result.textContent=
        "Enter a valid email.";
        return;
    }

    result.style.color="green";
    result.textContent=
    "Form submitted successfully!";

    this.reset();
});


// To-Do List

function addTask(){

    let input =
    document.getElementById("taskInput");

    let task =
    input.value.trim();

    if(task===""){
        alert("Please enter a task.");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${task}</span>

        <div class="task-buttons">
            <button class="complete-btn">
                ✓ Complete
            </button>

            <button class="delete-btn">
                Delete
            </button>
        </div>
    `;

    li.querySelector(".complete-btn")
    .addEventListener("click",function(){

        li.querySelector(".task-text")
        .classList.toggle("completed");

        if(this.textContent === "✓ Complete"){
            this.textContent = "Undo";
        }else{
            this.textContent = "✓ Complete";
        }
    });

    li.querySelector(".delete-btn")
    .addEventListener("click",function(){
        li.remove();
    });

    document
    .getElementById("taskList")
    .appendChild(li);

    input.value="";
}