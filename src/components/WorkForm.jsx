import { useState } from 'react';

function WorkEntry(props) {

    function handleChange(e) {
        
    }

    return (
        <>
            <div className='workEntryNum'>Entry Number: {props.num}</div>
            <div className='form-row'>
                <label>
                    <div>Company</div>
                    {props.saved
                        ? <div className='saved-item'>{props.company}</div>
                        : <input
                            type='text'
                            id='company'
                            name='company'
                            value={props.company} 
                            onChange={e => props.setCompany(e.target.value)} />
                    }
                </label>
                <label>
                    <div>Position/Title</div>
                    {props.saved
                        ? <div className='saved-item'>{props.position}</div>
                        : <input
                            type='text'
                            id='position'
                            name='position'
                            value={props.position}
                            onChange={e => props.setPosition(e.target.value)} />
                    }
                </label>
            </div>
            <div className='form-row'>
                <label>
                    <div>Start Date</div>
                    {props.saved
                        ? <div className='saved-item'>{props.dateStart}</div>
                        : <input
                            type='date'
                            id='dateStart'
                            name='dateStart'
                            value={props.dateStart}
                            onChange={e => props.setDateStart(e.target.value)} />
                    }
                </label>
                <label>
                    <div>End Date</div>
                    {props.saved
                        ? <div className='saved-item'>{props.dateEnd}</div>
                        : <input
                            type='date'
                            id='dateEnd'
                            name='dateEnd'
                            value={props.dateEnd}
                            onChange={e => props.setDateEnd(e.target.value)} />
                    }
                </label>
            </div>
            <div className='form-row'>
                <label>
                    <div>Work Details</div>
                    {props.saved
                        ? <div className='saved-item'>{props.workDetail}</div>
                        : <textarea
                            id='workDetail'
                            name='workDetail'
                            rows='7'
                            value={props.workDetail}
                            onChange={e => props.setWorkDetail(e.target.value)} />
                    }
                </label>
            </div>
        </>
    )
}

const index = 1;

export default function WorkForm() {
    const [saved, setSaved] = useState(false);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [workDetail, setWorkDetail] = useState('');

    // using object as state
    // const [workdData, setWorkData] = useState({
    //     company: '',
    //     position: '',
    //     dateStart: '',
    //     dateEnd: '',
    //     workdetail: '',
    // });

    function handleSave(e) {
        e.preventDefault();
        // saved ? setSaved(false) : setSaved(true);
        if (saved) {
            setSaved(false);
        } else {
            setSaved(true);
            console.log(`Company: ${company}`);
        }
    }

    return (
        <div className='form-wrapper'>
            <form id='work-form'>
                <h2>Work Experience</h2>
                <WorkEntry
                    num={index}
                    saved={saved}
                    company={company}
                    setCompany={setCompany}
                    position={position}
                    setPosition={setPosition}
                    dateStart={dateStart}
                    setDateStart={setDateStart}
                    dateEnd={dateEnd}
                    setDateEnd={setDateEnd}
                    workDetail={workDetail}
                    setWorkDetail={setWorkDetail}
                />
                <button onClick={handleSave}>
                    {saved ? 'Edit' : 'Save'}
                </button>
            </form>
        </div>
    )
}