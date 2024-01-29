import './Education.css'

function Education() {

return (
    <section className='education'>
        <h2 className='education-title'>Education</h2>
        <ul className='education-container'>
            <li className='education-item'>
                <p className='education-item-data'>2021-2022</p>
                <p className='education-item-info'>Web-Developer training course</p>
                <p className='education-item-academy'>Practicum by Yandex</p>
            </li>
            <li className='education-item'>
                <p className='education-item-data'>2017</p>
                <p className='education-item-info'>Crisis management, degree</p>
                <p className='education-item-academy'>Plekhanov Russian University of Economics</p>
            </li>
            <li className='education-item'>
                <p className='education-item-data'>2015 - 2016</p>
                <p className='education-item-info'>Enterprise management, degree</p>
                <p className='education-item-academy'>The State University of Management</p>
            </li>
            <li className='education-item'>
                <p className='education-item-data'>2010-2014</p>
                <p className='education-item-info'>Lawyer, Master's degree</p>
                <p className='education-item-academy'>MFUA (Moscow Financial and Legal Academy)</p>
            </li>
            <li className='education-item'>
                <p className='education-item-data'>2007-2010</p>
                <p className='education-item-info'>Lawyer, Bachelor’s Degree</p>
                <p className='education-item-academy'>MFUA (Moscow Financial and Legal Academy)</p>
            </li>
        </ul>
    </section>
)
}

export default Education;