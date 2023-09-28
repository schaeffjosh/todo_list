function addTask() {
  //create task element and list item
  let li = document.createElement("li");
  let inputValue = prompt("Task:");
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.classList.add("runningTask");

  //check for no input
  if (inputValue === '') {
      alert("You must write something!");
  } else if (inputValue.length > 30) {
      alert("Too long! Try to summarize the task.");
  } else {
      document.querySelector("#tasks").appendChild(li);
  }

  //create check button and allow move to Done list
  let done = document.querySelector("#done");

  let check = document.getElementsByClassName("check");
  let chkSpan = document.createElement("SPAN");
  let cm = document.createTextNode("\u2713");
  chkSpan.className = "check";
  chkSpan.appendChild(cm);
  li.appendChild(chkSpan);
  for (i = 0; i < check.length; i++) {
    check[i].onclick = function() {
      let div = this.parentElement;
      this.remove(chkSpan);
      done.appendChild(div);
    }
  }

  //create close button and allow to hide item
  let close = document.getElementsByClassName("close");
  let clsSpan = document.createElement("SPAN");
  let ex = document.createTextNode("\u00D7");
  clsSpan.className = "close";
  clsSpan.appendChild(ex);
  li.appendChild(clsSpan);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.remove();
    }
  }
}