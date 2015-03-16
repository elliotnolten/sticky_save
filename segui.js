(function($){
  var minimalOffset = 400,
      errorOffset = 500,
      filterOffset = 600,
      saveEl = $('#save'),
      saveP = saveEl.find('p'),
      saveTxt = saveP.text(),
      animate = function(){
        saveEl.addClass('animate').delay(1500).queue(function(){
          $(this).removeClass('animate').dequeue();
        });
      };
  console.log(saveEl);
  $(window).scroll(function(){
    var scrollOffset = $(document).scrollTop();
    if (scrollOffset < minimalOffset) {
      saveEl.removeClass('show');
    }
    if (scrollOffset > minimalOffset && scrollOffset < filterOffset) {
      saveEl.addClass('show');
      saveEl.removeClass('error');
      saveTxt = 'Je hebt de vereiste gegevens compleet! Sla op of ga door met de filter gegevens.';
      animate();
    }
    if (scrollOffset > errorOffset && scrollOffset < filterOffset) {
      saveEl.addClass('error');
      saveTxt = 'Er missen nog enkele <em>vereiste</em> gegevens. Ga de <em>roodgemarkeerde</em> nog eens goed na.'
    }
    if (scrollOffset > filterOffset) {
      saveEl.removeClass('error');
      saveTxt = 'Goed bezig! Sla op of vul nog meer filtergegevens in.';
      animate();
    }
    saveP.html(saveTxt);
  });
})(jQuery);