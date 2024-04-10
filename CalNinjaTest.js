// return nutrition based on text input

var query = '3lb carrots and a chicken sandwich'
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// return info scanned from image of food/bev text
// could be menus or recipes

var formData = new FormData();
formData.append('file', $('#imagefile')[0].files[0]);
$.ajax({
    method: 'POST',
    url: 'https://api.calorieninjas.com/v1/imagetextnutrition',
    data: formData,
    enctype: 'multipart/form-data',
    processData: false,
    contentType: false, 
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText);
    }
});

// additional option to get recipes 
var query = 'mushroom risotto'
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/recipe?query=' + query,
    headers: { 'X-Api-Key': 'API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});