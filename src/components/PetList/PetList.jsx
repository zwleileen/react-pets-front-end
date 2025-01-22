import { NavLink, Outlet, useNavigate } from "react-router-dom";

const PetList = (props) => {
    const navigate = useNavigate();


    return(
        <>
        <div className="petlist">
        <h1>Pet List</h1>
        <ul>
            {props.pets.map((pet) => (
                <li key={pet.id}><NavLink to={`/pets/${pet.id}`}>{pet.name}</NavLink></li>))}
        </ul>
        <button onClick={() => navigate('/pets/new')}>New Pet</button>
        </div>

        <div className="petdetail">
            <Outlet/>
        </div>
        </>
    )
}

export default PetList