// functions for list operations and notifications
function newItem() {
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    showToast("liveToastError");
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = taskValue;
    const closeSpan = document.createElement("span");
    closeSpan.className = "close";
    closeSpan.textContent = "\u00D7";
    listItem.appendChild(closeSpan);
    document.getElementById("list").appendChild(listItem);
    taskInput.value = "";
    showToast("liveToastSuccess");
  }
}

function showToast(toastId) {
  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

//listeners
document.getElementById("liveToastBtn").addEventListener("click", newItem);

document.getElementById("task").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    newItem();
  }
});

document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.classList.contains("close")) {
    event.target.parentElement.remove();
  }
});
