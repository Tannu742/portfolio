import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import home from '../../assets/img/home.png';
const Home = () => {
    return (
        <div className='container home'>
            <div className='row justify-content-spaceBetween'>
                <div className='col-5'>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title className='text-uppercase'>hello!</Card.Title>
                            <Card.Text>
                                I'm a Web Designer
                            </Card.Text>
                            <Button variant="outline-primary" className='text-uppercase'>hire me</Button>{' '}
                            <Button variant="outline-primary" className='text-uppercase'>get cv</Button>{' '}
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-5'>
                    <img width={450} src={home} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
