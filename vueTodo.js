localStorage 저장 추가  ( 2021.09.23 )

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
        <span @click="toggleTodo(todo, index, $event)" v-bind:class="{complete: todo.complete}">{{ todo.text }}</span>
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
    todos: [],
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

      this.maxID = Number(this.maxID) + 1;

      var value = {
        id: this.maxID,
        complete: false,
        text: this.message,
      };

      console.log("maxid =", this.maxID);

      localStorage.setItem(this.maxID, JSON.stringify(value));
      this.todos.push(value);

      this.message = "";
    },

    delTodo: function (todo, index) {
      console.log("delTodo", todo.id, index);
      localStorage.removeItem(todo.id);
      this.todos.splice(index, 1);
    },

    toggleTodo: function (todo, index, e) {
      let elm = e.target;
      if (elm.getAttribute("class") === "complete") {
        elm.removeAttribute("class");
        this.todos[index].complete = false;
      } else {
        elm.setAttribute("class", "complete");
        this.todos[index].complete = true;
      }
      localStorage.setItem(this.todos[index].id, JSON.stringify(this.todos[index]));
    },
  },

  created() {
    let sortable = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        sortable.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);
      }
    }

    sortable.sort(function (a, b) {
      return a[0] - b[0];
    });

    for (var td in sortable) {
      this.todos.push(JSON.parse(sortable[td][1]));
      this.maxID = sortable[td][0];
    }
  },
});

