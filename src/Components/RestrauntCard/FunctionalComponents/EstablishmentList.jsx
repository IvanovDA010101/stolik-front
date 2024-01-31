import {StyledComponents, StyledEstablishmentList} from "../Styles/StyledComponents";

export const EstablishmentList = ({ establishments }) => {
    const estMock ={
        id: 1,
        name: "name",
        imageUrl: "https://learnrussianlanguage.net/wp-content/uploads/2019/11/64a49ba01cbd346245cf2f019689f59d.jpg"
    }
    for (let i = 0; i < 9; i++) { // выведет 0, затем 1, затем 2
        establishments = establishments.concat(estMock)
    }
    // establishments
    return (
        <StyledEstablishmentList>
            {establishments.map((establishment) => (
                <StyledComponents key={establishment.id}>
                    <img src={establishment.imageUrl} alt={establishment.name} />
                    <p>{establishment.name}</p>
                </StyledComponents>
            ))}
        </StyledEstablishmentList>
    );
}