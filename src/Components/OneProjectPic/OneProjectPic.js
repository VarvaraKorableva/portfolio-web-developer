function OneProjectPic({onCardClick, item}) {

    function handleClick() {
        onCardClick(item)
    }
    return(
        <>
        <img onClick={handleClick} src={item.pic} className='project__carusel-pic' alt='NicePic from my project'></img>
        </>
    )
}

export default OneProjectPic;