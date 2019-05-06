import React from 'react' 

function NotesEditor({text, handleChange}) {
    return (
        <textarea 
            value={text}
            onChange={(e)=> {
                handleChange(e.target.value);
            }} />
        );
}

export default class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isEditing: true,
            draftText: props.text
        }
    }
    render() {  // Render does not receive props
        // Declares the className and note variables 
        // and assigns them to the properties from this.props
        // where the name matches
        const {className, note} = this.props; 
        const {isEditing, draftText} = this.state;
        return (
            <div className={className}>
                {
                    isEditing ? 
                    <NotesEditor 
                         handleChange= {this._changeDraftText}
                         text={draftText} /> 
                    : draftText
                 }
                 <button onClick={this._toggleIsEditing}>Toggle</button>
            </div>
        );
    }
    _changeDraftText = (newText) => {
        this.setState({
            draftText: newText
        })
    }
    _toggleIsEditing = () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
}

