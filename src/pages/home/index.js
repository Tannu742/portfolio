import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardBox from '../../components/card';
import TestimonalCard from '../../components/testimonals';
import Slide from '../../components/slide';
import me from '../../assets/img/pl.png';

import { card, contact, testimonalCard } from '../../constants/data';

import pdf from '../../assets/img/resume1.pdf';

const Home = () => {
    return (
        <main role='main'>
            <section id='home' className='home p-4'>
                <Slide />
            </section>
            <section id='about' className='about banner p-4'>
                <Container>
                    <Row>
                        <Col>
                            <img width={400} src={me} alt="" />
                        </Col>
                        <Col>
                            <div className='head'>
                                <h1>About Me</h1>
                                <h2>About</h2>
                                <p className='py-4'>Passionate frontend developer crafting seamless and engaging
                                    user experiences through innovative design and cutting-edge technology.</p>
                                <ul className='list-unstyled px-md-0 px-2'>
                                    <li className='py-2'><span>Name : </span>Tanisha</li>
                                    <li className='py-2'><span>Age : </span>19</li>
                                    <li className='py-2'><span>Residence : </span>Delhi</li>
                                    <li className='py-2'><span>Address : </span>Najafgarh, New Delhi-43</li>
                                    <li className='py-2'><span>Email : </span>tanisharajput9575@gmail.com</li>
                                    <li className='py-2'><span>Phone : </span> 7042429575</li>
                                </ul>
                                <div className='download'>
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
                    <Row>
                        {
                            card.map((item) => <CardBox key={item.id} className={'col m-2 cardBox'} para={item.para} title={item.title} year={item.year} />)
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
                    <Row>

                    </Row>
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
                                    <div className='col contact_list' key={item.id}>
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
