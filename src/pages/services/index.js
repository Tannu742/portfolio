import CardBox from "../../components/card";
import s1_Img from '../../assets/img/wpDeveloping.png';
import s2_Img from '../../assets/img/uiux.png';
import s3_Img from '../../assets/img/webDesign.png';
import s4_Img from '../../assets/img/webDesign.png';


const Services = () => {
    console.log({ card });
    return (
        <div className="container services">
            <div className="row text-align-center">
                <h1>Services offers</h1>
                <p>Is give may shall likeness made yielding spirit a itself togeth created after sea
                    is in beast beginning signs open god you're gathering ithe</p>
            </div>
            <div className="row justify-content-spaceAround">
                {
                    card.map((item) => <CardBox key={item.id} text={item.describe} img={item.img} title={item.title} />)
                }
            </div>
        </div>
    );
}

export default Services;
