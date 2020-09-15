import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // It runs once when the app loads.
  useEffect(() => {
    // this code here fire when the app loads...
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo_text: doc.data().todo_text,
            timestamp: doc.data().timestamp,
          }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //It will stop the refresh
    db.collection("todos").add({
      todo_text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1> Ashish Kumar Schedule List</h1>
      <form>
        <FormControl>
          <InputLabel>Write your schedule here...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          type="submit"
          disabled={!input}
        >
          Add List
        </Button>
      </form>

      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
