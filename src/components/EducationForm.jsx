import { useState } from 'react';

export default function EducationForm() {
    const [studyField, setStudyField] = useState('');
    const [date, setDate] = useState('');
    const [school, setSchool] = useState('');
    const [saved, setSaved] = useState(false);

    function handleSave(e) {
        e.preventDefault();
        saved ? setSaved(false) : setSaved(true);
    }

    return (
        <div className='form-wrapper'>
            <h2>Education</h2>
            <form id='education-form'>
                <div className='form-row'>
                    <label>
                        <div>Field of Study</div>
                        {saved
                            ? <div className='saved-item'>{studyField}</div>
                            : <input type='text' value={studyField} onChange={e => setStudyField(e.target.value)} />
                        }
                    </label>
                    <label>
                        <div>Date</div>
                        {saved
                            ? <div className='saved-item'>{date}</div>
                            : <input type='date' value={date} onChange={e => setDate(e.target.value)} />
                        }
                    </label>
                </div>
                <div className='form-row'>
                    <label>
                        <div>School Name</div>
                        {saved
                            ? <div className='saved-item'>{school}</div>
                            : <input type='text' value={school} onChange={e => setSchool(e.target.value)} />
                        }
                    </label>
                </div>
                <button onClick={handleSave}>
                    {saved ? 'Edit' : 'Save'}
                </button>
            </form>
        </div>
    )
}