import React, { Component, useState } from 'react';
import './index.scss';
import '../App.scss';

interface Props {
    title: string,
    characters: Array<{name:string}>
}

interface State {
    showDetail: number | undefined,
}

class CharactersList extends Component<Props, State> {
    
    render() {
        return <div className='characters-list'>{this.props.characters.map((character, index) => 
            <div className='character' onClick={()=>this.setState({showDetail: index}, ()=>{console.warn('showDetail',this.state.showDetail)})}>{character.name}</div>
        )}</div>
    }
}

export default CharactersList;