## Velkommen til Angular Fagkveld!
<img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" style="background: none; border: none; box-shadow: none;">

---

## Program
1. Introduksjon til Angular
2. Workshop - lage en enkel app
3. Diskusjon og eksperimentering med mer avanserte muligheter?

Andre ønsker?

---

## Hva er Angular

- Frontend-rammeverk for å lage SPA'er (Single Page Apps)
- Siste versjon er 5

---

## Hva skjedde med Angular 3?
- Semver!

![https://juristr.com/blog/assets/imgs/semver.png](https://juristr.com/blog/assets/imgs/semver.png)

<small>https://juristr.com/blog/assets/imgs/semver.png</small>

---

## Hvorfor Angular?
- Typescript
- Leverer alt som trengs for en komplett SPA (webpack-oppsett, testoppsett, byggeverktøy +++)
- Solid backing (Google)

----

## Typescript
- Supersett av Javascript
- Kompileres til vanilla JavaScript
- Statisk typet (typesjekking ved kompilering istendefor ved runtime). Dette gjør at flere trivielle bugs ofte blir fanget opp før runtime
- Familiært for de med bakgrunn i Java, C# etc

----

## Ytelse
- SSR
- Mobil er høyt prioritert ifht minnehåndtering, touchbaserte controllere, ytelse...
- Øysteins grafer

----

## Angular CLI
- Håndterer alt fra generering av komponenter, servicer, pipes og moduler til produksjonsbygging på en enkel måte

----

## Arkitektur
- Fokus på strukturert kode (moduler, komponenter, servicer)
- Enkelt å komme i gang, velkjente prinsipper
- Enkelt å vedlikeholde

---

## Hva skal vi lage
- Andeby 🦆
- En klassisk frontend oppgave
- Kommunisere med en REST-tjeneste, filtrere liste, events...

http://localhost:4200
---

## Check ya tools
- Node > 6.9.0
- Nvm (valgfritt)
- Git

----

## Yarn

Mac med homebrew:
```(bash)
$ brew install yarn # --without-node hvis du bruker nvm
```
Linux og Windows:
https://yarnpkg.com/lang/en/docs/install/

----

## Angular CLI
```(bash)
$ npm install -g @angular/cli
```

---

## La oss se på Angular CLI

---

## 🦆🦆🦆 Andeby 🐤🐤🐤

Hent ned boilerplate-prosjekt
```(bash)
$ git clone https://github.com/stianmorsund/angular-fagkveld-base.git
```

---


## Nye features i Angular
- Form builder
- [Change detection](https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)
- Zone
- Routing
- Observables\Rxjs

---

## Where to go from here?
- [Reactive forms](https://angular.io/guide/reactive-forms)
- Changedetection strategies?
- Optimalisering, AOT, three shaking, Universal & App shell,
- Angular material - Material design komponentbibliotek
- ngrx/store - State management for Angular, inspirert av Redux
- Playbook - Alternativ til PatternLab med støtte for Angular
