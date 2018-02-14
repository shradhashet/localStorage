$(document).ready(function() {

    var getDetails = function() {
        var arr = JSON.parse(localStorage.getItem('person_details'));
        var template = _.template($("#details-template").html());
        $('tbody').append(template({ details: arr }));



    };
    getDetails();

     var saveDetails = function() {
        var arr = JSON.parse(localStorage.getItem('person_details')) || [];
        var details = {
            name: $("#name").val(),
            age: $("#age").val(),
            salary: $("#salary").val(),
            email: $("#email").val()
        }
        arr.push(details);
        localStorage.setItem('person_details', JSON.stringify(arr));
    };
    $("#save").on("click", saveDetails);
    
     var removeDetails = function(e) {
        var arr = JSON.parse(localStorage.getItem('person_details')) || [];
        var mark_for_deletion= $(e.target).data('index');

        _.each(arr,function(item,index){
        	if(index == indemark_for_deletion){
        		 delete item;
        	}

        });


       
        localStorage.setItem('person_details', JSON.stringify(arr));
    };

     $("#delete").on("click", removeDetails);
  


});