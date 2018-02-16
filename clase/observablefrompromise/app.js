'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

// ejemplos

/*
const myPromise = new Promise((resolve, reject)=>{
    console.log('Creating promise');
    setTimeout(()=>{
        resolve('Hello from promise')
    }, 3000);
});*/


/*
myPromise.then(x => {
    console.log(x);
})*/


/*
const source$ = Rx.Observable.fromPromise(myPromise);

source$.subscribe( x => console.log(x) );
*/



function getUser(username){
    return $.ajax({
       url: 'https://api.github.com/users/'+username,
       dataTupe:'jsonp' 
    }).promise();
}

const inputSource$ = Rx.Observable.fromEvent($('#input'),'keyup');
// MergeMap o SwitchMap para no usar subscribe dentro de subscribe
inputSource$.subscribe(
    e => {
        Rx.Observable.fromPromise(getUser(e.target.value)).subscribe(
            x => {
                $('#name').text(x.name);
                $('#blog').text("Pais: "+x.location);
                $('#repos').text("PUBLIC REPOS: "+x.public_repos);
                $('#img').attr("src",x.avatar_url);
                console.log(x);
            }
        );
    }
);



