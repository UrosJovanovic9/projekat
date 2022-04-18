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
import Madrid from "./img/Madrid1.jpg";
import Pariz from "./img/Pariz1.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Rezervacije from './components/Rezervacije';
import FormaPromenaLozinke from './components/FormaPromenaLozinke';
import Kontakt from './components/Kontakt';
import UpravljajRezervacijama from './components/UpravljajRezervacijama';
import UpravljajDestinacijama from './components/UpravljajDestinacijama';



function App() {

const [rezervisaniGrad, setRezervisaniGrad] = useState([]);
const [ ukupno, setUkupno ] = useState(0);


  const [gradovi] = useState([
    {
      id: 1,
      broj: 0,
      naziv: "Beograd",
      opis: "2002 | avanturistički",
      slika: Beograd,
      cena: 300,
      opisGrada: "Posle dugog letnjeg raspusta s užasnim Darslijevima, Hari Poter ne uspeva da se ukrca na voz za Hogvorts, školu čarobnjaštva i magije, kako bi pošao u drugu godinu. Harijeva jedina mogućnost transporta jeste čarobni leteći automobil, ali nažalost njime udara u vrednu (i problematičnu) Mlatarajuću vrbu. Ipak, sve to je mačji kašalj u poređenju s onim što čeka Harija te jeseni unutar ukletih zidova Hogvortsa. Jezivi, zlobni glasovi šapuću sa zidova samo Hariju i izgleda izvesno da će ga Drako Melfoj srediti. Uskoro nije samo Hari zabrinut za svoj opstanak dok se zastrašujuće stvari dešavaju u školi. Misteriozna svetlucava slova na zidu govore: Dvorana tajni je otvorena. Neprijatelji naslednika, čuvajte se. Ali šta to tačno znači?"
    },
    {
      id: 2,
      broj: 0,
      naziv: "Pariz",
      opis: "2001 | avanturistički",
      slika: Pariz,
      cena: 350,
      opisGrada: "Bestseler Dž. K. Rouling prerasta u ovu divnu fantastičnu avanturu Krisa Kolambusa. Na svoj 11. rođendan, Hari Poter (Danijel Redklif), koji živi nesrećno sa tetkom i tečom koji ga ne žele, od džina Hagrida (Robi Koltrejn) saznaje da je on zapravo siroče moćnih čarobnjaka. Ponuđeno mu je mesto u prestižnom Hogvortsu, internatu za čarobnjake koji postoji u svetu magije i fantazije izvan dosadnog sveta normalaca. U Hogvortsu, Hari brzo stiče nove prijatelje i počinje da sklapa kockice misteriozne smrti svojih roditelja, koja izgleda uopšte nije bila slučajna."
    },
    {
      id: 3,
      broj: 0,
      naziv: "Madrid",
      opis: "2011 | avanturistički",
      slika: Madrid,
      cena: 300,
      opisGrada: "Ovo je Hari Poterova četvrta godina u školi čarobnjaštva Hogvorts! Hari, Ron i Hermion jedva čekaju međunarodno finale u kvidiču. Hari mašto o tome kako provodi vreme sa zavodljivom Čo Čang. On želi da bude normalan četrnaestogodišnji čarobnjak... Ali Hari nije normalan čak ni prema čarobnjačkim standardima. Ove godine, prvi put u više stotina godina, takmičenje će se održati između tri čarobnjačke škole, a takmičari će biti odabrani čarolijom u veoma opasnom događaju. Sada, dok Harija peče njegov ožiljak od munje, ukazujući na prisustvo zlog lorda Voldemorta, Vatreni pehar bira poslednjeg učesnika takmičenja, Harija Potera"
    },
    {
      id: 4,
      broj: 0,
      naziv: "Lisabon",
      opis: "2009 | avanturistički",
      slika: Lisabon,
      cena: 300,
      opisGrada: "I dok Smrtožderi, ohrabreni povratkom Lorda Voldemorta prave haos i u svetu Normalaca i u svetu Čarobnjaka, Hari sumnja da nove opasnosti leže unutar samog Hogvortsa. Dambldor se žuri da pripremi Harija za konačni obračun za koji zna da se brzo približava i šalje ga na opasnu misiju da nađe ključ kojim će se otključati Voldemortova odbrana. U međuvremenu, učenike napada drugačiji neprijatelj, dok njihovi tinejdžerski hormoni divljaju: Harijevo prijateljstvo sa Đinom Vizli prerasta u nešto dublje, Lavender Braun gaji simpatije prema Ronu, Hermiona se guši od ljubomore... A kutija čokolade sa ljubavnim napitkom završava u pogrešnim rukama. Film je nominovan za Oskara za najbolje ostvarenje u kinematografiji."
    },
    {
      id: 5,
      broj: 0,
      naziv: "London",
      opis: "2004 | avanturistički",
      slika: London,
      cena: 300,
      opisGrada: "Ovo je opis + " + " \n " + "Ovo je drugi opis \n" + "Ovo je treci opis" 
    },
    {
      id: 6,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 7,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 8,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 9,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 10,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 11,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 12,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 13,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
    {
      id: 14,
      broj: 0,
      naziv: "Berlin",
      opis: "2001 | avanturistički",
      slika: Berlin,
      cena: 300,
      opisGrada: "U prvom delu čuvenog remek-dela Dž.R.R. Tolkina, “Gospodar prstenova”, stidljivi mladi hobit Frodo nasleđuje običan zlatni prsten. On zna da prsten poseduje moć, ali ne i da se u njegovim rukama nalazi tajna opstanka – ili propasti – celog sveta. Sada, uz pomoć čarobnjaka, vilenjaka, patuljka, dvoje ljudi i trojice odanih prijatelja hobita, Fordo mora da postane najveći heroj koga je svet ikada video, da spasi zemlju i ljude koje voli."
    },
  ]);

  function refresh(){
    let noviGradovi = gradovi.filter((grad) => grad.broj > 0);
    setRezervisaniGrad(noviGradovi);
  }

  function dodajGrad(id){
   
    refresh();

    gradovi.forEach((grad) => {
      if(grad.id === id){
        grad.broj ++;
        if(grad.broj > 0){
        setUkupno(ukupno + grad.cena);
      }
      }
      
    });

    refresh();
  }

  function ukloniGrad(id){
    
    refresh();
    
    gradovi.forEach((grad) => {
      if(grad.id === id){
        
        if(grad.broj > 0){
          grad.broj --;
          setUkupno(ukupno - grad.cena);
        }
      }
    })
    

    refresh();
  }



  return (
    <BrowserRouter className="App">
    <div className = "Appdiv">
    <NavigationBar nav = {1}></NavigationBar>
      <Routes>
        <Route
          path = "/"
          element ={
            <>
      <div className="jumbotron">
  <h1 class="display-1">Dobro došli!</h1>
  <p class="lead">Ovde možete rezervisati Vaše putovanje i izabrati neku od najatraktivnijih destinacija na svetu i to po najpovoljnijim cenama.</p>
  {/* <a class="btn btn-primary btn-lg" href="#" role="button">Saznaj vise</a> */}
</div>
            <h1 className="nazivKontinenta">Trenutne destinacije</h1>
            <Gradovi gradovi = {gradovi} dodaj = {dodajGrad} ukloni = {ukloniGrad}/>
            </>
          }
        />
        <Route
        path = "/pregledRezervacija/*"
        element = {
          <Rezervacije gradoviRezervacije = {rezervisaniGrad} ukupno = {ukupno} />
        }
        />
        <Route
        path = "/upravljajRezervacijama/*"
        element = {
          <UpravljajRezervacijama/>
        }
        />

        <Route
        path = "/kontakt/*"
        element = {
          <Kontakt/>
        }
        />

        <Route
        path = "/upravljajDestinacijama/*"
        element = {
          <UpravljajDestinacijama/>
        }
        />




        <Route
        path = "/promenaLozinke/*"
        element = {
          <FormaPromenaLozinke/>
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
      <NavigationBar nav = {0}></NavigationBar>

    </div>
  </BrowserRouter>
  );
}

export default App;
