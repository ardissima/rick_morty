import React, { Component } from 'react';
import DetailModal from 'src/Modal';
import './index.scss';

interface Props {
    title?: string,
    characters: Array<any>
}

interface State {
    showDetail: number,
}

class CharactersList extends Component<Props, State> {

    state = {
        showDetail: 0
    }
    
    render() {
        return <>
        <div className='characters-list'>
            {this.props.characters.map((character) => 
                <div key={character.id}
                    className='character' 
                    onClick={()=>this.setState({showDetail: character.id})}>
                        {character.id + '. ' + character.name}                        
                        <img src={character.image} height={'60vh'} alt={'character'}/>
                </div>
            )}</div>
            <DetailModal 
                showDetail={this.state.showDetail !== 0} 
                setShowDetail={() => this.setState({showDetail: 0})}
                detail={this.props.characters.filter(el => el.id === this.state.showDetail)[0]}
            />
        </>
    }
}

export default CharactersList;