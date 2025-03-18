import React from 'react';

function Button() {
    // Define button styles
    const styles = {
        backgroundColor: 'rgb(200, 100, 50)', 
        color: 'azure',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    // Define handleClick function
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button 
            className="button" 
            style={styles} 
            onClick={handleClick} // Corrected event handler
        >
            Click Me
        </button>
    );
}

export default Button;
