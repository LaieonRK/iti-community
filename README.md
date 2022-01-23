# ItiCommunity

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



------------------------------



## Outils
- installer le plugin chrome [augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)
- installer le plugin VS CODE [angular2-snipet](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)

## Documentation
- [Angular](https://angular.io/docs)
- [Librairie de composant](https://ng.ant.design/docs/introduce/en)

## TP


### Sign Up
Permet d'enregistrer un nouvel utilisateur sur la plateforme.


Le formulaire contient 3 champs : "username", "Mot de passe" et "Confirmation du mot de passe".
    
Au clic sur le bouton "S'enregistrer", le formulaire va déclancher l'évenement `ngSubmit`. Le formulaire est déjà configuré pour invoquer la méthode `submit()` déclarée sur le composant


```html
<form nz-form nzLayout="vertical" #f="ngForm" (ngSubmit)="submit()">
```

Le inputs son créés à partir du composant `nz-form-item` de la ui library [ng-zorro](https://ng.ant.design/components/input/en)

#### Level I
    
1. Terminer le formulaire pour l'ajout d'un utilisateur
2. Rendre le username et le mot de passe obligatoires
3. En cas de succès, rediriger l'utilisateur sur /splash/login

#### Level II

4. Afficher les messages d'erreurs de validations
    > Utiliser la propriété `nzErrorTip` sur le composant `nz-form-control`
    ```html
    <nz-form-control nzErrorTip="Message de validation">
    ```
5. Vérifier si le username est disponible. Informer l'utilisateur de l'indisponibilité d'un username.
    > Utiliser le la méthode `exists` sur la classe `UserQueries`

### Sign In
Permet à un utilisateur de se connecter à la plateforme.

Le formulaire doit contenir 2 champs : "username", "Mot de passe".
Le clic sur le bouton "Connexion" permet de soumettre le formulaire en appelant la méthode `submit()` du composant.

#### Level I

1. Faire le formulaire de sign in
2. Rendre le username et le mot de passe obligatoires
3. Rediriger l'utilisateur sur "/" en cas de succès

#### Level II

4. Afficher les messages d'erreurs de validation pour chaque champs
5. Afficher un message si le login a échoué
    > Vous pouvez utiliser le `NzMessageService` pour afficher des messages

### Room
Une room est une salle de discussion dans laquelle les utilisateurs peuvent s'échanger des messages.

Un utilisateur doit en amont avoir sélectionné une room pour pouvoir y poster du contenu.


#### Level I

1. Afficher la liste des rooms dans le menu
    > `src/modules/room/room-menu`

    > Utiliser la directive ngFor pour itérer sur les rooms et afficher leurs noms

2. Pouvoir naviguer vers room au clic dans le menu

#### Level II

3. Pouvoir ajouter une nouvelle room
    > Dans `src/modules/room/room-menu`

    > Appeler la méthode open du composant `app-room-create-modal` au clic du bouton "+"
    > Dans `src/modules/room/room-create-modal`

    > Terminer le formulaire d'ajout d'une room en ajoutant le champs **obligatire** manquant
    ```html
    <nz-form-item>
      <nz-form-label nzFor="name">Nom de la room</nz-form-label>
      <nz-form-control nzErrorTip="Nom obligatoire">
        <input class="ant-input" type="text" name="name" id="name"  #nom="ngModel">
      </nz-form-control>
    </nz-form-item>
    ```
    > Lors de la validation du formulaire, la méthode ```onOk``` sera invoquée (tel que configuré sur le composant `nz-modal`)

4. Sélectionner par défaut la première room de la liste
    > Rediriger vers la première room si il n'y a pas de roomId dans le store. 
    > Tester `this.feedStore.value.roomId`
  
5. Ajouter ajouter les nouvelles rooms créées dynamiquement

#### Level III
6. Sélectionner par défaut la dernière room visité par l'utilisateur en stockant l'information dans le [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

### Post

### Level I
1. Pouvoir rédiger et envoyer un post
    > `src/modules/input/components/feed-input`

2. Afficher les posts reçues dans la room
    > `src/modules/feed/components/feed`
3. Afficher le nom de l'auteur des messages
4. Afficher la photo de l'auteur des messages
5. Afficher la date du post
6. Afficher une image si le message contient une url vers une image
7. Afficher une video si le message contient une url vers une vidéo (https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4)
8. Afficher le player de youtube si le message contient un lien youtube
9. Implémenter le bouton like

### Level II
8. Utiliser [luxon](https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html) pour formatter les date à l'aide d'un [Pipe Angular](https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations)
9. Insérer les nouveaux posts reçues via WebSocket
10. Pouvoir uploader des photos, vidéos et audios

### Level III
10. Pouvoir parser plusieurs type de contenus dans un seul post
11. Remplacer les liens http par des balises <a>...</a>.
12. Dans les messages, afficher les mentions `@username` en vert

### User Widget 

### Level I

1. Afficher la photo de l'utilisateur connecté
2. Pouvoir éditer le profile de l'utilisateur: son username et sa photo en cliquant sur le bouton dédié
3. Pouvoir se déconnecter de l'application encliquant sur le bonton rouge de logout. Rediriger l'utilisateur vers le /splash/login

### Notifications

### Level I

1. Au clic sur le bouton de notifications, afficher ou masquer une barre de notification
2. Dans la barre de notifications, lister toutes les notifications reçues avec : un message décrivant la notification, la photo de l'utilisateur concerné et la date
3. Afficher sur fond vert les notifications non lues

### Level II
4. Afficher les nouvelles notifications reçues dans la [popup de notification](https://ng.ant.design/components/notification/en)

### Level III
5.  Créer un service permettant de poster des [notifications web](https://developer.mozilla.org/fr/docs/Web/API/notification/Using_Web_Notifications)

6. N'afficher les notifications Web que si la page n'est pas visible grâce à l'évènement [visibilitychange](https://developer.mozilla.org/en-US/docs/Web/Events/visibilitychange)

7. Rendre la notification clicable. Au clic, la notification doit rediriger soit vers un post, soit vers une room en fonction de la notification

## Help

### Errors

> Uncaught Error: Angular JIT compilation failed: '@angular/compiler' not loaded!

Can happen when a service class did not use the @Injectable() decorator. Check your terminal to see error details

> Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class.

May caused by an external dependency added through npm but not compiled by angular yet. Restarting the `npm start` command should solve the problem

> error NG8001: '...' is not a known element:

The component is probably missing from the module declaration
