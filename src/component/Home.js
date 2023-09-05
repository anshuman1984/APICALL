import React from 'react'

const Home = () => {
    let studentData=[{name:"Chinna",age:25,class:"5th"},
    {name: "ram",age: 24,class :"6th"},
    {name:"jam",age : 19,class :"8th"}];
 
return(
    <>
    <table>
        <tr>
            <td>name</td>
            <td>age</td>
            <td>class</td>
        </tr>
        <tbody>{studentData?.map((data)=>(
            <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.class}</td>
            </tr>)
        )}
        </tbody>
    </table>

    </>

)
}
export default Home