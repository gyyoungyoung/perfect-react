import React from 'react';


export default class Home extends React.Component {

    componentDidMount() {
        console.log('6666', this.props);
    }

    render() {
        return (
            <div>
                <a href='#/'>回到home</a>
            </div>
        )
    }
}