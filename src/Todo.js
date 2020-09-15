import React, { useState } from "react";
import "./todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  List,
  ListItemText,
  ListItem,
  Modal,
  makeStyles,
  Input,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [input, setInput] = useState("");

  {
    /*SimpleDateFormat sfd = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
sfd.format(new Date(props.todo.timestamp));*/
  }

  const updateTodo = (event) => {
    event.preventDefault();
    db.collection("todos")
      .doc(props.todo.id)
      .set({ todo_text: input }, { merge: true });
    setOpen(false);
  };

  const handleOpen = (event) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h2> I am a modal.</h2>
          <form>
            <Input
              placeholder={props.todo.todo_text}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={updateTodo}
            >
              Update Text
            </Button>
          </form>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo_text}
            secondary={props.todo.timestamp.toDate().toString()}
          />
        </ListItem>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Edit me
        </Button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          Delete Me
        </DeleteForeverIcon>
      </List>
    </>
  );
}

export default Todo;
