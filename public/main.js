$('#team-select').dropdown({
    onChange: function(value){
        var teamData = {team: value};
        $('.cards').removeClass('fadeIn').addClass('animated fadeOut').remove();
        $.ajax({
            url: '/football',
            data: teamData,
            type: 'POST',
            success: function (data) {
                console.log(data);
                $.each(data , function( key, value ) {
                    $('#team-list').append(`
                        <div class="ui cards animated fadeIn">
                            <div class="card">
                                <div class="content">
                                    <div class="header">${value.firstName}&nbsp;${value.lastName}</div>
                                    <div class="meta">
                                        ${value.team.city}
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