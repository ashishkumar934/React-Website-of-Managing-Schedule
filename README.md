This website is build using the REACT and Firebase Database, Firebase hosting. Website url:-https://schedule-managing-app.web.app/.

Following are my personal notes :- 


Here We will discuss certain commands of the react for Learning:-

1. map 


var numbers = [1, 2, 3, 4, 5];   
const doubleValue = numbers.map((number)=>{   
    return (number * 2);   
});  

TRAVERSING THE LIST:-

  const listItems = myLists.map((myList) =>  
    <li>{myList}</li>  
  ); 



2. For Changing the INPUT in REact:-
const [input,setInput]=setState("");
<input value={input} onChange={(event) => setInput("hello")} />

3. For appending into the array of the states use (... array_name):-
  eg:- setTodos([...todos, { input }]);

4. preventDefault() in the submit function will prevent the page from refreshing itself.

5. disabled={!input} in the button if we want the button to be disabled when the input is None.

6. import the component from :- import Todo from "./Todo";

7. example of calling the component:-

	<ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}

8. We can add the material UI functionality by directly adding into the components.

9. g. When the app loads we want to fetch the data and update our page according to those values.
	so, for that use the REACT hook useEffect().

useEffect(function,dependancies); :- dependancies is array. Whenever a dependancy is changed useEffect hook is called.


10. Commands for collecting from the databse using useEffect:-
	useEffect(() => {
       db.collection("todos").onSnapshot((snapshot) => {
       setTodos(snapshot.docs.map((doc) => doc.data().todo_text));
       }) ;
       }, []);


    Commands for adding into the database:- 
	db.collection("todos").add({
      todo_text: input,
    });

11. Emoji Plugin is the Rocket Emoji.

12. Adding the timestamp in our data so that the data is sorted according to the time we have pushed the data.

		timestamp: firebase.firestore.FieldValue.serverTimestamp()

13. for sorting by the timestamp add .orderBy(key,"asecordesc") before the onSnapshot like:-

	db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo_text));
      });
  }, []);

14. adding the delete functionality:-
	we should keep the id to know which document we want to delete:-
	

15. attaching the Material Ui icon download the icon separately.
16. attach the modal. 



Following are the notes for setting the environment:- 

1. npx create-react-app app_name
2. npm start(if not running then do npm cache clean --force then again npm start).
3. If you don't have a package.json yet then you can create one with: npm init.
4. 

For the Firebase Database:- 
a. Go to console:- Add Project:- Continue:- Go to the Settings :- Click on the </> symbol.:- Register app by selecting any name:- Then install the CLI firebase for hosting:- Rest of the steps later on.
b. Go to console.:- click on the config and that data will help in configuration of our project.
After copying the config come afterwards on it. Now, develop the application.
c. Go to the Database.
d. Cloud Firestore: -database.



e. After developing the frontend look now we will connect it with the firebase:-

	install thr firebase:- npm i firebase:- It will install all the firebase dependancies.
import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
	config.
});

const db= firebaseApp.firestore(); // making a database file and exporting that.
export {db};

f. create database:- After creating the databse our next aim is to connect it to the react app and start pulling out the information.


e. after connecting the database and the functionalities. We can host our website.

	by following steps:- in terminal write (firebase init):- select hosting by pressing space and enter:- select the existing project:- select your project:- type build:- enter y:- then it's done :- run (npm run build):- firebase deploy. 















