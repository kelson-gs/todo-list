import React, { Component } from 'react';
import './app.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            item: ''
        }
        this.adc = this.adc.bind(this);
        this.excluir = this.excluir.bind(this);
    }

    adc(){
        const { item, list } = this.state;
        list.push(item);
        this.setState({ list: list, item: '' });
       
    }

    excluir(i){
        const { list } = this.state;
        let pos = list.indexOf(i);
        if(list.length === 1){
            list.pop()
        } else {
            list.splice(pos, pos)
        }
        console.log(pos)
        
        this.setState({ list: list })

    }

    render(){
        return(
            <div>
                
                <div id="container-todo-list">
                    <h1 id="title-todo-list">Todo-list</h1>
                    <div id="add-item-todo-list">
                        <input type='text' id="input-todo" placeholder="Adicione algo na sua todo-list"
                         onChange={ (e) => this.setState({ item: e.target.value }) }/>
                        <button id="btn-adc-todo-list" onClick={this.adc}>Add</button>
                    </div>

                    <div id="view">
                        {this.state.list.length === 0 ? (
                            <div id="void-list">
                                <label>Lista vazia...</label>
                            </div>
                        ):(
                            this.state.list.map( item => (
                                <div id="item-list" key={item} >
                                    <input id='checkbox' type="checkbox" />
                                    <label id="item" > {item} </label>
                                    <button id="btn-delete" onClick={ () => this.excluir(item)} >X</button>
                                </div>     
                         ) )
                        )}
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
