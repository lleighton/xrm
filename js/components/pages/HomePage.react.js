/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeWeight, asyncChangeUnits } from '../../actions/AppActions';
import React, { Component } from 'react';
import {UNIT_KGS,UNIT_LBS} from '../../constants/AppConstants';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function roundNumber(number, decimals) {
    var newnumber = new Number(number+'').toFixed(parseInt(decimals));
    return parseFloat(newnumber); 
}

class Percentage extends Component {
  render(){
    return (<div className="WeightPercentage">
      <span className="WeightPercentage__Output Value">{Math.ceil(this.props.value)}<span className="units">{this.props.units}</span></span>
      <span className="WeightPercentage__Output Percentage">{this.props.percentage}<span className="units">%</span></span>
      </div>)  
  }
  
}

class Percentages extends Component {
  render(){

    var children = [];
    var percentage = 1;
    while((percentage-=0.05) > 0){
      var multiplier = roundNumber(percentage,2);
      
      children.push(<Percentage key={multiplier} percentage={roundNumber(multiplier*100,2)} value={roundNumber(this.props.weight*multiplier,2)} units={this.props.units}/>)
    }

    return (<div onTouchStart={()=>{document.activeElement.blur()}} className="WeightPercentages">{children}</div>);

  }
}



class HomePage extends Component {
  

  render() {
    const { weight, units } = this.props.data;
    return (
      <div className="RMPercentageCalculator">
      <div className="RMPercentageCalculatorHeader">
          <div className="Weight__Label">
            <input ref="weightInput" className="Weight__Input" step="0.5" type="number" onChange={this.onChange.bind(this)} placeholder="kg" value={weight} />
          </div>
        </div>
        <Percentages weight={weight} units={units} />

      </div>
    );
  }

  onChange(evt){
    const dispatch = this.props.dispatch;
    var val = parseFloat(evt.target.value);
    dispatch(asyncChangeWeight(isNaN(val) ? '' : val));
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
