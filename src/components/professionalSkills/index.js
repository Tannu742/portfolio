import ProgressBar from 'react-bootstrap/ProgressBar';

const ProfessionalSkiils = () => {
    return (
        <div className='container professionalSkills'>
            <div className='row'>
                <div className='col-9'>
                    <h2>Coding Skills</h2>
                    <ol>
                        <li>
                            <span>HTML</span>
                            <ProgressBar animated now={95} label={'95%'} />
                        </li>
                        <li>
                            <span>CSS</span>
                            <ProgressBar animated now={90} label={'90%'} />
                        </li>
                        <li>
                            <span>JAVASCRIPT</span>
                            <ProgressBar animated now={75} label={'75%'} />
                        </li>
                        <li>
                            <span>REACT</span>
                            <ProgressBar animated now={80} label={'80%'} />
                        </li>
                        <li>
                            <span>REDUX</span>
                            <ProgressBar animated now={75} label={'75%'} />
                        </li>
                        <li>
                            <span>REACT BOOTSTRAP</span>
                            <ProgressBar animated now={85} label={'85%'} />
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalSkiils;
