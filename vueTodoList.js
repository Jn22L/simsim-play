// vue CDN 으로 TODOLIST 만들어 보기 ( 2021.09.17 추석연휴 전날 )

// index.html

<html>
  <head>
    <link rel="stylesheet" href="index.css" />
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <input v-model="message" v-on:keyup.13="addTodo" ref="inputMessage" />
      <button @click="addTodo">등록</button>
      <li v-for="(todo, index) in todos" v-bind:key="todo.id">
        <span @click="toggleTodo(todo, index, $event)">{{ todo.text }}</span>
        <button @click="delTodo(todo, index)" class="btn">❌</button>
      </li>
    </div>
    <script src="index.js"></script>
  </body>
</html>


// index.js

var app = new Vue({
  el: "#app",
  data: {
    message: "",
    maxID: 2,
    todos: [
      { id: 0, text: "할일111" },
      { id: 1, text: "할일222" },
    ],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    addTodo: function () {
      if (this.message === "") {
        alert("할일을 입력해 주세요.");
        this.$refs.inputMessage.focus();
        return;
      }
      this.maxID += 1;
      this.todos.push({ id: this.maxID, text: this.message });
      this.message = "";
    },
    delTodo: function (todo, index) {
      console.log("delTodo", todo, index);
      this.todos.splice(index, 1);
    },
    toggleTodo: function (todo, index, e) {
      //let parentElm = e.target.parentNode;
      //parentElm.getAttribute("class") === "complete" ? parentElm.removeAttribute("class") : parentElm.setAttribute("class", "complete");
      let elm = e.target;
      elm.getAttribute("class") === "complete" ? elm.removeAttribute("class") : elm.setAttribute("class", "complete");
    },
  },
});

// index.css

html,
body {
  margin: 5px;
  padding: 0;
}
.btn {
  cursor: pointer;
  border: none;
  background: transparent;
}
.complete {
  background: yellow;
}
