// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWsGK0mw568gaE5bPi-eELYZB20yO9jKU",
    authDomain: "ve-security.firebaseapp.com",
    databaseURL: "https://ve-security.firebaseio.com",
    projectId: "ve-security",
    storageBucket: "ve-security.appspot.com",
    messagingSenderId: "679108216394",
    appId: "1:679108216394:web:3376ab10e09d47887148b3",
    measurementId: "G-K4DV79VK9S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// Reference messages collection
var messagesRef= firebase.database().ref('messeages');

//listen for form submit
document.getElementById('allianceform').addEventListener('submit', submitForm);

//Submit form

function submitForm(e){
    e.preventDefault();

    //get value
    var firm = getInputVal('firm');
    var category = getInputVal('category');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var instagram = getInputVal('instagram');
    var twitter = getInputVal('twitter');
    var facebook = getInputVal('facebook');
    var websitelink = getInputVal('websitelink');
    var description = getInputVal('description');
    var proposal = getInputVal('proposal');
//save message 
    saveMessage(firm, category, email, phone, instagram, twitter, facebook, websitelink, description, proposal);

    
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(firm, category, email, phone, instagram, twitter, facebook, websitelink, description, proposal){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        firm:firm,
        category:category,
        email:email,
        phone:phone,
        instagram:instagram,
        twitter:twitter,
        facebook:facebook,
        websitelink:websitelink,
        description:description,
        proposal:proposal,
    });
}