$('#team-select').dropdown({
    onChange: function(value){
        var teamData = {team: value};
        $('.cards').removeClass('fadeIn').addClass('animated fadeOut').remove();
        $.ajax({
            url: '/football',
            data: teamData,
            type: 'POST',
            success: function (data) {
                $.each( data.player, function( key, value ) {
                    $('#team-list').append(`
                        <div class="ui cards animated fadeIn">
                            <div class="card">
                                <div class="content">
                                    <div class="header">${value.firstName}&nbsp;${value.lastName}</div>
                                    <div class="meta">
                                        ${data.team.city}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);
                });

            }
        });
        
    }
});