'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'begreper' | 'ressursbank' | 'caser' | 'hva-kan-jeg-gjore' | 'stotte-rapportering'>('begreper');
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Load Vimeo Player script
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  const terms = [
    {
      term: "Antirasisme",
      definition: "Aktiv motstand mot rasisme og diskriminering. Det handler ikke bare om å ikke være rasist, men om å aktivt bekjempe rasistiske strukturer og holdninger i samfunnet."
    },
    {
      term: "Mikroaggresjoner",
      definition: "Subtile, ofte ubevisste handlinger eller kommentarer som formidler negative eller nedlatende budskap til personer basert på deres gruppetilhørighet, som etnisitet eller hudfarge."
    },
    {
      term: "Strukturell rasisme",
      definition: "Rasisme som er innebygd i samfunnets strukturer, institusjoner og systemer. Dette kan være lover, regler eller praksis som favoriserer en gruppe over en annen."
    },
    {
      term: "Inkludering",
      definition: "En aktiv prosess for å skape et miljø hvor alle mennesker føler seg velkomne, respektert og verdsatt, uavhengig av bakgrunn, identitet eller evner."
    },
    {
      term: "Diskriminering",
      definition: "Ulik behandling av personer eller grupper basert på egenskaper som etnisitet, kjønn, alder, religion eller funksjonsevne, som ofte fører til urettferdig ulempe."
    },
    {
      term: "Mangfold",
      definition: "Anerkjennelsen og verdien av forskjeller mellom mennesker, inkludert kulturell bakgrunn, perspektiver, erfaringer og identiteter i et samfunn eller organisasjon."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-folkehjelp">Norsk Folkehjelp</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#om-oss" className="text-gray-700 hover:text-folkehjelp transition-colors">Om oss</a>
              <a href="#arbeid" className="text-gray-700 hover:text-folkehjelp transition-colors">Vårt arbeid</a>
              <a href="#engasjer" className="text-gray-700 hover:text-folkehjelp transition-colors">Engasjer deg</a>
              <a href="#kontakt" className="text-gray-700 hover:text-folkehjelp transition-colors">Kontakt</a>
            </div>
            <button className="bg-folkehjelp text-white px-6 py-2 rounded-full hover:bg-folkehjelp-dark transition-colors">
              Støtt oss
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sammen mot rasisme
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Vi jobber for et samfunn hvor alle mennesker har like muligheter,
              uavhengig av hudfarge, etnisitet eller kulturell bakgrunn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-folkehjelp text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-folkehjelp-dark transition-colors shadow-lg">
                Bli med i kampen
              </button>
              <button className="bg-white text-folkehjelp px-8 py-4 rounded-full text-lg font-semibold border-2 border-folkehjelp hover:bg-gray-50 transition-colors">
                Les mer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/de-tillitsvalgte.jpg"
              alt="De tillitsvalgte - Norsk Folkehjelp"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('begreper')}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
                activeTab === 'begreper'
                  ? 'bg-folkehjelp text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Begreper
            </button>
            <button
              onClick={() => setActiveTab('ressursbank')}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
                activeTab === 'ressursbank'
                  ? 'bg-folkehjelp text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Ressursbank
            </button>
            <button
              onClick={() => setActiveTab('caser')}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
                activeTab === 'caser'
                  ? 'bg-folkehjelp text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Caser og handlingskort
            </button>
            <button
              onClick={() => setActiveTab('hva-kan-jeg-gjore')}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
                activeTab === 'hva-kan-jeg-gjore'
                  ? 'bg-folkehjelp text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hva kan jeg gjøre?
            </button>
            <button
              onClick={() => setActiveTab('stotte-rapportering')}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
                activeTab === 'stotte-rapportering'
                  ? 'bg-folkehjelp text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Støtte og rapportering
            </button>
          </div>
        </div>
      </section>

      {/* Begreper Section */}
      {activeTab === 'begreper' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Viktige begreper</h2>
              <p className="text-xl text-gray-600">Se videoen for en introduksjon, og klikk på kortene for å lese definisjonene</p>
            </div>

            {/* YouTube Video */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src="https://www.youtube.com/embed/bEZbFUrR6f0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {terms.map((item, index) => (
                <div
                  key={index}
                  className="perspective-1000 h-64 cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                      flippedCards.has(index) ? 'rotate-y-180' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front of card */}
                    <div
                      className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-8 flex items-center justify-center border-2 border-folkehjelp"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <h3 className="text-3xl font-bold text-folkehjelp text-center">{item.term}</h3>
                    </div>
                    {/* Back of card */}
                    <div
                      className="absolute w-full h-full backface-hidden bg-folkehjelp text-white rounded-lg shadow-lg p-8 flex items-center justify-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <p className="text-lg leading-relaxed text-center">{item.definition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ressursbank Section */}
      {activeTab === 'ressursbank' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ressursbank</h2>
              <p className="text-xl text-gray-600">Videoer, artikler og materiale for å lære mer om antirasisme</p>
            </div>

            {/* Video Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Videoressurser</h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                      src="https://player.vimeo.com/video/880644646?badge=0&autopause=0&player_id=0&app_id=58479"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      title="Antirasisme video"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Antirasisme ressursvideo</h4>
                    <p className="text-gray-600">En viktig ressurs for å forstå antirasistisk arbeid.</p>
                  </div>
                </div>

                {/* Historier fra en kollega - Oslo universitetssykehus */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <video
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      controls
                      poster="https://www.oslo-universitetssykehus.no/496747/siteassets/bilder/hr/historier-fra-en-kollega.jpeg"
                    >
                      <source
                        src="https://www.oslo-universitetssykehus.no/496773/contentassets/41bd71a6161646c3a663c4b5c9560958/historier-fra-en-kollega_master.mp4"
                        type="video/mp4"
                      />
                      Din nettleser støtter ikke video-elementet.
                    </video>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Historier fra en kollega</h4>
                    <p className="text-gray-600 mb-3">
                      Medarbeidere på Oslo universitetssykehus leser historier fra kolleger som har opplevd
                      diskriminering på arbeidsplassen. I filmen møter du Susanne (HR-direktør), Espen (Verneombud),
                      Jørgen (Lege) og Sumaya (Økonomiрådgiver).
                    </p>
                    <p className="text-sm text-gray-500">Kilde: Oslo universitetssykehus / Biovisjon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flere ressurser</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ressurs 1</h3>
                  <p className="text-gray-600">Kommer snart...</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ressurs 2</h3>
                  <p className="text-gray-600">Kommer snart...</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ressurs 3</h3>
                  <p className="text-gray-600">Kommer snart...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Caser og handlingskort Section */}
      {activeTab === 'caser' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Caser og handlingskort</h2>
              <p className="text-xl text-gray-600">Lær hvordan du kan handle i konkrete situasjoner</p>
            </div>

            {/* Handlingskort */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Handlingskort</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-folkehjelp">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-folkehjelp/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl font-bold text-folkehjelp">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Vær til stede</h4>
                  </div>
                  <p className="text-gray-600">
                    Hvis du ser noen blir utsatt for rasistiske kommentarer, vær til stede.
                    Din støtte betyr mye. Spør personen: "Er du OK? Kan jeg hjelpe?"
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-folkehjelp">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-folkehjelp/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl font-bold text-folkehjelp">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Dokumenter</h4>
                  </div>
                  <p className="text-gray-600">
                    Hvis situasjonen tillater det, ta bilder eller video.
                    Dette kan være viktig bevis senere. Spør alltid om lov fra offeret først.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-folkehjelp">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-folkehjelp/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl font-bold text-folkehjelp">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Si ifra</h4>
                  </div>
                  <p className="text-gray-600">
                    Når du hører rasistiske kommentarer, si tydelig at det ikke er greit.
                    "Det du sa nå var rasistisk" eller "Slike kommentarer aksepterer vi ikke her."
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-folkehjelp">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-folkehjelp/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl font-bold text-folkehjelp">4</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Få hjelp</h4>
                  </div>
                  <p className="text-gray-600">
                    Ring politiet (112) hvis situasjonen er truende.
                    I mindre akutte situasjoner, kontakt sikkerhetspersonell eller ansvarlige voksne.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-folkehjelp">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-folkehjelp/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl font-bold text-folkehjelp">5</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Følg opp</h4>
                  </div>
                  <p className="text-gray-600">
                    Ta kontakt med personen som ble utsatt for rasisme etterpå.
                    Spør hvordan det går, og om de trenger støtte eller hjelp videre.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-folkehjelp">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-folkehjelp/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl font-bold text-folkehjelp">6</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Ta vare på deg selv</h4>
                  </div>
                  <p className="text-gray-600">
                    Det er OK å bli rystet av rasistiske hendelser.
                    Snakk med noen du stoler på, eller kontakt en støttetjeneste.
                  </p>
                </div>
              </div>
            </div>

            {/* Motiv-Handling-Konsekvens */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Motiv - Handling - Konsekvens</h3>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-lg text-gray-600 mb-6">
                  Dette rammeverket hjelper deg å forstå og analysere situasjoner hvor rasisme oppstår.
                  Det er viktig å forstå at selv om motivet kanskje ikke var å såre, kan handlingen og konsekvensen fortsatt være skadelig.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border-2 border-folkehjelp border-opacity-30">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-folkehjelp rounded-full flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Motiv</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      <strong>Hva er intensjonen?</strong>
                    </p>
                    <p className="text-gray-600">
                      Motivet er hva personen mente eller tenkte når de utførte handlingen.
                      Mange rasistiske handlinger skjer uten ond intensjon, men det fritar ikke handlingen fra ansvar.
                    </p>
                    <div className="mt-4 p-3 bg-white rounded border border-folkehjelp border-opacity-30">
                      <p className="text-sm text-gray-600">
                        <strong>Eksempel:</strong> "Jeg mente det som en spøk" eller "Jeg prøvde bare å være hyggelig"
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Handling</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      <strong>Hva ble faktisk gjort eller sagt?</strong>
                    </p>
                    <p className="text-gray-600">
                      Handlingen er det som faktisk skjedde - ordene som ble sagt, atferden som ble utført,
                      eller systemene som ble opprettholdt.
                    </p>
                    <div className="mt-4 p-3 bg-white rounded border border-blue-200">
                      <p className="text-sm text-gray-600">
                        <strong>Eksempel:</strong> En rasistisk kommentar, diskriminering i ansettelsesprosess, eller ekskludering
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-2 border-red-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Konsekvens</h4>
                    </div>
                    <p className="text-gray-700 mb-3">
                      <strong>Hva er virkningen?</strong>
                    </p>
                    <p className="text-gray-600">
                      Konsekvensen er hvordan handlingen påvirker den eller de som rammes.
                      Dette er det viktigste - uavhengig av motivet.
                    </p>
                    <div className="mt-4 p-3 bg-white rounded border border-red-200">
                      <p className="text-sm text-gray-600">
                        <strong>Eksempel:</strong> Følelse av utrygghet, ekskludering, mental belastning, eller systemisk urettferdighet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-folkehjelp">
                  <h5 className="font-bold text-gray-900 mb-3 text-lg">Hvorfor er dette viktig?</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Fokuser på konsekvensen:</strong> I antirasistisk arbeid er det konsekvensen som er avgjørende, ikke motivet. En handling kan være skadelig selv om intensjonen var god.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Ta ansvar:</strong> Selv om du ikke mente å såre, er det viktig å ta ansvar for hvordan handlingen påvirket andre.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Lær og voks:</strong> Å forstå forskjellen mellom motiv og konsekvens hjelper oss alle å bli mer bevisste og gjøre bedre valg fremover.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Caser */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Praktiske caser</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-folkehjelp p-4">
                    <h4 className="text-2xl font-bold text-white">Case 1: Rasistisk kommentar på arbeidsplassen</h4>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Situasjon:</h5>
                      <p className="text-gray-600">
                        En kollega kommer med en rasistisk kommentar om en annen kollegas etniske bakgrunn under lunsjen.
                        Flere er til stede, men ingen sier noe.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Hvordan handle:</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Si tydelig at kommentaren var upassende: "Det var en rasistisk kommentar, og det er ikke greit."</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Ta en privat samtale med kollegaen som ble utsatt for kommentaren</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Rapporter hendelsen til HR eller nærmeste leder</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Følg opp at arbeidsgiveren håndterer saken</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-folkehjelp p-4">
                    <h4 className="text-2xl font-bold text-white">Case 2: Rasisme i det offentlige rom</h4>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Situasjon:</h5>
                      <p className="text-gray-600">
                        Du er vitne til at en person blir verbalt trakassert med rasistiske kommentarer på bussen eller toget.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Hvordan handle:</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Vurder din egen sikkerhet først. Hvis situasjonen virker farlig, kontakt konduktør eller bussjåfør</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Hvis det er trygt, sett deg ved siden av personen som blir trakassert som et tegn på støtte</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Spør personen: "Er du OK? Trenger du hjelp?"</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Ring politiet (112) hvis situasjonen eskalerer eller er truende</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Tilby deg å være vitne hvis personen ønsker å anmelde hendelsen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-folkehjelp p-4">
                    <h4 className="text-2xl font-bold text-white">Case 3: Rasistiske holdninger i vennegruppen</h4>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Situasjon:</h5>
                      <p className="text-gray-600">
                        En venn deler rasistiske meninger eller "vitser" i en sosial sammenheng.
                        Du er usikker på hvordan du skal håndtere det uten å ødelegge vennskapet.
                      </p>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Hvordan handle:</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Ta en privat samtale med vennen din når dere er alene</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Forklar hvorfor kommentarene eller "vitsene" er skadelige og problematiske</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Del informasjon og ressurser som kan hjelpe vennen din å forstå bedre</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Sett grenser for hva du aksepterer i din nærvær: "Jeg er ikke komfortabel med slike kommentarer"</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-folkehjelp mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Hvis atferden fortsetter, vurder om dette er et vennskap du vil opprettholde</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Hva kan jeg gjøre Section */}
      {activeTab === 'hva-kan-jeg-gjore' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hva kan jeg gjøre?</h2>
              <p className="text-xl text-gray-600">Finn ut hvordan du kan bidra i kampen mot rasisme</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Snakk opp</h3>
                <p className="text-gray-600 text-center">Når du opplever eller ser rasisme, si ifra. Din stemme gjør en forskjell.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Lær mer</h3>
                <p className="text-gray-600 text-center">Sett deg inn i temaet gjennom bøker, artikler og kurs om antirasisme.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Engasjer deg</h3>
                <p className="text-gray-600 text-center">Bli med i lokale initiativer, arrangementer og kampanjer.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Del kunnskap</h3>
                <p className="text-gray-600 text-center">Spre informasjon og ressurser i ditt nettverk og på sosiale medier.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Støtt økonomisk</h3>
                <p className="text-gray-600 text-center">Din støtte gjør at vi kan fortsette det viktige antirasistiske arbeidet.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Vær en alliert</h3>
                <p className="text-gray-600 text-center">Støtt og lytt til personer som opplever rasisme i hverdagen.</p>
              </div>
            </div>

            {/* Lokallag Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">For lokallag i Norsk Folkehjelp</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Som lokallag har dere en viktig rolle i det antirasistiske arbeidet. Her er konkrete måter dere kan jobbe med dette.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-8 border-l-4 border-folkehjelp">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Innad i lokallaget</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-folkehjelp mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Ha en fast kontaktperson:</strong>
                        <p className="text-gray-600 mt-1">Utnevn en person i styret som har ansvar for antirasistisk arbeid og inkludering.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-folkehjelp mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Gjennomfør kurs og workshops:</strong>
                        <p className="text-gray-600 mt-1">Arranger jevnlige opplæringsaktiviteter for medlemmer og frivillige om antirasisme og inkludering.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-folkehjelp mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Skap en trygg kultur:</strong>
                        <p className="text-gray-600 mt-1">Etabler klare retningslinjer for hvordan dere håndterer rasisme og diskriminering i lokallaget.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-folkehjelp mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Evaluer og reflekter:</strong>
                        <p className="text-gray-600 mt-1">Ta opp antirasisme som tema på styremøter og årsmøter. Hvordan jobber dere med inkludering?</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Utad i lokalsamfunnet</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Marker 21. mars:</strong>
                        <p className="text-gray-600 mt-1">Organiser arrangementer på Den internasjonale dagen mot rasisme - forelesninger, stands, kulturarrangementer.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Samarbeid lokalt:</strong>
                        <p className="text-gray-600 mt-1">Knytt kontakt med minoritetsorganisasjoner, antirasistiske grupper og kultursentre i lokalmiljøet.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Besøk skoler:</strong>
                        <p className="text-gray-600 mt-1">Tilby å holde foredrag eller workshops om antirasisme på lokale ungdomsskoler og videregående.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong className="text-gray-900">Synlig i det offentlige:</strong>
                        <p className="text-gray-600 mt-1">Delta i lokalaviser, podkaster og lokale debatter om antirasisme og mangfold.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-folkehjelp text-white rounded-lg shadow-lg p-8">
                <h4 className="text-2xl font-bold mb-4">Ressurser for lokallag</h4>
                <p className="text-lg mb-6">
                  Vi har utviklet verktøy og materiell som lokallaget kan bruke i det antirasistiske arbeidet:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Opplegg for studiesirkler om antirasisme</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Maler for arrangementer og kampanjer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Faktaark og presentasjoner om rasisme</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Nettverk med andre lokallag som jobber med temaet</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="bg-white text-folkehjelp px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Kontakt oss for materiell
                  </button>
                </div>
              </div>
            </div>

            {/* Frivillige Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">For frivillige</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Som frivillig i Norsk Folkehjelp kan du være med å gjøre en forskjell i det antirasistiske arbeidet.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Arrangementer</h4>
                  <p className="text-gray-600 text-center mb-4">
                    Hjelp til med å organisere og gjennomføre arrangementer som markerer 21. mars, debattmøter, kulturkvelder og workshops.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Kommunikasjon</h4>
                  <p className="text-gray-600 text-center mb-4">
                    Bidra med innhold til sosiale medier, skriv blogginnlegg, lag videoer eller designmateriell for kampanjer.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Ambassadør</h4>
                  <p className="text-gray-600 text-center mb-4">
                    Vær en ambassadør for antirasistisk arbeid i ditt nettverk. Del ressurser, snakk om temaet, og vær et forbilde.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Undervisning</h4>
                  <p className="text-gray-600 text-center mb-4">
                    Delta på kurs for å bli kursholder selv. Reis rundt til skoler, bedrifter og organisasjoner for å holde foredrag.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Støtte og rådgivning</h4>
                  <p className="text-gray-600 text-center mb-4">
                    Hvis du har relevant kompetanse, kan du bidra med rådgivning til personer som har opplevd rasisme.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Innholdsproduksjon</h4>
                  <p className="text-gray-600 text-center mb-4">
                    Hjelp til med å lage materiell, brosjyrer, videoer og andre ressurser som lokallaget kan bruke.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-folkehjelp to-folkehjelp-dark text-white rounded-lg shadow-lg p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">Klar til å bidra?</h4>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Vi trenger frivillige som vil være med å gjøre en forskjell. Uansett hvilke ferdigheter eller erfaring du har,
                  finnes det en rolle for deg i det antirasistiske arbeidet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-folkehjelp px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Bli frivillig
                  </button>
                  <button className="bg-folkehjelp-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-folkehjelp-dark transition-colors border-2 border-white">
                    Kontakt ditt lokallag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Støtte og rapportering Section */}
      {activeTab === 'stotte-rapportering' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Støtte og rapportering</h2>
              <p className="text-xl text-gray-600">Har du opplevd rasisme? Vi er her for å hjelpe deg</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trenger du støtte?</h3>
                <p className="text-gray-600 mb-6">
                  Hvis du har opplevd rasisme eller diskriminering, kan du kontakte oss for støtte og veiledning.
                  Vi lytter, veileder og hjelper deg videre.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Konfidensielt og trygt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Profesjonell veiledning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Informasjon om dine rettigheter</span>
                  </li>
                </ul>
                <button className="w-full bg-folkehjelp text-white px-6 py-3 rounded-lg font-semibold hover:bg-folkehjelp-dark transition-colors">
                  Kontakt oss for støtte
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapporter rasisme</h3>
                <p className="text-gray-600 mb-6">
                  Ved å rapportere hendelser hjelper du oss å dokumentere og bekjempe rasisme.
                  Du kan rapportere anonymt hvis du ønsker det.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Anonym rapportering mulig</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Bidra til viktig dokumentasjon</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Hjelp oss å bekjempe rasisme</span>
                  </li>
                </ul>
                <button className="w-full bg-folkehjelp text-white px-6 py-3 rounded-lg font-semibold hover:bg-folkehjelp-dark transition-colors">
                  Rapporter en hendelse
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Andre ressurser</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Likestillings- og diskrimineringsombudet (LDO)</h4>
                  <p className="text-gray-600 mb-2">Veileder og behandler klager om diskriminering.</p>
                  <a href="https://ldo.no" className="text-folkehjelp hover:underline">ldo.no</a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Antirasistisk Senter</h4>
                  <p className="text-gray-600 mb-2">Tilbyr juridisk bistand og rådgivning.</p>
                  <a href="https://antirasistisk.no" className="text-folkehjelp hover:underline">antirasistisk.no</a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Politiet</h4>
                  <p className="text-gray-600 mb-2">Ved alvorlige hendelser, kontakt politiet på 02800 eller 112.</p>
                  <a href="https://politi.no" className="text-folkehjelp hover:underline">politi.no</a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mental Helse</h4>
                  <p className="text-gray-600 mb-2">Gratis og anonym hjelp på telefon 116 123.</p>
                  <a href="https://mentalhelse.no" className="text-folkehjelp hover:underline">mentalhelse.no</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Om oss Section */}
      <section id="om-oss" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Om vårt antirasistiske arbeid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Norsk Folkehjelp har i over 80 år kjempet for solidaritet og menneskerettigheter.
              Vårt antirasistiske arbeid er en sentral del av denne kampen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Inkludering</h3>
              <p className="text-gray-600">
                Vi arbeider for et inkluderende samfunn hvor mangfold verdsettes og diskriminering bekjempes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Opplæring</h3>
              <p className="text-gray-600">
                Vi tilbyr kurs, workshops og undervisningsmateriell om antirasisme og diskriminering.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-folkehjelp/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-folkehjelp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Påvirkningsarbeid</h3>
              <p className="text-gray-600">
                Vi jobber politisk for lover og tiltak som motvirker rasisme og fremmer likestilling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vårt arbeid Section */}
      <section id="arbeid" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hva vi gjør</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Kampanjer og aktivisme</h3>
              <p className="text-lg text-gray-600 mb-4">
                Vi organiserer og deltar i kampanjer mot rasisme og diskriminering.
                Gjennom synlige aksjoner, demonstrasjoner og informasjonsarbeid setter vi fokus på
                viktige saker og mobiliserer folk til handling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Årlige markeringer på 21. mars - Den internasjonale dagen mot rasisme</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Informasjonskampanjer i sosiale medier</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Samarbeid med andre organisasjoner og aktivister</span>
                </li>
              </ul>
            </div>
            <div className="bg-folkehjelp h-96 rounded-lg shadow-xl"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-folkehjelp/10 h-96 rounded-lg shadow-xl"></div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Støtte og ressurser</h3>
              <p className="text-lg text-gray-600 mb-4">
                Vi tilbyr praktisk støtte og ressurser til de som opplever rasisme og diskriminering,
                samt til alle som vil lære mer og engasjere seg i antirasistisk arbeid.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Veiledning og rådgivning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Gratis undervisningsmateriell for skoler</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-folkehjelp mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Nettverk og erfaringsutveksling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engasjer deg Section */}
      <section id="engasjer" className="py-20 px-4 sm:px-6 lg:px-8 bg-folkehjelp text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Engasjer deg</h2>
          <p className="text-xl mb-8">
            Det er mange måter å støtte vårt antirasistiske arbeid på.
            Sammen kan vi skape et mer rettferdig og inkluderende samfunn.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Bli medlem</h3>
              <p className="mb-4">Som medlem får du mulighet til å påvirke vår politikk og delta i vårt arbeid.</p>
              <button className="bg-white text-folkehjelp px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Meld deg inn
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Gi gave</h3>
              <p className="mb-4">Din støtte gjør at vi kan fortsette å kjempe mot rasisme og diskriminering.</p>
              <button className="bg-white text-folkehjelp px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Gi gave
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Bli frivillig</h3>
              <p className="mb-4">Vi trenger alltid dedikerte frivillige som vil bidra i kampanjer og arrangementer.</p>
              <button className="bg-white text-folkehjelp px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Engasjer deg
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistikk Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vårt engasjement i tall</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-folkehjelp mb-2">80+</div>
              <div className="text-gray-600">År med solidaritetsarbeid</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-folkehjelp mb-2">15,000+</div>
              <div className="text-gray-600">Medlemmer</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-folkehjelp mb-2">100+</div>
              <div className="text-gray-600">Lokallag over hele landet</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-folkehjelp mb-2">500+</div>
              <div className="text-gray-600">Arrangementer årlig</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt oss</h2>
            <p className="text-xl text-gray-600">
              Har du spørsmål eller vil du vite mer om vårt arbeid? Ta gjerne kontakt!
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-folkehjelp focus:border-transparent"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-folkehjelp focus:border-transparent"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Melding
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-folkehjelp focus:border-transparent"
                  placeholder="Din melding..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-folkehjelp text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-folkehjelp-dark transition-colors"
              >
                Send melding
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Norsk Folkehjelp</h3>
              <p className="text-gray-400">
                Solidaritet i praksis siden 1939
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>E-post: post@folkehjelp.no</li>
                <li>Telefon: 22 03 00 00</li>
                <li>Org.nr: 970 323 531</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Lenker</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Personvern</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tilgjengelighet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Følg oss</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Norsk Folkehjelp. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
