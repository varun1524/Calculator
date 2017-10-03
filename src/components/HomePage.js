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
                operationStatus: false,
                message: ''
            }
        };


        this.handleOperation = this.handleOperation.bind(this.state);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleOperation=(operator) =>{

        this.setState((state)=>{
            state.calculator = {
                ...state.calculator,
                operation : operator
            };

            API.doCalculate(state.calculator).then((data) => {
                if(data.operationStatus) {
                    this.setState(
                        state.calculator={
                            ...state.calculator,
                            answer : data.answer,
                            operationStatus : data.operationStatus,
                            message : "Calculation Successful\n" + data.message
                        }
                    );
                }
                else{
                    this.setState(
                        state.calculator={
                            ...state.calculator,
                            operationStatus : data.operationStatus,
                            message : "Calculation Unsuccessful\n" + data.message
                        }
                    );
                }
            });

        });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-sm-6 col-md-6 col-lg-6">
                        <div className="row justify-content-md-center">
                            <div className="panel panel-primary">
                                <div className="panel-body">
                                    <form className="form-horizontal">
                                        <div className="panel-heading">
                                            <h1 className="bg-primary">Calculator</h1>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 col-md-4 col-lg-4">Value 1:</label>
                                            <input
                                                className="input-sm col-sm-4 col-md-4 col-lg-4"
                                                type="text"
                                                placeholder="Enter Value 1: "
                                                value={this.state.calculator.value1}
                                                pattern="[0-9]+" title="Numeric Values"
                                                onChange={(event) => {
                                                    if(event.target.value===null || event.target.value.trim()==='')
                                                    {
                                                        document.getElementById("value1Error")
                                                            .innerHTML="Invalid Input for Value 1. Please provide Numberic Value";
                                                    }
                                                    else {
                                                        this.setState({
                                                            calculator: {
                                                                ...this.state.calculator,
                                                                value1: event.target.value
                                                            }
                                                        })
                                                    }
                                                }}
                                            />
                                        </div>
                                        <span id="value1Error"></span>

                                        <div className="form-group">
                                            <label className="col-sm-4 col-md-4 col-lg-4">Value 2:</label>
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