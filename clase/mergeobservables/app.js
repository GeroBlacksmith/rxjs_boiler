const source6$=Rx.Observable.interval(2000).map(v=>'1'+v);
const source7$=Rx.Observable.interval(500).map(v=>'2'+v);

Rx.Observable.merge(source6$,source7$)
.take(25)
.subscribe(
    x=>console.log(x)
);