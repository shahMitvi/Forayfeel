const PageTitle = ({ image, title }) => {
    return (
        <>
            <div className='title-main'>
                <img src={image} />
                <p>{title}</p>
            </div>

        </>
    )
}
export default PageTitle