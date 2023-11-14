import React, { Component } from "react";
import CartTotal from "./CartTotal";
import Products from "./Products";


class OnlineBook extends Component {
  state = {
    products: [
      { id: 1, name: "Java Full Stack developer" , url:"https://www.amazon.com/Java-Complete-Reference-Herbert-Schildt/dp/1260463419/ref=asc_df_1260463419/?tag=hyprod-20&linkCode=df0&hvadid=509098801384&hvpos=&hvnetw=g&hvrand=2517922249642452778&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031528&hvtargid=pla-1252801362708&psc=1&mcid=ecb8719c6a5e3dfd87383f155f24731f&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buNR8gHUVUtifCG9ponCKoyhQHj642EHJDi1qYmWelIKlibNUq_ULGEaAjUjEALw_wcB" },
      { id: 2, name: "Spring Framework in depth" , url:"https://www.amazon.com/Java-Complete-Reference-Herbert-Schildt/dp/1260463419/ref=asc_df_1260463419/?tag=hyprod-20&linkCode=df0&hvadid=509098801384&hvpos=&hvnetw=g&hvrand=2517922249642452778&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031528&hvtargid=pla-1252801362708&psc=1&mcid=ecb8719c6a5e3dfd87383f155f24731f&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buNR8gHUVUtifCG9ponCKoyhQHj642EHJDi1qYmWelIKlibNUq_ULGEaAjUjEALw_wcB"},
      { id: 3, name: "Web dev fundamentals" , url:"https://www.amazon.com/HTML-JavaScript-Sams-Teach-Yourself/dp/0672338084/ref=asc_df_0672338084/?tag=hyprod-20&linkCode=df0&hvadid=312128454859&hvpos=&hvnetw=g&hvrand=7011953317684095740&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031528&hvtargid=pla-586990798499&psc=1&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buPzZG9_8Y_PyhuqQBjBq6w9q9WNr-CDZjQ9x65I-YTQ0Y-EWA7LWYcaAvwrEALw_wcB"},
      { id: 4, name: "React Js" , url: "https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/ref=asc_df_172004399X/?tag=hyprod-20&linkCode=df0&hvadid=312128454859&hvpos=&hvnetw=g&hvrand=2619679084546303482&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031528&hvtargid=pla-561027834376&psc=1&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buPVNDX6UA2BhAQJ7TiUylS3ZrT0EqE-P3pUcoPlNtQR5T7RzQexgTMaAncLEALw_wcB"}
    ]
  };

  render() {
    return (
      <div className="jumbotron m-4">
        <h1>Online Books</h1>
        <main className="container m-2">
          <Products
            products={this.state.products}
          />
        </main>
      </div>
    );
  }


}

export default OnlineBook;