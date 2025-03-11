function Button(){
    const styles = {
        backgroundColor: 'rgb(200, 100, 50)', // Corrected property name
        color: 'azure',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <button className="button" style={styles}>Click Me</button>
    );
}

export default Button;
