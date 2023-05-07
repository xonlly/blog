---
title: 'Mise à jour Next.js 13.4'
excerpt: "Next.js 13.4 est une version fondamentale qui marque la stabilité de l'App Router. Dans cet article, nous allons explorer les nouveautés de cette mise à jour et expliquer comment les adopter dans vos projets Next.js."
coverImage: '/assets/blog/nextjs13/next.png'
date: '2023-05-07T05:35:07.322Z'
author:
  name: Marvin SANT
  picture: '/assets/blog/authors/marv.jpeg'
ogImage:
  url: '/assets/blog/nextjs13/next.png'
---

Next.js 13.4 est une version fondamentale qui marque la stabilité de l'App Router. Dans cet article, nous allons explorer les nouveautés de cette mise à jour et expliquer comment les adopter dans vos projets Next.js.

## App Router (Stable)

L'App Router apporte plusieurs améliorations majeures :

- Composants serveur React
- Routes et layouts imbriqués
- Récupération de données simplifiée
- Streaming et Suspense
- Support SEO intégré
- Turbopack (Beta) : Un serveur de développement local plus rapide et stable
- Server Actions (Alpha) : Mutations de données sur le serveur sans JavaScript côté client

Depuis la sortie de Next.js 13 il y a six mois, l'équipe s'est concentrée sur la construction des fondations de l'App Router pour un avenir meilleur. Aujourd'hui, avec la version 13.4, vous pouvez commencer à adopter l'App Router pour la production.

```js
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

### Next.js App Router

L'App Router a été conçu pour faciliter la création d'applications React avec rendu côté serveur. Il offre de nouvelles fonctionnalités, telles que les composants serveur React et Suspense, tout en restant fidèle aux principes de conception de Next.js :

- Zéro configuration. Utilisez le système de fichiers comme une API.
- Seulement du JavaScript. Tout est une fonction.
- Rendu côté serveur automatique et découpage de code.
- La récupération de données est à la charge du développeur.

Avec l'App Router, vous pouvez créer des layouts imbriqués et récupérer des données en utilisant des fonctions asynchrones et l'instruction `await`. Les composants serveur React ne sont pas inclus dans le bundle JavaScript côté navigateur, ce qui permet d'améliorer les performances et la modularité de votre application.

### Turbopack (Beta)

Turbopack est un nouveau bundler intégré à Next.js pour accélérer les itérations locales et améliorer la stabilité. La version bêta de Turbopack peut être utilisée avec la commande `next dev --turbo`. Bien qu'il n'ait pas encore une parité complète avec webpack et Next.js, la plupart des cas d'utilisation devraient être pris en charge.

### Server Actions (Alpha)

Les Server Actions sont une nouvelle fonctionnalité expérimentale de Next.js qui permet de muter des données sur le serveur en appelant directement des fonctions sans avoir besoin de créer une couche API intermédiaire. Cette fonctionnalité facilite la gestion des mutations et de l'état des formulaires tout en offrant une approche plus simple et plus sécurisée pour la manipulation des données.

## Conclusion

Next.js 13.4 est une étape importante pour le framework, apportant de nombreuses améliorations et nouveautés. Avec un App Router stable, un Turbopack en bêta et des Server Actions en alpha, cette version offre aux développeurs des outils puissants pour construire des applications React performantes et modulaires. Il est temps de commencer à adopter ces nouvelles fonctionnalités dans vos projets Next.js