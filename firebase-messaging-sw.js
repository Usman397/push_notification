// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
// /*
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
// */
// firebase.initializeApp({
//     apiKey: "AIzaSyBkSJXWmp8xCZaPEBocHmUscwp1oFhqFWc",
//     authDomain: "daob-test.firebaseapp.com",
//     projectId: "daob-test",
//     storageBucket: "daob-test.appspot.com",
//     messagingSenderId: "1010010808525",
//     appId: "1:1010010808525:web:4537a624630f25d403c984",
//     measurementId: "G-VRRR8VXPVP"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log("Message received.", payload);
//     const title = "Hello world is awesome";
//     const options = {
//         body: "Your notificaiton message .",
//         icon: "/firebase-logo.png",
//     };
//     return self.registration.showNotification(
//         title,
//         options,
//     );
// });




importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '567315129019'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: 'https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg' //your logo here
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});