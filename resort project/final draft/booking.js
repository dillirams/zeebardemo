document.getElementById('bookingForm').addEventListener('input', function () {
    const maleGuests = parseInt(document.getElementById('maleGuests').value) || 0;
    const femaleGuests = parseInt(document.getElementById('femaleGuests').value) || 0;
    const childGuests = parseInt(document.getElementById('childGuests').value) || 0;

    const totalGuests = maleGuests + femaleGuests + childGuests;
    document.getElementById('totalGuests').innerText = totalGuests;
});
function updateNumberOfRooms() {
    var roomType = document.getElementById("roomType").value;
    var maxRooms;

    switch (roomType) {
        case "single":
        case "twin":
        case "deluxe":
            maxRooms = 4;
            break;
        case "suite":
            maxRooms = 2;
            break;
        default:
            maxRooms = 0;
    }

    var numberOfRoomsSelect = document.getElementById("numberOfRooms");
    numberOfRoomsSelect.innerHTML = "";

    for (var i = 0; i <= maxRooms; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        numberOfRoomsSelect.add(option);
    }
}