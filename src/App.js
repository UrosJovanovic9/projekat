import logo from './logo.svg';
import './App.css';
import Gradovi from "./components/Gradovi";
import FormaPrijava from "./components/FormaPrijava";
import FormaRegistracija from "./components/FormaRegistracija";
import NavigationBar from "./components/NavigationBar";
import Beograd from "./img/Beograd1.jpg";
import Berlin from  "./img/Berlin1.jpg";
import Lisabon from "./img/Lisabon1.jpg"
import London from "./img/London1.jpg";
import Madrid from "./img/Madrid1.jpg"
import Pariz from "./img/Pariz1.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";




function App() {

  const [gradoviEvropa] = useState([
    {
      id: 1,
      pregled: 0,
      naziv: "Beograd",
      opis: "2002 | avanturistički",
      slika: Beograd,
      ocena: "7.4",
      opisGrada: "Posle dugog letnjeg raspusta s užasnim Darslijevima, Hari Poter ne uspeva da se ukrca na voz za Hogvorts, školu čarobnjaštva i magije, kako bi pošao u drugu godinu. Harijeva jedina mogućnost transporta jeste čarobni leteći automobil, ali nažalost njime udara u vrednu (i problematičnu) Mlatarajuću vrbu. Ipak, sve to je mačji kašalj u poređenju s onim što čeka Harija te jeseni unutar ukletih zidova Hogvortsa. Jezivi, zlobni glasovi šapuću sa zidova samo Hariju i izgleda izvesno da će ga Drako Melfoj srediti. Uskoro nije samo Hari zabrinut za svoj opstanak dok se zastrašujuće stvari dešavaju u školi. Misteriozna svetlucava slova na zidu govore: Dvorana tajni je otvorena. Neprijatelji naslednika, čuvajte se. Ali šta to tačno znači?"
    },
    {
      id: 2,
      pregled: 0,
      naziv: "Pariz",
      opis: "2001 | avanturistički",
      slika: Pariz,
      ocena: "7.6",
      opisGrada: "Bestseler Dž. K. Rouling prerasta u ovu divnu fantastičnu avanturu Krisa Kolambusa. Na svoj 11. rođendan, Hari Poter (Danijel Redklif), koji živi nesrećno sa tetkom i tečom koji ga ne žele, od džina Hagrida (Robi Koltrejn) saznaje da je on zapravo siroče moćnih čarobnjaka. Ponuđeno mu je mesto u prestižnom Hogvortsu, internatu za čarobnjake koji postoji u svetu magije i fantazije izvan dosadnog sveta normalaca. U Hogvortsu, Hari brzo stiče nove prijatelje i počinje da sklapa kockice misteriozne smrti svojih roditelja, koja izgleda uopšte nije bila slučajna."
    },
    {
      id: 3,
      pregled: 0,
      naziv: "Madrid",
      opis: "2011 | avanturistički",
      slika: Madrid,
      ocena: "8.1",
      opisGrada: "Ovo je Hari Poterova četvrta godina u školi čarobnjaštva Hogvorts! Hari, Ron i Hermion jedva čekaju međunarodno finale u kvidiču. Hari mašto o tome kako provodi vreme sa zavodljivom Čo Čang. On želi da bude normalan četrnaestogodišnji čarobnjak... Ali Hari nije normalan čak ni prema čarobnjačkim standardima. Ove godine, prvi put u više stotina godina, takmičenje će se održati između tri čarobnjačke škole, a takmičari će biti odabrani čarolijom u veoma opasnom događaju. Sada, dok Harija peče njegov ožiljak od munje, ukazujući na prisustvo zlog lorda Voldemorta, Vatreni pehar bira poslednjeg učesnika takmičenja, Harija Potera"
    },
    {
      id: 4,
      pregled: 0,
      naziv: "Lisabon",
      opis: "2009 | avanturistički",
      slika: Lisabon,
      ocena: "7.6",
      opisGrada: "I dok Smrtožderi, ohrabreni povratkom Lorda Voldemorta prave haos i u svetu Normalaca i u svetu Čarobnjaka, Hari sumnja da nove opasnosti leže unutar samog Hogvortsa. Dambldor se žuri da pripremi Harija za konačni obračun za koji zna da se brzo približava i šalje ga na opasnu misiju da nađe ključ kojim će se otključati Voldemortova odbrana. U međuvremenu, učenike napada drugačiji neprijatelj, dok njihovi tinejdžerski hormoni divljaju: Harijevo prijateljstvo sa Đinom Vizli prerasta u nešto dublje, Lavender Braun gaji simpatije prema Ronu, Hermiona se guši od ljubomore... A kutija čokolade sa ljubavnim napitkom završava u pogrešnim rukama. Film je nominovan za Oskara za najbolje ostvarenje u kinematografiji."
    },
    {
      id: 5,
      pregled: 0,
      naziv: "London",
      opis: "2004 | avanturistički",
      slika: London,
      ocena: "7.9",
      opisGrada: "Mladoj 13-godišnjoj čarobnjačkoj zvezdi ovo je treća godina kako ide u školu za čarobnjake Hogvorts, a mračni događaji ni ovoga puta nisu daleko. Serijski ubica Sirius Blek pobegao je iz tvrđave Azkaban - čarobnjačkog zatvora. Herijev život je u opasnosti kada sazna da je ludog ubicu verovatno poslao lord Voldemort da uradi ono što on nije uradio pre 13 godina tj. da ubije Potera! U cilju Harijeve zaštite, Azkaban šalje stotine Dementora, čudovišnih mističnih zatvorskih čuvara, da ga uhvate. Pitanje je da li će Dementori biti od pomoći. Stvari se još više zakomplikuju kada Poter sazna da je Blek povezan sa njegovom prošlošću i odlučuje da ga sam pronađe i suoči se sa mračnim događajem koji se dogodio u noći prije 13 godina."
    },
    {
      id: 6,
      pregled: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      ocena: "8.8",
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
  ]);




  return (
    <BrowserRouter className="App">
    <div className = "Appdiv">
    <NavigationBar></NavigationBar>
      <Routes>
        <Route
          path = "/"
          element ={
            <>
            <h1 className="nazivKontinenta">Evropa</h1>
            <Gradovi gradovi = {gradoviEvropa}/>
            <h1 className="nazivKontinenta">Azija</h1>
            <Gradovi gradovi = {gradoviEvropa}/>
            <h1 className="nazivKontinenta">Severna Amerika</h1>
            <Gradovi gradovi = {gradoviEvropa}/>
            <h1 className="nazivKontinenta">Juzna Amerika</h1>
            <Gradovi gradovi = {gradoviEvropa}/>
            <h1 className="nazivKontinenta">Afrika</h1>
            <Gradovi gradovi = {gradoviEvropa}/>
            <h1 className="nazivKontinenta">Australija</h1>
            <Gradovi gradovi = {gradoviEvropa}/>
            </>
          }
        />
        <Route
        path = "/prijava/*"
        element = {
          <FormaPrijava/>
        }
        />
        <Route
        path = "/registracija/*"
        element = {
          <FormaRegistracija/>
        }
        />
        
      </Routes>

    </div>
  </BrowserRouter>
  );
}

export default App;
