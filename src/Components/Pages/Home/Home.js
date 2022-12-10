import React from "react";
import "./Home.css";
import Ingrediant from "./Ingradiant/Ingrediant";
import Image from "./Image/Image";
import Temps from "./Temps/Temps";
import Preparation from "./Preparation/Preparation";
import Utiles from "./Utiles/Utiles";
import Footer from "./Footer/Footer";

const Ingrediant1 = [
  "50 gr chocolat noir 70 % coupé en morceaux",
  "125 ml de beurre",
  "45 ml de cacao",
  "180 ml de farine",
  "1,2 5ml de poudre à pâte",
  "180 ml de sucre",
  "2 oeufs & 5ml d’extrait de vanill",
];
const Ingrediant2 = [
  "1 sachet de poudre pour gelée aux fraises 85 gr",
  "1 paquet de fromage à la crème de 250 gr",
  "1 contenant de garniture fouettée",
  "8 fraises hachées",
  "60 ml de crème fraîche 40%",
  "100 gr de chocolat noir 70% ",
  "375 ml de garniture fouettée, décongelée.",
];
const IngrediantData = {
  partOne: { title: "Pour le gâteau :", details: Ingrediant1 },
  partTwo: { title: "Pour la mousse :", details: Ingrediant2 },
};
const Utile = [
  "Le fouet & La balance numérique",
  "Le cul de poule pour pâtissier",
  "Le verre doseur ou verre gradué",
  "La maryse ou spatule souple",
  "Le rouleau de papier cuisson",
  "Le moule à manqué",
  "Laplaque aluminium perforée",
  "Le spatule coudée",
  "Le mixeur plongeant",
  "Le tamis",
  "Courage ! ",
];
const UtilesData = {
  title: " Les ustensiles nécessaires sont : ",
  details: Utile,
};

const Etaps = [
  "Dans un bain-marie, faire fondre le chocolat pour le gâteau avec le beurre et le cacao. Remuer jusqu’à l’obtention d’une préparation lisse.",
  "Préchauffer le four à 180 °C (350 °F) et dans un bol, mélanger la farine avec la poudre à pâte.",
  "Dans un autre bol, fouetter le sucre avec les oeufs jusqu’à ce que la préparation blanchisse Ajouter la vanille et la préparation au chocolat. Remuer.",
  "Ajouter graduellement le mélange de farine en remuant jusqu’à l’obtention d’une préparation homogène.",
  "Tapisser un moule à charnière de 20 cm (8 po) de papier parchemin, puis y verser la pâte. Égaliser la surface.",
  "Cuire au four de 25 à 30 minutes. Retirer du four et laisser tiédir sur une grille.",
  "Dans un bol, fouetter la poudre pour gelée avec 45 ml (3 c. à soupe) d’eau chaude, jusqu’à ce que la poudre soit dissoute.",
  "Incorporer le fromage à la crème en fouettant à l’aide du batteur électrique, jusqu’à l’obtention d’une préparation homogène.",
  "Incorporer la garniture fouettée en pliant délicatement la préparation à l’aide d’une spatule.",
  "Ajouter les fraises hachées en pliant délicatement la préparation à l’aide d’une spatule.",
  "Verser la mousse aux fraises dans le moule. Égaliser la surface. Réfrigérer de 2 à 3 heures.",
  "Dans un bol, mélanger la crème fraîche avec le chocolat. Faire fondre au micro-ondes, puis remuer jusqu’à l’obtention d’une préparation lisse.",
  "Verser la préparation au chocolat fondu dans le moule et égaliser la surface. Réfrigérer 30 minutes.",
];

const EtapsData = {
  title: " Les étapes de préparation de la recette ",
  details: Etaps,
};

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="title-home">Mousse aux fraises et chocolat </h1>
        <Image />
        <div className="ingrediant-section">
          <h2 className="title-ingredient">Ingrédients </h2>
          <div className="Container-ingrediant">
            <Ingrediant
              title={IngrediantData.partOne.title}
              details={IngrediantData.partOne.details}
            />
            <Ingrediant
              title={IngrediantData.partTwo.title}
              details={IngrediantData.partTwo.details}
            />
          </div>
        </div>
        <Preparation title={EtapsData.title} details={EtapsData.details} />
        <Temps />
        <Utiles title={UtilesData.title} details={UtilesData.details} />
        <Footer />
      </div>
    </>
  );
}
