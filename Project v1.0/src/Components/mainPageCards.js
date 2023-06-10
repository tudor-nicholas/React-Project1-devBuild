
const Cards = () => {
    return (
    <div className='cards-container'>
        <h1 id='h1-title-text'>We work with some of the best companies in the bussiness!</h1>
        <div className="custom-cards">
            <div className="card custom-card1">
                <h1 className="card-title">Burberry</h1>
                <img src={require('../assets/suit3.jpg')} className="card-img" alt='img'/>
                <h1 className="card-description">Burberry, the epitome of luxury, offers timeless elegance and exquisite craftsmanship. 
                With its iconic check pattern and sophisticated designs, Burberry sets the standard for style and sophistication. From fashion 
                to accessories, each piece exudes refinement and quality. Indulge in the allure of Burberry and embrace a world of unparalleled 
                luxury.</h1>
            </div>
            <div className="card custom-card2">
                <h1 className="card-title">Dolce & Gabbana</h1>
                <img src={require('../assets/suit6.jpg')} className="card-img" alt='img'/>
                <h1 className="card-description">Dolce & Gabbana, the pinnacle of luxury fashion, embodies opulence and glamour. Renowned for their 
                bold designs and impeccable Italian craftsmanship, Dolce & Gabbana showcases elegance and sophistication. From haute couture to 
                fragrances, each creation reflects their signature style. Experience the allure of Dolce & Gabbana and indulge in a world of 
                exquisite luxury and timeless beauty.</h1>
            </div>
            <div className="card custom-card3">
                <h1 className="card-title">Brioni</h1>
                <img src={require('../assets/suit5.jpg')} className="card-img" alt='img'/>
                <h1 className="card-description">Brioni, the epitome of sartorial excellence, embodies unparalleled craftsmanship and refinement. 
                With a rich heritage dating back decades, Brioni continues to redefine luxury menswear. Impeccably tailored suits, exquisite 
                fabrics, and attention to detail set Brioni apart. Experience the essence of Italian elegance and sophistication with Brioni's 
                timeless designs that exude confidence and style.</h1>
            </div>
        </div>
    </div>
    );
};

export default Cards;