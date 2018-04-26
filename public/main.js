$('#team-select').dropdown({
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