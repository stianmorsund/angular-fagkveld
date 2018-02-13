## Velkommen til Angular Fagkveld!
<img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" style="background: none; border: none; box-shadow: none;">

##### Stian Morsund og Øystein Lygre
---

## Program
1. Introduksjon til Angular
2. Workshop - lage en enkel app
3. Diskusjon

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

----

### Komplett rammeverk for SPA
- Skjema
- Ruting
- Animasjoner
- Tilgjengelighet
- Webpack-oppsett
- Testoppsett
- Byggeverktøy

----

- Solid støtte (Google)
- Aktiv utvikling

----

## Typescript
- Supersett av Javascript
- Kompileres til vanilla JavaScript
- Statisk typet (typesjekking skjer ved kompilering ) = færre bugs, lettere refaktorering
- Familiært for de med bakgrunn i C#, Java, etc.

----

## Ytelse
- SSR, Angular Universal,  App shell
- Mobil er høyt prioritert, minnehåndtering, touchbaserte kontrollere, ytelse, +++

----

![](http://www.stefankrause.net/wp/wp-content/uploads/2017/11/Bildschirmfoto-2017-11-20-um-20.48.23.png)
<small>http://www.stefankrause.net</small>
---

## Angular CLI
- Håndterer generering av
  - Komponenter
  - Servicer
  - Pipes
  - Moduler
- Forenkler
  - Utvikling
  - Bygging til produksjon
----

## Arkitektur
- Strukturert kode (moduler, komponenter, servicer)
- Enkelt å komme i gang; velkjente prinsipper
- Enkelt å vedlikeholde
- Enkelt å teste
---

## Hva skal vi lage
- Andeby 🦆
- En klassisk frontend oppgave
- Kommunisere med en REST-tjeneste, filtrere liste, events...

http://localhost:4200
---

## Check ya tools
- Node > 6.9.0
```
$ node --version
```
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

## Arkitekturen til en Angular app
![](https://angular.io/generated/images/guide/architecture/overview2.png)
<small>https://angular.io/generated/images/guide/architecture/overview2.png</small>

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
- Zones
- Change detection strategies
- Routing
- RxJs\Observables

----
<img style="background: #0c4eb2; padding: 0 1em; max-width:80%;" src="https://blog.thoughtram.io/images/cd-4.svg">
---

## Veien videre
- Storybook - Stilguide for Angular
- Reactive forms
- Optimalisering, AOT, tree shaking
- Anular Universal & App shell
- Angular material - Material design komponentbibliotek
- ngrx/store - State management inspirert av redux
