$(document)
  .ready(function () {
    function Gato(name, url) {
      this.name = name;
      this.url = url;
      this.count = 0;
    };
    var gato1 = new Gato('Othon', 'Image/cat-esbugalhado.jpeg');
    var gato2 = new Gato('Juliana', 'Image/gato carinhoso.jpg');
    var gato3 = new Gato('Bernardo', 'Image/lingua-cat.jpeg');
    var gato4 = new Gato('Gisela', 'Image/nice-cat.jpg');
    var gato5 = new Gato('Daniela', 'Image/serious-cat.jpg');
    console.log(gato1);
    var gatos = [gato1, gato2, gato3, gato4, gato5];
    for (i = 0; i < gatos.length; i++) {
      var name = gatos[i].name;
      var url = gatos[i].url;
      var contador = gatos[i].count;
      var elem = '<li class=' + name + '>' + name + '</li>';
      $('#cat_list')
        .append(elem);
      $('.' + name)
        .click((function (newName, newUrl, newCount) {
          return function () {
            newCount++;
            $('h2')
              .text(newName);
            $('img')
              .attr({
                src: newUrl,
                class: newName,
                contador: newCount,

              });
            $('p')
              .text(newCount);
          };
        })(name, url, contador));
      $('img.' + name)
        .click((function (argument) {
          return function () {
            alert($(this)
              .attr(argument));
            $('p')
              .text(argument);
          };
        })(contador));
    }
  });
