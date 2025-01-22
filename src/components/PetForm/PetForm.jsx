import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PetForm = (props) => {

    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        age: "",
        id: ""
    })

    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addPet(formData);
        setFormData({
            name: "",
            breed: "",
            age: "",
            id: ""
        });
        navigate('/pets')
    }

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    return (
    <form onSubmit={handleSubmit}>
        <h1>Add New Pet</h1>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
            <label htmlFor="breed">Breed: </label>
            <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleChange}/>
            <label htmlFor="age">Age: </label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
    )
}

export default PetForm;