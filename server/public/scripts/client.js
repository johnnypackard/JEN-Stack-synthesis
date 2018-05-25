import { log } from "util";

console.log('js');

$( document ).ready( readyNow );

function readyNow(){
    $( '#refreshButton' ).on ( 'click' , refresh );
    $( '#sendMessageButton' ).on( 'click', sendMessage );   
    // dynamically created elements need a click handler as follows:
    $( document ).on( 'click', '.removeMeButton', removeMe );
    getMessages(); 
} // end ready

function getMessages(){
    console.log( 'getMessages' );
    // makes a GET call to /messages route
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( response){
        console.log( 'back from server with:', response );
       // when back from server
       let el = $( '#messagesOut' );
       el.empty();
       // loop through all messages
       for( message of response ){
           let outputString = `<div class="col-4"><div class="card">`;
               outputString += `<div class="card-header">${message.name}</div>`;
               outputString += `<div class="card-body">${message.message}</div>`;
               outputString += `<div class="card-footer"><button clas="btn btn-block removeMeButton>/div>`;
            outputString += `</div></div>`;
            el.append( outputString );
       } // end for loop
       // display on DOM 
    }); // end ajax
} // end getMessages

function refresh(){
    console.log( 'in refresh' );
    
}

function removeMe(){
    console.log( 'removeMe' );
    $( this ).parent().parent().parent().fadeOut();
} // end function

function sendMessage(){
    console.log( 'in sendMessage ');
    getMesssages();

    let obectToSend = {
        name: $( '#nameIn' ).val(),
        message: $( '#messageIn' ).val()
    }
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function( response ){
        getMessages();
    });
} // end function
