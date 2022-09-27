// declartion for our song values

let song;
let playsong;

//spotify client creds
const clientID =  'ed52463317784dccadb53ed2a22ad3f0';
const clientSecret = '625c7f6edd584e86975f59f0b576d5e4';

const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic' + btoa(clientID + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    //access the data given to us by the fetch response (promise)
    const data = await result.json();
    return data.access_token
}

//function to get song infor when image is clicked
/**
 * @param img_index
 * 
 * 
 * 
 * @param item_index
 * 
 * 
 * 
 * 
 * /
'*/

async function clickEvent(img_index, item_index){
    // get track name
    let track = document.getElementsByTagName('img')[img_index].attributes[2]
.value

// token
let token = await _getToken();

let headers = new Headers([
    ['Content-Type', 'application/json'],
    ['Accept', 'application/json'],
    ['Authorization', 'Bearer ${token}']
]);

let request = new request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
    method: 'GET',
    headers:headers
});

let result = await fetch(request);

let response = await result.json();

console.log(response)
let song = resonse.tracks.items[item_index].preview_url

// before we polay a song, first check if play song is true and if so stop it
if (playsong){
    stopSnippet();
}
songSnippet(song);

}

/**
 * 
 *  @param id 
 *  @param index
 * 
 * 
 * id = image id for gallery image
 * event = Mouse event given by the action from our user
 * 
 * Our function will produce songs from the clickEvent based on the index of the image
 * 
 */


function getSong(id, event){
    switch(id){
        case 'fig1': {// lead belly
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2' : {// Julien Baker - something
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3' : {// radiohead - myxmatosis
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4' : {// tyler childress - follow you to virgie
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5' : {// Vulpeck - Cory Wong
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6' : {// Jim Croce - New york aint my home
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
        case 'fig7' : {// beatles - hey bulldog
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
        case 'fig8' : {// rainbow kitten - its called freefall
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
        case 'fig9' : {// Alice in chains - roooster unplugged
            event.stopPropagation();
            clickedEvent(8,0)
            break;
        }
    }
}

/**
 *   @param url
 * 
 * 
 * url is the song preview url
 * 
 * 
 * function will return an audio clip given by the preview url
 */

function songSnippet(url){
    playSong = new Audio(url);
    return playSong.play()
}

/**
 * NO Params
 * 
 *  Functionreturns an event to stop the song snippet 
 */

function stopSnippet(){
    return playSong.pause();
}
