import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardBox from '../../components/card';
import TestimonalCard from '../../components/testimonals';
import Slide from '../../components/slide';
import me from '../../assets/img/pl.png';
import pdf from '../../assets/img/resume1.pdf';
import aa from '../../assets/img/aa.png';
import bb from '../../assets/img/bb.webp';
import cc from '../../assets/img/cc.png';
import dd from '../../assets/img/dd.png';
import ee from '../../assets/img/ee.png';

import { card, contact, testimonalCard } from '../../constants/data';


const Home = () => {
    return (
        <main role='main'>
            <section id='home' className='home p-4'>
                <Slide />
            </section>
            <section id='about' className='about banner p-4'>
                <Container>
                    <Row>
                        <Col className='aboutImg'>
                            <img width={400} src={me} alt="" />
                        </Col>
                        <Col>
                            <div className='head'>
                                <h1>About Me</h1>
                                <h2>About</h2>
                                <p className='py-4'>Passionate frontend developer crafting seamless and engaging
                                    user experiences through innovative design and cutting-edge technology.</p>
                                <ul className='list-unstyled px-md-0 px-2'>
                                    <li className='py-2'><span className='fw-bold'>Name : </span>Tanisha</li>
                                    <li className='py-2'><span className='fw-bold'>Age : </span>19</li>
                                    <li className='py-2'><span className='fw-bold'>Residence : </span>Delhi</li>
                                    <li className='py-2'><span className='fw-bold'>Address : </span>Najafgarh, New Delhi-43</li>
                                    <li className='py-2'><span className='fw-bold'>Email : </span>tanisharajput9575@gmail.com</li>
                                    <li className='py-2'><span className='fw-bold'>Phone : </span> 7042429575</li>
                                </ul>
                                <div className='download text-center'>
                                    <a href={pdf} download="Resume.pdf">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='resume' className='resume banner text-center p-4'>
                <Container>
                    <Row className='head text-center'>
                        <h1>My Resume</h1>
                        <h2>Resume</h2>
                        <p className='py-5'>
                            Passionate frontend developer crafting seamless and engaging
                            user experiences through innovative design and cutting-edge technology.</p>
                    </Row>
                    <Row className='justify-content-between'>
                        {
                            card.map((item) => <CardBox key={item.id} className={'col-3 m-2 cardBox'} para={item.para} title={item.title} year={item.year} />)
                        }
                    </Row>
                </Container>
            </section>
            <section id='services' className='services banner text-center p-4'>
                <Container>
                    <Row className='head'>
                        <h1>My Services</h1>
                        <h2>Services</h2>
                        <p className='py-5'>
                            Passionate frontend developer crafting seamless and engaging
                            user experiences through innovative design and cutting-edge technology.</p>
                    </Row>
                    <Row className='testimotionals'>
                        {
                            testimonalCard.map((item) => <TestimonalCard key={item.id} para={item.para} title={item.title} />)
                        }
                    </Row>
                </Container>
            </section>
            <section id='skills' className='skills banner text-center p-4'>
                <Container>
                    <Row className='head'>
                        <h1>My Skills</h1>
                        <h2>Skills</h2>
                        <p className='py-5'>
                            Passionate frontend developer crafting seamless and engaging
                            user experiences through innovative design and cutting-edge technology.</p>
                    </Row>
                    <Row>
                        <Col>
                            <ol className='list-unstyled px-md-0 px-2'>
                                <li>
                                    <span>HTML</span>
                                    <ProgressBar now={95} label={'95%'} />
                                </li>
                                <li>
                                    <span>CSS</span>
                                    <ProgressBar now={90} label={'90%'} />
                                </li>
                                <li>
                                    <span>JAVASCRIPT</span>
                                    <ProgressBar now={75} label={'75%'} />
                                </li>
                            </ol>
                        </Col>
                        <Col>
                            <ol className='list-unstyled px-md-0 px-2'>
                                <li>
                                    <span>REACT</span>
                                    <ProgressBar now={80} label={'85%'} />
                                </li>
                                <li>
                                    <span>REDUX</span>
                                    <ProgressBar now={75} label={'80%'} />
                                </li>
                                <li>
                                    <span>REACT BOOTSTRAP</span>
                                    <ProgressBar now={85} label={'85%'} />
                                </li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='projects' className='projects banner text-center p-4'>
                <Container>
                    <Row className='head'>
                        <h1>Our Projects</h1>
                        <h2>Projects</h2>
                        <p className='py-5'>
                            Passionate frontend developer crafting seamless and engaging
                            user experiences through innovative design and cutting-edge technology.</p>
                    </Row>
                    <Row className='m-2'>
                        <Col className='projectBox'>
                            <img className='image imgA' src={aa} width={450} alt="" />
                            <div className='middle'>
                                <div className="text">
                                    <Link rel='noreferrer' target='_blank' to={'https://glintsite.netlify.app/'}>GLINT SITE</Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='projectBox'>
                            <img className="image imgB" src={bb} width={600} alt="" />
                            <div className='middle'>
                                <div className="text">
                                    <Link rel='noreferrer' target='_blank' to={'https://instu.netlify.app/'}> INSTARGRAM SITE</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='m-2'>
                        <Col className='projectBox'>
                            <img className='image imgC' src={cc} width={500} alt="" />
                            <div className='middle'>
                                <div className="text">
                                    <Link rel='noreferrer' target='_blank' to={'https://spontaneous-cheesecake-604a3d.netlify.app/'}>VIMEO SITE</Link>
                                </div>
                            </div>
                        </Col>
                        <Col className='projectBox'>
                            <img className='image imgD' src={dd} width={550} alt="" />
                            <div className='middle'>
                                <div className="text">
                                    <Link rel='noreferrer' target='_blank' to={'https://burgerfast.netlify.app/'}>BURGER SITE</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Col className='m-2 projectBox'>
                        <img className='image imgE' width={550} src={ee} alt="" />
                        <div className='middle'>
                            <div className="text">
                                <Link rel='noreferrer' target='_blank' to={'https://shoppingshirt.netlify.app/'}>SHOPPING SITE</Link>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
            <section id='contact' className='contact banner text-center p-4'>
                <Container>
                    <Row className='head'>
                        <h1>Contact Me</h1>
                        <h2>Contact</h2>
                        <p className='py-5'>
                            Passionate frontend developer crafting seamless and engaging
                            user experiences through innovative design and cutting-edge technology.</p>
                    </Row>
                    <Row>
                        {
                            contact.map((item) => {
                                return (
                                    <div className='col-3 contact_list' key={item.id}>
                                        <div className='icon align-content-center my-3'><FontAwesomeIcon icon={item.icon} /></div>
                                        <h5>{item.title}</h5>
                                        <Link to={item.link} rel='noreferrer' target={item.id === 4 ? "_blank" : "_self"}>{item.para}</Link>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default Home;
