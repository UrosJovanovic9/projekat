import logo from './logo.svg';
import './App.css';
import Gradovi from "./components/Gradovi";
import FormaPrijava from "./components/FormaPrijava";
import FormaRegistracija from "./components/FormaRegistracija";
import NavigationBar from "./components/NavigationBar";
import Beograd from "./img/Beograd.jpg";
import Berlin from  "./img/Berlin.jpg";
import Lisabon from "./img/Lisabon.jpg"
import London from "./img/London.jpg";
import Madrid from "./img/Madrid.jpg";
import Pariz from "./img/Pariz.jpg";
import Amsterdam from "./img/Amsterdam.jpg";
import Rim from "./img/Rim.jpg";
import Bern from "./img/Bern.jpg";
import Kopenhagen from "./img/Kopenhagen.jpg";
import Oslo from "./img/Oslo.jpg";
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
      opis: "Beograd | Srbija",
      slika: Beograd,
      cena: 300,
      opisGrada: "Beograd je glavni i najnaseljeniji grad Republike Srbije i privredno, kulturno i obrazovno središte zemlje. Grad leži na ušću Save u Dunav, gde se Panonska nizija spaja sa Balkanskim poluostrvom. Beograd je upravno središte Grada Beograda, posebne teritorijalne jedinice sa svojom mesnom samoupravom. Jedan je od starijih gradova u Evropi."
    },
    {
      id: 2,
      broj: 0,
      naziv: "Pariz",
      opis: "Pariz | Francuska",
      slika: Pariz,
      cena: 350,
      opisGrada: "Pariz je glavni i najveći grad Francuske. Nalazi se u centru Pariskog basena, nad rekom Senom (La Seine). Rekom je podeljen na dva dela: na severnu „Desnu obalu“ i na južnu, manju, „Levu obalu“. Grad predstavlja političko, ekonomsko, obrazovno i kulturno središte centralizovane francuske države, a i Evrope."
    },
    {
      id: 3,
      broj: 0,
      naziv: "Madrid",
      opis: "Madrid | Španija",
      slika: Madrid,
      cena: 320,
      opisGrada: "Madrid je glavni grad Kraljevine Španije. Region (Madrid sa okolinom) se sa oko 5 miliona stanovnika ubraja u najveće evropske metropole. Sam grad Madrid (bez predgrađa) je sa svojih 3,1 milion stanovnika, posle Londona i Berlina, treći najveći grad u Evropskoj uniji."
    },
    {
      id: 4,
      broj: 0,
      naziv: "Lisabon",
      opis: "Lisabon | Portugal",
      slika: Lisabon,
      cena: 310,
      opisGrada: "Lisabon glavni je grad Portugalije. Ujedno je i najveći grad u državi i središte portugalske politike, privrede i kulture. Lisabon je takođe treće po veličini i značaju središte Iberijskog poluostrva, posle Madrida i Barselone. U samom gradu Lisabonu živi oko 550 hiljada stanovnika, ali Lisabon sa prigradskim naseljima (tzv. Veliki Lisabon) ima čak 2,9 miliona stanovnika, što predstavlja oko 25% stanovništva države. Grad je sedište istoimenog okruga Lisabon, gde čini jednu od opština."
    },
    {
      id: 5,
      broj: 0,
      naziv: "London",
      opis: "London | Engleska",
      slika: London,
      cena: 420,
      opisGrada: "London glavni je grad Engleske i Ujedinjenog Kraljevstva. Kao važno naselja tokom gotovo 2000 godina, historija Londona započinje osnivanjem od strane Rimljana u doba cara Klaudija oko 43 godine nove ere kada dobiva ime Londinium." 
    },
    {
      id: 6,
      broj: 0,
      naziv: "Berlin",
      opis: "Berlin | Nemačka",
      slika: Berlin,
      cena: 420,
      opisGrada: "Berlin je glavni grad Savezne Republike Nemačke i istovremeno jedna od njenih šesnaest država-pokrajina. Sa preko 3,4 miliona stanovnika je najmnogoljudnija i površinom od 892 km² najveća opština u zemlji. Drugi je najveći grad u Evropskoj uniji i centar šestomilionske metropolitanske regije Berlin/Brandenburg te aglomeracije koja broji 4,4 miliona ljudi."
    },
    {
      id: 7,
      broj: 0,
      naziv: "Amsterdam",
      opis: "Amsterdam | Holandija",
      slika: Amsterdam,
      cena: 415,
      opisGrada: "Amsterdam je najveći grad Holandije. Osnovan je krajem 12. veka kao malo ribarsko mesto na obali reke Amstel. Danas je najveći grad u državi i finansijski i kulturni centar. U gradu živi 975 061 stanovnika[1] dok je broj stanovnika metropolskog teritorija oko 2 691 477. On je i dio velike konurbacije Randstad u kojoj živi 7.100.000 stanovnika"
    },
    {
      id: 8,
      broj: 0,
      naziv: "Rim",
      opis: "Rim | Italija",
      slika: Rim,
      cena: 390,
      opisGrada: "Rim je glavni grad Italije i regije Lacio, takođe najveći i najbrojniji grad u Italiji sa oko 2,8 miliona stanovnika, i četvrti najveći grad u Evropskoj uniji. Na širem području grada živi nešto više od četiri miliona stanovnika. Rim se nalazi na zapadu centralnog dela Apeninskog poluostrva, na mestu gde se reka Anijen uliva u Tibar."
    },
    {
      id: 9,
      broj: 0,
      naziv: "Bern",
      opis: "Bern | Švajcarska",
      slika: Bern,
      cena: 510,
      opisGrada: "Bern je glavni grad Švajcarske konfederacije, četvrti po veličini u državi (posle Ciriha, Ženeve i Bazela). Bern je i glavni grad i najveće naselje istoimenog Kantona Bern."
    },
    {
      id: 10,
      broj: 0,
      naziv: "Kopenhagen",
      opis: "Kopenhagen | Danska",
      slika: Kopenhagen,
      cena: 450,
      opisGrada: "Kopenhagen je glavni i najveći grad Danske. Savremeni naziv je iskvaren oblik starog imena Købmandshavn koje znači „trgovačka luka“. Prostire se na površini od 526 km². U samom gradu živi oko 542 hiljade stanovnika, a na širem području oko 1,2 miliona."
    },
    {
      id: 11,
      broj: 0,
      naziv: "Oslo",
      opis: "Oslo | Norveška",
      slika: Oslo,
      cena: 490,
      opisGrada: "Oslo glavni je grad Norveške. Istovremeno to je i najveći grad države, u čijem metropolitenskom području živi oko 1/4 stanovništva Norveške. Grad je takođe jedini samostalni grad-okrug u državi, a vrši i ulogu upravnog sedišta okruga Akershus, koji okružuje Oslo i obuhvata njegova predgrađa. Oslo je kulturno, naučno i upravno središte Norveške. Grad je takođe važno središte trgovine, bankarstva, industrije i pomorstva Norveške i Evrope"
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
        element = {
          <FormaPrijava/>
        }
        />


        <Route
          path = "/turistickeDestinacije"
          element ={
            <>
      <div className="jumbotron">
  <h1 className="display-1">Dobro došli!</h1>
  <p className="lead">Ovde možete rezervisati Vaše putovanje i izabrati neku od najatraktivnijih destinacija na svetu i to po najpovoljnijim cenama.</p>
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

        {/* <Route
        path = "/promenaLozinke/*"
        element = {
          <FormaPromenaLozinke/>
        }
        /> */}

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
