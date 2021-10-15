import React, { Component } from 'react';
import fba from '../fba.png'
class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={fba} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Employeur actuel </h2>

            <p><ul>Institut supérieur des Arts et des multimédias de la Manouba </ul>
            <br />
            <ul>Ministère de l’enseignement supérieur et de la recherche scientifique          </ul>
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Faten Ben aissa</span><br />
						   <span>Nationalité : Tunisienne<br />
                     N° C.I.N :	0	4	7	7	5	4	4	8	


                   </span><br />
						   <span>00216 20 359 546</span><br />
                     <span>fatenbenaissa@yahoo.fr</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://docs.google.com/document/d/1trqF2tm9BhOAMMshFFdep_HhhRKTKqkRBZge5r_BFkY/edit" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
