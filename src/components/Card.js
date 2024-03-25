import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
 function Card() {
  return (
    <section className='card'>
      <img src='https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0753b86f5dc406888d64953a5dffea4_9366/racer-tr23-shoes.jpg' alt='shoes' className='card-img'/>
      <div className='card-details'>
        <h3 className='card-title'>Shoe</h3>
        <section className='card-reviews'>
        <AiFillStar className='ratings-star'/> 
        <AiFillStar className='ratings-star'/>
        <AiFillStar className='ratings-star'/>
        <span className='total-reviews'>4</span>
        </section>
         <section className='card-price'>
          <div className='price'>
            <del>$300</del>200
          </div>
          <div className='bag'>
           <BsFillBagHeartFill className='bag-icon'/>
          </div>
         </section>
      </div>
    </section> 
  )
}
export default Card
