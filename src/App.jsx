// erstat App med dette, hvis du vil beskytte med adgangskode
import { useState } from 'react';


export default function App() {
  // const [access, setAccess] = useState(false);
  // const [input, setInput] = useState('');

  // function handleLogin(e) {
  //   e.preventDefault();
  //   if (input === '1234') {
  //     setAccess(true);
  //   }
  // }

  // if (!access) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
  //       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow">
  //         <label className="block mb-2">Adgangskode:</label>
  //         <input
  //           type="password"
  //           value={input}
  //           onChange={(e) => setInput(e.target.value)}
  //           className="border p-2 mb-4 w-full"
  //         />
  //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
  //           Log ind
  //         </button>
  //       </form>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="p-6" >Velkommen til mit private CV!
  //      <h1 class="text-3xl font-bold underline"> Hello world!</h1>
  //   </div>
    
  // );
   const [activeTab, setActiveTab] = useState("cv");

  return (
    <div className="container">
      <h1>William</h1>
      <p className="subtitle">Datamatiker • Smalt menneske •  Elsker katte </p>

      <div className="tabs">
        <button
          className={activeTab === "cv" ? "tab active" : "tab"}
          onClick={() => setActiveTab("cv")}
        >
          CV
        </button>
        <button
          className={activeTab === "ansoegning" ? "tab active" : "tab"}
          onClick={() => setActiveTab("ansoegning")}
        >
          Ansøgning
        </button>
      </div>

      {activeTab === "cv" && (
        <div className="tab-content">
          <h2>Profil</h2>
          <p>
            Nyuddannet datamatiker med passion for IT-sikkerhed, automatisering
            og webudvikling.
          </p>

          <h2>Erfaring</h2>
          <ul>
            <li>
              <strong>Administrativ Medarbejder</strong> – Rengøringsfirma Renotek, Feb April 2025
            </li>
            <li>
              <strong>Softwareudvikler (fuldtid-praktik)</strong> – NorthTech Aps, Kbh. Aug - okt 2024
            </li>
            <li>
              <strong> Madudbringer/chauffør </strong> – Just-Eat, KBH. April - okt 2021
            </li>
            <li>
              <strong>Butikassistent</strong> – Rema, Nørrebro. Okt 2018 - Aug 2019
            </li>
            <li>
              <strong>Produktionsmedarbejder, plukhåndtering (vikariat) </strong> – Toms, Hvidovre. Maj 2017 - juli 2017
            </li>
          </ul>

          <h2>Uddannelse</h2>
          <p>Datamatiker – Erhvervsakademi, Færdiguddannet 2024</p>
          <p>Gymnasium – STX, 2013-2016</p>
          <h2>Kørekort B</h2>
          <h2>Sprog</h2> Dansk, Urdu, Engelsk
          {/* <h2>Personlige Færdigheder</h2>
          <ul>
            <li><strong>Serviceminded:</strong> Altid klar til at hjælpe kunder og skabe gode oplevelser.</li>
            <li><strong>IT-kompetent:</strong> Hurtig til at sætte mig ind i nye systemer og teknologier.</li>
            <li><strong>Struktureret:</strong> God til at holde overblik og arbejde effektivt, selv under pres.</li>
            <li><strong>Løsningsorienteret:</strong> Finder hurtigt løsninger på kunders udfordringer.</li>
            <li><strong>Selvstændig og samarbejdsvillig:</strong> Trives både alene og i teams.</li>
            <li><strong>Tvivl stopper mig ikke:</strong> Jeg er ikke bange for at stille spørgsmål og søge hjælp, når det er nødvendigt, for at sikre det bedste resultat.</li>
            <li><strong>Detaljeorienteret:</strong> Sætter en ære i kvalitet og præcision.</li>
          </ul> */}
          
          <h2>IT-Færdigheder</h2>
           <ul className="list-disc pl-5 space-y-1 mt-6">
            <li><strong>Programmeringssprog:</strong> Erfaring med Java, Python, TypeScript og JavaScript.</li>
            <li><strong>Forretningslogik:</strong> Kompetence i visualisering og design af komplekse forretningsprocesser.</li>
            <li><strong>Databaseadministration:</strong> Erfaring med MySQL og MongoDB.</li>
            <li><strong>Webudvikling:</strong> Erfaring med udvikling af webapplikationer samt udarbejdelse af testdokumentation.</li>
            <li><strong>Problemløsning og analyse:</strong> Stærke analytiske evner og en struktureret tilgang til problemløsning.</li>
          </ul>
          

          <h2>Kontakt</h2>
          <p>Email: acmverden@hotmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="www.linkedin.com/in/rabia-a-615988269"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/rabia-a
            </a>
          </p>

          <p>
            <a href="cv.pdf" download>
              Download CV som PDF
            </a>
          </p>
        </div>
      )}

      {activeTab === "ansoegning" && (
        <div className="tab-content">
          <h2>Ansøgning</h2>
          <p>Kære [Virksomhed],</p>
          <p>
            Jeg skriver for at ansøge om stillingen som [stillingstitel]. Som
            nyuddannet datamatiker med erfaring i webudvikling og IT-sikkerhed,
            motiveres jeg af at løse tekniske udfordringer og arbejde i et
            engageret team.
          </p>
          <p>
            Jeg ser frem til muligheden for at bidrage til jeres organisation og
            udvikle mig fagligt.
          </p>
          <p>
            Venlig hilsen, <br />
            William Jensen
          </p>
        </div>
      )}
    </div>
  );
}

