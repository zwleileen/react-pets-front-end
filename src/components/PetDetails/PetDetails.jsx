import { useNavigate, useParams } from "react-router-dom";

const PetDetails = (props) => {

    const navigate = useNavigate()

    const { petId } = useParams();
    const pet = props.pets.find(p => p.id === petId);

    if (!pet) return <div>Pet not found</div>;

    const handleDelete = () => {
        props.deletePet(pet.id);
        navigate('/pets');
    }


    return (
        <>
        <h1>{pet.name}</h1>
        <dl>
            <dt>Breed: </dt>
            <dd>{pet.breed}</dd>
            <dt>Age: </dt>
            <dd>{pet.age} years old</dd>
        </dl>
            <button onClick={()=>navigate(`/pets/${petId}/edit`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default PetDetails