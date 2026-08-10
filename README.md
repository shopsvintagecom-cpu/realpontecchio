# Sito Real Pontecchio Calcio

Sito statico (HTML/CSS/JS), zero dipendenze, zero costi di hosting.

## Pubblicazione su GitHub Pages (5 minuti)

1. Crea un account GitHub (o usa il tuo) e un nuovo repository, es. `realpontecchio`
2. Carica i 3 file: `index.html`, `style.css`, `dati.js` (drag & drop da browser: "Add file → Upload files")
3. Vai su **Settings → Pages**
4. In "Source" scegli **Deploy from a branch**, branch `main`, cartella `/ (root)` → Save
5. Dopo 1-2 minuti il sito è online su `https://TUOUTENTE.github.io/realpontecchio/`

Suggerimento: se chiami il repository `TUOUTENTE.github.io`, il sito sarà direttamente su `https://TUOUTENTE.github.io/`.

## Aggiornare risultati, rosa, sponsor

Modifica **solo `dati.js`** (si può fare anche da browser su GitHub, tasto matita):

- **Partite**: aggiungi righe nell'array `partite`. Finché `golCasa`/`golOspite` sono `null` la partita è "da giocare" e la prima futura appare nel tabellone in home. A partita giocata, metti i gol.
- **Rosa, sponsor, contatti**: stessi array, stessa logica.

## Colori e loghi

- I colori sono nelle variabili in cima a `style.css` (`--blu`, `--oro`, ...): cambiali se i colori sociali sono diversi.
- Per aggiungere il logo: carica `logo.png` nel repository e nell'header sostituisci il testo con `<img src="logo.png" alt="Real Pontecchio Calcio" height="40">`.

## Dominio personalizzato (opzionale, ~10 €/anno)

Compra un dominio (es. `realpontecchio.it`), poi in Settings → Pages → Custom domain inseriscilo e imposta i DNS come indicato da GitHub. L'HTTPS è automatico.

