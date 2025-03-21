    import React,{useState} from 'react';
//importing the source objects
        function MyComponento(){

        const [car,setCar]= useState({Year:2025,Manufacturer:"Ford",Model:"Raptor"}); 
        function handleYearChange(event){
            setCar(c=> ({...c, Year:event.target.value}));
        }    
        function handleManufacturerChange(event){
                setCar(c => ({...c, Manufacturer:event.target.value}));   
        }   
        function handleModelChange(event){
            setCar(c=>({...c, Model:event.target.value}));
        }
        return( <div>
        <p>Your favourite car is:{car.Year} {car.Manufacturer} {car.Model}, </p>

        <input type="number" value={car.Year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.Manufacturer} onChange={handleManufacturerChange}/><br/>
        <input type="text" value={car.Model} onChange={ handleModelChange}/>
            </div>);
    }
    export default MyComponento