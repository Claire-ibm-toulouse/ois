/* eslint-disable jsx-a11y/anchor-has-content */
import "../styles/landing.scss";
import { Desktop, Pattern, Touch } from "@carbon/pictograms-react";
import {
  TableOfContents,
  LeadSpace,
  Layout,
  ContentBlockMedia,
  LinkList,
  ContentBlockMixed,
  ContentBlockSegmented,
  ContentBlockSimple,
  CardSectionImages,
  CardSectionSimple,
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
      title="OIS"
      copy="Offres Innovantes de Services"
      gradient={true}
      // buttons={buttons}
      image={{
        sources: [
          {
            src: "https://dummyimage.com/320x370/ee5396/161616",
            breakpoint: "sm",
          },
          {
            src: "https://dummyimage.com/672x400/ee5396/161616",
            breakpoint: "md",
          },
        ],
        defaultSrc: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        alt: "Image alt text",
      }}
    />
    <TableOfContents menuLabel="Jump to" theme="white" stickyOffset={48}>
      <a name="content-block-mixed" data-title="A propos" />
      <ContentBlockMixed
        heading="A propos"
        copy="Offres Innovantes de Services (OIS) est une jeune entreprise dynamique portée par deux grandes entités internationales. 
        Depuis ses débuts, l'entreprise a bien grandi et cherche encore à évoluer en même temps que ses salariés. 
        Et pour cela, elle reste à l'écoute de ses collaborateurs. 
        OIS est répartie en 3 activités principales qui sont: l'installation du système d'alarme chez les particuliers, 
        la maintenance informatique dans des agences bancaires et chez des commercants, une cellule transport."
        // module "Rejoignez-vous" en bas de page"
        cta={{
          cta: {
            href: "https://fr.indeed.com/cmp/Offres-Innovantes-De-Services-1?attributionid=adwebapp#",
          },
          style: "card",
          type: "local",
          copy: "Envie de tenter l’aventure OIS ? N’hésitez plus et envoyer votre CV à l’adresse mail suivante : charlotte.ruiz@o-i-s.fr ou directement sur Indeed",
        }}
        items={[
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
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Technicien itinérant en informatique et monétique",
                copy: "Nos technicien(ne)s interviennent dans des succursales bancaires ou commerçants en garantissant la qualité de service et la satisfaction de nos clients. Principales missions: assurer des missions d’installation et/ou de dépannage selon les instructions et les procédures définies, conseiller et assister les utilisateurs, procéder aux diagnostics des pannes, appliquer une procédure de tests aux différents stades de l’intervention, réaliser les actions administratives, informatiques et logistiques.",
                cta: {
                  href: "https://www.example.com",
                },
              }
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
              image: {
                sources: [
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
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://media.istockphoto.com/photos/young-woman-entering-authorization-code-picture-id822123538?s=612x612",
              },
            },
            heading: "Pourquoi nous rejoindre",
            items: [
              {
                //heading: "Pour toutes ces raisons :",
                copy:
                  "Nous sommes une entreprise dynamique et en perpétuelle évolution. OIS est à l’écoute de ses salariés. Nous développons les compétences de nos collaborateurs. Nos techniciens sont autonomes. Nous disposons d’un CE. Nous avons mis en place le 1% logement. Participation aux bénéfices",
              },
            ],
          },

          {
            type: "ContentGroupPictograms",
            heading: "Notre processus de recrutement",
            items: [
              {
                heading: "Réception et analyse des CV",
                copy:
                  "Nos offres d’emplois et notre entreprise vous intéressent et vous postulez à l’adresse suivante : charlotte.ruiz@o-i-s.fr",
                cta: {
                  href: "mailto:charlotte.ruiz@o-i-s.fr",
                  type: "local",
                  copy: "Envoyer votre candidature",
                },
                pictogram: {
                  src: Desktop,
                  "aria-label": "Desktop",
                },
              },
              {
                heading: "Entretien téléphonique",
                copy:
                  "Votre candidature a retenu notre attention et nous souhaitons échanger avec vous sur votre parcours professionnel",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Pattern,
                  "aria-label": "Pattern",
                },
              },
              {
                heading: "Entretien face à face",
                copy:
                  "Rencontre avec votre éventuel futur manager pour détailler plus en détails le poste et établir un véritable échange",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Touch,
                  "aria-label": "Touch",
                },
              },
              {
                heading: "Validation de la candidature et intégration",
                copy:
                  "Félicitations, votre candidature est retenue !",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Touch,
                  "aria-label": "Touch",
                },
              },
            ],
          },
          {
            type: "ContentGroupCards",
            heading: "Témoignages",
            items: [
              {
                heading:
                  "M - Manager opérationnel itinérant",
                copy:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "M - Manager de la conduite d'activités",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "https://www.example.com",
                },
              }
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
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
                alt: "Image alt text",
                defaultSrc:
                  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              },
            },
            heading: "Témoignages",
            items: [
              {
                heading: "M - Manager opérationnel itinérant",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
              {
                heading: "M - Manager de la conduite d'activités",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
              image: {
                sources: [
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
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://media.istockphoto.com/photos/young-woman-entering-authorization-code-picture-id822123538?s=612x612",
              },
            },
            heading: "Pourquoi nous rejoindre",
            items: [
              {
                //heading: "Pour toutes ces raisons :",
                copy:
                  "Nous sommes une entreprise dynamique et en perpétuelle évolution. OIS est à l’écoute de ses salariés. Nous développons les compétences de nos collaborateurs. Nos techniciens sont autonomes. Nous disposons d’un CE. Nous avons mis en place le 1% logement. Participation aux bénéfices",
              },
            ],
          },
        ]}
        /*
        aside={{
          items: (
            <LinkList
              heading="Tutorials"
              items={[
                {
                  type: "local",
                  copy: "Containerization A Complete Guide",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
                {
                  type: "external",
                  copy: "Why should you use microservices and containers",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
              ]}
            />
          ),
          border: false,
        }}
        */
      />
      <Layout nested={true} type="2-1" border={true}>
        <div>
          <a
            name="content-block-segmented"
            data-title="Recrutement"
          />
      <ContentBlockMixed
        heading="Recrutement"
        copy="Offres Innovantes de Services (OIS) est une jeune entreprise dynamique portée par deux grandes entités internationales. 
        Depuis ses débuts, l'entreprise a bien grandi et cherche encore à évoluer en même temps que ses salariés. 
        Et pour cela, elle reste à l'écoute de ses collaborateurs. 
        OIS est répartie en 3 activités principales qui sont: l'installation du système d'alarme chez les particuliers, 
        la maintenance informatique dans des agences bancaires et chez des commercants, une cellule transport."
        // module "Rejoignez-vous" en bas de page"
        cta={{
          cta: {
            href: "https://fr.indeed.com/cmp/Offres-Innovantes-De-Services-1?attributionid=adwebapp#",
          },
          style: "card",
          type: "local",
          copy: "Envie de tenter l’aventure OIS ? N’hésitez plus et envoyer votre CV à l’adresse mail suivante : charlotte.ruiz@o-i-s.fr ou directement sur Indeed",
        }}
        items={[
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
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Technicien itinérant en informatique et monétique",
                copy: "Nos technicien(ne)s interviennent dans des succursales bancaires ou commerçants en garantissant la qualité de service et la satisfaction de nos clients. Principales missions: assurer des missions d’installation et/ou de dépannage selon les instructions et les procédures définies, conseiller et assister les utilisateurs, procéder aux diagnostics des pannes, appliquer une procédure de tests aux différents stades de l’intervention, réaliser les actions administratives, informatiques et logistiques.",
                cta: {
                  href: "https://www.example.com",
                },
              }
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
              image: {
                sources: [
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
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://media.istockphoto.com/photos/young-woman-entering-authorization-code-picture-id822123538?s=612x612",
              },
            },
            heading: "Pourquoi nous rejoindre",
            items: [
              {
                //heading: "Pour toutes ces raisons :",
                copy:
                  "Nous sommes une entreprise dynamique et en perpétuelle évolution. OIS est à l’écoute de ses salariés. Nous développons les compétences de nos collaborateurs. Nos techniciens sont autonomes. Nous disposons d’un CE. Nous avons mis en place le 1% logement. Participation aux bénéfices",
              },
            ],
          },

          {
            type: "ContentGroupPictograms",
            heading: "Notre processus de recrutement",
            items: [
              {
                heading: "Réception et analyse des CV",
                copy:
                  "Nos offres d’emplois et notre entreprise vous intéressent et vous postulez à l’adresse suivante : charlotte.ruiz@o-i-s.fr",
                cta: {
                  href: "mailto:charlotte.ruiz@o-i-s.fr",
                  type: "local",
                  copy: "Envoyer votre candidature",
                },
                pictogram: {
                  src: Desktop,
                  "aria-label": "Desktop",
                },
              },
              {
                heading: "Entretien téléphonique",
                copy:
                  "Votre candidature a retenu notre attention et nous souhaitons échanger avec vous sur votre parcours professionnel",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Pattern,
                  "aria-label": "Pattern",
                },
              },
              {
                heading: "Entretien face à face",
                copy:
                  "Rencontre avec votre éventuel futur manager pour détailler plus en détails le poste et établir un véritable échange",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Touch,
                  "aria-label": "Touch",
                },
              },
              {
                heading: "Validation de la candidature et intégration",
                copy:
                  "Félicitations, votre candidature est retenue !",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Touch,
                  "aria-label": "Touch",
                },
              },
            ],
          },
          {
            type: "ContentGroupCards",
            heading: "Témoignages",
            items: [
              {
                heading:
                  "M - Manager opérationnel itinérant",
                copy:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "M - Manager de la conduite d'activités",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                cta: {
                  href: "https://www.example.com",
                },
              }
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
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
                alt: "Image alt text",
                defaultSrc:
                  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              },
            },
            heading: "Témoignages",
            items: [
              {
                heading: "M - Manager opérationnel itinérant",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
              {
                heading: "M - Manager de la conduite d'activités",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
              image: {
                sources: [
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
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://media.istockphoto.com/photos/young-woman-entering-authorization-code-picture-id822123538?s=612x612",
              },
            },
            heading: "Pourquoi nous rejoindre",
            items: [
              {
                //heading: "Pour toutes ces raisons :",
                copy:
                  "Nous sommes une entreprise dynamique et en perpétuelle évolution. OIS est à l’écoute de ses salariés. Nous développons les compétences de nos collaborateurs. Nos techniciens sont autonomes. Nous disposons d’un CE. Nous avons mis en place le 1% logement. Participation aux bénéfices",
              },
            ],
          },
        ]}
        /*
        aside={{
          items: (
            <LinkList
              heading="Tutorials"
              items={[
                {
                  type: "local",
                  copy: "Containerization A Complete Guide",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
                {
                  type: "external",
                  copy: "Why should you use microservices and containers",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
              ]}
            />
          ),
          border: false,
        }}
        */
      />
          </div>
        <div></div>
      </Layout>



      <Layout nested={true} type="2-1" border={true}>
        <div>
          <a
            name="content-block-segmented"
            data-title="Content Block - Segmented"
          />
          <ContentBlockSegmented
            copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit."
            cta={{
              cta: {
                href: "https://www.example.com",
              },
              style: "card",
              type: "local",
              copy: "Lorem ipsum dolor",
            }}
            heading="Content Block - Segmented"
            image={{
              heading: "Mauris iaculis eget dolor nec hendrerit.",
              image: {
                sources: [
                  {
                    src:
                      "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                    breakpoint: 320,
                  },
                  {
                    src:
                      "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                    breakpoint: 400,
                  },
                  {
                    src:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                    breakpoint: 672,
                  },
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
              },
            }}
            items={[
              {
                heading: "Lorem ipsum dolor sit amet.",
                copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.`,
              },
              {
                heading: "Lorem ipsum dolor sit amet.",
                image: {
                  heading: "Mauris iaculis eget dolor nec hendrerit.",
                  image: {
                    sources: [
                      {
                        src:
                          "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                        breakpoint: 320,
                      },
                      {
                        src:
                          "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                        breakpoint: 400,
                      },
                      {
                        src:
                          "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                        breakpoint: 672,
                      },
                    ],
                    alt: "Image alt text",
                    defaultSrc:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                  },
                },
                copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.`,
              },
            ]}
          />
        </div>
        <div></div>
      </Layout>
      <Layout nested={true} type="2-1" border={true}>
        <div>
          <a name="content-block-simple" data-title="Content Block - Simple" />
          <ContentBlockSimple
            copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Here are
          some common categories:

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero."
            heading="Content Block - Simple"
            image={{
              heading:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              image: {
                sources: [
                  {
                    src:
                      "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                    breakpoint: 320,
                  },
                  {
                    src:
                      "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                    breakpoint: 400,
                  },
                  {
                    src:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                    breakpoint: 672,
                  },
                ],
                alt: "Image alt text",
                defaultSrc:
                  "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
              },
            }}
            cta={{
              cta: {
                href: "https://www.ibm.com",
              },
              style: "card",
              type: "external",
              heading: "Lorem ipsum dolor sit amet",
              copy: "Lorem ipsum dolor sit ametttt",
            }}
          />
        </div>
        <div></div>
      </Layout>
      <Layout nested={true} type="2-1" border={true}>
        <div>
          <a
            name="content-block-media"
            data-title="Content Block - with Media"
          />
          <ContentBlockMedia
            copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean
            et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at
            elit sollicitudin, sodales nulla quis, *consequat* libero. Phasellus at
            elit sollicitudin, sodales nulla quis, consequat libero."
            heading="Content Block - with Media"
            items={[
              {
                mediaType: "image",
                mediaData: {
                  heading: "Lorem ipsum dolor sit amet.",
                  image: {
                    sources: [
                      {
                        src:
                          "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                        breakpoint: 320,
                      },
                      {
                        src:
                          "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                        breakpoint: 400,
                      },
                      {
                        src:
                          "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                        breakpoint: 672,
                      },
                    ],
                    alt: "Image alt text",
                    defaultSrc:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                  },
                },
                heading: "Lorem ipsum dolor sit amet",
                items: [
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                ],
                cta: {
                  cta: {
                    href: "https://www.example.com",
                  },
                  style: "card",
                  type: "local",
                  copy: "Lorem ipsum dolor sit ametttt",
                },
              },
              {
                mediaType: "image",
                mediaData: {
                  heading: "Lorem ipsum dolor sit amet.",
                  image: {
                    sources: [
                      {
                        src:
                          "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                        breakpoint: 320,
                      },
                      {
                        src:
                          "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                        breakpoint: 400,
                      },
                      {
                        src:
                          "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                        breakpoint: 672,
                      },
                    ],
                    alt: "Image alt text",
                    defaultSrc:
                      "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                  },
                },
                heading: "Lorem ipsum dolor sit amet",
                items: [
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                  {
                    heading: "Lorem ipsum dolor sit amet.",
                    copy:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                  },
                ],
                cta: {
                  cta: {
                    href: "https://www.example.com",
                  },
                  style: "card",
                  type: "local",
                  copy: "Lorem ipsum dolor sit ametttt",
                },
              },
            ]}
            cta={{
              type: "feature",
              heading: "Témoignages",
              card: {
                cta: {
                  href: "https://www.example.com",
                  icon: {
                    src: ArrowRight20,
                  },
                },
                heading: "M - Manager opérationnel itinérant",
                copy: "Lorem ipsum",
                image: {
                  defaultSrc:
                    "https://dummyimage.com/672x672/ee5396/161616&text=1x1",
                  alt: "Image alt text",
                },
              },
            }}
          />
        </div>
        <div></div>
      </Layout>
    </TableOfContents>

    <CardSectionImages
      heading="Card Section - with Images"
      theme="g10"
      cards={[
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Topic",
          heading: "Natural language processing.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Blog",
          heading: "Natural language processing.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Topic",
          heading: "Natural language processing.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Blog",
          heading:
            "Serving society ethically in the age of Artificial Intelligence.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
            alt: "Image alt text",
          },
          eyebrow: "Topic",
          heading:
            "Serving society ethically in the age of Artificial Intelligence.",
          cta: {
            href: "https://www.example.com",
          },
        },
      ]}
    />

    <CardSectionSimple
      heading="Card Section - Simple"
      theme="g10"
      cards={[
        {
          heading: "Nunc convallis lobortis",
          copy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Fusce gravida eu arcu",
          copy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Interdum et malesuada",
          copy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Nunc convallis loborti",
          copy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Nunc convallis lbortis",
          copy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
      ]}
      cta={{
        heading: "Top level card link",
        cta: {
          href: "https://www.example.com",
        },
      }}
    />
  </>
);

export default Home;
