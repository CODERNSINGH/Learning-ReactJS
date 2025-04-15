import React, { Component } from 'react'
import Newscard from './Newscard'

export class News extends Component {
  constructor(){
    // throw error to solve that we have to use super() funtion why we need this is wenever we made object of class then we use constructor

    let articles = [
      {
      "source": {
      "id": null,
      "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "iPhone 17 Pro: Here's What It Might Look Like",
      "description": "Is this what the iPhone 17 Pro model looks like in Apple's upcoming iPhone 17 series? Front Page Tech's 3D artist Asher this morning shared this image of the alleged design of the iPhone 17 Pro, offering perhaps the most polished example yet of Apple's next-g…",
      "url": "https://www.macrumors.com/2025/02/18/iphone-17-pro-heres-what-it-might-looks-like/",
      "urlToImage": "https://images.macrumors.com/t/pcFFdS4vr2FNj067Dc-tlrKKPl8=/3840x/article-new/2025/02/iphone-17-pro-asherdipps.jpg",
      "publishedAt": "2025-02-18T11:21:22Z",
      "content": "Is this what the iPhone 17 Pro model looks like in Apple's upcoming iPhone 17 series? Front Page Tech's 3D artist Asher this morning shared this image of the alleged design of the iPhone 17 Pro, offe… [+2100 chars]"
      },
      {
      "source": {
      "id": "business-insider",
      "name": "Business Insider"
      },
      "author": "Jane Zhang",
      "title": "Mexico is threatening legal action against Google over 'Gulf of America' map changes following Trump's order",
      "description": "Mexican President Claudia Sheinbaum said the label should only include the waters under US jurisdiction, not the entire gulf.",
      "url": "https://www.businessinsider.com/mexico-lawsuit-threat-google-maps-gulf-of-america-2025-2",
      "urlToImage": "https://i.insider.com/67b3f322eb4be2fff9a4d93d?width=1200&format=jpeg",
      "publishedAt": "2025-02-18T02:46:42Z",
      "content": "Mexican President Claudia Sheinbaum has threatened Google with legal action over maps that say \"Gulf of America.\"Luis Barron/ Pixelnews/Future Publishing and Drew Angerer via Getty Images\r\n<ul><li>Me… [+4108 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hipertextual"
      },
      "author": "Rubén Chicharro",
      "title": "El iPhone 17 Air se deja ver con todo detalle: el diseño más loco que ha hecho Apple hasta la fecha",
      "description": "Primero ha sido el iPhone 17 Pro, y ahora le toca el turno a uno de los modelos más interesantes que llegarán en septiembre. El iPhone 17 Air (también conocido como iPhone 17 Slim) se ha dejado ver con todo lujo de detalles en imágenes filtradas, revelando da…",
      "url": "http://hipertextual.com/2025/02/iphone-17-air-imagenes-filtradas",
      "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2025/02/iphone-17-air-002.jpg",
      "publishedAt": "2025-02-18T09:56:51Z",
      "content": "Primero ha sido el iPhone 17 Pro, y ahora le toca el turno a uno de los modelos más interesantes que llegarán en septiembre. El iPhone 17 Air (también conocido como iPhone 17 Slim) se ha dejado ver c… [+1860 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Slate Magazine"
      },
      "author": "Mary Harris",
      "title": "How Eric Adams Got His Charges Dropped",
      "description": "Did Eric Adams get out of jail free through even more corruption?",
      "url": "https://slate.com/podcasts/what-next/2025/02/why-department-of-justice-officials-are-resigning",
      "urlToImage": "https://compote.slate.com/images/3bac4be7-c0d4-4973-8479-fad418daf4e8.jpeg?width=1560",
      "publishedAt": "2025-02-18T10:30:00Z",
      "content": "The Justice Department ordered New York federal prosecutors to drop charges against Eric Adams, claiming his indictment was preventing him from aiding in Trumps immigration crackdown. The move has pr… [+562 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com"
      },
      "author": "Rubén Andrés",
      "title": "Steve Ballmer se ha convertido en milmillonario sin fundar una sola empresa: algunos de sus consejos para conseguirlo",
      "description": "Como principal responsable de ventas, Steve Ballmer fue una pieza clave para construir los cimientos de lo que es la actual Microsoft. Su energía y carisma cautivaron a Bill Gates cuando ambos coincidieron en los pasillos de la residencia de Harvard. Unos año…",
      "url": "https://www.xataka.com/empresas-y-economia/steve-ballmer-se-ha-convertido-milmillonario-fundar-sola-empresa-algunos-sus-consejos-para-conseguirlo",
      "urlToImage": "https://i.blogs.es/295328/steve-ballmer/840_560.jpeg",
      "publishedAt": "2025-02-18T07:30:28Z",
      "content": "Como principal responsable de ventas, Steve Ballmer fue una pieza clave para construir los cimientos de lo que es la actual Microsoft. Su energía y carisma cautivaron a Bill Gates cuando ambos coinci… [+5618 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com"
      },
      "author": "Ricardo Aguilar",
      "title": "Ya sabemos cuántos euros cuesta un plegable triple. El Huawei Mate XT Ultimate ha abierto la veda",
      "description": "Los teléfonos plegables llevan unos cuantos años con nosotros. Los suficientes para empezar a comprender que, lejos de ser un producto con aspiraciones de acercarse al consumidor más mainstream, son cada vez más una pieza de coleccionista de nicho.\n<!-- BREAK…",
      "url": "https://www.xataka.com/moviles/sabemos-cuantos-euros-cuesta-plegable-triple-huawei-mate-xt-ultimate-ha-abierto-veda",
      "urlToImage": "https://i.blogs.es/8a42d1/mate/840_560.jpeg",
      "publishedAt": "2025-02-18T09:16:28Z",
      "content": "Los teléfonos plegables llevan unos cuantos años con nosotros. Los suficientes para empezar a comprender que, lejos de ser un producto con aspiraciones de acercarse al consumidor más mainstream, son … [+1541 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Daringfireball.net"
      },
      "author": "John Gruber",
      "title": "★ Golfo del Gringo Loco",
      "description": "Much serious thought and consideration, from very smart people in Mountain View and Cupertino, went into determining how to respond to a profoundly silly and thoughtless executive order. Yet that response is disturbing.",
      "url": "https://daringfireball.net/2025/02/golfo_del_gringo_loco",
      "urlToImage": "https://daringfireball.net/graphics/df-wide-card.png",
      "publishedAt": "2025-02-18T04:40:38Z",
      "content": "You saw the news last week, I’m sure, that both of the major mapping-app providers, Google and Apple, have updated their maps to refer to the Gulf of Mexico as the “Gulf of America”. Microsoft’s Bing… [+30848 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Wheresyoured.at"
      },
      "author": "Edward Zitron",
      "title": "The Generative AI Con",
      "description": "It's been just over two years and two months since ChatGPT launched, and in that time we've seen Large Language Models (LLMs) blossom from a novel concept into one of the most craven cons of the 21st century — a cynical bubble inflated by OpenAI CEO Sam Altma…",
      "url": "https://www.wheresyoured.at/longcon/",
      "urlToImage": "https://www.wheresyoured.at/content/images/2024/01/wyea--1.jpeg",
      "publishedAt": "2025-02-18T03:47:00Z",
      "content": "It's been just over two years and two months since ChatGPT launched, and in that time we've seen Large Language Models (LLMs) blossom from a novel concept into one of the most craven cons of the 21st… [+34360 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "\"Apple Launch\": Was am Mittwoch kommen könnte und was nicht",
      "description": "Apples Präsentationen liefen zuletzt außer der Reihe: Es gibt keine Keynotes, dennoch wird vorab angekündigt. Diese Produkte könnten am Mittwoch erscheinen.",
      "url": "https://www.heise.de/news/Apple-Launch-Was-am-Mittwoch-kommen-koennte-und-was-nicht-10284616.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/0/2/4/8/4/Screen_Shot_2022-11-15_at_10.00.04-39c957ea2b8c2978.png",
      "publishedAt": "2025-02-18T10:21:00Z",
      "content": "Tim Cooks X-Posting vom vergangenen Donnerstag war kurz und auf den Punkt: \"Macht Euch bereit, das neueste Mitglied der Familie kennenzulernen\", schrieb der Apple-Boss nur ergänzt mit dem Termin (Mit… [+2482 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Daniel Herbig",
      "title": "Mehr Tonqualität für mehr Geld: Spotify HiFi soll dieses Jahr wirklich kommen",
      "description": "Spotify HiFi ist ein Running Gag: Berichte über ein Abo mit erhöhter Tonqualität gibt es seit 2017. In diesem Jahr soll es aber wirklich so weit sein.",
      "url": "https://www.heise.de/news/Mehr-Tonqualitaet-fuer-mehr-Geld-Spotify-HiFi-soll-dieses-Jahr-wirklich-kommen-10285632.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/0/3/0/1/5/shutterstock_1771451024-c184e9daa80698cd.jpg",
      "publishedAt": "2025-02-18T08:13:00Z",
      "content": "Schonmal gelesen? Spotify will noch in diesem Jahr ein teureres Abo mit verlustfreiem Musik-Streaming anbieten. Wem das bekannt vorkommt: Spotify HiFi ist so eine Art Running Gag der Streaming-Branch… [+1810 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Bradley C",
      "title": "Apple @ Work Podcast: How did Parallels bring x86 emulation to Apple Silicon?",
      "description": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary to seamlessly and automatically deploy, manage & protect App…",
      "url": "https://9to5mac.com/2025/02/18/apple-work-podcast-how-did-parallels-bring-x86-emulation-to-apple-silicon/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/Apple-At-Work-FI.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2025-02-18T11:00:00Z",
      "content": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary … [+510 chars]"
      }
      ]
    super(); 
    console.log("it will run as may time as News called ")

    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>Today News Headlines are :-</h1>
        <div className="row">
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="https://media.loom-app.com/gizmodo/dist/images/2025/02/18/design_hero_static__e56c1v71mr6u_large.jpg?w=1280&h=630&f=jpg" /></div>
          <div className="col-md-4"><Newscard title="title 02" description="sample des 2" url="sampleurl 2" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 02" description="sample des 2" url="sampleurl 2" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
          <div className="col-md-4"><Newscard title="title 01" description="sample des" url="sampleurl" /></div>
        </div>


      </div>
    )
  }
}

export default News