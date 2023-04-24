// 할 일을 저장할 배열을 선언합니다.
let todos = [];

// 항목을 추가하는 함수를 작성합니다.
function addItem(section) {
    const input = document.querySelector(`#input${section}`);
    const list = document.querySelector(`#list${section}`);
    const value = input.value;

    if (value === "") {
        alert("Please enter an item.");
        return;
    }

    const todo = {
        value: value,
        section: section,
        checked: false
    };

    todos.push(todo);
    input.value = "";
    displayList(list);
}

// 항목을 삭제하는 함수를 작성합니다.
function deleteItem(index) {
    todos.splice(index, 1);
    displayList();
}

// 할 일을 완료한 경우 체크하는 함수를 작성합니다.
function checkItem(index) {
    todos[index].checked = !todos[index].checked;
    displayList();
}

// 할 일 목록을 표시하는 함수를 작성합니다.
function displayList(list) {
    if (!list) {
        const list1 = document.querySelector("#list1");
        const list2 = document.querySelector("#list2");
        displayList(list1);
        displayList(list2);
        return;
    }

    list.innerHTML = "";

    todos.forEach((todo, index) => {
        if (todo.section !== parseInt(list.id.slice(-1))) {
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onclick="checkItem(${index})" ${todo.checked ? "checked" : ""}>
            <span
