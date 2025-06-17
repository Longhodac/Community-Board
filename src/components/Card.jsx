const Card = ({data}) => {
    
    const handleViewMenu = () => {
        window.open(data.menu, '_blank');
    };
    
    return(
        <div className='food-truck-card'>
            <div className='card-image'>
                <img
                    src={data.image}
                    alt={data.name}
                />
            </div>

            <div className='card-content'>
                <h3 className='card-title'>
                {data.name}
                </h3>
                <p className='card-cuisine'>
                    {data.description}
                </p>

                <button
                    onClick={handleViewMenu}
                    className='view-menu-btn'
                    >
                        View Menu
                    </button>
            </div>
        </div>
    );
}

export default Card;