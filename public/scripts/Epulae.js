$(document.ready(
    
    downloadFoodItems();
    
));
    
    
function downloadFoodItems() {
    
    $.get( "localhost:1020/downloadFoodItems", function( data ) {
        var FoodItems = data;
        
        var FoodCardClone = $('.food-card').clone();
        
        
        for(var i = 0; i < FoodItems.length; i++){
                FoodCardClone.find('.food-title').text(FoodItems[i]['food title']);
                FoodCardClone.find('.food-category').text(FoodItems[i]['food category']);
                FoodCardClone.find('.food-image').text(FoodItems[i]['food image']);
                FoodCardClone.find('.expiration-date').text(FoodItems[i]['expiration date']);
                FoodCardClone.find('.days-remaining').text(FoodItems[i]['days remaining']);
            
                $('food-card-container').append(FoodCardClone.clone());
        }
    });
}

function addFoodItem() {
    $.post( "localhost:1020/addFoodItem", function( data ) {
        swal({
            title: "Food Item Added!", 
            text: "Here's my error message!",
            type: "error",
            confirmButtonText: "Cool" });
        });
    });
}

function deleteFoodItem() {
    
    var $this = $(this);
    
    var foodID = $this.data('food id');
    $.post( "localhost:1020/deleteFoodItem",
    foodID,
    function( data ) {
        swal({   title: "Are you sure?",   
        text: "You will not be able to recover this imaginary file!",   
        type: "warning",   
        showCancelButton: true,   
        confirmButtonColor: "#DD6B55",   
        confirmButtonText: "Yes, delete it!",   
        closeOnConfirm: false }, 
        function(){   
            swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
        });
    });
}

function editFoodItem() {
    $.post( "localhost:1020/editFoodItem", function( data ) {
        $( ".result" ).html( data );
    });
}

function updateProgressBar() {
    
}

function options() {
    
}

