(function () {
    $('#team-filter').dropdown({
        onChange: function(value){
            // get value in select
            var team = value;
            // lookup value in position radio
            var position = $('input[name=position]:checked', '#position-filter').val();
            // check if probowl switch is checked
            var pb;
            if($('input[name=proBowl]:checked', '#probowl-filter').is(':checked')){
                pb = true;
            } else {
                pb = false;
            }
            // build object
            var allData = {
                team: team,
                position: position,
                probowl: pb
            };
            removeCards();
            $.ajax({
                url: '/football',
                data: allData,
                type: 'POST',
                success: function (data) {
                    var res = nunjucks.render('player-card.njk', {items:data});
                    $('#team-list').html(res);
                }
            });
            
        }
    });

    $('.ui.radio.checkbox', '#position-filter').checkbox({
        onChecked: function () {
            // get value of radio
            var position = $(this).val();
            // lookup value in select
            var team = $('#team-filter').val();
            // check if probowl switch is checked
            var pb;
            if($('input[name=proBowl]:checked', '#probowl-filter').is(':checked')){
                pb = true;
            } else {
                pb = false;
            }
            // build object
            var allData = {
                team: team,
                position: position,
                probowl: pb
            };
            removeCards();
            $.ajax({
                url: '/football',
                data: allData,
                type: 'POST',
                success: function (data) {
                    var res = nunjucks.render('player-card.njk', {items:data});
                    $('#team-list').html(res);
                }
            });
            
        }
    });

    $('#probowl-filter').checkbox({
        onChange: function () {
            var position = $('input[name=position]:checked', '#position-filter').val();
            var team = $('#team-filter').val();
            // check if probowl switch is checked
            var pb;
            if ($(this).is(':checked')) {
                pb = true;
            } else {
                pb = false;
            }
            // build object
            var allData = {
                team: team,
                position: position,
                probowl: pb
            };
            removeCards();
            $.ajax({
                url: '/football',
                data: allData,
                type: 'POST',
                success: function (data) {
                    var res = nunjucks.render('player-card.njk', {items:data});
                    $('#team-list').html(res);
                }
            });
        }
    });

    function removeCards(){
        $('.player-card').removeClass('fadeIn').addClass('animated fadeOut').remove();
    }

})();