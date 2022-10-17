import Router from "./router.mjs";

export default class Thumbnail {
  constructor(props) {
    this.props = props;
    document.addEventListener('click', (e) => (e.target && e.target.classList.contains("btn-link")) && this.onLinkClicked(e));
  }

  onLinkClicked(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const {title, link} = e.target.dataset;
    Router.instance.pushHistory({title, link});
  }

  render() {
    return `
      <div class="col-lg-3 col-md-5 col-sm-12  m-2"> 
        <div class="card text-center p-1">
          <img src="${this.props.srcThumbnail}" class="card-img-top" alt="">
          <div class="card-body">
            <h3 class="card-title">${this.props.title}</h3>
            <p class="card-text lead h6">${this.props.descriereScurta}</p>
            <button data-title="${this.props.title}" data-link="/single-photo?id=${this.props.id}" class="btn btn-warning btn-link" role="button">check it out!</button>
          </div>
        </div>
      </div>
    `;
  }
}








/*
<div class="col-lg-3 col-md-5 col-sm-12  m-2"> 
...
</div>
*/


/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/


/* sta
<div class="img-thumbnail">
                <img src="${this.props.srcThumbnail}" class="img-fluid" alt="">
                <div class="caption">
                    <h3>${this.props.titlu}</h3>
                    <p>${this.props.descriereScurta}</p>
                    <a href="/single-photo?id=${this.props.id}" target="_blank" class="btn btn-primary" role="button">check it out!</a>
                </div>
            </div>
*/

/*
{
        "id":1,
        "srcThumbnail": "Media/copac.jpg",
        "srcImage": "Media/shark.jpg",
        "titlu": "Fotografie cu un copac",
        "descriereScurta": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, corporis!",
        "descriereLunga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsa nulla vero esse error facere aliquam iste minus amet dolorum, soluta delectus deleniti corporis sit minima voluptas rerum obcaecati, odio totam doloremque iure! Delectus, eius."
    },
*/