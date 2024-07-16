import { Nav } from "react-bootstrap";
import Education from "../../components/education";
import { useState } from "react";
import ProfessionalSkiils from "../../components/professionalSkills";
import Experience from "../../components/experience";

const tabs = { education: 'EDUCATION', profession: 'PROFESSION', experience: 'EXPERIENCE' }

const Skills = () => {
    const [tab, setTab] = useState(tabs.education);
    return (
        <div className="container skills">
            <div className="row">
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link onClick={() => setTab(tabs.education)} className={tab === tabs.education ? 'active' : ''} href="#" eventKey="link-1">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => setTab(tabs.profession)} className={tab === tabs.profession ? 'active' : ''}eventKey="link-2"> Professional Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => setTab(tabs.experience)} className={tab === tabs.experience ? 'active' : ''} eventKey="link-3">Experience</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div>
            { tab === tabs.education && <Education/> }
            { tab === tabs.profession && <ProfessionalSkiils/> }
            { tab === tabs.experience && <Experience/> }
            </div>
        </div>
    );
}

export default Skills;
