# Gestionale Oliveta — app installabile (pagina «guscio»)

Questa cartella è una piccola pagina che apre il gestionale (la web app di Google Apps Script) a tutto schermo, con nome e icona. Così si installa su PC, Android e iPhone.
Contiene solo l'icona e il link della web app: i dati restano nei Fogli Google, protetti dal PIN.

## Pubblicarla con GitHub Pages (gratis, una volta sola)

1. Crea un account su **github.com**. Il nome utente sarà parte dell'indirizzo, per esempio `enrico-oliveta` → `enrico-oliveta.github.io`.
2. In alto a destra fai **+ › New repository**:
   - nome `oliveta`;
   - lascia **Public** (con l'account gratuito GitHub Pages richiede un repository pubblico, e qui dentro non ci sono dati);
   - fai **Create repository**.
3. Nella pagina del repository fai **uploading an existing file**, oppure **Add file › Upload files**. Trascina **tutti i file di questa cartella** (non la cartella), poi **Commit changes**.
4. Apri il file **config.js** e fai clic sulla matita ✎:
   - incolla fra le virgolette il link della web app, quello che finisce con `/exec`. Lo trovi nel gestionale, sezione **Aziende › App installabile**;
   - fai **Commit changes**.
5. Vai in **Settings › Pages**:
   - in «Build and deployment» scegli **Deploy from a branch**;
   - come branch scegli **main** e **/(root)**;
   - fai **Save**.

   Dopo un minuto circa in cima alla pagina compare l'indirizzo, per esempio `https://enrico-oliveta.github.io/oliveta/`.
6. Nel gestionale, sezione **Aziende › App installabile**, incolla quell'indirizzo e fai **Salva**. Da quel momento i link personali che mandi alle aziende passano dall'app installabile.

## Installarla

- **PC (Chrome o Edge):** apri il link e fai clic sull'icona «Installa» nella barra dell'indirizzo, oppure ⋮ › «Installa Gestionale Oliveta».
- **Android (Chrome):** apri il link, poi ⋮ › **Installa app** (o «Aggiungi a schermata Home»).
- **iPhone/iPad (Safari):** apri il link, poi Condividi › **Aggiungi alla schermata Home**. Al primo avvio dall'icona chiede codice azienda e PIN, perché su iPhone l'app installata ha una memoria separata da Safari.

## Da sapere

- Per aprirsi serve la connessione: la pagina del gestionale arriva da Google ogni volta. Dentro il gestionale restano la copia dei dati e la coda dei salvataggi.
- Con un account Gmail gratuito Google può mostrare in alto la scritta «Questa applicazione è stata creata da un utente di Google Apps Script».
- Se cambi il link della web app (nuovo deployment invece di «Nuova versione»), aggiorna **config.js**.
