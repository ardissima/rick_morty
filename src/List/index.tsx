import { List, Modal } from 'antd';
import React, { Component, useState } from 'react';
import './index.scss';

interface Props {
    title: string,
    characters: Array<{name:string}>
}

const CharactersList: React.FC<Props> = props => {

    const [showDetail, setShowDetail] = useState(false);
    
        return (<>
            <List 
                size="small"
                //bordered={true}
                className='characters-list'
                dataSource={props.characters}
                renderItem={(character) => {
                    return <List.Item onClick={()=>setShowDetail(!showDetail)}>{character.name}</List.Item>
                }}
                /*itemLayout="vertical"
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 1,
                  }}*/
            />
            <Modal visible={showDetail}>Ciao</Modal>
        </>)
}

export default CharactersList;