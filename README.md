[![Codacy Badge](https://api.codacy.com/project/badge/Grade/908e4e86810548e88cf890febeed0058)](https://www.codacy.com/app/rwillmann/sms-free-mobile?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rwillmann/sms-free-mobile&amp;utm_campaign=Badge_Grade)
[![dependencies Status](https://david-dm.org/rwillmann/sms-free-mobile/status.svg)](https://david-dm.org/rwillmann/sms-free-mobile)

# Projet d'application Node.js capable d'utiliser le service de notifications SMS proposé par Free Mobile

## Présentation

Une petite application Node.js qui permet d'envoyer les prévisions météorologiques d'une ville par SMS.

Pour y parvenir, l'application utilise :
* Le module [request](https://www.npmjs.com/package/request) de Node.js
* L'API d'[OpenWeatherMap](https://openweathermap.org/api) 
* Le service de notification SMS de Free Mobile (voir ci-dessous)

### A propos des Notifications SMS de Free Mobile

Les forfaits téléphoniques de Free Mobile permettent de s'envoyer gratuitement des SMS en envoyant une requête HTTP à une adresse précise. Cette option doit auparavant être activée depuis l'[espace abonné](https://mobile.free.fr/moncompte/).

Un extrait de la documentation officielle de ce service :

L'envoi du SMS se fait en appelant le lien suivant : https://smsapi.free-mobile.fr/sendmsg
avec les paramètres suivants :

    user :  votre login
    pass :  votre clé d'identification générée automatiquement par notre service
    msg :  le contenu du SMS encodé sous forme d'url (Percent-encoding)

Exemple : Envoyer le message "Hello World !" sur votre mobile :

https://smsapi.free-mobile.fr/sendmsg?user=identifiant&pass=mot_de_passe&msg=Hello%20World%20!

## Utilisation

L'application fonctionne pour l'instant en local, avec l'interface en ligne de commande proposée par Heroku 

1. Mettre les identifiants Free Mobile et la clef API d'OpenWeather Map dans un fichier .env

2. Avec le terminal, se placer dans le dossier qui contient l'application puis installer les dépendances avec `npm install`

3. Lancer l'application avec la commande `heroku local`

## Développements en cours

* Prise en charge du déploiement via Heroku
* Initialisation périodique de l'application, via un cron
* Refactoring du code
* Rédaction de test
* Documentation

Vos retours, commentaires, modifications sont les bienvenus !