import { Button } from "react-bootstrap";
import signature from '../../assets/img/signature.png'
const About = () => {
    return (
        <div className="container about">
            <div className="row">
                <h1>About Me</h1>
            </div>
            <div className="row justify-content-spaceBetween">
                <div className="col-5">
                    <h3>Frontend Developer</h3>
                    <p>Dolor reprehenderit aut repudiandae maiores recusandae.
                        Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel.
                        Dolorem praesentium itaque fugiat placeat quas consequatur?</p>
                    <p> Consectetur consectetur nesciunt nesciunt blanditiis amet?
                        Quod quis unde aliquid excepturi laudantium?
                        Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores.
                        Alias ab consequatur?</p>
                    <img width={250} src={signature} alt="" />
                </div>
                <div className="col-5">
                    <h3>Personal Information</h3>
                    <ol>
                        <li><span>Name : </span>Tanisha</li>
                        <li><span>Age : </span>19</li>
                        <li><span>Residence : </span>Delhi</li>
                        <li><span>Address : </span> Arjun park, Najafgarh</li>
                        <li><span>Email : </span>tanisharajput9575@gmail.com</li>
                        <li><span>Phone : </span> 7042429575</li>
                    </ol>
                    <Button variant="outline-primary" className='text-uppercase'>download resume</Button>{' '}
                </div>
            </div>
        </div>
    );
}

export default About;
