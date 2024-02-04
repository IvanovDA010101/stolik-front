import {
    StyledFooter,
    StyledFooterBottom,
    StyledFooterBottomA,
    StyledFooterBottomH3,
    StyledFooterBottomP, StyledFooterSpan, Title,
} from "../Styles/StyledComponents";

const Footer = () => {

    const textMain = "Главная"
    const textAboutMe = "О нас"


    return (
        <StyledFooter>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:'center'}}>
            <div>
                <h2 style={{color:"orange"}}>Reserve<span style={{color:"yellow"}}>Easy</span></h2>
            </div>
            <div>
                <ul style={{display: "flex", gap:"20px", listStyle:"none", cursor:"pointer"}}>
                    <a>{textMain}</a>
                    <a>{textAboutMe}</a>
                </ul>
            </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems:"center", gap: "20px"}}>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <h3>TableBooky.com | All rights reserve</h3>
                    </div>
                </div>
            </div>
        </StyledFooter>
    );

}
export default Footer
