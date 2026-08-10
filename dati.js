/* ============================================================
   DATI DEL SITO — modifica solo questo file per aggiornare
   partite, risultati, rosa, sponsor, video e contatti.
   Le partite senza risultato (gol: null) compaiono come
   "da giocare"; la prima futura diventa il tabellone in home.
   ============================================================ */
const DATI = {

  club: {
    nome: "G.S.D. Real Pontecchio Calcio",
    motto: "Una squadra, un paese, una passione.",
    descrizione: [
      "Il Real Pontecchio Calcio è il gruppo sportivo di Pontecchio Polesine, nato nel 2016 e rinnovato nel 2022. Un progetto costruito attorno al campo del paese: sport, amicizia e comunità.",
      "Giovanili e prima squadra, allenamenti, feste e domeniche in campo. La società è aperta a tutti: chi vuole giocare, dare una mano in dirigenza, o semplicemente venire a vedere una partita, è il benvenuto."
    ],
    fatti: [
      { titolo: "2016", testo: "Nasce il gruppo sportivo" },
      { titolo: "2022", testo: "Rinnovo della società" },
      { titolo: "Pontecchio Polesine (RO)", testo: "Il nostro campo, la nostra casa" }
    ]
  },

  // formato data: "AAAA-MM-GG", ora: "HH:MM"
  partite: [
    { data: "2026-09-06", ora: "15:30", casa: "Real Pontecchio", ospite: "Avversario 1", golCasa: null, golOspite: null, campo: "Campo comunale, Pontecchio Polesine", competizione: "Campionato" },
    { data: "2026-09-13", ora: "15:30", casa: "Avversario 2", ospite: "Real Pontecchio", golCasa: null, golOspite: null, campo: "Campo avversario", competizione: "Campionato" }
  ],

  rosa: [
    { numero: 1,  nome: "Nome Cognome", ruolo: "Portiere" },
    { numero: 4,  nome: "Nome Cognome", ruolo: "Difensore" },
    { numero: 8,  nome: "Nome Cognome", ruolo: "Centrocampista" },
    { numero: 10, nome: "Nome Cognome", ruolo: "Attaccante" }
  ],

  // Canale YouTube della società.
  // playlistCaricamenti mostra automaticamente gli ultimi video pubblicati.
  youtube: {
    canale: "https://www.youtube.com/@gsdrealpontecchiocalcio",
    playlistCaricamenti: "UU8b4sAdqzNK_zpx2zE_msLw"
  },

  sponsor: [
    { nome: "Plus Ufficio", url: "https://www.plusufficio.it" },
    { nome: "Sponsor 2", url: "" },
    { nome: "Sponsor 3", url: "" }
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
