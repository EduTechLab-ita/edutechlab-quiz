# PWA-QUIZ - EduTechLab Progetti

## Informazioni Progetto
- **Sviluppatore**: Fabio Rizzotto
- **Specializzazione**: Innovazione didattica digitale, STEAM, coding educativo, robotica
- **Ruolo**: Animatore Digitale, formatore PNRR

## Repository GitHub
- **Sito principale**: https://github.com/edutechlab-ita/edutechlab-ita.github.io
  - URL live: https://edutechlab-ita.github.io/
  - PWA installabile ✅
  
- **Quiz PWA**: https://github.com/edutechlab-ita/edutechlab-quiz
  - URL live: https://edutechlab-ita.github.io/edutechlab-quiz/
  - PWA installabile ✅

## Lavoro Completato
- ✅ **Problema risolto**: PWA quiz non installabile nella sottocartella /quiz/
- ✅ **Soluzione**: Migrazione a repository separato per PWA dedicata
- ✅ **Logo personalizzato**: Sostituito emoji 🎓 con icona colorata personalizzata
- ✅ **Ottimizzazione visiva**: Aggiunta drop-shadow al logo per visibilità
- ✅ **Pulizia**: Rimossa vecchia cartella /quiz/ dal sito principale

## Configurazione Tecnica PWA

### Manifest.json (Quiz)
```json
"icons": [
  {
    "src": "icon-192.png",
    "sizes": "192x192", 
    "type": "image/png",
    "purpose": "maskable any"
  },
  {
    "src": "icon-512.png",
    "sizes": "512x512",
    "type": "image/png", 
    "purpose": "maskable any"
  }
]
```

### Tag PWA essenziali (index.html)
```html
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon-192.png">
<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="icon-512.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="EduTech Quiz">
```

### Logo personalizzato
```html
<h1><img src="logo-colorato.png" alt="EduTech Lab" style="width: 96px; height: 96px; vertical-align: middle; margin-right: 15px; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));"> EduTech Lab</h1>
```

## Palette Colori Sito Quiz
- **Primario**: #667eea (azzurro-viola)
- **Secondario**: #764ba2 (viola scuro)
- **Gradiente**: 135deg
- **Testo**: #374151 (grigio scuro)

## File Importanti
- **Icone PWA**: icon-192.png, icon-512.png
- **Logo**: logo-colorato.png
- **Service Worker**: sw.js
- **Manifest**: manifest.json

## Note per Futuro Sviluppo
- Entrambe le PWA sono completamente funzionanti e installabili
- Logo con ombra risolve problema visibilità su sfondo bianco
- Configurazione identica a sito principale per garantire installabilità
- Link dal sito principale al quiz funziona correttamente

## Cartella Progetto
- **Posizione**: C:\Users\fabio\PWA-QUIZ\
- **Organizzazione**: Tutti i file PWA centralizzati in una cartella dedicata

## Comandi Utili
- **Lint/Type check**: Verificare se esistono comandi npm run lint, npm run typecheck
- **Test**: Controllare package.json per script di test
- **Build**: Verificare processo build se necessario

## Lingue
- **Italiano**: Lingua principale per contenuti e interfaccia
- **Comunicazione**: Fabio preferisce comunicazione in italiano