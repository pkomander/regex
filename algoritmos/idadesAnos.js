var Ano = 24;
var Meses = 3;
var dias = 28;

var AnoEmDias = 0;
var a = 0;

for (var i = 0; i < Ano; i++) {
    AnoEmDias += 365;
    console.log(AnoEmDias);

    if (a == 4) {
        AnoEmDias += 1;
        a = 0;
    }

    a += 1;
}

for (var x = 0; x < Meses; x++) {
    AnoEmDias += 31;
}
console.log(AnoEmDias);

AnoEmDias += dias + 1;
console.log(AnoEmDias);