/* eslint-disable jsx-a11y/anchor-has-content */
import "../styles/landing.scss";
import { Envelope, Headphones, PartnerRelationship, FaceSatisfied } from "@carbon/pictograms-react";
import {
  TableOfContents,
  LeadSpace,
  LinkList,
  ContentBlockMixed,
  ContentGroupSimple,
  ContentBlockMedia,
  Layout,
  FeatureCardBlockMedium,
  FeatureCardBlockLarge
} from "@carbon/ibmdotcom-react";
import { ArrowRight20, Launch20, Launch32 } from "@carbon/icons-react";
import React from "react";

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => (
  <>
    <LeadSpace
      type="centered"
      theme="g100"
      title="Offres Innovantes de Services (OIS)"
      copy="Une société de services du groupe IBM France spécialisée dans l'installation de systèmes d'alarmes chez les particuliers et dans la maintenance informatique pour agences bancaires et commerçants."
      gradient={true}
      // buttons={buttons}
      image={{
        /*sources: [
          {
            src: "https://dummyimage.com/320x370/ee5396/161616",
            breakpoint: "sm",
          },
          {
            src: "https://dummyimage.com/672x400/ee5396/161616",
            breakpoint: "md",
          },
        ],*/
        defaultSrc: "rsz_000021113402_full_copy.jpg",
        alt: "Image d'accueil représentant des buildings",
      }}
    />

    <TableOfContents menuLabel="Jump to" theme="white" stickyOffset={48}>

      
      <a name="content-block-mixed" data-title="A propos" />
      <ContentBlockMixed
        
        // Module "A propos"
        heading="A propos"
        copy="Créée en 2017, OIS (Offres Innovantes de Services) est une jeune entreprise dynamique portée par deux grandes entités internationales. 
        Depuis ses débuts, l'entreprise s’est dotée de compétences techniques de proximité pour accompagner ses clients dans la transformation digitale de leurs entreprises.  
        Les équipes de techniciens prennent en charge les missions avec, comme principe directeur, la qualité du service rendu. Pour cela, elle reste à l'écoute de ses collaborateurs. 
        OIS couvre 3 activités principales : l'installation de systèmes d'alarmes principalement chez les particuliers, l'installation et
        la maintenance de solutions informatiques et monétiques dans des agences bancaires et chez des commercants, et des activités de transport. Notre réponse au marché s’articule autour de trois thèmes : présence géographique, industrialisation et innovation constante."
        
        items={[
          
          // Module "Nos métiers"
          {
            type: "ContentGroupCards",
            heading: "Nos métiers",
            items: [
              {
                heading:
                  "Technicien itinérant en systèmes d’alarmes",
                copy:
                  "Nos technicien(ne)s itinérants installent des systèmes d’alarmes chez des particuliers et entreprises. Principales missions : rédiger le diagnostic sécuritaire en y consignant les besoins du client, réaliser les tests attestant le bon fonctionnement du système d’alarme installé, expliquer le fonctionnement du système à l’abonné, intervenir en cas de défauts techniques du système chez l’abonné, assurer le remplacement des pièces.",
                cta: {
                  href: "#nousrejoindre",
                },
              },
              {
                heading:
                  "Technicien itinérant en informatique et monétique",
                copy: 
                  "Nos technicien(ne)s interviennent dans des succursales bancaires ou commerçants en garantissant la qualité de service et la satisfaction de nos clients. Principales missions: assurer des tâches d’installation et dépannage selon les instructions et procédures définies, conseiller et assister les utilisateurs, procéder aux diagnostics des pannes, appliquer une procédure de tests aux différents stades de l’intervention, réaliser les actions administratives, informatiques et logistiques.",
                cta: {
                  href: "#nousrejoindre",
                },
              }
            ],
          },
          
          // Module "Pourquoi nous rejoindre"
          
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              image: {
                /*sources: [
                  {
                    src:
                      "https://media.istockphoto.com/photos/young-woman-entering-authorization-code-picture-id822123538?s=612x612",
                    breakpoint: 320,
                  },
                  {
                    src:
                      "https://media.istockphoto.com/photos/young-woman-entering-authorization-code-picture-id822123538?s=612x612",
                    breakpoint: 400,
                  },
                  {
                    src:
                      "https://media.istockphoto.com/photos/young-woman-entering-authorization-code-picture-id822123538?s=612x612",
                    breakpoint: 672,
                  },
                ],*/
                alt: "mains jointes symbolisant une équipe",
                defaultSrc:
                  "pexels-fauxels-3184418.jpg",
              },
            },
            heading: "Pourquoi nous rejoindre",
            items: [
              {
                copy:
                  "Nous sommes une entreprise dynamique, à taille humaine et en constante évolution. Soucieux de respecter l'équilibre vie privée vie professionnelle, nous travaillons en confiance avec l'ensemble de nos collaborateurs et leur accordons une grande autonomie. Nous assurons le développement de leurs compétences par des formations adaptées et continues tout au long de leur parcours professionnel. Nous offrons des conditions motivantes : participation aux bénéfices, CE, 1% Logement, etc. OIS place ses salariés et leur développement au coeur de sa stratégie. Nous recrutons partout en France alors n'attendez plus : rejoignez-nous!",
              },
              {
                cta: {
                  href: "https://fr.indeed.com/cmp/Offres-Innovantes-De-Services-1?attributionid=adwebapp#",
                  type: "external",
                  copy: "Consultez nos offres d'emploi sur Indeed",
                },
              },
            ],
          },
        ]}
        
        aside={{
          items: (
            <LinkList
              heading="Rejoignez-nous!"
              items={[
                {
                  type: "external",
                  copy: "Consultez nos offres d'emploi sur Indeed",
                  cta: {
                    href: "https://fr.indeed.com/cmp/Offres-Innovantes-De-Services-1?attributionid=adwebapp#",
                  },
                },
                /*{
                  type: "external",
                  copy: "Une question? Ecrivez-nous",
                  cta: {
                    href: "mailto:Charlotte.Ruiz@fr.ibm.com",
                  },
                },*/
              ]}
            />
          ),
          border: false,
        }}
        
      />
      
      <Layout nested={true} type="2-1" border={false}>
        <div>

          <a name="recrutement" data-title="Recrutement" />
          <ContentBlockMixed
            heading="Recrutement"
            items={[
              
              // Module "Notre processus de recrutement"
              {
                type: "ContentGroupPictograms",
                heading: "Notre processus de recrutement",
                items: [
                  {
                    heading: "Réception et analyse des CV",
                    copy:
                      "Nos offres d’emplois et notre entreprise vous intéressent et vous postulez chez OIS.",
                    pictogram: {
                      src: Envelope,
                      "aria-label": "Envelope",
                    },
                  },
                  {
                    heading: "Entretien téléphonique",
                    copy:
                      "Votre candidature a retenu notre attention et nous souhaitons échanger avec vous sur votre parcours professionnel.",
                    pictogram: {
                      src: Headphones,
                      "aria-label": "Headphones",
                    },
                  },
                  {
                    heading: "Entretien face à face",
                    copy:
                      "Rencontre avec votre éventuel futur manager pour aborder plus en détails les contours du poste et établir un véritable échange.",
                    pictogram: {
                      src: PartnerRelationship,
                      "aria-label": "PartnerRelationship",
                    },
                  },
                  {
                    heading: "Validation de la candidature",
                    copy:
                      "Félicitations, votre candidature est retenue ! Bienvenue chez OIS !",
                    pictogram: {
                      src: FaceSatisfied,
                      "aria-label": "FaceSatisfied",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div></div>
      </Layout>
        
      <Layout nested={true} type="2-1" border={false}>
        <div>

          <a name="témoignages" data-title="Témoignages" />
          <ContentBlockMixed
            heading="Témoignages"

            //Module "Témoignages" #1

            items={[
              {
                type: "ContentGroupCards",
                heading: " ",
                items: [
                  {
                    heading: 
                      "Abdel - Technicien itinérant en systèmes d’alarmes",
                    copy:
                      "\"Ce que j'aime dans mon métier : chaque journée est différente. J'apprécie l’autonomie, la relation client, l’aspect technico-commercial, la proximité avec mes collègues (techniciens, managers, RH, conduite d'activité ...), être toujours à l'écoute pour apporter des solutions.\"",
                    cta: {
                      href: "#nousrejoindre",
                    },
                  },
                  {
                    heading: "Olivier - Technicien itinérant en informatique et monétique",
                    copy:
                      "\"Le meilleur moment de ma journée : terminer mon intervention avec un client satisfait. Ce que j'aime le plus dans mon métier : l'autonomie, la diversité des activités et des échanges, la possibilité de monter en compétences sur différents projets et lignes de produits, travailler en itinérance et découvrir notre région au travers de nos tournées.\"",
                    cta: {
                      href: "#nousrejoindre",
                    },
                  },
                  {
                    heading: "Mouna - Manageur de la conduite d'activités",
                    copy:
                      "\"Après avoir débuté comme pilote d’activité, j’ai pris le poste de manageur d'une équipe de 4 personnes. Pour réussir dans mon métier, il faut savoir écouter, posséder un bon esprit d'analyse et la volonté constante de progresser. Je saisis chaque occasion pour accompagner mes collaborateurs/trices à monter en compétences, et ainsi contribue à la bonne marche de la société.\"",
                    cta: {
                      href: "#nousrejoindre",
                    },
                  },
                  {
                    heading: "Ludovic - Manageur opérationnel",
                    copy:
                      "\"J’ai commencé chez OIS en 2017 comme technicien itinérant basé sur Nantes. Depuis plus de 2 ans, j’ai été promu manageur d'une équipe de 20 techniciens (6 en informatique et 14 en alarme). Pour exercer mon métier, il faut être à l'écoute, se rendre disponible, communiquer, comprendre le métier des techniciens, leur apporter des solutions. J'apprécie la diversité de mes activités et l'appui des deux grandes entités de notre entreprise.\"",
                    cta: {
                      href: "#nousrejoindre",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div></div>
      </Layout>


      <Layout nested={true} type="2-1" border={false}>
        <div>

          <a name="nousrejoindre" data-title="Nous rejoindre" />
          <ContentBlockMedia
            id="nousrejoindre"
            heading="Nous rejoindre"
            items={[]}
            cta={{
              type: "feature",
              heading: " ",
              card: {
                cta: {
                  href: "https://fr.indeed.com/cmp/Offres-Innovantes-De-Services-1?attributionid=adwebapp#",
                  icon: {
                    src: Launch20,
                  },
                },
                heading: "Envie de tenter l’aventure OIS ?",
                copy: "N’hésitez plus et retrouvez toutes nos offres d'emploi sur notre page Indeed !",
                image: {
                  defaultSrc:
                    "chutelibre.jpg",
                  alt: "Groupe de personnes faisant de la chute libre",
                },
              },
            }}
          />

<FeatureCardBlockMedium
        eyebrow="scelerisque purus"
        heading="Feature Card Block Large"
        copy="Habitant morbi tristique senectus et netus et malesuada fames. Habitant morbi tristique."
        cta={{
          href: "https://example.com",
          icon: {
            src: Launch32,
          },
        }}
        image={{
          sources: [
            {
              src: "https://dummyimage.com/320x160/ee5396/161616&text=2:1",
              breakpoint: "sm",
            },
            {
              src: "https://dummyimage.com/400x200/ee5396/161616&text=2:1",
              breakpoint: "md",
            },
            {
              src: "https://dummyimage.com/600x600/ee5396/161616&text=1:1",
              breakpoint: 991,
            },
            {
              src: "https://dummyimage.com/600x300/ee5396/161616&text=2:1",
              breakpoint: "lg",
            },
            {
              src: "https://dummyimage.com/672x672/ee5396/161616&text=1:1",
              breakpoint: "xlg",
            },
          ],
          defaultSrc: "https://dummyimage.com/600x600/ee5396/161616&text=1:1",
          alt: "Image alt text",
        }}
      />
        </div>
        <div></div>
      </Layout>

    </TableOfContents>
  </>
);

export default Home;
