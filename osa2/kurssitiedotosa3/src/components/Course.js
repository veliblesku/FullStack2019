import React from 'react'


const Header = ({courses}) => {

  

  const Names = (
    courses.map(course => <h1 key={course.id}>{course.name}{Contents}</h1>
      )

  )
  console.log("id", {course[1]})

  const Contents = (
    courses.map(course => <h1 key={course.id}>{course.parts.name}</h1>
      )
  )
  console.log("MOROO",  courses.map(part => <h1 key={part.id}>{part.name}</h1>))
  
    

  
  return(
    <div>
        <div>
          {Names}
          
         
        </div>
        
          {/* <div>
              <Content course= {course}/>
              <Total course={course}/>
      </div> */}
    </div>
   
    
  )
}
const Content = ({course}) =>{
  return(
      <div>


        <table>
          <tbody>
            <tr>
            <td><Part part={course.parts[0]}/></td>
           
            </tr>
            <tr>
            
             <td><Part part={course.parts[1]}/></td>
             
            </tr>
            <tr>
           
             <td><Part part={course.parts[2]}/></td>
            </tr>
        
          </tbody>
        
         </table>
       
      </div>
  )
} 



 const Total = ({course}) =>{

  var initialValue = 0;
  var sum = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises
    ,initialValue
);

  const total = 
  course.parts.reduce( (s, p) => s + p)
  console.log(sum);
  
  
  return(
      <div>
          <p>
              
              Total {sum} tehtävää

       
              
          </p>
      </div>
  )
} 
const Part = ({part}) => {

  return(
      <div>
          <p>
               {part.name} {part.exercises}
          </p>
      </div>
  )
}


const Course = ({ courses }) => {



  return (
   
    <div>
      <Header courses={courses}/>
    </div>
  

 
    
  )
}

export default Course