import { useParams } from "react-router-dom";

const PetDetails = (props) => {

    const { petId } = useParams();
    const pet = props.pets.find(p => p.id === petId);

    if (!pet) return <div>Pet not found</div>;


    return (
        <>
        <h1>{pet.name}</h1>
        <dl>
            <dt>Breed: </dt>
            <dd>{pet.breed}</dd>
            <dt>Age: </dt>
            <dd>{pet.age} years old</dd>
        </dl>
        </>
    )
}

export default PetDetails