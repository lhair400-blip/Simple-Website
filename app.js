function saveData(key,data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function addTask() {
    const input = document.getElementById("taskInput");

    if (!input || input.value.trim() === "") return;

    const tasks = getData("tasks");

    tasks.push({
        text:input.value,
        completed: false
    });

    saveData("tasks", tasks);
    input.value = "";
    loadTasks();
}

function loadTasks() {
    const list = document.getElementById("taskList");

    if (!list) return;

    list.innerHTML = "";
    const tasks = getData("tasks");

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "list-item";

        div.innerHTML =`
            <span class = "${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <div>
                <button onclick="toggleTask(${index})">✓</button>
                <button class="delete-btn" onclick="deleteTask(${index})">X</button>
            </div>
        `;

        list.appendChild(div);
    });
}

function toggleTask(index) {
    const tasks = getData("tasks");
    tasks[index].completed = !tasks[index].completed;
    saveData("tasks", tasks);
    loadTasks();
}

function deleteTask(index) {
    const tasks = getData("tasks");
    tasks.splice(index, 1);
    saveData("tasks", tasks);
    loadTasks();
}

function addNote(){
    const input = document.getElementById("noteInput");

    if (!input || input.value.trim() === "") return;

    const notes = getData("notes");

    notes.push(input.value);
    saveData("notes", notes);
    input.value = "";
    loadNotes();
}

function loadNotes() {
    const list = document.getElementById("noteList");

    if (!list) return;

    list.innerHTML = "";
    const notes = getData("notes");

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "list-item";

        div.innerHTML =`
            <span>${note}</span>
            <button class = "delete-btn"
            onclick="deleteNote(${index})">Delete</button>
        `;

        list.appendChild(div);
    });
}

function deleteNote(index) {
    const notes = getData("notes");
    notes.splice(index, 1);
    saveData("notes", notes);
    loadNotes();
}

function addGoal() {
    const input = document.getElementById("goalInput");

    if (!input || input.value.trim() === "") return;
    const goals = getData("goals");

    goals.push(input.value);
    saveData("goals", goals);
    input.value = "";
    loadGoals();
}

function loadGoals() {
    const list = document.getElementById("goalList");

    if (!list) return;

    list.innerHTML = "";
    const goals = getData("goals");

    goals.forEach((goal, index) => {
        const div = document.createElement("div");
        div.className = "list-item";

        div.innerHTML =`
            <span>${goal}</span>
            <button class = "delete-btn"
            onclick = "deleteGoal(${index})">Delete</button>
        `;

        list.appendChild(div);
    });
}

function deleteGoal(index) {
    const goals = getData("goals");
    goals.splice(index, 1);
    saveData("goals", goals);
    loadGoals();
}

window.onload = () => {
    try {
        loadTasks();
        loadNotes();
        loadGoals();
    } catch (error) {
        console.error(error);
    }
};