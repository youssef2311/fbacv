import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Expérience significative en formation continue .</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {/* {projects} */}
                <h3>Le  marketing de soi </h3>
        <p className="info">IHEC Master intelligence marketing et veille stratégique 
 <span>&bull;</span><em className="date">3 décembre </em></p>

 <h3>Problem/Solution
  </h3>
        <p className="info">     Hult prize 
ISCAE. Manouba 
 <span>&bull;</span><em className="date">2 décembre </em></p>

 <h3>Les conseils pratiques pour une communication efficace </h3>
        <p className="info">IHEC
 <span>&bull;</span><em className="date">12 novembre </em></p>

 <h3>La chambre tuniso-italienne de commerce Les techniques. Et les outils de la communication interne   </h3>
        <p className="info">La chambre tuniso-italienne de commerce
 <span>&bull;</span><em className="date">03 et 04 novembre  </em></p>

 <h3>Perfectionnement de la communication </h3>
        <p className="info">IHEC SFAX
 <span>&bull;</span><em className="date">05 novembre </em></p>

 <h3>Future Business  </h3>
        <p className="info">Nateg ENIT 
 <span>&bull;</span><em className="date">30 octobre </em></p>

 <h3>La communication efficace  </h3>
        <p className="info">Business Park Egypt Training & Business consulting
 <span>&bull;</span><em className="date">15 et 16 Août </em></p>

 <h3>Dé-communiquer serait une erreur majeure   </h3>
        <p className="info">L’incubateur 111 
Co-Think
 <span>&bull;</span><em className="date">14 mai 2020 </em></p>

 <h3>Communication de crise : Comment être productifs ?  </h3>
        <p className="info">Tak’ yours connect
ISET Tozeur 
 <span>&bull;</span><em className="date">13 mai 2020</em></p>

 <h3>Com’Crise : Impacts et défis    </h3>
        <p className="info">JCI Tunisie 
JCI Madagascar

 <span>&bull;</span><em className="date">9 mai 2020 </em></p>

 <h3>Productifs les confinés  </h3>
        <p className="info">Fondation BIAT 
 <span>&bull;</span><em className="date">01 Mai 2020  </em></p>

 <h3>La communication en temps de crise : Quelle(s ) stratégie(s) adopter ?  </h3>
        <p className="info">GoMyCode 
 <span>&bull;</span><em className="date">19 avril 2020  </em></p>


 <h3>La  communication à l’heure de  la crise du Coronavirus </h3>
        <p className="info">Moovjee .tn
 <span>&bull;</span><em className="date">13 avril 2020  </em></p>


 <h3>Prise de parole en public   </h3>
        <p className="info">Fondation BIAT 
 <span>&bull;</span><em className="date">
02 Avril 2020
 </em></p>

 <h3>Techniques de communication  </h3>
        <p className="info">USAID et
Institut international du développement humain

 <span>&bull;</span><em className="date">18 et 19 décembre 2019 </em></p>

 <h3>Techniques de communication  </h3>
        <p className="info">USAID et
Institut international du développement humain

 <span>&bull;</span><em className="date">16 et 17 décembre 2019  </em></p>


 <h3>Stratégie de communication  </h3>
        <p className="info">AIM
 <span>&bull;</span><em className="date">15 et 16 décembre 2020 </em></p>

 <h3>
Maîtrise de la communication et gestion des crises  
 </h3>
        <p className="info">Beder pour la citoyenneté et le développement équitable
 <span>&bull;</span><em className="date">11 décembre  2019  </em></p>

 <h3>Maîtrise de la communication et gestion des crises  </h3>
        <p className="info">Beder pour la citoyenneté et le développement équitable 
 <span>&bull;</span><em className="date">09 décembre 2019 </em></p>

 
 <h3>De l’idée au projet : Les Leaders de demain ! </h3>
        <p className="info">Youth speak Forum
 <span>&bull;</span><em className="date">22 novembre 2019 </em></p>

 
 <h3>Team building : cohésion d’équipe et propositions impactantes </h3>
        <p className="info">Fondation BIAT pour la jeunesse 
 <span>&bull;</span><em className="date">25 octobre 2019</em></p>

 
 <h3>Entretien d’embauche et accompagnement </h3>
        <p className="info">I EEE « Enit « 
 <span>&bull;</span><em className="date">09 Octobre 2019 </em></p>

 
 <h3>Stratégie de communication   </h3>
        <p className="info">AIM
 <span>&bull;</span><em className="date">02 juillet 2019</em></p>

 <h3>Spark days : Innovation </h3>
        <p className="info">Fondation BIAT 
 <span>&bull;</span><em className="date">27 mai </em></p>

 <h3>Net ô Féminin
Networking + suivi et accompagnement
 </h3>
        <p className="info">She starts Africa
 <span>&bull;</span><em className="date">1 mai </em></p>

 <h3>Stratégie de communication  </h3>
        <p className="info">AIM
 <span>&bull;</span><em className="date">27 et 28 avril </em></p>

 <h3>Public Speaking </h3>
        <p className="info">Social Media Club Tunisia 
 <span>&bull;</span><em className="date">25 avril  </em></p>


 <h3>« I talk about career for language majors » : 
L’évolution personnelle en tant que défi 
 </h3>
        <p className="info">Bill
 <span>&bull;</span><em className="date">16 avril </em></p>

 <h3>Evolve Learning  </h3>
        <p className="info">Evolve coaching
 <span>&bull;</span><em className="date">15 avril  </em></p>

 <h3>Projets en vrai : conception et réalisation  </h3>
        <p className="info">J’innove en vrai
 <span>&bull;</span><em className="date">10 avril  </em></p>

 
 <h3>Le marketing de soi et évolution de carrières  </h3>
        <p className="info">Association tunisienne des femmes ingénieures 
 <span>&bull;</span><em className="date">30 mars   </em></p>

 
 <h3>Le marketing de soi   </h3>
        <p className="info">Cyprès Coaching
 <span>&bull;</span><em className="date">18 mars 2019</em></p>


 
 <h3>La prise de parole en public  </h3>
        <p className="info">Enactus de L’école supérieure de Commerce 
 <span>&bull;</span><em className="date">12 mars 2019  </em></p>


 
 <h3>Le marketing de soi </h3>
        <p className="info">Nextwomen 
 <span>&bull;</span><em className="date">21 février 2019  </em></p>

 
 <h3>La communication médicale  </h3>
        <p className="info">Sanitas Pioneer Entreprise
 <span>&bull;</span><em className="date">15 février 2019 </em></p>

 <h3>Une communication efficace pour une dynamique entrepreneuriale </h3>
        <p className="info">Salon de l’entrepreneuriat
 <span>&bull;</span><em className="date">14 février 2019</em></p>

 <h3>Le Marketing de soi </h3>
        <p className="info">Moovji/ Cogite 
 <span>&bull;</span><em className="date">23 Janvier 2019  </em></p>

 <h3>Le marketing de soi  </h3>
        <p className="info">Utica Sousse
 <span>&bull;</span><em className="date">19 Janvier 2019</em></p>


 <h3>Mentoring </h3>
        <p className="info">BiatLabs
 <span>&bull;</span><em className="date">12 décembre 2018 </em></p>

 <h3>La communication autour des projets  </h3>
        <p className="info">L’Université de la Manouba : 2ème doctoriale sous le thème : « Smart university in smart city »
 <span>&bull;</span><em className="date">28 novembre  2018 </em></p>


 <h3>Pitching Workshop </h3>
        <p className="info">Hulte Prize Monastir
 <span>&bull;</span><em className="date">25 novembre  2018 </em></p>


 <h3>Les bonnes pratiques de la communication  </h3>
        <p className="info">l’Institut de paix des Etats-Unis et le réseau de facilitateurs tunisiens
 <span>&bull;</span><em className="date">17 et 18 novembre 2018 </em></p>

 <h3>Social TIC Challenge</h3>
        <p className="info">SUP COM
 <span>&bull;</span><em className="date">6 novembre 2018  </em></p>


 <h3>Le marketing de soi </h3>
        <p className="info">Faculté des lettres, des arts et des humanités. Manouba
 <span>&bull;</span><em className="date">20 Octobre 2018 </em></p>


 <h3>De l’art de convaincre </h3>
        <p className="info">Polytechnique internationale Lac 
 <span>&bull;</span><em className="date">15 Octobre 2018 </em></p>


 <h3>L’Estime de soi  </h3>
        <p className="info">JCI
 <span>&bull;</span><em className="date">10 Octobre 2018 </em></p>


 <h3>Le marketing de soi  </h3>
        <p className="info">Institut supérieur des sciences humaines Tunis 
 <span>&bull;</span><em className="date">9 Octobre 2018</em></p>


 <h3>Gérer ses priorités</h3>
        <p className="info">Institut Art et métiers
 <span>&bull;</span><em className="date">19 Avril 2018 </em></p>


 <h3>La confiance en soi </h3>
        <p className="info">GO MY CODE
 <span>&bull;</span><em className="date">15 avril 2018 </em></p>


 <h3>L’art de convaincre</h3>
        <p className="info">Spark Club Dauphine 
Fondation Biat

 <span>&bull;</span><em className="date">9 Avril 2018 </em></p>

 <h3>De l’idée au projet </h3>
        <p className="info">Avicenne Private School

 <span>&bull;</span><em className="date">14 mars 2018 </em></p>


 <h3>La rédaction de CV</h3>
        <p className="info">Université Paris Dauphine
 <span>&bull;</span><em className="date">12 mars 2018 </em></p>


 <h3>L’art de communiquer</h3>
        <p className="info">Enactus ISAMM

 <span>&bull;</span><em className="date">10 Mars 2018</em></p>


 <h3>Professionnels de l’hôtellerie</h3>
        <p className="info">Vatel

 <span>&bull;</span><em className="date">2017 -  2018</em></p>


 <h3>Les écrits en communication</h3>
        <p className="info">Grandes écoles de communication

 <span>&bull;</span><em className="date">Février –Mars 2018 </em></p>


 <h3>La confiance en soi</h3>
        <p className="info">Business school

 <span>&bull;</span><em className="date">Février 2018 </em></p>

 
 <h3>Les clés de la confiance en soi</h3>
        <p className="info">4 C : ISCAE

 <span>&bull;</span><em className="date">Février 2018 </em></p>


 
 <h3>L’art oratoire</h3>
        <p className="info">Université ESPRIT
 <span>&bull;</span><em className="date">Février 2018 </em></p>


 
 <h3>Pour une meilleure communication</h3>
        <p className="info">Laboratoire de recherche entreprise et recherche en marketing

 <span>&bull;</span><em className="date">Février 2018 </em></p>


 
 <h3>Les forces de la conviction</h3>
        <p className="info">JCI Hammam Chatt

 <span>&bull;</span><em className="date">Février 2018 </em></p>


 
 <h3>Le marketing de soi</h3>
        <p className="info">Salon RYADA
 <span>&bull;</span><em className="date">Février 2018 </em></p>

 
 <h3>La gestion des risques</h3>
        <p className="info">CO-Think 111

 <span>&bull;</span><em className="date">Janvier 2018 </em></p>

 
 <h3>Les écrits professionnels</h3>
        <p className="info">Entreprise SKALLA

 <span>&bull;</span><em className="date">Décembre 2017 </em></p>

 
 <h3>La gestion des conflits </h3>
        <p className="info">Entreprise SKALLA

 <span>&bull;</span><em className="date">Décembre 2017 </em></p>


 
 <h3>L’image de soi </h3>
        <p className="info">JCI Hammam Lif

 <span>&bull;</span><em className="date">Novembre 2017 </em></p>



 
 <h3>Comment booster son entreprise ? </h3>
        <p className="info">Co-Think 111

 <span>&bull;</span><em className="date">Octobre 2017 </em></p>


 
 <h3>Coaching en Be 2 BE en techniques de communication</h3>
        <p className="info">La douane tunisienne 

 <span>&bull;</span><em className="date">Aout 2017 </em></p>


 
 <h3>Formation en techniques de communication orale et écrite</h3>
        <p className="info">Amicale des cadres de la sécurité de la présidence de Carthage 

 <span>&bull;</span><em className="date">Aout 2017 </em></p>

 
 <h3>Formation et coaching en communication</h3>
        <p className="info">L’organisation nationale de l’enfance tunisienne de Ben Arous.

 <span>&bull;</span><em className="date">Avril 2016 </em></p>


            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
