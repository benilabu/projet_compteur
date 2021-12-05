# Instructions au lancement des tests pour le projet compteur

### Sommaire :
1. Installation du projet
2. Lancement du projet et des tests


Le projet a été réalisé avec [ReactJS](https://fr.reactjs.org/) et [Selenium](https://www.selenium.dev/).
Celui-ci est composé de 2 dossiers :
```
total 12K
drwxr-xr-x 5 antoine antoine 4,0K déc.   4 23:39 ReactApp
-rw-r--r-- 1 antoine antoine  125 déc.   5 16:03 README.md
drwxr-xr-x 3 antoine antoine 4,0K déc.   4 23:41 SeleniumTests
```

Le premier, nommé `ReactApp`, contient le projet web compteur. Ce projet est une simple page web affichant un nombre qui peut être incrémenté ou décrémenté en appuyant sur les 2 boutons prévus à cet effet.  
Le second dossier, nommé `SeleniumTests`, contient tout le nécessaire afin de lancer une suite de tests sur le projet compteur.   
Ci-dessous sont décrites les instructions afin d'installer et de lancer le projet ainsi que ses tests.

Testé sur les versions :

| OS                  | Arch          | Node version            | NPM version            |
| --------------------|:-------------:| -----------------------:|-----------------------:|
| ArchLinux (Manjaro) | x64           | Node v16.13.0 (Gallium) | 8.1.0                  |

## 1. Installation du projet
Pour installer le projet, il vous faudra aller dans les 2 dossiers et lancer la commande :
```bash
npm install
```

> Note : Si NPM vous notifie des erreurs de sécurité, vous pouvez les ignorer, elles ne concernent que les paquets de développement de ReactJS

Si des problèmes subsistent, contactez Antoine Tréboutte et/ou Bénédict Labu :
- antoine.treboutte@uqar.ca
- benedict.labu@uqar.ca

## 2. Lancement du projet et des tests
### 2.1 Lancement de l'application ReactJS
Tout d'abord, il faut lancer le projet en ReactJS, pour cela, allez dans le dossier `ReactApp` et entrez la commande :
```bash
npm start
```

> Note : Si ReactJS vous ouvre un navigateur, vous pouvez le fermer, il n'est pas nécessaire pour les tests

Un affichage semblable à celui ci-dessous devrait apparaître :
```
Compiled with warnings.

src/App.js
  Line 1:8:  'logo' is defined but never used  no-unused-vars

src/compteur.js
  Line 1:8:   'react' is defined but never used  no-unused-vars
  Line 3:18:  'Row' is defined but never used    no-unused-vars
  Line 3:23:  'Col' is defined but never used    no-unused-vars

src/index.js
  Line 5:8:  'App' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

```

Si ce message s'affiche, bravo ! Votre application ReactJS est lancée !

### 2.2 Lancement des tests Selenium

Pour lancer les tests Selenium, rien de plus simple. Il vous faudra vous rendre dans le dossier `SeleniumTests` et lancer la commande :

```bash
npm start
```

Une page s'ouvrira alors et exécutera les tests écrits dans le fichier `index.js`.

Si aucune erreur n'est apparue, bravo ! Vous avez fini l'exécution des tests et du projet !
