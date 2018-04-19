$('#team-select').dropdown({
    action: function (text, value) {
        console.log(value);
        var teamData = {
            team: value
        };

        $.ajax({
            url: '/football',
            data: teamData,
            type: 'POST',
            success: function (data) {
            //     $('#todo-list').append(
            //         `
            //     <li class="list-group-item">
            //         <form class="edit-item-form" action="/todos/${data._id}" method="POST">
            //             <div class="form-group">
            //                 <label for="${data._id}">Item Text</label>
            //                 <input id="${data._id}" type="text" value="${data.text}" name="todo[text]" class="form-control">
            //             </div>
            //             <button class="btn btn-primary">Update Item</button>
            //         </form>
			// 		<span class="lead">
			// 			${data.text}
			// 		</span>
			// 		<div class="pull-right">
            //             <button class="btn btn-sm btn-warning edit-btn">Edit</button>
			// 			<form class="delete-item-form" style="display: inline" method="POST" action="/todos/${data._id}">
			// 				<button type="submit" class="btn btn-sm btn-danger">Delete</button>
			// 			</form>
			// 		</div>
			// 		<div class="clearfix"></div>
			// 	</li>
            // `
            //     );
            //     $('#new-todo').find('.form-control').val('');
            console.log(data);
            }
        });
    }
})