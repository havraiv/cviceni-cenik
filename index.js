// Ceník

// Vytvořte si repozitář ze šablony cviceni-cenik se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

// Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat z konzole.
// Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.

// const selectPlan = (planNumber) => {
//   if (planNumber === 1) {
//     document.querySelector('#plan1').classList.add('plan--selected');
//   }
//   if (planNumber === 2) {
//     document.querySelector('#plan2').classList.add('plan--selected');
//   }
//   if (planNumber === 3) {
//     document.querySelector('#plan3').classList.add('plan--selected');
//   }
// };

// Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.

const selectPlan = (planNumber) => {
  if (planNumber === 1) {
    document.querySelector('#plan1').classList.add('plan--selected');
    document.querySelector('#plan2').classList.remove('plan--selected');
    document.querySelector('#plan3').classList.remove('plan--selected');
  }
  if (planNumber === 2) {
    document.querySelector('#plan2').classList.add('plan--selected');
    document.querySelector('#plan1').classList.remove('plan--selected');
    document.querySelector('#plan3').classList.remove('plan--selected');
  }
  if (planNumber === 3) {
    document.querySelector('#plan3').classList.add('plan--selected');
    document.querySelector('#plan1').classList.remove('plan--selected');
    document.querySelector('#plan2').classList.remove('plan--selected');
  }
};
