import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';

const ManageCoursesPage = ({ courses, authors, loadAuthors, loadCourses }) => {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses();
    }
    if (authors.length === 0) {
      loadAuthors();
    }
  }, []);

  return <h2>Manage Course</h2>;
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
    authors: state.authors
  };
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursesPage);
