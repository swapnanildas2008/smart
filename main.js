const firebaseConfig = {
    apiKey: "AIzaSyD89OmHe57joTajypOB4lG7o4GL0qTFyfM",
    authDomain: "smart-farming-and-contro-6c7be.firebaseapp.com",
    databaseURL: "https://smart-farming-and-contro-6c7be-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-farming-and-contro-6c7be",
    storageBucket: "smart-farming-and-contro-6c7be.appspot.com",
    messagingSenderId: "544054428932",
    appId: "1:544054428932:web:6b87a5cec408896436bc51",
    measurementId: "G-S31G44VN0C"
  };

  firebase.initializeApp(firebaseConfig);
function getData() {
    var database = firebase.database();
    var dataRef = database.ref('Moisture');
    dataRef.on('value', function (snapshot) {
        var data = snapshot.val();
        document.getElementById('dataContainer').innerHTML = '<p>' + data.yourProperty + '</p>';
    });
}