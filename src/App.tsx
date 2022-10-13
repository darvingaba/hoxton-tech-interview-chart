import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./App.css";
const studentData = [
  {
    name: "Stephen",
    submissions: {
      beavers: 3,
      stars: 2,
    },
  },
  {
    name: "Eduardo",
    submissions: {
      beavers: 7,
      stars: 1,
    },
  },
  {
    name: "Pepe",
    submissions: {
      beavers: 6,
      stars: 9,
    },
  },
  {
    name: "Gigachad",
    submissions: {
      beavers: 0,
      stars: 10,
    },
  },
  
];

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom
type Student = {
  
    name: string,
    submissions: {
      beavers: number,
      stars: number,
    },
}
function App() {

  // let [item, setItem] = useState<Student[]>([]);
  // let [input, setInput] = useState<Student>({} as Student); 

  // const saveInput = (e) => {
  //   setInput(e.target.value);
  // };
  // const addNewItem = () => {
  //   const copyCart = [...item];
  //   copyCart.push(input);
  //   setItem(copyCart);
  //   setInput({} as Student);
  // };
  return (
    <>
      <BarChart width={600} height={300} data={studentData}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          dataKey="submissions.beavers"
          fill="#da9249"
          barSize={30}
        />
        <Bar dataKey="submissions.stars" fill="#ffd700" barSize={30} />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>


      {/* <form onSubmit={
        e=>{
          e.preventDefault()
            const setInput = ({
            name: e.target.name.value,
            submissions: {
            beavers: e.target.beavers.value,
            stars: e.target.stars.value,
    },
          })
        }
      }>
        <label>
          AddStudent
          <input type="text" name ="student" value={input.name}/>
        </label>
        <label>
          Add Beavers
          <input type="number" name ="beavers" value={input.submissions.beavers}/>
        </label>
        <label>
          Add Stars
          <input type="number" name ="stars" value={input.submissions.stars}/>
        </label>
        <button>Submit</button>
      </form> */}
    </>
  );
}

export default App;
