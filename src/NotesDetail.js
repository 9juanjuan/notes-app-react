import React from 'react' 


export default function NotesDetail({className, note}) {
    return (
        <div className={className}>
            {note.text}
        </div>
    );

}

