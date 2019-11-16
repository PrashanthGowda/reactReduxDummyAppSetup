import React from 'react';
import {Link} from 'react-router-dom';
import './Course.css'

const CourseList = ({courses}) => (
<table>
<thead>
  <tr>
    <th>User</th>
    <th>C ID</th>
    <th>Title</th>
    <th>Body</th>
  </tr>
  </thead>
  <tbody>
  {courses.map(course => (
    <tr key={course.id}>
        <td>{course.authorName}</td>
        <td>{course.id}</td>
        <td> <Link to={'/course/'+course.id}>{course.title}</Link></td>
        <td>{course.body}</td>
    </tr>   
  ))}
  </tbody>
</table>    
)

export default CourseList;