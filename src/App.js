import React, {Component} from 'react';
import './App.css';
class App extends Component {

    state = {
        activeText: '',
        items: []
    }

    handleInput = (e) => {

        this.setState({
            activeText: e.target.value
        })

        console.log(this.state.activeText);
    }

    addItem = () => {
        this.setState({
            items: [...this.state.items, this.state.activeText]
        }, () => {
            console.log(this.state.items);
        });

    }
    removeItem = (i) => {
        this.setState({
            newList: this.state.items.splice(i, 1)
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <div className="row p-3">
                    <div className="col col-md-3"/>
                    <div className="col col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label for="data">Enter Data</label>
                                        <input type="text" className="form-control" onChange={this.handleInput}
                                               name="data"/>
                                    </div>

                                    <button type="button" className="btn btn-primary" onClick={this.addItem}>
                                        Display
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-3"/>

                </div>
                <div>


                                <ul>
                                    {this.state.items.map((text, index) => {
                                        return (

                                                <li key={index}>{text}
                                                   <span className="close"> <button onClick={() => this.removeItem(index)}>x
                                                   </button></span>
                                                </li>

                                                )
                                                }) }
                                </ul>


                </div>
            </div>
        )
    }
}


export default App;
