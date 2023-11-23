import React from 'react'

function Dummy() {
  return (
    <div>
        <nav className="bg-purple-500 flex justify-between p-4 text-white">
        <img
          className="h-12 mr-2"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        ></img>
        <ul className="flex justify-between">
          <li className="m-2 cursor-pointer">Home</li>
          <li className="m-2 cursor-pointer">About</li>
          <li className="m-2 cursor-pointer">Catalogue</li>
          <li className="m-2 cursor-pointer">About Us</li>
          <li className="m-2 cursor-pointer">Services</li>
        </ul>
      </nav>
      <main className="bg-fuchsia-100 flex justify-around">
        <div className="main py-40 pl-9">
          <div className="text-6xl">The best phones in the town!</div>
          <p className="py-3 w-1/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <div className="my-4">
              <button className="bg-purple-700 text-white p-4 m-2 rounded-full shadow-2xl hover:bg-white hover:text-black">Get Quote</button>
              <button className="bg-purple-700 text-white p-4 m-2 rounded-full shadow-2xl  hover:bg-white hover:text-black">Buy Now</button>
            </div>
          </p>
        </div>
        <div className="flex items-center">
          <img className="h-80" src="../../assets/images/profile-pic.png"></img>
        </div>
      </main>
    </div>
  )
}

export default Dummy