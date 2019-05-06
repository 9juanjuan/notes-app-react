import React from 'react' 

function NotesEditor({text}) {
    return (
        <textarea value={text} />
    );
}

export default class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isEditing: true
        }
    }
    render() {  // Render does not receive props
        // Declares the className and note variables 
        // and assigns them to the properties from this.props
        // where the name matches
        const {className, note} = this.props; 
        const {isEditing} = this.state;
        return (
            <div className={className}>
            {
                isEditing ? <NotesEditor text={note.text} /> : note.text
            }
            </div>
        );
    }
}

