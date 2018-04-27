
$('#team-filter').dropdown({
    onChange: function(value){
        // get value in select
        var team = value;
        // lookup value in position radio
        var position = $('input[name=position]:checked', '#position-filter').val()
        // build object
        var allData = {
            team: team,
            position: position
        };
        $('.card').removeClass('fadeIn').addClass('animated fadeOut').remove();
        $.ajax({
            url: '/football',
            data: allData,
            type: 'POST',
            success: function (data) {
                console.log(data);
                $.each(data , function( key, value ) {
                    $('#team-list .ui.cards').append(`
                        <div class="card animated fadeIn">
                            <div class="content">
                                <div class="header">${value.firstName}&nbsp;${value.lastName}</div>
                                <div class="meta">
                                    ${value.team.city}
                                </div>
                            </div>
                        </div>
                    `);
                });

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
        // build object
        var allData = {
            team: team,
            position: position
        };
        // make ajax call
        console.log(allData);
        
    }
});

$('#probowl-filter').checkbox({
    onChecked: function () {
        console.log('hit');
        // var status = $(this).isChecked;
        // console.log(val);
    }
});


function resetCards(){

}