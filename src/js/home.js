import React from 'react';

// import './home.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        console.log('history', this.props.history)
        return (
            <div>
                <a href='#/detail'>去detail</a>
                <button className="btn" onClick={() => this.props.history.push('detail')}>通过函数跳转</button>
            </div>
        )
    }
}