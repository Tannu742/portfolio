import CardBox from '../card';

const Education = () => {
    const card = [
        { id: 1, title: 'Schooling', footerText: 'I have completed my matric and intermediate', text: 'By CBSE Board' },
        { id: 2, title: 'College', footerText: 'Bachelor of Commerce', text: 'It is a Bachelor\'s undergraduate degree ' },
    ]
    return (
        <div className='Education'>
            {
                card.map((item) => <CardBox key={item.id} text={item.text} footerText={item.footerText} title={item.title} />)
            }
        </div>
    )
}

export default Education;
