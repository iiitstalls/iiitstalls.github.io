const canteenName = "Devid's Bakery";
const timings = "6 PM - 2 AM" ;

const menuCategories = [
	{
		name: "Dosa Menu",
		items: [
			{ name: "Plain Dosa", price: 30, type: "Veg" },
			{ name: "Karam Dosa(Spicy)", price: 40, type: "Veg" },
			{ name: "Masala Dosa", price: 50, type: "Veg" },
			{ name: "Onion Dosa", price: 50, type: "Veg" },
			{ name: "Sweet Corn Dosa", price: 50, type: "Veg" },
			{ name: "Egg Dosa", price: 50, type: "Non-Veg" },
			{ name: "Double Egg Dosa", price: 60, type: "Non-Veg" },
			{ name: "Paneer Dosa", price: 60, type: "Veg" },
			{ name: "Extra Egg", price: 10, type: "Non-Veg" },
			{ name: "Extra Butter", price: 10, type: "Veg" },
			{ name: "Extra Cheese", price: 10, type: "Veg" }
		]
	},
	{
		name: "Maggi",
		items: [
			{ name: "Masala Maggi", price: 30, type: "Veg" },
			{ name: "Masala Maggi With Cheese", price: 40, type: "Veg" },
			{ name: "Extra Masala Maggi", price: 35, type: "Veg" },
			{ name: "Vegetable Maggi", price: 45, type: "Veg" },
			{ name: "Vegetable with Cheese", price: 55, type: "Veg" },
			{ name: "Paneer Maggi", price: 60, type: "Veg" },
			{ name: "Paneer with cheese Maggi", price: 70, type: "Veg" },
			{ name: "Sweet Corn Maggi", price: 50, type: "Veg" },
			{ name: "Sweet Corn With Cheese", price: 60, type: "Veg" },
			{ name: "Egg Maggi", price: 50, type: "Non-Veg" },
			{ name: "Egg With Cheese Maggi", price: 60, type: "Non-Veg" },
			{ name: "Double Egg Maggi", price: 60, type: "Non-Veg" },
			{ name: "Double Egg With Cheese Maggi", price: 70, type: "Non-Veg" },
			{ name: "Chicken Maggi", price: 70, type: "Non-Veg" },
			{ name: "Chicken Maggi with Cheese", price: 80, type: "Non-Veg" },
			{ name: "Extra Egg", price: 10, type: "Non-Veg" },
			{ name: "Extra Cheese", price: 10, type: "Veg" },
			{ name: "Extra Cheese Slice", price: 20, type: "Veg" },
			{ name: "Plain Fried Maggi", price: 50, type: "Veg" },
			{ name: "Vegetable Fried Maggi", price: 50, type: "Veg" },
			{ name: "Sweet Corn Fried Maggi", price: 60, type: "Veg" },
			{ name: "Paneer Fried Maggi", price: 60, type: "Veg" },
			{ name: "Egg Fried Maggi", price: 60, type: "Non-Veg" },
			{ name: "Double Egg Fried Maggi", price: 70, type: "Non-Veg" },
			{ name: "Chicken Fried Maggi", price: 70, type: "Non-Veg" },
			{ name: "Egg Chicken Fried Maggi", price: 80, type: "Non-Veg" },
			{ name: "Double Egg Chicken Fried Maggi", price: 90, type: "Non-Veg" }
		]
	},
	{
		name: "Party Specials",
		items: [
			{ name: "Brownie", price: 60, type: "Veg" },
			{ name: "Brownie with Vanilla", price: 70, type: "Veg" },
			{ name: "Brownie with Vanilla and Chocolate Sauce", price: 100, type: "Veg" },
			{ name: "Spl. Kaju Bread Omelette", price: 100, type: "Non-Veg" }
		]
	},
	{
		name: "Atta Wraps",
		items: [
			{ name: "Veg Wrap", price: 60, type: "Veg" },
			{ name: "Corn Wrap", price: 70, type: "Veg" },
			{ name: "Paneer Wrap", price: 70, type: "Veg" },
			{ name: "Egg Wrap", price: 70, type: "Non-Veg" },
			{ name: "Double Egg Wrap", price: 80, type: "Non-Veg" },
			{ name: "Egg Burji Wrap", price: 100, type: "Non-Veg" },
			{ name: "Chicken Wrap", price: 100, type: "Non-Veg" },
			{ name: "Egg Chicken Wrap", price: 110, type: "Non-Veg" }
		]
	},
	{
		name: "Sandwiches",
		items: [
			{ name: "Veg Sandwich", price: 50, type: "Veg" },
			{ name: "Veg Sandwich with Cheese", price: 60, type: "Veg" },
			{ name: "Green Chutney Sandwich", price: 60, type: "Veg" },
			{ name: "Green Chutney with Cheese Sandwich", price: 70, type: "Veg" },
			{ name: "Paneer Sandwich", price: 60, type: "Veg" },
			{ name: "Paneer Sandwich with Cheese", price: 70, type: "Veg" },
			{ name: "Aloo Sandwich", price: 60, type: "Veg" },
			{ name: "Aloo Sandwich with Cheese", price: 70, type: "Veg" },
			{ name: "Veg Club Sandwich", price: 60, type: "Veg" },
			{ name: "Veg Club Sandwich with Cheese", price: 70, type: "Veg" },
			{ name: "Cheese Sandwich", price: 40, type: "Veg" },
			{ name: "Sweet Corn Sandwich", price: 55, type: "Veg" },
			{ name: "Sweet Corn Sandwich with Cheese", price: 65, type: "Veg" },
			{ name: "Spinach Corn Sandwich", price: 60, type: "Veg" },
			{ name: "Spinach Corn Sandwich with Cheese", price: 70, type: "Veg" },
			{ name: "Palak Paneer Sandwich", price: 65, type: "Veg" },
			{ name: "Palak Paneer Sandwich with Cheese", price: 75, type: "Veg" },
			{ name: "Manchurian Sandwich", price: 65, type: "Veg" },
			{ name: "Manchurian Sandwich with Cheese", price: 75, type: "Veg" },
			{ name: "Chocolate Sandwich with Cheese", price: 80, type: "Veg" },
			{ name: "Chilli Paneer Sandwich", price: 80, type: "Veg" },
			{ name: "Egg Bhurji Sandwich", price: 60, type: "Non-Veg" },
			{ name: "Chicken Grill Sandwich", price: 70, type: "Non-Veg" },
			{ name: "Chicken Cheese Grill Sandwich", price: 80, type: "Non-Veg" },
			{ name: "Chicken Club Sandwich", price: 80, type: "Non-Veg" },
			{ name: "Chicken Tikka Sandwich", price: 80, type: "Non-Veg" },
			{ name: "Chicken Tikka Sandwich with Cheese", price: 90, type: "Non-Veg" },
			{ name: "Chicken 65 Sandwich", price: 90, type: "Non-Veg" },
			{ name: "Chicken Manchurian Sandwich", price: 90, type: "Non-Veg" },
			{ name: "Kadai Chicken Sandwich", price: 90, type: "Non-Veg" },
			{ name: "Chilli Chicken Sandwich", price: 90, type: "Non-Veg" },
			{ name: "Chicken Mayo Magic Sandwich", price: 90, type: "Non-Veg" },
			{ name: "Spicy Chicken Sandwich", price: 95, type: "Non-Veg" },
			{ name: "Masala Omelette", price: 30, type: "Non-Veg" },
			{ name: "Bread Omelette", price: 50, type: "Non-Veg" },
			{ name: "Kaju Bread Omelette", price: 100, type: "Non-Veg" }
		]
	},
	{
		name: "Miscellaneous",
		items: [
			{ name: "Sweet Corn Plain", price: 25, type: "Veg" },
			{ name: "Masala Sweet Corn", price: 30, type: "Veg" },
			{ name: "Butter Sweet Corn", price: 30, type: "Veg" },
			{ name: "Butter Masala Corn", price: 35, type: "Veg" },
			{ name: "French Fries", price: 60, type: "Veg" }
		]
	}
];
