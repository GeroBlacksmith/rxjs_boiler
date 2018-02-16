'use strict'
import $ from 'jquery';
import Rx from 'rxjs/Rx';

function getUser(username){
    return $.ajax({
       url: 'https://api.github.com/users/'+username,
       dataTupe:'jsonp' 
    }).promise();
}

Rx.Observable.fromPromise(getUser('geroblacksmith')).map(user=>user.login).subscribe(x=>console.log(x));