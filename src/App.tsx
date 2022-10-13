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
    let [students,setStudents] = useState<Student[]>(studentData)
    let[input,setInput] = useState<Student>({} as Student)
    console.log(studentData)

    console.log(input)
  
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


      <form 
      onSubmit={e=>{
        e.preventDefault()
        let newStudent = {
          name: e.target.student.value,
          submissions: {
            beavers: Number(e.target.beavers.value),
            stars: Number(e.target.stars.value)
          },
        };
        setInput(newStudent)
        setStudents([...students,input])
        // studentData.push(newStudent)
      }}
      >
        <label>
          AddStudent
          <input type="text" name ="student" />
        </label>
        <label>
          Add Beavers
          <input type="number" name ="beavers"/>
        </label>
        <label>
          Add Stars
          <input type="number" name ="stars"/>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
