import Thumbnail from "./thumbnail.mjs";

export default class PhotoGrid {
    constructor(data) {
        this.data = data;
        this.thumbnails = [];
        this._nume = "";
    }
    get thumbnailMarkup() {
        let thumbnailsHTML = "";
        this.thumbnails.forEach(thumbnail => thumbnailsHTML += thumbnail.render());
        return thumbnailsHTML;
    }
    componentWillRender() {
        if(this.thumbnails.length > 0) {
            return;
        }
        this.data.forEach(thumbnail => this.thumbnails.push(new Thumbnail(thumbnail)));
    }
    render() { 
        this.componentWillRender();
        return `
            <div class="container text-center">
                <div class="row justify-content-between">
                    ${this.thumbnailMarkup}
                </div>
            </div>
        `;
    }
}




/*p-4 20:10
<div class="container">
                <div class="col-md-4 col-xs-6 m-2">
                    ${this.thumbnailMarkup}
                </div>
            </div>


*/