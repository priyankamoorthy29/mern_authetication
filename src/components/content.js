import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Defect from './defect';
import Project from './project';

const arr=[1,2,3,4];

class Content extends Component {
render(){
    return(
        <div>
          <div className="d-flex justify-content-around">
            {
              arr.map(num=>(
                <Card key={num}/>
              ))
            }
{/* 
<Router>
           
                <Route exact path="/defect" component={ Defect } />
                  <Route exact path="/project" component={ Project } />
            
          </Router> */}
          </div>
          
       
  {/* <div className="rectangle" style={{height: "80px",width: "220px", backgroundColor: "white",marginTop:"-80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>
  <div className="rectangle" style={{height: "80px",width: "220px", backgroundColor: "white",marginTop:"-80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>
  <div className="rectangle" style={{height: "80px",width: "220px", backgroundColor: "white",marginTop:"-80px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div> */}

 <div className="card" style={{height: "300px",width: "550px", backgroundColor: "white",marginLeft:'50px',marginTop:"50px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>
{/* 
<div className="card" style={{height: "300px",width: "420px", backgroundColor: "white",marginLeft:'860px',marginTop:"-300px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15)"}}></div>  */}
<Card/>
<Card/>
  </div>
    )
}
   
}
export default Content;