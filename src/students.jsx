import PropTypes from 'prop-types'; // Corrected the import statement

function Student(props) {
    return (
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Defining the prop types for the Student component
Student.propTypes = {
    name: PropTypes.string.isRequired, // Added isRequired to indicate that name is required
    age: PropTypes.number.isRequired,  // Added isRequired to indicate that age is required
    isStudent: PropTypes.bool.isRequired // Added isRequired to indicate that isStudent is required
};
Student.defaultProps ={
name: "Guest",
age: 0,
isStudent: false  
};
export default Student;
