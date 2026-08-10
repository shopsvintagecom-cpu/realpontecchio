/* ============================================================
   DATI DEL SITO — modifica SOLO questo file.
   Partite senza risultato (golCasa: null) = da giocare.
   La prima futura diventa il countdown in home.
   ============================================================ */
const DATI = {

  club: {
    nome: "G.S.D. Real Pontecchio Calcio",
    motto: "Una squadra, un paese, una passione",
    sottotitolo: "Il gruppo sportivo di Pontecchio Polesine: giovanili, prima squadra e tutto quello che succede attorno al campo.",
    // Foto di sfondo dell'hero. Carica un'immagine nel repo
    // (es. squadra.jpg) e scrivi qui il nome. Lascia "" per il fondo granata.
    fotoHero: "",
    descrizione: [
      "Il Real Pontecchio Calcio è il gruppo sportivo di Pontecchio Polesine, nato nel 2016 e rinnovato nel 2022. Un progetto costruito attorno al campo del paese: sport, amicizia e comunità.",
      "Giovanili e prima squadra, allenamenti, feste e domeniche in campo. La società è aperta a tutti: chi vuole giocare, dare una mano in dirigenza, o semplicemente venire a vedere una partita, è il benvenuto."
    ],
    numeri: [
      { valore: "2016", etichetta: "Anno di fondazione" },
      { valore: "2022", etichetta: "Rinnovo della società" },
      { valore: "Pontecchio Polesine", etichetta: "Il nostro campo, la nostra casa" }
    ]
  },

  // data: "AAAA-MM-GG" · ora: "HH:MM" · gol: numero oppure null se da giocare
  partite: [
    { data: "2026-09-06", ora: "15:30", casa: "Real Pontecchio", ospite: "Avversario 1", golCasa: null, golOspite: null, campo: "Campo comunale, Pontecchio Polesine", competizione: "Campionato" },
    { data: "2026-09-13", ora: "15:30", casa: "Avversario 2", ospite: "Real Pontecchio", golCasa: null, golOspite: null, campo: "Campo avversario", competizione: "Campionato" },
    { data: "2026-09-20", ora: "15:30", casa: "Real Pontecchio", ospite: "Avversario 3", golCasa: null, golOspite: null, campo: "Campo comunale, Pontecchio Polesine", competizione: "Campionato" }
  ],

  // ruolo: Portiere / Difensore / Centrocampista / Attaccante / Staff
  rosa: [
    { numero: 1,  nome: "Nome Cognome", ruolo: "Portiere" },
    { numero: 4,  nome: "Nome Cognome", ruolo: "Difensore" },
    { numero: 5,  nome: "Nome Cognome", ruolo: "Difensore" },
    { numero: 8,  nome: "Nome Cognome", ruolo: "Centrocampista" },
    { numero: 10, nome: "Nome Cognome", ruolo: "Centrocampista" },
    { numero: 9,  nome: "Nome Cognome", ruolo: "Attaccante" }
  ],

  youtube: {
    canale: "https://www.youtube.com/@gsdrealpontecchiocalcio",
    playlistCaricamenti: "UU8b4sAdqzNK_zpx2zE_msLw"
  },

  sponsor: [
    { nome: "Plus Ufficio", url: "https://www.plusufficio.it" },
    { nome: "Sponsor 2", url: "" },
    { nome: "Sponsor 3", url: "" },
    { nome: "Sponsor 4", url: "" }
  ],

  contatti: {
    indirizzo: "Campo comunale, Pontecchio Polesine (RO)",
    email: "info@realpontecchio.it",
    telefono: "",
    facebook: "https://www.facebook.com/realpontecchiopaginaufficiale/",
    instagram: "",
    youtube: "https://www.youtube.com/@gsdrealpontecchiocalcio"
  }
};
