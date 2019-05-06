import React from 'react' 


export default class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {  // Render does not receive props
        // Declares the className and note variables 
        // and assigns them to the properties from this.props
        // where the name matches
        const {className, note} = this.props; 
        return (
            <div className={className}>
                {note.text}
            </div>
        );
    }
}

