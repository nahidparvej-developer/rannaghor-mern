import React, { useEffect, useState } from 'react'

const Menu = () => {

  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState('all');
  const [sortOption, setSortOption] = useState('default');

  // Loading data 

  useEffect(() => {
    // fetch data from back end 
    const fetchData = async () => {
      try {
        const response = await fetch('/menu.json');
        const data = await response.json();
        // console.log(data)
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log('Error Fetching data', error)
      }

    };

    // call the funtion 
    fetchData();
  }, []);

  //filtering data based on category 

  const filteredByItems = (category) => {
    const filtred = category === 'all' ? menu : menu.filter((item) => item.category === category);

    setFilteredItems(filtred);
    setSelectedCatagory(category);
  };

// Show All data 
 const showAll = () => {
  setFilteredItems(menu);
  setSelectedCatagory('all');
 }

// sorting A-Z ,Z-A section
const handleSortChanged = (option) => {
  setSortOption(option);

  let sortedItems =[...filteredItems];

  // logic
  switch(option) {
    case "A-Z":
      sortedItems.sort((a, b) => a.name.localeCompare(b.name))
      // code block
      break;
    case 'Z-A':
      sortedItems.sort((a, b) => b.name.localeCompare(a.name))
      // code block
      break;
    default:
      // code block
  }
}

  return (
    <div>
      {/* menu banner  */}

      <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% max-w-screen-2xl conainer lg:mx-auto lg:px-16 px-6'>
        <div className='py-48 flex md:flex-row justify-center items-center gap-8'>

          {/* text */}
          <div className='text-center space-y-7 px-4'>
            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'> Dive into Delights Of Delectable <span className='text-yellow-500'>Food</span></h2>
            <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='btn text-white bg-yellow-500 px-8 py-3 font-semibold rounded-full'>Order Now</button>
          </div>

        </div>
      </div>
      {/* menu shop section */}
      <div>

      </div>
    </div>
  )
}

export default Menu
