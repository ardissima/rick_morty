import React, { Component } from 'react';
import './index.scss';
import '../App.scss';

interface Props {
    title?: string,
    characters: Array<any>
}

interface State {
    showDetail: number | undefined,
}

class CharactersList extends Component<Props, State> {
    
    render() {
        return <div className='characters-list'>
            {this.props.characters.map((character) => 
                <div key={character.id}
                    className='character' 
                    onClick={()=>this.setState({showDetail: character.id}, ()=>{console.warn('showDetail',this.state.showDetail)})}>
                        {character.id + '. ' + character.name}
                    </div>
        )}</div>
    }
}

export default CharactersList;