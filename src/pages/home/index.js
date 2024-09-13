import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardBox from '../../components/card';
import TestimonalCard from '../../components/testimonals';
import Slide from '../../components/slide';
import me from '../../assets/img/pl.png';
import pdf from '../../assets/img/resume1.pdf';


import Heading from '../../components/Heading';
import { about, card, contact, Progress, projects, testimonalCard } from '../../constants/data';


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
                                <Heading headingType='H2' title='About Me' placeholder='About' />
                                <ul className='list-unstyled px-md-0 px-2'>
                                    {
                                        about.map((item) => {
                                            return (
                                                <li className='py-2' key={item.id}><span className='fw-bold'>{item.title} </span>{item.about}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <a className='download text-center text-decoration-none' href={pdf} download="Resume.pdf">Download CV</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='resume' className='resume banner text-center p-4'>
                <Container>
                    <Heading headingType='H2' title='My Resume' placeholder='Resume' />
                    <Row className='justify-content-between'>
                        {
                            card.map((item) => <CardBox key={item.id} className={'col m-2 cardBox'} para={item.para} title={item.title} year={item.year} />)
                        }
                    </Row>
                </Container>
            </section>
            <section id='services' className='services banner text-center p-4'>
                <Container>
                    <Heading headingType='H2' title='My Services' placeholder='Services' />
                    <Row className='testimotionals'>
                        {
                            testimonalCard.map((item) => <TestimonalCard key={item.id} para={item.para} title={item.title} iconName={item.icon} />)
                        }
                    </Row>
                </Container>
            </section>
            <section id='skills' className='skills banner text-center p-4'>
                <Container>
                    <Heading headingType='H2' title='My Skills' placeholder='skills' />
                    <Row>
                        {
                            Progress.map((item) => {
                                return (
                                    <Col lg='6' key={item.id}>
                                        <div className='list-unstyled px-md-0 px-2'>
                                            <span>{item.title}</span>
                                            <ProgressBar now={item.now} label={item.label} />
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
            <section id='projects' className='projects banner text-center p-4'>
                <Container>
                    <Heading headingType='H2' title='My Projects' placeholder='Projects' />
                    <Row className='m-2 justify-content-center'>
                        {
                            projects.map((item) => {
                                return (
                                    <div className='col-6' key={item.id}>
                                        <div className='my-2 projectBox'>
                                        <Image className='image' src={item.img} fluid />
                                            <div className='middle'>
                                                <Link rel='noreferrer' target='_blank' className='text' to={item.link}>{item.title}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
            <section id='contact' className='contact banner text-center p-4'>
                <Container>
                    <Heading headingType='H2' title='Contact Me' placeholder='Contact' />
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
