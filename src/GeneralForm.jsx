import { useState, useRef } from 'react';
import './GeneralForm.css'

export default function GeneralForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + ' ' + lastName;
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // boolean for dynamic save/edit button
    const [saved, setSaved] = useState(false);

    const formRef = useRef(null);

    function handleSave(e) {
        e.preventDefault();
        formRef.current.reportValidity();
        if (formRef.current.checkValidity()) {
            if (!saved) {
                setSaved(true);
            } else {
                setSaved(false);
            }
        }

    }

    return (
        <div className='general-wrapper'>
            <h2>General Info</h2>
            <form ref={formRef} id='general-form'>
                <div className='form-row'>
                    <label>
                        <div>First Name</div>
                        {saved
                            ? <div className='saved-item'>{firstName}</div>
                            : <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} required />
                        }
                    </label>
                    <label>
                        <div>Last Name</div>
                        {saved
                            ? <div className='saved-item'>{lastName}</div>
                            : <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} required />
                        }
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        <div>E-mail</div>
                        {saved
                            ? <div className='saved-item'>{email}</div>
                            : <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                        }
                    </label>
                    <label>
                        <div>Phone</div>
                        {saved
                            ? <div className='saved-item'>{phone}</div>
                            : <input type='tel' value={phone} onChange={e => setPhone(e.target.value)} required />
                        }
                    </label>
                </div>
                <button onClick={handleSave} type='submit'>
                    {saved ? 'Edit' : 'Save'}
                </button>
            </form>
        </div>
    )
}