@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
}

.home {
  height: 100%;
  padding-top: 35vh;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(to right, rgb(39, 39, 39,0.9), rgb(39, 39, 39,0.3));
}

.home_name {
  font-size: 5rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #fff;
}

.home_name--last {
  color: #00C3FF; //bleu ciel
  font-weight: 700; // extra Bold
}

.menubtn {
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;
  height: 20px;
  width: 28px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.menubtn_burger {
  position: absolute;
  right: 0;
  top: 0.5rem;
  width: 28px;
  height: 3px;
  background: #fff;
  transition: all 0.5s ease-in-out;
}

.menubtn_burger::before {
  content: '';
  position: absolute;
  top: -8px;
  width: 28px;
  height: 3px;
  background: #fff;
  transition: all 0.5s ease-in-out;
}

.menubtn_burger::after {
  content: '';
  position: absolute;
  top: 8px;
  width: 20px;
  height: 3px;
  background: #fff;
  transition: all 0.5s ease-in-out;
}

.menubtn_burger.open {
  transform: rotate(720deg);
  background: transparent;
}

.menubtn_burger.open::before {
  transform: rotate(45deg) translate(5px, 8px);
}

.menubtn_burger.open::after {
  width: 28px;
  transform: rotate(-45deg) translate(3px, -7px);
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  opacity: 1;
  visibility: hidden;
  will-change: background, opacity;
    background-color: rgba(39, 39, 39,0.10);
  box-shadow: 0 -3px 7px 0 rgb(39 39 39 / 6%), 0 4px 10px 0 rgb(39 39 39 /6%) ;
  backdrop-filter: blur(7px);
}

.nav.open {
  visibility: visible;
}

.nav .menu-nav {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background: #272727;
  list-style-type: none;
  padding-right: 1rem;
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
}

.nav .menu-nav.open {
          transform: translateY(0);
}

.nav .menu-nav_item {
          transform: translateX(100vw);
  transition: all 0.5s ease-in-out;
}

.nav .menu-nav_item.open {
          transform: translateX(0);
}

.nav .menu-nav_item.active > a {
  color: #ff8000;
}

.nav .menu-nav_link {
  display: inline-block;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
}

.nav .menu-nav_link:hover {
  color: #00C3FF;
}

.menu-nav_item:nth-child(1) {
          transition-delay: 0.25s;
}

.menu-nav_item:nth-child(2) {
          transition-delay: 0.35s;
}

.menu-nav_item:nth-child(3) {
          transition-delay: 0.45s;
}

.menu-nav_item:nth-child(4) {
          transition-delay: 0.55s;
}

.apropos {
  padding-bottom: 2rem;
}

.apropos_bio-image {
  height: 50vh;
  width: 100%;
  display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
}

.apropos_bio-image p {
          margin-block-end: 2rem;
  padding: 0.5rem;
  margin: 10px 0;

}

.apropos_bio {
  width: 80%;
  text-align: center;
}

.apropos_bio .text-secondaire {
  padding-bottom: 1rem;
}

.apropos .parcours {
  width: 90vw;
  margin: 5rem auto 0 auto;
  display: grid;
      grid-template-columns: 1fr;
  grid-gap: 2rem;
}

.apropos .parcours_parcour {
  background: rgba(40, 33, 33, 0.685);
  padding: 0.5rem;
  border-bottom: 5px solid #00C3FF;
}

.apropos .parcours_parcour h2, .apropos .parcours_parcour h3 {
  margin: 0.5rem 0;
  color: #ff8000;
}

.apropos .parcours_parcour h6 {
  margin: 0.3rem 0;
  font-size: 1.2em;
}

.apropos .social-icon {
  display: flex;
          flex-direction: column;
}

.apropos .footer {
          transform: rotate(90deg) translate(-3rem, -5rem);

}

.projets {
  padding-bottom: 2rem;
}
.container {
  height: 20vh;
}

.projets_bio-image {
  height: 30vh;
  width: 100%;
  background: linear-gradient(to right, rgb(39, 39, 39,0.9), rgb(39, 39, 39,0.3));
  display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
}

.projets_bio-image .text-secondaire {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.projets_items {
  width: 100vw;
  margin: 2rem auto 0 auto;
  display: -ms-grid;
  display: grid;
      grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}

.projets_item {
  position: relative;
  border-bottom: 5px solid #00C3FF;
  overflow: hidden;
  cursor: pointer;
}

.projets_item img {
  width: 100%;
}

.projets_item::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 195, 255, 0.5);
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.projets_item:hover::after {
  top: 0;
  opacity: 0.9;
}

.projets_item:hover .projets_btn {
  opacity: 1;
}

.projets_btns {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: grid;
      grid-template-columns: 1fr;
          align-items: center;
  text-align: center;
}

.projets_btn {
  opacity: 0;
  color: #fff;
  transition: all 0.5s ease-in-out;
}

.projets_btn:hover {
  color: #ff8000;
}

.projets .social-icon {
  display: flex;
          flex-direction: column;
}

.projets .footer {
          transform: rotate(90deg) translate(-3rem, -5rem);
}

.contact {
  height: 100%;
  padding-top: 40vh;
  padding-left: 2rem;
  overflow: hidden;
  display: flex;
          flex-direction: column;
          align-items: center;
  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url("/src/Img/croatie_plage.png");
  background-size: cover;
}

.contact h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.contact_liste {
  display: grid;
      grid-template-columns: 1fr;
  grid-gap: 2rem;
  font-size: 1.5rem;
}

.contact .social_icon {
  position: initial;
  margin-top: 2rem;
}


@media screen and (min-width: 768px) {
  .menubtn {
    visibility: hidden;
  }
  .nav {
    visibility: visible;
  }
  .nav .menu-nav {
    display: block;
            transform: translateY(0);
    height: 100%;
    background: transparent;
    text-align: right;
  }
  .nav .menu-nav_item {
    display: inline;
    padding-right: 1.5rem;
  }
  .nav .menu-nav_link {
    font-size: 1.2rem;
  }
  .apropos_bio-image {
    font-size: 1.2rem;
  }
  .projets_bio-image {
    height: 40vh;
  }
  .projets_items {
        grid-template-columns: repeat(2, 1fr);
  }
  .projets .text-secondaire {
    font-size: 3rem;
  }
  .contact_liste {
        grid-template-columns: repeat(2, 1fr);
  }
  
}

@media screen and (min-width: 1024px) {
  .projets_items {
        grid-template-columns: repeat(3, 1fr);
  }
  .contact_liste {
        grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1600px) {
  .projets_bio-image {
    height: 50vh;
  }
}

body {
  background: rgba(39, 39, 39, 0.50);
  color: #fff;
  height: 100vh;
  font-family: 'Open-sans', Consolas, monospace, sans-serif;
  line-height: 1;
}

h1, h2, h3 {
  font-weight: 400;
}

a {
  color: #fff;
  text-decoration: none;
}

.text-secondaire {
  color: #00C3FF;
}

header {
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: 1rem;
}

main {
  height: 100%;
  width: 100%;
}

main .social_icon {
  position: fixed;
  bottom: 3.5rem;
  left: 1rem;
  backdrop-filter: blur(7px);

}

main .social_icon a {
  padding: 0.4rem;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

main .social_icon a:hover {
  color: #ff8000;
}

footer {
  font-size: 1rem;
  position: fixed;
  bottom: 0.4rem;
  right: 1rem;
  text-align: right;
  padding: 1rem;
  color: #fff;
  backdrop-filter: blur(7px);
}
