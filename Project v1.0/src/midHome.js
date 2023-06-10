import './Styles/App.css';
import './Styles/homeReview.css';
import './Styles/cards.css';
import './Styles/footer.css';
import HomeReview from './Components/mainPageReview';
import Cards from './Components/mainPageCards';
import Footer from './Components/footer';

function MidHome() {
  return (
    <div className='mid-home'>
        <Cards />
        <HomeReview />
        <Footer />
    </div>
  );
}

export default MidHome;
