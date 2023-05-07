---
title: 'Les Progressive Web Apps (PWA) sur iOS : Prêtes pour la production ?'
excerpt: "Les Progressive Web Apps (PWA) sur iOS rencontrent des limitations, notamment l'absence de support des notifications push. Des alternatives comme Firebase et WebView sont disponibles, mais présentent des inconvénients en termes de performances et d'entretien. Bien que la situation évolue avec iOS 16.4, les PWA sur iOS ne sont pas encore prêtes pour la production. Les développeurs doivent peser les avantages et les inconvénients et envisager d'autres solutions pour répondre aux besoins de leur application."
coverImage: '/assets/blog/app.jpg'
date: '2023-05-08T05:35:07.322Z'
author:
  name: Marvin SANT
  picture: '/assets/blog/authors/marv.jpeg'
ogImage:
  url: '/assets/blog/app.jpg'
---

## Introduction

Les Progressive Web Apps (PWA) ont révolutionné le développement d'applications en permettant de créer des expériences web de qualité supérieure qui fonctionnent sur plusieurs plateformes. Néanmoins, malgré leur popularité et leur adoption croissante, certaines limitations subsistent, notamment en ce qui concerne le système d'exploitation iOS d'Apple. Dans cet article, nous allons examiner l'une de ces limitations : l'absence de support des notifications push sur les PWA et iOS.

## Les notifications push et les PWA

Les notifications push jouent un rôle crucial dans l'engagement et la rétention des utilisateurs. Sous Android, les PWA peuvent utiliser les service workers pour gérer et envoyer des notifications push. Cependant, la situation est différente pour iOS. Les PWA sur iOS ne prennent pas en charge les notifications push, ce qui limite leur utilité pour certaines applications qui nécessitent une interaction régulière avec les utilisateurs.

### La situation sur iOS

Sur iOS, le système de notifications push natif, APNs (Apple Push Notification service), n'est pas compatible avec les PWA. Cela signifie que les développeurs qui souhaitent intégrer des notifications push dans leurs PWA doivent trouver des alternatives pour contourner cette limitation.

## La solution alternative : Firebase et WebView

Pour contourner cette limitation, les développeurs peuvent opter pour l'utilisation de Firebase et d'une application WebView.

### Firebase

Firebase, une plateforme de développement d'applications mobiles, permet d'envoyer des notifications push sur iOS. Grâce à Firebase Cloud Messaging (FCM), les développeurs peuvent envoyer des messages push à leurs utilisateurs sur différents systèmes d'exploitation, y compris iOS.

### WebView

L'application WebView, quant à elle, est utilisée pour afficher l'application PWA. Néanmoins, cette approche présente des inconvénients en termes de performances et de facilité d'entretien. Les applications WebView sont généralement plus lentes et plus difficiles à maintenir que les PWA pures.

## L'évolution d'iOS et les PWA

Malgré ces limitations, les choses évoluent progressivement. Apple a récemment déployé iOS 16.4, qui prend en charge les notifications push pour les PWA.

### iOS 16.4

Avec la sortie d'iOS 16.4, Apple a introduit une prise en charge partielle des notifications push pour les PWA. Cela signifie que les développeurs peuvent désormais utiliser certaines fonctionnalités des notifications push avec leurs PWA, bien que des limitations subsistent.

## Conclusion

En conclusion, les PWA sur iOS ne sont pas encore prêtes pour la production, principalement en raison de l'absence de support des notifications push. Bien que des solutions alternatives existent, elles présentent des inconvénients qui rendent les PWA moins attractives sur iOS. Néanmoins, avec l'évolution d'iOS, il est possible que cette situation change à l'avenir. En attendant, les développeurs devront peser le pour et le contre de l'utilisation des PWA sur iOS et envisager d'autres solutions pour répondre aux besoins de leur application.