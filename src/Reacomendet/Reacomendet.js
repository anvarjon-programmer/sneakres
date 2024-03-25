import Button from '../components/Button'
import './Reacomendet.css'
 function Reacomendet({handleClick}) {
  return <>
    <div>
      <h2 className='recomended-title'>Reacomended</h2>
      <div className='reacomendet-flex'>
      <Button onClickHandler={handleClick} value='Nike' title='All Products'/>
        <Button onClickHandler={handleClick} value='Nike' title='Nike'/>
        <Button onClickHandler={handleClick} value='Adidas' title='Adidas'/>
        <Button onClickHandler={handleClick} value='Puma' title='Puma'/>
        <Button onClickHandler={handleClick} value='Vans' title='Vans'/>
      </div>
    </div>
  </>
}
export default Reacomendet
