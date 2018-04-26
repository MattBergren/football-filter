$('#team-filter').dropdown({
    onChange: function(value){
        var teamData = {team: value};
        $('.card').removeClass('fadeIn').addClass('animated fadeOut').remove();
        $.ajax({
            url: '/football',
            data: teamData,
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

$('#position-filter .ui.radio.checkbox').checkbox({
    onChecked: function () {
        var val = $(this).val();
        console.log(val);
        allData = {
            team: 'all',
            position: val,
            proBowl: false
        }
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