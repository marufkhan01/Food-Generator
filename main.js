

var food = 
  [
   {name : "Palak Ponir", veg: true },
   {name : "Spenat Dal", veg: true},
   {name : "Mixed Veg", veg: true},
   {name : "Biff Curry", veg: false},
   {name : "Chicken Curry", veg: false},
   {name : "Dal Makhani", veg: true}
  
  ];

food[0].name;

function meal(foods){
      
      var random = Math.floor(Math.random() * (foods.length-1));
      
      var foodObject = foods[random];

      document.getElementById("que").innerHTML=foodObject.name;
      return foodObject;
     
      }

function isVeg(test){

	if(test.veg===true){
		
      document.getElementById("as").innerHTML=("Veg");
      
		}

	else{
		
      document.getElementById("as").innerHTML=("Not Veg");

		}

}
   

document.getElementById("btn").addEventListener("click", function(){
 foodObject = meal(food); 
 isVeg(foodObject);
});



   
