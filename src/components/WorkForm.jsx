import { useState } from 'react';

function WorkEntry({ saved, entryData, updateEntry, deleteEntry, index }) {
    const [entry, setEntry] = useState(entryData);

    // make function for onChange to handle change
    function handleChange(e) {
        const { name, value } = e.target;
        const updatedEntry = { ...entry, [name]: value }
        setEntry(updatedEntry);
        updateEntry(entry.id, updatedEntry);
    }

    return (
        <div className='work-entry'>
            <div className='entry-header'>
                <div>Work Entry: {index}</div>
                <button type='button' onClick={() => deleteEntry(entry.id)}>
                    Delete
                </button>
            </div>
            <div className='form-row'>
                <label>
                    <div>Company</div>
                    {saved
                        ? <div className='saved-item'>{entry.company}</div>
                        : <input
                            type='text'
                            id='company'
                            name='company'
                            value={entry.company} 
                            onChange={handleChange} />
                    }
                </label>
                <label>
                    <div>Position/Title</div>
                    {saved
                        ? <div className='saved-item'>{entry.position}</div>
                        : <input
                            type='text'
                            id='position'
                            name='position'
                            value={entry.position}
                            onChange={handleChange} />
                    }
                </label>
            </div>
            <div className='form-row'>
                <label>
                    <div>Start Date</div>
                    {saved
                        ? <div className='saved-item'>{entry.dateStart}</div>
                        : <input
                            type='date'
                            id='dateStart'
                            name='dateStart'
                            value={entry.dateStart}
                            onChange={handleChange} />
                    }
                </label>
                <label>
                    <div>End Date</div>
                    {saved
                        ? <div className='saved-item'>{entry.dateEnd}</div>
                        : <input
                            type='date'
                            id='dateEnd'
                            name='dateEnd'
                            value={entry.dateEnd}
                            onChange={handleChange} />
                    }
                </label>
            </div>
            <div className='form-row'>
                <label>
                    <div>Work Details</div>
                    {saved
                        ? <div className='saved-item' style={{height: '180px'}}>{entry.workDetail}</div>
                        : <textarea
                            id='workDetail'
                            name='workDetail'
                            rows='7'
                            value={entry.workDetail}
                            onChange={handleChange} />
                    }
                </label>
            </div>
        </div>
    )
}

export default function WorkForm() {
    const [saved, setSaved] = useState(false);
    const [entries, setEntries] = useState([
        {
            id: 1,
            company: '',
            position: '',
            dateStart: '',
            dateEnd: '',
            workdDetail: '',
        },
    ]);

    function handleSave(e) {
        e.preventDefault();
        // saved ? setSaved(false) : setSaved(true);
        // below has the same effect
        setSaved(!saved);
    }

    function addEntry() {
        const newEntry = {
            id: entries.length + 1,
            company: '',
            position: '',
            dateStart: '',
            dateEnd: '',
            workdDetail: '',
        };
        setEntries([...entries, newEntry]);
    }

    function updateEntry(id, updatedEntry) {
        setEntries(entries.map((entry) => (entry.id === id ? updatedEntry : entry)));
    }

    function deleteEntry(id) {
        setEntries(entries.filter((entry) => entry.id != id));
    }

    return (
        <div className='form-wrapper'>
            <h2>Work Experience</h2>
            <form id='work-form'>
                {entries.map((entry, index) => (
                    <WorkEntry 
                        key={entry.id}
                        saved={saved}
                        entryData={entry}
                        updateEntry={updateEntry}
                        deleteEntry={deleteEntry}
                        index={index + 1}
                    />
                ))}
                <button type='button' onClick={addEntry}>
                    Add Entry
                </button>
                <button onClick={handleSave}>
                    {saved ? 'Edit' : 'Save'}
                </button>
            </form>
        </div>
    )
}