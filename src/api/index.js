const localStorageKey = 'tasks';

function _setTasks(tasks = []) {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}


function getAllTasks() {
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
}

function getTaskById(taskId) {
    console.log('taskId: ',taskId)
    return getAllTasks().find(task => task.id === +taskId);
}

function deleteTask(taskId) {
    const tasks = getAllTasks().filter(task => task.id !== taskId.toString());
    _setTasks(tasks);
}

function createTask(newTask) {
    const tasks = getAllTasks();
    tasks.push(newTask);
    _setTasks(tasks);
}

function editTask(task) {
    let indexToBeEdit
    let tasks=getAllTasks()
    tasks.forEach((item, index) => {
        if (item.id === task.id.toString()) {
            indexToBeEdit = index
        }
        tasks[indexToBeEdit]=task
    })
    _setTasks(tasks);
}


export const api = {
    getAllTasks,
    getTaskById,
    deleteTask,
    createTask,
    editTask
};
