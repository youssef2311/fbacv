import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {/* {testimonials} */}
                    
                      <h1>-Études et consultations en formation :</h1>
<br />

                      <h1>Conseillère en communication </h1>
        <p className="info">GoMyCode 
 <span>&bull;</span><em className="date">Juillet 2019  </em></p>

 <h1>
Consultante en communication 
 </h1>
        <p className="info">
Myron clinic

 <span>&bull;</span><em className="date">
Juin 2019
 </em></p>

 <h1>
Consultante et conseillère en communication 
 </h1>
        <p className="info">SRA Intégration
 <span>&bull;</span><em className="date">
Avril 2019 - Décembre 2019
</em></p>

 <h1>
Rédactrice en chef
 </h1>
        <p className="info">Le Manager
 <span>&bull;</span><em className="date">Août 2018 – 2020 </em></p>

 <h1>
Consultante en communication
</h1>
        <p className="info">AMI ASSURANCE 
 <span>&bull;</span><em className="date">Mars 2018 – Décembre 2018</em></p>


 <h1>
 Directrice communication
</h1>
        <p className="info">International des sciences de l’Entreprise 
 <span>&bull;</span><em className="date">Mai 2018 – 2021</em></p>


 <h1>
 Consultante en communication
</h1>
        <p className="info">International des sciences, arts et technologies 
 <span>&bull;</span><em className="date">Mai 2018 – 2021</em></p>

 <h1>
 Consultante en communication 
</h1>
        <p className="info">Haute école de coaching
 <span>&bull;</span><em className="date">Janvier 2018_ Décembre 2018</em></p>


 <hr />
 <h1>-Divers :</h1>

 <br />

 <h1>
 5G Development in Cybersecurity and Ecosystem Readiness
</h1>
        <p className="info">Huawei -ANSI-  IPASSS
 <span>&bull;</span><em className="date">9 décembre</em></p>


 <h1>
 Foreign Terrorist Fighters
</h1>
        <p className="info">DCAF_IPASS
 <span>&bull;</span><em className="date">3 décembre</em></p>

 <h1>
 Organisatrice et. Modératrice de conférences 
</h1>
        <p className="info">Polytech Intl Group 
 <span>&bull;</span><em className="date">Mars –Mai 2020</em></p>


 <h1>
 Modératrice et organisatrice de conférence
</h1>
        <p className="info">2 octobre 2020
 <span>&bull;</span><em className="date">Institut de Prospective et d’études stratégiques et sécuritaires avancées </em></p>


 <h1>
 Mentor 
</h1>
        <p className="info">Westerwelle Startup Haus Tunis
Et Friedrich Naumann Stiftung

 <span>&bull;</span><em className="date">29 août 2020</em></p>


 <h1>
 Mentor
</h1>
        <p className="info">Open start up Tunisia 
 <span>&bull;</span><em className="date">28 Août </em></p>


 <h1>
 Représentante « YOUVISION « Grand Maghreb
</h1>
        <p className="info">Youvision 
 <span>&bull;</span><em className="date">Août 2020</em></p>


 <h1>
 Panéliste et conférencière : 
« Education aux compétences de vie »

</h1>
        <p className="info">Association tunisienne des soft skills et UNICEF 
 <span>&bull;</span><em className="date">15 août 2020</em></p>


 <h1>
 Co- fondatrice du Think Tank : IPASSS
</h1>
        <p className="info">Institut de Prospective et d’études stratégiques et sécuritaires avancées
 <span>&bull;</span><em className="date">Août 2020</em></p>


 
 <h1>
 Modératrice : 
La semaine africaine de l’intelligence économique 

</h1>
        <p className="info">Centre Africain de veille et d’intelligence économique
15 nationalités de l’Afrique

 <span>&bull;</span><em className="date">27 juillet au 03 Août</em></p>


 
 <h1>
 Interview 
LadyBoss

</h1>
        <p className="info">Express FM
 <span>&bull;</span><em className="date">05 Juillet 2020</em></p>


 
 <h1>
 Organisatrice et. Modératrice de conférences 
(65 conférences numériques) 

</h1>
        <p className="info">Polytech Intl Group 
 <span>&bull;</span><em className="date">Mars –Mai 2020</em></p>



 
 <h1>
 Membre du Jury 
</h1>
        <p className="info">MOOVJEE
 <span>&bull;</span><em className="date">Novembre 2019
Mars 2020
</em></p>

 
 <h1>
 Présidente du jury 
L’Académie des jeunes entrepreneurs

</h1>
        <p className="info">111 Co-think
 <span>&bull;</span><em className="date">Août 2019</em></p>


 <h1>
 Membre du Jury Spark

</h1>
        <p className="info">Fondation BIAT
 <span>&bull;</span><em className="date">Juin 2019</em></p>


 <h1>
 Membre du jury Bloomasters

</h1>
        <p className="info">Fondation BIAT
 <span>&bull;</span><em className="date">Avril 2019</em></p>


 <h1>
 Membre du jury MOOVJEE
</h1>
        <p className="info">MOOVJI
 <span>&bull;</span><em className="date">Novembre 2018 </em></p>

 <h1>
 Présidente du jury 
</h1>
        <p className="info">Sup’Com
 <span>&bull;</span><em className="date">Juin  2018  </em></p>


 <h1>
 Membre du jury  Challenge 
</h1>
        <p className="info">111 Co-Thing
 <span>&bull;</span><em className="date">Octobre 2018 </em></p>


 <h1>
 Rédactrice 
</h1>
        <p className="info">Le MANAGER
 <span>&bull;</span><em className="date">Septembre 2018- 2020 </em></p>
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
