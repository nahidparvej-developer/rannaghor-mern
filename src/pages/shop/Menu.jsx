import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from 'react-icons/fa'
const Menu = () => {

  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

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
    setCurrentPage(1)
  };

  // Show All data 
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCatagory('all');
    setCurrentPage(1)
  }

  // sorting A-Z ,Z-A section
  const handleSortChanged = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name))
        // code block
        break;
      case 'Z-A':
        sortedItems.sort((a, b) => b.name.localeCompare(a.name))
        // code block
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price)
        // code block
        break;
      case 'high-to-low':
        sortedItems.sort((a, b) => b.price - a.price)
        // code block
        break;
      default:
        // code block
        break
    }


    setFilteredItems(sortedItems)
    setCurrentPage(1)
  }

  // pagination logic

  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItme = indexOfLastItems - itemsPerPage;
  const currenItems = filteredItems.slice(indexOfFirstItme, indexOfLastItems);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
      <div className='max-w-screen-2xl conainer lg:mx-auto lg:px-16 px-6 my-20'>
        {/* filltering and sorting */}
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
          {/* all category btn */}
          <div className='flex flex-row justify-start md:items-center md:gap-8  gap-4 flex-wrap'>
            <button onClick={showAll} className={selectedCatagory === "all" ? "active" : ''}>All</button>
            <button onClick={() => filteredByItems('salad')} className={selectedCatagory === "salad" ? "active" : ''} >Salad</button>
            <button onClick={() => filteredByItems('pizza')} className={selectedCatagory === "pizza" ? "active" : ''}>Pizza</button>
            <button onClick={() => filteredByItems('soup')} className={selectedCatagory === "soup" ? "active" : ''}>Soups</button>
            <button onClick={() => filteredByItems('dessert')} className={selectedCatagory === "dessert" ? "active" : ''}>Dessert</button>
            <button onClick={() => filteredByItems('drinks')} className={selectedCatagory === "drinks" ? "active" : ''}>Drinks</button>
          </div>


          {/* sorting base filtering  */}
          <div className='flex justify-end rounded-sm mb-4'>
            <div className='bg-black'>
              <FaFilter className='h-4 w-4 text-white' />
            </div>

            {/* sorting option */}

            <select name='sort' id='sort'
              onChange={(e) => handleSortChanged(e.target.value)}
              value={sortOption}
              className='bg-black text-white px-2 py-1 rounded-sm'>

              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low-to-high</option>
              <option value="high-to-low">high-to-low</option>
            </select>

          </div>

        </div>
        {/* cards all */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14'>
          {
            currenItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))
          }
        </div>
      </div>
      {/* paginat section  */}
      <div className='flex justify-center my-8'>
        {
          Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-yellow-500' : 'bg-gray-300'}`} >
              {index + 1}

            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Menu
