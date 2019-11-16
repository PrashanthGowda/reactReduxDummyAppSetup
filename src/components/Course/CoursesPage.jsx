import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends  React.Component {

   /*  state = {
        courses: {
            title: ''
        }
    }

    handleChange = event => {
        const courses = {...this.state.courses, title: event.target.value};
        this.setState({courses});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.courses);
    } */

    componentDidMount () {
        this.props.actions.loadCourses();
        this.props.actions.loadAuthors();
    }

    render() {
        return (
            <>
                <h2>Courses</h2>
                <CourseList courses={this.props.courses} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.authors.length === 0 ? [] : state.courses.map(course => {
            return {
                ...course,
                authorName: state.authors.find(a => a.id === course.userId).name
            }
        }),
        authors: state.authors
    }
}

function mapDispatchToProps (dispatch) {

    return {
        actions : {
            loadCourses : bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors : bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);