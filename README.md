# Code test csv to xml

This is only for experimental use, it's a code test.

## Get started

prerequisites node

```
npm start
```

### Run dev

(Hot reload)

```
npm run dev
```

## Format

Filformat input:
P|förnamn|efternamn
T|mobilnummer|fastnätsnummer
A|gata|stad|postnummer
F|namn|födelseår
P kan följas av T, A och F
F kan följas av T och A

## Example input

P|Victoria|Bernadotte
T|070-0101010|0459-123456
A|Haga Slott|Stockholm|101
F|Estelle|2012
A|Solliden|Öland|10002
F|Oscar|2016
T|0702-020202|02-202020
P|Joe|Biden
A|White House|Washington, D.C

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
