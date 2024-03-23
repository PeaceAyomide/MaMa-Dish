import HarmBurgerImage from '../Dish/foodimg/HarmBurger.png';
import CheesePizzaImage from '../Dish/foodimg/Cheese Pizza.png';
import FriesChipsImage from '../Dish/foodimg/Fries Chips.png';
import MeatGrillsImage from '../Dish/foodimg/Meat Grills.png';
import JapaneseCuisineImage from '../Dish/foodimg/Japanese Cuisine.png';
import SandwichImage from '../Dish/foodimg/SandWich.png';


const data = {
   foodItems: [
        {
            id: "1",
            name: "Veggie Burger",
            price: 15000,
            image: HarmBurgerImage
        },
        {
            id: "2",
            name: "Pizza Cheese",
            price: 25000,
            image: CheesePizzaImage
        },
        {
            id: "3",
            name: "Potato Fries",
            price: 8000,
            image: FriesChipsImage
        },
        {
            id: "4",
            name: "Berbecue grill",
            price: 30000,
            image: MeatGrillsImage
        },
        {
          id: "5",
            name: "Japanese Cuisine",
            price: 76000,
            image:  JapaneseCuisineImage
        },
        {
            id: "6",
            name: "SandWich",
            price: 9000,
            image: SandwichImage
        }
    ]
};

export default data;