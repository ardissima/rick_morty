import React, { Component } from 'react';

interface Props {
    title: string
}
export class List extends Component<Props> {
    render(): JSX.Element {
        return <div>{this.props.title}</div>
    }
}

export default List;