import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const PetEditForm = (props) => {
    const { petId } = useParams();
    const navigate = useNavigate();
    const [editForm, setEditForm] = useState({
        name: "",
        breed: "",
        age: "",
        id: ""
    })

    //Notes: Runs when the component first mounts AND whenever props.pets or petId changes (because they're in the dependency array)
    useEffect(() => {
        const pet = props.pets.find(p => p.id === petId);
        if (pet) { 
            setEditForm(pet);
        }
    }, [props.pets, petId]);
    

    const pet = props.pets.find(p => p.id === petId);
    if (!pet) return <div>Loading...</div>;


    const handleSubmit = (event) => {
        event.preventDefault();
        props.editPet(editForm);
        navigate(`/pets/${petId}`);
    }

    const handleChange = ({target}) => {
        setEditForm({
            ...editForm, [target.name]:target.value
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit {pet.name}</h1>
            <label htmlFor="name">Name: </label>
            <input 
                type="text" 
                id="name"
                name="name" 
                value={editForm.name} 
                onChange={handleChange}
            />
            <label htmlFor="breed">Breed: </label>
            <input 
                type="text" 
                id="breed"
                name="breed" 
                value={editForm.breed} 
                onChange={handleChange}
            />
            <label htmlFor="age">Age: </label>
            <input 
                type="number" 
                id="age"
                name="age" 
                value={editForm.age} 
                onChange={handleChange}
            />
            <button type="submit">Save changes</button>
            <button type="button" onClick={()=>navigate(`/pets/${petId}`)}>Cancel</button>
        </form>
    )
}

export default PetEditForm