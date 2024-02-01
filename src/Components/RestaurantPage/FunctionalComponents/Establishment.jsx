import {StyledComponents, StyledEstablishmentList} from "../Styles/StyledComponents";

export const Establishment = ({ establishment }) => {
    const estMock ={
        id: 1,
        name: "name",
        imageUrl: "https://learnrussianlanguage.net/wp-content/uploads/2019/11/64a49ba01cbd346245cf2f019689f59d.jpg",
        // imageUrl: "https://media.discordapp.net/attachments/1045720492318928906/1202536734592598047/restoran-ruski.jpg?ex=65cdd09b&is=65bb5b9b&hm=845ee2241b05b664fb179b19ca14262a863d2366d7754f3aa31bf6619b61a2f9&=&format=webp&width=990&height=670",
        description: "description",
        address: "address"
    }
    establishment = estMock
    // establishments
    return (
        <StyledEstablishmentList>
                <StyledComponents key={establishment.id}>
                    <img src={establishment.imageUrl} alt={establishment.name} />
                    <p>{establishment.name}</p>
                    <p>{establishment.description}</p>
                    <p>{establishment.address}</p>
                </StyledComponents>
        </StyledEstablishmentList>
    );
}