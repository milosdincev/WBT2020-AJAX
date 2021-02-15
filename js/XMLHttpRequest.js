var json = `[
    {
        "svojstvo": "readyState",
        "opis": "Numerička vrednost kojom se opisuje stanje objekta moguća stanja su: 0, 1, 2, 3 i 4 <br>Stanje 0: početna vrednost objekta nakon kreiranja <br>Stanje 1: metoda open() je uspešno izvršena; u ovoj fazi se mogu postavljati hederi zahteva funkcijom setRequestHeader() <br>Stanje 2: svi hederi odgovora su pristigli <br>Stanje 3: počinje se sa čitanjem dela sa podacima odgovora <br>Stanje 4: deo sa podacima odgovora je uspešno učitan ili je došlo do greške"
    },
    {
        "svojstvo": "responsType",
        "opis": "Tekstualni podatak koji odgovara tipu serverskog odgovora moguće vrednosti su: “”, “arraybuffer”, “blob”, “document”, “json” i “text”"
    },
    {
        "svojstvo": "response",
        "opis": "Svojstvo kojim se pristupa telu serverskog odgovora"
    },
    {
        "svojstvo": "responseText",
        "opis": "Vraća odgovor servera kao string"
    },
    {
        "svojstvo": "responseXML",
        "opis": "Vraća odgovor servera kao XML data"
    },
    {
        "svojstvo": "status",
        "opis": "Numerička vrednost koja odgovara HTTP satusu serverskog odgovora. Najviše nas interesuje status 200 – indikacija da je zahtev obradjen uspešno"
    },
    {
        "svojstvo": "statusText",
        "opis": "Tekstualna poruka koja odgovara HTTP poruci serverskog odgovora (npr. “Not Found” or “OK”)"
    },
    {
        "svojstvo": "timeout",
        "opis": "Numerička vrednost nakon koje će HTTP zahtev završiti; trebalo bi da timeout vrednost bude nešto veća nego vreme predviđeno za generisanje odgovora; vrednost responseText svojstva će u tom slučaju biti null"
    },
    {
        "svojstvo": "withCredentials",
        "opis": "Boolean-ova vrednost koja definiše da li je za cross-site Access-Control zahtev potrebni credentials kao što je cookies, autorizovani header ili TLS sertifikat."
    }
]`;

$(document).ready(function(){
    $("#show_table").click(function(){
        var table = JSON.parse(json);
        $("#show_table").addClass("d-none");
            var content = `<table class="table thead-light table-bordered table-hover table-striped">
                                <tr class="bg-primary text-white text-center">
                                    <th>Svojstvo</th>
                                    <th>Opis</th>
                                </tr>`;
            for(var i = 0; i < table.length; i++) {
                content += `
                            <tr>
                                <td>${table[i].svojstvo}</td>
                                <td>${table[i].opis}</td>
                            </tr>`;
            }
            content += `</table>`;
        $(".tabela").append(content);
    });
});

var json1 = `[
    {
        "metod": "abort()",
        "opis1": "Otkazuje trenutni zatev"
    },
    {
        "metod": "getAllResponseHeaders()",
        "opis1": "Vraća sve informacije o header-u"
    },
    {
        "metod": "getResponseHeader()",
        "opis1": "Vraća specifične informacije o header-u"
    },
    {
        "metod": "open(method,url,async,uname,pswd)",
        "opis1": "Funkcija kojom se inicira HTTP zahtev a parametri koje prihvata su:<br><li>Metod: POST, GET, HEADER, PUT, DELETE</li><li>ULR je url servera kojem se šalje zahtev</li><li>Asinhronost može biti true ili false u zavisnosti od toga da li zahtev realizuje asinhrono ili sinhrono</li><li>Korisničko ime i šifra su opcioni argumenti koji se navode ukoliko su potrebni za pristup serveru</li>"
    },
    {
        "metod": "send()",
        "opis1": "Metoda kojom se šalju podaci na server (ako imamo šta da pošaljemo)"
    },
    {
        "metod": "setRequestHeader(header, value)",
        "opis1": "Pri slanju podataka dodaje label/value par u header-u. Mora da se pozove posle open() a pre send() metode"
    }
]`;

$(document).ready(function(){
    $("#show_table2").click(function(){
        var table1 = JSON.parse(json1);
        $("#show_table2").addClass("d-none");
            var content1 = `<table class="table thead-light table-bordered table-hover table-striped">
                                <tr class="bg-primary text-white text-center">
                                    <th>Svojstvo</th>
                                    <th>Opis</th>
                                </tr>`;
            for(var i = 0; i < table1.length; i++) {
                content1 += `
                            <tr>
                                <td>${table1[i].metod}</td>
                                <td>${table1[i].opis1}</td>
                            </tr>`;
            }
            content1 += `</table>`;
        $(".tabela2").append(content1);
    });
});