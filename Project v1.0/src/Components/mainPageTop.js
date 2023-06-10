
const AppTopComponent = () => {
    return (
        <div className='top-background'>
            <h1 className='custom-title'>El Alessandro, the best two piece suits on the continent!</h1>
            <a href='/shop' className='custom-explore-btn'>Explore</a>
            <img src={require('../assets/suitBG.png')} id='monaco' alt='img'/>
        </div>
    );
};

export default AppTopComponent;