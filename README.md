# Code test csv to xml

This is only for experimental use, it's a code test. Don't use it.

## Get started

prerequisites install node

```
git clone git@github.com:Elmona/code_test.git
cd code_test
npm start
```

### Run dev

(Hot reload)

```
npm run dev
```

## Format

```
Filformat input:
P|förnamn|efternamn
T|mobilnummer|fastnätsnummer
A|gata|stad|postnummer
F|namn|födelseår
P kan följas av T, A och F
F kan följas av T och A
```

## Example input

```
P|Carl Gustaf|Bernadotte
T|0768-101801|08-101801
A|Drottningholms slott|Stockholm|10001
F|Victoria|1977
A|Haga Slott|Stockholm|10002
F|Carl Philip|1979
T|0768-101802|08-101802
P|Barack|Obama
A|1600 Pennsylvania Avenue|Washington, D.C
```

## Example output

```
<people>
 <person>
   <firstname>Carl Gustaf</firstname>
   <lastname>Bernadotte</lastname>
   <address>
     <city>Stockholm</city>
     <street>Drottningholms slott</street>
     <postalcode>10001</postalcode>
   </address>
   <mobile>0768-101801</mobile>
   <phone>08-101801</phone>
   <family>
     <name>Victoria</name>
     <born>1977</born>
     <address>
       <city>Stockholm</city>
       <street>Haga Slott</street>
       <postalcode>10002</postalcode>
     </address>
   </family>
   <family>
     <name>Carl Philip</name>
     <born>1979</born>
     <mobile>0768-101802</mobile>
     <phone>08-101802</phone>
   </family>
 </person>
 <person>
   <firstname>Barack</firstname>
   <lastname>Obama</lastname>
   <address>
     <city>Washington, D.C</city>
     <street>1600 Pennsylvania Avenue</street>
   </address>
 </person>
</people>
```
