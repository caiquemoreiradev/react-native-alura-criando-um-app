import logo from '../../assets/logo.webp';

import pratt from '../../assets/cast/pratt.jpg';
import saldana from '../../assets/cast/saldana.jpg';
import bautista from '../../assets/cast/bautista.jpg';
import gillan from '../../assets/cast/gillan.jpg';
import pom from '../../assets/cast/pom.jpg';

const movie = {
  header: {
    title: "Detalhes do filme",
  },
  details: {
    name: "Guardiões da galáxia Volume 3",
    companyLogo: logo,
    companyName: "Marvel Studios",
    description: "Peter Quill, que ainda está a recuperar da perda de Gamora, tem que reunir a sua equipa para defender o universo e proteger um dos seus. Uma missão que, se não for concluída com sucesso, pode levar ao fim dos Guardiões como os conhecemos.",
    buttonTitle: "Quero assistir",
  },
  cast: {
    title: "Cast",
    list: [
      {
        name: "Chris Pratt",
        image: pratt,
        character: "Senhor das estrelas"
      },
      {
        name: "Zoe Saldaña",
        image: saldana,
        character: "Gamora"
      },
      {
        name: "Dave Bautista",
        image: bautista,
        character: "Drax o destruidor"
      },
      {
        name: "Karen Gillan",
        image: gillan,
        character: "Nebulosa"
      },
      {
        name: "Pom Klementieff",
        image: pom,
        character: "Mantis"
      }
    ]
  }
}

export default movie;