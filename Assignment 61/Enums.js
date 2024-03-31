var Vehicles;
(function (Vehicles) {
    Vehicles["cars"] = "Audi";
    Vehicles["motorbikes"] = "Yamaha";
    Vehicles[Vehicles["Trucks"] = 8] = "Trucks";
})(Vehicles || (Vehicles = {}));
var myVehicle = Vehicles.cars;
console.log(myVehicle);
