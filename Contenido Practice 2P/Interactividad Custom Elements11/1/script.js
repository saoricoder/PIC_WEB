class LikeButton extends HTMLElement{
 /*   constructor() {
        super();
        this._count = 0;
        this.addEventListener('click', this._toggleLike.bind(this));
    }

    connectedCallback() {
        this.innerHTML = `<div class="like-button">Like</div>`;
    }
*/
    toggleLike(){
        this.classList.toggle('liked');
        const count = this.getAttribute('data-like-count') ||0;
        this.setAttribute('data-like-count',parseInt(count)+1);
    }
}


customElements.define('like-button',LikeButton);
