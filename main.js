//**MILESTONE 1**
//Stampare all'interno di una lista HTML un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo
//del todo sbarrato.
//**MILESTONE 2**
//Visualizzare a fianco ad ogni item ha una "x": cliccando su di
//essa, il todo viene rimosso dalla lista.
//**MILESTONE 3**
//Predisporre un campo di input testuale e un pulsante
//"aggiungi": cliccando sul pulsante, il testo digitato viene letto
// e utilizzato per creare un nuovo todo, che quindi viene aggiunto
// alla lista dei todo esistenti.

const app = Vue.createApp({
  data() {
    return {
      todoList: [
        {
          text: "fare il bucato",
          done: true,
        },
        {
          text: "stendere i panni",
          done: false,
        },
        {
          text: "rifare il letto",
          done: false,
        },
        {
          text: "portare fuori il cane",
          done: true,
        },
      ],
    };
  },

  methods: {
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
});

app.mount("#app");
