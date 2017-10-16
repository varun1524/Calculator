import React from 'react';
import {Component} from 'react';
import * as API from '../api/API';

class HomePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            calculator: {
                value1: '',
                value2: '',
                operation: '',
                answer: '',
                message: '',
                inputError:''
            }
        };


        this.handleOperation = this.handleOperation.bind(this.state);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleOperation=(operator) =>{
        document.getElementById("inputError").innerHTML="";

        this.setState((state)=>{
            state.calculator = {
                ...this.state.calculator,
                operation : operator,
                message : ""
            };

            let val1=state.calculator.value1.trim();
            let val2=state.calculator.value2.trim();

            if(isNaN(val1) || isNaN(val2) || val1==='' || val2==='') {
                document.getElementById("inputError").innerHTML="Input cannot be empty and it must contain numeric value";
                console.log("Error");
            }
            else {

                switch (operator){
                    case '+':
                        API.doAdd(state.calculator).then((response) =>
                        {
                            if(response.status===200){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                            else if(response.status===400){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                        });
                        break;
                    case '-':
                        API.doSub(state.calculator).then((response) =>
                        {
                            if(response.status===200){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                            else if(response.status===400){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                        });
                        break;
                    case '*':
                        API.doMul(state.calculator).then((response) =>
                        {
                            if(response.status===200){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                            else if(response.status===400){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                        });
                        break;
                    case '/':
                        API.doDiv(state.calculator).then((response) =>
                        {
                            if(response.status===200){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                            else if(response.status===301){
                                response.json().then((data) => {
                                    console.log(data);
                                    state.calculator.message="";
                                    this.setState(
                                        state.calculator = {
                                            ...this.state.calculator,
                                            answer: data.answer,
                                            message: data.message
                                        }
                                    );
                                });
                            }
                        });
                        break;
                    default:
                        break;
                }


            }
        });
    };

    render() {

        const inputErrorClass={
          color:'red',
        };

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-sm-6 col-md-6 col-lg-6">
                        <div className="row justify-content-md-center">
                            <div className="panel panel-primary">
                                <div className="panel-body">
                                    <form className="form-horizontal">
                                        <div className="panel-heading" align="center">
                                            <h1 className="bg bg-primary" align="center">Calculator</h1>
                                        </div>
                                        <div className="form-group" align="center">
                                            <label className="col-sm-4 col-md-4 col-lg-4
                                            col-lg-offset-2 col-md-offset-2 col-sm-offset-2">Value 1:</label>
                                            <input
                                                className="input-sm col-sm-4 col-md-4 col-lg-4"
                                                type="text"
                                                placeholder="Enter Value 1: "
                                                value={this.state.calculator.value1}
                                                required
                                                onChange={(event) => {
                                                    this.setState({
                                                        calculator: {
                                                            ...this.state.calculator,
                                                            value1: event.target.value
                                                        }
                                                    })
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 col-md-4 col-lg-4
                                            col-lg-offset-2 col-md-offset-2 col-sm-offset-2">Value 2:</label>
                                            <input
                                                className="input-sm col-sm-4 col-md-4 col-lg-4"
                                                type="text"
                                                placeholder="Enter Value 2: "
                                                value={this.state.calculator.value2}
                                                onChange={(event) => {
                                                    this.setState({
                                                        calculator: {
                                                            ...this.state.calculator,
                                                            value2: event.target.value
                                                        }
                                                    });
                                                }}
                                            />
                                        </div>
                                        <br/>
                                        <div className="row justify-content-md-center">
                                            <div className="col-md-6 col-lg-offset-3">
                                                <div className="alert alert-warning" role="alert">
                                                    <label>Result = {this.state.calculator.answer}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <input type="button"
                                                   className="btn btn-primary col-sm-1 col-md-1 col-lg-1 col-sm-offset-2 col-md-offset-2 col-lg-offset-2" value="+"
                                                   id="btnAddition"
                                                   onClick={() => this.handleOperation("+")}/>
                                            <input type="button"
                                                   className="btn btn-primary col-sm-1 col-md-1 col-lg-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" value="-"
                                                   id="btnSubstraction"
                                                   onClick={() => this.handleOperation("-")}/>
                                            <input type="button"
                                                   className="btn btn-primary col-sm-1 col-md-1 col-lg-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" value="*"
                                                   id="btnMultiplication"
                                                   onClick={() => this.handleOperation("*")}/>
                                            <input type="button"
                                                   className="btn btn-primary col-sm-1 col-md-1 col-lg-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" value="/"
                                                   id="btnDivision"
                                                   onClick={() => this.handleOperation("/")}/>
                                        </div>
                                        <br/>
                                        <div>
                                            <span id="inputError" style={inputErrorClass} className="alert-danger"></span>
                                        </div>
                                        <div className="alert-danger">
                                            {/*<span id="serverError" style={inputErrorClass} className="alert-danger"></span>*/}
                                            {this.state.calculator.message}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;