import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               <h3>Université Paris Sorbonne- Paris IV</h3>
        <p className="info">Langue française <span>&bull;</span><em className="date">1994 -1995</em></p>
        <p>Certificat pratique de langue française 1995</p>

        <h3>Université Paris Sorbonne- Paris IV</h3>
        <p className="info">Langue et littérature françaises <span>&bull;</span><em className="date">1995 – 1996</em></p>
        <p>Diplôme d’études françaises 1996</p>

        <h3>Université de la Manouba</h3>
        <p className="info">Master en langue et littérature françaises <span>&bull;</span><em className="date">2010-2013</em></p>
        <p>Mai 2013</p>

        <h3>Université de la Manouba</h3>
        <p className="info">Doctorat en littérature francophone <span>&bull;</span><em className="date">Janvier 2017</em></p>
        <p>En cours</p>

        <h3>Licorne Academy</h3>
        <p className="info">Techniques de communication, art oratoire et techniques d’enseignement <span>&bull;</span><em className="date">Aout 2016</em></p>
        <p>Certificat en techniques de communication</p>

        <h3>L’Institut français de Tunisie</h3>
        <p className="info">Habilitation Examinateur correcteur<span>&bull;</span><em className="date">Septembre 2016</em></p>
        <p>Habilitation des examinateurs DELF et DALF</p>

        <h3>European Bank</h3>
        <p className="info">Certificat en Consulting<span>&bull;</span><em className="date">Juin 2018</em></p>
        <p>Business Diagnostics for consulting</p>

        <h3>E -marketing School
Paris
</h3>
        <p className="info">Certificat en Marketing digital<span>&bull;</span><em className="date">Septembre 2019</em></p>
        <p>Certificat en : « Les fondamentaux du Marketing Digital »</p>

        <h3>Columbia Engineering
The Fu Foundation School of Engineering and applied Science
</h3>
        <p className="info">Mentor Training<span>&bull;</span><em className="date">Février 2020</em></p>
        <p>Certificat of mentoring</p>

        <h3>Skema Business School</h3>
        <p className="info">Certification : L’Entreprise en Etat de crise<span>&bull;</span><em className="date">Mai 2020</em></p>
        <p>Certificat : L’entreprise face au changement et à la transformation</p>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
         <h3>L’agence foncière touristique sous la tutelle du Ministère du tourisme et de l’artisanat</h3>
        <p className="info">Chargée de la presse et de la communication auprès du Président Directeur Général et auprès du ministre du tourisme et de l’artisanat <span>&bull;</span><em className="date">1994 – 2001</em></p>
        <p>Certificat : L’entreprise face au changement et à la transformation</p>


        <h3>Programme national 21-21</h3>
        <p className="info">• Les techniques de communication <br />
        • La prise de parole en public   <br />
• La confiance en soi 
 <span>&bull;</span><em className="date">
2003 - 2005
</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}


        <h3>L’université centrale</h3>
        <p className="info">• Techniques de communication écrite et orale <br />
   
   • Français : langue et rédaction : cycle préparatoire
    <span>&bull;</span><em className="date">2004 – 2008</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}


        <h3>L’institut supérieur de documentation la Manouba.</h3>
        <p className="info">Chargée du cours : <br />
        • Les techniques de rédaction
<span>&bull;</span><em className="date">2007 - 2008</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}

        <h3>L’institut supérieur des sciences humaines</h3>
        <p className="info">Chargée du cours : <br />
        • Langue et littérature françaises
 <span>&bull;</span><em className="date">2007 – 2009</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}


        <h3>L’institut supérieur de documentation la Manouba</h3>
        <p className="info">Chargée du cours : <br />
        • Techniques de communication <br /> -Préparation à la vie professionnelle 
 <span>&bull;</span><em className="date">2012  -  2013</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}

        <h3>Ecole nationale d’ingénieurs de Tunis</h3>
        <p className="info">Chargée du cours : <br />
        •	Techniques de communication <br />
•	Techniques d’entretien d’embauche <br />
•	Méthodologie de la rédaction d’un mémoire de fin d’études <br />
•	Simulation de soutenance  <br />  
•	Préparation au concours DELF et DALF 

         <span>&bull;</span><em className="date">
           	2013 – 2014 <br />

	2014 – 2015 <br />

	2015 – 2016 <br />

	2017 -  2019</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}


        <h3>L’institut supérieur des arts et des multimédias la Manouba</h3>
        <p className="info">Chargée du cours : <br />
-Techniques de communication <br /> -Préparation à la vie professionnelle 
 <span>&bull;</span><em className="date">
2015 _ 2016</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}


        
        <h3>L’université libre de Tunis</h3>
        <p className="info">Chargée du cours : <br />
        • Développement personnel<br />
•	Préparation à la vie professionnelle<br />
•	Estime de soi et confiance en soi<br />
•	Méthodologie de la recherche ( Master communication et Marketing :: Master comptabilité et Finances).

 <span>&bull;</span><em className="date">2016 – 2020</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}
        


        <h3>L’université ESPRIT </h3>
        <p className="info">Chargée du cours : <br />
        •	Communication, culture et citoyenneté.<br />
•	Préparation à la vie professionnelle
 <span>&bull;</span><em className="date">2017 – 2020</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}

        <h3>L’université Européenne </h3>
        <p className="info">Chargée du cours : <br />
        •		Promotion des entreprises <br />
	•	Préparation à la vie professionnelle
  <br />
	•		L’image de soi
 <span>&bull;</span><em className="date">2017 -  2020</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}


        <h3>International des Sciences, Arts et Technologies  </h3>
        <p className="info">Directrice de la communication et des partenariats internationaux 
 <span>&bull;</span><em className="date">2018 – 2021</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}

        <h3>International des Sciences de l’Entreprise </h3>
        <p className="info">Directrice de la communication et relations internationales
 <span>&bull;</span><em className="date">2018 – 2021</em></p>
        {/* <p>Certificat : L’entreprise face au changement et à la transformation</p> */}
        </div>


        
    </div>


   
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
           
         </div>
        
  
         <div className="nine columns main-col">

            <p>
            <li>Les techniques de communication.</li>
            <li>	Consulting en communication : conseil et stratégie </li>
            <li>	Soft. Skills : (prise de parole en public, gestion de stress , gestion de temps, confiance en soi, intelligence émotionnelle) </li>
            <li>Le Marketing de soi : Personal branding  </li>
            <li>Le statut du leadership. </li>
            <li>La communication en temps de crise et La conduite du changement . </li>
            <li>	La communication digitale : Stratégie de communication : individu // Entreprise </li>
            <li>	La préparation à la vie professionnelle : du CV à l’entretien. </li>
            <li>	La communication professionnelle / interpersonnelle. </li>
            <li>	Techniques de présentation et d’accueil. </li>
            <li>	Techniques de vente et de négociation </li>
            <li>	Les écrits professionnels. </li>
            <li>	Le business french : communication orale, écrite et digitale.  </li>

            </p>

				{/* <div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div> */}
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
