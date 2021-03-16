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
  Layout
} from "@carbon/ibmdotcom-react";
import { Launch20 } from "@carbon/icons-react";
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
      copy="Une société de services du groupe IBM France spécialisée dans l'installation de systèmes d'alarmes chez les particuliers et dans la maintenance informatique des agences bancaires."
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
        copy="OIS (Offres Innovantes de Services) est une jeune entreprise dynamique portée par deux grandes entités internationales. 
        Depuis ses débuts, l'entreprise a bien grandi et cherche encore à évoluer en même temps que ses salariés. 
        Et pour cela, elle reste à l'écoute de ses collaborateurs. 
        OIS est répartie en 3 activités principales : l'installation de systèmes d'alarmes chez les particuliers, 
        la maintenance informatique dans des agences bancaires et chez des commercants, et une cellule transport."
        
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
                  "Nos technicien(ne)s itinérants installent des systèmes d’alarmes chez des particuliers et des petites entreprises. Principales missions : rédiger le diagnostic sécuritaire en y consignant les souhaits et réserves du client, réaliser les tests attestant le bon fonctionnement du système d’alarme installé, expliquer le fonctionnement du système à l’abonné, intervenir en cas de défauts techniques du système chez l’abonné, assurer le remplacement des pièces.",
                cta: {
                  href: "#nousrejoindre",
                },
              },
              {
                heading:
                  "Technicien itinérant en informatique et monétique",
                copy: 
                  "Nos technicien(ne)s interviennent dans des succursales bancaires ou commerçants en garantissant la qualité de service et la satisfaction de nos clients. Principales missions: assurer des missions d’installation et/ou de dépannage selon les instructions et les procédures définies, conseiller et assister les utilisateurs, procéder aux diagnostics des pannes, appliquer une procédure de tests aux différents stades de l’intervention, réaliser les actions administratives, informatiques et logistiques.",
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
                  "Nous sommes une entreprise dynamique, à taille humaine et en perpétuelle évolution. Soucieux de respecter l'équilibre vie privée vie professionnelle, nous travaillons en confiance avec nos collaborateurs et vous accordons une grande autonomie. Le développement de vos compétences par des formations adaptées et continues tout au long de votre parcours professionnel, ainsi que des conditions motivantes : CE, 1% Logement, participation aux bénéfices, vous placent au coeur de la stratégie de l'entreprise. Nous recrutons partout en France alors n'attendez plus : rejoignez-nous!",
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
                      "Rencontre avec votre éventuel futur manager pour détailler plus en détails le poste et établir un véritable échange.",
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
                      "\"Ce que j'aime dans mon métier est que chaque journée est différente. J'apprécie aussi l’autonomie, la relation client, l’aspect technico-commercial, la proximité avec mes collaborateurs (manager, RH, conduite d'activité ...) toujours à l'écoute pour apporter des solutions.\"",
                    cta: {
                      href: "#nousrejoindre",
                    },
                  },
                  {
                    heading: "Olivier - Technicien itinérant en informatique et monétique",
                    copy:
                      "\"Le meilleur moment de ma journée c'est de terminer mon intervention avec la satisfaction du Client. Ce que j'aime le plus dans mon métier : l'autonomie, la diversité des activités et des échanges, la possibilité de monter en compétences sur différents projets, travailler en itinérance et découvrir notre région au travers de nos tournées.\"",
                    cta: {
                      href: "#nousrejoindre",
                    },
                  },
                  {
                    heading: "Mouna - Manager de la conduite d'activités",
                    copy:
                      "\"Je suis manager d'une équipe de 4 personnes. Pour réussir dans mon métier, il faut être à l'écoute, avoir un bon esprit d'analyse et une volonté de s'améliorer. J'apprécie de faire monter en compétences mes collaboratrices, évoluer à leur côté et contribuer à la bonne marche de mon entreprise.\"",
                    cta: {
                      href: "#nousrejoindre",
                    },
                  },
                  {
                    heading: "Ludovic - Manager opérationnel",
                    copy:
                      "\"Je m'occupe d'une équipe de 20 techniciens (6 en informatique et 14 en alarme). Pour exercer mon métier, il faut être à l'écoute, disponible, communiquer, connaître le métier des techniciens. J'aime apporter des réponses et solutions à mes collaborateurs. J'apprécie la diversité de mes activités et l'appui des deux grandes entités de notre entreprise.\"",
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
        </div>
        <div></div>
      </Layout>

    </TableOfContents>
  </>
);

export default Home;
