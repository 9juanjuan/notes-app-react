import React from 'react'
import NotesList from './NotesList'
import NotesDetail from './NotesDetail'
import styles from './NotesApp.module.css'

export default class NotesApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedNote: '1001',
            notes: [
                {
                    id: '1001',
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id: '1002',
                    title: 'second note',
                    text: 'yonder, it is the second note'
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'imagine the poop emojis here.'
                }
            ]   // This will hold an array of objects
        }
    }

    render() {
        const theNote= this.state.notes.find( note=> this.state.selectedNote=== note.id)
        return (
            <div className ={styles.app}>
                <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    handleSelection={this._selectNote}/> 
                <NotesDetail 
                    className={styles.detail}
                    note={theNote}
                 />
            </div> 
          
        );
    }
    _selectNote = (id) => {
        this.setState({
            selectedNote: id
        });
    }
}







