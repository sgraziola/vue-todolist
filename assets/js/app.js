/* 
Esercizio:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
    -text, una stringa che indica il testo del todo
    -done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/
const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        text: "",
        done: false,
      },

      warning: false,

      tasks: [
        {
          text: "Insalata",
          done: true,
        },

        {
          text: "Pomodori",
          done: false,
        },

        {
          text: "Tonno",
          done: true,
        },

        {
          text: "Uova",
          done: false,
        },
      ],
    };
  },
  methods: {
    removeTask(index) {
      //console.log("Ho cliccato sulla X", index);
      this.tasks.splice(index, 1);
    },

    addTask() {
      //console.log("ho cliccato");
      console.log(this.newTask.text.length);

      if (this.newTask.text.length < 4 || this.newTask.text.trim().length === 0) {
        this.warning = true;
      } else {
        this.warning = false;
        this.tasks.unshift(this.newTask);
        //console.log(this.tasks);
        //manca come pulire l'input text
        this.newTask = {
          text: "",
          done: false,
        };
      }
    },

    barred(index) {
      //console.log("cliccato sul testo di" ,index);
      //console.log(this.tasks[index].done);
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
}).mount("#app");
