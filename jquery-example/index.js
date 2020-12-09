// global variables
var menuItems = [];

// events

$("#add_new_button").click(function(){
    $("#new_menu_item_form").css("display", "block");
});
$("#new_menu_item_close_button").click(function () {
    $("#new_menu_item_form").css("display", "none");
});
$("#new_menu_item_add_button").click(function () {
    var name = $("#new_menu_item_form_name").val();
    var price = $("#new_menu_item_form_price").val();

    if(name.length == 0){
        alert("Name is required!");
        return;
    }
    
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0){
        alert("Price should be a positive number!");
        return;
    }

    menuItems.push({
        productName: name,
        productPrice: price
    });

    $("#new_menu_item_form_name").val("");
    $("#new_menu_item_form_price").val("");

    populateTableFromMenuItems();
});

function populateTableFromMenuItems(){
    $("#menu_items_table").html("");

    var template =
    "<tr>"+
    "    <td>"+
    "        <span>{product_name}</span><br>"+
    "        <span>{product_price}</span>"+
    "    </td>"+
    "    <td>"+
    "        <button onclick='deleteItem({product_idx})' style='color: red'>DELETE</button>"+
    "    </td>"+
    "</tr>";

    if(menuItems.length == 0){
        return;
    }

    for(var i=0; i<menuItems.length; i++){
        var row = template;
        row = row.replace("{product_name}", menuItems[i].productName);
        row = row.replace("{product_price}", menuItems[i].productPrice);
        row = row.replace("{product_idx}", i);
        $("#menu_items_table").append(row);
    }
}

function deleteItem(idx){
    menuItems.splice(idx, 1);
    populateTableFromMenuItems();
}