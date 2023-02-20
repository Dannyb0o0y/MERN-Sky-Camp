const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'SilverPackage' },
    { name: 'GoldPackage' },
    { name: 'PlatinumPackage' },
    
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'SilverPackage 7 days',
      description:
      'This is the end of the season sale in which the dates are from 25 February - 2 March and accomodation in the shared big apartment or luxury rooms including unlimited equipment hire and all day meals that you would require for a comfortable stay throughout the period. Hurry and save !!!',
      category: categories[0]._id,
      price: 1000.00,
      quantity: 5
    },

    {
      name: 'SilverPackage 5 days',
      description:
      'This is the end of the season sale in which the dates are from 25 February - 2 March and accomodation in the shared big apartment or luxury rooms including unlimited equipment hire and all day meals that you would require for a comfortable stay throughout the period. Hurry and save !!!',
      image: 'APP_1735.jpg',
      category: categories[0]._id,
      price: 900.00,
      quantity: 3
    },
    {
      name: 'GoldPackage 7 days',
      category: categories[1]._id,
      description:
      'This package includes accomodation in the shared big cabin within the camp up to 10 people with all the facilities including unlimited equipment hire that you would require for a comfortable stay throughout the period. Date available (17 March - 24 March). Check-in time: 1:00pm, Check-out time: 12:00 noon.',
      image: 'image_kitchenLuxory.jpeg',
      price: 1500.00,
      quantity: 5
    },
    {
      name: 'GoldPackage 5 days',
      category: categories[1]._id,
      description:
      'This package includes accomodation in the shared big cabin within the camp up to 10 people with all the facilities including unlimited equipment hire that you would require for a comfortable stay throughout the period. Date available (17 March - 24 March). Check-in time: 1:00pm, Check-out time: 12:00 noon.',
      image: '22813.jpg',
      price: 1200.00,
      quantity: 5
    },
    {
      name: 'PlatinumPackage 7 days',
      category: categories[2]._id,
      description:
      'This package includes accomodation in the luxury rooms and meals for the maximum of 10 people including children. Family is entitled to six hours unlimited equipment hire per day during the duration of stay.',
      image: 'Luxory1.jpg',
      price: 2200.00,
      quantity: 10
    },
    {
      name: 'PlatinumPackage 5 days',
      category: categories[2]._id,
      description:
      'This package includes accomodation in the luxury rooms and meals for the maximum of 10 people including children. Family is entitled to six hours unlimited equipment hire per day during the duration of stay.',
      image: 'image_arcade.jpeg',
      price: 1700.00,
      quantity: 10
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Victor',
    lastName: 'Pereira',
    email: 'victor5055@outlook.com',
    password: 'password62707',
     orders: [
       {
         products: [products[0]._id, products[0]._id, products[1]._id]
       }
     ]
  });

  await User.create({
    firstName: 'Daniel',
    lastName: 'Rasi',
    email: 'danial.rf1999@gmail.com',
    password: 'password62707'
  });

  console.log('users seeded');

  process.exit();
});