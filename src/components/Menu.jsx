function Menu({title, des, price, src}) {
    return  <div>
        <div className="ml-[100px] mt-10 flex">
    <img className="w-[170px] h-[170px]" src={src} alt="" />
   <div>
    <p className="ml-3 font-bold"> {title}</p>
    <p className="font-bold ml-3">{price}</p>
    <p className="ml-3">{des}</p>
    <button className="bg-orange-400 rounded-[10px] mt-3 ml-3">Order now</button>
    </div>
    </div>
    </div>
}

export default Menu 