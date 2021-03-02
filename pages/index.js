/* eslint-disable jsx-a11y/anchor-has-content */
import "../styles/landing.scss";
import { Envelope, Headphones, PartnerRelationship, FaceSatisfied } from "@carbon/pictograms-react";
import {
  TableOfContents,
  LeadSpace,
  LinkList,
  ContentBlockMixed,
  ContentBlockSimple
} from "@carbon/ibmdotcom-react";
import { ArrowRight20 } from "@carbon/icons-react";
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
        defaultSrc: "leadspaceimage2.jpg",
        alt: "Image alt text",
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
              //heading: "Lorem ipsum dolor sit amet.",
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
                alt: "picture showing holding hands",
                defaultSrc:
                  "leadspaceimage.jpg",
              },
            },
            heading: "Pourquoi nous rejoindre",
            items: [
              {
                //heading: "Pour toutes ces raisons :",
                copy:
                  "Nous sommes une entreprise dynamique, à taille humaine et en perpétuelle évolution. Soucieux de respecter l'équilibre vie privée vie professionnelle, nous travaillons en confiance avec nos collaborateurs en leur accordant une grande autonomie. Le développement des compétences est assuré par des formations adaptées et continues tout au long du parcours professionnel, avec des conditions motivantes : CE, 1% Logement, participation aux bénéfices. Nous recrutons partout en France, alors n'attendez plus et [rejoignez-nous](#nousrejoindre) !",
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
                {
                  type: "external",
                  copy: "Envoyez-nous directement votre CV",
                  cta: {
                    href: "mailto:charlotte.ruiz@o-i-s.fr",
                  },
                },
              ]}
            />
          ),
          border: false,
        }}
        
      />
      

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
                  "Nos offres d’emplois et notre entreprise vous intéressent et vous [postulez directement à cette adresse email](mailto:charlotte.ruiz@o-i-s.fr).",
                /*cta: {
                  mailto: "charlotte.ruiz@o-i-s.fr",
                  type: "external",
                  copy: "Envoyer votre candidature",
                },*/
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
        
      <a name="témoignages" data-title="Témoignages" />
      <ContentBlockMixed
        heading="Témoignages"

        //Module "Témoignages" #1
        /*

        items={[
          {
            type: "ContentGroupCards",
            //heading: "Ils vous parlent de nous",
            items: [
              {
                heading: 
                  "Alain - Technicien itinérant en systèmes d’alarmes",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "#nousrejoindre",
                },
              },
              {
                heading: "Basile - Technicien itinérant en informatique et monétique",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "#nousrejoindre",
                },
              },
              {
                heading: "Cédric - Manager opérationnel itinérant",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "#nousrejoindre",
                },
              },
              {
                heading: "Dylan - Manager de la conduite d'activités",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "#nousrejoindre",
                },
              },
            ],
          },
        ]}*/

        //Module "Témoignages" #2
        
        items={[
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              //heading: "Lorem ipsum dolor sit amet.",
              image: {
                sources: [
                  {
                    src:
                      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    breakpoint: 320,
                  },
                  {
                    src:
                      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    breakpoint: 400,
                  },
                  {
                    src:
                      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    breakpoint: 672,
                  },
                ],
                alt: "Image showing holding hands",
                defaultSrc:
                  "leadspaceimage.jpg",
              },
            },

            items: [
              {
                heading: "Alain - Technicien itinérant en systèmes d’alarmes",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
              {
                heading: "Basile - Technicien itinérant en informatique et monétique",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
              {
                heading: "Cédric - Manager opérationnel itinérant",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
              {
                heading: "Dylan - Manager de la conduite d'activités",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
            ],
          },
        ]}
      />

      <a name="nousrejoindre" data-title="Nous rejoindre" />
      <ContentBlockSimple
        id="nousrejoindre"
        heading="Nous rejoindre"
        // Module "Rejoignez-nous" en bas de page
        cta={{
          cta: {
            href: "https://fr.indeed.com/cmp/Offres-Innovantes-De-Services-1?attributionid=adwebapp#",
          },
          style: "card",
          type: "external",
          copy: "Envie de tenter l’aventure OIS ? N’hésitez plus et [envoyez-nous votre CV](mailto:charlotte.ruiz@o-i-s.fr) ou venez consulter [nos offres d'emploi sur Indeed](https://fr.indeed.com/cmp/Offres-Innovantes-De-Services-1?attributionid=adwebapp#).",
        }}
        
        
      />

    </TableOfContents>
  </>
);

export default Home;
